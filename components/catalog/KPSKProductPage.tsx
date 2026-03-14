import productData from "@/data/products.json";

import Image from "next/image";

import { capitalizeFirst, sortProducts } from "@/lib/utils";
import { getHeatCarrierAdj } from "@/lib/heatCarrierAdj";
import { getRowsNumberAdj } from "@/lib/rowsNumberAdj";

import ProductCard from "@/components/catalog/productCard";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import ProductSubheader from "@/components/catalog/productSubheader";
import ProductParagraph from "@/components/catalog/productParagraph";
import SimilarProductLink from "@/components/catalog/similarProductLink";
import LegacyHtml from "@/components/legacyHtml";

const tableEquipment: Record<string, string> = {
  water: "насосно-смесительного",
  steam: "пароконденсатного",
};

const kaloriferyTableHeaders = {
  water: [
    <>
      Производительность по воздуху, м<sup>3</sup>/час
    </>,
    "Тепловая мощность калорифера, кВт",
    <>
      Площадь поверхности теплообмена, м<sup>2</sup>
    </>,
    <>
      Площадь фронтального сечения, м<sup>2</sup>
    </>,
    "Объем воздухонагревателя, л",
    "Количество рядов теплообменника",
    "Количество теплообменных трубок",
    "Число ходов по теплоносителю",
    "Диаметр патрубков, Ду мм",
    "Масса, кг",
    "Аэродинамическое сопротивление min, Па",
    "Аэродинамическое сопротивление max, Па",
    "Гидравлическое сопротивление min, кПа",
    "Гидравлическое сопротивление max, кПа",
    "Скорость теплоносителя min, м/сек",
    "Скорость теплоносителя max, м/сек",
    <>
      Расход теплоносителя min, м<sup>3</sup>/час
    </>,
    <>
      Расход теплоносителя max, м<sup>3</sup>/час
    </>,
    <>
      Коэффициент теплопередачи min, Вт/(м<sup>2</sup>•°С)
    </>,
    <>
      Коэффициент теплопередачи max, Вт/(м<sup>2</sup>•°С)
    </>,
  ],
  steam: [
    <>
      Производительность по воздуху, м<sup>3</sup>/час
    </>,
    "Тепловая мощность калорифера, кВт",
    <>
      Площадь поверхности теплообмена, м<sup>2</sup>
    </>,
    <>
      Площадь фронтального сечения, м<sup>2</sup>
    </>,
    <>
      Емкость воздухонагревателя, м<sup>3</sup>
    </>,
    "Количество рядов теплообменника",
    "Количество теплообменных трубок",
    "Число ходов по теплоносителю",
    "Диаметр патрубков, Ду мм",
    "Масса, кг",
    "Аэродинамическое сопротивление min, Па",
    "Аэродинамическое сопротивление max, Па",
    "Расход теплоносителя min, кг/час",
    "Расход теплоносителя max, кг/час",
    <>
      Коэффициент теплопередачи min, Вт/(м<sup>2</sup>•°С)
    </>,
    <>
      Коэффициент теплопередачи max, Вт/(м<sup>2</sup>•°С)
    </>,
  ],
};

const ao2TableHeaders = {
  water: [
    <>
      Производительность по воздуху, м<sup>3</sup>/час
    </>,
    "Тепловая мощность агрегата, кВт",
    "Установленный водяной калорифер",
    "Установленный вентилятор",
    "Двигатель, кВт/об. мин.",
    "Диаметр патрубков, Ду мм",
    "Масса отопительного агрегата, кг",
    "Объем комплектуемого калорифера, л",
    <>
      Площадь поверхности теплообмена, м<sup>2</sup>
    </>,
    "Количество теплообменных трубок",
    <>
      Расход теплоносителя min, м<sup>3</sup>/час
    </>,
    <>
      Расход теплоносителя max, м<sup>3</sup>/час
    </>,
    "Гидравлическое сопротивление min, кПа",
    "Гидравлическое сопротивление max, кПа",
  ],
  steam: [
    <>
      Производительность по воздуху, м<sup>3</sup>/час
    </>,
    "Тепловая мощность агрегата, кВт",
    "Установленный паровой калорифер",
    "Установленный вентилятор",
    "Двигатель, кВт/об. мин.",
    "Масса отопительного агрегата, кг",

    <>
      Емкость комплектуемого калорифера, м<sup>3</sup>
    </>,
    <>
      Площадь поверхности теплообмена, м<sup>2</sup>
    </>,
    "Количество теплообменных трубок",
    "Диаметр патрубков, Ду мм",
    "Расход теплоносителя min, кг/час",
    "Расход теплоносителя max, кг/час",
  ],
};

