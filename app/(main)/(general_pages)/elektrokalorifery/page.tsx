import sfoWiringTablesData from "@/data/sfoWiringTables.json";

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import type { SfoWiringSchema } from "@/types/sfoWiringSchema";

import { Anchor } from "@/components/utils/anchor";
import Spoiler from "@/components/ui/spoiler";
import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import { SfoWiringTable } from "@/components/general_pages/SfoWiringTable";

export const metadata: Metadata = {
  title: "Схемы подключения электрокалориферов СФО-16...СФО-250",
  description:
    "Подбор кабелей и проводов для электрокалориферов СФО. Формулы расчета токов, таблицы минимальных сечений по ПУЭ и трехфазные схемы подключения установок СФО",
  keywords:
    "подключение электрического калорифера,схема подключения электрокалорифера сфо,расчет токовой нагрузки электрокалорифера,формула токовой нагрузки 380 В,подбор сечения кабеля электрокалорифера по пуэ,подбор кабеля по мощности электрокалорифера,таблица подбора кабеля электрического калорифера,подбор кабеля для калорифера сфо 250,схема подключения калорифера сфо 100,схема шкафа автоматики калорифера сфо 160",
};

export default function ElektrokaloriferyPage() {
  return (
    <>
      <Heading
        lvl={1}
        text="Расчет и подбор сечения кабеля для электрокалориферов СФО"
      />

      {/* Подключение электрокалориферов СФО */}
      <section className="space-y-4">
        <Heading lvl={2} text="Подключение электрокалориферов СФО" />
        <ProductParagraph>
          Надежность и многолетняя эксплуатация промышленных электрокалориферов
          серии СФО напрямую зависят от корректного подбора силовой
          кабельно-проводниковой продукции. Электрическая тепловая нагрузка
          ТЭНов относится к категории длительных высокотоковых режимов, что
          накладывает жесткие требования на термическую стойкость токоведущих
          жил и коммутационных узлов.
        </ProductParagraph>

        <div className="space-y-2 rounded-lg border-l-4 border-[#574184] pl-4">
          <ProductParagraph>
            Настоящее руководство содержит комплексную техническую базу для
            подключения электрокалориферов СФО мощностью от 15 до 247.5 кВт:
          </ProductParagraph>
          <ul>
            <li>
              ⚙️ Теоретический раздел: базовые формулы определения токовой
              нагрузки в трехфазных сетях 380 В при равномерном распределении
              мощности по фазам.
            </li>
            <li>
              ⚙️ Практический раздел: готовые расчеты минимально допустимых
              сечений проводников, выбора марок кабелей и номиналов защитных
              автоматов по требованиям ПУЭ.
            </li>
            <li>
              ⚙️ Графический раздел: принципиально-монтажные схемы подключения
              нагревателей с учетом посекционного регулирования мощности и
              конструктивной специфики каждой модели.
            </li>
          </ul>
        </div>
      </section>

      {/* Электротехнический расчет токовых нагрузок */}
      <section className="space-y-4">
        <Anchor num={1} />
        <Heading lvl={2} text="Электротехнический расчет токовых нагрузок" />

        <div className="mb-0">
          <ProductParagraph>
            Формула для определения токовой нагрузки в трехфазных сетях
            переменного тока при равномерном распределении мощности по фазам:
            <span className="block text-2xl font-bold">
              I = P / (
              <math>
                <msqrt>
                  <mn>3</mn>
                </msqrt>
              </math>{" "}
              • U • cos φ)
            </span>
          </ProductParagraph>
          <ol>
            <li>I – расчетный ток (токовая нагрузка), Ампер (А);</li>
            <li>P – активная (установленная) мощность, Ватт (Вт);</li>
            <li>
              <math>
                <msqrt>
                  <mn>3</mn>
                </msqrt>
              </math>{" "}
              – математический коэффициент трехфазной системы;
            </li>
            <li>U – линейное напряжение сети, Вольт, (В);</li>
            <li>cos φ - коэффициент мощности.</li>
          </ol>
        </div>

        <ProductParagraph className="text-secondary-text">
          В виду того, что нагрузка ТЭНов является чисто активной (омической),
          коэффициент мощности равен единице. Поскольку внутренняя схема
          соединений нагревателей — «звезда», каждый отдельный ТЭН работает на
          фазном напряжении 220 В, а вся нагревательная секция подключается к
          трехфазной сети линейного напряжения 380 В.
        </ProductParagraph>

        <ProductParagraph className="m-0">
          Для полноценного проектирования системы автоматики и кабельных трасс
          расчет токовых нагрузок разделяется на три уровня:
        </ProductParagraph>
        <ol>
          <li>
            <ProductParagraph>
              1. Расчетный ток линии электрокалорифера (общий ток), А:{" "}
              <span className="text-2xl font-bold">
                I = P <sub className="font-normal">общ</sub> / (
                <math>
                  <msqrt>
                    <mn>3</mn>
                  </msqrt>
                </math>{" "}
                • U • <span className="font-normal">cos</span> φ)
              </span>
            </ProductParagraph>
            <ProductParagraph>
              Общий ток, потребляемый всей установкой на полной паспортной
              мощности. Определяет параметры центрального вводного защитного
              автомата в ЩУ и сечение магистрального питающего кабеля от ГРЩ при
              одновременном включении всех нагревательных секций.
            </ProductParagraph>
          </li>
          <li>
            <ProductParagraph>
              2. Расчетный ток одной секции, А:{" "}
              <span className="text-2xl font-bold">
                I = P <sub className="font-normal">сек</sub> / (
                <math>
                  <msqrt>
                    <mn>3</mn>
                  </msqrt>
                </math>{" "}
                • U • <span className="font-normal">cos</span> φ)
              </span>
            </ProductParagraph>
            <ProductParagraph>
              Сила тока, потребляемая одной независимой ступенью мощности
              калорифера (каждая секция конструктивно собрана в обособленную
              «звезду»). Этот параметр определяет номинал индивидуального
              контактора (пускателя) в шкафу автоматики и сечение внешних
              кабелей распределительных секций до калорифера.
            </ProductParagraph>
          </li>
          <li>
            <ProductParagraph>
              3. Расчетный ток блока секции, А:{" "}
              <span className="text-2xl font-bold">
                I = P <sub className="font-normal">блок</sub> / (
                <math>
                  <msqrt>
                    <mn>3</mn>
                  </msqrt>
                </math>{" "}
                • U • <span className="font-normal">cos</span> φ)
              </span>
            </ProductParagraph>
            <ProductParagraph>
              Ток, протекающий по отдельному фазному проводнику к одному
              конкретному нагревательному блоку внутри клеммного короба.
              Определяет локальную токовую нагрузку на внутренние гибкие
              термостойкие провода при работе соответствующей ступени мощности.
            </ProductParagraph>
          </li>
        </ol>

        <div className="text-example">
          <ProductParagraph>
            Пример расчета токовых нагрузок для электрокалорифера СФО-250 (247.5
            кВт)
          </ProductParagraph>
          <ol>
            <li>
              <ProductParagraph>
                1. Расчетный ток магистральной линии СФО-250, А:{" "}
                <span className="text-xl font-bold">
                  I = 247500 / (1.732 • 380 • 1) = 376.1 А
                </span>
              </ProductParagraph>
              <ul>
                <li>376 – расчетный ток линии, А;</li>
                <li>247500 – установленная мощность СФО-250, Вт;</li>
                <li>1.732 – математический коэффициент;</li>
                <li>380 – линейное напряжение сети, В;</li>
                <li>1 - коэффициент мощности.</li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                2. Расчетный ток одной секции СФО-250, А:{" "}
                <span className="text-xl font-bold">
                  I = 82500 / (1.732 • 380 • 1) = 125.4 А
                </span>
              </ProductParagraph>
              <ul>
                <li>125 – расчетный ток секции, А;</li>
                <li>82500 – мощность секции, Вт;</li>
                <li>1.732 – математический коэффициент;</li>
                <li>380 – линейное напряжение сети, В;</li>
                <li>1 - коэффициент мощности.</li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                3. Расчетный ток блока секции СФО-250, А:{" "}
                <span className="text-xl font-bold">
                  I = 27500 / (1.732 • 380 • 1) = 41.8 А
                </span>
              </ProductParagraph>
              <ul>
                <li>42 – расчетный ток блока, А;</li>
                <li>27500 – мощность блока, Вт;</li>
                <li>1.732 – математический коэффициент;</li>
                <li>380 – линейное напряжение сети, В;</li>
                <li>1 - коэффициент мощности.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* Выбор сечения кабеля при проектировании и монтаже */}
      <section className="mb-4 space-y-4">
        <Heading
          lvl={2}
          text="Выбор сечения кабеля при проектировании и монтаже"
        />

        <ProductParagraph className="mb-0">
          Инженерный подбор кабельно-проводниковой продукции для мощных
          электрокалориферных установок не может ограничиваться исключительно
          базовой электрической мощностью оборудования. Номинальные токовые
          нагрузки, указанные в технических паспортах, являются лишь стартовой
          точкой расчета, которая в реальных условиях эксплуатации
          корректируется под воздействием целого комплекса внешних факторов:
        </ProductParagraph>
        <ol>
          <li>
            <span className="text-[rgb(192,0,0)]">
              1. Среда и способ прокладки.
            </span>{" "}
            Теплоотдача кабеля, проложенного открыто на воздухе, в замкнутом
            кабельном канале, в стальной трубе или непосредственно в грунте
            (земляной траншее), существенно различается. Земля обеспечивает
            базовый отвод тепла, что позволяет снизить сечение, в то время как
            скрытая прокладка в трубах или закрытых каналах ухудшает охлаждение
            и требует увеличения площади сечения токоведущей жилы для исключения
            оплавления изоляции.
          </li>
          <li>
            <span className="text-[rgb(192,0,0)]">
              2. Групповая прокладка (коэффициент совместности).
            </span>{" "}
            При укладке нескольких силовых линий в один общий пучок, закрытый
            короб или на один вентилируемый лоток возникает эффект взаимного
            теплового влияния. Кабели начинают нагревать друг друга, что снижает
            их общую нагрузку на 15–30% и обязывает проектировщика увеличивать
            сечение проводников.
          </li>
          <li>
            <span className="text-[rgb(192,0,0)]">
              3. Температурный режим эксплуатации.
            </span>{" "}
            Все стандартные таблицы электротехнических справочников рассчитаны
            на базовую температуру среды +25 °C. Эксплуатация оборудования в
            регионах с жарким климатом, прокладка трассы в горячих цехах или
            внутри коммутационных коробов калорифера ухудшает условия охлаждения
            металла, требуя введения понижающих коэффициентов.
          </li>
          <li>
            <span className="text-[rgb(192,0,0)]">
              4. Протяженность трассы (потери напряжения).
            </span>{" "}
            При длине кабельной линии более 25–30 метров ключевым критерием
            выбора становится, не нагрев жилы, а падение напряжения на ее конце.
            Недостаточное сечение на длинной дистанции приведет к просадке
            вольтажа, из-за чего ТЭНы калорифера потеряют свою паспортную
            тепловую мощность.
          </li>
          <li>
            <span className="text-[rgb(192,0,0)]">
              5. Механическая прочность и тепловые смещения.
            </span>{" "}
            Силовые контакты нагревателей постоянно испытывают циклические
            температурные расширения и вибрации от работающего приточного
            вентилятора. Внутренний монтаж блоков в пределах корпуса СФО требует
            применения гибких термостойких проводов, способных демпфировать
            механические нагрузки и защитить выводы ТЭНов от динамического и
            теплового излома.
          </li>
        </ol>

        <PowerTable />
      </section>

      {/* Принципиально-монтажные схемы подключения по моделям */}
      <section className="space-y-10">
        <Heading
          lvl={2}
          text="Принципиально-монтажные схемы подключения по моделям"
        />

        <ProductParagraph>
          В данном разделе представлены подробные схемы электрических соединений
          для каждого калорифера линейки СФО. Чертежи наглядно отображают
          раскладку фазных проводников и рабочих нулей как со стороны шкафа
          автоматики, так и внутри коммутационных коробов самого корпуса
          установки.
        </ProductParagraph>

        {/* СХЕМЫ-ТАБЛИЦЫ */}
        <ol className="space-y-12">
          <li className="space-y-4">
            <Anchor num={2} />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative aspect-20/9 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-16.png"
                  alt="Подключение фазных термостойких проводов в коробе СФО-16"
                  title="Схема подключения фазных блоков электрокалорифера СФО-16"
                  fill
                />
              </div>
              <div className="relative aspect-20/9 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-16_electro.png"
                  alt="Подключение нулевого провода к шине ТЭНов СФО-16"
                  title="Схема подключения нейтральной стороны калорифера СФО-16"
                  fill
                />
              </div>
            </div>
            <Spoiler title="Принципиально-монтажная схема СФО-16">
              <SfoWiringTable
                schema={sfoWiringTablesData["СФО-16"] as SfoWiringSchema}
              />
            </Spoiler>
          </li>

          <li className="space-y-4">
            <Anchor num={3} />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative aspect-2/1 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-25.png"
                  alt="Подключение фазных термостойких проводов в коробе СФО-25"
                  title="Схема подключения фазных блоков электрокалорифера СФО-25"
                  fill
                />
              </div>
              <div className="relative aspect-2/1 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-25_electro.png"
                  alt="Подключение нулевого провода к шине ТЭНов СФО-25"
                  title="Схема подключения нейтральной стороны калорифера СФО-25"
                  fill
                />
              </div>
            </div>
            <Spoiler title="Принципиально-монтажная схема СФО-25">
              <SfoWiringTable
                schema={sfoWiringTablesData["СФО-25"] as SfoWiringSchema}
              />
            </Spoiler>
          </li>

          <li className="space-y-4">
            <Anchor num={4} />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative aspect-5/3 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-40.png"
                  alt="Подключение фазных термостойких проводов в коробе СФО-40"
                  title="Схема подключения фазных блоков электрокалорифера СФО-40"
                  fill
                />
              </div>
              <div className="relative aspect-5/3 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-40_electro.png"
                  alt="Подключение нулевого провода к шине ТЭНов СФО-40"
                  title="Схема подключения нейтральной стороны калорифера СФО-40"
                  fill
                />
              </div>
            </div>
            <Spoiler title="Принципиально-монтажная схема СФО-40">
              <SfoWiringTable
                schema={sfoWiringTablesData["СФО-40"] as SfoWiringSchema}
              />
            </Spoiler>
          </li>

          <li className="space-y-4">
            <Anchor num={5} />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative aspect-20/13 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-60.png"
                  alt="Подключение фазных термостойких проводов в коробе СФО-60"
                  title="Схема подключения фазных блоков электрокалорифера СФО-60"
                  fill
                />
              </div>
              <div className="relative aspect-20/13 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-60_electro.png"
                  alt="Подключение нулевого провода к шине ТЭНов СФО-60"
                  title="Схема подключения нейтральной стороны калорифера СФО-60"
                  fill
                />
              </div>
            </div>
            <Spoiler title="Принципиально-монтажная схема СФО-60">
              <SfoWiringTable
                schema={sfoWiringTablesData["СФО-60"] as SfoWiringSchema}
              />
            </Spoiler>
          </li>

          <li className="space-y-4">
            <Anchor num={6} />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative aspect-10/7 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-100.png"
                  alt="Подключение фазных термостойких проводов в коробе СФО-100"
                  title="Схема подключения фазных блоков электрокалорифера СФО-100"
                  fill
                />
              </div>
              <div className="relative aspect-10/7 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-100_electro.png"
                  alt="Подключение нулевого провода к шине ТЭНов СФО-100"
                  title="Схема подключения нейтральной стороны калорифера СФО-100"
                  fill
                />
              </div>
            </div>
            <Spoiler title="Принципиально-монтажная схема СФО-100">
              <SfoWiringTable
                schema={sfoWiringTablesData["СФО-100"] as SfoWiringSchema}
              />
            </Spoiler>
          </li>

          <li className="space-y-4">
            <Anchor num={7} />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-160.png"
                  alt="Подключение фазных термостойких проводов в коробе СФО-160"
                  title="Схема подключения фазных блоков электрокалорифера СФО-160"
                  fill
                />
              </div>
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-160_electro.png"
                  alt="Подключение нулевого провода к шине ТЭНов СФО-160"
                  title="Схема подключения нейтральной стороны калорифера СФО-160"
                  fill
                />
              </div>
            </div>
            <Spoiler title="Принципиально-монтажная схема СФО-160">
              <SfoWiringTable
                schema={sfoWiringTablesData["СФО-160"] as SfoWiringSchema}
              />
            </Spoiler>
          </li>

          <li className="space-y-4">
            <Anchor num={8} />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
              <div className="relative aspect-10/9 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-250.png"
                  alt="Подключение фазных термостойких проводов в коробе СФО-250"
                  title="Схема подключения фазных блоков электрокалорифера СФО-250"
                  fill
                />
              </div>
              <div className="relative aspect-10/9 w-full">
                <Image
                  src="/img/general_pages/kalorifer_sfo-250_electro.png"
                  alt="Подключение нулевого провода к шине ТЭНов СФО-250"
                  title="Схема подключения нейтральной стороны калорифера СФО-250"
                  fill
                />
              </div>
            </div>
            <Spoiler title="Принципиально-монтажная схема СФО-250">
              <SfoWiringTable
                schema={sfoWiringTablesData["СФО-250"] as SfoWiringSchema}
              />
            </Spoiler>
          </li>
        </ol>
      </section>

      {/* Примечание к монтажным схемам СФО */}
      <section className="space-y-4 rounded-lg border-l-4 border-[#574184] pl-4">
        <Heading lvl={2} text="Примечание к монтажным схемам СФО" />
        <ProductParagraph>
          Представленная в настоящем руководстве трехзвенная монтажная схема
          «Главный распределительный щит (ГРЩ) - Щит автоматики и управления
          калорифером (ЩАУК) - Калорифер СФО» с использованием трех различных
          типов кабельно-проводниковой продукции (магистральная линия, кабели
          независимых секций и внутренние термостойкие провода блоков) является
          лишь одним из возможных вариантов реализации. В зависимости от
          проектных задач, удаленности оборудования и требований к
          автоматизации, архитектура распределения питания может быть изменена.
          Выбор конкретного технического решения всегда остается за проектной
          организацией и должен учитывать баланс между экономической
          целесообразностью, удобством обслуживания и требованиями безопасности
          ПУЭ.
        </ProductParagraph>
      </section>

      <LinkButtonsBlock
        buttons={[
          { name: "Электрокалориферы СФО 16…250", url: "/elektronagrevateli" },
          {
            name: "Каталог электрокалориферов СФО",
            url: "/documents/Electrokalorifer_SFO_katalog_2025.pdf",
            openNewTab: true,
            goal: "open_pdf",
          },
        ]}
      />
    </>
  );
}

