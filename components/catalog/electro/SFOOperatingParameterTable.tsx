import type {
  CellColor,
  TableData,
  TableSection,
} from "@/types/SFOOperatingParameterTable";

// ─── Цветовые классы (Tailwind) ───────────────────────────────────────────────
const COLOR_CLASS: Record<NonNullable<CellColor>, string> = {
  green: "bg-green-200  text-red-900",
  yellow: "bg-yellow-100 text-red-900",
  red: "bg-[#fabf8f] text-red-900",
};

const ROW_HEADER_CLASS = "text-left pl-1 py-1";

function cellColorClass(color: CellColor): string {
  return color ? COLOR_CLASS[color] : "";
}

// ─── Форматирование числа со знаком ──────────────────────────────────────────
function fmt(value: number): string {
  return value > 0 ? `+${value}` : String(value);
}

// ─── Секция строк таблицы ─────────────────────────────────────────────────────
function TableRows({ section }: { section: TableSection }) {
  const { columns } = section;

  return (
    <>
      {/* Строка 1: Температура входящего воздуха */}
      <tr>
        <th colSpan={2} className={ROW_HEADER_CLASS}>
          Температура входящего воздуха, °C
        </th>
        {columns.map((col, i) => (
          <td key={i} className={`${cellColorClass(col.color)} w-14`}>
            {fmt(col.inputTemp)}
          </td>
        ))}
      </tr>

      {/* Строка 2: Температура воздуха на выходе */}
      <tr>
        <th colSpan={2} className={ROW_HEADER_CLASS}>
          Температура воздуха на выходе, °C
        </th>
        {columns.map((col, i) => (
          <td key={i}>{fmt(col.outputTemp)}</td>
        ))}
      </tr>

      {/* Строка 3: Температура поверхности ТЭНа */}
      <tr>
        <th colSpan={2} className={ROW_HEADER_CLASS}>
          Температура поверхности ТЭНа, °C
        </th>
        {columns.map((col, i) => (
          <td
            key={i}
            className={`${col.surfaceTemp >= 180 ? "text-[#c00000]" : ""}`}
          >
            {col.surfaceTemp}
          </td>
        ))}
      </tr>

      {/* Строка 4: Аэродинамическое сопротивление */}
      <tr>
        <th colSpan={2} className={ROW_HEADER_CLASS}>
          Аэродинамическое сопротивление, Па
        </th>
        {columns.map((col, i) => (
          <td key={i}>{col.resistance}</td>
        ))}
      </tr>
    </>
  );
}

// ─── Главный компонент ────────────────────────────────────────────────────────
interface TableProps {
  data: TableData;
  className?: string;
}

export function SFOOperatingParameterTable({ data }: TableProps) {
  const { airflow, velocity, powerLabel, power, sections } = data;

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          <tr>
            {/* Производительность */}
            <th className="py-1">
              Производительность по воздуху, м<sup>3</sup>/час
            </th>
            <th className="w-15">{airflow}</th>

            {/* Скорость */}
            <th colSpan={4}>Скорость в живом сечении, м/сек</th>
            <th className="w-15">{velocity}</th>

            {/* Мощность */}
            <th colSpan={4}>{powerLabel}</th>
            <th className="w-15">{power}</th>
          </tr>
        </thead>

        <tbody>
          {sections.map((section, i) => (
            <TableRows key={i} section={section} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
