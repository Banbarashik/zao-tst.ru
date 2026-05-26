export const PRECISE_ELECTRO_CATEGORIES = ["sfo", "sfotc", "shuk"] as const;

export type ElectroCategory = (typeof PRECISE_ELECTRO_CATEGORIES)[number];

export type ElectroCategoryMeta = {
  tablePageUrl: string;
  catalogFileName: string;
  tableLinkText: string;
  catalogLinkText: string;
  nom: string;
  nomAlt?: string;
  gen: string;
  pluGen: string;
  getProductTitle: (product: { name: string; shortName: string }) => string;
};

export const ELECTRO_CATEGORY_META: Record<
  ElectroCategory,
  ElectroCategoryMeta
> = {
  sfo: {
    tablePageUrl: "elektronagrevateli",
    catalogFileName: "Electrokalorifer_SFO_katalog_2025.pdf",
    tableLinkText: "Электрокалориферы СФО",
    catalogLinkText: "Каталог калориферов СФО",
    nom: "электрокалорифер",
    nomAlt: "электрический калорифер",
    gen: "электрокалорифера",
    pluGen: "электрокалориферов",
    getProductTitle: (product) => product.name,
  },
  sfotc: {
    tablePageUrl: "teploventilyatory",
    catalogFileName: "Electroustanovka_SFOTC_katalog_2025.pdf",
    tableLinkText: "Установки СФОЦ - характеристики",
    catalogLinkText: "Каталог установок СФОЦ",
    nom: "электрокалориферная установка",
    nomAlt: "установка с электрокалорифером",
    gen: "установки",
    pluGen: "электрокалориферных установок",
    getProductTitle: (product) =>
      `Электрокалориферная установка ${product.shortName}`,
  },
  shuk: {
    tablePageUrl: "shkafy-upravleniya",
    catalogFileName: "Electroshkaf_SHUK_katalog_2025.pdf",
    tableLinkText: "Шкафы управления калорифером",
    catalogLinkText: "Каталог шкафов управления ШУК",
    nom: "шкаф ШУК",
    gen: "шкафа управления",
    pluGen: "шкафов ШУК",
    getProductTitle: (product) =>
      `Шкаф управления калорифером ${product.shortName}`,
  },
};

export function getPreciseElectroCategory(product: {
  categories: string[];
}): ElectroCategory | undefined {
  return PRECISE_ELECTRO_CATEGORIES.find((category) =>
    product.categories.includes(category),
  );
}

export function getElectroProductTitle(
  product: { name: string; shortName: string },
  category?: ElectroCategory,
) {
  if (!category) {
    return product.name;
  }

  return ELECTRO_CATEGORY_META[category].getProductTitle(product);
}
