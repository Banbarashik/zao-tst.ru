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

      const location = getAggregatedLocation(
        regionSlug,
        region,
        company.settlement.slug,
        company.settlement.name,
        anchorCitySet,
      );

      // В отличие от агрегированного company.products, deliveries сохраняют
      // отраслевой сектор конкретной строки Excel. Поэтому атомарный индекс
      // строим именно из поставок.
      for (const delivery of company.deliveries) {
        for (const product of delivery.products) {
          if (product.kind !== "product") {
            continue;
          }

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
            industrySector: delivery.industrySector,
          };

          // ----- Атомарный индекс -----
          let productRecords = recordsByProduct.get(product.id);
          if (!productRecords) {
            productRecords = new Map();
            recordsByProduct.set(product.id, productRecords);
          }

          // Уникальность остаётся прежней:
          // регион + населённый пункт + компания.
          // Год и число поставок не влияют на количество строк.
          const recordKey = JSON.stringify([
            record.region.name,
            record.settlement.name,
            record.settlement.type,
            record.company,
          ]);

          const existingRecord = productRecords.get(recordKey);

          if (
            existingRecord &&
            existingRecord.industrySector !== record.industrySector
          ) {
            throw new Error(
              [
                `Конфликт отраслевого сектора для товара "${product.id}".`,
                `Регион: "${record.region.name}".`,
                `Населённый пункт: "${record.settlement.name}".`,
                `Компания: "${record.company}".`,
                `Найдены значения: "${existingRecord.industrySector}" и "${record.industrySector}".`,
              ].join(" "),
            );
          }

          if (!existingRecord) {
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
