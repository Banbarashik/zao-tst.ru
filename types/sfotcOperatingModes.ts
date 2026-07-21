/**
 * Data model for "СФО/ТС" heater performance tables.
 *
 * Each table describes fan performance at a fixed air flow rate: for a
 * range of inlet air temperatures, it lists the resulting outlet
 * temperature and available static pressure at each power level the
 * unit supports.
 *
 * Design notes:
 * - The number of power levels is NOT fixed. Most tables have three
 *   (full / 2/3 / 1/3), but some (e.g. two-stage units) have only two
 *   (full / half). Rather than modeling this as named fields (`full`,
 *   `twoThirds`, `oneThird`) — which breaks for any other arity — power
 *   levels are a `PowerLevelSpec[]`, and each row's readings are keyed
 *   by the same `key` used in that spec. This lets one type, one
 *   component, and one parser handle 2-level, 3-level, or N-level
 *   tables without branching.
 * - Outlet-temperature cells carry a *status* (normal / warning /
 *   unavailable), not a raw color. The source spreadsheet used cell
 *   shading (green/yellow/orange) to flag operating limits; we translate
 *   that into a semantic enum so the component owns the color mapping
 *   and the data stays presentation-agnostic. Status is per-cell, not
 *   per-row: each power level can hit its limit independently of the
 *   others.
 * - Row count varies per table (15-20 rows) because the number of viable
 *   inlet temperatures depends on the air flow rate. The type does not
 *   fix an array length; the component must render whatever rows are
 *   given.
 * - "Unavailable" (⛔) readings have no outlet temperature or pressure
 *   value, only a status.
 */

export type OutletStatus = "normal" | "warning" | "unavailable";

/** A single outlet-temperature / available-pressure reading for one power level. */
export interface PowerLevelReading {
  /** Outlet air temperature, °C. `null` when the operating point is unavailable. */
  outletTempC: number | null;
  /** Available static pressure, Pa. `null` when the operating point is unavailable. */
  availablePressurePa: number | null;
  status: OutletStatus;
}

/**
 * Describes one power level column group. `key` is a stable identifier
 * (e.g. "full", "twoThirds", "oneThird", "half") used to look up the
 * matching reading in each row — it is NOT necessarily one of a fixed
 * set of values, since different product lines expose different power
 * levels.
 */
export interface PowerLevelSpec {
  /** Stable identifier matching keys in HeaterTableRow.readings */
  key: string;
  /** e.g. "Полная мощность", "Частичная мощность 2/3" */
  label: string;
  kw: number;
}

export interface ModeTableRow {
  /** Inlet air temperature, °C */
  inletTempC: number;
  /** Readings keyed by PowerLevelSpec.key; one entry per power level the table has. */
  readings: Record<string, PowerLevelReading>;
}

export interface ModeTableData {
  /** Unique id, e.g. derived from air flow rate — used as React key */
  id: string;
  /** Air flow rate, m3/h */
  airFlowM3h: number;
  /** Fan static pressure, Pa */
  fanStaticPressurePa: number;
  /** Ordered list of power levels this table has (2, 3, or more) */
  powerLevels: PowerLevelSpec[];
  rows: ModeTableRow[];
}