const calculatorUrlBySize = {
  ksk: {
    1: "/kpvu-572x572",
    2: "/kpvs-572x572",
    3: "/kpvs-614x614",
    4: "/kpvs-697x697",
    5: "/kpvs-780x780",
    6: "/kpvu-617x617",
    7: "/kpvs-655x655",
    8: "/kpvu-754x754",
    9: "/kpvu-845x845",
    10: "/kpvs-655x655",
    11: "/kpvs-1239x1239",
    12: "/kpvs-1572x1572",
  },
  kpsk: {
    1: "/kppu-572x572",
    2: "/kpps-572x572",
    3: "/kpps-614x614",
    4: "/kpps-697x697",
    5: "/kpps-780x780",
    6: "/kppu-617x617",
    7: "/kpps-655x655",
    8: "/kppu-754x754",
    9: "/kppu-845x845",
    10: "/kpps-655x655",
    11: "/kpps-1239x1239",
    12: "/kpps-1572x1572",
  },
};
const calculatorAirPowerBySize = {
  1: 2000,
  2: 2500,
  3: 3000,
  4: 4000,
  5: 5000,
  6: 2500,
  7: 3500,
  8: 4000,
  9: 5000,
  10: 6000,
  11: 16000,
  12: 25000,
};

const seriesEng = {
  КСк: "ksk",
  КПСк: "kpsk",
};

