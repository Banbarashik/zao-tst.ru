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
      className="border-t-4 border-white/25 bg-[#303030] pt-5 text-white"
    >
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between pb-6">
          {/* 1-й столбик */}
          <div></div>

          {/* 2-й столбик */}
          <div className="space-y-6">
            <p className="border-b-2 border-white/10 pb-4 text-xl font-bold">
              Каталог оборудования
            </p>
            <ul className="space-y-2">
              <li>Водяные калориферы</li>
              <li>Паровые калориферы</li>
              <li>Электрические калориферы</li>
              <li>Блок расчета и подбора</li>
            </ul>
          </div>

          {/* 3-й столбик - БЛОК РАСЧЕТА И ПОДБОРА */}
          <div className="space-y-6">
            <p className="border-b-2 border-white/10 pb-4 text-xl font-bold">
              Блок расчета и подбора
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kalorifery-voda#anchor1"
                  className="hover:text-accent"
                >
                  Калькулятор водяных калориферов
                </Link>
              </li>
              <li>
                <Link
                  href="/kalorifery-par#anchor1"
                  className="hover:text-accent"
                >
                  Калькулятор паровых калориферов
                </Link>
              </li>
              <li>
                <Link
                  href="/elektronagrevateli#anchor1"
                  className="hover:text-accent"
                >
                  Калькулятор электрокалориферов
                </Link>
              </li>
              <li>
                <Link
                  href="/tehnicheskaya-stranica"
                  className="hover:text-accent"
                >
                  Подбор воздухонагревателей
                </Link>
              </li>
            </ul>
          </div>

          {/* 4-й столбик - КОНТАКТЫ ПРЕДПРИЯТИЯ */}
          <div className="space-y-6">
            <p className="border-b-2 border-white/10 pb-4 text-xl font-bold">
              Контакты предприятия
            </p>
            <address className="not-italic">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-1.25">
                    <Phone fill="#303030" width={16} height={16} />
                  </div>
                  <p>8-961-737-83-14. Технический отдел</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-1.25">
                    <Phone fill="#303030" width={16} height={16} />
                  </div>
                  <p>8-904-968-14-88. Отдел продаж</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-min rounded-full bg-white p-1.25">
                    <Mail stroke="#303030" width={16} height={16} />
                  </div>
                  <div>
                    <a
                      href="mailto:zao_tst@mail.ru"
                      className="hover:text-accent"
                    >
                      zao_tst@mail.ru
                    </a>
                    . Электронная почта
                  </div>
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
                  <p>Режим работы: пн.-пт. 8:00-17.00; сб.-вс. – выходной</p>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* НИЖНИЙ БЛОК */}
        <div className="flex justify-between py-2 text-sm">
          <p className="flex items-center gap-3">
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
          <p>
            © 2001–2026 ООО «Т.С.Т.» | Производство воздушно-отопительного
            оборудования
          </p>
        </div>
      </div>
    </footer>
  );
}
