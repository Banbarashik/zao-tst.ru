import Link from "next/link";

import {
  Cog,
  Factory,
  Mail,
  MapPinned,
  Phone,
  Smartphone,
  Wrench,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github";

import Logo from "@/components/ui/logo";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative h-76 overflow-hidden bg-[#303030] py-5 text-white"
    >
      {/* <Image
        src="/img/kalorifer.svg"
        alt=""
        aria-hidden="true"
        width={180}
        height={164}
        className="pointer-events-none absolute top-1/5 right-10 opacity-20"
      /> */}
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between">
          {/* 1-й столбик */}
          <div className="flex max-w-120 flex-col gap-4">
            <div className="flex items-center gap-3 font-serif text-[18px] leading-[1.3]">
              <Image
                src="/img/logo_header.png"
                alt=""
                width={54}
                height={54}
                className="opacity-90"
              />
              <p className="text-accent">
                Завод по производству воздушно-отопительного оборудования ООО
                «Т.С.Т.»
              </p>
            </div>
            <p className="text-xs">
              Наш центр объединил в себе все этапы создания современного
              промышленного инструмента: разработку, проектирование, создание
              макетных образцов, проведение лабораторных испытаний и
              исследований, выпуск опытных образцов, проведение натурных
              испытаний и производство.
            </p>
          </div>

          {/* 2-й столбик */}
          <div className="space-y-6">
            <p className="text-accent border-b-2 border-white/10 pb-4 text-xl font-bold">
              Каталог оборудования
            </p>
            <ul className="space-y-2">
              <li>Водяные калориферы</li>
              <li>Паровые калориферы</li>
              <li>Электрические калориферы</li>
              <li>Блок расчета и подбора</li>
            </ul>
          </div>

          {/* 3-й столбик */}
          <div className="space-y-6">
            <p className="text-accent border-b-2 border-white/10 pb-4 text-xl font-bold">
              Контакты предприятия
            </p>
            <address className="not-italic">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-1.25">
                    <Phone fill="#303030" width={16} height={16} />
                  </div>
                  <p>8-961-737-83-14</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-1.25">
                    <Phone fill="#303030" width={16} height={16} />
                  </div>
                  <p>8-904-968-14-88</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-1.25">
                    <Mail stroke="#303030" width={16} height={16} />
                  </div>
                  <a href="mailto:zao_tst@mail.ru">zao_tst@mail.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-0.75">
                    <Factory fill="#303030" width={20} height={20} />
                  </div>
                  <p>Кемеровская область, г. Киселевск, ул. Юргинская, 1</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-0.75">
                    <Cog
                      width={20}
                      height={20}
                      strokeWidth={2.5}
                      stroke="#303030"
                    />
                  </div>
                  <p>Время работы: пн.-пт. 8:00-17.00; сб.-вс. – выходной</p>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <p className="relative flex items-center gap-3">
          Разработка сайта:{" "}
          <Link
            href="https://github.com/Banbarashik"
            target="_blank"
            className="text-accent flex items-center gap-2"
          >
            <GithubIcon />
            Banbarashik
          </Link>
          <a
            href="mailto:odinokiyskitalec@gmail.com"
            className="text-accent flex items-center gap-2"
          >
            <Mail size={20} />
            odinokiyskitalec@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
