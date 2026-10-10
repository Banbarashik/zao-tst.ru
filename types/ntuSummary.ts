export const SCHEME_IDS = [
  "crossNormal",
  "crossForced",
  "serialParallelFlow",
  "serialCounterFlow",
] as const;
export type SchemeId = (typeof SCHEME_IDS)[number];

/** The 7 measured values for one scheme (one column) */
export interface UnitMetrics {
  thermalPowerKw: number;
  outletAirTempC: number;
  totalWaterFlowKgH: number;
  waterVelocityMs: number;
  aerodynamicResistancePa: number;
  hydraulicResistanceKPa: number;
  thermalEfficiencyPercent: number;
}
export type MetricKey = keyof UnitMetrics;

/** One complete table = one heater model */
export interface NtuSummary {
  model: string; // "КФБ-12 А3 М"
  results: Record<SchemeId, UnitMetrics>;
}

/** Display metadata (shared by all tables) */
export interface SchemeDef {
  id: SchemeId;
  title: string; // "Перекрестноточная"
  subtitle: string; // "Обычный режим"
}

export interface MetricDef {
  key: MetricKey;
  label: string; // "Тепловая мощность блока"
  unit: string; // "кВт"
  decimals: number; // 0, 1 or 3
  showSign?: boolean; // "+69"
}
