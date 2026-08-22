import productData from "@/data/products.json";
import { SFOComparativeAnalysisTables } from "@/data/SFOComparativeAnalysisTables";
import { SFOOperatingParameterTables } from "@/data/SFOOperatingParameterTables";

import { createSFOMetadata } from "@/lib/metadata";

import LinkButtonsBlock from "@/components/linkButtonsBlock";
import Spoiler from "@/components/ui/spoiler";
import ProductSubheader from "@/components/catalog/productSubheader";
import { ModelDownloadButton } from "@/components/catalog/modelDownloadButton";
import { PDFDownloadCard } from "@/components/PDFDownloadCard";
import { DeliverySection } from "@/components/catalog/DeliverySection";
import { ElectroProductOverviewSection } from "@/components/catalog/electro/ElectroProductOverviewSection";
import { ElectroSpecsSection } from "@/components/catalog/electro/ElectroSpecsSection";
import { SFODrawingAndCircuitSection } from "@/components/catalog/electro/SFODrawingAndCircuitSection";
import { SFOComparativeAnalysisTable } from "@/components/catalog/electro/SFOComparativeAnalysisTable";
import { SFOOperatingParameterTable } from "@/components/catalog/electro/SFOOperatingParameterTable";
import { getProductDeliveryRecords } from "@/data/regions/product-deliveries.generated";

const product = productData.find((p) => p.id === "elektrokalorifer-sfo-16");
const deliveries = getProductDeliveryRecords(product.id);

export const metadata = createSFOMetadata(product?.name, product?.size);

