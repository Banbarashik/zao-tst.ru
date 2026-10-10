import type { MetricDef, NtuSummary, SchemeDef } from "@/types/ntuSummary";

export const SCHEMES: SchemeDef[] = [
  { id: "crossNormal", title: "Перекрестноточная", subtitle: "Обычный режим" },
  {
    id: "crossForced",
    title: "Перекрестноточная",
    subtitle: "Форсированный режим",
  },
  {
    id: "serialParallelFlow",
    title: "Последовательная",
    subtitle: "прямоточная",
  },
  {
    id: "serialCounterFlow",
    title: "Последовательная",
    subtitle: "противоточная",
  },
];

export const METRICS: MetricDef[] = [
  {
    key: "thermalPowerKw",
    label: "Тепловая мощность блока",
    unit: "кВт",
    decimals: 0,
  },
  {
    key: "outletAirTempC",
    label: "Температура воздуха на выходе из блока",
    unit: "°C",
    decimals: 0,
    showSign: true,
  },
  {
    key: "totalWaterFlowKgH",
    label: "Суммарный расход воды",
    unit: "кг/ч",
    decimals: 0,
  },
  {
    key: "waterVelocityMs",
    label: "Скорость воды в трубках",
    unit: "м/с",
    decimals: 3,
  },
  {
    key: "aerodynamicResistancePa",
    label: "Аэродинамическое сопротивление",
    unit: "Па",
    decimals: 0,
  },
  {
    key: "hydraulicResistanceKPa",
    label: "Гидравлическое сопротивление",
    unit: "кПа",
    decimals: 1,
  },
  {
    key: "thermalEfficiencyPercent",
    label: "Тепловой КПД блока",
    unit: "%",
    decimals: 1,
  },
];

export const KFB_12_A3: NtuSummary = {
  model: "КФБ-12 А3 М",
  results: {
    crossNormal: {
      thermalPowerKw: 514,
      outletAirTempC: 69,
      totalWaterFlowKgH: 17700,
      waterVelocityMs: 0.436,
      aerodynamicResistancePa: 929,
      hydraulicResistanceKPa: 3.8,
      thermalEfficiencyPercent: 68.8,
    },
    crossForced: {
      thermalPowerKw: 559,
      outletAirTempC: 74,
      totalWaterFlowKgH: 30000,
      waterVelocityMs: 0.739,
      aerodynamicResistancePa: 929,
      hydraulicResistanceKPa: 11.0,
      thermalEfficiencyPercent: 74.8,
    },
    serialParallelFlow: {
      thermalPowerKw: 408,
      outletAirTempC: 56,
      totalWaterFlowKgH: 10150,
      waterVelocityMs: 1.0,
      aerodynamicResistancePa: 929,
      hydraulicResistanceKPa: 80.6,
      thermalEfficiencyPercent: 54.6,
    },
    serialCounterFlow: {
      thermalPowerKw: 513,
      outletAirTempC: 68,
      totalWaterFlowKgH: 10150,
      waterVelocityMs: 1.0,
      aerodynamicResistancePa: 929,
      hydraulicResistanceKPa: 80.6,
      thermalEfficiencyPercent: 68.7,
    },
  },
};

export const KFB_12_A4: NtuSummary = {
  model: "КФБ-12 А4 М",
  results: {
    crossNormal: {
      thermalPowerKw: 567,
      outletAirTempC: 75,
      totalWaterFlowKgH: 19500,
      waterVelocityMs: 0.363,
      aerodynamicResistancePa: 1226,
      hydraulicResistanceKPa: 2.6,
      thermalEfficiencyPercent: 75.9,
    },
    crossForced: {
      thermalPowerKw: 615,
      outletAirTempC: 80,
      totalWaterFlowKgH: 36200,
      waterVelocityMs: 0.673,
      aerodynamicResistancePa: 1226,
      hydraulicResistanceKPa: 9.1,
      thermalEfficiencyPercent: 82.4,
    },
    serialParallelFlow: {
      thermalPowerKw: 463,
      outletAirTempC: 63,
      totalWaterFlowKgH: 13440,
      waterVelocityMs: 1.0,
      aerodynamicResistancePa: 1226,
      hydraulicResistanceKPa: 80.1,
      thermalEfficiencyPercent: 62.0,
    },
    serialCounterFlow: {
      thermalPowerKw: 589,
      outletAirTempC: 77,
      totalWaterFlowKgH: 13440,
      waterVelocityMs: 1.0,
      aerodynamicResistancePa: 1226,
      hydraulicResistanceKPa: 80.1,
      thermalEfficiencyPercent: 78.9,
    },
  },
};
