# Интеграция без `src/`

Структура проекта:

```text
project/
├─ data/
│  └─ regions/
│     ├─ product-delivery-index.ts
│     ├─ types.ts
│     └─ source/
│        └─ regions.xlsx
└─ scripts/
   ├─ generate-regions.ts
   └─ generate-product-deliveries.ts
```

1. Замени `scripts/generate-regions.ts` готовым файлом из этого пакета.
2. Положи `scripts/generate-product-deliveries.ts` рядом с ним.
3. Положи `data/regions/product-delivery-index.ts` в `data/regions/`.
4. Перенеси `ProductDeliveryRecord` из `data/regions/types-addition.ts` в существующий `data/regions/types.ts`. Отдельный `types-addition.ts` после этого не нужен.
5. Старый `scripts/generate-regions-integration.ts` удалить/не использовать.
6. Запуск из корня проекта:

```bash
npx tsx scripts/generate-regions.ts
```

Один запуск создаёт/обновляет:

- `data/regions/regions.generated.ts`
- `data/regions/product-deliveries.generated.ts`

Во втором файле будут и `productDeliveries`, и `productDeliveryRecords`, а также оба helper-а:

- `getProductDeliveryLocations(productId)`
- `getProductDeliveryRecords(productId)`
