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

function OutletCell({ reading }: { reading: PowerLevelReading }) {
  const displayValue =
    reading.status === "unavailable"
      ? "⛔"
      : `${reading.outletTempC! > 0 ? "+" : ""}${reading.outletTempC}`;

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
  return <td>{reading.availablePressurePa ?? ""}</td>;
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
 * available static pressure at three power levels, across a range of
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
              Производительность по воздуху: 12000 м<sup>3</sup>/час
            </th>
            <th>Статический напор вентилятора: 949 Па</th>
          </tr>
        </thead>
      </table>
      <table className="w-full min-w-231 xl:min-w-auto">
        <caption className="sr-only">
          Производительность по воздуху: {table.airFlowM3h} м3/час
        </caption>
        <thead>
          <tr>
            <th rowSpan={2} style={{ borderBottomWidth: "0" }}>
              Температура на входе, °С
            </th>
            <PowerLevelHeader spec={table.powerLevels.full} />
            <PowerLevelHeader spec={table.powerLevels.twoThirds} />
            <PowerLevelHeader spec={table.powerLevels.oneThird} />
          </tr>
          <tr>
            <th style={{ borderBottomWidth: "0" }}>T на выходе, °С</th>
            <th style={{ borderBottomWidth: "0" }}>Располагаемый напор, Па</th>
            <th style={{ borderBottomWidth: "0" }}>T на выходе, °С</th>
            <th style={{ borderBottomWidth: "0" }}>Располагаемый напор, Па</th>
            <th style={{ borderBottomWidth: "0" }}>T на выходе, °С</th>
            <th style={{ borderBottomWidth: "0" }}>Располагаемый напор, Па</th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.inletTempC}>
              <td className="text-red-700">
                {row.inletTempC > 0 ? "+" : ""}
                {row.inletTempC}
              </td>
              <OutletCell reading={row.full} />
              <PressureCell reading={row.full} />
              <OutletCell reading={row.twoThirds} />
              <PressureCell reading={row.twoThirds} />
              <OutletCell reading={row.oneThird} />
              <PressureCell reading={row.oneThird} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
