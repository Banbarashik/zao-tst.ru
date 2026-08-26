export type SettlementType =
  | "city"
  | "village"
  | "settlement"
  | "urban-settlement"
  | "other";

export type ProductReference =
  | {
      kind: "product";
      name: string;
      id: ProductId;
    }
  | {
      kind: "category";
      name: string;
      href: string;
      /**
       * Необязательная описательная приписка перед названием категории.
       * Например: "Калориферы по спецзаказу" + ссылка "КСк".
       */
      prefix?: string;
    }
  | {
      kind: "text";
      name: string;
    };

export interface Delivery {
  year: number;
  products: ProductReference[];

  /**
   * Отраслевой сектор из соответствующей строки regions.xlsx.
   * Храним на уровне поставки, а не Company, чтобы не делать
   * отраслевой сектор свойством компании в региональных данных.
   */
  industrySector: string;

  /**
   * Оставлено для обратной совместимости со старыми данными.
   * В актуальном regions.xlsx столбца "ПРИМЕЧАНИЯ" больше нет.
   */
  note?: string;
}

export interface Settlement {
  name: string;
  slug: string;
  type: SettlementType;
}

export interface Company {
  name: string;
  settlement: Settlement;

  /**
   * Уникальный агрегированный список товаров, когда-либо поставленных компании.
   * Нужен для текущего отображения страницы.
   */
  products: ProductReference[];

  /**
   * Исходные поставки по строкам Excel: год + товары + примечание.
   */
  deliveries: Delivery[];
}

export interface RegionSupplyData {
  slug: string;
  subject: {
    name: string;
    slug: string;
  };
  capital: {
    name: string;
    slug: string;
  };
  companies: Company[];
}

/**
 * Существующий ProductDeliveryLocation оставляем,
 * но он должен содержать companies: string[].
 */
export type ProductDeliveryLocation =
  | {
      kind: "city";
      name: string;
      href: string;
      companies: string[];
    }
  | {
      kind: "region";
      name: string;
      href: string;
      companies: string[];
    };

export interface TransportTerminal {
  company: string;
  address: string;
  deliveryTime?: {
    minDays: number;
    maxDays?: number;
  };
}

export type TransportTerminals = Record<string, TransportTerminal[]>;

export interface RegionData extends RegionSupplyData {
  /** Терминалы по slug населённого пункта: столица, anchor-город или remainder-пункт. */
  transportTerminals: TransportTerminals;
}

export type ProductId = import("./product-catalog").ProductId;

export interface ClimateTableLocation {
  /** Название населённого пункта ровно в формулировке climate.docx. */
  name: string;
  slug: string;
}

export interface ClimateTableRow {
  /** Название климатического показателя ровно в формулировке climate.docx. */
  parameter: string;
  /** Дополнительное условие/обеспеченность: 0.98, ≤ 0°С, ≤ 8°С и т. п. */
  condition?: string;
  /** Значения соответствуют locations по индексу. */
  values: string[];
}

export interface RegionClimateTableData {
  /** Заголовок субъекта РФ из climate.docx без префикса «РЕГИОН:». */
  subject: string;
  locations: ClimateTableLocation[];
  rows: ClimateTableRow[];
}

export interface ProductDeliveryRecord {
  region: {
    name: string;
    slug: string;
    href: string;
  };

  settlement: {
    name: string;
    slug: string;
    type: SettlementType;
    /**
     * Ссылка есть только у столицы и anchor-города.
     * Для остальных населённых пунктов — null.
     */
    href: string | null;
  };

  company: string;

  /** Отраслевой сектор поставки из regions.xlsx. */
  industrySector: string;
}

/**
 * Краткое текстовое описание истории поставок в субъект РФ.
 * Тексты берутся из region-overviews.docx.
 */
export interface RegionOverview {
  /** Название субъекта РФ в исходном DOCX. */
  regionName: string;
  /** Готовый обзорный текст для вывода на странице /regions/[region]. */
  text: string;
}
