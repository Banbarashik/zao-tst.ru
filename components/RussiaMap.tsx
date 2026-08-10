"use client";

import russiaMap from "@/public/russia.json";
import { useMemo, useState, useCallback } from "react";
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
import type { City } from "@/types/map";
import { TIER_ZOOM_THRESHOLDS, ZOOM_CONFIG } from "@/types/map";

interface RussiaMapProps {
  cities: City[];
}

// ── Геометрия карты ──────────────────────────────────────────────────────
//
// Внутренняя система координат SVG. Соотношение сторон 1100:629 ≈ 1.7488,
// что почти точно совпадает с реальным соотношением сторон территории
// России в этой проекции (1051.6 / 600.6 ≈ 1.7509, разница <0.2%).
// Именно поэтому viewBox подобран под ЭТИ числа, а не под 4:3 или 16:9 —
// это единственный способ показать всю территорию без обрезки и без
// пустых полей (letterboxing) одновременно.
const MAP_WIDTH = 1100;
const MAP_HEIGHT = 629;

// rotate/scale подобраны ранее (не меняются здесь), translate — НОВЫЙ
// параметр, вычисленный так, чтобы центр bbox карты совпадал с центром
// viewBox 1100x629 (а не с геометрическим центром width/2, height/2,
// который использовался бы по умолчанию — центр карты в исходных
// координатах проекции не совпадает с (0,0), поэтому дефолтный offset
// давал бы карту не по центру).
//
// Как это было посчитано (нужно повторить при следующем изменении
// rotate/scale/MAP_WIDTH/MAP_HEIGHT):
//   1. path.bounds() по всем 84 геометриям russia.json под rotate/scale
//      с translate([0,0]) → bbox в "чистых" координатах проекции
//      (сейчас: X=[-614.75, 436.85], Y=[-264.26, 336.34])
//   2. mapCenter = ((minX+maxX)/2, (minY+maxY)/2)
//   3. translate = (MAP_WIDTH/2 - mapCenter.x, MAP_HEIGHT/2 - mapCenter.y)
const projection = geoAzimuthalEqualArea()
  .rotate([-106, -68.5, 0])
  .scale(866)
  .translate([638.95, 278.46]);

// Границы панорамирования — точно по контуру карты (0% допуска), в тех же
// пиксельных координатах viewBox, что и projection.translate выше.
// При zoom = ZOOM_CONFIG.min (=1) карта уже целиком видна благодаря тому,
// что MAP_WIDTH/MAP_HEIGHT подобраны под её реальные пропорции — поэтому
// панорамирование на минимальном zoom невозможно по построению (не нужно
// поднимать minZoom, как в прошлой версии для 800x600).
//
// На максимальном zoom PAN_EXTENT позволяет доехать точно до края карты
// (координаты границ) и не дальше — то есть можно рассмотреть любой
// регион вплотную, включая Калининград и Дальний Восток, но нельзя
// укатиться в пустоту за пределы контура России.
const PAN_EXTENT = createTranslateExtent(
  createCoordinates(24, 14),
  createCoordinates(1076, 615),
);

export default function RussiaMap({ cities }: RussiaMapProps) {
  const [zoom, setZoom] = useState(ZOOM_CONFIG.min);
  const [center, setCenter] = useState<Coordinates>(
    createCoordinates(92, 66), // примерный центр РФ в GPS — используется ZoomableGroup для позиционирования при панорамировании
  );
  const [activeCity, setActiveCity] = useState<City | null>(null);

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
    <div className="relative h-full w-full border p-2">
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
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#E5E5E5",
                      stroke: "#FFFFFF",
                      outline: "none",
                    },
                    hover: {
                      fill: "#D6D6DA",
                      stroke: "#FFFFFF",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#D6D6DA",
                      stroke: "#FFFFFF",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {visibleCities.map((city) => (
            <Marker
              key={city.id}
              coordinates={createCoordinates(
                city.coordinates[0],
                city.coordinates[1],
              )}
              onClick={() => setActiveCity(city)}
            >
              {/* Капля с острым концом — путь можно заменить на кастомный SVG-дизайн */}
              {/* <path
                d="M0,0 C-6,-10 -6,-18 0,-24 C6,-18 6,-10 0,0 Z"
                className="fill-primary cursor-pointer stroke-white"
                strokeWidth={1}
              /> */}
              <circle cx="5" cy="5" r="4" fill="#007bff" stroke="black" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {activeCity && (
        <div
          className="absolute bottom-4 left-4 z-10 max-w-xs rounded-lg bg-white p-4 shadow-lg"
          role="dialog"
        >
          <button
            onClick={() => setActiveCity(null)}
            aria-label="Закрыть"
            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700"
          >
            ×
          </button>
          <h3 className="mb-1 text-base font-semibold">
            {activeCity.cityName}
          </h3>
          <p className="mb-3 text-sm text-neutral-600">{activeCity.summary}</p>
          <a
            href={activeCity.regionUrl}
            className="text-primary text-sm font-medium hover:underline"
          >
            Подробнее об области →
          </a>
        </div>
      )}
    </div>
  );
}
