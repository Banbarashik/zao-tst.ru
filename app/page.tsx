import Image from "next/image";
import type { Metadata } from "next";

import { ORGANIZATION_SCHEMA } from "@/constants/seo";

import { JsonLd } from "@/components/utils/jsonLd";

import Hero from "@/components/hero";
import ContactForm from "@/components/contactForm";
import Catalog from "@/components/catalog";
import RussiaMap from "@/components/RussiaMap_2";
import { cities } from "@/data/cities";
import { regions } from "@/data/regions";

export const metadata: Metadata = {
  title:
    "Завод воздушно-отопительного оборудования Т.С.Т. Калориферы от производителя",
  description:
    "Производство и прямые поставки промышленного воздушно-отопительного оборудования от завода ООО «Т.С.Т.», Кемеровская область. Водяные, паровые, электрические калориферы и отопительные агрегаты с доставкой в 70 регионов РФ. Онлайн-расчет на сайте.",
  keywords:
    "промышленное воздушное отопление,воздушно-отопительное оборудование завод,воздушное отопление производственного помещения,производство калориферов,водяные калориферы вентиляции,паровые калориферы для нагрева воздуха,купить калорифер от производителя,калориферы промышленного отопления цены,поставка отопительного оборудования в регионы,подбор калорифера для воздушного отопления",
  other: {
    "yandex-verification": "7608879c1c985cdb",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={ORGANIZATION_SCHEMA} />

      <Hero />
      <main className="max-w-8xl mx-auto px-3 py-8 sm:px-6 sm:pt-11 lg:px-12 lg:pt-16">
        <h1 className="mb-4 text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px]">
          Производство воздушно-отопительного оборудования
        </h1>
        <p className="mb-10">
          Микроклимат производственных помещений характеризуется рядом факторов,
          среди которых температура и влажность воздуха, скорость его движения.
          В холодный период года, ввиду разницы температуры снаружи и внутри
          здания, теплопотери помещения через ограждающие конструкции очень
          значительны. В целях создания и поддержания комфортных тепловых
          условий для работы необходим обогрев промышленных корпусов с помощью
          отопительного оборудования.
        </p>
        <Catalog />
      </main>

      <h2 className="max-w-8xl mx-auto mb-8 text-base font-bold uppercase sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl">
        ГЕОГРАФИЯ ПОСТАВОК ВОЗДУШНО-ОТОПИТЕЛЬНОГО ОБОРУДОВАНИЯ
      </h2>
      <div className="mx-auto mb-14 w-full max-w-7xl">
        <div style={{ aspectRatio: "1150 / 627" }}>
          <RussiaMap cities={cities} regions={regions} />
        </div>
        <div className="border-primary-dark mx-2 space-y-2 rounded-sm border p-3 shadow-md">
          <p>
            За 25 лет работы наше предприятие осуществило отгрузки в 70 регионов
            страны, обеспечив надежным теплом сотни действующих промышленных
            объектов от Северо-Запада до Дальнего Востока. География выполненных
            поставок калориферов и отопительных агрегатов производства ООО
            «Т.С.Т.» представлена на динамической схеме. Выберите интересующую
            вас область, чтобы открыть всплывающую таблицу и перейти к
            подробному региональному референс-листу.
          </p>
          <p>
            Внутри каждого раздела доступен детальный список местных предприятий
            с указанием отгруженных моделей, а также расчетные зимние
            температуры региона по СП 131.13330, необходимые для вычисления
            проектной тепловой мощности оборудования. На примере реальных
            объектов вы можете оценить опыт эксплуатации наших
            воздухонагревателей в аналогичных климатических условиях вашего
            города.
          </p>
        </div>
      </div>

      {/* CONTACT FORM SECTION START */}
      <div className="relative flex w-full items-center justify-center gap-20 overflow-hidden px-2 pt-8 pb-20 sm:pt-14 lg:py-10">
        <Image
          src="/img/home/contact_form.png"
          alt="Промышленное воздушное отопление"
          className="scale-102 object-cover object-[30%_50%]"
          fill
          priority
        />
        <div className="absolute inset-0 bg-white/40" /> {/* FOG */}
        <div className="z-10 flex w-full flex-col items-center lg:flex-row lg:justify-evenly lg:gap-4 lg:px-6 xl:justify-center xl:gap-20 xl:px-12">
          <div className="relative text-center lg:w-max xl:w-full xl:max-w-xl xl:shrink-0">
            <span className="absolute inset-0 -z-10 rounded-md bg-[#a6a6a6] opacity-100 blur-[90px]"></span>
            <p className="mb-1 text-3xl font-bold text-shadow-2xs text-shadow-[#b3b3b3] sm:mb-2 sm:text-4xl md:mb-2 md:text-5xl lg:mb-4 lg:text-4xl xl:text-5xl">
              Есть вопросы?
            </p>
            <p className="mb-6 text-lg text-shadow-[#b3b3b3] text-shadow-xs sm:text-xl md:text-2xl lg:mb-2 lg:text-xl xl:text-2xl">
              Оставьте заявку через форму, <br /> и мы свяжемся с вами в
              ближайшее время.
            </p>
          </div>
          <div className="max-w-xl">
            <ContactForm outOfContext compact />
          </div>
        </div>
      </div>
      {/* CONTACT FORM SECTION END */}
    </>
  );
}
