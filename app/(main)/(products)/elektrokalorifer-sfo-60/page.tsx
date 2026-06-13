import productData from "@/data/products.json";
import { SFOComparativeAnalysisTables } from "@/data/SFOComparativeAnalysisTables";
import { SFOOperatingParameterTables } from "@/data/SFOOperatingParameterTables";

import { createSFOMetadata } from "@/lib/metadata";

import LinkButtonsBlock from "@/components/linkButtonsBlock";
import Spoiler from "@/components/ui/spoiler";
import ProductSubheader from "@/components/catalog/productSubheader";
import { PDFDownloadCard } from "@/components/PDFDownloadCard";
import { ModelDownloadButton } from "@/components/catalog/modelDownloadButton";
import { DeliverySection } from "@/components/catalog/DeliverySection";
import { ElectroProductOverviewSection } from "@/components/catalog/electro/ElectroProductOverviewSection";
import { ElectroSpecsSection } from "@/components/catalog/electro/ElectroSpecsSection";
import { SFODrawingAndCircuitSection } from "@/components/catalog/electro/SFODrawingAndCircuitSection";
import { SFOComparativeAnalysisTable } from "@/components/catalog/electro/SFOComparativeAnalysisTable";
import { SFOOperatingParameterTable } from "@/components/catalog/electro/SFOOperatingParameterTable";

const product = productData.find((p) => p.id === "elektrokalorifer-sfo-60");

export const metadata = createSFOMetadata(product?.name, product?.size);

export default function SFO60Page() {
  if (!product) return;

  return (
    <div className="@container w-full lg:overflow-x-auto">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold uppercase">{product?.name}</h1>
        <ModelDownloadButton
          modelLinks={[
            {
              text: product.shortName,
              url: `/models/sfo/elektrokalorifer_sfo-${product.size}.zip`,
            },
          ]}
        />
      </div>
      <ElectroProductOverviewSection product={product} />
      <ElectroSpecsSection product={product} />
      <TechReviewSection />
      <SFODrawingAndCircuitSection product={product} />
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
        className="mb-6"
      />
      <DeliverySection
        product={product}
        specs={{ dimensions: [0.395, 0.72, 0.24], weight: 25 }}
      />
    </div>
  );
}

