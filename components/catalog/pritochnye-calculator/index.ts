// Компоненты
export { CalculatorBlock } from "@/components/catalog/pritochnye-calculator/CalculatorBlock";
export { WaterCalculator } from "@/components/catalog/pritochnye-calculator/WaterCalculator";
export { SteamCalculator } from "@/components/catalog/pritochnye-calculator/SteamCalculator";
export { PdfDownloadButton } from "@/components/catalog/pritochnye-calculator/PdfDownloadButton";
export { PdfPrintButton } from "@/components/catalog/pritochnye-calculator/PdfPrintButton";

// Хуки
export { usePdf } from "@/hooks/usePdf";

// Конфигурация — для добавления новых моделей
export {
  WATER_MODELS,
  STEAM_MODELS,
  STEAM_PRESSURES,
} from "@/data/pritochnye-calculator-models";

// Чистые функции расчёта — для PDF-генерации без рендера UI
export { calculateWater, calculateSteam } from "@/lib/pritochnye-calculator";

// PDF
export {
  generateCalculatorPdf,
  downloadCalculatorPdf,
} from "@/lib/generateCalculatorPdf";
export { mergePdfs, fetchDrawingPdf } from "@/lib/mergePdfs";

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
