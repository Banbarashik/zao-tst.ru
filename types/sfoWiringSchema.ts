// ─── Раздел 1: ГРЩ ──────────────────────────────────────────────────────────

export interface GRShchSection {
  /** Заголовок: "ГЛАВНЫЙ ЩИТ ПРЕДПРИЯТИЯ (ГРЩ)" */
  title: string;
  /** Строки описания питающей линии (многострочный текст разбит на массив) */
  supplyLines: string[];
}

// ─── Раздел 2: ЩАУК ──────────────────────────────────────────────────────────

export interface ContactorSection {
  /** "Контактор КМ1 (11 А)" */
  label: string;
  /** "[СЕКЦИЯ 1 – 50% Мощности]" */
  sectionLabel: string;
  /** "Кабель 1: ВВГнг-LS 4х2.5 мм²" */
  cableLabel: string;
  /** "(3 фазы + Рабочий ноль)" */
  cableNote: string;
}

export interface ShchaukSection {
  /** Заголовок щита: "ШКАФ АВТОМАТИКИ..." или "ЩИТ АВТОМАТИКИ..." */
  title: string;
  /** Вводной автомат/рубильник */
  inputBreaker: string;
  /** Внутренний переход / нижний вывод */
  internalTransition: string;
  /** Распределительный элемент (шинный мост / кросс-модуль / шинная сборка) */
  distributor: string;
  /** Строка отпаек к контакторам */
  tapWires: string;
  /** Массив секций контакторов */
  contactors: ContactorSection[];
  /**
   * Нейтральная шина (N) + PE — единая строка.
   * Присутствует только у СФО с 3 секциями (кросс-модульная схема).
   */
  neutralBusNote?: string;
  /**
   * Сводная строка питания секций (под контакторами, перед вводным шкафом).
   * Присутствует у СФО-60 и СФО-250.
   */
  sectionsCableSummary?: string;
}

// ─── Раздел 3: Вводной шкаф ──────────────────────────────────────────────────

export interface CableEntry {
  /** "КАБЕЛЬ №1 (Ряд 1)" */
  label: string;
  /** "Жила Фазы А (2.5 мм²)" */
  phaseA: string;
  /** "Жила Фазы B (2.5 мм²)" */
  phaseB: string;
  /** "Жила Фазы C (2.5 мм²)" */
  phaseC: string;
  /** "Жила Нуля N (2.5 мм²)" */
  neutralN: string;
}

export interface InputCabinetSection {
  /** Заголовок вводного шкафа */
  title: string;
  /** Описание переходного клеммного блока */
  terminalBlockNote: string;
  /** Записи кабелей (по одной на секцию) */
  cables: CableEntry[];
  /**
   * Строка питания блока секций (провода внутри калорифера).
   * Присутствует у СФО-60 и СФО-250.
   */
  blockWireSummary?: string;
  /**
   * Примечание о прямой прокладке без клеммного блока.
   * Присутствует только у СФО-60.
   */
  directWiringNote?: string;
}

// ─── Раздел 4: Калорифер ─────────────────────────────────────────────────────

/**
 * Один столбец/секция в фазной части короба.
 * У СФО-16: элемент описывает "верхнюю" или "нижнюю" полусекцию.
 * У СФО-60/250: элемент описывает ряд (РЯД №1, №2, №3).
 */
export interface PhaseColumn {
  /** Заголовок: "СЕКЦИЯ №1 (ВЕРХНЯЯ - 3 ТЭНа)" / "РЯД №1 (Вход воздуха)" */
  header: string;
  /** Строки фазных подключений (фаза A, B, C) */
  phaseRows: string[];
}

export interface NeutralColumn {
  /** Заголовок: "ВЕРХНЯЯ СЕКЦИЯ" / "РЯД №1" */
  header: string;
  /** "[Провод Нуля N, 2.5 мм²]" */
  neutralWire: string;
  /**
   * Описание нейтральной шины.
   * Присутствует только у СФО-16: "Общая алюминиевая шина «звезды» для ТЭН 1, 3, 5"
   */
  busNote?: string;
}

export interface HeaterSection {
  /** Заголовок: "ЭЛЕКТРОКАЛОРИФЕР СФО-16 (ВНУТРЕННИЕ КОРОБА)" */
  title: string;
  /**
   * Описание внутренних проводов.
   * Присутствует только у СФО-16 (термостойкие провода ПРКА/РКГМ/РКМ).
   */
  internalWiresNote?: string;
  /** Заголовок фазной стороны: "[ФАЗНАЯ СТОРОНА: КОРОБ]" */
  phaseSideLabel: string;
  /** Описание шины блока ряда. Присутствует у СФО-60/250. */
  busRowNote?: string;
  /** Колонки фазной стороны */
  phaseColumns: PhaseColumn[];
  /** Примечание о наконечниках */
  terminalsNote: string;
  /** Заголовок нейтральной стороны */
  neutralSideLabel: string;
  /** Описание шины нейтрали (количество ТЭНов) */
  neutralBusNote: string;
  /** Колонки нейтральной стороны */
  neutralColumns: NeutralColumn[];
  /** Примечание о фиксации проводов */
  wireFixingNote: string;
  /** Заголовок раздела PE: "[ЗАЩИТНОЕ ЗАЗЕМЛЕНИЕ КОРПУСА]" */
  groundingLabel: string;
  /** Строка магистрального провода PE */
  groundingWire: string;
}

// ─── Корневой тип ─────────────────────────────────────────────────────────────

export interface SfoWiringSchema {
  /** Полное название модели: "СФО-16" */
  model: string;
  /** Мощность в кВт: 15 */
  powerKw: number;
  /** Количество секций (контакторов): 2 или 3 */
  numSections: 2 | 3;
  /** Заголовок таблицы целиком */
  tableTitle: string;

  grshch: GRShchSection;
  shchauk: ShchaukSection;
  inputCabinet: InputCabinetSection;
  heater: HeaterSection;
}
