import Image from "next/image";
import Link from "next/link";

import type { SupplyCalorifier } from "@/types";

import { capitalizeFirst } from "@/lib/utils";
import { getHeatCarrierAdj } from "@/lib/heatCarrierAdj";

import LinkButtonsBlock from "@/components/linkButtonsBlock";
import ProductCard from "@/components/catalog/productCard";
import ProductHeader from "@/components/catalog/productHeader";
import ProductSubheader from "@/components/catalog/productSubheader";
import ProductParagraph from "@/components/catalog/productParagraph";
import LegacyHtml from "@/components/legacyHtml";

const seriesEng = {
  КПВС: "kpvs",
  КППС: "kpps",
  КПВУ: "kpvu",
  КППУ: "kppu",
};

export default function SupplyCalorifierPage({
  product,
}: {
  product: SupplyCalorifier;
}) {
  const {
    shortName,
    series,
    airPower,
    heatCarrier,
    size,
    variants,
    prevProduct,
    nextProduct,
    img,
    drawing,
    specsTableValues,
    calculator,
  } = product;
  const internalSize = size - 72;
  const frameSize = Math.ceil(size / 50) * 50;

  const heatCarrierAdj = getHeatCarrierAdj(product.heatCarrier);

  const shortNameWithoutHyphen = shortName.replace("-", " ");
  const shortNameWithHyphen = shortName.replace(" ", "-");

  const isWater = heatCarrier === "water";
  const isSteam = heatCarrier === "steam";
  const isKPVS = series === "КПВС";
  const isKPPS = series === "КППС";
  const isKPVU = series === "КПВУ";
  const isKPPU = series === "КППУ";

  // TODO create a prop 'mass' on the supply calorifier variant object
  const threeRowsVariantMass = specsTableValues[specsTableValues.length - 2];
  const fourRowsVariantHeatExchangeSurfaceArea =
    specsTableValues[specsTableValues.length - 4];

  const threeRowsVariant = variants.find((v) => v.rows === 3);
  const threeRowsVariantImage = {
    url: `/img/kalorifery/${seriesEng[series]}/${seriesEng[series]}-${size}_3.png`,
    alt:
      series === "КПВС" || series === "КППС"
        ? `3 d модель ${heatCarrierAdj.gen} приточного калорифера. Масса ${threeRowsVariantMass} кг`
        : series === "КПВУ" || series === "КППУ"
          ? `Чертеж ${heatCarrierAdj.gen} воздухонагревателя. Вес ${threeRowsVariantMass} кг`
          : "",
    title:
      series === "КПВС" || series === "КППС"
        ? `${capitalizeFirst(heatCarrierAdj.nom)} калорифер. Производительность по воздуху ${airPower} м3/час. Тепловая мощность ${threeRowsVariant?.heatPower} кВт. Внутренние габариты ${internalSize} х ${internalSize} мм`
        : series === "КПВУ"
          ? `Воздухонагреватель. Объем приточного воздуха ${airPower} м3/час. Тепловая производительность ${threeRowsVariant?.heatPower} кВт. Габариты внутреннего сечения ${internalSize} х ${internalSize} мм`
          : series === "КППУ"
            ? `Приточный паровой нагреватель. Объем воздуха ${airPower} м3/час. Производительность ${threeRowsVariant?.heatPower} кВт. Габариты фронтального сечения ${internalSize} х ${internalSize} мм`
            : "",
  };

  const fourRowsVariant = variants.find((v) => v.rows === 4);
  const fourRowsVariantImage = {
    url: `/img/kalorifery/${seriesEng[series]}/${seriesEng[series]}-${size}_4.png`,
    alt:
      series === "КПВС" || series === "КППС"
        ? `Чертеж ${heatCarrierAdj.gen} теплообменника. Площадь поверхности теплообмена ${fourRowsVariantHeatExchangeSurfaceArea} м2`
        : series === "КПВУ"
          ? `3 d модель воздухонагревателя. Площадь поверхности теплопередачи ${fourRowsVariantHeatExchangeSurfaceArea} м2`
          : series === "КППУ"
            ? `3 d модель парового воздухонагревателя. Площадь теплообмена ${fourRowsVariantHeatExchangeSurfaceArea} м2`
            : "",
    title:
      series === "КПВС" || series === "КППС"
        ? `${capitalizeFirst(heatCarrierAdj.nom)} воздухонагреватель. Объем нагреваемого воздуха ${airPower} м3/час. Производительность по теплу ${fourRowsVariant?.heatPower} кВт. Габаритные размеры ${size} х ${size} мм`
        : series === "КПВУ"
          ? `Калорифер. Объем нагреваемого воздуха ${airPower} м3/час. Мощность по теплу ${fourRowsVariant?.heatPower} кВт. Внешние габаритные размеры ${size} х ${size} мм`
          : series === "КППУ"
            ? `Калорифер с теплоносителем пар. Производительность воздуха ${airPower} м3/час. Мощность ${fourRowsVariant?.heatPower} кВт. Габаритные размеры ${size} х ${size} мм`
            : "",
  };

  const heatPowers = new Intl.ListFormat("ru-RU", {
    style: "long",
    type: "conjunction",
  }).format(variants.map((variant) => String(variant.heatPower)));

  const modelText = (
    <ProductParagraph className="mb-8">
      {(isKPVS || isKPPS) && (
        <>
          Загрузить актуальные CAD-модели {isKPPS && "паровых"} калориферов{" "}
          {shortName} можно по ссылке в верхней части страницы.{" "}
          {isKPVS ? "Водяные воздухонагреватели" : "Воздухонагреватели"} с
          тепловой мощностью {heatPowers} кВт специально разработаны для
          приточных систем с производительностью по воздуху {airPower} м
          <sup>3</sup>/час. {isKPVS ? "Внутренний" : "Внешний"} габаритный
          размер по фланцам составляет{" "}
          {isKPVS ? `${internalSize}x${internalSize}` : `${size}x${size}`} мм,
          что позволяет применять данный {isKPPS && "паровой"} теплообменник для
          монтажа в камеры и стандартные проемы размером {frameSize}х{frameSize}{" "}
          мм.{" "}
        </>
      )}
      {(isKPVU || isKPPU) && (
        <>
          Загрузить актуальные CAD-модели воздухонагревателей {shortName} можно
          по ссылке в верхней части страницы.{" "}
          {capitalizeFirst(heatCarrierAdj.plu)} калориферы с производительностью
          по теплу {heatPowers} кВт специально разработаны для приточных систем
          с объемом {isKPVU ? "нагреваемого" : "подогреваемого"} воздуха{" "}
          {airPower} м{<sup>3</sup>}/час. Габаритные размеры по{" "}
          {isKPVU ? "внутренним" : "внешним"} фланцам составляют{" "}
          {isKPVU ? `${internalSize}x${internalSize}` : `${size}x${size}`} мм,
          что позволяет задействовать данный теплообменник для монтажа в камеры
          и стандартные проемы размером {frameSize}х{frameSize} мм.{" "}
        </>
      )}
      <>
        {isKPPU ? "Конструкторские чертежи" : "Чертежи"} предназначены для
        использования в {isKPVU && "конструкторских"} проектах и подготовки
        присоединяемых к {isKPVS && "водяному"} калориферу элементов вентиляции.
      </>
    </ProductParagraph>
  );

  const modelLinks = variants.map((v) => ({
    text: `${series} ${size}x${size}_${v.rows}`,
    url: `/models/${seriesEng[series]}/kalorifer_${seriesEng[series]}-${size}_${v.rows}.step`,
  }));

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <ProductHeader text={product.name} modelLinks={modelLinks} />
      <ProductParagraph className="mb-4">
        Приточный {heatCarrierAdj?.nom} калорифер {shortNameWithHyphen}{" "}
        выпускается в двух, трех и четырех рядном исполнении. Номинальная
        производительность по воздуху – {airPower} метров кубических в час,
        тепловая мощность варьируется в зависимости от рядности калорифера{" "}
        {shortNameWithHyphen} и параметров эксплуатации.
      </ProductParagraph>
      <h2 className="mb-3 text-xl">
        {product.name} {isWater ? "ХЛ3" : "У3"}.{" "}
        <span className="block sm:inline">ТУ 4863-006-55613706-25</span>
      </h2>
      <div className="mb-8 flex gap-5 overflow-x-auto sm:grid sm:grid-cols-3">
        {variants.map(function (variant) {
          return (
            <ProductCard
              key={variant.id}
              isLink={false}
              product={{ ...variant, airPower, img }}
              className="max-w-64 sm:max-w-none sm:px-4"
            />
          );
        })}
      </div>
      <ProductSubheader text={`Калькулятор подбора калорифера ${shortName}`} />
      <ProductParagraph className="mb-2">
        Синие поля обязательны для заполнения. Запас площади поверхности
        нагрева: оптимальный 10%, допустимый 0-20%. Массовая скорость воздуха в
        фронтальном сечении: оптимальная 3-5 кг/м<sup>2</sup>•с, допустимая
        1.5-8 кг/м<sup>2</sup>•с.{" "}
        {isWater &&
          "Скорость теплоносителя в трубках: оптимальная 0.2-0.5 м/с, допустимая - 0.12-1.2 м/с."}
      </ProductParagraph>
      <LegacyHtml path={calculator} className="legacy-calculator" />
      <ProductParagraph className="mb-7">
        {nextProduct && (
          <>
            Если запас площади поверхности теплообмена не достаточен ни для
            одной модели {shortName} (двух, трех и четырех рядной) нужно перейти
            к следующему номеру {heatCarrierAdj?.gen} калорифера:{" "}
            <Link
              href={nextProduct.slug}
              className="text-primary-darker outline-primary-darker rounded-sm p-1.5 font-bold hover:outline"
            >
              {nextProduct.name}
            </Link>
          </>
        )}
        {nextProduct && prevProduct && (
          <>
            {" "}
            При избыточном запасе следует рассмотреть меньший теплообменник:{" "}
            <Link
              href={prevProduct.slug}
              className="text-primary-darker outline-primary-darker rounded-sm p-1.5 font-bold hover:outline"
            >
              {prevProduct.name}
            </Link>
          </>
        )}
        {!nextProduct && prevProduct && (
          <>
            Если запас площади поверхности теплообмена превышает допустимые
            значения для всех моделей {shortName} (двух, трех и четырех рядных)
            следует рассмотреть меньший теплообменник:{" "}
            <Link
              href={prevProduct.slug}
              className="text-primary-darker outline-primary-darker rounded-sm p-1.5 font-bold hover:outline"
            >
              {prevProduct.name}
            </Link>
          </>
        )}
      </ProductParagraph>
      <ProductSubheader
        text={`3D-модели калорифера ${shortName} для проектирования`}
        className="mb-6"
      />
      <div className="mb-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div
          className={`relative aspect-1000/${size < 1072 ? "500" : "600"} w-full`}
        >
          <Image
            src={threeRowsVariantImage.url}
            alt={threeRowsVariantImage.alt}
            title={threeRowsVariantImage.title}
            fill
          />
        </div>
        <div
          className={`relative aspect-1000/${size < 1072 ? "500" : "600"} w-full`}
        >
          <Image
            src={fourRowsVariantImage.url}
            alt={fourRowsVariantImage.alt}
            title={fourRowsVariantImage.title}
            fill
          />
        </div>
      </div>
      {modelText}
      <ProductSubheader text={`Технические характеристики ${shortName}`} />
      <div className="w-full overflow-x-auto">
        <table className="single-table water-and-steam water-and-steam-inner mb-1 w-full min-w-231 xl:min-w-auto">
          <thead>
            <tr>
              <th rowSpan={2}>
                Производительность <br /> по воздуху, м<sup>3</sup>/час
              </th>
              <th colSpan={5}>
                Габаритные и <br /> присоединительные размеры, мм
              </th>
              <th colSpan={isWater ? 2 : 1} className="dy">
                dy
              </th>
              <th colSpan={3}>
                Площадь поверхности <br /> теплообмена, м<sup>2</sup>
              </th>
              <th colSpan={3} className="mass">
                Масса, кг
              </th>
            </tr>
            <tr>
              <th className="small-cols">
                {isWater && "L"}
                {isSteam && "H"}
                <br />
                {isWater && "H"}
                {isSteam && "B"}
              </th>
              <th className="small-cols">
                {isWater && "L1"}
                {isSteam && "H1"}
                <br />
                {isWater && "H1"}
                {isSteam && "B1"}
              </th>
              <th className="small-cols">
                {isWater && "L2"}
                {isSteam && "H2"}
                <br />
                {isWater && "H2"}
                {isSteam && "B2"}
              </th>
              <th className="small-cols">
                {isWater && "L3"}
                {isSteam && "H3"}
              </th>
              <th className="small-cols">C</th>
              <th className="small-cols w-10">мм</th>
              {isWater && <th className="small-cols w-10 pt-1">&quot;</th>}
              <th className="kal2">{series}2</th>
              <th className="kal2">{series}3</th>
              <th className="kal2">{series}4</th>
              <th className="kal2">{series}2</th>
              <th className="kal2">{series}3</th>
              <th className="kal2">{series}4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {specsTableValues.map((value, i) => {
                const fractionMatch = String(value).match(
                  /^(\d+)\s+(\d+)\/(\d+)$/,
                );
                if (fractionMatch) {
                  const [, whole, numerator, denominator] = fractionMatch;
                  return (
                    <td key={i}>
                      {whole} <sup>{numerator}</sup>/<sub>{denominator}</sub>
                    </td>
                  );
                }
                return <td key={i}>{value}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
      {drawing && (
        <Image
          src={drawing}
          alt={`Габаритные размеры ${heatCarrierAdj?.gen} калорифера ${shortNameWithoutHyphen}`}
          title={`Технические характеристики ${heatCarrierAdj?.gen} калорифера ${shortNameWithoutHyphen}`}
          width={968}
          height={1}
          className="mb-10"
        />
      )}

      <LinkButtonsBlock
        buttons={[
          {
            name: `${heatCarrierAdj.plu} приточные калориферы`,
            url: isWater ? "/kalorifery-voda" : "/kalorifery-par",
            openNewTab: false,
          },
          {
            name: `Каталог калориферов ${product.series}`,
            url: isWater
              ? "/documents/Kalorifer_KPVS_KPVU_katalog_2025.pdf"
              : "/documents/Kalorifer_KPPS_KPPU_katalog_2025.pdf",
            openNewTab: true,
            goal: "open_pdf",
          },
        ]}
      />
    </div>
  );
}
