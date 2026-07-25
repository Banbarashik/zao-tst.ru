import LinkButtonsBlock from "@/components/linkButtonsBlock";
import { ElectroProductOverviewSection } from "@/components/catalog/electro/ElectroProductOverviewSection";
import { ElectroSpecsSection } from "@/components/catalog/electro/ElectroSpecsSection";
import { SFOTCDimensionsSection } from "@/components/catalog/electro/SFOTCDimensionsSection";
import { SFODrawingAndCircuitSection } from "@/components/catalog/electro/SFODrawingAndCircuitSection";
import { SHUKDrawingAndCircuitSection } from "@/components/catalog/electro/SHUKDrawingAndCircuitSection";
import { DeliverySection } from "@/components/catalog/DeliverySection";
import {
  ELECTRO_CATEGORY_META,
  getElectroProductTitle,
  getPreciseElectroCategory,
} from "@/components/catalog/electro/electroCategoryMeta";

const SectionByCategory = {
  sfo: SFODrawingAndCircuitSection,
  sfotc: SFOTCDimensionsSection,
  shuk: SHUKDrawingAndCircuitSection,
} as const;

export default function ElectroEquipmentPage({
  product,
}: {
  product: { categories: string[]; name: string; shortName: string };
}) {
  const preciseCategory = getPreciseElectroCategory(product) ?? "sfo";
  const categoryMeta = ELECTRO_CATEGORY_META[preciseCategory];
  const productName = getElectroProductTitle(product, preciseCategory);
  const SpecificSection = SectionByCategory[preciseCategory];

  const linkButtons = [
    {
      name: categoryMeta.tableLinkText,
      url: `/${categoryMeta.tablePageUrl}`,
    },
    {
      name: categoryMeta.catalogLinkText,
      url: `/documents/${categoryMeta.catalogFileName}`,
      openNewTab: true,
      goal: "open_pdf",
    },
  ];

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <h1 className="mb-8 text-xl font-bold uppercase">{productName}</h1>
      <ElectroProductOverviewSection product={product} />
      <ElectroSpecsSection product={product} />
      <SpecificSection product={product} />

      <DeliverySection
        product={product}
        specs={{ dimensions: [0, 0, 0], weight: 0 }}
        className="mb-6"
      />

      <LinkButtonsBlock buttons={linkButtons} />
    </div>
  );
}
