# Обновление regions.xlsx: описательные категории + отраслевой сектор

Файлы в комплекте:

- `types.ts` → `data/regions/types.ts`
- `product-map.ts` → `data/regions/product-map.ts`
- `product-delivery-index.ts` → `data/regions/product-delivery-index.ts`
- `generate-regions.ts` → `scripts/generate-regions.ts`
- `generate-product-deliveries.ts` → `scripts/generate-product-deliveries.ts` (логика не менялась, приложен для синхронизации)
- `page.tsx` → `app/regions/[region]/page.tsx`

## Что изменено

### Отраслевой сектор

Пятый столбец актуального `regions.xlsx` читается как `industrySector`.
Он сохраняется в `Delivery`, а затем переносится в атомарный
`ProductDeliveryRecord`.

На странице товара:

```ts
const deliveries = getProductDeliveryRecords(product.id);

delivery.region.name
delivery.settlement.name
delivery.company
delivery.industrySector
```

`Company` не расширяется отраслевым сектором.

`Delivery.note?: string` оставлен в типах для обратной совместимости,
но актуальный генератор его больше не заполняет.

### Категории с описательной припиской

Например:

`Калориферы специального конструктивного исполнения ТВВ`

преобразуется в:

```ts
{
  kind: "category",
  prefix: "Калориферы специального конструктивного исполнения",
  name: "ТВВ",
  href: "/kalorifery-tvv"
}
```

На региональной странице ссылкой является только `ТВВ`.

Парсер не содержит жёсткого списка фраз. Он поддерживает новые
описательные приписки, начинающиеся со слова `Калориферы`, если строка
заканчивается одной из известных категорий из `PRODUCT_CATEGORY_ROUTES`.

## Запуск

После замены файлов и копирования актуального Excel в:

`data/regions/source/regions.xlsx`

запустить из корня проекта:

```bash
npx tsx scripts/generate-regions.ts
```

Будут обновлены:

- `data/regions/regions.generated.ts`
- `data/regions/product-deliveries.generated.ts`

`ProductDeliveryRecord` дедуплицируется, как и раньше, по комбинации
`регион + населённый пункт + компания`.

Если для одного и того же товара и этой же комбинации в Excel когда-нибудь
окажутся разные отраслевые сектора, генерация завершится с явной ошибкой,
чтобы один сектор не выбирался молча.
