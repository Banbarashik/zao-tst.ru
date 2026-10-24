import type { TableDefinition } from "@/components/general_pages/kalorifer-blocks/sequentialHeatingTable";

/** Exact column proportions taken from the source DOCX. */
const NINE_COLUMN_WIDTHS = [
  "40%",
  "8.329%",
  "8.335%",
  "8.329%",
  "8.329%",
  "8.342%",
  "8.329%",
  "8.342%",
  "8.323%",
] as const;
const FIVE_COLUMN_WIDTHS = ["40%"] as const;

/**
 * These three tables appear in the same order as in tables.docx.
 * All numerical values are strings to preserve the DOCX formatting.
 * Uses the existing TechnicalTable component, without changes.
 */

/** Table 1: Integral parameter summary (first table). */
export const ntuTable1: TableDefinition = {
  id: "ntu-integral-parameters-1",
  ariaLabel:
    "СВОДНАЯ ТАБЛИЦА ИНТЕГРАЛЬНЫХ ПАРАМЕТРОВ 4-РЯДНЫХ БЛОКОВ КФБ-12 А М ПО МЕТОДУ NTU",
  headerRowCount: 2,
  columnWidths: NINE_COLUMN_WIDTHS,
  rows: [
    {
      cells: [
        {
          header: true,
          scope: "colgroup",
          colSpan: 9,
          content:
            "СВОДНАЯ ТАБЛИЦА ИНТЕГРАЛЬНЫХ ПАРАМЕТРОВ 4-РЯДНЫХ БЛОКОВ КФБ-12 А М ПО МЕТОДУ NTU",
        },
      ],
    },
    {
      cells: [
        { header: true, scope: "col", content: "РАБОЧИЙ ПАРАМЕТР УСТАНОВКИ" },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Перекрестноточная\nОбычный режим",
        },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Перекрестноточная\nФорсированный режим",
        },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Последовательная\nпрямоточная",
        },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Последовательная\nпротивоточная",
        },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Тепловая мощность блока А3 / А4, кВт",
        },
        { content: "514" },
        { content: "567" },
        { content: "559" },
        { content: "615" },
        { content: "408" },
        { content: "463" },
        { content: "513" },
        { content: "589" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Температура воздуха на выходе из блока А3 / А4, °C",
        },
        { content: "+69" },
        { content: "+75" },
        { content: "+74" },
        { content: "+80" },
        { content: "+56" },
        { content: "+63" },
        { content: "+68" },
        { content: "+77" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Суммарный расход воды А3 / А4, кг/ч",
        },
        { content: "17 700" },
        { content: "19 500" },
        { content: "30 000" },
        { content: "36 200" },
        { content: "10 150" },
        { content: "13 440" },
        { content: "10 150" },
        { content: "13 440" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Скорость воды в трубках А3 / А4, м/с",
        },
        { content: "0.436" },
        { content: "0.363" },
        { content: "0.739" },
        { content: "0.673" },
        { content: "1.000" },
        { content: "1.000" },
        { content: "1.000" },
        { content: "1.000" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Аэродинамическое сопротивление А3 / А4, Па",
        },
        { content: "929" },
        { content: "1226" },
        { content: "929" },
        { content: "1226" },
        { content: "929" },
        { content: "1226" },
        { content: "929" },
        { content: "1226" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Гидравлическое сопротивление А3 / А4, кПа",
        },
        { content: "3.8" },
        { content: "2.6" },
        { content: "11.0" },
        { content: "9.1" },
        { content: "80.6" },
        { content: "80.1" },
        { content: "80.6" },
        { content: "80.1" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Тепловой КПД блока А3 М / А4 М, %",
        },
        { content: "68.8" },
        { content: "75.9" },
        { content: "74.8" },
        { content: "82.4" },
        { content: "54.6" },
        { content: "62.0" },
        { content: "68.7" },
        { content: "78.9" },
      ],
    },
  ],
};