const models = [
  {
    model: "СФО-16",
    url: "/elektrokalorifer-sfo-16",
    power: { total: 15, section: 7.5, block: 2.5 },
    current: { line: 23, section: 11, block: 4 },
    cable: { main: "4", section: 2.5, block: 2.5 },
  },
  {
    model: "СФО-25",
    url: "/elektrokalorifer-sfo-25",
    power: { total: 22.5, section: 7.5, block: 2.5 },
    current: { line: 34, section: 11, block: 4 },
    cable: { main: "6", section: 2.5, block: 2.5 },
  },
  {
    model: "СФО-40",
    url: "/elektrokalorifer-sfo-40",
    power: { total: 45, section: 15, block: 5 },
    current: { line: 68, section: 23, block: 8 },
    cable: { main: "16", section: 4, block: 2.5 },
  },
  {
    model: "СФО-60",
    url: "/elektrokalorifer-sfo-60",
    power: { total: 67.5, section: 22.5, block: 7.5 },
    current: { line: 103, section: 34, block: 11 },
    cable: { main: "35", section: 6, block: 2.5 },
  },
  {
    model: "СФО-100",
    url: "/elektrokalorifer-sfo-100",
    power: { total: 90, section: 30, block: 10 },
    current: { line: 137, section: 46, block: 15 },
    cable: { main: "50", section: 10, block: 4 },
  },
  {
    model: "СФО-160",
    url: "/elektrokalorifer-sfo-160",
    power: { total: 157.5, section: 52.5, block: 17.5 },
    current: { line: 240, section: 80, block: 27 },
    cable: { main: "95 2×50", section: 25, block: 10 },
  },
  {
    model: "СФО-250",
    url: "/elektrokalorifer-sfo-250",
    power: { total: 247.5, section: 82.5, block: 27.5 },
    current: { line: 376, section: 125, block: 42 },
    cable: { main: "185 2×95", section: 50, block: 16 },
  },
];

