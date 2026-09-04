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

const companyLinks = [
  ["Главная. Завод ООО «Т.С.Т.»", "/"],
  ["Карточка предприятия", "/"],
  ["Оплата и доставка", "/"],
  ["Сертификаты соответствия", "/"],
  ["Контакты", "/"],
  ["Политика обработки персональных данных", "/personal-data"],
] as const;

const productLinks = [
  ["Каталог оборудования", "/"],
  ["Прайс-лист", "/"],
  ["Калориферы", "/"],
  ["Агрегаты воздушно-отопительные", "/"],
  ["Установки воздухонагревательные", "/"],
] as const;

const generalPageLinks = [
  ["Техническая страница", "/"],
  ["Калькулятор водяных калориферов", "/"],
  ["Калькулятор паровых калориферов", "/"],
  ["Калькулятор электрокалориферов", "/"],
  ["Критерии расчета и подбора калориферов", "/"],
  ["Водяные калориферы для сушильных камер", "/"],
  ["Паровые калориферы", "/"],
  ["Теплоноситель водяной пар", "/"],
  ["Паровые калориферы для сушильных камер", "/"],
  ["Технологический нагрев воздуха", "/"],
  ["Расчет и подбор диаметра паропровода", "/"],
  ["Расчет и подбор паровых калориферов", "/"],
  ["Расчет тепловой мощности", "/"],
  ["Расчет площади фронтального сечения", "/"],
  ["Расчет массовой скорости воздуха", "/"],
  ["Расчет расхода пара", "/"],
  ["Расчет коэффициента теплопередачи", "/"],
  ["Расчет среднего температурного напора", "/"],
  ["Расчет аэродинамического сопротивления", "/"],
  ["Схемы подключения электрокалориферов", "/"],
  ["Расчет электрокалорифера мощностью", "/"],
] as const;

const regionLinks = Object.values(generatedRegions).sort((a, b) =>
  a.subject.name.localeCompare(b.subject.name, "ru"),
);

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
                  {product.name}
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
      <div>
        <div className="border-l border-blue-400">
          <h2 className="px-4 text-2xl">О компании</h2>
          <ul className="mt-4">
            {companyLinks.map(([name, href]) => (
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
        </div>
        <div className="mt-9 border-l border-blue-400">
          <h2 className="px-4 text-2xl">Продукция</h2>
          <div className="mt-4">
            <ul>
              {productLinks.map(([name, href]) => (
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
            {productSections.map((section) => (
              <ProductAccordion key={section.value} {...section} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="border-l border-blue-400">
          <h2 className="px-4 text-2xl">Общие страницы</h2>
          <ul className="mt-4">
            {generalPageLinks.map(([name, href]) => (
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
        </div>
      </div>
      <div className="border-l border-blue-400">
        <h2 className="px-4 text-2xl">Регионы</h2>
        <ul className="mt-4">
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
