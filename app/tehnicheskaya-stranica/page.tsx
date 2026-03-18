import Link from "next/link";
import Image from "next/image";

import { TehnicheskayaSearchForm } from "@/components/tehnicheskayaSearchForm";

export default function TehnicheskayaStranica() {
  return (
    <main className="3xl:px-0 mx-auto w-full max-w-336 space-y-6 px-2 pt-6 pb-14 sm:pt-14 lg:px-6 xl:px-10">
      <TehnicheskayaSearchForm />
      <div>
        <TechEntries entries={waterHeaterEntries} />
      </div>
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
    <ul>
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
];
