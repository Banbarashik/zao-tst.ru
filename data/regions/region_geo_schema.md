# Географическая привязка региональных страниц

Добавлены два файла:

- `src/data/regions/region-geo.ts` — координаты административного центра для каждой текущей региональной страницы.
- `src/app/regions/[region]/page.tsx` — текущая страница региона с JSON-LD `@graph`.

JSON-LD содержит:

- `Organization` — поставщик;
- `City` + `GeoCoordinates` — город из `h1`;
- `AdministrativeArea` — субъект РФ;
- `Service.areaServed` — регион поставки;
- `WebPage.about` — ссылки на город и субъект без ложного `containedInPlace`.

Климатическая таблица остаётся первым визуальным элементом внутри `<article>`. JSON-LD `<script>` расположен перед `<article>` и ничего не рендерит на странице.

`REGION_GEO` использует `satisfies Record<RegionSlug, RegionGeoData>`, поэтому при появлении нового slug после генерации TypeScript потребует добавить его координаты.

Если официальное написание названия организации в проекте отличается, измените одну константу `ORGANIZATION_NAME` (сейчас `ООО «Т.С.Т.»`) в `page.tsx`.
