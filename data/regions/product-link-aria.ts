import {
  generatedRegions,
  type RegionSlug,
} from "./regions.generated";
import { getRegionNameForms } from "./region-name-forms";
import type {
  ProductDeliveryRecord,
  ProductReference,
  Settlement,
} from "./types";

type LinkedProductReference = Extract<
  ProductReference,
  { kind: "product" | "category" }
>;

type ProductLike = {
  name: string;
  id?: string;
  href?: string;
};

type EquipmentKind =
  | "water-kalorifer"
  | "steam-kalorifer"
  | "generic-kfb"
  | "electric-kalorifer"
  | "electric-installation"
  | "aggregate"
  | "skip";

const PRODUCT_TOKEN_PATTERN =
  /(?:КПСк|КПСК|КСк|КСК|КПВС|КПВУ|КППС|КППУ|КФБ|ТВВ|КП|СФОЦ|СФО|ШУК|АО\s*2|СТД-300|АВО|ТЭН)/i;

function productSearchText(product: ProductLike) {
  return `${product.name} ${product.id ?? ""} ${product.href ?? ""}`.trim();
}

function productDesignation(product: ProductLike) {
  const name = product.name.trim();
  const match = name.match(PRODUCT_TOKEN_PATTERN);

  if (!match || match.index == null) {
    return name;
  }

  return name
    .slice(match.index)
    .replace(/^КПСК\b/i, "КПСк")
    .replace(/^КСК\b/i, "КСк")
    .trim();
}

function equipmentKind(product: ProductLike): EquipmentKind | null {
  const search = productSearchText(product);
  const designation = productDesignation(product);

  // ШУК и ТЭНы должны оставаться ссылками, но без aria-label.
  if (
    /^ШУК(?:\s|-|$)/i.test(designation) ||
    /\bshkaf-upravleniia-shuk-/i.test(search) ||
    /^ТЭН/i.test(designation) ||
    /\bteny-/i.test(search)
  ) {
    return "skip";
  }

  // СФОЦ проверяем раньше СФО.
  if (
    /^СФОЦ(?:\s|-|$)/i.test(designation) ||
    /\bustanovka-sfotc-/i.test(search)
  ) {
    return "electric-installation";
  }

  if (
    /^СФО(?:\s|-|$)/i.test(designation) ||
    /\belektrokalorifer-sfo-/i.test(search)
  ) {
    return "electric-kalorifer";
  }

  if (
    /^(?:АО\s*2|СТД-300|АВО)(?:\s|-|$)/i.test(designation) ||
    /\bagregat-/i.test(search) ||
    /^std300-/i.test(product.id ?? "")
  ) {
    return "aggregate";
  }

  // Более длинные обозначения проверяем раньше общего "КП".
  if (/^КП(?:ВС|ВУ)(?:\s|-|$)/i.test(designation)) {
    return "water-kalorifer";
  }

  if (/^КП(?:ПС|ПУ)(?:\s|-|$)/i.test(designation)) {
    return "steam-kalorifer";
  }

  if (/^КП(?:Ск|СК)(?:\s|-|$)/i.test(designation)) {
    return "steam-kalorifer";
  }

  if (
    /^КСк(?:\s|-|$)/i.test(designation) ||
    /^КСК(?:\s|-|$)/i.test(designation)
  ) {
    return "water-kalorifer";
  }

  if (/^ТВВ(?:\s|-|$)/i.test(designation)) {
    return "water-kalorifer";
  }

  if (/^КФБ(?:\s|-|$)/i.test(designation)) {
    // Единственное согласованное исключение:
    // общая категория /kalorifery-kfb не содержит типа теплоносителя.
    if (product.href === "/kalorifery-kfb") {
      return "generic-kfb";
    }

    if (/(?:^|\s)П$/i.test(designation) || /-p(?:\s|$)/i.test(product.id ?? "")) {
      return "steam-kalorifer";
    }

    if (/(?:^|\s)М$/i.test(designation) || /-a[34](?:\s|$)/i.test(product.id ?? "")) {
      return "water-kalorifer";
    }

    // Не придумываем теплоноситель для неоднозначного КФБ.
    return null;
  }

  if (/^КП(?:\s|-|$)/i.test(designation)) {
    return "steam-kalorifer";
  }

  return null;
}

