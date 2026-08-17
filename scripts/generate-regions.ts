import fs from "node:fs/promises";
import path from "node:path";

import ExcelJS from "exceljs";

import { PRODUCT_ID_SET } from "../src/data/regions/product-catalog";
import { resolveProduct } from "../src/data/regions/product-map";
import {
  EXCLUDED_SUBJECTS,
  LOCATION_OVERRIDES,
  REGION_CAPITALS,
  SETTLEMENT_ALIASES,
  SUBJECT_ALIASES,
  type KnownRegionSubject,
} from "../src/data/regions/region-meta";
import { slugifyRussian } from "../src/data/regions/slugify";
import type {
  Company,
  ProductReference,
  RegionSupplyData,
  SettlementType,
} from "../src/data/regions/types";

const INPUT = path.resolve(process.cwd(), "source/regions.xlsx");
const OUTPUT = path.resolve(
  process.cwd(),
  "src/data/regions/regions.generated.ts",
);

type ParsedLocation = {
  subject: string;
  settlement: {
    name: string;
    slug: string;
    type: SettlementType;
  };
};

type MutableCompany = Company & {
  __key: string;
};

type MutableRegion = Omit<RegionSupplyData, "companies"> & {
  companies: MutableCompany[];
  __companyByKey: Map<string, MutableCompany>;
};

const PREFIXES: Array<[string, SettlementType]> = [
  ["пгт.", "urban-settlement"],
  ["р.п.", "urban-settlement"],
  ["рп.", "urban-settlement"],
  ["гп.", "urban-settlement"],
  ["пос.", "settlement"],
  ["дп.", "settlement"],
  ["сп.", "settlement"],
  ["тер.", "other"],
  ["г.", "city"],
  ["п.", "settlement"],
  ["с.", "village"],
  ["ст.", "settlement"],
  ["р.", "settlement"],
  ["д.", "village"],
];

function cellText(value: ExcelJS.CellValue): string {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "object") {
    if ("text" in value && typeof value.text === "string") {
      return value.text;
    }

    if ("richText" in value && Array.isArray(value.richText)) {
      return value.richText.map((part) => part.text).join("");
    }

    if ("result" in value) {
      return String(value.result ?? "");
    }
  }

  return String(value);
}

function parseLocation(rawValue: string): ParsedLocation | null {
  const raw = rawValue.trim().replace(/\s+/g, " ");
  const override = LOCATION_OVERRIDES[raw];

  if (override) {
    return {
      subject: override.subject,
      settlement: {
        name: override.settlement,
        slug: slugifyRussian(override.settlement),
        type: override.type,
      },
    };
  }

  const normalized = raw.replace(". г.", ", г.");
  const parts = normalized.split(",").map((part) => part.trim());

  let subject = SUBJECT_ALIASES[parts[0]] ?? parts[0];

  if (EXCLUDED_SUBJECTS.has(subject)) {
    return null;
  }

  let restParts = parts.slice(1);

  // В Excel есть "Республика Саха, Якутия, г. Ленск".
  if (
    subject === "Республика Саха (Якутия)" &&
    restParts[0] === "Якутия"
  ) {
    restParts = restParts.slice(1);
  }

  const rest = restParts.join(", ").trim();

  let name = rest;
  let type: SettlementType = "other";

  if (rest === "Райчихинск") {
    type = "city";
  } else if (rest.startsWith("остров ")) {
    name = rest.slice("остров ".length).trim();
  } else {
    for (const [prefix, settlementType] of PREFIXES) {
      if (rest.startsWith(`${prefix} `)) {
        name = rest.slice(prefix.length).trim();
        type = settlementType;
        break;
      }
    }
  }

  name = SETTLEMENT_ALIASES[name] ?? name;

  return {
    subject,
    settlement: {
      name,
      slug: slugifyRussian(name),
      type,
    },
  };
}

function splitProducts(value: string) {
  return value
    .split(/[,;]/)
    .map((product) => product.trim().replace(/\s+/g, " "))
    .filter(Boolean);
}

function productIdentity(product: ProductReference) {
  if (product.kind === "product") {
    return `product:${product.id}`;
  }

  if (product.kind === "category") {
    return `category:${product.href}:${product.name}`;
  }

  return `text:${product.name}`;
}

