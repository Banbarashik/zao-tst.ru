import Image from "next/image";

import LinkButtonsBlock from "@/components/linkButtonsBlock";
import ProductSubheader from "@/components/catalog/productSubheader";
import ProductParagraph from "@/components/catalog/productParagraph";
import { ElectroProductOverviewSection } from "@/components/catalog/electro/electroProductOverviewSection";
import { ElectroSpecsSection } from "@/components/catalog/electro/electroSpecsSection";

const equipmentType = {
  sfo: {
    nom: "электрокалорифер",
    nomAlt: "электрический калорифер",
    gen: "электрокалорифера",
    pluGen: "электрокалориферов",
  },
  sfotc: {
    nom: "электрокалориферная установка",
    nomAlt: "установка с электрокалорифером",
    gen: "установки",
    pluGen: "электрокалориферных установок",
  },
  shuk: {
    nom: "шкаф ШУК",
    gen: "шкафа управления",
    pluGen: "шкафов ШУК",
  },
};

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

      {(isSHUK || isSFO) && (
        <ProductSubheader
          text={`Чертеж и электрическая схема подключения ${equipmentType[preciseCategory].gen} ${product.shortName}`}
        />
      )}
      {isSFO && (
        <>
          <ProductParagraph className="mb-2">
            Ниже представлены чертеж с габаритными размерами и электрическая
            схема подключения электрокалорифера {product.shortName}.
          </ProductParagraph>
          <div className="flex w-full flex-col gap-3 sm:mb-10 sm:flex-row sm:gap-0">
            <div
              className="relative w-full"
              style={{
                aspectRatio: `${product.drawing.width} / ${product.drawing.height}`,
              }}
            >
              <Image
                src={product.drawing.url}
                title={`${productName} габаритные размеры`}
                alt={`${product.altName} габаритные размеры`}
                fill
              />
            </div>
            <div
              className="relative w-full"
              style={{
                aspectRatio: `${product.scheme.width} / ${product.scheme.height}`,
              }}
            >
              <Image
                src={product.scheme.url}
                alt={`${product.altName} электрическая схема подключения`}
                title={`${product.name} электрическая схема подключения`}
                fill
              />
            </div>
          </div>
        </>
      )}
      {isSFOTC && (
        <div className="mb-10 space-y-3">
          <ProductSubheader
            text={`Габаритные размеры установки ${product.shortName}`}
          />
          <ProductParagraph>
            На чертеже представлены основные габаритные размеры
            электрокалориферной установки {product.shortName}: длина, ширина и
            высота воздухонагревателя по внешнему контуру.
          </ProductParagraph>
          <Image
            src={product.drawing}
            alt={`Электрокалориферная установка ${product.altShortName} габаритные размеры`}
            title={`Электрокалориферная установка ${product.shortName} габаритные размеры`}
            width={776}
            height={1}
            className="mx-auto"
          />
          <ProductSubheader
            text={`Электрическая схема подключения установки ${product.shortName}`}
          />
          <ProductParagraph>
            Подключение электрокалориферной установки {product.shortName} к
            питающей сети осуществляется согласно электрической схеме.
          </ProductParagraph>
          <Image
            src={product.scheme}
            alt={`Электрокалориферная установка ${product.altShortName} электрическая схема подключения`}
            title={`Электрокалориферная установка ${product.shortName} электрическая схема подключения`}
            width={678}
            height={1}
            className="mx-auto"
          />
        </div>
      )}
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
