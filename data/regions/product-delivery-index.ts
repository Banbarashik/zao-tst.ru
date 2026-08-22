import { getRegionSections } from "./region-sections";
import type {
  ProductDeliveryLocation,
  ProductDeliveryRecord,
  RegionSupplyData,
} from "./types";

export interface ProductDeliveryIndexes {
  locations: Record<string, ProductDeliveryLocation[]>;
  records: Record<string, ProductDeliveryRecord[]>;
}

function getSettlementHref(
  regionSlug: string,
  region: RegionSupplyData,
  settlementSlug: string,
  settlementName: string,
  anchorCitySet: ReadonlySet<string>,
): string | null {
  if (settlementName === region.capital.name) {
    return `/regions/${regionSlug}`;
  }

  if (anchorCitySet.has(settlementSlug)) {
    return `/regions/${regionSlug}#${settlementSlug}`;
  }

  return null;
}

function getAggregatedLocation(
  regionSlug: string,
  region: RegionSupplyData,
  settlementSlug: string,
  settlementName: string,
  anchorCitySet: ReadonlySet<string>,
): Omit<ProductDeliveryLocation, "companies"> {
  if (settlementName === region.capital.name) {
    return {
      kind: "city",
      name: region.capital.name,
      href: `/regions/${regionSlug}`,
    };
  }

  if (anchorCitySet.has(settlementSlug)) {
    return {
      kind: "city",
      name: settlementName,
      href: `/regions/${regionSlug}#${settlementSlug}`,
    };
  }

  return {
    kind: "region",
    name: region.subject.name,
    href: `/regions/${regionSlug}#${region.subject.slug}`,
  };
}

/**
 * Строит сразу два обратных индекса:
 *
 * 1. records — атомарные строки для таблицы товара:
 *    productId -> region + settlement + company.
 *
 * 2. locations — прежний агрегированный индекс:
 *    productId -> capital/anchor city/region + companies[].
 *
 * В records комбинация region + settlement + company уникальна
 * независимо от количества лет и отдельных поставок.
 */
export function buildProductDeliveryIndexes(
  regions: Record<string, RegionSupplyData>,
): ProductDeliveryIndexes {
  const recordsByProduct = new Map<
    string,
    Map<string, ProductDeliveryRecord>
  >();

  const locationsByProduct = new Map<
    string,
    Map<
      string,
      Omit<ProductDeliveryLocation, "companies"> & {
        companies: Set<string>;
      }
    >
  >();

  for (const [regionSlug, region] of Object.entries(regions)) {
    const { anchorCitySlugs } = getRegionSections(region);
    const anchorCitySet = new Set(anchorCitySlugs);

    for (const company of region.companies) {
      const settlementHref = getSettlementHref(
        regionSlug,
        region,
        company.settlement.slug,
        company.settlement.name,
        anchorCitySet,
      );

      const record: ProductDeliveryRecord = {
        region: {
          name: region.subject.name,
          slug: region.subject.slug,
          href: `/regions/${regionSlug}#${region.subject.slug}`,
        },
        settlement: {
          name: company.settlement.name,
          slug: company.settlement.slug,
          type: company.settlement.type,
          href: settlementHref,
        },
        company: company.name,
      };

      const location = getAggregatedLocation(
        regionSlug,
        region,
        company.settlement.slug,
        company.settlement.name,
        anchorCitySet,
      );

      for (const product of company.products) {
        if (product.kind !== "product") {
          continue;
        }

        // ----- Атомарный индекс -----
        let productRecords = recordsByProduct.get(product.id);
        if (!productRecords) {
          productRecords = new Map();
          recordsByProduct.set(product.id, productRecords);
        }

        // Точная уникальность: регион + населённый пункт + компания.
        // Используем значения, а не только slug, чтобы не зависеть
        // от потенциальных slug-коллизий.
        const recordKey = JSON.stringify([
          record.region.name,
          record.settlement.name,
          record.settlement.type,
          record.company,
        ]);

        if (!productRecords.has(recordKey)) {
          productRecords.set(recordKey, record);
        }

        // ----- Агрегированный индекс -----
        let productLocations = locationsByProduct.get(product.id);
        if (!productLocations) {
          productLocations = new Map();
          locationsByProduct.set(product.id, productLocations);
        }

        let deliveryLocation = productLocations.get(location.href);
        if (!deliveryLocation) {
          deliveryLocation = {
            ...location,
            companies: new Set<string>(),
          };
          productLocations.set(location.href, deliveryLocation);
        }

        deliveryLocation.companies.add(company.name);
      }
    }
  }

  return {
    records: Object.fromEntries(
      [...recordsByProduct].map(([productId, records]) => [
        productId,
        [...records.values()],
      ]),
    ),

    locations: Object.fromEntries(
      [...locationsByProduct].map(([productId, locations]) => [
        productId,
        [...locations.values()].map(({ companies, ...location }) => ({
          ...location,
          companies: [...companies],
        })),
      ]),
    ),
  };
}
