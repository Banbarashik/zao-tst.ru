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

// ─── Model-specific airflow configuration ──────────────────────────────────────
/**
 * Maps each SFO model to its available airflow values (as a union).
 * Use this to define which airflows are valid for each model.
 */
export type ModelAirflowConfig = {
  sfo16: "airflow1800" | "airflow2000" | "airflow2200";
  sfo25: "airflow2000" | "airflow2300" | "airflow2500";
  sfo40: "airflow3000" | "airflow3500" | "airflow4000";
  sfo60: "airflow4000" | "airflow5000" | "airflow5500";
  sfo100: "airflow5000" | "airflow6000" | "airflow7000";
  sfo160: "airflow8000" | "airflow10000" | "airflow12000";
  sfo250: "airflow12000" | "airflow15000" | "airflow18000";
};

/**
 * Type-safe structure for SFO Operating Parameter Tables.
 * Enforces that each model can only have its specific airflow variants.
 */
export type SFODataStructure = {
  [Model in keyof ModelAirflowConfig]: {
    [Airflow in ModelAirflowConfig[Model]]: TablesByPower;
  };
};
