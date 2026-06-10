// Компоненты
export { WaterCalculator } from "@/components/catalog/pritochnye-calculator/WaterCalculator";
export { SteamCalculator } from "@/components/catalog/pritochnye-calculator/SteamCalculator";

// Конфигурация — для добавления новых моделей
export {
  WATER_MODELS,
  STEAM_MODELS,
  STEAM_PRESSURES,
} from "@/data/pritochnye-calculator-models";

// Чистые функции расчёта — для PDF-генерации без рендера UI
export { calculateWater, calculateSteam } from "@/lib/pritochnye-calculator";

// Типы
export type {
  HeaterType,
  RowCount,
  CoolantType,
  WaterModelConfig,
  SteamModelConfig,
  ModelConfig,
  WaterCalculatorInputs,
  SteamCalculatorInputs,
  WaterCalculatorResults,
  SteamCalculatorResults,
  WaterCalculatorState,
  SteamCalculatorState,
  CalculatorState,
} from "@/types/pritochnye-calculator";
