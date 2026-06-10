# heater-calculator

Миграция legacy HTML-калькуляторов калориферов на React/Next.js.

---

## Архитектурные решения

### 1. Один универсальный компонент или два?

**Два отдельных компонента** — `WaterCalculator` и `SteamCalculator`.

Причина: водяные и паровые калориферы имеют принципиально разные наборы
входных данных и результатов:

| Водяной                             | Паровой                        |
|-------------------------------------|--------------------------------|
| Теплоноситель + концентрация гликоля| Давление пара                  |
| Темп. теплоносителя вход/выход      | —                              |
| 7 результатов (вкл. гидравлика)     | 5 результатов                  |
| Логика плотности/теплоёмкости       | Таблицы насыщения              |

Объединение в один компонент дало бы условный рендер половины UI
и запутанные типы. Разделение — чистые пропсы, предсказуемый рендер.

### 2. Что вынесено в общий слой

- **`lib/calculations.ts`** — чистые функции `calculateWater` / `calculateSteam`.
  Никакого DOM, никакого React. Можно вызывать на сервере для PDF.
- **`config/models.ts`** — все коэффициенты и таблицы давлений.
  Добавить новую модель = одна запись в объекте.
- **`types/calculator.types.ts`** — единый источник истины для всех типов.

### 3. Данные в конфигурации

`WATER_MODELS` и `STEAM_MODELS` — объекты с ключом `modelId`.
Каждая запись содержит `label` и три ряда коэффициентов (2/3/4-рядный).

Таблицы свойств пара вынесены в `STEAM_SATURATION_TEMP` и
`STEAM_VAPORIZATION_HEAT` — больше не дублируются в каждом HTML-файле.

---

## Использование

### Простое встраивание

```tsx
import { WaterCalculator } from "@/components/heater-calculator";

export default function Page() {
  return <WaterCalculator modelId="kpvs-905x905" />;
}
```

### Получение состояния для PDF

```tsx
import { useState } from "react";
import { WaterCalculator, type WaterCalculatorState } from "@/components/heater-calculator";

export default function Page() {
  const [state, setState] = useState<WaterCalculatorState | null>(null);

  async function handleDownloadPdf() {
    if (!state?.results) return;
    // Передайте state в вашу PDF-функцию
    await generatePdf(state);
  }

  return (
    <>
      <WaterCalculator modelId="kpvs-905x905" onStateChange={setState} />
      <button onClick={handleDownloadPdf} disabled={!state?.results}>
        Скачать PDF
      </button>
    </>
  );
}
```

### Расчёт без UI (например, в Server Action)

```ts
import { calculateWater } from "@/components/heater-calculator";

const results = calculateWater({
  modelId: "kpvs-905x905",
  rowCount: "3_rows",
  airVolume: 10000,
  airInputT: -25,
  airOutputT: 18,
  coolant: "water",
  glycolConcentration: 0,
  coolantInputT: 90,
  coolantOutputT: 70,
});
```

---

## Добавление новой модели

```ts
// config/models.ts

export const WATER_MODELS: Record<string, WaterModelConfig> = {
  // ... существующие модели ...
  "kpvs-572x572": {
    type: "water",
    label: "КПВС-572x572",
    rows: {
      "2_rows": [/* 9 коэффициентов */],
      "3_rows": [/* 9 коэффициентов */],
      "4_rows": [/* 9 коэффициентов */],
    },
  },
};
```

Больше ничего менять не нужно — компонент читает модели из конфига.

---

## Структура файлов

```
heater-calculator/
├── index.ts                        # barrel exports
├── types/
│   └── calculator.types.ts         # все TypeScript-типы
├── config/
│   └── models.ts                   # коэффициенты моделей + таблицы пара
├── lib/
│   └── calculations.ts             # чистые функции расчёта (без React)
└── components/
    ├── WaterCalculator.tsx          # водяные калориферы (КПВС/КПВУ)
    └── SteamCalculator.tsx          # паровые калориферы (КППС/КППУ)
```
