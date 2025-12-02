import type { Metadata } from "next";

import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import Image from "next/image";
import CategoryCards from "@/components/categoryCards";

export const metadata: Metadata = {
  title: "Коэффициент теплопередачи паровых калориферов",
  description:
    "Коэффициент теплопередачи паровых калориферов. Расчет коэффициента теплопередачи и аэродинамического сопротивления воздухонагревателей с теплоносителем пар",
  keywords:
    "коэффициент теплопередачи парового калорифера,коэффициент теплопередачи парового воздухонагревателя,коэффициент теплопередачи парового теплообменника,расчет коэффициента теплопередачи парового калорифера,формула коэффициента теплопередачи парового калорифера,аэродинамическое сопротивление парового калорифера,расчет аэродинамического сопротивления парового калорифера,формула аэродинамического сопротивления парового калорифера,коэффициент теплопередачи калориферов кпск,аэродинамическое сопротивление калориферов кпск",
};

export default function KoefficientTeploperedachiParovyhKaloriferovPage() {
  return (
    <>
      <Heading lvl={1} text="Коэффициент теплопередачи парового калорифера" />

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-1000/650 w-full">
          <Image
            src="/img/general_pages/kalorifer_par_teploperedacha.png"
            alt="Расчет коэффициента теплопередачи паровых теплообменников"
            title="Паровой калорифер коэффициент теплопередачи"
            fill
          />
        </div>
        <div className="relative aspect-1000/650 w-full">
          <Image
            src="/img/general_pages/kalorifer_par_soprotivlenie.png"
            alt="Аэродинамическое сопротивление калориферов КПСк2 КПСк3 КПСк4"
            title="Аэродинамическое сопротивление паровых калориферов"
            fill
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="relative aspect-1000/650 w-full">
          <Image
            src="/img/general_pages/par_kalorifer_teploperedacha.png"
            alt="Коэффициент теплопередачи калориферов КПСк"
            title="Паровой калорифер с гладкими и оребренными трубками"
            fill
          />
        </div>
        <div className="relative aspect-1000/650 w-full">
          <Image
            src="/img/general_pages/par_kalorifer_soprotivlenie.png"
            alt="Формула для расчета теплоотдачи и сопротивления паровых калориферов"
            title="Паровые воздухонагреватели расчет теплопередачи"
            fill
          />
        </div>
      </div>
    </>
  );
}
