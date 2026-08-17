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
    }
  | {
      kind: "text";
      name: string;
    };

export interface Delivery {
  year: number;
  products: ProductReference[];
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
  /** Терминалы по slug населённого пункта: capital/anchor city. */
  transportTerminals: TransportTerminals;
}

export type ProductId = import("./product-catalog").ProductId;
