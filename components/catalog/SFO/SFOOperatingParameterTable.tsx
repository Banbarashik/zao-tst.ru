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
        <td colSpan={2} className="border border-gray-300 px-3 py-1 text-sm">
          Температура входящего воздуха, °C
        </td>
        {columns.map((col, i) => (
          <td
            key={i}
            className={`border border-gray-300 px-3 py-1 text-center text-sm font-medium ${cellColorClass(col.color)}`}
          >
            {fmt(col.inputTemp)}
          </td>
        ))}
      </tr>

      {/* Строка 2: Температура воздуха на выходе */}
      <tr>
        <td colSpan={2} className="border border-gray-300 px-3 py-1 text-sm">
          Температура воздуха на выходе, °C
        </td>
        {columns.map((col, i) => (
          <td
            key={i}
            className="border border-gray-300 px-3 py-1 text-center text-sm"
          >
            {fmt(col.outputTemp)}
          </td>
        ))}
      </tr>

      {/* Строка 3: Температура поверхности ТЭНа */}
      <tr>
        <td colSpan={2} className="border border-gray-300 px-3 py-1 text-sm">
          Температура поверхности ТЭНа, °C
        </td>
        {columns.map((col, i) => (
          <td
            key={i}
            className={`border border-gray-300 px-3 py-1 text-center text-sm ${
              col.surfaceTemp >= 181 ? "text-[#c00000]" : ""
            }`}
          >
            {col.surfaceTemp}
          </td>
        ))}
      </tr>

      {/* Строка 4: Аэродинамическое сопротивление */}
      <tr>
        <td colSpan={2} className="border border-gray-300 px-3 py-1 text-sm">
          Аэродинамическое сопротивление, Па
        </td>
        {columns.map((col, i) => (
          <td
            key={i}
            className="border border-gray-300 px-3 py-1 text-center text-sm"
          >
            {col.resistance}
          </td>
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

export function SFOOperatingParameterTable({
  data,
  className = "",
}: TableProps) {
  const { airflow, velocity, powerLabel, power, sections } = data;

  // Максимальное кол-во колонок среди обеих секций (для правильного colspan)
  const maxCols = Math.max(...sections.map((s) => s.columns.length));

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="border-collapse border border-gray-300 text-gray-800">
        <thead>
          <tr>
            {/* Производительность */}
            <th className="w-56 border border-gray-300 px-3 py-2 text-left text-sm font-normal">
              Производительность по воздуху, м³/час
            </th>
            <th className="border border-gray-300 px-3 py-2 text-center text-sm font-medium">
              {airflow}
            </th>

            {/* Скорость */}
            <th
              className="border border-gray-300 px-3 py-2 text-center text-sm font-normal"
              colSpan={4}
            >
              Скорость в живом сечении, м/сек
            </th>
            <th className="border border-gray-300 px-3 py-2 text-center text-sm font-medium">
              {velocity}
            </th>

            {/* Мощность */}
            <th
              className="border border-gray-300 px-3 py-2 text-center text-sm font-normal"
              colSpan={4}
            >
              {powerLabel}
            </th>
            <th className="border border-gray-300 px-3 py-2 text-center text-sm font-medium">
              {power}
            </th>
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
