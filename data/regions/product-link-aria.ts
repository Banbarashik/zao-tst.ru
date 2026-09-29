import { getCityNameForms } from "./city-name-forms";
import type { ProductReference, Settlement } from "./types";

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
  | "kalorifer"
  | "electrokalorifer"
  | "installation"
  | "cabinet"
  | "aggregate"
  | "ten";

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

  if (/^СФОЦ(?:\s|-|$)/i.test(designation) || /\bustanovka-sfotc-/i.test(search)) {
    return "installation";
  }

  if (/^СФО(?:\s|-|$)/i.test(designation) || /\belektrokalorifer-sfo-/i.test(search)) {
    return "electrokalorifer";
  }

  if (/^ШУК(?:\s|-|$)/i.test(designation) || /\bshkaf-upravleniia-shuk-/i.test(search)) {
    return "cabinet";
  }

  if (
    /^(?:АО\s*2|СТД-300|АВО)(?:\s|-|$)/i.test(designation) ||
    /\bagregat-/i.test(search)
  ) {
    return "aggregate";
  }

  if (/^ТЭН/i.test(designation) || /\bteny-/i.test(search)) {
    return "ten";
  }

  // Сначала более длинные обозначения, чтобы общий "КП" не перехватывал их.
  if (/^КП(?:ВС|ВУ)(?:\s|-|$)/i.test(designation)) {
    return "water-kalorifer";
  }

  if (/^КП(?:ПС|ПУ)(?:\s|-|$)/i.test(designation)) {
    return "steam-kalorifer";
  }

  if (/^КП(?:Ск|СК)(?:\s|-|$)/i.test(designation)) {
    return "steam-kalorifer";
  }

  if (/^КСк(?:\s|-|$)/i.test(designation) || /^КСК(?:\s|-|$)/i.test(designation)) {
    return "water-kalorifer";
  }

  if (/^ТВВ(?:\s|-|$)/i.test(designation)) {
    return "water-kalorifer";
  }

  if (/^КФБ(?:\s|-|$)/i.test(designation)) {
    if (/(?:^|\s)П$/i.test(designation) || /-p(?:\s|$)/i.test(product.id ?? "")) {
      return "steam-kalorifer";
    }

    if (/(?:^|\s)М$/i.test(designation) || /-a[34](?:\s|$)/i.test(product.id ?? "")) {
      return "water-kalorifer";
    }

    return "kalorifer";
  }

  if (/^КП(?:\s|-|$)/i.test(designation)) {
    return "steam-kalorifer";
  }

  if (
    /\bkalorifer-/i.test(search) ||
    /\/kalorifery-/i.test(search) ||
    /\/kalorifery$/i.test(search)
  ) {
    return "kalorifer";
  }

  return null;
}

function orderNoun(kind: EquipmentKind, plural: boolean) {
  const labels: Record<EquipmentKind, { singular: string; plural: string }> = {
    "water-kalorifer": {
      singular: "водяной калорифер",
      plural: "водяные калориферы",
    },
    "steam-kalorifer": {
      singular: "паровой калорифер",
      plural: "паровые калориферы",
    },
    kalorifer: {
      singular: "калорифер",
      plural: "калориферы",
    },
    electrokalorifer: {
      singular: "электрокалорифер",
      plural: "электрокалориферы",
    },
    installation: {
      singular: "отопительную установку",
      plural: "отопительные установки",
    },
    cabinet: {
      singular: "шкаф управления",
      plural: "шкафы управления",
    },
    aggregate: {
      singular: "отопительный агрегат",
      plural: "отопительные агрегаты",
    },
    ten: {
      singular: "оребренный ТЭН",
      plural: "оребренные ТЭНы",
    },
  };

  return plural ? labels[kind].plural : labels[kind].singular;
}

function experienceNoun(kind: EquipmentKind) {
  const labels: Record<EquipmentKind, string> = {
    "water-kalorifer": "калориферов",
    "steam-kalorifer": "калориферов",
    kalorifer: "калориферов",
    electrokalorifer: "электрокалориферов",
    installation: "отопительных установок",
    cabinet: "шкафов управления",
    aggregate: "отопительных агрегатов",
    ten: "оребренных ТЭНов",
  };

  return labels[kind];
}

function productPhrase(noun: string, designation: string, kind: EquipmentKind) {
  // "ТЭНы" — уже само название товарной группы, повторять его после
  // "оребренный ТЭН / оребренных ТЭНов" не нужно.
  if (kind === "ten" && /^ТЭН/i.test(designation)) {
    return noun;
  }

  return `${noun} ${designation}`.trim();
}

function cleanSettlementName(name: string) {
  return name.replace(/^(?:г\.|с\.|п\.|пгт\.)\s*/i, "").trim();
}

function deliveryDestination(settlement: Settlement) {
  const name = cleanSettlementName(settlement.name);

  switch (settlement.type) {
    case "city":
      return `город ${name}`;
    case "village":
      return `село ${name}`;
    case "settlement":
      return `посёлок ${name}`;
    case "urban-settlement":
      return `посёлок городского типа ${name}`;
    case "other":
      return `населённый пункт ${name}`;
  }
}

/**
 * aria-label для ссылок с региональной страницы на товар / категорию.
 *
 * Пример:
 * "Заказать паровой калорифер КПСк 4-11 с доставкой в город Омск"
 */
export function getRegionalProductAriaLabel(
  product: LinkedProductReference,
  settlement: Settlement,
): string {
  const kind = equipmentKind(product);
  const designation = productDesignation(product);

  if (!kind) {
    return `Заказать ${designation} с доставкой в ${deliveryDestination(settlement)}`;
  }

  const plural = product.kind === "category";
  const phrase = productPhrase(orderNoun(kind, plural), designation, kind);

  return `Заказать ${phrase} с доставкой в ${deliveryDestination(settlement)}`;
}

/**
 * aria-label для кликабельного города в таблице на странице конкретного товара.
 *
 * Здесь намеренно используем нейтральную товарную группу во множественном
 * родительном падеже: для КПСк и КСк это "калориферов", без повторения
 * "паровых / водяных".
 *
 * Пример:
 * "Опыт эксплуатации калориферов КПСк 4-11 на предприятиях города Омска"
 */
export function getProductDeliveryCityAriaLabel(
  product: ProductLike,
  cityName: string,
): string | null {
  const cityForms = getCityNameForms(cleanSettlementName(cityName));

  if (!cityForms) {
    return null;
  }

  const kind = equipmentKind(product);
  const designation = productDesignation(product);

  if (!kind) {
    return `Опыт эксплуатации ${designation} на предприятиях города ${cityForms.genitive}`;
  }

  const phrase = productPhrase(experienceNoun(kind), designation, kind);

  return `Опыт эксплуатации ${phrase} на предприятиях города ${cityForms.genitive}`;
}
