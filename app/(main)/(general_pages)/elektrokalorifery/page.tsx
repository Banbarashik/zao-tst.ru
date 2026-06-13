import sfoWiringTablesData from "@/data/sfoWiringTables.json";

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import type { SfoWiringSchema } from "@/types/sfoWiringSchema";

import Spoiler from "@/components/ui/spoiler";
import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
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

        <div>
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

      <PowerTable />
      {/* СХЕМЫ-ТАБЛИЦЫ */}
      <ol className="space-y-12">
        <li className="space-y-4">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-20/9 w-full">
              <Image
                src="/img/kalorifer_sfo-16.png"
                alt="Подключение фазных термостойких проводов в коробе СФО-16"
                title="Схема подключения фазных блоков электрокалорифера СФО-16"
                fill
              />
            </div>
            <div className="relative aspect-20/9 w-full">
              <Image
                src="/img/kalorifer_sfo-16_electro.png"
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
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-2/1 w-full">
              <Image
                src="/img/kalorifer_sfo-25.png"
                alt="Подключение фазных термостойких проводов в коробе СФО-25"
                title="Схема подключения фазных блоков электрокалорифера СФО-25"
                fill
              />
            </div>
            <div className="relative aspect-2/1 w-full">
              <Image
                src="/img/kalorifer_sfo-25_electro.png"
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
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-5/3 w-full">
              <Image
                src="/img/kalorifer_sfo-40.png"
                alt="Подключение фазных термостойких проводов в коробе СФО-40"
                title="Схема подключения фазных блоков электрокалорифера СФО-40"
                fill
              />
            </div>
            <div className="relative aspect-5/3 w-full">
              <Image
                src="/img/kalorifer_sfo-40_electro.png"
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
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-20/13 w-full">
              <Image
                src="/img/kalorifer_sfo-60.png"
                alt="Подключение фазных термостойких проводов в коробе СФО-60"
                title="Схема подключения фазных блоков электрокалорифера СФО-60"
                fill
              />
            </div>
            <div className="relative aspect-20/13 w-full">
              <Image
                src="/img/kalorifer_sfo-60_electro.png"
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
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-10/7 w-full">
              <Image
                src="/img/kalorifer_sfo-100.png"
                alt="Подключение фазных термостойких проводов в коробе СФО-100"
                title="Схема подключения фазных блоков электрокалорифера СФО-100"
                fill
              />
            </div>
            <div className="relative aspect-10/7 w-full">
              <Image
                src="/img/kalorifer_sfo-100_electro.png"
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
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/img/kalorifer_sfo-160.png"
                alt="Подключение фазных термостойких проводов в коробе СФО-160"
                title="Схема подключения фазных блоков электрокалорифера СФО-160"
                fill
              />
            </div>
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/img/kalorifer_sfo-160_electro.png"
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
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-10/9 w-full">
              <Image
                src="/img/kalorifer_sfo-250.png"
                alt="Подключение фазных термостойких проводов в коробе СФО-250"
                title="Схема подключения фазных блоков электрокалорифера СФО-250"
                fill
              />
            </div>
            <div className="relative aspect-10/9 w-full">
              <Image
                src="/img/kalorifer_sfo-250_electro.png"
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