function TechReviewSection() {
  return (
    <section className="mb-4 space-y-4 text-[17px]">
      <ProductSubheader text="Технический обзор эксплуатации электрокалорифера СФО-60" />
      <p>
        Электрокалорифер СФО-60 — это компактная промышленная установка
        мощностью 67.5 кВт, предназначенная для обогрева помещений площадью
        500–700 м<sup>2</sup>. Модель характеризуется высокой удельной мощностью
        при малых габаритах корпуса, что требует точной настройки расхода
        воздуха. На основе теплофизических расчетов и итерационного анализа
        выделены три базовых сценария применения:
      </p>

      <ol className="space-y-4">
        {/* 1. Режим «Глубокого автономного отопления». Расход 12 000 м<sup>3</sup>/ч. */}
        <li className="space-y-2">
          <div>
            <p>
              <span className="text-example">
                ⚙️ 1. Режим «Тепловой пушки».
              </span>{" "}
              Расход 4 000 м<sup>3</sup>/ч.
            </p>
            <ul>
              <li>
                <span className="text-example">• Сфера применения:</span>{" "}
                воздушное отопление средних производственных объектов, сушильные
                установки, преднагрев сверххолодного наружного воздуха перед
                подачей на основные водяные или паровые калориферы.
              </li>
              <li>
                <span className="text-example">• Параметры:</span>{" "}
                <span className="text-green-600">
                  Вход -45…-20°C, Выход -6…+23°C.
                </span>
              </li>
              <li>
                <span className="text-example">• Технический анализ.</span>{" "}
                Режим интенсивного нагрева с дельтой до 50°C. При работе на 100%
                мощности установка крайне уязвима к потеплению: предельный порог
                наступает уже при +15°C на входе. Переход на 2/3 мощности (45
                кВт) делает этот расход безопасным для постоянной эксплуатации в
                течение всей зимы.
              </li>
            </ul>
          </div>
          <p className="text-secondary-text text-base">
            В таблицах приведены параметры эксплуатации электрического
            калорифера СФО-60 на разную производительность, температуру
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
                Режимы работы СФО-60 при расходе 4 000 м<sup>3</sup>/ч
              </>
            }
          >
            <Analysis4000 />
          </Spoiler>
        </li>

        {/* 2. Режим «Магистральной вентиляции». Расход 15 000 м<sup>3</sup>/ч. */}
        <li className="space-y-2">
          <div>
            <p>
              <span className="text-example">
                ⚙️ 2. Режим «Аэродинамического стандарта».
              </span>{" "}
              Расход 5 000 м<sup>3</sup>/ч.
            </p>
            <ul>
              <li>
                <span className="text-example">• Сфера применения:</span>{" "}
                приточная вентиляция металлообрабатывающих и сборочных участков,
                складских ангаров.
              </li>
              <li>
                <span className="text-example">• Параметры:</span>{" "}
                <span className="text-green-600">
                  Вход -20…+5°C, Выход +14…+40°C.
                </span>
              </li>
              <li>
                <span className="text-example">• Технический анализ.</span>{" "}
                Сбалансированный режим с подъемом температуры на тридцать пять
                градусов. На полной мощности калорифер уверенно работает до
                +10°C на входе. Ступень 2/3 мощности в данном сценарии является
                эталоном надежности, позволяя эксплуатировать аппарат до
                наступления летнего сезона.
              </li>
            </ul>
          </div>
          <Spoiler
            title={
              <>
                Режимы работы СФО-60 при расходе 5 000 м<sup>3</sup>/ч
              </>
            }
          >
            <Analysis5000 />
          </Spoiler>
        </li>

        {/* 3. Режим «Технологического догрева». Расход 18 000 м<sup>3</sup>/ч. */}
        <li className="space-y-2">
          <div>
            <p>
              <span className="text-example">
                ⚙️ 3. Режим «Высокого ресурса».
              </span>{" "}
              Расход 5 500 м<sup>3</sup>/ч.
            </p>
            <ul>
              <li>
                <span className="text-example">• Сфера применения:</span>{" "}
                зональные магистральные сети, вентиляционные системы с
                интенсивным воздухообменом.
              </li>
              <li>
                <span className="text-example">• Параметры:</span>{" "}
                <span className="text-green-600">
                  Вход +5…+25°C, Выход +40…+60°C.
                </span>
              </li>
              <li>
                <span className="text-example">• Технический анализ.</span>{" "}
                Режим технологического доводчика обеспечивает СФО-60 высокую
                «живучесть». Работа с частичной нагрузкой позволяет уверенно
                перекрывать любые погодные колебания, сохраняя при этом высокую
                эффективность нагрева и безопасность нагревательных элементов.
              </li>
            </ul>
          </div>
          <Spoiler
            title={
              <>
                Режимы работы СФО-60 при расходе 5 500 м<sup>3</sup>/ч
              </>
            }
          >
            <Analysis5500 />
          </Spoiler>
        </li>
      </ol>

      <div className="gap-10 pl-6 sm:flex">
        <PDFDownloadCard
          url="/documents/Electrokalorifer_SFO-60.pdf"
          img="/img/elektro/electrokalorifer_sfo-60_doc.png"
          alt="Расчет электрокалорифера СФО-60"
          className="float-left mr-4 h-full sm:float-none sm:m-0"
        />
        <p className="text-secondary-text text-base">
          Представлен расширенный теплотехнический и аэродинамический анализ
          модели СФО-60 во всем диапазоне производительности (от минимального до
          максимального расхода воздуха). Файл содержит развернутые таблицы
          порядового нагрева ТЭНов, дельты температур, графики потерь давления и
          критические точки эксплуатации при различных режимах мощности.
        </p>
      </div>

      <SFOComparativeAnalysisTable data={SFOComparativeAnalysisTables.sfo60} />

      <div>
        <p className="text-example">
          ⚙️ Адаптивное управление тепловой нагрузкой СФО-60: «Баланс расхода и
          мощности»
        </p>
        <p>
          Для обеспечения безаварийной работы СФО-60 в условиях меняющихся
          температур наружного воздуха инженерная служба может использовать две
          альтернативных программы защиты электрических трубчатых элементов от
          перегрева:
        </p>
        <ul>
          <li>
            <span className="text-example">Программа А:</span> Снижение
            электрической нагрузки. Применяется при росте температуры на входе
            или снижении оборотов вентилятора. Ступенчатое отключение рядов
            ТЭНов (переход на 45 или 22.5 кВт) позволяет избежать перегрева
            нихромовой спирали при сохранении непрерывности притока.
          </li>
          <li>
            <span className="text-example">Программа Б:</span> Увеличение
            интенсивности обдува. Приоритетный метод при глубоких морозах.
            Повышение расхода до 5 500 м<sup>3</sup>/ч интенсифицирует
            теплосъем, что позволяет оставить калорифер на полной мощности без
            вреда для конструкции, обеспечивая максимальный тепловой поток в
            помещение.
          </li>
          <li>
            <span className="text-example">Инженерный вывод.</span>{" "}
            Электрокалорифер обладает высокой гибкостью: за счет «эффекта узкого
            корпуса» он охлаждается эффективнее старших моделей при малых
            мощностях, что делает его полноценным выбором для систем
            температурного догрева.
          </li>
        </ul>
      </div>

      <section className="border-primary rounded-lg border-l-4 pl-4">
        <h3 className="mb-3 text-xl">
          Системные преимущества и рекомендации по СФО-60
        </h3>
        <p>
          СФО-60 — оптимальное решение для малого бизнеса, позволяющее закрыть
          вопрос отопления на площадях до 600 м<sup>2</sup>. Напорный потенциал
          системы при использовании радиальных вентиляторов позволяет разводить
          воздух по воздуховодам, подавая тепло сразу в рабочие зоны (на высоте
          2.5–3 м), что экономит до 20% энергии за счет исключения прогрева
          подкровельного пространства. Регулирование проводится как в ручном
          режиме, так и при помощи автоматики с датчиком температуры на
          поверхности ТЭНов для своевременного переключения ступеней мощности в
          зависимости от уличной температуры.
        </p>
      </section>
    </section>
  );
}

