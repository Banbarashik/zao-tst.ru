import Link from "next/link";
import { notFound } from "next/navigation";

import { Anchor } from "@/components/utils/anchor";
import {
  generatedRegions,
  type RegionSlug,
} from "@/data/regions/regions.generated";
import { getRegion } from "@/data/regions/regions";
import type {
  Company,
  ProductReference,
  TransportTerminal,
} from "@/data/regions/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(generatedRegions).map((region) => ({ region }));
}

function productKey(product: ProductReference) {
  if (product.kind === "product") {
    return `product:${product.id}`;
  }

  if (product.kind === "category") {
    return `category:${product.href}:${product.name}`;
  }

  return `text:${product.name}`;
}

function ProductItem({ product }: { product: ProductReference }) {
  if (product.kind === "product") {
    return (
      <Link href={`/${product.id}`} className="text-primary">
        {product.name}
      </Link>
    );
  }

  if (product.kind === "category") {
    return (
      <Link href={product.href} className="text-primary">
        {product.name}
      </Link>
    );
  }

  return <>{product.name}</>;
}

type ProductDisplayCategory =
  | "kalorifer"
  | "aggregate"
  | "installation"
  | "cabinet"
  | "electrokalorifer";

const PRODUCT_CATEGORY_LABELS: Record<
  ProductDisplayCategory,
  { singular: string; plural: string }
> = {
  kalorifer: { singular: "калорифер", plural: "калориферы" },
  aggregate: { singular: "агрегат", plural: "агрегаты" },
  installation: { singular: "установка", plural: "установки" },
  cabinet: { singular: "шкаф", plural: "шкафы" },
  electrokalorifer: {
    singular: "электрокалорифер",
    plural: "электрокалориферы",
  },
};

function getProductDisplayCategory(
  product: ProductReference,
): ProductDisplayCategory | null {
  const name = product.name.trim();

  // СФОЦ проверяем раньше СФО, потому что обе группы начинаются с "СФО".
  if (/^СФОЦ(?:\s|-|$)/i.test(name)) {
    return "installation";
  }

  if (/^СФО(?:\s|-|$)/i.test(name)) {
    return "electrokalorifer";
  }

  if (/^ШУК(?:\s|-|$)/i.test(name)) {
    return "cabinet";
  }

  if (/^(?:АО\s*2|СТД-300|АВО)(?:\s|-|$)/i.test(name)) {
    return "aggregate";
  }

  if (
    /^(?:КСк|КСК|КПСк|КПСК|ТВВ|КП|КФБ|КПВС|КПВУ|КППС|КППУ)(?:\s|-|$)/i.test(
      name,
    )
  ) {
    return "kalorifer";
  }

  return null;
}

function getFirstCategoryRunLength(
  products: ProductReference[],
  startIndex: number,
  category: ProductDisplayCategory,
) {
  let length = 0;

  for (let index = startIndex; index < products.length; index += 1) {
    if (getProductDisplayCategory(products[index]) !== category) {
      break;
    }

    length += 1;
  }

  return length;
}

function categoryLabel(
  category: ProductDisplayCategory,
  plural: boolean,
  capitalize: boolean,
) {
  const labels = PRODUCT_CATEGORY_LABELS[category];
  const label = plural ? labels.plural : labels.singular;

  return capitalize ? label[0].toUpperCase() + label.slice(1) : label;
}

function ProductList({ products }: { products: ProductReference[] }) {
  const announcedCategories = new Set<ProductDisplayCategory>();

  const displayProducts = products.map((product, index) => {
    const category = getProductDisplayCategory(product);
    let prefix: string | null = null;

    if (category && !announcedCategories.has(category)) {
      const firstRunLength = getFirstCategoryRunLength(
        products,
        index,
        category,
      );

      prefix = categoryLabel(
        category,
        firstRunLength >= 2,
        index === 0,
      );

      announcedCategories.add(category);
    }

    return { product, prefix };
  });

  return (
    <>
      {displayProducts.map(({ product, prefix }, index) => (
        <span key={`${productKey(product)}:${index}`}>
          {index > 0 ? ", " : ""}
          {prefix ? `${prefix} ` : ""}
          <ProductItem product={product} />
        </span>
      ))}
    </>
  );
}

function CompaniesList({ companies }: { companies: Company[] }) {
  if (companies.length === 0) {
    return null;
  }

  return (
    <ul className="mb-3">
      {companies.map((company) => (
        <li
          key={`${company.settlement.slug}:${company.name}`}
        >
          🏭 {company.name}.{" "}
          <span>
            <ProductList products={company.products} />.
          </span>
        </li>
      ))}
    </ul>
  );
}

