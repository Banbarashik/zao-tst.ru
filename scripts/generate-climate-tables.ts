import fs from "node:fs/promises";
import path from "node:path";

import { XMLParser } from "fast-xml-parser";
import JSZip from "jszip";

import { regions } from "../data/regions";
import { slugifyRussian } from "../data/regions/slugify";

const DEFAULT_INPUT = "source/climate.docx";
const OUTPUT = path.resolve(
  process.cwd(),
  "src/data/regions/climate-tables.generated.ts",
);

const INPUT = path.resolve(process.cwd(), process.argv[2] ?? DEFAULT_INPUT);

type ClimateLocation = {
  name: string;
  slug: string;
};

type ClimateRow = {
  parameter: string;
  condition?: string;
  values: string[];
};

type ClimateTable = {
  subject: string;
  locations: ClimateLocation[];
  rows: ClimateRow[];
};

type XmlNode =
  | string
  | number
  | boolean
  | null
  | undefined
  | XmlNode[]
  | Record<string, unknown>;

function asArray<T>(value: T | T[] | null | undefined): T[] {
  if (value === null || value === undefined) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * Нормализация используется только для сопоставления названия субъекта
 * из DOCX с name из src/data/regions.ts. В generated-файл пишется
 * исходное название из DOCX.
 */
function normalizeSubjectKey(value: string): string {
  return normalizeWhitespace(value)
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[–—]/g, "-");
}