const headerGroups = [
  { label: "Мощность, кВт", cols: ["общая", "секция", "блок"] },
  { label: "Расчетный ток, А", cols: ["линия", "секция", "блок"] },
  {
    label: (
      <>
        Мин. сечение кабеля, мм<sup>2</sup>
      </>
    ),
    cols: ["магистраль", "секция", "блок"],
  },
];

function PowerTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 table-fixed xl:min-w-auto">
        <caption className="border border-b-0 border-[#723910] py-1 uppercase">
          Параметры силовых линий, мощность и сечения проводников
          электрокалориферов СФО
        </caption>
        {
          <colgroup>
            <col className="w-28" />
            {Array.from({ length: 9 }).map((_, i) => (
              <col key={i} />
            ))}
          </colgroup>
        }

        <thead>
          <tr className="uppercase">
            <th rowSpan={2}>Модель</th>
            {headerGroups.map((g) => (
              <th key={g.label} colSpan={3} className="py-1">
                {g.label}
              </th>
            ))}
          </tr>
          <tr>
            {headerGroups.flatMap((g) =>
              g.cols.map((col) => (
                <th key={`${g.label}-${col}`} className="py-1.5">
                  {col}
                </th>
              )),
            )}
          </tr>
        </thead>
        <tbody>
          {models.map((row) => (
            <tr key={row.model}>
              <td className="px-1.5 py-1 text-left">
                <Link
                  href={row.url}
                  className="text-primary-darker hover:text-primary-dark"
                >
                  {row.model}
                </Link>
              </td>
              {/* Power */}
              <td>{row.power.total}</td>
              <td>{row.power.section}</td>
              <td>{row.power.block}</td>
              {/* Current */}
              <td>{row.current.line}</td>
              <td>{row.current.section}</td>
              <td>{row.current.block}</td>
              {/* Cable */}
              <td>{row.cable.main}</td>
              <td>{row.cable.section}</td>
              <td>{row.cable.block}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