const ANALYSIS_SECTION_CLASS =
  "space-y-4 rounded bg-[rgb(233,239,247)] px-5 py-3 text-[17px] inset-shadow-sm mt-4";
const TEXT_UNDER_ANALYSIS_TABLE_CLASS = "text-[15px] leading-4.5";

function Analysis4000() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <h3 className="mb-2 text-xl">
        Инженерный анализ режимов работы СФО-60 при расходе 4 000 м<sup>3</sup>
        /ч
      </h3>
      <p>
        Производительность 4 000 м<sup>3</sup>/ч является нижним
        эксплуатационным порогом для работы СФО-60 на полную нагрузку. При таком
        расходе массовая скорость потока формирует максимально глубокий прогрев
        воздуха, но требуется строгий контроль активной мощности для
        предотвращения термического повреждения ТЭНов.
      </p>
      <ol className="space-y-4">
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow4000.fullPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              1. Режим полной мощности. 67.5 кВт – 3 работающие секции •
              Основные параметры
            </span>{" "}
            Дельта нагрева 39…49 градусов. Зона «НОРМА» до -10°С. Точка «ПРЕДЕЛ»
            +15°С. Сопротивление 79-152 Па{" "}
            <span className="text-example">• Характеристика</span> Калорифер
            крайне чувствителен к температуре притока. Безопасная эксплуатация
            на 100% мощности возможна только в условиях стабильного мороза{" "}
            <span className="text-example">• Аэродинамика</span> Низкое
            сопротивление 80-150 Па делает систему очень тихой{" "}
            <span className="text-example">• Применение</span> Подходит для
            автономного отопления промерзших объектов в зимний период или
            специализированных сушильных камер
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow4000.twoThirdsPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              2. Режим частичной мощности. 45 кВт – 2 работающие секции •
              Основные параметры
            </span>{" "}
            Дельта нагрева 25…33 градуса. Зона «НОРМА» до 0°С. Точка «ПРЕДЕЛ»
            +30°С. Сопротивление 70-157 Па{" "}
            <span className="text-example">• Характеристика</span>{" "}
            Сбалансированный режим для умеренных объемов подачи{" "}
            <span className="text-example">• Эффект</span> Снятие нагрузки с
            третьего ряда ТЭНов существенно расширяет эксплуатационный диапазон.
            Точка предела отодвигается до +30°С на входе{" "}
            <span className="text-example">• Преимущество</span> Обеспечивается
            стабильный подогрев воздуха на тридцать градусов при значительно
            меньшей тепловой нагрузке на оболочку нагревателей
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow4000.oneThirdPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              3. Режим дежурного подогрева. 22.5 кВт – 1 работающая секция •
              Основные параметры
            </span>{" "}
            Дельта нагрева 12…16 градусов. Зона «НОРМА» до +10°С. Точка «ПРЕДЕЛ»
            +40°С. Сопротивление 66-161 Па{" "}
            <span className="text-example">• Характеристика</span> Режим
            максимальной эксплуатационной надежности{" "}
            <span className="text-example">• Основные параметры</span> Работа
            только первого ряда ТЭНов в условиях минимального обдува гарантирует
            безопасность оборудования до входящих температур +35°С{" "}
            <span className="text-example">• Применение</span> Оптимальный
            теплотехнический регламент для систем поддержания микроклимата,
            дежурного отопления и процессов «мягкой» сушки продукции
          </p>
        </li>
      </ol>
      <p className="text-[rgb(192,0,0)]">
        <span className="block">
          Общий вывод для 4 000 м<sup>3</sup>/ч:
        </span>
        Низкий расход воздуха превращает СФО-60 в высокоэффективный
        теплогенератор, способный выдавать горячий поток на выходе. Однако для
        сохранения многолетнего ресурса нихромовой спирали рекомендуется
        использовать полную мощность только при температурах на улице ниже -5°C,
        переходя на 2/3 или 1/3 мощности при потеплении.
      </p>
    </section>
  );
}

