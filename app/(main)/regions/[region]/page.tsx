import Link from "next/link";
import { notFound } from "next/navigation";

import { RegionClimateTable } from "@/components/regions/region-climate-table";
import { Anchor } from "@/components/utils/anchor";
import {
  generatedRegions,
  type RegionSlug,
} from "@/data/regions/regions.generated";
import { getRegionClimateTable } from "@/data/regions/climate-tables.generated";
import { getRegionOverview } from "@/data/regions/region-overviews";
import { getRegionGeo, type RegionGeoData } from "@/data/regions/region-geo";
import { getRegion } from "@/data/regions/regions";
import { getRegionSections } from "@/data/regions/region-sections";
import type {
  Company,
  ProductReference,
  RegionData,
  TransportTerminal,
} from "@/data/regions/types";
import { LEFT_BLUE_BRACKET } from "@/constants/styles";
import React from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(generatedRegions).map((region) => ({ region }));
}

const SITE_URL = "https://zao-tst.ru";
const ORGANIZATION_NAME = "ООО «Т.С.Т.»";

function buildRegionJsonLd(region: RegionData, geo: RegionGeoData) {
  const pageUrl = `${SITE_URL}/regions/${region.slug}`;
  const cityId = `${pageUrl}#city`;
  const regionId = `${pageUrl}#administrative-area`;
  const serviceId = `${pageUrl}#delivery-service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: ORGANIZATION_NAME,
        url: SITE_URL,
      },
      {
        "@type": "City",
        "@id": cityId,
        name: geo.cityName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
      },
      {
        "@type": "AdministrativeArea",
        "@id": regionId,
        name: geo.regionName,
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: `Поставка вентиляционно-отопительного оборудования в ${geo.regionName}`,
        url: pageUrl,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@id": regionId,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Поставки вентиляционно-отопительного оборудования в ${geo.cityName} и ${geo.regionName}`,
        inLanguage: "ru-RU",
        about: [{ "@id": cityId }, { "@id": regionId }],
        mainEntity: {
          "@id": serviceId,
        },
      },
    ],
  };
}

function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function productKey(product: ProductReference) {
  if (product.kind === "product") {
    return `product:${product.id}`;
  }

  if (product.kind === "category") {
    return `category:${product.href}:${product.name}:${product.prefix ?? ""}`;
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

const PRODUCT_CATEGORY_LABELS: Record<ProductDisplayCategory, string> = {
  kalorifer: "калориферы",
  aggregate: "агрегаты",
  installation: "установки",
  cabinet: "шкафы",
  electrokalorifer: "электрокалориферы",
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

function categoryLabel(category: ProductDisplayCategory, capitalize: boolean) {
  const label = PRODUCT_CATEGORY_LABELS[category];

  return capitalize ? label[0].toUpperCase() + label.slice(1) : label;
}

function ProductList({ products }: { products: ProductReference[] }) {
  const announcedCategories = new Set<ProductDisplayCategory>();

  const displayProducts = products.map((product, index) => {
    const category = getProductDisplayCategory(product);

    // Для новой формы из Excel описательная приписка уже содержит
    // нужный текст перед категорией. Например:
    // "Калориферы специального конструктивного исполнения" + ссылка "ТВВ".
    if (product.kind === "category" && product.prefix) {
      if (category) {
        announcedCategories.add(category);
      }

      return {
        product,
        prefix: product.prefix,
      };
    }

    let prefix: string | null = null;

    if (category && !announcedCategories.has(category)) {
      prefix = categoryLabel(category, index === 0);
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

function settlementLabel(settlement: Company["settlement"]) {
  const prefix = {
    city: "г.",
    village: "с.",
    settlement: "п.",
    "urban-settlement": "пгт.",
    other: "",
  }[settlement.type];

  return prefix ? `${prefix} ${settlement.name}` : settlement.name;
}

function CompaniesList({
  companies,
  showSettlement = false,
}: {
  companies: Company[];
  showSettlement?: boolean;
}) {
  if (companies.length === 0) {
    return null;
  }

  return (
    <ul className="mb-3">
      {companies.map((company) => (
        <li key={`${company.settlement.slug}:${company.name}`}>
          🏭 {showSettlement ? `${settlementLabel(company.settlement)}. ` : ""}
          {company.name}.{" "}
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

function TransportTerminals({ terminals }: { terminals: TransportTerminal[] }) {
  if (terminals.length === 0) {
    return null;
  }

  return (
    <div className={LEFT_BLUE_BRACKET}>
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
    </div>
  );
}

function getTransportTerminalsForCompanies(
  companies: Company[],
  transportTerminals: Record<string, TransportTerminal[]>,
) {
  const settlementSlugs = [
    ...new Set(companies.map((company) => company.settlement.slug)),
  ];

  return settlementSlugs.flatMap(
    (settlementSlug) => transportTerminals[settlementSlug] ?? [],
  );
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

  const region = getRegion(regionSlug as RegionSlug);

  if (!region) {
    notFound();
  }

  const { capitalCompanies, anchorCities, remainderCompanies } =
    getRegionSections(region);

  const climateTable = getRegionClimateTable(regionSlug as RegionSlug);
  const overview = getRegionOverview(regionSlug as RegionSlug);

  const geo = getRegionGeo(regionSlug as RegionSlug);
  const jsonLd = buildRegionJsonLd(region, geo);

  const remainderTransportTerminals = getTransportTerminalsForCompanies(
    remainderCompanies,
    region.transportTerminals,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <article className="space-y-8">
        <h1 className="text-xl font-bold uppercase md:text-[22px] xl:text-2xl">
          {region.subject.name}
        </h1>

        <section className="space-y-2">
          {overview ? <p>{overview.text}</p> : null}
          <p className="text-secondary-text">
            Ниже представлена официальная структура выполненных поставок:
            детальные спецификации заказов, местные параметры СП 131.13330 и
            логистические терминалы доставки.
          </p>
        </section>

        {climateTable ? <RegionClimateTable table={climateTable} /> : null}

        <section>
          <h1 className="mb-3 text-xl font-bold uppercase">
            {region.capital.name}
          </h1>

          <CompaniesList companies={capitalCompanies} />

          <TransportTerminals
            terminals={region.transportTerminals[region.capital.slug] ?? []}
          />
        </section>

        <div className="mx-auto h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

        {anchorCities.map(({ settlement, companies }) => (
          <React.Fragment key={settlement.slug}>
            <section>
              <Anchor id={settlement.slug} device="all" />
              <h2 className="mb-3 text-xl font-bold uppercase">
                {settlement.name}
              </h2>

              <CompaniesList companies={companies} />

              <TransportTerminals
                terminals={region.transportTerminals[settlement.slug] ?? []}
              />
            </section>

            <div className="mx-auto my-2 h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />
          </React.Fragment>
        ))}

        <section>
          <Anchor id={region.subject.slug} device="all" />
          <h3 className="mb-3 text-xl font-bold uppercase">
            {region.subject.name}
          </h3>

          <CompaniesList companies={remainderCompanies} showSettlement />

          <TransportTerminals terminals={remainderTransportTerminals} />
        </section>
      </article>
    </>
  );
}
