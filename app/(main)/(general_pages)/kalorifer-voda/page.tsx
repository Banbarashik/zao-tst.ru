import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import CategoryCards from "@/components/categoryCards";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import SaturatedSteamPropertiesTable from "@/components/general_pages/saturatedSteamPropertiesTable";
import { NumberedAnchor } from "@/components/utils/anchor/numbered";

export const metadata: Metadata = {
  title: "Водяные калориферы и свойства воды как теплоносителя",
  description:
    "Водяные промышленные калориферы. Работа в системах вентиляции, правила эксплуатации на производстве, процессы нагрева и остывания воды в воздухонагревателе",
  keywords:
    "водяной калорифер,воздухонагреватель водяной,водяные промышленные калориферы,свойства воды как теплоносителя,остывание воды в калорифере,принцип работы водяного калорифера,правила эксплуатации водяных калориферов,давление и температура в водяном калорифере,производство водяных калориферов,модели биметаллических водяных калориферов",
};

export default function KaloriferParPage() {
  return (
    <>
      <Heading lvl={1} text="Водяной калорифер" />

      <ProductParagraph>
        Конструктивные особенности, теплофизические свойства и возможности
        использования промышленных водовоздушных нагревателей. В разделах
        детально описаны основы функционирования многоходового гидравлического
        тракта, механизм непрерывного остывания жидкого теплоносителя и
        специфика температурного распределения по рабочей поверхности.
        Представлена таблица зависимости основных параметров воды от температуры
        на линии насыщения, а также рассмотрены ключевые факторы сохранения
        эксплуатационного ресурса и требования к качеству водоподготовки. В
        завершении приведена номенклатура базовых серий выпускаемых заводом
        калориферов для комплектации систем вентиляции, воздушного отопления и
        сушильных камер.
      </ProductParagraph>

      <LinkButtonsBlock
        buttons={[
          {
            name: "Водяные воздухоподогреватели",
            url: "/kalorifer-voda#anchor2",
            hiddenText:
              "Водяные оребренные воздухонагреватели для систем вентиляции",
          },
          {
            name: "Таблица свойств воды",
            url: "/kalorifer-voda#anchor1",
            hiddenText:
              "Таблица свойств воды на линии насыщения для калориферов",
          },
        ]}
      />
    </>
  );
}
