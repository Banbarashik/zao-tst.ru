"use client";

import russiaMap from "@/public/russia.json";
import { useMemo, useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { geoAzimuthalEqualArea } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  createCoordinates,
  createZoomConfig,
  createTranslateExtent,
  type Coordinates,
} from "@vnedyalk0v/react19-simple-maps";
import type { City, Region } from "@/types/map";
import {
  TIER_ZOOM_THRESHOLDS,
  TIER_MARKER_STYLE,
  ZOOM_CONFIG,
} from "@/types/map";

interface RussiaMapProps {
  cities: City[];
  regions: Region[];
}

// ── Геометрия карты ──────────────────────────────────────────────────────
//
// Внутренняя система координат SVG. Соотношение сторон 1150:627 ≈ 1.8341,
// что почти точно совпадает с реальным соотношением сторон территории
// России в этой проекции после удаления островов (1051.6 / 574.2 ≈ 1.8315,
// разница <0.2%). Именно поэтому viewBox подобран под ЭТИ числа — это
// единственный способ показать всю территорию без обрезки и без пустых
// полей (letterboxing) одновременно.
//
// ВАЖНО: эти значения зависят от конкретного содержимого russia.json.
// После удаления островов с карты minY сдвинулся (-264.26 → -237.83),
// то есть высота карты уменьшилась, а ширина осталась прежней — поэтому
// поменялось соотношение сторон (было 1100:629 / 1.7488). Если геометрия
// файла снова изменится (добавятся/уберутся регионы или острова) — весь
// блок ниже нужно пересчитать заново.
const MAP_WIDTH = 1150;
const MAP_HEIGHT = 627;

// rotate/scale подобраны ранее (не меняются здесь), translate — вычислен
// так, чтобы центр bbox карты совпадал с центром viewBox 1150x627.
//
// Как это было посчитано (нужно повторить при следующем изменении
// rotate/scale/MAP_WIDTH/MAP_HEIGHT/содержимого russia.json):
//   1. path.bounds() по всем geometries russia.json под rotate/scale
//      с translate([0,0]) → bbox в "чистых" координатах проекции
//      (сейчас: X=[-614.75, 436.85], Y=[-237.83, 336.34])
//   2. mapCenter = ((minX+maxX)/2, (minY+maxY)/2)
//   3. translate = (MAP_WIDTH/2 - mapCenter.x, MAP_HEIGHT/2 - mapCenter.y)
const projection = geoAzimuthalEqualArea()
  .rotate([-106, -68.5, 0])
  .scale(866)
  .translate([663.95, 264.25]);

// Границы панорамирования — точно по контуру карты (0% допуска), в тех же
// пиксельных координатах viewBox, что и projection.translate выше.
// Верифицировано на актуальном russia.json через path.bounds() по всем
// геометриям (не расчёт "на бумаге") — bbox: X=[49.2, 1100.8], Y=[26.4, 600.6].
const PAN_EXTENT = createTranslateExtent(
  createCoordinates(49, 26),
  createCoordinates(1101, 601),
);

