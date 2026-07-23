/**
 * Data model for equipment specification tables (SFOTC-series datasheets).
 *
 * Design rationale:
 * - A row's "values" is just an array of strings. Most rows have exactly one
 *   value; a few rows (e.g. dual-speed fan motor specs) have two alternative
 *   values shown side by side in the source .docx.
 * - Using `values: string[]` instead of two separate optional fields
 *   (`value` / `alternateValue`) means the component and the row schema
 *   don't need to change if a future model introduces 3+ alternative values
 *   (e.g. three fan speed options). The rendering logic simply maps over
 *   the array and creates one <td> per entry, with a colSpan computed from
 *   the table's maximum value count. No branching between "single value"
 *   and "dual value" rendering paths is required.
 * - `id` gives React a stable key and a hook for optional per-row styling
 *   or future features (tooltips, highlighting, etc.) without relying on
 *   array index or label text.
 */
export interface SfotcSpecTableRow {
  /** Stable identifier, e.g. a slug derived from the parameter name. */
  id: string;
  /** Parameter label, exactly as it appears in the source document. */
  label: string;
  /**
   * One or more values for this parameter.
   * - length === 1  -> rendered as a single merged value cell
   * - length > 1    -> rendered as multiple side-by-side value cells
   *   (e.g. two alternative fan-motor configurations)
   */
  values: string[];
}

export interface SfotcSpecTableData {
  /** Optional table title / model name, e.g. "СФОТЦ-160". */
  title?: string;
  rows: SfotcSpecTableRow[];
}
