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
      {powerKw !== undefined && <td rowSpan={rowSpan}>{powerKw}</td>}
      <td className="py-1">{formatAirflow(config.airflow)}</td>
      <td className="px-4">{config.model}</td>
      <td>{config.sections}</td>
      <td>{formatRange(config.inletTemp)}</td>
      <td>{formatRange(config.outletTemp)}</td>
      <td>{formatRange(config.heatingDelta)}</td>
    </tr>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function SfoOperatingModesTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          {/* Row 1: top-level headers */}
          <tr>
            <th rowSpan={2} className="px-1">
              Мощность, кВт
            </th>
            <th rowSpan={2} className="px-3">
              Диапазон производительности, м<sup>3</sup>/ч
            </th>
            <th rowSpan={2} className="px-1">
              Модель
            </th>
            <th rowSpan={2} className="px-1">
              Кол-во подкл. секций
            </th>
            {/* Merged header for the two temperature columns */}
            <th colSpan={2} className="px-1">
              Диапазон температуры воздуха, °C
            </th>
            <th rowSpan={2} className="px-1">
              Дельта нагрева воздуха, °C
            </th>
          </tr>

          {/* Row 2: sub-headers for inlet / outlet */}
          <tr>
            <th className="py-1">на входе</th>
            <th>на выходе</th>
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
