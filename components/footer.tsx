import Link from "next/link";

import { Mail, MapPinned, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";

import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-secondary text-secondary-foreground 4xl:justify-center relative py-4 pr-2 sm:pr-4 sm:pb-10 sm:pl-26 lg:flex lg:h-62 lg:items-center lg:gap-16 lg:pr-10 lg:pl-0 xl:h-auto xl:p-10"
    >
      <div className="4xl:justify-start 4xl:gap-20 3xl:gap-10 4xl:w-auto lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-14 xl:ml-0">
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
        <div className="3xl:hidden space-y-3 text-end sm:text-start">
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
          {/* <ul>
            <li className="flex flex-col sm:flex-row sm:gap-2">
              <div>
                Технические вопросы<span className="hidden sm:inline">:</span>
              </div>
              <div className="font-semibold">8-961-737-83-14</div>
            </li>
            <li className="flex flex-col sm:flex-row sm:gap-2">
              <div>
                Отдел продаж<span className="hidden sm:inline">:</span>
              </div>
              <div className="font-semibold">8-904-968-14-88</div>
            </li>
          </ul> */}

          {/* <ul className="space-y-2 font-medium">
            <li className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-2">
              <div>
                Юридический адрес<span className="hidden sm:inline">:</span>
              </div>
              0-639
              <div className="sm:hidden">г. Новосибирск, ул. Широкая,</div>
              <div className="sm:hidden">здание 1 А, офис 207/1</div>
              640-767
              <div className="hidden sm:block">
                г. Новосибирск, ул. Широкая, здание 1 А,
              </div>
              <div className="hidden sm:block">офис 207/1</div>
            </li>
            <li className="flex flex-col sm:flex-row sm:gap-2">
              <div>
                Почтовый адрес<span className="hidden sm:inline">:</span>
              </div>
              <div>
                г. Киселевск, ул. Юргинская
                <span className="sm:hidden">, 1</span>
                <span className="hidden sm:inline">, дом 1</span>
              </div>
            </li>
          </ul> */}
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
      <div className="absolute bottom-25 -left-15 -rotate-90 space-y-1 text-[15px] lg:bottom-22 xl:hidden">
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
