export type CityTier = 1 | 2 | 3;

/**
 * Город — точка на карте. Больше не несёт данных об области (regionUrl,
 * summary) — это ответственность Region. City хранит только regionId,
 * который связывает город с его областью (foreign key), без дублирования
 * самих данных области в каждом городе.
 */
export interface City {
  id: string;
  cityName: string;
  /** [longitude, latitude] — стандартный порядок GPS-координат для d3-geo / react-simple-maps */
  coordinates: [number, number];
  tier: CityTier;
  /** ISO 3166-2 код региона (напр. "RU-SVE"), связывает город с Region и с geo.properties.iso_3166_2 в russia.json */
  regionId: string;
}

/**
 * Область (субъект РФ) — теперь основная интерактивная единица карты:
 * кликабельна, открывает popover со ссылкой на страницу области.
 * id соответствует geo.properties.iso_3166_2 из russia.json — так
 * полигон конкретного региона на карте находит свои данные.
 */
export interface Region {
  id: string;
  name: string;
  url: string;
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