/** Table 2: Four-row block efficiency parameters. */
export const ntuTable2: TableDefinition = {
  id: "ntu-efficiency",
  ariaLabel: "ПАРАМЕТРЫ ЭФФЕКТИВНОСТИ 4-РЯДНОГО БЛОКА ПО NTU",
  headerRowCount: 1,
  columnWidths: FIVE_COLUMN_WIDTHS,
  rows: [
    {
      cells: [
        {
          header: true,
          scope: "col",
          content: "ПАРАМЕТРЫ ЭФФЕКТИВНОСТИ 4-РЯДНОГО БЛОКА ПО NTU",
        },
        { header: true, scope: "col", content: "КФБ-12 А3 М\nОбычный режим" },
        {
          header: true,
          scope: "col",
          content: "КФБ-12 А3 М\nФорсированный режим",
        },
        { header: true, scope: "col", content: "КФБ-12 А4 М\nОбычный режим" },
        {
          header: true,
          scope: "col",
          content: "КФБ-12 А4 М\nФорсированный режим",
        },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Итоговая температура воздуха на выходе, °C",
        },
        { content: "69" },
        { content: "74" },
        { content: "75" },
        { content: "80" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Суммарная тепловая мощность блока, кВт",
        },
        { content: "514" },
        { content: "559" },
        { content: "567" },
        { content: "615" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Суммарный расход воды на весь блок, кг/ч",
        },
        { content: "17700" },
        { content: "30000" },
        { content: "19500" },
        { content: "36200" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Температура обратной воды, возвращаемой в сеть, °C",
        },
        { content: "70" },
        { content: "79" },
        { content: "70" },
        { content: "80" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Средняя скорость движения воды в трубках, м/с",
        },
        { content: "0.44" },
        { content: "0.74" },
        { content: "0.36" },
        { content: "0.67" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Общий тепловой КПД, %",
        },
        { content: "69" },
        { content: "75" },
        { content: "76" },
        { content: "80" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Полное воздушное сопротивление блока, Па",
        },
        { content: "929" },
        { content: "929" },
        { content: "1226" },
        { content: "1226" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Полное гидравлическое сопротивление блока, кПа",
        },
        { content: "4" },
        { content: "11" },
        { content: "3" },
        { content: "9" },
      ],
    },
  ],
};

/** Table 3: Integral parameter summary (third table). */
export const ntuTable3: TableDefinition = {
  id: "ntu-integral-parameters-2",
  ariaLabel:
    "СВОДНАЯ ТАБЛИЦА ИНТЕГРАЛЬНЫХ ПАРАМЕТРОВ 4-РЯДНЫХ БЛОКОВ КФБ-12 А М ПО МЕТОДУ NTU — таблица 3",
  headerRowCount: 2,
  columnWidths: NINE_COLUMN_WIDTHS,
  rows: [
    {
      cells: [
        {
          header: true,
          scope: "colgroup",
          colSpan: 9,
          content:
            "СВОДНАЯ ТАБЛИЦА ИНТЕГРАЛЬНЫХ ПАРАМЕТРОВ 4-РЯДНЫХ БЛОКОВ КФБ-12 А М ПО МЕТОДУ NTU",
        },
      ],
    },
    {
      cells: [
        { header: true, scope: "col", content: "РАБОЧИЙ ПАРАМЕТР УСТАНОВКИ" },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Перекрестноточная\nОбычный режим",
        },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Перекрестноточная\nФорсированный режим",
        },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Последовательная\nпрямоточная",
        },
        {
          header: true,
          scope: "colgroup",
          colSpan: 2,
          content: "Последовательная\nпротивоточная",
        },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Тепловая мощность блока А3 / А4, кВт",
        },
        { content: "306" },
        { content: "331" },
        { content: "347" },
        { content: "369" },
        { content: "277" },
        { content: "303" },
        { content: "338" },
        { content: "367" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Температура воздуха на выходе из блока А3 / А4, °C",
        },
        { content: "+75" },
        { content: "+80" },
        { content: "+83" },
        { content: "+88" },
        { content: "+68" },
        { content: "+74" },
        { content: "+81" },
        { content: "+87" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Суммарный расход воды А3 / А4, кг/ч",
        },
        { content: "10 550" },
        { content: "11 400" },
        { content: "30 000" },
        { content: "36 200" },
        { content: "10 150" },
        { content: "13 440" },
        { content: "10 150" },
        { content: "13 440" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Скорость воды в трубках А3 / А4, м/с",
        },
        { content: "0.260" },
        { content: "0.212" },
        { content: "0.739" },
        { content: "0.673" },
        { content: "1.000" },
        { content: "1.000" },
        { content: "1.000" },
        { content: "1.000" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Аэродинамическое сопротивление А3 / А4, Па",
        },
        { content: "295" },
        { content: "393" },
        { content: "295" },
        { content: "393" },
        { content: "295" },
        { content: "393" },
        { content: "295" },
        { content: "393" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Гидравлическое сопротивление А3 / А4, кПа",
        },
        { content: "1.4" },
        { content: "0.9" },
        { content: "11.0" },
        { content: "9.1" },
        { content: "80.6" },
        { content: "80.1" },
        { content: "80.6" },
        { content: "80.1" },
      ],
    },
    {
      cells: [
        {
          header: true,
          scope: "row",
          align: "left",
          content: "Тепловой КПД блока А3 М / А4 М, %",
        },
        { content: "75.9" },
        { content: "82.2" },
        { content: "86.0" },
        { content: "91.6" },
        { content: "68.7" },
        { content: "75.1" },
        { content: "83.7" },
        { content: "90.9" },
      ],
    },
  ],
};
