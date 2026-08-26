# Region overviews integration

## Куда положить файлы

- `region-overviews.ts` → `data/regions/region-overviews.ts`
- содержимое `types.ts` → заменить текущий `data/regions/types.ts`
- `page.tsx` → `app/regions/[region]/page.tsx`

## Что изменилось

Добавлен тип `RegionOverview` и словарь `REGION_OVERVIEWS`, ключом которого является текущий slug страницы региона.

На странице используется:

```ts
const overview = getRegionOverview(regionSlug as RegionSlug);
```

и вывод:

```tsx
{overview ? <p>{overview.text}</p> : null}
```

В DOCX есть 70 региональных обзоров. Для отдельной страницы `moskva` собственного текста в источнике нет, поэтому helper возвращает `null`, и страница продолжает работать без обзорного абзаца.

Также верхний заголовок страницы исправлен с жестко заданного `Кемеровская область` на `{region.subject.name}`.
