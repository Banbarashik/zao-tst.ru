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

export default function SitemapPage() {
  return (
    <div className="max-w-8xl mx-auto flex">
      <ul>
        <li>
          <Link href="/">Главная. Завод ООО «Т.С.Т.»</Link>
        </li>
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
      </ul>
      <ul></ul>
      <ul></ul>
    </div>
  );
}
