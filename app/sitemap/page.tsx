import productData from "@/data/products.json";

import { sortProducts } from "@/lib/utils";

import { SITE_URL } from "@/constants";
import { generatedRegions } from "@/data/regions/regions.generated";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const vodianyPritochnyKalorifery = productData
  .filter((p) => p.categories.includes("pritochny-vodiany-kalorifery"))
  .sort((a, b) => sortProducts(a.name, b.name));
const parovyPritochnyKalorifery = productData
  .filter((p) => p.categories.includes("pritochny-parovy-kalorifery"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyKsk = productData
  .filter((p) => p.categories.includes("ksk"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyTvv = productData
  .filter((p) => p.categories.includes("tvv"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyKfbAM = productData
  .filter((p) => p.categories.includes("kfb-a-m"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyAo2M = productData
  .filter((p) => p.categories.includes("ao2-v"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyAvoTvv = productData
  .filter((p) => p.categories.includes("avo-tvv"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyStd300V = productData
  .filter((p) => p.categories.includes("std300-v"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyKpsk = productData
  .filter((p) => p.categories.includes("kpsk"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyKp = productData
  .filter((p) => p.categories.includes("kp"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyKfbAP = productData
  .filter((p) => p.categories.includes("kfb-a-p"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyAo2P = productData
  .filter((p) => p.categories.includes("ao2-p"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyAvoKp = productData
  .filter((p) => p.categories.includes("avo-kp"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferyStd300P = productData
  .filter((p) => p.categories.includes("std300-p"))
  .sort((a, b) => sortProducts(a.name, b.name));
const kaloriferySfo = productData
  .filter((p) => p.categories.includes("sfo"))
  .sort((a, b) => sortProducts(a.name, b.name));
const ustanovkiSfotc = productData
  .filter((p) => p.categories.includes("sfotc"))
  .sort((a, b) => sortProducts(a.name, b.name));
const shkafyShuk = productData
  .filter((p) => p.categories.includes("shuk"))
  .sort((a, b) => sortProducts(a.name, b.name));

type Product = (typeof productData)[number];

const productSections: {
  value: string;
  title: string;
  products: Product[];
}[] = [
  {
    value: "pritochnye-vodyanye-kalorifery",
    title: "Приточные водяные калориферы КПВС, КПВУ",
    products: vodianyPritochnyKalorifery,
  },
  {
    value: "pritochnye-parovye-kalorifery",
    title: "Приточные паровые калориферы КППС, КППУ",
    products: parovyPritochnyKalorifery,
  },
  { value: "ksk", title: "Водяные калориферы КСк", products: kaloriferyKsk },
  { value: "tvv", title: "Водяные калориферы ТВВ", products: kaloriferyTvv },
  {
    value: "kfb-a-m",
    title: "Водяные калориферы КФБ-А М",
    products: kaloriferyKfbAM,
  },
  {
    value: "ao2-v",
    title: "Водяные отопительные агрегаты АО 2 В",
    products: kaloriferyAo2M,
  },
  {
    value: "avo-tvv",
    title: "Водяные отопительные агрегаты АВО ХЛ",
    products: kaloriferyAvoTvv,
  },
  {
    value: "std300-v",
    title: "Водяные отопительные агрегаты СТД-300",
    products: kaloriferyStd300V,
  },
  { value: "kpsk", title: "Паровые калориферы КПСк", products: kaloriferyKpsk },
  { value: "kp", title: "Паровые калориферы КП", products: kaloriferyKp },
  {
    value: "kfb-a-p",
    title: "Паровые калориферы КФБ-А П",
    products: kaloriferyKfbAP,
  },
  {
    value: "ao2-p",
    title: "Паровые отопительные агрегаты АО 2 П",
    products: kaloriferyAo2P,
  },
  {
    value: "avo-kp",
    title: "Паровые отопительные агрегаты АВО ХЛ",
    products: kaloriferyAvoKp,
  },
  {
    value: "std300-p",
    title: "Паровые отопительные агрегаты СТД-300",
    products: kaloriferyStd300P,
  },
  { value: "sfo", title: "Электрокалориферы СФО", products: kaloriferySfo },
  {
    value: "sfotc",
    title: "Электрокалориферные установки СФОЦ",
    products: ustanovkiSfotc,
  },
  {
    value: "shuk",
    title: "Шкафы управления калорифером ШУК",
    products: shkafyShuk,
  },
  {
    value: "teny",
    title: "Оребренные тэны ТЭНор",
    products: [],
  },
];

const productGroups = [
  {
    title: "Калориферы водяные и паровые",
    items: [
      productSections[0],
      productSections[1],
      productSections[2],
      productSections[3],
      productSections[4],
      productSections[8],
      productSections[9],
      productSections[10],
    ],
  },
  {
    title: "Агрегаты воздушно-отопительные",
    items: [
      productSections[5],
      productSections[11],
      productSections[6],
      productSections[12],
      productSections[7],
      productSections[13],
    ],
  },
  {
    title: "Установки электрические нагревательные",
    items: [
      productSections[14],
      productSections[15],
      productSections[16],
      productSections[17],
    ],
  },
];

const companyLinks = [
  ["Главная. Завод ООО «Т.С.Т.»", "/"],
  ["Карточка предприятия", "/"],
  ["Оплата и доставка", "/"],
  ["Сертификаты соответствия", "/"],
  ["Контакты", "/"],
  ["Политика обработки персональных данных", "/personal-data"],
  ["Каталог оборудования", "/"],
  ["Прайс-лист", "/"],
] as const;

const companyGroups = [companyLinks.slice(0, 6), companyLinks.slice(6)];

const engineeringGroups = [
  {
    type: "links",
    items: [
      ["Подбор воздушно-отопительного оборудования", "/"],
      ["Критерии расчета и подбора калориферов", "/"],
      ["Водяные калориферы для сушильных камер", "/"],
    ] as const,
  },
  {
    type: "links",
    items: [
      ["Калькулятор водяных калориферов", "/"],
      ["Калькулятор паровых калориферов", "/"],
      ["Калькулятор электрокалориферов", "/"],
    ] as const,
  },
  {
    type: "link",
    name: "Водяные калориферы для сушильных камер",
    href: "/",
  },
  {
    type: "links",
    items: [
      ["Паровые калориферы", "/"],
      ["Теплоноситель водяной пар", "/"],
      ["Паровые калориферы для сушильных камер", "/"],
      ["Технологический нагрев воздуха паром", "/"],
      ["Расчет и подбор диаметра паропровода", "/"],
    ] as const,
  },
  {
    type: "accordion",
    label: "Расчет и подбор паровых калориферов",
    items: [
      ["Расчет тепловой мощности", "/"],
      ["Расчет площади фронтального сечения", "/"],
      ["Расчет массовой скорости воздуха", "/"],
      ["Расчет расхода пара", "/"],
      ["Расчет коэффициента теплопередачи", "/"],
      ["Расчет среднего температурного напора", "/"],
      ["Расчет аэродинамического сопротивления", "/"],
    ] as const,
  },
  {
    type: "link",
    name: "Схемы подключения электрокалориферов",
    href: "/",
  },
  {
    type: "accordion",
    label: "Расчет и подбор электрокалориферов",
    items: [
      ["Электрокалорифер 15 кВт, 2000 м3/час", "/"],
      ["Электрокалорифер 22.5 кВт, 2500 м3/час", "/"],
      ["Электрокалорифер 45 кВт, 4000 м3/час", "/"],
      ["Электрокалорифер 67.5 кВт, 5000 м3/час", "/"],
      ["Электрокалорифер 90 кВт, 7000 м3/час", "/"],
      ["Электрокалорифер 157.5 кВт, 12000 м3/час", "/"],
      ["Электрокалорифер 247.5 кВт, 18000 м3/час", "/"],
    ] as const,
  },
  {
    type: "accordion",
    label: "Подбор электрокалориферных установок",
    items: [
      ["Установка 15 кВт, 2000 м3/час", "/"],
      ["Установка 22.5 кВт, 2500 м3/час", "/"],
      ["Установка 45 кВт, 4000 м3/час", "/"],
      ["Установка 67.5 кВт, 5000 м3/час", "/"],
      ["Установка 90 кВт, 7000 м3/час", "/"],
      ["Установка 157.5 кВт, 12000 м3/час", "/"],
      ["Установка 247.5 кВт, 18000 м3/час", "/"],
    ] as const,
  },
] as const;

const regionLinks = Object.values(generatedRegions).sort((a, b) =>
  a.subject.name.localeCompare(b.subject.name, "ru"),
);

function formatProductLinkLabel(product: Product) {
  const displayName = Array.isArray(product.variants)
    ? product.shortName
    : product.name;
  const airPower =
    typeof product.airPower === "number" ? `${product.airPower} м3/час` : null;

  const variantHeatPowers = Array.isArray(product.variants)
    ? product.variants
        .map((variant) => variant.heatPower)
        .filter((value): value is number => typeof value === "number")
    : [];

  const directHeatPower =
    typeof product.heatPower === "number" ? `${product.heatPower} кВт` : null;
  const variantHeatPowerText =
    variantHeatPowers.length > 0 ? `${variantHeatPowers.join(", ")} кВт` : null;

  const heatPowerText = directHeatPower ?? variantHeatPowerText;

  if (variantHeatPowerText && airPower) {
    return `${displayName} |${variantHeatPowerText}; ${airPower}|`;
  }

  if (airPower && heatPowerText) {
    return `${displayName} |${heatPowerText}; ${airPower}|`;
  }

  if (airPower) {
    return `${displayName} |${airPower}|`;
  }

  if (heatPowerText) {
    return `${displayName} |${heatPowerText}|`;
  }

  return displayName;
}

function ProductAccordion({
  title,
  value,
  products,
}: {
  title: string;
  value: string;
  products: Product[];
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value} className="border-b border-blue-400">
        <AccordionTrigger className="rounded-none border-b border-blue-400 px-4 py-3 text-left text-base text-[#185abc] hover:no-underline [&>svg]:text-black">
          {title}
        </AccordionTrigger>
        <AccordionContent className="ml-6 border-b border-l border-blue-400 pb-0">
          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                className="border-b border-blue-400 last:border-b-0"
              >
                <Link
                  className="block px-2 py-2 text-[#185abc] hover:underline"
                  href={`${SITE_URL}/${product.id}`}
                >
                  {formatProductLinkLabel(product)}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function SitemapPage() {
  return (
    <section className="max-w-8xl mx-auto grid grid-cols-1 gap-9 px-4 py-14 md:grid-cols-2 2xl:grid-cols-3">
      {/* Информационно-производственный раздел */}
      <div>
        <div>
          <h2 className="border-l border-blue-400 px-4 pb-4 text-2xl">
            Информационно-производственный раздел
          </h2>
          {companyGroups.map((group, groupIndex) => (
            <ul
              key={`company-group-${groupIndex}`}
              className={
                groupIndex === 0
                  ? "border-l border-blue-400"
                  : "mt-8 border-l border-blue-400"
              }
            >
              {group.map(([name, href]) => (
                <li
                  key={href}
                  className="border-b border-blue-400 px-4 py-2 text-[#185abc] first:border-t"
                >
                  <Link className="hover:underline" href={href}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {/* Продукция */}
        <div className="mt-9 space-y-8">
          {productGroups.map((group) => (
            <div key={group.title} className="border-l border-blue-400">
              <h3 className="px-4 pb-3 text-lg font-medium text-black">
                {group.title}
              </h3>
              <div>
                {group.items.map((section) => (
                  <ProductAccordion key={section.value} {...section} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Инженерно-расчетный блок */}
      <div>
        <h2 className="border-l border-blue-400 px-4 pb-4 text-2xl">
          Инженерно-расчетный блок
        </h2>
        <div className="space-y-8">
          {engineeringGroups.map((group, groupIndex) => {
            if (group.type === "links") {
              return (
                <ul
                  key={`engineering-links-${groupIndex}`}
                  className="border-l border-blue-400"
                >
                  {group.items.map(([name, href]) => (
                    <li
                      key={name}
                      className="border-b border-blue-400 px-4 py-2 text-[#185abc] first:border-t"
                    >
                      <Link className="hover:underline" href={href}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              );
            }

            if (group.type === "link") {
              return (
                <ul
                  key={`engineering-single-link-${groupIndex}`}
                  className="border-l border-blue-400"
                >
                  <li className="border-b border-blue-400 px-4 py-2 text-[#185abc] first:border-t">
                    <Link className="hover:underline" href={group.href}>
                      {group.name}
                    </Link>
                  </li>
                </ul>
              );
            }

            return (
              <div
                key={`engineering-accordion-${groupIndex}`}
                className="border-l border-blue-400"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={group.label}
                    className="border-b border-blue-400"
                  >
                    <AccordionTrigger className="rounded-none border-b border-blue-400 px-4 py-3 text-left text-base text-[#185abc] first:border-t hover:no-underline [&>svg]:text-black">
                      {group.label}
                    </AccordionTrigger>
                    <AccordionContent className="ml-6 border-b border-l border-blue-400 pb-0">
                      <ul>
                        {group.items.map(([name, href]) => (
                          <li
                            key={name}
                            className="border-b border-blue-400 last:border-b-0"
                          >
                            <Link
                              className="block px-2 py-2 text-[#185abc] hover:underline"
                              href={href}
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>

      {/* География и логистика поставок */}
      <div>
        <h2 className="px-4 text-2xl">География и логистика поставок</h2>
        <ul className="mt-4 border-l border-blue-400">
          <li className="border-b border-blue-400 px-4 py-2 text-[#185abc]">
            Карта региональных поставок
          </li>
          {regionLinks.map((region) => (
            <li
              key={region.slug}
              className="border-b border-blue-400 px-4 py-2 text-[#185abc] first:border-t"
            >
              <Link
                className="hover:underline"
                href={`/regions/${region.slug}`}
              >
                {region.capital.name}, {region.subject.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