export default function RussiaMap({ cities, regions }: RussiaMapProps) {
  const [zoom, setZoom] = useState(ZOOM_CONFIG.min);
  const [center, setCenter] = useState<Coordinates>(
    createCoordinates(92, 66), // примерный центр РФ в GPS — используется ZoomableGroup для позиционирования при панорамировании
  );
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Быстрый доступ к Region по id (= geo.properties.iso_3166_2) при клике на полигон
  const regionsById = useMemo(() => {
    return new Map(regions.map((region) => [region.id, region]));
  }, [regions]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!popupRef.current || !target) {
        return;
      }

      if (!popupRef.current.contains(target)) {
        setActiveRegion(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  // Фильтрация городов по текущему уровню zoom — пересчитывается только при смене zoom
  const visibleCities = useMemo(() => {
    return cities.filter((city) => zoom >= TIER_ZOOM_THRESHOLDS[city.tier]);
  }, [cities, zoom]);

  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(ZOOM_CONFIG.max, z + ZOOM_CONFIG.step));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(ZOOM_CONFIG.min, z - ZOOM_CONFIG.step));
  }, []);

  const handleMoveEnd = useCallback(
    (position: { coordinates: Coordinates; zoom: number }) => {
      setCenter(position.coordinates);
      setZoom(position.zoom);
    },
    [],
  );

  return (
    <div className="@container relative h-full w-full border p-2">
      {/* Кнопки зума — колесо мыши/pinch обрабатывается ZoomableGroup автоматически */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          aria-label="Приблизить карту"
          className="flex h-9 w-9 items-center justify-center rounded border bg-white shadow hover:bg-gray-50"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          aria-label="Отдалить карту"
          className="flex h-9 w-9 items-center justify-center rounded border bg-white shadow hover:bg-gray-50"
        >
          −
        </button>
      </div>

      <ComposableMap
        projection={projection}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        className="h-full w-full"
      >
        <ZoomableGroup
          center={center}
          zoom={zoom}
          {...createZoomConfig(ZOOM_CONFIG.min, ZOOM_CONFIG.max)}
          translateExtent={PAN_EXTENT}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={russiaMap}>
            {({ geographies }) =>
              geographies.map((geo) => {
                // iso_3166_2 из Natural Earth ("RU-SVE" и т.п.) — тот же id,
                // что и в Region/City.regionId, связывает полигон с данными области
                const regionId = geo.properties?.iso_3166_2 as
                  | string
                  | undefined;
                const region = regionId ? regionsById.get(regionId) : undefined;

                // Кликабельны и выделяются hover-цветом только регионы с
                // доставкой; название при наведении показывается для ЛЮБОГО
                // региона, включая hadDelivery: false — это не завязано на
                // интерактивность, а просто информация "что это за область".
                const isInteractive = region?.hadDelivery ?? false;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => isInteractive && setActiveRegion(region!)}
                    className={
                      isInteractive ? "cursor-pointer" : "cursor-default"
                    }
                    style={{
                      default: {
                        fill: "#E5E5E5",
                        stroke: "#FFFFFF",
                        outline: "none",
                        filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.18))",
                      },
                      hover: {
                        fill: isInteractive ? "#D6D6DA" : "#E5E5E5",
                        stroke: "#FFFFFF",
                        outline: "none",
                        filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.24))",
                      },
                      focused: {
                        fill: isInteractive ? "#4bacc6" : "#E5E5E5",
                        stroke: "#FFFFFF",
                        outline: "none",
                        filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))",
                      },
                    }}
                  >
                    {/* Нативный SVG tooltip при наведении — показывается для
                        всех регионов независимо от hadDelivery. */}
                    {region && <title>{region.name}</title>}
                  </Geography>
                );
              })
            }
          </Geographies>

          {visibleCities.map((city) => {
            const markerStyle = TIER_MARKER_STYLE[city.tier];
            return (
              <Marker
                key={city.id}
                coordinates={createCoordinates(
                  city.coordinates[0],
                  city.coordinates[1],
                )}
              >
                {/* Города больше не кликабельны — только hover-tooltip с названием.
                    Вся интерактивность (popover, переход по ссылке) перенесена
                    на полигоны областей выше. */}
                <title>{city.cityName}</title>
                <circle
                  r={markerStyle.radius}
                  fill={markerStyle.fill}
                  className="stroke-black"
                  strokeWidth={0.4}
                />
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {activeRegion && (
        <div
          ref={popupRef}
          className="absolute bottom-4 left-4 z-10 max-w-xs rounded-lg border bg-white p-2 shadow-lg @2xl:p-4 @2xl:pr-6"
          role="dialog"
        >
          <button
            onClick={() => setActiveRegion(null)}
            aria-label="Закрыть"
            className="absolute top-2 right-2 hidden cursor-pointer text-neutral-400 hover:text-neutral-700 @2xl:block"
          >
            ×
          </button>
          <h3 className="text-xs font-semibold @2xl:mb-2.5 @2xl:text-base">
            {activeRegion.name}
          </h3>
          <Link
            href={`regions${activeRegion.url}`}
            className="text-primary text-xs font-medium hover:underline @2xl:text-sm"
          >
            Региональные поставки →
          </Link>
        </div>
      )}
    </div>
  );
}
