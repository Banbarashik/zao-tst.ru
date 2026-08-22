import type { Company, RegionSupplyData } from "@/data/regions/types";

export interface RegionAnchorCity {
  settlement: Company["settlement"];
  companies: Company[];
}

export interface RegionSections {
  capitalCompanies: Company[];
  anchorCities: RegionAnchorCity[];
  anchorCitySlugs: string[];
  remainderCompanies: Company[];
}

/**
 * Единственный источник логики секций региональной страницы:
 * - столица всегда отдельная секция;
 * - другой город становится anchor-секцией при 4+ поставках;
 * - всё остальное попадает в секцию субъекта.
 */
export function getRegionSections(region: RegionSupplyData): RegionSections {
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
    capitalCompanies,
    anchorCities,
    anchorCitySlugs,
    remainderCompanies,
  };
}
