"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Calculator, Mail, PhoneCall, Search } from "lucide-react";

import Logo from "@/components/ui/logo";
import ContactFormTrigger from "./contactFormTrigger";

import NavSearch from "./navSearch";

export default function NavigationMenu() {
  const pathname = usePathname();
  const calcBarRef = useRef<HTMLDivElement>(null);
  const mainBarRef = useRef<HTMLDivElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navBarRef.current || !mainBarRef.current) return;

    let navVisible = true;

    const updateHeaderHeight = (visible: boolean) => {
      const calcH = calcBarRef.current?.getBoundingClientRect().height ?? 0;
      const mainH = mainBarRef.current?.getBoundingClientRect().height ?? 0;
      const navH = visible
        ? (navBarRef.current?.getBoundingClientRect().height ?? 0)
        : 0;
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${Math.ceil(calcH + mainH + navH)}px`,
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        navVisible = entry.isIntersecting;
        if (mainBarRef.current) {
          if (entry.isIntersecting) {
            mainBarRef.current.classList.remove("opacity-90");
          } else {
            mainBarRef.current.classList.add("opacity-90");
          }
        }
        updateHeaderHeight(navVisible);
      },
      { threshold: 0 },
    );

    observer.observe(navBarRef.current);

    const resizeObserver = new ResizeObserver(() =>
      updateHeaderHeight(navVisible),
    );
    if (calcBarRef.current) resizeObserver.observe(calcBarRef.current);
    resizeObserver.observe(mainBarRef.current);
    resizeObserver.observe(navBarRef.current);

    updateHeaderHeight(navBarRef.current.getBoundingClientRect().top >= 0);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* CALCULATORS BAR */}
      <div
        ref={calcBarRef}
        className="hidden border-b border-white/10 bg-[#4c2b20]/95 text-white lg:block"
      >
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
      <div
        ref={mainBarRef}
        className="bg-primary-darker sticky top-0 z-50 hidden text-white transition-opacity duration-500 lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
          <Logo place="header" />

          <ul className="ml-6 flex flex-col items-start gap-y-2 text-[15px] text-white">
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

          <NavSearch />

          <ContactFormTrigger
            triggerBtnVariant="default"
            triggerBtnClassName="h-12 ml-auto px-5 cursor-pointer rounded-lg hover:bg-primary-dark font-bold text-base border border-[#A5A5A5]"
            amountClassName="bg-accent absolute text-black right-0 bottom-0 inline-flex size-6 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full text-sm font-semibold"
          />
        </div>
      </div>

      {/* NAV BAR */}
      <div
        ref={navBarRef}
        className="bg-primary-darker/95 hidden border-t border-white/10 text-white lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 pb-1 text-sm">
          <Link
            href="/"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/"
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Главная
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/catalog"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/catalog" || pathname.startsWith("/catalog/")
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Каталог
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/produkciya"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/produkciya"
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Продукция Сертификаты
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/kalorifery"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/kalorifery"
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Калориферы
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/otopitelnye-agregaty"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/otopitelnye-agregaty"
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Агрегаты
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/vozduchonagrevatelnye-ustanovki"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/vozduchonagrevatelnye-ustanovki"
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Установки
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/tehnicheskaya-stranica"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/tehnicheskaya-stranica"
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Техническая страница
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/kontakty-prajs"
            className={`group relative border-b-2 pt-2.5 pb-2 transition ${
              pathname === "/kontakty-prajs"
                ? "border-accent text-accent"
                : "hover:text-accent border-transparent"
            }`}
          >
            Контакты Прайс лист
            <span className="bg-accent absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </>
  );
}