function daysWord(days: number) {
  const mod100 = days % 100;
  const mod10 = days % 10;

  if (mod100 >= 11 && mod100 <= 14) {
    return "дней";
  }

  if (mod10 === 1) {
    return "день";
  }

  if (mod10 >= 2 && mod10 <= 4) {
    return "дня";
  }

  return "дней";
}

function deliveryTimeText(terminal: TransportTerminal) {
  if (!terminal.deliveryTime) {
    return null;
  }

  const { minDays, maxDays } = terminal.deliveryTime;

  if (maxDays && maxDays !== minDays) {
    return `${minDays}–${maxDays} дней`;
  }

  return `${minDays} ${daysWord(minDays)}`;
}

function TransportTerminals({
  terminals,
}: {
  terminals: TransportTerminal[];
}) {
  if (terminals.length === 0) {
    return null;
  }

  return (
    <>
      <p>🚚 Адреса терминалов транспортных компаний:</p>
      <ul>
        {terminals.map((terminal) => {
          const deliveryTime = deliveryTimeText(terminal);

          return (
            <li key={`${terminal.company}:${terminal.address}`}>
              • ТК «{terminal.company}» - {terminal.address}.
              {deliveryTime ? ` Срок доставки груза - ${deliveryTime}.` : ""}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function getPageSections(regionSlug: RegionSlug) {
  const region = getRegion(regionSlug);

  if (!region) {
    return null;
  }

  const capitalCompanies: Company[] = [];
  const cityDeliveryCounts = new Map<string, number>();
  const cityOrder: string[] = [];
  const cityBySlug = new Map<string, Company["settlement"]>();

  for (const company of region.companies) {
    if (company.settlement.name === region.capital.name) {
      capitalCompanies.push(company);
      continue;
    }

    if (company.settlement.type !== "city") {
      continue;
    }

    if (!cityDeliveryCounts.has(company.settlement.slug)) {
      cityOrder.push(company.settlement.slug);
      cityBySlug.set(company.settlement.slug, company.settlement);
    }

    cityDeliveryCounts.set(
      company.settlement.slug,
      (cityDeliveryCounts.get(company.settlement.slug) ?? 0) +
        company.deliveries.length,
    );
  }

  const anchorCitySlugs = cityOrder.filter(
    (citySlug) => (cityDeliveryCounts.get(citySlug) ?? 0) >= 4,
  );
  const anchorCitySet = new Set(anchorCitySlugs);

  const anchorCities = anchorCitySlugs.map((citySlug) => ({
    settlement: cityBySlug.get(citySlug)!,
    companies: region.companies.filter(
      (company) => company.settlement.slug === citySlug,
    ),
  }));

  const remainderCompanies = region.companies.filter(
    (company) =>
      company.settlement.name !== region.capital.name &&
      !anchorCitySet.has(company.settlement.slug),
  );

  return {
    region,
    capitalCompanies,
    anchorCities,
    remainderCompanies,
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: regionSlug } = await params;

  if (!(regionSlug in generatedRegions)) {
    notFound();
  }

  const sections = getPageSections(regionSlug as RegionSlug);

  if (!sections) {
    notFound();
  }

  const { region, capitalCompanies, anchorCities, remainderCompanies } =
    sections;

  return (
    <article className="space-y-8">
      <section>
        <h1 className="mb-3 text-xl font-bold uppercase">
          {region.capital.name}
        </h1>

        <CompaniesList companies={capitalCompanies} />

        <TransportTerminals
          terminals={region.transportTerminals[region.capital.slug] ?? []}
        />
      </section>

      {anchorCities.map(({ settlement, companies }) => (
        <section key={settlement.slug}>
          <Anchor id={settlement.slug} device="all" />
          <h2 className="mb-3 text-xl font-bold uppercase">
            {settlement.name}
          </h2>

          <CompaniesList companies={companies} />

          <TransportTerminals
            terminals={region.transportTerminals[settlement.slug] ?? []}
          />
        </section>
      ))}

      <section>
        <Anchor id={region.subject.slug} device="all" />
        <h3 className="mb-3 text-xl font-bold uppercase">
          {region.subject.name}
        </h3>

        <CompaniesList companies={remainderCompanies} />
      </section>
    </article>
  );
}
