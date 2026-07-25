import productData from "@/data/products.json";
import { sfotcOperatingModes } from "@/data/sfotcOperatingModes";
import { sfotc16Table } from "@/data/sfotcSpecTables";

import { createSFOTCMetadata } from "@/lib/metadata";

import Spoiler from "@/components/ui/spoiler";
import ProductSubheader from "@/components/catalog/productSubheader";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import { PDFDownloadCard } from "@/components/PDFDownloadCard";

import { SfotcOperatingModeTable } from "@/components/catalog/electro/SfotcOperatingModeTable";
import { ElectroProductOverviewSection } from "@/components/catalog/electro/ElectroProductOverviewSection";
import { SFOTCDimensionsSection } from "@/components/catalog/electro/SFOTCDimensionsSection";
import { DeliverySection } from "@/components/catalog/DeliverySection";
import { SfotcSpecSection } from "@/components/catalog/electro/SfotcSpecSection";
import { ModelDownloadButton } from "@/components/catalog/modelDownloadButton";

const getTable = (airFlow) =>
  sfotcOperatingModes.find((mode) => mode.id === `sfotc-16-${airFlow}`);

const product = productData.find((p) => p.id === "ustanovka-sfotc-16");

export const metadata = createSFOTCMetadata(product?.name, product?.size);

export default function SFOTC16Page() {
  if (!product) return;

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <div className="mb-8 flex flex-col justify-between gap-4 @md:flex-row @md:items-center">
        <h1 className="text-xl font-bold uppercase">
          Электрокалориферная установка {product?.shortName}
        </h1>
        <div className="self-end @md:self-auto">
          <ModelDownloadButton
            modelLinks={[
              {
                text: product.shortName,
                url: `/models/sfotc/elektrokalorifer_sfotc-${product.size}.zip`,
              },
            ]}
          />
        </div>
      </div>

      <ElectroProductOverviewSection product={product} />
      <SfotcSpecSection product={product} table={sfotc16Table} />
      <TechReviewSection />
      <SFOTCDimensionsSection product={product} />

      <DeliverySection
        product={product}
        specs={{ dimensions: [1.18, 0.72, 0.642], weight: 68 }}
        className="mb-6"
      />

      <LinkButtonsBlock
        buttons={[
          {
            name: "Установки СФОЦ - характеристики",
            url: "/teploventilyatory",
          },
          {
            name: "Каталог установок СФОЦ",
            url: "/documents/Electroustanovka_SFOTC_katalog_2025.pdf",
            openNewTab: true,
            goal: "open_pdf",
          },
        ]}
      />
    </div>
  );
}

