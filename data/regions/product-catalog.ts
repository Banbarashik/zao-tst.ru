import productsData from "@/data/products.json";

/**
 * Минимальная форма товара, необходимая региональному разделу.
 * products.json может содержать любые дополнительные свойства.
 */
export interface ProductCatalogItem {
  id: string;
}

export const PRODUCTS: readonly ProductCatalogItem[] = productsData;

/** Семантический тип id товара из products.json. */
export type ProductId = ProductCatalogItem["id"];

/**
 * Runtime-набор id для быстрой проверки ссылок при разборе Excel.
 * Единственный источник данных — /data/products.json.
 */
export const PRODUCT_ID_SET: ReadonlySet<ProductId> = new Set(
  PRODUCTS.map((product) => product.id),
);
