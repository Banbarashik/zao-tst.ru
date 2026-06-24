import productData from "@/data/products.json";

import Image from "next/image";
import Link from "next/link";

import type { SupplyCalorifier } from "@/types";

import { capitalizeFirst } from "@/lib/utils";
import { getHeatCarrierAdj } from "@/lib/heatCarrierAdj";

import LinkButtonsBlock from "@/components/linkButtonsBlock";
import { ModelDownloadButton } from "@/components/catalog/modelDownloadButton";
import ProductCard from "@/components/catalog/productCard";
import ProductSubheader from "@/components/catalog/productSubheader";
import ProductParagraph from "@/components/catalog/productParagraph";
import { DeliverySection } from "@/components/catalog/DeliverySection";
import { CalculatorBlock } from "@/components/catalog/pritochnye-calculator";

const seriesEng = {
  КПВС: "kpvs",
  КППС: "kpps",
  КПВУ: "kpvu",
  КППУ: "kppu",
};

export default async function SupplyCalorifierPage({
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
  } = product;
  const internalSize = size - 72;
  const frameSize = Math.ceil(size / 50) * 50;

  const heatCarrierAdj = getHeatCarrierAdj(heatCarrier);

  const shortNameWithoutHyphen = shortName.replace("-", " ");
  const shortNameWithHyphen = shortName.replace(" ", "-");

  const isWater = heatCarrier === "water";
  const isSteam = heatCarrier === "steam";
  const isKPVS = series === "КПВС";
  const isKPPS = series === "КППС";
  const isKPVU = series === "КПВУ";
  const isKPPU = series === "КППУ";

  const dimensions = [
    specsTableValues[3] / 1000,
    (isWater ? specsTableValues[4] : specsTableValues[4] + 65) / 1000,
  ];
  const weight = {
    two: specsTableValues.at(-3),
    three: specsTableValues.at(-2),
    four: specsTableValues.at(-1),
  };

  const threeRowsVariant = variants.find((v) => v.rows === 3);
  const fourRowsVariant = variants.find((v) => v.rows === 4);
  const threeRowsImageMetadata = {
    kpvs_kpps: {
      alt: `Чертеж ${heatCarrierAdj.gen} калорифера для приточных систем трехрядного с тепловой мощностью ${threeRowsVariant?.heatPower} кВт`,
      title: `${capitalizeFirst(heatCarrierAdj.nom)} калорифер производительностью: ${airPower} м3/час; ${threeRowsVariant?.heatPower} кВт`,
    },
    kpvu_kppu: {
      alt: `Чертеж ${heatCarrierAdj.gen} воздухонагревателя для приточных установок с мощностью по теплу ${threeRowsVariant?.heatPower} кВт`,
      title: `${capitalizeFirst(heatCarrierAdj.nom)} воздухонагреватель производительностью: ${airPower} м3/час; ${threeRowsVariant?.heatPower} кВт`,
    },
  };
  const fourRowsImageMetadata = {
    kpvs_kpps: {
      alt: `3 d модель ${heatCarrierAdj.gen} приточного калорифера четырехрядного производительностью ${airPower} м3/час`,
      title: `${capitalizeFirst(heatCarrierAdj.nom)} калорифер: объем ${airPower} м3/час; мощность ${fourRowsVariant?.heatPower} кВт`,
    },
    kpvu_kppu: {
      alt: `3 d модель ${heatCarrierAdj.gen} приточного воздухонагревателя производительностью ${airPower} м3/час`,
      title: `${capitalizeFirst(heatCarrierAdj.nom)} воздухонагреватель: объем ${airPower} м3/час; мощность ${fourRowsVariant?.heatPower} кВт`,
    },
  };
  const threeRowsImage = `/img/kalorifery/${seriesEng[series]}/${seriesEng[series]}-${size}_3.png`;
  const fourRowsImage = `/img/kalorifery/${seriesEng[series]}/${seriesEng[series]}-${size}_4.png`;

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

  const fourRowsSpecsNoteText = (
    <>
      4-х рядная модель: {dimensions[0].toFixed(3)} м х{" "}
      {dimensions[1].toFixed(3)} м х 0.220 м; объем:{" "}
      {(dimensions[0] * dimensions[1] * 0.22).toFixed(3)} м<sup>3</sup>;
    </>
  );

  const modelLinks = variants.map((v) => ({
    text: `${series} ${size}x${size}_${v.rows}`,
    url: `/models/${seriesEng[series]}/kalorifer_${seriesEng[series]}-${size}_${v.rows}.zip`,
  }));

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold uppercase">{product.name}</h1>
        <ModelDownloadButton modelLinks={modelLinks} />
      </div>
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
      <CalculatorBlock
        products={productData}
        type={heatCarrier}
        modelId={product.id}
      />
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
            src={threeRowsImage}
            alt={
              threeRowsImageMetadata[
                isKPVS || isKPPS ? "kpvs_kpps" : "kpvu_kppu"
              ].alt
            }
            title={
              threeRowsImageMetadata[
                isKPVS || isKPPS ? "kpvs_kpps" : "kpvu_kppu"
              ].title
            }
            fill
          />
        </div>
        <div
          className={`relative aspect-1000/${size < 1072 ? "500" : "600"} w-full`}
        >
          <Image
            src={fourRowsImage}
            alt={
              fourRowsImageMetadata[
                isKPVS || isKPPS ? "kpvs_kpps" : "kpvu_kppu"
              ].alt
            }
            title={
              fourRowsImageMetadata[
                isKPVS || isKPPS ? "kpvs_kpps" : "kpvu_kppu"
              ].title
            }
            fill
          />
        </div>
      </div>
      {modelText}

      <LinkButtonsBlock
        buttons={[
          {
            name: `${heatCarrierAdj.plu} приточные калориферы`,
            url: isWater ? "/kalorifery-voda" : "/kalorifery-par",
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
        className="mb-6"
      />

      <section className="mb-6 space-y-4">
        <ProductSubheader text={`Технические характеристики ${shortName}`} />

        <p className="text-secondary-text">
          Представленные в онлайн-калькуляторе теплоаэродинамические параметры
          применимы исключительно к приточным калориферам серии КПВС, КППС,
          КПВУ, КППУ. Расчетный алгоритм жестко интегрирован с их специфическими
          конструктивными константами: геометрической конфигурацией шахматного
          пучка, шагом и конфигурацией развитой поверхности спирально-накатного
          алюминиевого оребрения, обеспечивающим наименьшее аэродинамическое
          сопротивление при прохождении воздушного потока.
        </p>

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
          />
        )}

        <p className="text-secondary-text">
          Номенклатура типовых стандартных воздухонагревателей марки КСк, КПСк,
          ТВВ, КП с применительными непосредственно к этим моделям базовыми
          теплотехническими характеристиками и подробными расчетными таблицами
          представлена в соответствующих разделах сайта.
        </p>

        <LinkButtonsBlock
          buttons={[
            {
              name: "Калориферы КСК",
              url: "/kalorifery-ksk",
            },
            {
              name: "Калориферы КПСК",
              url: "/kalorifery-kpsk",
            },
            {
              name: "Калориферы ТВВ",
              url: "/kalorifery-tvv",
            },
            {
              name: "Калориферы КП",
              url: "/kalorifery-kp",
            },
          ]}
          className="mb-4"
        />

        <p className="text-[rgb(192,0,0)]">
          Внутренняя теплофизика этих линеек строго разграничена, поэтому
          сведение параметров приточной вентиляции на базе калькулятора подбора
          требует обязательного использования именно соответствующих моделей
          приточных калориферов для исключения нерасчетных режимов в общей
          схеме.
        </p>
      </section>

      <DeliverySection
        product={product}
        specsNote={
          <>
            Данные {heatCarrierAdj.gen} теплообменника {product.shortName} для
            транспортировки. Внешние габаритные размеры
            {(isKPVU || isKPPU) && " (2-х и 3-х рядная модели)"}:{" "}
            {dimensions[0].toFixed(3)} м х {dimensions[1].toFixed(3)} м х 0.180
            м; объем: {(dimensions[0] * dimensions[1] * 0.18).toFixed(3)} м
            <sup>3</sup>; {isKPVU || (isKPPU && fourRowsSpecsNoteText)} вес
            калорифера: {series}2 - {weight.two} кг, {series}3 - {weight.three}{" "}
            кг, {series}4 - {weight.four} кг.
          </>
        }
      />
    </div>
  );
}