function TechReviewSection() {
  return (
    <section className="mb-4 space-y-4 text-[17px]">
      <ProductSubheader text="Принципы подбора и режимы эксплуатации СФОЦ-16" />
      <p>
        Электрокалориферная приточная установка СФОЦ-16 установленной тепловой
        мощностью 15 кВт является наименьшим агрегатом в линейке промышленного
        оборудования. Данный моноблок разработан для совмещенных систем
        воздушного отопления и приточной вентиляции малых обособленных
        помещений: операторских будок, постов охраны, диспетчерских пунктов,
        небольших насосных станций, вентиляционных камер и локальных мастерских.
      </p>
      <p>
        Конструктивной основой установки является канальный калорифер СФО,
        расположенный строго со стороны всасывания радиального вентилятора ВР
        85-77-2.5 с электродвигателем 0.55 кВт (3000 об/мин). Внутреннее
        квадратное сечение выхлопного фланца вентилятора составляет 170×170 мм.
        Такое решение обеспечивает равномерное распределение скоростей и
        интенсивный турбулентный обдув алюминиевого оребрения ТЭНов (технология
        ХРП). Высокая скорость потока гарантирует эффективный съем тепла и
        полностью исключает появление локальных зон перегрева нагревательных
        элементов.
      </p>

      <ol className="space-y-4">
        {/* ⚙️ 1. Каскадный алгоритм регулирования мощности */}
        <li className="space-y-4">
          <div className="mx-auto mb-4 h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

          <div>
            <p className="text-example">
              ⚙️ 1. Каскадный алгоритм регулирования мощности
            </p>
            <p>
              Тепловая нагрузка СФОЦ-16 регулируется двумя равными ступенями по
              7.5 кВт каждая, что позволяет адаптировать общую мощность
              установки к текущим температурным условиям:
            </p>
            <ol>
              <li>
                <span className="text-example">
                  • Ступень 1 (Полная мощность — 15 кВт):
                </span>{" "}
                Включены обе электрические секции. Режим предназначен для
                компенсации теплопотерь здания в период умеренных морозов.
              </li>
              <li>
                <span className="text-example">
                  • Ступень 2 (Частичная мощность 1/2 — 7.5 кВт):
                </span>{" "}
                В работе задействована одна независимая электрическая секция.
                Переход на эту ступень позволяет оптимизировать
                энергопотребление и избежать перегрева нагревательных элементов
                в периоды оттепелей и межсезонной эксплуатации.
              </li>
            </ol>
          </div>

          {/* Температурные ограничения по притоку */}
          <div>
            <p className="text-example">Температурные ограничения по притоку</p>
            <p>
              Ввиду конструктивных особенностей и номинальной тепловой мощности
              калорифера СФО-16 (15 кВт), данная установка имеет ограничения по
              применению в жестких климатических условиях в качестве
              единственного (основного) источника отопления при работе на 100%
              наружном притоке.
            </p>
            <ul>
              <li>
                <span className="text-example">
                  • Фактические показатели нагрева:
                </span>{" "}
                При расчетной температуре наружного воздуха -30 °C и номинальной
                производительности по воздуху, величина подогрева потока (дельта
                температур) составляет 17 °C. Соответственно, температура
                приточного воздуха на выходе из установки составит -13 °C.
              </li>
              <li>
                <span className="text-example">
                  • Регламент инженерного применения:
                </span>{" "}
                Установку СФОЦ-16 технически обоснованно закладывать в проекты
                при соблюдении одного из следующих эксплуатационных условий:
                <ol>
                  <li>
                    1. Эксплуатация в климатических зонах с расчетной зимней
                    температурой наружного воздуха не ниже -10...-5 °C (что
                    обеспечивает температуру притока на выходе в диапазоне
                    +7...+12 °C).
                  </li>
                  <li>
                    2. Работа системы в режиме 100% рециркуляции (забор
                    воздушных масс из верхней зоны обслуживаемого помещения с их
                    последующим догревом).
                  </li>
                  <li>
                    3. Использование установки в качестве вспомогательного
                    (дежурного) подогрева при наличии основной водяной или
                    электрической системы отопления здания.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </li>
        {/* ⚙️ 2. Взаимосвязь расходов и располагаемого статического давления */}
        <li className="space-y-4">
          <div className="mx-auto mb-4 h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

          <p>
            <span className="text-example">
              ⚙️ 2. Взаимосвязь расходов и располагаемого статического давления
            </span>
          </p>
          <p>
            В рамках своего безопасного интервала (1 800 – 2 000 м<sup>3</sup>
            /ч) установка демонстрирует следующие напорные параметры:
          </p>
          <ul className="space-y-4">
            {/* Режим 1 800 м<sup>3</sup>/ч — «Номинальный / Короткая сеть» */}
            <li className="space-y-4">
              <div>
                <p className="text-example">
                  Режим 1 800 м<sup>3</sup>/ч — «Номинальный / Короткая сеть»
                </p>
                <ul>
                  <li>
                    <span className="text-example">• Аэродинамика:</span>{" "}
                    Скорость в живом сечении калорифера умеренная. Располагаемое
                    статическое давление для сети здания составляет стабильные
                    133–182 Па.
                  </li>
                  <li>
                    <span className="text-example">• Теплофизика:</span>{" "}
                    Сбалансированная точка для данной модели. Зимний выход при
                    -20 °C составляет 0 °C. Ступенчатый сброс 100% мощности
                    происходит при потеплении на улице до +5 °C.
                  </li>
                </ul>
              </div>
              <p className="text-secondary-text">
                В таблицах приведены эксплуатационные параметры установки
                СФОЦ-16 при фиксированных расходах воздуха. Значения отражают
                взаимосвязь температуры воздуха на выходе и располагаемого
                статического напора установки в зависимости от температуры
                входящего потока и выбранной ступени мощности (полная, 2/3 или
                1/3). Расчетные режимы разделены на три технологические зоны по
                уровню термической нагрузки на нагревательные элементы.
                Благоприятные и рекомендуемые условия эксплуатации с
                температурой на поверхности нагревателей до 150 °C выделены
                зеленым цветом. Рабочие параметры с повышенной термической
                нагрузкой представлены желтым цветом. Пороговые значения, при
                которых температура поверхности нагревателей превышает
                допустимые пределы находятся в красной зоне.
              </p>
              <Spoiler
                title={
                  <>
                    Режимы работы при расходе 1 800 м<sup>3</sup>/ч
                  </>
                }
              >
                <Analysis1800 />
              </Spoiler>
            </li>
            {/* Режим 2 000 м<sup>3</sup>/ч — «Предельный» */}
            <li className="space-y-4">
              <div>
                <p className="text-example">
                  Режим 2 000 м<sup>3</sup>/ч — «Предельный»
                </p>
                <ul>
                  <li>
                    <span className="text-example">• Аэродинамика:</span>{" "}
                    Скорость потока в калорифере возрастает. Располагаемый напор
                    для сети здания зимой падает до критического остатка в 33
                    Па.
                  </li>
                  <li>
                    <span className="text-example">• Теплофизика:</span>{" "}
                    Увеличенный обдув отодвигает тепловую отсечку полной
                    мощности до весенних +15 °C.
                  </li>
                </ul>
              </div>
              <Spoiler
                title={
                  <>
                    Режимы работы при расходе 2 000 м<sup>3</sup>/ч
                  </>
                }
              >
                <Analysis2000 />
              </Spoiler>
            </li>
          </ul>
          <div className="gap-10 pl-6 sm:flex">
            <PDFDownloadCard
              url="/documents/Electrokalorifer_SFOTC-16.pdf"
              img="/img/elektro/electrokalorifer_sfotc-16_doc.png"
              alt="Подбор электрокалорифера СФОЦ-16"
              className="float-left mr-4 h-full sm:float-none sm:m-0"
            />
            <p className="text-secondary-text text-base">
              Представлен расширенный теплотехнический и аэродинамический анализ
              установки СФОЦ-16 во всем диапазоне расходов воздуха. Файл
              содержит развернутые таблицы выходных температур, значения
              располагаемого статического напора для вентиляционной сети,
              графики совмещенной работы вентилятора и калорифера, а также
              критические точки эксплуатации при различных ступенях мощности.
            </p>
          </div>
        </li>
        {/* ⚙️ 3. Аэродинамическая градация вентиляционных сетей */}
        <li>
          <div className="mx-auto mb-4 h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

          <p className="text-example">
            ⚙️ 3. Аэродинамическая градация вентиляционных сетей
          </p>
          <p>
            Ввиду компактных габаритов и напорных характеристик вентиляторного
            узла, инженерный подбор моноблока СФОЦ-16 ограничен исключительно
            короткими вентиляционными сетями с низким аэродинамическим
            сопротивлением:
          </p>
          <ul>
            <li>
              <span className="text-example">
                • Режим прямого выпуска (сопротивление до 30 Па):
              </span>{" "}
              Предназначен для прямого сосредоточенного выпуска воздуха в объем
              обслуживаемого помещения через распределительную решетку или
              регулируемый диффузор без подключения протяженных воздуховодов.
              Под данный тип монтажа моноблок допускается проектировать на
              максимальном расходе 2 000 м<sup>3</sup>/ч, где располагаемое
              статическое давление установки составляет 33 Па.
            </li>
            <li>
              <span className="text-example">
                • Режим работы на локальную сеть (сопротивление до 100–120 Па):
              </span>{" "}
              Применяется при необходимости подключения простой приточной ветки
              воздуховодов длиной до 10–12 метров без магистральных разветвлений
              (с установкой не более 2 воздухораспределительных решеток). Чтобы
              установка преодолевала аэродинамическое сопротивление такой
              системы, проектный расход воздуха необходимо ограничить на уровне
              1 800 м<sup>3</sup>/ч. В этой рабочей зоне располагаемый
              статический напор моноблока возрастает до 133–182 Па, что
              гарантирует стабильный проектный воздухообмен и качественную
              наладку концевых точек.
            </li>
          </ul>
        </li>
        {/* ⚙️ 4. Строительные объемы и кубатура зданий */}
        <li>
          <div className="mx-auto mb-4 h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

          <div className="border-primary rounded-lg border-l-4 pl-4">
            <p className="text-example">
              ⚙️ 4. Строительные объемы и кубатура зданий
            </p>
            <p>
              При подборе СФОЦ-16 в качестве основного источника совмещенного
              приточно-воздушного отопления (с полной компенсацией теплопотерь
              здания) кратность воздухообмена по СП 60.13330 принимается в
              среднем от 1 до 3 объемов в час в зависимости от технологического
              назначения помещений. Фактические напорно-расходные характеристики
              установки обеспечивают наиболее эффективное покрытие параметров
              объектов при расчетной кратности воздухообмена в пределах от 1 до
              2 объемов в час:
            </p>
            <ul>
              <li>
                <div className="text-example">
                  • Режим 1 800 м<sup>3</sup>/ч «Номинальный / Локальная сеть»:
                </div>
                <ul>
                  <li>
                    🏭 Объекты с простой приточной веткой воздуховодов: здания
                    строительным объемом до 900 м<sup>3</sup>
                    (например, операторский блок или диспетчерский пункт
                    площадью около 180 м<sup>2</sup> при высоте потолков 5
                    метров).
                  </li>
                </ul>
              </li>
              <li>
                <div className="text-example">
                  • Режим 2 000 м<sup>3</sup>/ч «Высокообъемный / Прямой
                  выпуск»:
                </div>
                <ul>
                  <li>
                    🏭 Помещения без подключения сети воздуховодов: здания
                    строительным объемом до 1 000 м<sup>3</sup> (например,
                    локальные мастерские или посты обслуживания техники площадью
                    до 200 м<sup>2</sup> при высоте потолков 5 метров),
                    работающие по схеме прямого сосредоточенного выпуска
                    нагретого воздуха через распределительные сопла установки.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
  );
}

const ANALYSIS_SECTION_CLASS =
  "space-y-4 rounded bg-[rgb(233,239,247)] px-5 py-3 text-[17px] inset-shadow-sm mt-4";

function Analysis1800() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <SfotcOperatingModeTable table={getTable(1800)} />
    </section>
  );
}

function Analysis2000() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <SfotcOperatingModeTable table={getTable(2000)} />
    </section>
  );
}
