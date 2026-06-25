// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** A numeric range represented as [min, max] tuple (inclusive). */
export type Range = [number, number];

/** One configuration row: a specific model with a given number of sections. */
export interface SfoConfiguration {
  /** СФО model designation, e.g. "СФО-16". */
  model: string;
  /** Number of connected sections (1, 2, or 3). */
  sections: number;
  /** Air volume flow rate range, m³/h. */
  airflow: Range;
  /** Inlet air temperature range, °C. */
  inletTemp: Range;
  /** Outlet air temperature range, °C. */
  outletTemp: Range;
  /** Air heating delta range, °C. */
  heatingDelta: Range;
}

/**
 * A power group: one power rating (kW) with one or more model/section
 * configurations that achieve it.
 *
 * Grouping by power makes it easy to:
 *  - Render rowspan on the "Power" column without tracking repeats in a flat array.
 *  - Filter / sort by power level independently of model choice.
 *  - Add new configurations for existing power levels without touching layout logic.
 */
export interface SfoPowerGroup {
  /** Total heater power, kW. */
  powerKw: number;
  /** All configurations that produce this power level. */
  configurations: SfoConfiguration[];
}
