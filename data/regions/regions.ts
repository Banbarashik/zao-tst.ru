import { generatedRegions } from "./regions.generated";
import { TRANSPORT_TERMINALS } from "./transport-companies";
import type { RegionData } from "./types";

export const regions = Object.fromEntries(
  Object.entries(generatedRegions).map(([slug, region]) => [
    slug,
    {
      ...region,
      transportTerminals: TRANSPORT_TERMINALS[slug] ?? {},
    },
  ]),
) as Record<string, RegionData>;

export function getRegion(slug: string): RegionData | undefined {
  return regions[slug];
}
