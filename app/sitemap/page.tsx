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

export default function SitemapPage() {
  return (
    <div className="max-w-8xl mx-auto flex">
      <ul>
        <li>
          <Link href="/">Главная. Завод ООО «Т.С.Т.»</Link>
        </li>
        {/* Приточные водяные калориферы КПВС, КПВУ */}
        <li>
          <Accordion type="single" collapsible>
            <AccordionItem value="pritochny-kalorifery">
              <AccordionTrigger>
                Приточные водяные калориферы КПВС, КПВУ
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  {vodianyPritochnyKalorifery.map((p) => (
                    <li key={p.id}>
                      <Link href={`${SITE_URL}/${p.id}`}>{p.name}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
        {/* Приточные паровые калориферы КППС, КППУ */}
        <li>
          <Accordion type="single" collapsible>
            <AccordionItem value="pritochny-kalorifery">
              <AccordionTrigger>
                Приточные паровые калориферы КППС, КППУ
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  {parovyPritochnyKalorifery.map((p) => (
                    <li key={p.id}>
                      <Link href={`${SITE_URL}/${p.id}`}>{p.name}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
        {/* Водяные калориферы КСк */}
        <li>
          <Accordion type="single" collapsible>
            <AccordionItem value="pritochny-kalorifery">
              <AccordionTrigger>Водяные калориферы КСк</AccordionTrigger>
              <AccordionContent>
                <ul>
                  {kaloriferyKsk.map((p) => (
                    <li key={p.id}>
                      <Link href={`${SITE_URL}/${p.id}`}>{p.name}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      </ul>
      <ul></ul>
      <ul></ul>
    </div>
  );
}