function Analysis5000() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <h3 className="mb-2 text-xl">
        Инженерный анализ режимов работы СФО-60 при расходе 5 000 м<sup>3</sup>
        /ч
      </h3>
      <p>
        Производительность 5 000 м<sup>3</sup>/ч является наиболее
        сбалансированным эксплуатационным режимом для модели СФО-60, при котором
        обеспечивается интенсивный теплосъем и стабильная работа нагревательных
        элементов в широком диапазоне внешних температур.
      </p>
      <ol className="space-y-4">
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow5000.fullPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              1. Режим полной мощности. 67.5 кВт – 3 работающие секции •
              Основные параметры
            </span>{" "}
            Дельта нагрева 30…41 градус. Зона «НОРМА» до +5°С. Точка «ПРЕДЕЛ»
            +35°С. Сопротивление 99-233 Па{" "}
            <span className="text-example">• Характеристика</span> Универсальный
            режим зимнего и переходного периодов. Обеспечивает качественный
            прогрев потока на 35°С{" "}
            <span className="text-example">• Применение</span> Подходит для
            систем приточной вентиляции средних промышленных зданий: при -20°С
            на входе мы получаем на выходе воздух с температурой +14°С{" "}
            <span className="text-example">• Особенность</span> Статус «НОРМА»
            сохраняется до входящей температуры +10 градусов. Это позволяет
            использовать полную мощность установки практически весь отопительный
            сезон, включая периоды затяжных оттепелей
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow5000.twoThirdsPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              2. Режим частичной мощности. 45 кВт – 2 работающие секции •
              Основные параметры
            </span>{" "}
            Дельта нагрева 19…27 градусов. Зона «НОРМА» до +15°С. Точка «ПРЕДЕЛ»
            +45°С. Сопротивление 93-238 Па{" "}
            <span className="text-example">• Преимущество</span> Позволяет
            эффективно эксплуатировать установку в межсезонье{" "}
            <span className="text-example">• Аэродинамика</span> Сопротивление
            (238 Па на холодном пуске) существенно не меняется, так как ТЭНы
            физически остаются в канале и создают те же препятствия потоку,
            независимо от того, включены они или нет{" "}
            <span className="text-example">• Результат</span> Надежное решение
            для магистральных приточных систем, обеспечивающее стабильную дельту
            при умеренном аэродинамическом сопротивлении
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow5000.oneThirdPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              3. Режим дежурного подогрева. 22.5 кВт – 1 работающая секция •
              Основные параметры
            </span>{" "}
            Дельта нагрева 9…14 градусов. Зона «НОРМА» до +25°С. Точка «ПРЕДЕЛ»
            +60°С. Сопротивление 83-244 Па{" "}
            <span className="text-example">• Рабочий диапазон</span> Снижение
            мощности до одной секции позволило сдвинуть точку «ПРЕДЕЛ» до
            шестидесяти градусов{" "}
            <span className="text-example">• Аэродинамика</span> Сопротивление
            на холодном пуске требует применения радиальных или высоконапорных
            канальных вентиляторов. В предельной точке сопротивление падает до
            83 Па вследствие разрежения прогретого воздуха{" "}
            <span className="text-example">• Преимущество</span> Сниженная
            тепловая нагрузка на поверхность оребрения в сочетании с активным
            воздушным обдувом фактически исключает риск перегрева спирали,
            существенно продлевая межремонтный интервал{" "}
            <span className="text-example">• Применение</span> Оптимален для
            систем точного поддержания микроклимата и технологических линий, где
            критически важна минимальная тепловая инерция
          </p>
        </li>
      </ol>
      <p className="text-[rgb(192,0,0)]">
        <span className="block">
          Общий вывод для 5 000 м<sup>3</sup>/ч:
        </span>{" "}
        Данный расход воздуха обеспечивает СФО-60 максимальную эксплуатационную
        гибкость. Калорифер одинаково эффективен как при работе на полную
        мощность в пиковые морозы, так и в режимах частичной нагрузки,
        обеспечивая высокую надежность и точность поддержания заданных
        температурных параметров.
      </p>
    </section>
  );
}

