import type {
  CellColor,
  TableData,
  TableSection,
} from "@/types/SFOOperatingParameterTable";

// ─── Цветовые классы (Tailwind) ───────────────────────────────────────────────
const COLOR_CLASS: Record<NonNullable<CellColor>, string> = {
  green: "bg-green-200  text-red-900",
  yellow: "bg-yellow-100 text-red-900",
  orange: "",
  red: "bg-[#fabf8f]    text-red-900",
};

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
        <td colSpan={2}>Температура входящего воздуха, °C</td>
        {columns.map((col, i) => (
          <td key={i} className={`${cellColorClass(col.color)}`}>
            {fmt(col.inputTemp)}
          </td>
        ))}
      </tr>

      {/* Строка 2: Температура воздуха на выходе */}
      <tr>
        <td colSpan={2}>Температура воздуха на выходе, °C</td>
        {columns.map((col, i) => (
          <td key={i}>{fmt(col.outputTemp)}</td>
        ))}
      </tr>

      {/* Строка 3: Температура поверхности ТЭНа */}
      <tr>
        <td colSpan={2}>Температура поверхности ТЭНа, °C</td>
        {columns.map((col, i) => (
          <td
            key={i}
            className={`${col.surfaceTemp >= 181 ? "text-[#c00000]" : ""}`}
          >
            {col.surfaceTemp}
          </td>
        ))}
      </tr>

      {/* Строка 4: Аэродинамическое сопротивление */}
      <tr>
        <td colSpan={2}>Аэродинамическое сопротивление, Па</td>
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
            <th>Производительность по воздуху, м³/час</th>
            <th>{airflow}</th>

            {/* Скорость */}
            <th colSpan={4}>Скорость в живом сечении, м/сек</th>
            <th>{velocity}</th>

            {/* Мощность */}
            <th colSpan={4}>{powerLabel}</th>
            <th>{power}</th>
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
