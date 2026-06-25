import type {
  Range,
  SfoConfiguration,
  SfoPowerGroup,
} from "@/types/sfoOperatingModes";
import { sfoOperatingModes } from "@/data/sfoOperatingModes";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Format a Range as "min…max", prepending "+" for positive values. */
function formatRange([min, max]: Range, unit?: string): string {
  const fmt = (v: number) => (v > 0 ? `+${v}` : String(v));
  const core = `${fmt(min)}…${fmt(max)}`;
  return unit ? `${core} ${unit}` : core;
}

/** Format an airflow range without sign prefix (values are always positive). */
function formatAirflow([min, max]: Range): string {
  return `${min.toLocaleString("ru-RU")} – ${max.toLocaleString("ru-RU")}`;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface ConfigRowProps {
  config: SfoConfiguration;
  /** When > 1, the first cell in this row renders powerKw with rowSpan. */
  powerKw?: number;
  rowSpan?: number;
}

function ConfigRow({ config, powerKw, rowSpan }: ConfigRowProps) {
  return (
    <tr>
      {/* Power cell: only rendered for the first row in a group */}
      {powerKw !== undefined && (
        <td
          rowSpan={rowSpan}
          className="border-border border px-3 py-2 text-center align-middle font-medium"
        >
          {powerKw}
        </td>
      )}

      <td className="border-border border px-3 py-2 text-center">
        {formatAirflow(config.airflow)}
      </td>

      <td className="border-border border px-3 py-2 text-center font-medium">
        {config.model}
      </td>

      <td className="border-border border px-3 py-2 text-center">
        {config.sections}
      </td>

      <td className="border-border border px-3 py-2 text-center">
        {formatRange(config.inletTemp)}
      </td>

      <td className="border-border border px-3 py-2 text-center">
        {formatRange(config.outletTemp)}
      </td>

      <td className="border-border border px-3 py-2 text-center">
        {formatRange(config.heatingDelta)}
      </td>
    </tr>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function SfoOperatingModesTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          {/* Row 1: top-level headers */}
          <tr className="bg-muted">
            <th
              rowSpan={2}
              className="border-border border px-3 py-2 text-center align-middle font-semibold"
            >
              Мощность,&nbsp;кВт
            </th>
            <th
              rowSpan={2}
              className="border-border border px-3 py-2 text-center align-middle font-semibold"
            >
              Диапазон производительности,&nbsp;м³/ч
            </th>
            <th
              rowSpan={2}
              className="border-border border px-3 py-2 text-center align-middle font-semibold"
            >
              Модель
            </th>
            <th
              rowSpan={2}
              className="border-border border px-3 py-2 text-center align-middle font-semibold"
            >
              Кол-во подкл. секций
            </th>
            {/* Merged header for the two temperature columns */}
            <th
              colSpan={2}
              className="border-border border px-3 py-2 text-center font-semibold"
            >
              Диапазон температуры воздуха,&nbsp;°C
            </th>
            <th
              rowSpan={2}
              className="border-border border px-3 py-2 text-center align-middle font-semibold"
            >
              Дельта нагрева воздуха,&nbsp;°C
            </th>
          </tr>

          {/* Row 2: sub-headers for inlet / outlet */}
          <tr className="bg-muted">
            <th className="border-border border px-3 py-2 text-center font-semibold">
              на входе
            </th>
            <th className="border-border border px-3 py-2 text-center font-semibold">
              на выходе
            </th>
          </tr>
        </thead>

        <tbody>
          {sfoOperatingModes.map((group: SfoPowerGroup) =>
            group.configurations.map(
              (config: SfoConfiguration, idx: number) => (
                <ConfigRow
                  key={`${group.powerKw}-${config.model}-${config.sections}`}
                  config={config}
                  // Only the first row in a group carries the power cell with rowSpan
                  powerKw={idx === 0 ? group.powerKw : undefined}
                  rowSpan={idx === 0 ? group.configurations.length : undefined}
                />
              ),
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
