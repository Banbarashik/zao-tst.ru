/**
 * Data model for "СФО/ТС" heater performance tables.
 *
 * Each table describes fan performance at a fixed air flow rate:
 * for a range of inlet air temperatures, it lists the resulting outlet
 * temperature and available static pressure at three power levels
 * (full / 2/3 / 1/3).
 *
 * Design notes:
 * - Outlet-temperature cells carry a *status* (normal / warning / unavailable),
 *   not a raw color. The source spreadsheet used cell shading (green/yellow/
 *   orange) to flag operating limits; we translate that into a semantic enum
 *   so the component owns the color mapping and the data stays presentation-
 *   agnostic. Status is per-cell, not per-row: each power level can hit its
 *   limit independently of the others.
 * - Row count varies per table (15-20 rows) because the number of viable
 *   inlet temperatures depends on the air flow rate. The type does not fix
 *   an array length; the component must render whatever rows are given.
 * - "Unavailable" (⛔) readings have no outlet temperature or pressure value,
 *   only a status.
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

export interface ModeTableRow {
  /** Inlet air temperature, °C */
  inletTempC: number;
  full: PowerLevelReading;
  twoThirds: PowerLevelReading;
  oneThird: PowerLevelReading;
}

export interface PowerLevelSpec {
  /** e.g. "Полная мощность", "Частичная мощность 2/3", "Минимальная мощность 1/3" */
  label: string;
  kw: number;
}

export interface ModeTableData {
  /** Unique id, e.g. derived from air flow rate — used as React key */
  id: string;
  /** Air flow rate, m3/h */
  airFlowM3h: number;
  /** Fan static pressure, Pa */
  fanStaticPressurePa: number;
  powerLevels: {
    full: PowerLevelSpec;
    twoThirds: PowerLevelSpec;
    oneThird: PowerLevelSpec;
  };
  rows: ModeTableRow[];
}
