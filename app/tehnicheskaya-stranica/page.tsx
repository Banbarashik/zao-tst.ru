import Link from "next/link";
import Image from "next/image";

import { TehnicheskayaSearchForm } from "@/components/tehnicheskayaSearchForm";

export default function TehnicheskayaStranica() {
  return (
    <main className="3xl:px-0 mx-auto w-full max-w-336 space-y-6 px-2 pt-6 pb-14 sm:pt-14 lg:px-6 xl:px-10">
      <TehnicheskayaSearchForm />
      <TechEntries entries={waterHeaterEntries} />
      <div className="space-y-3">
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов. Назначение калориферов. Конструкция калориферов.
            Применение калориферов. Типы и виды калориферов. Калориферы для
            низких температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
        <div className="flex gap-4 border px-4 py-3 text-[15px]">
          <img src="/img/search/kalorifer_model.png" className="h-16" />
          <p>
            <a className="text-primary-dark cursor-pointer">
              Производство калориферов
            </a>
            . Назначение калориферов. Конструкция калориферов. Применение
            калориферов. Типы и виды калориферов. Калориферы для низких
            температурных режимов. Калориферы водяные и паровые для сушки
            материалов.
          </p>
        </div>
      </div>
    </main>
  );
}

interface TechEntry {
  url: string;
  img: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
}

function TechEntry({
  url = "",
  img = { url: "", alt: "" },
  title = "",
  description = "",
}: TechEntry) {
  return (
    <article className="border hover:border-[#dadada] hover:bg-gray-100">
      <Link href={url} className="flex items-start gap-4 px-4 py-3">
        <Image src={img.url} alt={img.alt} width={100} height={1} />
        <div>
          <h3 className="text-primary-dark">{title}</h3>
          <p className="text-[15px]">{description}</p>
        </div>
      </Link>
    </article>
  );
}

function TechEntries({ entries }: { entries: TechEntry[] }) {
  return (
    <ul className="space-y-3">
      {entries.map((en) => (
        <li key={en.url}>
          <TechEntry {...en} />
        </li>
      ))}
    </ul>
  );
}

const waterHeaterEntries: TechEntry[] = [
  {
    url: "/kalorifery-voda",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Приточные водяные калориферы",
    description:
      "Калькуляторы расчета мощности калорифера и расхода теплоносителя. Инженерный калькулятор подбора воздухонагревателей приточных установок в режиме онлайн. 3 D модели водяных приточных калориферов широкого спектра производительности по воздуху и тепловой мощности. Технические характеристики и габаритные размеры водяных приточных калориферов серии КПВС и КПВУ.",
  },
  {
    url: "/kalorifery-ksk",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Калориферы КСк водяные",
    description:
      "Таблицы расчета и подбора калориферов КСк2, КСк3, КСк4. Назначение воздухонагревателей КСк. Конструкция водяных воздушных теплообменников серии КСк. Чертежи, технические характеристики и габаритные размеры калориферов КСк.",
  },
  {
    url: "/kalorifery-tvv",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Калориферы ТВВ водяные",
    description:
      "Таблицы расчета и подбора калориферов ТВВ3, ТВВ4. Назначение водяных воздухонагревателей для низких температур серии ТВВ. Конструкция водяных теплообменников серии ТВВ. Технические характеристики и габаритные размеры калориферов ТВВ.",
  },
  {
    url: "/kalorifery-kfb-a",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Калориферы КФБ-А М водяные",
    description:
      "Таблицы расчета и подбора калориферов КФБ-А3 М, КФБ-А4 М. Назначение биметаллических воздухонагревателей КФБ-А М. Конструкция водяных многоходовых теплообменников серии КФБ-А. Компоновка в калориферные установки. Характеристики и габаритные размеры калориферов КФБ-А М.",
  },
  {
    url: "/kalorifer-sushilnaia-kamera",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Водяные калориферы для сушильных камер",
    description:
      "Калькулятор расчета и подбора водяных калориферов для сушильных камер в режиме онлайн. Мощность водяных теплообменников для сушильных камер. Применение водяных алюминиевых воздухонагревателей в качестве теплового оборудования окрасочно-сушильных камер.",
  },
  {
    url: "/ao2-ksk-kpsk",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Воздушно-отопительные агрегаты АО2 водяные",
    description:
      "Расчет, подбор и установка водяных отопительных агрегатов серии АО2. Назначение агрегатов АО2 водяных. Конструкция водяных калориферов с вентилятором типа АО2. Характеристики и габаритные размеры агрегатов водяных АО2. Принцип работы водовоздушных отопительных агрегатов АО2.",
  },
  {
    url: "/avo-tvv-kp",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Агрегаты воздушного отопления АВО ХЛ водяные",
    description:
      "Расчет, подбор и установка агрегатов отопления АВО ХЛ водяных. Назначение водовоздушных АВО ХЛ. Характеристики и габариты агрегатов воздушного отопления АВО ХЛ водяных. Применение агрегатов АВО ХЛ водяных для поддержания оптимального микроклимата животноводческих и птицеводческих комплексов, сушки изделий и материалов.",
  },
  {
    url: "/std300-ksk-kpsk",
    img: {
      url: "/img/search/kalorifer_model_voda.png",
      alt: "Приточные водяные калориферы",
    },
    title: "Агрегаты отопительные водяные СТД-300",
    description:
      "Расчет, подбор и установка агрегатов отопительных СТД-300 водяных. Конструкция водяных СТД-300. Технические характеристики и габаритные размеры водяных отопительных агрегатов СТД-300. Применение водяных агрегатов СТД-300 в технологических процессах охлаждения жидкостей, сушки материалов.",
  },
];
