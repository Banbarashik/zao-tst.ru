import { PRODUCT_ID_SET } from "./product-ids.generated";
import type { ProductId, ProductReference } from "./types";

export const PRODUCT_CATEGORY_ROUTES: Record<string, string> = {
  "КСк": "/kalorifery-ksk",
  "КСК": "/kalorifery-ksk",
  "КПСк": "/kalorifery-kpsk",
  "КПСК": "/kalorifery-kpsk",
  "ТВВ": "/kalorifery-tvv",
  "КП": "/kalorifery-kp",
  "КФБ": "/kalorifery-kfb",
  "КФБ-А": "/kalorifery-kfb-a",
  "КФБ-А М": "/kalorifery-kfb-a",
  "КФБ-А П": "/kalorifery-kfb-a",
  "СФО": "/elektrokalorifery",
  "СФОЦ": "/teploventilyatory",
  "ШУК": "/shkafy-upravleniya",
  "АО 2 В": "/ao2-ksk-kpsk",
  "АО 2 П": "/ao2-ksk-kpsk",
  "КПВС": "/kalorifery-voda",
  "КПВУ": "/kalorifery-voda",
  "КППС": "/kalorifery-par",
  "КППУ": "/kalorifery-par",
  "СТД-300 В": "/std300-ksk-kpsk",
  "СТД-300 П": "/std300-ksk-kpsk",
  "СТД-300": "/std300-ksk-kpsk",
  "АВО ХЛ": "/avo-tvv-kp",
};

function normalizeName(value: string) {
  return value
    .trim()
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ");
}

function product(name: string, id: string): ProductReference | null {
  if (!PRODUCT_ID_SET.has(id)) {
    return null;
  }

  return {
    kind: "product",
    name,
    id: id as ProductId,
  };
}

/**
 * Преобразует текстовое обозначение из Excel либо в конкретный product id,
 * либо в ссылку на общую категорию. Если надёжного совпадения нет —
 * возвращает text, чтобы товар не исчез из данных и не получил ложную ссылку.
 */
export function resolveProduct(rawName: string): ProductReference {
  const name = normalizeName(rawName);

  const categoryHref = PRODUCT_CATEGORY_ROUTES[name];
  if (categoryHref) {
    return { kind: "category", name, href: categoryHref };
  }

  if (name === "ТЭНы") {
    return product(name, "teny-orebrenny'e") ?? { kind: "text", name };
  }

  let match = name.match(/^КСк\s+([234])-(\d{1,2})$/i);
  if (match) {
    return (
      product(name, `kalorifer-ksk-${match[1]}-${Number(match[2])}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  match = name.match(/^КПСк\s+([234])-(\d{1,2})$/i);
  if (match) {
    return (
      product(name, `kalorifer-kpsk-${match[1]}-${Number(match[2])}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  match = name.match(/^ТВВ\s+(\d{3})$/);
  if (match) {
    return product(name, `kalorifer-tvv-${match[1]}`) ?? { kind: "text", name };
  }

  match = name.match(/^КП\s+(\d{3})$/);
  if (match) {
    return product(name, `kalorifer-kp-${match[1]}`) ?? { kind: "text", name };
  }

  match = name.match(/^СФО-(16|25|40|60|100|160|250)$/);
  if (match) {
    return (
      product(name, `elektrokalorifer-sfo-${match[1]}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  match = name.match(/^СФОЦ-(16|25|40|60|100|160|250)$/);
  if (match) {
    return (
      product(name, `ustanovka-sfotc-${match[1]}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  match = name.match(/^ШУК-(16|25|40|60|100|160|250)$/);
  if (match) {
    return (
      product(name, `shkaf-upravleniia-shuk-${match[1]}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  // КФБ: допускаем КФБ-10 А4 М, КФБ 8 А4, КФБ-5-А3 П и т. п.
  const normalizedKfb = name
    .replace(/^КФБ-/, "КФБ ")
    .replace(/-А/g, " А")
    .replace(/\s+/g, " ");

  match = normalizedKfb.match(/^КФБ\s*(\d{1,2})\s*А([34])(?:\s+[МП])?$/);
  if (match) {
    return (
      product(name, `kalorifer-kfb-${Number(match[1])}-a${match[2]}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  // АО 2-10 (КСк3) -> водяной; АО 2-10 (КПСк3) -> паровой.
  match = name.match(
    /^АО\s*2-(3|4|5|6\.3|10|15|20|25)\s*\((КСк|КСК|КПСк|КПСК)([34])?\)$/,
  );
  if (match) {
    const [, size, family, stage = "3"] = match;
    const medium = family.toUpperCase().includes("П")
      ? "vozdushniy-parovoy"
      : "vozdushniy-vodyanoy";

    return (
      product(name, `agregat-ao2-${size}-ksk${stage}-${medium}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  match = name.match(/^СТД-300\s*\((КСк|КСК|КПСк|КПСК|ТВВ|КП)([34])?\)$/);
  if (match) {
    const family = match[1].toUpperCase();

    const id = family.includes("КПС")
      ? "std300-kpsk"
      : family === "КП"
        ? "std300-kp"
        : family === "ТВВ"
          ? "std300-tvv"
          : "std300-ksk";

    return product(name, id) ?? { kind: "text", name };
  }

  match = name.match(
    /^(КПВС|КПВУ|КППС|КППУ)\s+(\d{3,4})[хxXХ](\d{3,4})(?:_\d+)?$/,
  );
  if (match) {
    const prefixByName: Record<string, string> = {
      КПВС: "kpvs",
      КПВУ: "kpvu",
      КППС: "kpps",
      КППУ: "kppu",
    };

    let width = match[2];
    let height = match[3];

    // Два явных опечаточных значения из исходного Excel.
    if (width === "115" && height === "1155") {
      width = "1155";
    }
    if (width === "974" && height === "974") {
      width = "947";
      height = "947";
    }

    return (
      product(name, `${prefixByName[match[1]]}-${width}x${height}`) ?? {
        kind: "text",
        name,
      }
    );
  }

  if (name.startsWith("АВО")) {
    return { kind: "category", name, href: "/avo-tvv-kp" };
  }

  if (name.startsWith("АО 2")) {
    return { kind: "category", name, href: "/ao2-ksk-kpsk" };
  }

  return { kind: "text", name };
}