function Analysis5500() {
  return (
    <section className={ANALYSIS_SECTION_CLASS}>
      <h3 className="mb-2 text-xl">
        Инженерный анализ режимов работы СФО-60 при расходе 5 500 м<sup>3</sup>
        /ч
      </h3>
      <p>
        Производительность 5 500 м<sup>3</sup>/ч является максимальным
        эксплуатационным режимом для СФО-60. Данный расход воздуха является
        наиболее щадящим для ТЭНов за счет высокого коэффициента теплоотдачи.
        Основное внимание при проектировании следует уделить аэродинамике:
        высокое сопротивление холодного воздуха требует точного согласования с
        характеристиками вентилятора, однако взамен потребитель получает
        максимально надежную, с длительным сроком службы тепловую установку.
      </p>
      <ol className="space-y-4">
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow5500.fullPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              1. Режим полной мощности. 67.5 кВт – 3 работающие секции •
              Основные параметры
            </span>{" "}
            Дельта нагрева 27…38 градусов. Зона «НОРМА» до +15°С. Точка «ПРЕДЕЛ»
            +50°С. Сопротивление 109-279 Па{" "}
            <span className="text-example">• Характеристика</span>{" "}
            Высокоэффективный вентиляционный подогрев. Обеспечивает средний
            подъем температуры на тридцать три градуса{" "}
            <span className="text-example">• Особенность</span> Максимальная
            интенсивность обдува позволяет сохранять статус «НОРМА» до входящей
            температуры +15°С. Это делает режим эталонным для систем
            магистральной приточной вентиляции, работающих в автоматическом
            режиме в течение всего отопительного периода
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow5500.twoThirdsPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              2. Режим частичной мощности. 45 кВт – 2 работающие секции •
              Основные параметры
            </span>{" "}
            Дельта нагрева 18…25 градусов. Зона «НОРМА» до +25°С. Точка «ПРЕДЕЛ»
            +55°С. Сопротивление 102-285 Па{" "}
            <span className="text-example">• Характеристика</span> Работа двух
            рядов ТЭНов при данном обдуве создает стабильный тепловой фон с
            подогревом на двадцать градусов{" "}
            <span className="text-example">• Применение</span> Подходит для
            систем рециркуляции и производственных зон с избытками тепла, где
            требуется догрев притока без риска аварийного отключения при
            повышении температуры в помещении
          </p>
        </li>
        <li className="space-y-2">
          <SFOOperatingParameterTable
            data={SFOOperatingParameterTables.sfo60.airflow5500.oneThirdPower}
          />
          <p className={TEXT_UNDER_ANALYSIS_TABLE_CLASS}>
            <span className="text-example">
              3. Режим дежурного подогрева. 22.5 кВт – 1 работающая секция •
              Основные параметры
            </span>{" "}
            Дельта нагрева 9…13 градусов. Зона «НОРМА» до +30°С. Точка «ПРЕДЕЛ»
            +65°С. Сопротивление 95-291 Па{" "}
            <span className="text-example">• Характеристика</span> Прецизионный
            доводчик с минимальной тепловой инерцией{" "}
            <span className="text-example">• Аэродинамика</span> Сопротивление
            на холодном пуске определяется мощным воздушным потоком. В
            контрольной точке оно падает до 95 Па за счет значительного
            разрежения поступающего воздуха{" "}
            <span className="text-example">• Термическая неуязвимость</span>{" "}
            Точка «ПРЕДЕЛ» отодвинута до +65°С. При таком интенсивном обдуве и
            сниженной мощности калорифер практически невозможно перегреть в
            естественных атмосферных условиях. По сравнению с полномощным
            режимом запас безопасности вырос на 20 градусов{" "}
            <span className="text-example">• Применение</span> Оптимален для
            систем точного поддержания микроклимата и технологических линий, где
            необходимо компенсировать незначительные колебания температуры при
            больших объемах прокачки воздуха
          </p>
        </li>
      </ol>
      <p className="text-[rgb(192,0,0)]">
        <span className="block">
          Общий вывод для 5 500 м<sup>3</sup>/ч:
        </span>
        Линейная зависимость параметров нагрева от потребляемой мощности
        позволяет эффективно интегрировать СФО-60 в системы автоматического
        регулирования. Высокий коэффициент обдува при этом расходе обеспечивает
        сохранение физического ресурса нихромовых спиралей за счет удержания
        температуры оболочек ТЭНов в пределах допустимых значений во всем
        диапазоне температур отопительного сезона.
      </p>
    </section>
  );
}
