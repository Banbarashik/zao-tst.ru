import Link from "next/link";

import { Calculator, Mail, PhoneCall, Search } from "lucide-react";

import Logo from "@/components/ui/logo";

export default function NavigationMenu() {
  return (
    <div className="text-white">
      {/* CALCULATORS BAR */}
      <div className="border-b border-white/10 bg-[#4c2b20]/95">
        <div className="mx-auto flex w-max items-center gap-8 text-sm">
          <Link
            href="/kalorifery-voda#anchor1"
            className="hover:text-accent flex items-center gap-1 py-2 transition"
          >
            <Calculator />
            Подбор водяных калориферов
          </Link>
          <Link
            href="/kalorifery-par#anchor1"
            className="hover:text-accent flex items-center gap-1 py-2 transition"
          >
            <Calculator />
            Подбор паровых калориферов
          </Link>
          <Link
            href="/elektronagrevateli#anchor1"
            className="hover:text-accent flex items-center gap-1 py-2 transition"
          >
            <Calculator />
            Подбор электрокалориферов
          </Link>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="bg-primary-darker">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
          <Logo place="header" />

          <ul className="4xl:ml-12 3xl:ml-8 ml-3 flex flex-col items-start gap-y-2 text-white xl:text-[15px]">
            <li className="group">
              <a
                href="tel:+79617378314"
                className="flex items-center gap-2.5 group-hover:text-[#7ebab5]"
              >
                <span className="rounded-full border border-white p-1.25 group-hover:border-[#7ebab5]">
                  <PhoneCall className="size-4 xl:size-4" />
                </span>
                <span>+7 (961) 737-83-14</span>
              </a>
            </li>
            <li className="group">
              <a
                href="mailto:zao_tst@mail.ru"
                className="flex items-center gap-2.5 group-hover:text-[#7ebab5]"
              >
                <span className="rounded-full border border-white p-1.25 group-hover:border-[#7ebab5]">
                  <Mail className="size-4 xl:size-4" />
                </span>
                <span>zao_tst@mail.ru</span>
              </a>
            </li>
          </ul>

          {/* Search */}
          <div className="ml-6 flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="border-accent/10 focus:ring-accent/50 w-full max-w-md rounded-lg border bg-white/10 px-4 py-2.5 pl-10 text-sm text-white placeholder-white/60 outline-none focus:ring"
              />
              <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-white/60" />
            </div>
          </div>

          {/* CTA */}
          <button className="bg-primary rounded-lg border border-white/50 px-5 py-2.5 font-semibold shadow-sm transition hover:bg-[#c74f2b] hover:shadow-md">
            Подать заявку
          </button>
        </div>
      </div>

      {/* NAV BAR */}
      <div className="bg-primary-darker/95 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 pb-1 text-sm">
          <Link
            href="/"
            className="group border-accent text-accent relative border-b-2 pt-2.5 pb-2"
          >
            Главная
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/catalog"
            className="group hover:text-accent relative border-b-2 border-transparent pt-2.5 pb-2 transition"
          >
            Каталог
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/produkciya"
            className="group hover:text-accent relative border-b-2 border-transparent pt-2.5 pb-2 transition"
          >
            Продукция Сертификаты
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/kalorifery"
            className="group hover:text-accent relative border-b-2 border-transparent pt-2.5 pb-2 transition"
          >
            Калориферы
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/otopitelnye-agregaty"
            className="group hover:text-accent relative border-b-2 border-transparent pt-2.5 pb-2 transition"
          >
            Агрегаты
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/vozduchonagrevatelnye-ustanovki"
            className="group hover:text-accent relative border-b-2 border-transparent pt-2.5 pb-2 transition"
          >
            Установки
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/tehnicheskaya-stranica"
            className="group hover:text-accent relative border-b-2 border-transparent pt-2.5 pb-2 transition"
          >
            Техническая страница
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/kontakty-prajs"
            className="group hover:text-accent relative border-b-2 border-transparent pt-2.5 pb-2 transition"
          >
            Контакты Прайс лист
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