export default function KPSKProductPage({ product }) {
  const heatCarrierAdj = getHeatCarrierAdj(product.heatCarrier);

  const isCalorifier = product.categories.includes("kalorifer");
  const isAgregat = product.categories.includes("agregaty");
  const isKFB = product.categories.includes("kfb");

  const categories = ["ksk", "kpsk", "tvv", "kp", "kfb", "ao2"];
  const category = categories.find((cat) => product.categories.includes(cat));

  const productsByCategory = productData
    .filter((p) => p.categories.includes(category))
    .sort((a, b) => sortProducts(a.name, b.name));

  const extraCategory =
    category === "ksk" ? "tvv" : category === "kpsk" ? "kp" : null;

  const extraProducts = extraCategory
    ? productData.filter(
        (p) => p.categories.includes(extraCategory) && p.size === product.size,
      )
    : [];

  const productsByRows = productsByCategory.filter(
    (p) =>
      p.rows === product.rows &&
      ((!isKFB && !isAgregat) || p.heatCarrier === product.heatCarrier),
  );
  const productsBySize = [
    ...productsByCategory.filter((p) => p.size === product.size),
    ...extraProducts,
  ];

  const rowsNumberAdj = getRowsNumberAdj(product.rows);

  //TODO change to an object
  let URLs: string[] = [];
  if (category === "ksk")
    URLs = ["kalorifery-ksk", "Kalorifer_KSK_katalog_2025.pdf"];
  if (category === "kpsk")
    URLs = ["kalorifery-kpsk", "Kalorifer_KPSK_katalog_2025.pdf"];
  if (category === "tvv")
    URLs = ["kalorifery-tvv", "Kalorifer_TVV_katalog_2025.pdf"];
  if (category === "kp")
    URLs = ["kalorifery-kp", "Kalorifer_KP_katalog_2025.pdf"];
  if (category === "kfb" && product.heatCarrier === "water")
    URLs = ["kalorifery-kfb-a", "Kalorifer_KFB_katalog_2025.pdf"];
  if (category === "kfb" && product.heatCarrier === "steam")
    URLs = ["kalorifery-kfb", "Kalorifer_KFB_katalog_2025.pdf"];
  if (category === "ao2" && product.heatCarrier === "water")
    URLs = ["ao2-ksk-kpsk", "Agregat_AO2_katalog_2025.pdf"];
  if (category === "ao2" && product.heatCarrier === "steam")
    URLs = ["ao2-kpsk-ksk", "Agregat_AO2_katalog_2025.pdf"];

  const linkButtons = [
    [
      category === "ksk"
        ? { name: "Калорифер для низких температур", url: "/kalorifery-tvv" }
        : { name: "Подбор диаметра паропровода", url: "/paroprovod" },
      {
        name: `Онлайн калькулятор ${calculatorAirPowerBySize[product.size]} м³/ч`,
        url: calculatorUrlBySize[seriesEng[product.series]][product.size],
        hiddenText: `Калькулятор расчета ${heatCarrierAdj.gen} калорифера на производительность ${calculatorAirPowerBySize[product.size]} м3/ч`,
      },
    ],
    [
      {
        name: `${isKFB || isAgregat ? heatCarrierAdj.plu : ""} ${isCalorifier ? "калориферы" : "агрегаты"} ${product.series} ${isKFB || isAgregat ? "" : "- характеристики"}`,
        url: "/" + URLs[0],
      },
      {
        name: `Каталог ${isAgregat ? heatCarrierAdj.pluGen : ""} ${isCalorifier ? "калориферов" : "агрегатов"} ${product.series} ${isKFB && product.heatCarrier === "water" ? "М" : isKFB && product.heatCarrier === "steam" ? "П" : ""}`,
        url: "/documents/" + URLs[1],
        openNewTab: true,
        goal: "open_pdf",
      },
    ],
  ];

  const techSupportTable1Rows = [
    ["Инженерная поддержка", "консультация по подбору"],
    ["Технологическая поддержка", "расчет параметров под ТЗ"],
    ["Проектная документация", "предоставление 3D-моделей"],
    ["Производственный сервис", "нестандартная комплектация"],
  ];
  const techSupportTable2Rows = [
    [
      "Статус оборудования",
      product.size >= 6 && product.size <= 10 && product.rows !== 2
        ? "в наличии"
        : "под изготовление",
    ],
    [
      `Срок производства ${product.shortName}`,
      `от ${product.size <= 5 ? "7" : product.size <= 10 ? "5" : "10"} рабочих дней`,
    ],
    ["Комплект документов", "паспорт, сертификат"],
    ["Гарантийный срок", "12 месяцев"],
  ];

  const specificationsTable1Rows = [
    ["Предприятие-производитель", "ООО «Т.С.Т.»"],
    ["Наименование модели", `калорифер ${product.shortName}`],
    ["Конструктивное исполнение", "02"],
    ["Технические требования", "ТУ 4863-002-55613706-02"],
    ["Категория размещения", "У3 по ГОСТ 15150-69"],
  ];
  const specificationsTable2Rows = [
    ["Теплоноситель", "насыщенный перегретый пар"],
    ["Параметры теплоносителя", "T до 190°С, P до 1.2 МПа"],
    ["Качество теплоносителя", "ГОСТ 20995 СНиП 2-04.07-86"],
    ["Параметры воздуха", "ГОСТ 12.1.005-88"],
    ["Монтаж и эксплуатация", "СНиП 41-01-2003"],
  ];

  const productFrontWidth = product.sizeTableValues[6];
  const productFullHeight = product.sizeTableValues[3] + 65;
  const reshetkaWidth = 180;
  const productWeight = product.specsTableValues[9];

  const productVolume = (
    (productFrontWidth / 1000) *
    (productFullHeight / 1000) *
    (reshetkaWidth / 1000)
  ).toFixed(3);

  const productDimensionsString = `${(productFrontWidth / 1000).toFixed(3)} м х ${(productFullHeight / 1000).toFixed(3)} м х ${(reshetkaWidth / 1000).toFixed(3)} м`;

  const fullModelName = {
    ksk: `${product.model} ${product.climate}`,
    kpsk: `КП-Ск ${product.rows}-${product.size} 02 ${product.climate}`,
  };

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <h1 className="mb-8 text-xl font-bold uppercase">{product.name}</h1>
      <div className="mb-6 grid grid-rows-[minmax(0,max-content)_1fr] gap-y-5 sm:grid-cols-[max-content_minmax(0,1fr)] sm:gap-x-6">
        <ProductCard
          product={product}
          isLink={false}
          className="row-start-1 row-end-3 self-start justify-self-start sm:row-span-1 xl:col-start-1 xl:row-start-1 xl:row-end-3"
        />
        {/* text */}
        <div className="sm:col-span-full sm:row-start-2 xl:col-auto xl:row-start-1">
          <h2 className="mb-3 text-xl">
            <div className="sm:inline">
              {isCalorifier ? "Калорифер" : "Воздушно-отопительный агрегат"}{" "}
              {product.model}
              {product.climate && ` ${product.climate}`}.{" "}
            </div>
            {isAgregat ? (
              <div>ТУ 4864-003-55613706-02</div>
            ) : (
              "ТУ 4863-002-55613706-02"
            )}
          </h2>
          <ProductParagraph className="text-[16px]">
            {isCalorifier
              ? "Теплоотдающие элементы:"
              : `Теплоотдающие элементы ${heatCarrierAdj.gen} калорифера ${product.calorifier}:`}{" "}
          </ProductParagraph>
          <ul>
            <li>
              - электросварные прямошовные трубки {product.tubeSize} мм по ГОСТ
              10704-91
            </li>
            <li>
              - цельнотянутые бесшовные трубки {product.tubeSize} мм по ГОСТ
              8734-75
            </li>
            <li>с алюминиевым (АД1 ТУ 1-8-267-99) накатным оребрением</li>
          </ul>
        </div>
        {/* chips */}
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <ProductParagraph className="font-bold">
              {isCalorifier ? "Все калориферы" : "Агрегаты"} данного типоразмера
            </ProductParagraph>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(90px,max-content))] gap-x-3 gap-y-4">
              {productsBySize.map((p) => (
                <li key={p.id}>
                  <SimilarProductLink id={p.id} isActive={p.id === product.id}>
                    {isCalorifier && !isKFB ? p.shortName : p.model}
                  </SimilarProductLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <ProductParagraph className="font-bold">
              {isCalorifier ? "Стандартные" : "Все"} {rowsNumberAdj.plu}{" "}
              типоразмеры
            </ProductParagraph>
            <ul className="mx-1 grid grid-cols-[repeat(auto-fill,minmax(90px,max-content))] gap-x-3 gap-y-4">
              {productsByRows.map((p) => (
                <li key={p.id}>
                  <SimilarProductLink id={p.id} isActive={p.id === product.id}>
                    {isCalorifier && !isKFB ? p.shortName : p.model}
                  </SimilarProductLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="mb-4">
        <ProductSubheader
          text={`Производство и назначение калорифера ${product.shortName}`}
        />
        <ProductParagraph>
          {capitalizeFirst(heatCarrierAdj.nom)} калорифер {product.shortName} —
          промышленный теплообменник рекуперативного типа, используемый в
          системах воздушного отопления и вентиляции, сушильных установках и в
          котором нагрев воздуха осуществляется за счет конденсации пара внутри
          теплообменных труб. Производство воздухонагревателя{" "}
          {fullModelName[seriesEng[product.series]]} осуществляется согласно
          техническим условиям с проверкой каждого калорифера на герметичность и
          прочность пробным повышенным давлением теплоносителя.
        </ProductParagraph>
      </section>

      <section className="mb-4">
        <h3 className="mb-3 text-xl">Техническое сопровождение</h3>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:gap-6 md:gap-10 lg:gap-6 xl:gap-8">
          {[techSupportTable1Rows, techSupportTable2Rows].map(
            (tableRows, i) => (
              <table key={i} className="basis-full">
                <tbody className="text-left">
                  {tableRows.map((row, i) => (
                    <tr key={i}>
                      <th className="w-1/2 px-1 py-1.5">{row[0]}</th>
                      <td className="w-1/2 px-1 py-1.5">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ),
          )}
        </div>
      </section>

      <section className="mb-6">
        <ProductSubheader
          text={`Технические характеристики ${isCalorifier ? `калорифера ${product.shortName} ${heatCarrierAdj?.gen}` : `агрегата ${product.model}`}`}
        />
        <ProductParagraph className="mb-3">
          В техническом блоке отражены основные типовые теплоаэродинамические и
          конструкционные характеристики данной модели. Параметры работы
          калорифера {product.shortName} на эксплуатационных режимах,
          отличающихся от паспортных приведены в расчетной таблице.
        </ProductParagraph>
        {/* TABLES */}
        <div className="flex flex-col sm:flex-row sm:gap-6 md:gap-10 lg:gap-6 xl:gap-8">
          <table
            className="basis-full"
            style={{ border: "1px solid rgb(229, 231, 235)" }}
          >
            <tbody>
              {(isCalorifier
                ? kaloriferyTableHeaders[product.heatCarrier]
                : ao2TableHeaders[product.heatCarrier]
              )
                .slice(
                  0,
                  isCalorifier
                    ? product.heatCarrier === "water"
                      ? 10
                      : 8
                    : product.heatCarrier === "water"
                      ? 7
                      : 6,
                )
                .map((header, idx) => (
                  <tr key={idx}>
                    <th
                      className="px-1 py-2 text-left sm:py-1.5"
                      style={{ border: "1px solid rgb(229, 231, 235)" }}
                    >
                      {header}
                    </th>
                    <td
                      style={{ border: "1px solid rgb(229, 231, 235)" }}
                      className={`${isCalorifier ? "w-14" : "w-26"} px-1 text-right`}
                    >
                      {product.specsTableValues[idx]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <table
            className="basis-full"
            style={{ border: "1px solid rgb(229, 231, 235)" }}
          >
            <tbody>
              {(isCalorifier
                ? kaloriferyTableHeaders[product.heatCarrier]
                : ao2TableHeaders[product.heatCarrier]
              )
                .slice(
                  isCalorifier
                    ? product.heatCarrier === "water"
                      ? 10
                      : 8
                    : product.heatCarrier === "water"
                      ? 7
                      : 6,
                )
                .map((header, idx) => (
                  <tr key={idx}>
                    <th
                      style={{ border: "1px solid rgb(229, 231, 235)" }}
                      className="px-1 py-2 text-left sm:py-1.5"
                    >
                      {header}
                    </th>
                    <td
                      style={{ border: "1px solid rgb(229, 231, 235)" }}
                      className={`${isCalorifier ? "w-14" : "w-26"} px-1 text-right`}
                    >
                      {
                        product.specsTableValues[
                          isCalorifier
                            ? product.heatCarrier === "water"
                              ? idx + 10
                              : idx + 8
                            : product.heatCarrier === "water"
                              ? idx + 7
                              : idx + 6
                        ]
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <ProductSubheader
          text={`Конструкция калорифера ${product.shortName}`}
        />
        <ProductParagraph className="mb-6">
          Калорифер одноходовой {product.shortName} выполнен в виде жесткого
          стального каркаса прямоугольного сечения с трубными решетками и
          боковыми съемными щитками, распределительным и сборным коллекторами,
          патрубками и пакетом трубок с алюминиевым спирально- накатным
          оребрением, расположенных в шахматном порядке. Паровой
          воздухонагреватель должен эксплуатироваться: в системах отопления,
          вентиляции, кондиционирования с температурой теплоносителя не выше
          130°С, давлением не более 0.3 МПа, теплоотдающие элементы изготовлены
          из стальных электросварных прямошовных труб; для технологического
          нагрева с температурой теплоносителя до 190°С, давлением до 1.2 МПа,
          теплоотдающие элементы изготовлены из бесшовных холоднодеформированных
          труб.
        </ProductParagraph>
        {/* ROW OF IMAGES */}
        <div className="flex flex-col gap-4 sm:flex-row md:gap-6 lg:gap-4 xl:gap-10">
          <div
            className={`relative w-full`}
            style={{
              aspectRatio: `${product.frontView.width}/${product.frontView.height}`,
            }}
          >
            <Image
              src={product.frontView.url}
              alt={
                isCalorifier
                  ? `Воздухонагреватель ${isKFB ? product.model : product.shortName} ${heatCarrierAdj.nom}`
                  : `${capitalizeFirst(heatCarrierAdj.nom)} воздушный агрегат ${product.shortName} ${product.rows === 3 ? "трехрядный" : "четырехрядный"}`
              }
              title={
                isCalorifier
                  ? product.name
                  : `Агрегат ${product.model} ${heatCarrierAdj.nom}`
              }
              fill
            />
          </div>
          <div
            className={`relative w-full`}
            style={{
              aspectRatio: `${product.parts.width}/${product.parts.height}`,
            }}
          >
            <Image
              src={product.parts.url}
              alt={
                isCalorifier
                  ? `${product.name} чертеж`
                  : `Воздушно-отопительный агрегат ${product.shortName} ${product.calorifier} ${heatCarrierAdj.nom}`
              }
              title={
                isCalorifier
                  ? `Калорифер ${heatCarrierAdj.nom} ${isKFB ? product.model : product.shortName}`
                  : `${capitalizeFirst(heatCarrierAdj.nom)} отопительный агрегат ${product.model}`
              }
              fill
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <ProductSubheader
          text={`Таблица расчета и подбора ${heatCarrierAdj?.gen} ${isCalorifier ? "калорифера" : "агрегата"} ${isCalorifier ? product.shortName : product.model}`}
        />
        <ProductParagraph className="mb-3">
          Ниже представлены расчетные данные {heatCarrierAdj?.gen}{" "}
          {isCalorifier
            ? `калорифера ${product.shortName}`
            : `агрегата ${product.shortName.replace(" ", "")} (на базе ${rowsNumberAdj.gen} ${heatCarrierAdj.gen} калорифера ${product.calorifier.replace(/[0-9]/g, "")})`}{" "}
          производства ООО Т.С.Т. Выбрав в верхней части таблицы подходящий вам
          график теплоносителя, можно ознакомиться с основными теплотехническими
          показателями: температурой воздуха на выходе,
          {isCalorifier &&
            product.heatCarrier === "water" &&
            " гидравлическим и аэродинамическим сопротивлением,"}{" "}
          {!isCalorifier &&
            product.heatCarrier === "water" &&
            " сопротивлением по воде и расходом теплоносителя,"}{" "}
          {isCalorifier &&
            product.heatCarrier === "steam" &&
            " аэродинамическим сопротивлением,"}{" "}
          вырабатываемой мощностью
          {product.heatCarrier === "steam" && " и расходом пара"}.
        </ProductParagraph>
        <div className="overflow-x-auto">
          <LegacyHtml
            path={product.tableWithTabs}
            className="legacy-table min-w-231"
          />
        </div>
        <ProductParagraph className="mb-4">
          Табличные данные можно использовать при подборе сопутствующего
          {isCalorifier && " вентиляционного и"}{" "}
          {tableEquipment[product.heatCarrier]} оборудования.
        </ProductParagraph>
        <LinkButtonsBlock buttons={linkButtons[0]} />
      </section>

      <section className="mb-6">
        <ProductSubheader
          text={`Габаритные размеры ${isCalorifier ? "калорифера" : `${heatCarrierAdj.gen} агрегата`} ${isCalorifier ? product.shortName : product.model}`}
        />
        <ProductParagraph className="mb-4">
          На чертеже калорифера {product.shortName} указаны габаритные и
          присоединительные размеры парового теплообменника, диаметр условного
          прохода патрубков. По запросу воздухонагреватели могут изготавливаться
          с фланцами или с патрубками не стандартного диаметра, конфигурации и
          расположения.
        </ProductParagraph>
        <Image
          src={product.drawing}
          title={`${capitalizeFirst(heatCarrierAdj.nom)} ${isCalorifier ? `калорифер ${product.shortName}` : `агрегат ${product.model}`} габаритные размеры`}
          alt={`${isCalorifier ? `Калорифер ${product.shortName} ${heatCarrierAdj?.nom}` : `Отопительный агрегат ${product.model}`} технические характеристики`}
          width={968}
          height={1}
          className="mb-4"
        />
        {isCalorifier && (
          <div className="w-full overflow-x-auto">
            <table className={`w-full min-w-231 xl:min-w-auto`}>
              <thead>
                <tr>
                  <th
                    colSpan={9}
                    className="pl-1 text-left"
                    style={{ fontSize: "11pt" }}
                  >
                    Габаритные и присоединительные размеры калорифера{" "}
                    {product.shortName} {heatCarrierAdj?.gen}, мм
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {product.heatCarrier === "water" ? (
                    <>
                      <td>L</td>
                      <td>L 1</td>
                      <td>L 2</td>
                      <td>L 3</td>
                      <td>H</td>
                      <td>H 1</td>
                      <td>H 2</td>
                    </>
                  ) : (
                    <>
                      <td>H</td>
                      <td>H 1</td>
                      <td>H 2</td>
                      <td>H 3</td>
                      <td>B</td>
                      <td>B 1</td>
                      <td>B 2</td>
                    </>
                  )}
                  <td>C</td>
                  <td>dy</td>
                </tr>
                <tr>
                  {product.sizeTableValues.map((value, i) => (
                    <td key={i} style={{ fontSize: "11pt" }}>
                      {value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {isAgregat && (
          <table className="w-full">
            <thead>
              <tr>
                <th colSpan={3}>Габаритные размеры, мм</th>
              </tr>
              <tr>
                <th className="w-1/3">L</th>
                <th className="w-1/3">B</th>
                <th className="w-1/3">H</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {product.sizeTableValues.map((v, idx) => (
                  <td key={idx}>{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        )}
      </section>

      <section className="mb-10">
        <h3 className="mb-2 text-xl">
          Спецификация и стандарты калорифера {product.shortName}
        </h3>
        <ProductParagraph className="mb-3">
          Во время подготовки паровых воздухоподогревателей к работе и при их
          эксплуатации обязаны соблюдаться общие и специальные правила техники
          безопасности. Пусконаладочные работы, включающие монтаж, обвязку и
          запуск калорифера {product.shortName} в работу должны производиться
          при обязательном участии специализированных монтажных организаций.
        </ProductParagraph>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:gap-6 md:gap-10 lg:gap-6 xl:gap-8">
          {[specificationsTable1Rows, specificationsTable2Rows].map(
            (tableRows, i) => (
              <table key={i} className="basis-full">
                <tbody className="text-left">
                  {tableRows.map((row, i) => (
                    <tr key={i}>
                      <th className="w-1/2 px-1 py-1.5">{row[0]}</th>
                      <td className="w-1/2 px-1 py-1.5">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ),
          )}
        </div>
      </section>

      <div className="mb-6">
        <LinkButtonsBlock buttons={linkButtons[1]} />
      </div>

      <section className="text-example space-y-4">
        <h3 className="mb-2 text-xl">
          Оплата и доставка калорифера {product.shortName}
        </h3>

        <div>
          <ProductParagraph>
            Заказать калорифер {product.shortName} на нашем предприятии можно
            следующими способами:
          </ProductParagraph>
          <ul className="text-[17px]">
            <li>
              • позвонив по телефону:{" "}
              <a
                href="tel:+79049681488"
                className="hover:text-primary-dark font-bold"
              >
                +7 (904) 968-14-88
              </a>
            </li>
            <li>• заполнив форму заявки на нашем сайте</li>
            <li>
              • отправив письмо на электронную почту:{" "}
              <a
                href="mailto:zao_tst@mail.ru"
                className="hover:text-primary-dark font-bold"
              >
                zao_tst@mail.ru
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ProductParagraph>
            Способы оплаты калорифера {product.shortName}:
          </ProductParagraph>
          <ul className="text-[17px]">
            <li>• на основании счета с частичной или полной оплатой</li>
            <li>• на основании договора с частичной или полной постоплатой</li>
          </ul>
        </div>

        <div>
          <ProductParagraph>Первичная документация:</ProductParagraph>
          <ul className="text-[17px]">
            <li>• универсальный передаточный документ УПД</li>
            <li>• обмен документами через ЭДО</li>
          </ul>
        </div>

        <div className="w-full overflow-auto">
          <table className="w-full min-w-231">
            <thead>
              <tr>
                <th colSpan={4} className="uppercase">
                  Банковские реквизиты ООО «Т.С.Т.»
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>ИНН</th>
                <th>КПП</th>
                <td>5404002676</td>
                <td>540401001</td>
              </tr>
              <tr>
                <th colSpan={2}>БИК</th>
                <td>044525411</td>
                <td>043207612</td>
              </tr>
              <tr>
                <th colSpan={2} className="uppercase">
                  Расчетный счет
                </th>
                <td>407 028 105 1307 00 000 31</td>
                <td>407 028 100 2621 01 023 57</td>
              </tr>
              <tr>
                <th colSpan={2} className="uppercase">
                  Банк
                </th>
                <td>Филиал «Центральный» Банка ВТБ ПАО г. Москва</td>
                <td>Кемеровское отделение № 8615 ПАО Сбербанк г. Кемерово</td>
              </tr>
              <tr>
                <th colSpan={2} className="uppercase">
                  Корреспондентский счет
                </th>
                <td>301 018 101 4525 00 004 11</td>
                <td>301 018 102 0000 00 006 12</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <ProductParagraph>
            Доставка калорифера {product.shortName}:
          </ProductParagraph>
          <ul className="text-[17px]">
            <li>
              • самовывоз со склада завода, расположенного по адресу: г.
              Киселевск, ул. Юргинская 1
            </li>
            <li>
              • с терминалов ТК «ПЭК», «Деловые Линии» и др. г. Прокопьевска
            </li>
            <li>• поставка автотранспортом нашего предприятия</li>
          </ul>
        </div>

        <div>
          Данные парового теплообменника КП-Ск {product.rows}-{product.size} для
          транспортировки. Внешние габаритные размеры: {productDimensionsString}
          ; объем: {productVolume} м<sup>3</sup>; вес калорифера{" "}
          {product.shortName}: {productWeight} кг.
        </div>
      </section>
    </div>
  );
}
