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

/** Пороги zoom, при достижении которых открывается очередной tier городов */
export const TIER_ZOOM_THRESHOLDS: Record<CityTier, number> = {
  1: 1, // видны всегда, с начального состояния
  2: 2.2, // областные центры
  3: 4, // прочие города
};

export const ZOOM_CONFIG = {
  min: 1,
  max: 8,
  step: 0.5, // шаг для кнопок +/-
};