export default function SFO16Page() {
  if (!product) return;

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <div className="mb-8 flex flex-col justify-between gap-4 @md:flex-row @md:items-center">
        <h1 className="text-xl font-bold uppercase">{product?.name}</h1>
        <div className="self-end @md:self-auto">
          <ModelDownloadButton
            modelLinks={[
              {
                text: product.shortName,
                url: `/models/sfo/elektrokalorifer_sfo-${product.size}.zip`,
              },
            ]}
          />
        </div>
      </div>
      <ElectroProductOverviewSection product={product} />
      <ElectroSpecsSection product={product} />
      <TechReviewSection />
      <SFODrawingAndCircuitSection product={product} />

      <LinkButtonsBlock
        buttons={[
          {
            name: "Расчет токовых нагрузок",
            url: "/elektrokalorifery#anchor1",
          },
          {
            name: "Подбор сечения кабеля СФО-16",
            url: "/elektrokalorifery#anchor3",
          },
        ]}
        className="mb-6"
      />

      <DeliverySection
        product={product}
        specs={{ dimensions: [0.23, 0.72, 0.24], weight: 8 }}
        className="mb-6"
      />

      <LinkButtonsBlock
        buttons={[
          {
            name: "Электрокалориферы СФО",
            url: "/elektronagrevateli",
          },
          {
            name: "Каталог калориферов СФО",
            url: "/documents/Electrokalorifer_SFO_katalog_2025.pdf",
            openNewTab: true,
            goal: "open_pdf",
          },
        ]}
      />

      <section>
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-231 xl:min-w-auto">
            <tbody>
              {deliveries.map((delivery) => (
                <tr
                  key={`${delivery.region.slug}:${delivery.settlement.slug}:${delivery.company}`}
                >
                  <td>{delivery.region.name}</td>
                  <td>{delivery.settlement.name}</td>
                  <td>{delivery.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function TechReviewSection() {
  return (
    <section className="mb-4 space-y-4 text-[17px]">
      <ProductSubheader text="Технический обзор эксплуатации электрокалорифера СФО-16" />
      <p>
        Электрокалорифер СФО-16 является универсальным тепловым модулем малой
        производительности для обособленных производственных участков площадью
        до 130 м<sup>2</sup>. Модель отличается высокой ремонтопригодностью и
        способностью эффективно работать с маломощными вентиляционными
        агрегатами в условиях ограниченного пространства. На основании
        проведенных расчетов выделены три ключевых сценария эксплуатации:
      </p>

      <ol className="space-y-4">
        {/* 1. Режим «Первого подогрева». Расход 1 800 м<sup>3</sup>/ч. */}
        <li className="space-y-2">
          <div>
            <p>
              <span className="text-example">
                ⚙️ 1. Режим «Первого подогрева».
              </span>{" "}
              Расход 1 800 м<sup>3</sup>/ч.
            </p>
            <ul>
              <li>
                <span className="text-example">• Сфера применения:</span>{" "}
                локальный обогрев постоянных рабочих мест, мастерских и бытовок,
                преднагрев сверххолодного наружного воздуха перед подачей на
                основные водяные или паровые калориферы.
              </li>
              <li>
                <span className="text-example">• Параметры:</span>{" "}
                <span className="text-green-600">
                  Вход -45…-20°C, Выход -25…0°C.
                </span>
              </li>
              <li>
                <span className="text-example">• Технический анализ.</span>{" "}
                Эксплуатация в условиях стабильных зимних морозов. Невысокий
                потенциал нагрева с дельтой от 15 до 20 градусов и существенный
                конструктивный байпас делают калорифер крайне чувствительным к
                температуре притока. Основной отопительный режим строго при
                отрицательных температурах наружного воздуха для компенсации
                теплопотерь малых объектов.
              </li>
            </ul>
          </div>
          <p className="text-secondary-text text-base">
            В таблицах приведены параметры эксплуатации электрического
            калорифера СФО-16 на разную производительность, температуру
            входящего воздуха, полную или частичную мощность. Безопасные и
            благоприятные по технологическим условиям и температурному графику
            режимы работы выделены зеленым цветом. Функционирование
            теплообменника с допустимым превышением лимита температуры
            поверхности нагревателей представлено желтым цветом. Пороговые
            значения, за которыми могут последовать необратимые механические
            изменения конструкции находятся в красной зоне.
          </p>
          <Spoiler
            title={
              <>
                Режимы работы СФО-16 при расходе 1 800 м<sup>3</sup>/ч
              </>
            }
          >
            <Analysis1800 />
          </Spoiler>
        </li>

        {/* 2. Режим «Вентиляционного преднагрева». Расход 2 000 м<sup>3</sup>/ч. */}
        <li className="space-y-2">
          <div>
            <p>
              <span className="text-example">
                ⚙️ 2. Режим «Вентиляционного преднагрева».
              </span>{" "}
              Расход 2 000 м<sup>3</sup>/ч.
            </p>
            <ul>
              <li>
                <span className="text-example">• Сфера применения:</span>{" "}
                автомойки, малые подсобные помещения, сушильные шкафы.
              </li>
              <li>
                <span className="text-example">• Параметры:</span>{" "}
                <span className="text-green-600">
                  Вход -15…0°C, Выход +4…+20°C.
                </span>
              </li>
              <li>
                <span className="text-example">• Технический анализ.</span> Зона
                высокой интенсивности теплообмена. Массовая скорость потока в
                активном ядре обеспечивает эффективный съем тепловой мощности с
                поверхности оребрения. Воздушное отопление малообъемных
                помещений.
              </li>
            </ul>
          </div>
          <Spoiler
            title={
              <>
                Режимы работы СФО-16 при расходе 2 000 м<sup>3</sup>/ч
              </>
            }
          >
            <Analysis2000 />
          </Spoiler>
        </li>

        {/* 3. Режим «Вторичного догрева». Расход 2 200 м<sup>3</sup>/ч. */}
        <li className="space-y-2">
          <div>
            <p>
              <span className="text-example">
                ⚙️ 3. Режим «Вторичного догрева».
              </span>{" "}
              Расход 2 200 м<sup>3</sup>/ч.
            </p>
            <ul>
              <li>
                <span className="text-example">• Сфера применения:</span>{" "}
                тепловые завесы, локальный прогрев строительных конструкций.
              </li>
              <li>
                <span className="text-example">• Параметры:</span>{" "}
                <span className="text-green-600">
                  Вход +5…+20°C, Выход +23…+35°C.
                </span>
              </li>
              <li>
                <span className="text-example">• Технический анализ.</span> В
                данном режиме воздух на входе уже теплый, что снижает
                эффективность охлаждения ТЭНов. При работе «на догрев» крайне
                важно поддерживать максимальный обдув, чтобы избежать перехода в
                статус «ПРЕДЕЛ» по температуре поверхности.
              </li>
            </ul>
          </div>
          <Spoiler
            title={
              <>
                Режимы работы СФО-16 при расходе 2 200 м<sup>3</sup>/ч
              </>
            }
          >
            <Analysis2200 />
          </Spoiler>
        </li>
      </ol>

      <div className="gap-10 pl-6 sm:flex">
        <PDFDownloadCard
          url="/documents/Electrokalorifer_SFO-16.pdf"
          img="/img/elektro/electrokalorifer_sfo-16_doc.png"
          alt="Расчет электрокалорифера СФО-16"
          className="float-left mr-4 h-full sm:float-none sm:m-0"
        />
        <p className="text-secondary-text text-base">
          Представлен расширенный теплотехнический и аэродинамический анализ
          модели СФО-16 во всем диапазоне производительности (от минимального до
          максимального расхода воздуха). Файл содержит развернутые таблицы
          порядового нагрева ТЭНов, дельты температур, графики потерь давления и
          критические точки эксплуатации при различных режимах мощности.
        </p>
      </div>

      <SFOComparativeAnalysisTable data={SFOComparativeAnalysisTables.sfo16} />

      <div>
        <p className="text-example">
          ⚙️ Адаптивное управление тепловой нагрузкой СФО-16: «Баланс расхода и
          мощности»
        </p>
        <p>
          Для защиты ТЭНов СФО-16 от критического перегрева применяются два
          альтернативных инженерных решения:
        </p>
        <ul>
          <li>
            <span className="text-example">
              Программа А (снижение электрической нагрузки):
            </span>{" "}
            При уменьшении протока или росте температуры входящего воздуха
            отключается одна секция (переход на 7.5 кВт). Это снижает плотность
            теплового потока и отодвигает достижение порога 180°C на оболочке.
          </li>
          <li>
            <span className="text-example">
              Программа Б (увеличение интенсивности обдува):
            </span>{" "}
            Рост производительности вентилятора (например, с 1800 до 2200 м
            <sup>3</sup>/ч) без снижения мощности. Повышенная скорость воздуха
            «сбивает» температуру металла за счет роста коэффициента
            теплоотдачи.
          </li>
          <li>
            <span className="text-example">Инженерный вывод.</span> Сценарий Б
            является технически более совершенным для поддержания целевой
            температуры в помещении, в то время как Сценарий А обязателен для
            работы в дежурных режимах и при неисправностях вентиляции.
            Рекомендуется установка автоматики, блокирующей нагрев при
            отключении обдува.
          </li>
        </ul>
      </div>

      <section className="border-primary rounded-lg border-l-4 pl-4">
        <h3 className="mb-3 text-xl">
          Системные преимущества и рекомендации по СФО-16
        </h3>
        <p>
          Калорифер СФО-16 может быть интегрирован в существующие системы с
          разветвленной сетью воздуховодов. В режиме полной мощности установка
          эффективно отапливает помещения площадью до 150 м<sup>2</sup> при
          стандартной высоте потолков или до 100 м<sup>2</sup> в
          производственных зданиях с высотой до 5 метров. Аппарат
          характеризуется двухсекционным разделением мощности и высоким
          коэффициентом байпаса, что определяет специфику его аэродинамического
          сопротивления.
        </p>
      </section>
    </section>
  );
}

const ANALYSIS_SECTION_CLASS =
  "space-y-4 rounded bg-[rgb(233,239,247)] px-5 py-3 text-[17px] inset-shadow-sm mt-4";
const TEXT_UNDER_ANALYSIS_TABLE_CLASS = "text-[15px] leading-4.5";

function Analysis1800() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <h3 className="mb-2 text-xl">
        Инженерный анализ режимов работы СФО-16 при расходе 1 800 м<sup>3</sup>
        /ч
      </h3>
      <p>
        При данной производительности достигается максимальная для СФО-16 дельта
        нагрева в двадцать градусов. На полной мощности (15 кВт) установка
        требует контроля температуры притока из-за сниженной скорости обдува в
        периферийных зонах. Анализ выполнен на основе расчетных критериев
        теплопередачи и оценки термической стойкости оребренных нагревательных
        элементов в условиях двухступенчатого регулирования мощности.
      </p>
      <ol className="space-y-4">
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo16.airflow1800.fullPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              1. Режим полной мощности. 15 кВт – 2 работающие секции • Основные
              параметры
            </span>{" "}
            Дельта нагрева 18…22 градуса. Зона «НОРМА» до -25°C. Точка «ПРЕДЕЛ»
            +5°C. Сопротивление 117–205 Па{" "}
            <span className="text-example">• Характеристика</span> Работа на
            полной мощности безопасна только при отрицательных температурах
            наружного воздуха. Как только температура приближается к нулю, ТЭНы
            в ядре достигают критического порога{" "}
            <span className="text-example">• Аэродинамика</span> Сопротивление
            на холодном пуске составляет 200 Па. Это позволяет использовать
            большинство осевых и канальных вентиляторов среднего давления{" "}
            <span className="text-example">• Применение</span> Приточные системы
            вентиляции первого подогрева. Позволяет при морозе -20°C получать на
            выходе ровный поток с нулевой температурой
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo16.airflow1800.oneHalfPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              Режим пониженной мощности. 7.5 кВт – 1 работающая секция •
              Основные параметры
            </span>{" "}
            Дельта нагрева 12…15 градусов. Зона «НОРМА» до -20°C. Точка «ПРЕДЕЛ»
            +10°C. Сопротивление 113–208 Па{" "}
            <span className="text-example">• Теплофизика</span> При сильном
            морозе -25°C калорифер выдает поток с температурой -12°C, что
            является типичным показателем для первой ступени малых приточных
            систем
          </p>
        </li>
      </ol>
      <p className="text-[rgb(192,0,0)]">
        <span className="block">
          Общий вывод для 1 800 м<sup>3</sup>/ч:
        </span>
        Минимальная производительность для СФО-16 является штатным рабочим
        режимом в условиях отрицательных температур, обеспечивающим эффективный
        теплообмен при сохранении достаточно высокого ресурсного запаса
        оборудования. Конструктивная особенность модели требует поддержания
        стабильного расхода воздуха для исключения зон локального застоя и
        перегрева при работе на полную нагрузку.
      </p>
    </section>
  );
}

function Analysis2000() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <h3 className="mb-2 text-xl">
        Инженерный анализ режимов работы СФО-16 при расходе 2 000 м<sup>3</sup>
        /ч
      </h3>
      <p>
        Производительность 2 000 м<sup>3</sup>/ч интенсифицирует конвективный
        теплообмен, снижая температурный напор на оболочке ТЭН. Работа на полной
        мощности становится более стабильной, позволяя эксплуатировать калорифер
        при околонулевых температурах на входе. Ступенчатое переключение
        мощности компенсирует суточные колебания температуры наружного воздуха.
        Расчет учитывает изменение кинематической вязкости и плотности среды,
        определяющих интенсивность теплообмена в живом сечении пучка.
      </p>
      <ol className="space-y-4">
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo16.airflow2000.fullPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              1. Режим полной мощности. 15 кВт – 2 работающие секции • Основные
              параметры
            </span>{" "}
            Дельта нагрева 16…21 градус. Зона «НОРМА» до -15°C. Точка «ПРЕДЕЛ»
            +15°C. Сопротивление 129–250 Па{" "}
            <span className="text-example">• Характеристика</span> При
            номинальной электрической нагрузке средняя дельта температур
            составляет восемнадцать градусов. Высокая интенсивность обдува
            эффективно компенсирует тепловое влияние рядов друг на друга,
            поддерживая температуру поверхности металла в стабильном диапазоне{" "}
            <span className="text-example">• Аэродинамика</span> Сопротивление
            на холодном пуске требует внимательного подхода к выбору
            вентилятора, так как для малых систем это значение является
            существенным
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo16.airflow2000.oneHalfPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              2. Режим пониженной мощности. 7.5 кВт – 1 работающая секция •
              Основные параметры
            </span>{" "}
            Дельта нагрева 10…13 градусов. Зона «НОРМА» до -10°C. Точка «ПРЕДЕЛ»
            +20°C. Сопротивление 125–253 Па{" "}
            <span className="text-example">• Результат</span> Увеличенный расход
            воздуха отодвигает точку лимита до +20°C, что делает этот режим
            базовым для отопительного сезона{" "}
            <span className="text-example">• Ресурсный диапазон</span>{" "}
            Температурный напор минимален, что переводит работу активных
            нагревательных элементов в максимально щадящий тепловой режим с
            сохранением значительного потенциального запаса нихромовой спирали
          </p>
        </li>
      </ol>
      <p className="text-[rgb(192,0,0)]">
        <span className="block">
          Общий вывод для 2 000 м<sup>3</sup>/ч:
        </span>
        Сбалансированный расход является для СФО-16 режимом с высоким
        коэффициентом эксплуатационной надежности. Увеличенный объем воздуха
        позволяет расширить диапазон использования полной мощности в сторону
        положительных температур входящего потока без сокращения ресурсного
        срока службы нагревательных элементов.
      </p>
    </section>
  );
}

function Analysis2200() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <h3 className="mb-2 text-xl">
        Инженерный анализ режимов работы СФО-16 при расходе 2 200 м<sup>3</sup>
        /ч
      </h3>
      <p>
        Производительность 2 200 м<sup>3</sup>/ч характеризует эксплуатацию
        установки в режиме предельной массовой скорости для данного типа
        сечения. Повышение динамического напора в пучке нагревательных элементов
        усиливает турбулизацию потока. Это максимизирует коэффициент теплоотдачи
        и обеспечивает наилучшее охлаждение ТЭНов. Выводы сделаны на основе
        расчетных критериев интенсивности теплосъема и оценки термического
        состояния поверхности при пиковой аэродинамической нагрузке.
      </p>
      <ol className="space-y-4">
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo16.airflow2200.fullPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              1. Режим полной мощности. 15 кВт – 2 работающие секции • Основные
              параметры
            </span>{" "}
            Дельта нагрева 15…19 градусов. Зона «НОРМА» до -5°C. Точка «ПРЕДЕЛ»
            +25°C. Сопротивление 140–299 Па{" "}
            <span className="text-example">• Эффективность</span> Режим
            характеризуется максимальным ресурсом ТЭНов за счет низкой
            температуры их поверхности во всех стандартных зимних диапазонах{" "}
            <span className="text-example">• Особенности</span> За счет
            интенсивного воздушного потока, «окно безопасности» для работы на
            полной мощности расширено до входящей температуры +25°C, что делает
            режим универсальным для зимнего и весеннего периодов
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo16.airflow2200.oneHalfPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              2. Режим пониженной мощности. 7.5 кВт – 1 работающая секция •
              Основные параметры
            </span>{" "}
            Дельта нагрева 10…13 градусов. Зона «НОРМА» до 0°C. Точка «ПРЕДЕЛ»
            +30°C. Сопротивление 135–302 Па{" "}
            <span className="text-example">• Характеристика</span> Режим
            максимальной массовой скорости в живом сечении пучка, коэффициент
            теплоотдачи достигает пиковых значений{" "}
            <span className="text-example">• Аэродинамика</span> Сопротивление
            на холодном пуске очень высокое для СФО-16, требующее установки
            вентилятора с достаточно высокими напорными характеристиками{" "}
            <span className="text-example">• Безопасность</span> Режим позволяет
            уверенно эксплуатировать СФО-16 в течение всего отопительного
            сезона, включая весенние периоды с положительными температурами на
            улице
          </p>
        </li>
      </ol>
      <p className="text-[rgb(192,0,0)]">
        <span className="block">
          Общий вывод для 2 200 м<sup>3</sup>/ч:
        </span>
        Наибольшая производительность является для СФО-16 режимом максимальной
        эксплуатационной безопасности. Высокая скорость обдува гарантирует
        стабильный теплосъем и позволяет использовать установку на 100% мощности
        без риска термической деградации алюминиевого оребрения даже при работе
        в режиме догрева теплого воздуха в переходный период.
      </p>
    </section>
  );
}
