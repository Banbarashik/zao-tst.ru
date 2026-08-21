# Climate tables for `/regions/[region]`

## Files

Copy these files into the project:

```text
src/data/regions/climate-tables.generated.ts
src/data/regions/types.ts
src/components/regions/region-climate-table.tsx
src/app/regions/[region]/page.tsx
```

## Data model

`REGION_CLIMATE_TABLES` is a separate index keyed by the canonical regional page slug:

```ts
REGION_CLIMATE_TABLES[regionSlug]
```

Each table contains:

```ts
{
  subject: string;
  locations: Array<{
    name: string;
    slug: string;
  }>;
  rows: Array<{
    parameter: string;
    condition?: string;
    values: string[];
  }>;
}
```

`values[n]` corresponds to `locations[n]`.

All numeric values and conditions are stored as strings exactly as represented in `climate.docx`; the extraction only collapses formatting whitespace inside Word cells.

## Rendering

The regional page obtains the data with:

```ts
const climateTable = getRegionClimateTable(regionSlug as RegionSlug);
```

and renders it as the first child of `<article>`:

```tsx
{climateTable ? <RegionClimateTable table={climateTable} /> : null}
```

The table is horizontally scrollable on narrow screens. The number of location columns is dynamic, so a source table with one populated location does not render the empty template column from Word.

## Coverage

The supplied `climate.docx` produced 70 regional climate tables and 770 climate rows.

Current generated regional pages without a climate table in this DOCX:

- Донецкая Народная Республика (`donetsk`)
- Калининградская область (`kaliningrad`)
- Республика Крым (`simferopol`)
- Запорожская область (`melitopol`)

For these pages `getRegionClimateTable()` returns `null`, so no climate block is rendered.
