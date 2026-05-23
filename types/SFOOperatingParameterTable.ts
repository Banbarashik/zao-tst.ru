// ─── Типы ────────────────────────────────────────────────────────────────────

export type CellColor = "green" | "yellow" | "orange" | "red" | null;

interface TempColumn {
  /** Значение температуры входящего воздуха, °C */
  inputTemp: number;
  /** Цвет ячейки заголовка температуры */
  color: CellColor;
  /** Температура воздуха на выходе, °C */
  outputTemp: number;
  /** Температура поверхности ТЭНа, °C */
  surfaceTemp: number;
  /** Аэродинамическое сопротивление, Па */
  resistance: number;
}

export interface TableSection {
  /** Список колонок (каждая — одна температура) */
  columns: TempColumn[];
}

export interface TableData {
  /** Производительность по воздуху, м³/час */
  airflow: number;
  /** Скорость в живом сечении, м/сек */
  velocity: number;
  /** Заголовок колонки мощности */
  powerLabel: string;
  /** Значение тепловой мощности, кВт */
  power: number;
  /**
   * Две секции таблицы.
   * sections[0] — диапазон отрицательных температур (верхняя половина)
   * sections[1] — диапазон положительных температур (нижняя половина)
   */
  sections: [TableSection, TableSection];
}

export interface TablesByPower {
  fullPower: TableData;
  twoThirdsPower: TableData;
  oneThirdPower: TableData;
}
