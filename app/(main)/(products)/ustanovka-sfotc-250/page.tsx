import productData from "@/data/products.json";
import { sfotcOperatingModes } from "@/data/sfotcOperatingModes";

import { ElectroProductOverviewSection } from "@/components/catalog/electro/ElectroProductOverviewSection";
import { ElectroSpecsSection } from "@/components/catalog/electro/ElectroSpecsSection";
import { SfotcOperatingModeTable } from "@/components/general_pages/SfotcOperatingModeTable";
import { SFOTCDimensionsSection } from "@/components/catalog/electro/SFOTCDimensionsSection";

const product = productData.find((p) => p.id === "ustanovka-sfotc-250");

export default function SFOTC250Page() {
  if (!product) return;

  const table = sfotcOperatingModes.find(
    (mode) => mode.id === "sfotc-250-17000",
  )!;

  return (
    <div className="@container w-full lg:overflow-x-auto">
      {/* <ElectroProductOverviewSection product={product} />
      <ElectroSpecsSection product={product} />
      <SFOTCDimensionsSection product={product} /> */}
    </div>
  );
}
