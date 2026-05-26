import Image from "next/image";

import LinkButtonsBlock from "@/components/linkButtonsBlock";
import { ElectroProductOverviewSection } from "@/components/catalog/electro/electroProductOverviewSection";
import { ElectroSpecsSection } from "@/components/catalog/electro/electroSpecsSection";
import { SFOTCDimensionsSection } from "@/components/catalog/electro/SFOTCDimensionsSection";
import { SFODrawingAndCircuitSection } from "@/components/catalog/electro/SFODrawingAndCircuitSection";

//TODO unite into one object
const tableLinkUrl = {
  sfo: "elektronagrevateli",
  sfotc: "teploventilyatory",
  shuk: "shkafy-upravleniya",
};
const catalogLinkUrl = {
  sfo: "Electrokalorifer_SFO_katalog_2025.pdf",
  sfotc: "Electroustanovka_SFOTC_katalog_2025.pdf",
  shuk: "Electroshkaf_SHUK_katalog_2025.pdf",
};
const tableLinkText = {
  sfo: "Электрокалориферы СФО",
  sfotc: "Установки СФОЦ - характеристики",
  shuk: "Шкафы управления калорифером",
};
const catalogLinkText = {
  sfo: "Каталог калориферов СФО",
  sfotc: "Каталог установок СФОЦ",
  shuk: "Каталог шкафов управления ШУК",
};

export default function ElectroEquipmentPage({ product }) {
  const preciseCategories = ["sfo", "sfotc", "shuk"];
  const preciseCategory = preciseCategories.find((cat) =>
    product.categories.includes(cat),
  );

  const isSFO = preciseCategory === "sfo";
  const isSFOTC = preciseCategory === "sfotc";
  const isSHUK = preciseCategory === "shuk";

  const productName = isSFOTC
    ? `Электрокалориферная установка ${product.shortName}`
    : isSHUK
      ? `Шкаф управления калорифером ${product.shortName}`
      : product.name;

  const linkButtons = [
    {
      name: tableLinkText[preciseCategory],
      url: "/" + tableLinkUrl[preciseCategory],
    },
    {
      name: catalogLinkText[preciseCategory],
      url: "/documents/" + catalogLinkUrl[preciseCategory],
      openNewTab: true,
      goal: "open_pdf",
    },
  ];

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <h1 className="mb-8 text-2xl font-bold uppercase">{productName}</h1>
      <ElectroProductOverviewSection product={product} />
      <ElectroSpecsSection product={product} />

      {isSFO && <SFODrawingAndCircuitSection product={product} />}
      {isSFOTC && <SFOTCDimensionsSection product={product} />}
      {isSHUK && (
        <>
          <p>
            Структура условного обозначения в принципиальной схеме{" "}
            {product.shortName}: {product.specsTableLegend}
          </p>
          <div className="mb-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-0">
            <div
              className="relative w-1/2 max-w-[322px]"
              style={{ aspectRatio: "700 / 950" }}
            >
              <Image
                src={product.drawing}
                alt={`Щит управления калорифером ${product.shortName}`}
                title={`Шкаф управления калорифером ${product.shortName} габаритные размеры`}
                fill
              />
            </div>
            <div
              className="relative w-full max-w-[645px]"
              style={{ aspectRatio: "1400 / 950" }}
            >
              <Image
                src={product.scheme}
                alt={`Блок управления калорифером ${product.shortName} электросхема`}
                title={`Шкаф управления калорифером ${product.shortName} электрическая схема подключения`}
                fill
              />
            </div>
          </div>
        </>
      )}

      <LinkButtonsBlock buttons={linkButtons} />
    </div>
  );
}
