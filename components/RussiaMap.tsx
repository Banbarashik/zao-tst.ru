"use client";

import russiaMap from "@/public/russia.json";
import { useMemo, useState, useCallback } from "react";
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

// Границы панорамирования в пиксельных координатах ПОСЛЕ проекции (не GPS!).
// Рассчитаны из вашего реального public/russia.json: для каждой из 84
// геометрий регионов посчитан path.bounds() под текущую проекцию
// (rotate=[-106, -68.5, 0], scale=866), затем взят общий bbox + запас 10%.
//
// ВАЖНО про систему координат: ComposableMap без явных width/height использует
// дефолт 800x600, а проекция внутри рисуется с translate = [width/2, height/2] =
// [400, 300] (origin в центре видимой области, а не в (0,0)). Поэтому bbox,
// посчитанный в "чистых" координатах проекции (translate([0,0])), нужно
// сдвинуть на этот оффсет — что и сделано ниже. Именно это несовпадение
// систем координат было причиной прошлого расхождения между расчётным
// и рабочим PAN_EXTENT.
//
// Диапазон здесь шире, чем в вашем рабочем варианте (-100,0)/(760,700) —
// специально: более тесный extent зажимает панорамирование раньше, чем
// пользователь успевает доехать до диаметрально удалённых регионов при
// высоком zoom (сама область в мировых координатах статична, а видимый
// на экране кусок при увеличении zoom физически меньше — поэтому нужен
// больший запас хода по краям, а не меньший).
//
// 3 региона (Санкт-Петербург, Карелия, Севастополь) дали некорректный bbox
// из-за особенностей их мультиполигонов на этой проекции — исключены из
// расчёта, но не влияют на итоговые границы: они лежат внутри общей
// области карты, накрытой соседними регионами.
//
// При любом изменении rotate/scale/center/width/height эти значения
// инвалидируются и требуют пересчёта.
const PAN_EXTENT = createTranslateExtent(
  createCoordinates(-320, -24),
  createCoordinates(942, 696),
);

export default function RussiaMap({ cities }: RussiaMapProps) {
  const [zoom, setZoom] = useState(ZOOM_CONFIG.min);
  const [center, setCenter] = useState<Coordinates>(
    createCoordinates(92, 66), // примерный центр РФ — подбирается под выбранную проекцию
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
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-106, -68.5, 0],
          scale: 866,
          center: createCoordinates(0, 0),
        }}
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
              <path
                d="M0,0 C-6,-10 -6,-18 0,-24 C6,-18 6,-10 0,0 Z"
                className="fill-primary cursor-pointer stroke-white"
                strokeWidth={1}
              />
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