function regionSlugFromUrl(url: string): string {
  const pathname = url.split(/[?#]/, 1)[0];
  const parts = pathname.split("/").filter(Boolean);
  const slug = parts.at(-1);

  if (!slug) {
    throw new Error(`Не удалось получить slug региона из url "${url}".`);
  }

  return slug;
}

/**
 * Собирает текст внутри XML-узла Word. Для climate.docx содержимое ячеек
 * состоит из обычных paragraph/run/text, но функция также корректно
 * обрабатывает переносы и табуляцию.
 */
function collectText(node: XmlNode): string {
  if (node === null || node === undefined) {
    return "";
  }

  if (
    typeof node === "string" ||
    typeof node === "number" ||
    typeof node === "boolean"
  ) {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(collectText).join("");
  }

  let result = "";

  for (const [key, value] of Object.entries(node)) {
    if (key === "#text") {
      result += String(value ?? "");
      continue;
    }

    if (key === "br" || key === "cr" || key === "tab") {
      result += " ";
      continue;
    }

    // Атрибуты fast-xml-parser имеют вид @_val, @_space и т. п.
    if (key.startsWith("@_")) {
      continue;
    }

    result += collectText(value as XmlNode);
  }

  return result;
}

function getCellText(cell: Record<string, unknown>): string {
  const paragraphs = asArray(cell.p as Record<string, unknown> | undefined);

  if (paragraphs.length === 0) {
    return normalizeWhitespace(collectText(cell));
  }

  return normalizeWhitespace(
    paragraphs
      .map((paragraph) => normalizeWhitespace(collectText(paragraph)))
      .filter(Boolean)
      .join(" "),
  );
}

function getGridSpan(cell: Record<string, unknown>): number {
  const cellProperties = cell.tcPr as Record<string, unknown> | undefined;
  const gridSpan = cellProperties?.gridSpan as
    | Record<string, unknown>
    | undefined;

  const rawValue = gridSpan?.["@_val"];
  const span = Number(rawValue ?? 1);

  return Number.isFinite(span) && span >= 1 ? span : 1;
}

/**
 * Word хранит первую ячейку заголовка таблицы как gridSpan=2.
 * Разворачиваем colspan в логическую сетку:
 * ["РЕГИОН: ...", "РЕГИОН: ...", "БАРНАУЛ", "БИЙСК"]
 */
function flattenRow(row: Record<string, unknown>): string[] {
  const cells = asArray(row.tc as Record<string, unknown> | undefined);
  const values: string[] = [];

  for (const cell of cells) {
    const text = getCellText(cell);
    const span = getGridSpan(cell);

    for (let index = 0; index < span; index += 1) {
      values.push(text);
    }
  }

  return values;
}

function buildRegionSlugIndex(): Map<string, string> {
  const index = new Map<string, string>();

  for (const region of regions) {
    const key = normalizeSubjectKey(region.name);
    const slug = regionSlugFromUrl(region.url);

    if (index.has(key)) {
      throw new Error(`Дублирующийся субъект в src/data/regions.ts: ${region.name}`);
    }

    index.set(key, slug);
  }

  return index;
}

function parseClimateTable(
  table: Record<string, unknown>,
  tableIndex: number,
  regionSlugIndex: Map<string, string>,
): { regionSlug: string; data: ClimateTable } {
  const rows = asArray(table.tr as Record<string, unknown> | undefined).map(
    flattenRow,
  );

  if (rows.length < 2) {
    throw new Error(`Таблица ${tableIndex + 1}: отсутствуют строки данных.`);
  }

  const header = rows[0];
  const rawSubject = header[0] ?? "";

  if (!rawSubject.toLocaleUpperCase("ru-RU").startsWith("РЕГИОН:")) {
    throw new Error(
      `Таблица ${tableIndex + 1}: первая ячейка не начинается с "РЕГИОН:". Получено: "${rawSubject}".`,
    );
  }

  const subject = normalizeWhitespace(rawSubject.replace(/^РЕГИОН:\s*/i, ""));
  const regionSlug = regionSlugIndex.get(normalizeSubjectKey(subject));

  if (!regionSlug) {
    throw new Error(
      `Таблица ${tableIndex + 1}: субъект "${subject}" не найден в src/data/regions.ts.`,
    );
  }

  // Первые две логические колонки принадлежат заголовку показателя/условия.
  // Пустая шаблонная колонка Word отбрасывается.
  const locationNames = header.slice(2).filter(Boolean);

  if (locationNames.length === 0) {
    throw new Error(
      `Таблица ${tableIndex + 1} (${subject}): не найдено ни одного населённого пункта.`,
    );
  }

  const locations: ClimateLocation[] = locationNames.map((name) => ({
    name,
    slug: slugifyRussian(name),
  }));

  const climateRows: ClimateRow[] = rows.slice(1).map((row, rowIndex) => {
    const parameter = row[0] ?? "";
    const condition = row[1] ?? "";
    const values = row.slice(2, 2 + locations.length);

    if (!parameter) {
      throw new Error(
        `Таблица ${tableIndex + 1} (${subject}), строка ${rowIndex + 2}: пустой показатель.`,
      );
    }

    if (values.length !== locations.length) {
      throw new Error(
        `Таблица ${tableIndex + 1} (${subject}), строка ${rowIndex + 2}: ` +
          `ожидалось ${locations.length} значений, получено ${values.length}.`,
      );
    }

    return {
      parameter,
      values,
      ...(condition ? { condition } : {}),
    };
  });

  return {
    regionSlug,
    data: {
      subject,
      locations,
      rows: climateRows,
    },
  };
}

async function readWordTables(docxPath: string): Promise<Record<string, unknown>[]> {
  const file = await fs.readFile(docxPath);
  const zip = await JSZip.loadAsync(file);
  const documentEntry = zip.file("word/document.xml");

  if (!documentEntry) {
    throw new Error(`В ${docxPath} отсутствует word/document.xml.`);
  }

  const xml = await documentEntry.async("string");
  const parser = new XMLParser({
    ignoreAttributes: false,
    removeNSPrefix: true,
    attributeNamePrefix: "@_",
    textNodeName: "#text",
    trimValues: false,
    parseTagValue: false,
    parseAttributeValue: false,
  });

  const parsed = parser.parse(xml) as {
    document?: {
      body?: {
        tbl?: Record<string, unknown> | Record<string, unknown>[];
      };
    };
  };

  return asArray(parsed.document?.body?.tbl);
}

function buildGeneratedSource(
  sourceFileName: string,
  tables: Record<string, ClimateTable>,
): string {
  return `// Generated from ${sourceFileName} by src/scripts/generate-climate-tables.ts.\n` +
    `// Do not edit by hand.\n` +
    `import type { RegionSlug } from "./regions.generated";\n` +
    `import type { RegionClimateTableData } from "./types";\n\n` +
    `export const REGION_CLIMATE_TABLES = ${JSON.stringify(tables, null, 2)} satisfies Partial<\n` +
    `  Record<RegionSlug, RegionClimateTableData>\n` +
    `>;\n\n` +
    `export function getRegionClimateTable(\n` +
    `  regionSlug: RegionSlug,\n` +
    `): RegionClimateTableData | null {\n` +
    `  const tables: Partial<Record<RegionSlug, RegionClimateTableData>> =\n` +
    `    REGION_CLIMATE_TABLES;\n\n` +
    `  return tables[regionSlug] ?? null;\n` +
    `}\n`;
}

async function main() {
  const regionSlugIndex = buildRegionSlugIndex();
  const wordTables = await readWordTables(INPUT);
  const generated: Record<string, ClimateTable> = {};

  let totalRows = 0;
  let oneLocationTables = 0;
  let multiLocationTables = 0;

  wordTables.forEach((table, index) => {
    const { regionSlug, data } = parseClimateTable(
      table,
      index,
      regionSlugIndex,
    );

    if (generated[regionSlug]) {
      throw new Error(
        `В ${path.basename(INPUT)} обнаружено несколько таблиц для regionSlug "${regionSlug}".`,
      );
    }

    generated[regionSlug] = data;
    totalRows += data.rows.length;

    if (data.locations.length === 1) {
      oneLocationTables += 1;
    } else {
      multiLocationTables += 1;
    }
  });

  const source = buildGeneratedSource(path.basename(INPUT), generated);

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await fs.writeFile(OUTPUT, source, "utf8");

  console.log(`Источник: ${INPUT}`);
  console.log(`Таблиц: ${wordTables.length}`);
  console.log(`Строк климатических данных: ${totalRows}`);
  console.log(`Таблиц с одним населённым пунктом: ${oneLocationTables}`);
  console.log(`Таблиц с несколькими населёнными пунктами: ${multiLocationTables}`);
  console.log(`Записано: ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
