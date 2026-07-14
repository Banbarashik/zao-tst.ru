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
      ? "—"
      : `${reading.outletTempC! > 0 ? "+" : ""}${reading.outletTempC}`;

  return (
    <td
      className={`border border-gray-300 px-2 py-1 text-center font-medium ${STATUS_STYLES[reading.status]}`}
      title={STATUS_LABEL[reading.status]}
    >
      {displayValue}
    </td>
  );
}

function PressureCell({ reading }: { reading: PowerLevelReading }) {
  return (
    <td className="border border-gray-300 px-2 py-1 text-center">
      {reading.availablePressurePa ?? "—"}
    </td>
  );
}

function PowerLevelHeader({ spec }: { spec: PowerLevelSpec }) {
  return (
    <th
      colSpan={2}
      className="border border-gray-300 px-2 py-1 text-center align-bottom font-normal"
    >
      {spec.label}
      <br />({spec.kw} кВт)
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
    <div className={className}>
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">
          Производительность по воздуху: {table.airFlowM3h} м3/час
        </caption>
        <thead>
          <tr>
            <th
              colSpan={1}
              rowSpan={3}
              className="border border-gray-300 px-2 py-1 align-bottom font-normal"
            >
              Температура
              <br />
              на входе, °С
            </th>
            <th
              colSpan={7}
              className="border border-gray-300 px-2 py-1 text-center font-semibold"
            >
              Производительность по воздуху: {table.airFlowM3h} м3/час
              <br />
              Статический напор вентилятора: {table.fanStaticPressurePa} Па
            </th>
          </tr>
          <tr>
            <PowerLevelHeader spec={table.powerLevels.full} />
            <PowerLevelHeader spec={table.powerLevels.twoThirds} />
            <PowerLevelHeader spec={table.powerLevels.oneThird} />
          </tr>
          <tr>
            <th className="border border-gray-300 px-2 py-1 font-normal">
              T на выходе, °С
            </th>
            <th className="border border-gray-300 px-2 py-1 font-normal">
              Располагаемый напор, Па
            </th>
            <th className="border border-gray-300 px-2 py-1 font-normal">
              T на выходе, °С
            </th>
            <th className="border border-gray-300 px-2 py-1 font-normal">
              Располагаемый напор, Па
            </th>
            <th className="border border-gray-300 px-2 py-1 font-normal">
              T на выходе, °С
            </th>
            <th className="border border-gray-300 px-2 py-1 font-normal">
              Располагаемый напор, Па
            </th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.inletTempC}>
              <td className="border border-gray-300 px-2 py-1 text-center">
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
