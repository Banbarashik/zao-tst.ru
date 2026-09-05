import { PRODUCT_ID_SET } from "./product-catalog";
import type { ProductId, ProductReference } from "./types";

export const PRODUCT_CATEGORY_ROUTES: Record<string, string> = {
  КСк: "/kalorifery-ksk",
  КСК: "/kalorifery-ksk",
  КПСк: "/kalorifery-kpsk",
  КПСК: "/kalorifery-kpsk",
  ТВВ: "/kalorifery-tvv",
  КП: "/kalorifery-kp",
  КФБ: "/kalorifery-kfb",
  "КФБ-А": "/kalorifery-kfb-a",
  "КФБ-А М": "/kalorifery-kfb-a",
  "КФБ-А П": "/kalorifery-kfb-a",
  СФО: "/elektrokalorifery",
  СФОЦ: "/teploventilyatory",
  ШУК: "/shkafy-upravleniya",
  "АО 2 В": "/ao2-ksk-kpsk",
  "АО 2 П": "/ao2-ksk-kpsk",
  КПВС: "/kalorifery-voda",
  КПВУ: "/kalorifery-voda",
  КППС: "/kalorifery-par",
  КППУ: "/kalorifery-par",
  "СТД-300 В": "/std300-ksk-kpsk",
  "СТД-300 П": "/std300-ksk-kpsk",
  "СТД-300": "/std300-ksk-kpsk",
  "АВО ХЛ": "/avo-tvv-kp",
};

function normalizeName(value: string) {
  return value.trim().replace(/[–—]/g, "-").replace(/\s+/g, " ");
}

function resolvePrefixedCategory(name: string): ProductReference | null {
  // Описательная приписка хранится отдельно, а ссылкой остаётся
  // только название категории в конце строки.
  //
  // Пример:
  // "Калориферы специального конструктивного исполнения ТВВ"
  // ->
  // {
  //   kind: "category",
  //   prefix: "Калориферы специального конструктивного исполнения",
  //   name: "ТВВ",
  //   href: "/kalorifery-tvv"
  // }
  //
  // Более длинные названия проверяем первыми:
  // "КФБ-А М" раньше "КФБ-А" и "КФБ".
  const categoryNames = Object.keys(PRODUCT_CATEGORY_ROUTES).sort(
    (a, b) => b.length - a.length,
  );

  for (const categoryName of categoryNames) {
    const suffix = ` ${categoryName}`;

    if (!name.endsWith(suffix)) {
      continue;
    }

    const prefix = name.slice(0, -suffix.length).trim();

    // Новая форма из Excel относится именно к описаниям калориферов.
    // Ограничение защищает от случайного превращения произвольного
    // текста, заканчивающегося названием категории, в ссылку.
    /* if (!/^Калориферы(?:\s|$)/i.test(prefix)) {
      continue;
    } */

    return {
      kind: "category",
      name: categoryName,
      href: PRODUCT_CATEGORY_ROUTES[categoryName],
      prefix,
    };
  }

  return null;
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

  const prefixedCategory = resolvePrefixedCategory(name);
  if (prefixedCategory) {
    return prefixedCategory;
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

  // КФБ.
  //
  // ID у водяных и паровых моделей исторически имеют разную структуру:
  //
  // водяные:
  //   КФБ-14 А3 М -> kalorifer-kfb-14-a3
  //   КФБ-14 А4 М -> kalorifer-kfb-14-a4
  //
  // паровые:
  //   КФБ-14 А3 П -> kalorifer-kfb-14
  //   КФБ-14 А4 П -> kalorifer-kfb-14-p
  //
  // Также допускаем варианты записи вроде:
  //   КФБ 8 А3 М
  //   КФБ-5-А3 П
  const normalizedKfb = name
    .replace(/^КФБ-/, "КФБ ")
    .replace(/-А/g, " А")
    .replace(/\s+/g, " ");

  match = normalizedKfb.match(/^КФБ\s*(\d{1,2})\s*А([34])(?:\s+([МП]))?$/i);

  if (match) {
    const size = Number(match[1]);
    const rows = match[2];
    const medium = match[3]?.toUpperCase();

    let id: string;

    if (medium === "П") {
      id = rows === "3" ? `kalorifer-kfb-${size}` : `kalorifer-kfb-${size}-p`;
    } else {
      // "М" — водяной КФБ.
      // Если буква среды отсутствует, сохраняем прежнее поведение
      // и считаем такую запись водяной.
      id = `kalorifer-kfb-${size}-a${rows}`;
    }

    return product(name, id) ?? { kind: "text", name };
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
