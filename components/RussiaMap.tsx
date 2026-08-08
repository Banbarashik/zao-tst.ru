"use client";

import russiaMap from "@/public/russia.json";
import { useMemo, useState, useCallback, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  createCoordinates,
  createZoomConfig,
  type Coordinates,
} from "@vnedyalk0v/react19-simple-maps";
import { enableDevelopmentMode } from "@vnedyalk0v/react19-simple-maps/utils";
import type { City } from "@/types/map";
import { TIER_ZOOM_THRESHOLDS, ZOOM_CONFIG } from "@/types/map";

interface RussiaMapProps {
  cities: City[];
}

export default function RussiaMap({ cities }: RussiaMapProps) {
  // В dev-режиме geography-fetch форка по умолчанию требует HTTPS;
  // локальный /maps/russia.json на http://localhost иначе будет отклонён валидацией.
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      enableDevelopmentMode(true);
    }
  }, []);

  const [zoom, setZoom] = useState(ZOOM_CONFIG.min);
  const [center, setCenter] = useState<Coordinates>(
    createCoordinates(95, 66), // примерный центр РФ — подбирается под выбранную проекцию
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
    <div className="relative h-full w-full">
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
          rotate: [-106, -69, 0],
          scale: 862,
          center: createCoordinates(0, 0),
        }}
        className="h-full w-full"
      >
        <ZoomableGroup
          center={center}
          zoom={zoom}
          {...createZoomConfig(ZOOM_CONFIG.min, ZOOM_CONFIG.max)}
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
