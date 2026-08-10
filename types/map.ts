export type CityTier = 1 | 2 | 3;

export interface City {
  id: string;
  cityName: string;
  /** [longitude, latitude] — стандартный порядок GPS-координат для d3-geo / react-simple-maps */
  coordinates: [number, number];
  tier: CityTier;
  regionId: string;
  regionUrl: string;
  summary: string;
}

/** Пороги zoom, при достижении которых открывается очередной tier городов. */
export const TIER_ZOOM_THRESHOLDS: Record<CityTier, number> = {
  1: 1, // видны всегда, с начального состояния
  2: 2.2, // областные центры
  3: 4, // прочие города
};

export const ZOOM_CONFIG = {
  // minZoom = 1: теперь MAP_WIDTH/MAP_HEIGHT в RussiaMap.tsx подобраны под
  // реальные пропорции территории России, поэтому вся карта видна целиком
  // уже при zoom=1 — искусственно поднимать minZoom (как в прошлой версии
  // под 800x600) больше не требуется.
  min: 1,
  max: 8,
  step: 0.5, // шаг для кнопок +/-
};

/**
 * Визуальное оформление маркеров-капель по tier.
 * `scale` применяется к базовому SVG-path капли (см. RussiaMap.tsx) через
 * CSS transform — так размер меняется одним числом, а не переписыванием
 * самого path для каждого tier.
 */
export const TIER_MARKER_STYLE: Record<
  CityTier,
  { fill: string; radius: number }
> = {
  1: { fill: "var(--primary-dark)", radius: 3 }, // крупные города — самый большой маркер, акцентный оранжевый
  2: { fill: "#e97958", radius: 2.5 }, // областные центры — средний, чуть светлее
  3: { fill: "#f2ab97", radius: 2 }, // прочие города — самый маленький, ещё светлее
};