function toSerializableRegions(regions: Map<string, MutableRegion>) {
  return Object.fromEntries(
    [...regions].map(([slug, region]) => [
      slug,
      {
        slug: region.slug,
        subject: region.subject,
        capital: region.capital,
        companies: region.companies.map(({ __key: _, ...company }) => company),
      },
    ]),
  );
}

async function main() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(INPUT);

  const sheet = workbook.worksheets[0];

  if (!sheet) {
    throw new Error("В regions.xlsx не найден первый лист.");
  }

  const regions = new Map<string, MutableRegion>();
  const warnings: string[] = [];

  let sourceRows = 0;
  let excludedRows = 0;
  let productLinks = 0;
  let categoryLinks = 0;
  let textProducts = 0;

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }

    const year = Number(row.getCell(1).value);
    const companyName = cellText(row.getCell(2).value).trim();
    const locationText = cellText(row.getCell(3).value).trim();
    const productsText = cellText(row.getCell(4).value).trim();
    const note = cellText(row.getCell(5).value).trim();

    if (!companyName || !locationText || !productsText || !year) {
      warnings.push(`Строка ${rowNumber}: пропущено обязательное значение.`);
      return;
    }

    sourceRows += 1;

    const location = parseLocation(locationText);

    if (!location) {
      excludedRows += 1;
      return;
    }

    if (!(location.subject in REGION_CAPITALS)) {
      warnings.push(
        `Строка ${rowNumber}: неизвестный субъект "${location.subject}".`,
      );
      return;
    }

    const subject = location.subject as KnownRegionSubject;
    const capitalName = REGION_CAPITALS[subject];
    const regionSlug = slugifyRussian(capitalName);

    let region = regions.get(regionSlug);

    if (!region) {
      region = {
        slug: regionSlug,
        subject: {
          name: subject,
          slug: slugifyRussian(subject),
        },
        capital: {
          name: capitalName,
          slug: regionSlug,
        },
        companies: [],
        __companyByKey: new Map(),
      };

      regions.set(regionSlug, region);
    }

    const companyKey = `${location.settlement.slug}\u0000${companyName}`;
    let company = region.__companyByKey.get(companyKey);

    if (!company) {
      company = {
        __key: companyKey,
        name: companyName,
        settlement: location.settlement,
        products: [],
        deliveries: [],
      };
      region.__companyByKey.set(companyKey, company);
      region.companies.push(company);
    }

    const products = splitProducts(productsText).map((rawProduct) => {
      const resolved = resolveProduct(rawProduct);

      if (resolved.kind === "product") {
        if (!PRODUCT_ID_SET.has(resolved.id)) {
          warnings.push(
            `Строка ${rowNumber}: product id "${resolved.id}" отсутствует в product-ids.`,
          );
        }
        productLinks += 1;
      } else if (resolved.kind === "category") {
        categoryLinks += 1;
      } else {
        textProducts += 1;
        warnings.push(
          `Строка ${rowNumber}: товар "${resolved.name}" оставлен без ссылки.`,
        );
      }

      return resolved;
    });

    company.deliveries.push({
      year,
      products,
      ...(note ? { note } : {}),
    });

    const existingProducts = new Set(company.products.map(productIdentity));

    for (const product of products) {
      const key = productIdentity(product);

      if (!existingProducts.has(key)) {
        company.products.push(product);
        existingProducts.add(key);
      }
    }
  });

  const serializable = toSerializableRegions(regions);
  const source = `// Generated from regions.xlsx by scripts/generate-regions.ts.
// Do not edit by hand.
import type { RegionSupplyData } from "./types";

export const generatedRegions = ${JSON.stringify(serializable, null, 2)} satisfies Record<
  string,
  RegionSupplyData
>;

export type RegionSlug = keyof typeof generatedRegions;
`;

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await fs.writeFile(OUTPUT, source, "utf8");

  console.log(`Исходных строк: ${sourceRows}`);
  console.log(`Исключено (Беларусь/Казахстан): ${excludedRows}`);
  console.log(`Регионов: ${regions.size}`);
  console.log(`Конкретных product-id: ${productLinks}`);
  console.log(`Ссылок на категории: ${categoryLinks}`);
  console.log(`Товаров без ссылки: ${textProducts}`);

  if (warnings.length > 0) {
    console.warn("\nПредупреждения:");
    for (const warning of warnings) {
      console.warn(`- ${warning}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
