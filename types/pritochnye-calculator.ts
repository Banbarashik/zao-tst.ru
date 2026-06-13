// ─── Тип калорифера ───────────────────────────────────────────────────────────

export type HeaterType = "water" | "steam";
export type RowCount = "2_rows" | "3_rows" | "4_rows";
export type CoolantType = "water" | "ethyleneGlycol" | "propyleneGlycol";

// ─── Коэффициенты ряда (одна строка матрицы F/G/H) ──────────────────────────

/**
 * Водяной калорифер — 9 коэффициентов на ряд:
 * [F1, F2, F3, F4, F5, F6, F7, F8, F9]
 */
export type WaterRowCoefficients = [
  number, // F1  — площадь нагрева
  number, // F2  — фронтальное сечение (воздух)
  number, // F3  — сечение трубок (теплоноситель)
  number, // F4  — коэф. гидравлического сопротивления
  number, // F5  — коэф. теплоотдачи α
  number, // F6  — степень по скорости воздуха
  number, // F7  — степень по скорости теплоносителя
  number, // F8  — коэф. аэродинамического сопротивления
  number, // F9  — степень аэродинамики по скорости воздуха
];

/**
 * Паровой калорифер — 8 коэффициентов на ряд:
 * [F1, F2, F3, F5, F6, F7, F8, F9]
 * (F4 в паровых не используется)
 */
export type SteamRowCoefficients = [
  number, // F1  — площадь нагрева
  number, // F2  — фронтальное сечение
  number, // F3  — не используется (заглушка для совместимости)
  number, // F5  — коэф. теплоотдачи α
  number, // F6  — степень по скорости воздуха
  number, // F7  — степень (не используется, = 0 в паровых)
  number, // F8  — коэф. аэродинамики
  number, // F9  — степень аэродинамики
];

// ─── Конфигурация модели ──────────────────────────────────────────────────────

interface BaseModelConfig {
  /** Отображаемое название, напр. «КПВС-905x905» */
  label: string;
  /** Коэффициенты для 2-, 3-, 4-рядного исполнения */
  rows: {
    "2_rows": WaterRowCoefficients | SteamRowCoefficients;
    "3_rows": WaterRowCoefficients | SteamRowCoefficients;
    "4_rows": WaterRowCoefficients | SteamRowCoefficients;
  };
}

export interface WaterModelConfig extends BaseModelConfig {
  type: "water";
  rows: {
    "2_rows": WaterRowCoefficients;
    "3_rows": WaterRowCoefficients;
    "4_rows": WaterRowCoefficients;
  };
}

export interface SteamModelConfig extends BaseModelConfig {
  type: "steam";
  rows: {
    "2_rows": SteamRowCoefficients;
    "3_rows": SteamRowCoefficients;
    "4_rows": SteamRowCoefficients;
  };
}

export type ModelConfig = WaterModelConfig | SteamModelConfig;

// ─── Входные данные ───────────────────────────────────────────────────────────

export interface WaterCalculatorInputs {
  modelId: string;
  rowCount: RowCount;
  /** Объём нагреваемого воздуха, м³/ч */
  airVolume: number;
  /** Температура воздуха на входе, °C */
  airInputT: number;
  /** Требуемая температура воздуха на выходе, °C */
  airOutputT: number;
  /** Тип теплоносителя */
  coolant: CoolantType;
  /** Концентрация гликоля, % (0–100) */
  glycolConcentration: number;
  /** Температура теплоносителя на входе, °C */
  coolantInputT: number;
  /** Температура теплоносителя на выходе, °C */
  coolantOutputT: number;
}

export interface SteamCalculatorInputs {
  modelId: string;
  rowCount: RowCount;
  /** Объём нагреваемого воздуха, м³/ч */
  airVolume: number;
  /** Температура воздуха на входе, °C */
  airInputT: number;
  /** Требуемая температура воздуха на выходе, °C */
  airOutputT: number;
  /** Давление насыщенного пара, напр. «0,3 МПа» */
  steamPressure: string;
}

// ─── Результаты вычислений ────────────────────────────────────────────────────

export interface WaterCalculatorResults {
  /** Запас площади поверхности нагрева, % */
  heatingAreaReserve: number;
  /** Массовая скорость воздуха в фронт. сечении, кг/(м²·с) */
  airMassVelocity: number;
  /** Скорость теплоносителя, м/с */
  coolantVelocity: number;
  /** Аэродинамическое сопротивление, Па */
  aerodynamicResistance: number;
  /** Гидравлическое сопротивление, кПа */
  hydraulicResistance: number;
  /** Расход теплоносителя, кг/ч */
  coolantFlowRate: number;
  /** Тепловая мощность, кВт */
  thermalPower: number;
}

export interface SteamCalculatorResults {
  /** Запас площади поверхности нагрева, % */
  heatingAreaReserve: number;
  /** Тепловая мощность, кВт */
  thermalPower: number;
  /** Расход пара, кг/ч */
  steamConsumption: number;
  /** Аэродинамическое сопротивление, Па */
  aerodynamicResistance: number;
  /** Массовая скорость воздуха в фронт. сечении, кг/(м²·с) */
  airMassVelocity: number;
}

// ─── Состояние калькулятора (для PDF и внешних потребителей) ─────────────────

export interface WaterCalculatorState {
  type: "water";
  modelLabel: string;
  inputs: WaterCalculatorInputs;
  results: WaterCalculatorResults | null;
}

export interface SteamCalculatorState {
  type: "steam";
  modelLabel: string;
  inputs: SteamCalculatorInputs;
  results: SteamCalculatorResults | null;
}

export type CalculatorState = WaterCalculatorState | SteamCalculatorState;
