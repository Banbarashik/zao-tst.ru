import productData from "@/data/products.json";

import type { Metadata } from "next";
import Image from "next/image";

import { ArrowBigDownDash } from "lucide-react";

import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import ProductLinks from "@/components/general_pages/productLinks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Расчет и подбор паровых калориферов",
  description:
    "Расчет и подбор паровых калориферов. Технические характеристики, расчетные таблицы и формулы для подбора воздухонагревателей КПСк КП КФБ с теплоносителем пар",
  keywords:
    "расчет и подбор парового калорифера,формула для расчета и подбора паровых калориферов,формула тепловой мощности парового калорифера,расчет производительности парового калорифера,расчет температурного напора парового калорифера,формула температурного напора парового калорифера,расчет калориферов кпск,расчет паровых калориферов кпск,подбор калориферов кпск,подбор паровых калориферов кпск",
};

export default function PodborRaschetKaloriferovPage() {
  return (
    <>
      <Heading lvl={1} text="Подбор и расчет калорифера парового" />

      <section className="space-y-1">
        <Heading lvl={2} text="РАСЧЕТ И ПОДБОР КАЛОРИФЕРОВ КПСК КП КФБ-А" />
        <ProductParagraph>
          Расчет и подбор паровых калориферов осуществляется в следующей
          последовательности:
        </ProductParagraph>
        <ul className="space-y-1.5">
          {[
            "подсчет необходимой тепловой мощности для нагрева требуемого объема воздуха",
            "расчет площади фронтального сечения для прохода воздуха и подбор наиболее подходящих калориферов",
            "нахождение массовой скорости в фронтальном сечении выбранного парового теплообменника",
            "подсчет расхода пара",
            "вычисление коэффициента теплопередачи",
            "определение температурного напора",
            "нахождение фактической теплопроизводительности калорифера",
            "подсчет фактического расхода пара",
            "установление запаса площади поверхности теплообмена калориферов и их соответствия рекомендуемому диапазону",
            "расчет аэродинамического сопротивления",
            "итоговые показатели",
          ].map((item, i, arr) => (
            <li key={item} className="flex gap-2">
              <Link
                href={`/podbor-raschet-kaloriferov#anchor${i + 1}`}
                className="text-primary-darker hover:text-primary-dark flex font-bold"
              >
                <ArrowBigDownDash />
                <span>{i + 1}.</span>
              </Link>
              <span>
                {item}
                {i < arr.length - 1 ? ";" : "."}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
