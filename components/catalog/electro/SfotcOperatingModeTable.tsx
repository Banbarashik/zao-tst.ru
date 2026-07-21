import { Fragment } from "react";
import type {
  ModeTableData,
  OutletStatus,
  PowerLevelReading,
  PowerLevelSpec,
} from "@/types/sfotcOperatingModes";

/** Tailwind classes per status. Centralized here so the color scheme is a
 *  one-place edit and never leaks into the data layer. */
const STATUS_STYLES: Record<OutletStatus, string> = {
  normal: "bg-[#CADBA9]",
  warning: "bg-[#FFFF9F]",
  unavailable: "bg-[#FABF8F] text-red-700",
};

const STATUS_LABEL: Record<OutletStatus, string> = {
  normal: "в пределах нормы",
  warning: "предельный режим",
  unavailable: "недостижимо",
};

/** Fallback reading used when a row has no entry for a given power level
 *  (shouldn't normally happen if data is generated correctly, but keeps
 *  the component from crashing on malformed input). */
const MISSING_READING: PowerLevelReading = {
  outletTempC: null,
  availablePressurePa: null,
  status: "unavailable",
};

function OutletCell({ reading }: { reading: PowerLevelReading }) {
  const displayValue =
    reading.status === "unavailable" || reading.outletTempC === null
      ? "⛔"
      : `${reading.outletTempC > 0 ? "+" : ""}${reading.outletTempC}`;

  return (
    <td
      className={`${STATUS_STYLES[reading.status]}`}
      title={STATUS_LABEL[reading.status]}
    >
      {displayValue}
    </td>
  );
}

function PressureCell({ reading }: { reading: PowerLevelReading }) {
  return <td>{reading.availablePressurePa ?? "—"}</td>;
}

function PowerLevelHeader({ spec }: { spec: PowerLevelSpec }) {
  return (
    <th colSpan={2}>
      {spec.label} ({spec.kw} кВт)
    </th>
  );
}

export interface SfotcOperatingModeTableProps {
  table: ModeTableData;
  /** Optional className passed through to the outer wrapper for layout control */
  className?: string;
}

/**
 * Renders a single heater performance table: outlet temperature and
 * available static pressure at each power level the table has (2, 3, or
 * more — driven entirely by `table.powerLevels`), across a range of
 * inlet temperatures.
 *
 * Stateless and driven entirely by `table`; render N of these for N tables
 * rather than passing an array, per the "individually rendered" requirement.
 */
export function SfotcOperatingModeTable({
  table,
  className,
}: SfotcOperatingModeTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="-mb-px w-full min-w-231 xl:min-w-auto">
        <thead className="uppercase">
          <tr>
            <th>
              Производительность по воздуху: {table.airFlowM3h} м<sup>3</sup>
              /час
            </th>
            <th>
              Статический напор вентилятора: {table.fanStaticPressurePa} Па
            </th>
          </tr>
        </thead>
      </table>
      <table className="w-full min-w-231 xl:min-w-auto">
        <caption className="sr-only">
          Производительность по воздуху: {table.airFlowM3h} м<sup>3</sup>/час
        </caption>
        <thead>
          <tr>
            <th rowSpan={2} style={{ borderBottomWidth: "0" }}>
              Температура на входе, °С
            </th>
            {table.powerLevels.map((spec) => (
              <PowerLevelHeader key={spec.key} spec={spec} />
            ))}
          </tr>
          <tr>
            {table.powerLevels.map((spec) => (
              <Fragment key={spec.key}>
                <th style={{ borderBottomWidth: "0" }}>T на выходе, °С</th>
                <th style={{ borderBottomWidth: "0" }}>
                  Располагаемый напор, Па
                </th>
              </Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.inletTempC}>
              <td className="text-red-700">
                {row.inletTempC > 0 ? "+" : ""}
                {row.inletTempC}
              </td>
              {table.powerLevels.map((spec) => {
                const reading = row.readings[spec.key] ?? MISSING_READING;
                return (
                  <Fragment key={spec.key}>
                    <OutletCell reading={reading} />
                    <PressureCell reading={reading} />
                  </Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
