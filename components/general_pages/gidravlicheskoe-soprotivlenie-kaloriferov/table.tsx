import type { CSSProperties } from "react";

type TextAlignment = "left" | "center" | "right";

type TableAlignments = {
  title?: TextAlignment;
  firstColumnHeader?: TextAlignment;
  columnHeaders?: TextAlignment;
  rowLabels?: TextAlignment;
  values?: TextAlignment;
};

type TableCell =
  | string
  | {
      text: string;
      padding?: CSSProperties["padding"];
    };

type TableRow = {
  label: TableCell;
  values: TableCell[];
};

type TableData = {
  title?: TableCell;
  firstColumnHeader: TableCell;
  columns: TableCell[];
  rows: TableRow[];
  alignments?: TableAlignments;
};

function getCellText(cell: TableCell): string {
  return typeof cell === "string" ? cell : cell.text;
}

function getCellStyle(
  cell: TableCell,
  textAlign: TextAlignment,
): CSSProperties {
  return {
    textAlign,
    ...(typeof cell === "object" && cell.padding !== undefined
      ? { padding: cell.padding }
      : {}),
  };
}

const kskTable: TableData = {
  title: {
    text: "СРАВНИТЕЛЬНЫЙ АНАЛИЗ ПАРАМЕТРОВ МНОГОХОДОВЫХ МОДИФИКАЦИЙ КАЛОРИФЕРА КСК 4-11",
    padding: "4px",
  },
  firstColumnHeader: {
    text: "Эксплуатационные и теплотехнические показатели",
    padding: "2px 4px",
  },
  columns: ["2-х ходовая модель", "4-х ходовая модель", "6-ти ходовая модель"],
  rows: [
    {
      label: {
        text: "Температура нагретого воздуха на выходе, °C",
        padding: "2px 4px",
      },
      values: ["+25", "+28", "+30"],
    },
    {
      label: {
        text: "Скорость теплоносителя в трубках, м/с",
        padding: "2px 4px",
      },
      values: ["0.37", "0.74", "1.10"],
    },
    {
      label: {
        text: "Гидравлическое сопротивление контура, кПа",
        padding: "2px 4px",
      },
      values: ["2.1", "17.8", "61.3"],
    },
    {
      label: {
        text: "Температура обратного теплоносителя, °C",
        padding: "2px 4px",
      },
      values: ["55", "53", "52"],
    },
    {
      label: {
        text: "Коэффициент теплопередачи аппарата, Вт/(м²·°C)",
        padding: "2px 4px",
      },
      values: ["44.8", "50.0", "53.4"],
    },
    {
      label: {
        text: "Расчетная тепловая производительность, кВт",
        padding: "2px 4px",
      },
      values: ["364", "387", "400"],
    },
  ],
};

const tvvTable: TableData = {
  title: {
    text: "СРАВНИТЕЛЬНЫЙ АНАЛИЗ ПАРАМЕТРОВ МНОГОХОДОВЫХ МОДИФИКАЦИЙ КАЛОРИФЕРА ТВВ 411",
    padding: "4px",
  },
  firstColumnHeader: {
    text: "Эксплуатационные и теплотехнические показатели",
    padding: "2px 4px",
  },
  columns: ["2-х ходовая модель", "4-х ходовая модель", "6-ти ходовая модель"],
  rows: [
    {
      label: {
        text: "Температура нагретого воздуха на выходе, °C",
        padding: "2px 4px",
      },
      values: ["+22", "+23", "+24"],
    },
    {
      label: {
        text: "Скорость теплоносителя в трубках, м/с",
        padding: "2px 4px",
      },
      values: ["0.23", "0.45", "0.68"],
    },
    {
      label: {
        text: "Гидравлическое сопротивление контура, кПа",
        padding: "2px 4px",
      },
      values: ["1.4", "3.8", "8.9"],
    },
    {
      label: {
        text: "Температура обратного теплоносителя, °C",
        padding: "2px 4px",
      },
      values: ["59", "58", "57"],
    },
    {
      label: {
        text: "Коэффициент теплопередачи аппарата, Вт/(м²·°C)",
        padding: "2px 4px",
      },
      values: ["54.0", "56.6", "58.2"],
    },
    {
      label: {
        text: "Расчетная тепловая производительность, кВт",
        padding: "2px 4px",
      },
      values: ["340", "349", "355"],
    },
  ],
};

const hydraulicResistanceTable: TableData = {
  firstColumnHeader: {
    text: "МОДЕЛЬ КАЛОРИФЕРА И СХЕМА КОНТУРА",
    padding: "2px 8px",
  },
  columns: [
    "ПЛОЩАДЬ ЖИВОГО СЕЧЕНИЯ ДЛЯ ПРОХОДА ВОДЫ, м²",
    "ДЛИНА ТРУБОК В СВЕТУ, м",
    "Число ходов",
    "ГИДРАВЛИЧЕСКОЕ СОПРОТИВЛЕНИЕ, кПа",
  ],
  rows: [
    {
      label: { text: "КСК 3-10 (4-ходовой)", padding: "2px 4px" },
      values: ["0.00116", "1.155", "4", "8.44"],
    },
    {
      label: { text: "КСК 3-10 (6-ходовой)", padding: "2px 4px" },
      values: ["0.00078", "1.155", "6", "20.64"],
    },
    {
      label: { text: "ТВВ 310 (4-ходовой)", padding: "2px 4px" },
      values: ["0.00227", "1.155", "4", "2.36"],
    },
    {
      label: { text: "ТВВ 310 (6-ходовой)", padding: "2px 4px" },
      values: ["0.00151", "1.155", "6", "4.63"],
    },
    {
      label: { text: "КФБ-7 АЗ (6-ходовой)", padding: "2px 4px" },
      values: ["0.00222", "0.860", "6", "2.18"],
    },
  ],
  alignments: {
    firstColumnHeader: "center",
  },
};

type TableProps = {
  data: TableData;
};

function Table({ data }: TableProps) {
  const alignments: Required<TableAlignments> = {
    title: "center",
    firstColumnHeader: "left",
    columnHeaders: "center",
    rowLabels: "left",
    values: "center",
    ...data.alignments,
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          {data.title && (
            <tr>
              <th
                colSpan={data.columns.length + 1}
                style={getCellStyle(data.title, alignments.title)}
              >
                {getCellText(data.title)}
              </th>
            </tr>
          )}

          <tr>
            <th
              style={getCellStyle(
                data.firstColumnHeader,
                alignments.firstColumnHeader,
              )}
            >
              {getCellText(data.firstColumnHeader)}
            </th>

            {data.columns.map((column, index) => (
              <th
                key={index}
                style={getCellStyle(column, alignments.columnHeaders)}
              >
                {getCellText(column)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              <td style={getCellStyle(row.label, alignments.rowLabels)}>
                {getCellText(row.label)}
              </td>

              {row.values.map((value, index) => (
                <td key={index} style={getCellStyle(value, alignments.values)}>
                  {getCellText(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KskComparisonTable() {
  return <Table data={kskTable} />;
}

function TvvComparisonTable() {
  return <Table data={tvvTable} />;
}

function HydraulicResistanceTable() {
  return <Table data={hydraulicResistanceTable} />;
}

export { KskComparisonTable, TvvComparisonTable, HydraulicResistanceTable };
