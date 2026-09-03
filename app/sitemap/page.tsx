import productData from "@/data/products.json";

import { sortProducts } from "@/lib/utils";

import { SITE_URL } from "@/constants";

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
  { value: "kfb-a-m", title: "Калориферы КФБ-А М", products: kaloriferyKfbAM },
  { value: "ao2-v", title: "Агрегаты АО2 В", products: kaloriferyAo2M },
  { value: "avo-tvv", title: "Агрегаты АВО ТВВ", products: kaloriferyAvoTvv },
  {
    value: "std300-v",
    title: "Агрегаты СТД-300 В",
    products: kaloriferyStd300V,
  },
  { value: "kpsk", title: "Калориферы КПСк", products: kaloriferyKpsk },
  { value: "kp", title: "Калориферы КП", products: kaloriferyKp },
  { value: "kfb-a-p", title: "Калориферы КФБ-А П", products: kaloriferyKfbAP },
  { value: "ao2-p", title: "Агрегаты АО2 П", products: kaloriferyAo2P },
  { value: "avo-kp", title: "Агрегаты АВО КП", products: kaloriferyAvoKp },
  {
    value: "std300-p",
    title: "Агрегаты СТД-300 П",
    products: kaloriferyStd300P,
  },
  { value: "sfo", title: "Рекуператоры СФО", products: kaloriferySfo },
  { value: "sfotc", title: "Установки СФОТЦ", products: ustanovkiSfotc },
  { value: "shuk", title: "Шкафы управления ШУК", products: shkafyShuk },
];

const companyLinks = [
  ["Главная. Завод ООО «Т.С.Т.»", "/"],
  ["Прайс-лист и контакты", "/kontakty-prajs"],
  ["Политика обработки персональных данных", "/personal-data"],
] as const;

const generalPageLinks = [
  [
    "Схемы подключения электрокалориферов СФО-16...СФО-250",
    "/elektrokalorifery",
  ],
  ["Расчет и подбор диаметра паропроводов", "/paroprovod"],
  [
    "Расчет и подбор водяных, паровых и электрических калориферов",
    "/raschet-kaloriferov",
  ],
  ["Расчет и подбор паровых калориферов", "/podbor-raschet-kaloriferov"],
  ["Калориферы приточные водяные", "/kalorifery-voda"],
  ["Калориферы приточные паровые", "/kalorifery-par"],
  ["Паровые калориферы", "/kalorifer-par"],
  [
    "Коэффициент теплопередачи паровых калориферов",
    "/koefficient-teploperedachi-parovyh-kaloriferov",
  ],
  ["Калориферы водяные КСк", "/kalorifery-ksk"],
  ["Калориферы паровые КПСк", "/kalorifery-kpsk"],
  ["Калориферы водяные ТВВ", "/kalorifery-tvv"],
  ["Калориферы паровые КП", "/kalorifery-kp"],
  ["Калориферы водяные КФБ-А М", "/kalorifery-kfb-a"],
  ["Калориферы паровые КФБ-А П", "/kalorifery-kfb"],
  ["Воздушно-отопительные агрегаты водяные", "/ao2-ksk-kpsk"],
  ["Воздушно-отопительные агрегаты паровые", "/ao2-kpsk-ksk"],
  ["Воздушно-отопительные агрегаты АВО ХЛ", "/avo-tvv-kp"],
  ["Воздушно-отопительные агрегаты водяные СТД-300", "/std300-ksk-kpsk"],
  ["Воздушно-отопительные агрегаты паровые СТД-300", "/std300-tvv-kp"],
  ["Электрокалориферы СФО. Производство", "/elektronagrevateli"],
  ["Электрокалориферные установки СФОЦ. Производство", "/teploventilyatory"],
  ["Шкафы управления калорифером ШУК. Производство", "/shkafy-upravleniya"],
] as const;

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
        <AccordionTrigger className="rounded-none border-b border-blue-400 px-4 text-left text-base text-[#185abc] hover:no-underline [&>svg]:text-black">
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
    <section className="max-w-8xl mx-auto grid grid-cols-1 gap-9 px-4 py-14 md:grid-cols-2">
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
            {productSections.map((section) => (
              <ProductAccordion key={section.value} {...section} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-l-2 border-blue-400">
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
    </section>
  );
}