function regionalNoun(kind: Exclude<EquipmentKind, "skip">, plural: boolean) {
  const labels: Record<
    Exclude<EquipmentKind, "skip">,
    { singular: string; plural: string }
  > = {
    "water-kalorifer": {
      singular: "водяной калорифер",
      plural: "водяные калориферы",
    },
    "steam-kalorifer": {
      singular: "паровой калорифер",
      plural: "паровые калориферы",
    },
    "generic-kfb": {
      singular: "калорифер",
      plural: "калориферы",
    },
    "electric-kalorifer": {
      singular: "электрический калорифер",
      plural: "электрические калориферы",
    },
    "electric-installation": {
      // После "Купить" нужен винительный падеж:
      // "электрическую установку".
      singular: "электрическую установку",
      plural: "электрические установки",
    },
    aggregate: {
      singular: "агрегат",
      plural: "агрегаты",
    },
  };

  return plural ? labels[kind].plural : labels[kind].singular;
}

function productPageNoun(kind: Exclude<EquipmentKind, "skip">) {
  const labels: Record<Exclude<EquipmentKind, "skip">, string> = {
    "water-kalorifer": "калорифера",
    "steam-kalorifer": "калорифера",
    "generic-kfb": "калорифера",
    "electric-kalorifer": "электрокалорифера",
    "electric-installation": "отопительной установки",
    aggregate: "агрегата",
  };

  return labels[kind];
}

function cleanSettlementName(name: string) {
  return name.replace(/^(?:г\.|с\.|п\.|пгт\.)\s*/i, "").trim();
}

function settlementShortPrefix(type: Settlement["type"]) {
  switch (type) {
    case "city":
      return "г.";
    case "village":
      return "с.";
    case "settlement":
      return "п.";
    case "urban-settlement":
      return "пгт.";
    case "other":
      return "";
  }
}

function settlementShortLabel(settlement: Settlement) {
  const name = cleanSettlementName(settlement.name);
  const prefix = settlementShortPrefix(settlement.type);

  return prefix ? `${prefix} ${name}` : name;
}

function regionSlugFromHref(href: string): RegionSlug | null {
  const match = href.match(/^\/regions\/([^#/?]+)/);
  const slug = match?.[1];

  if (!slug || !(slug in generatedRegions)) {
    return null;
  }

  return slug as RegionSlug;
}

/**
 * aria-label для ссылки с региональной страницы на товар или категорию.
 *
 * Пример:
 * "Купить водяной калорифер КСк 2-1 с доставкой в г. Барнаул"
 *
 * ШУК и ТЭНы возвращают null — ссылка остаётся, aria-label не добавляется.
 */
export function getRegionalProductAriaLabel(
  product: LinkedProductReference,
  settlement: Settlement,
): string | null {
  const kind = equipmentKind(product);

  if (!kind || kind === "skip") {
    return null;
  }

  const designation = productDesignation(product);
  const noun = regionalNoun(kind, product.kind === "category");

  return `Купить ${noun} ${designation} с доставкой в ${settlementShortLabel(settlement)}`;
}

/**
 * aria-label для ссылки населённого пункта в таблице на странице товара.
 *
 * Пример:
 * "Опыт эксплуатации калорифера КСк 2-1 на промышленных предприятиях
 * в Алтайском крае: г. Барнаул"
 *
 * Здесь не указываем тип теплоносителя. ШУК и ТЭНы возвращают null.
 */
export function getProductDeliveryCityAriaLabel(
  product: ProductLike,
  delivery: Pick<ProductDeliveryRecord, "region" | "settlement">,
): string | null {
  const kind = equipmentKind(product);

  if (!kind || kind === "skip") {
    return null;
  }

  const regionSlug = regionSlugFromHref(delivery.region.href);

  if (!regionSlug) {
    return null;
  }

  const regionForms = getRegionNameForms(regionSlug);

  if (!regionForms) {
    return null;
  }

  const designation = productDesignation(product);
  const noun = productPageNoun(kind);
  const settlement = settlementShortLabel(delivery.settlement);

  return (
    `Опыт эксплуатации ${noun} ${designation} ` +
    `на промышленных предприятиях в ${regionForms.prepositional}: ${settlement}`
  );
}
