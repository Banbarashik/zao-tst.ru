import Link from "next/link";

import { Mail, MapPinned, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";

import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-secondary text-secondary-foreground 4xl:justify-center relative py-4 pr-2 sm:pr-4 sm:pb-3.5 sm:pl-30 lg:flex lg:h-62 lg:items-center lg:gap-16 lg:pr-10 lg:pl-0 xl:h-auto xl:p-10"
    >
      <div className="4xl:justify-start 4xl:gap-20 3xl:gap-10 4xl:w-auto lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12 xl:ml-0">
        <div className="w-26 xl:hidden" />
        <div className="mb-6 flex items-center justify-center gap-4 sm:justify-start lg:order-last lg:m-0">
          <Logo place="footer" />
          <div className="text-lg">
            <p className="text-accent">Электронная почта</p>
            <a
              href="mailto:zao_tst@mail.ru"
              className="text-accent flex items-center gap-2 hover:text-white"
            >
              <Mail size={20} />
              zao_tst@mail.ru
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-2.5 text-right sm:hidden">
          <p>
            <span className="mb-2 flex justify-end gap-2">
              <MapPinned /> <span>Адрес:</span>
            </span>
            <span className="block">Кемеровская область,</span>
            <span className="block">г. Киселевск, ул. Юргинская,1</span>
          </p>

          <div>
            <div className="mb-2 flex justify-end gap-2">
              <Smartphone />
              Телефоны:
            </div>
            <div>Технические вопросы</div>
            <div className="font-semibold">8-961-737-83-14</div>
            <div>Отдел продаж</div>
            <div className="font-semibold">8-904-968-14-88</div>
          </div>
        </div>

        <div className="3xl:hidden hidden space-y-3 sm:block">
          <p>
            <span className="mb-2 flex gap-2">
              <MapPinned /> <span>Юридический / почтовый адрес:</span>
            </span>
            <span className="block">
              652707, Кемеровская область-Кузбасс, г. Киселевск, ул. Юргинская,
              д. 1
            </span>
          </p>

          <div className="mb-2 hidden gap-1 sm:flex xl:hidden">
            <Smartphone />
            Телефоны:
          </div>
          <ul className="space-y-1.5">
            <li className="flex gap-2">
              <Smartphone className="hidden xl:block" /> 8-961-737-83-14 -
              технические вопросы
            </li>
            <li className="flex gap-2">
              <Smartphone className="hidden xl:block" /> 8-904-968-14-88 - отдел
              продаж
            </li>
          </ul>
        </div>

        <p className="3xl:block hidden font-medium xl:text-sm 2xl:text-base">
          <span className="mb-2 flex gap-2">
            <MapPinned /> <span>Юридический / почтовый адрес:</span>
          </span>
          <span className="block">
            652707, Кемеровская область-Кузбасс, г. Киселевск, ул. Юргинская, д.
            1
          </span>
        </p>
        <div className="3xl:block hidden xl:text-sm 2xl:text-base">
          <div className="mb-1 flex gap-1">
            <Smartphone />
            Телефоны:
          </div>
          <ul>
            <li>
              <span>8-961-737-83-14</span> - технические вопросы
            </li>
            <li>
              <span>8-904-968-14-88</span> - отдел продаж
            </li>
          </ul>
        </div>

        <div className="order-first hidden space-y-1 text-[15px] xl:block">
          <p className="mb-2">Разработка сайта:</p>
          <Link
            href="https://github.com/Banbarashik"
            target="_blank"
            className="text-accent flex items-center gap-2 opacity-70 hover:opacity-100"
          >
            <GithubIcon />
            Banbarashik
          </Link>
          <a
            href="mailto:odinokiyskitalec@gmail.com"
            className="text-accent flex items-center gap-2 opacity-70 hover:opacity-100"
          >
            <Mail size={20} />
            odinokiyskitalec@gmail.com
          </a>
        </div>
      </div>
      <div className="absolute bottom-23 -left-15 -rotate-90 space-y-1 text-[15px] lg:bottom-22 xl:hidden">
        <p>Разработка сайта:</p>
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
      </div>
    </footer>
  );
}
