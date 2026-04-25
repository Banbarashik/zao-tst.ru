// TODO check if there's code that is no longer needed

"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ContactFormTrigger from "@/components/contactFormTrigger";

export default function MobileNavigationMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!open) return;

    const onDocPointerDown = (event: PointerEvent) => {
      const path = (event.composedPath && event.composedPath()) || [];

      const isInsideMenu = menuRef.current
        ? path.includes(menuRef.current)
        : false;

      // Любой узел с data-menu-ignore-close="true" — безопасная зона
      const isSafeZone = path.some(
        (el) => (el as HTMLElement)?.dataset?.menuIgnoreClose === "true",
      );

      if (!isInsideMenu && !isSafeZone) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [open]);

  return (
    <div className="w-full text-white" ref={menuRef}>
      <button
        className="bg-primary-darker flex w-full items-center justify-center gap-3 border-b border-white/30 px-4 py-3 text-lg font-semibold"
        onClick={() => setOpen((o) => !o)}
      >
        <span>Меню</span>
        <ChevronDown
          className={`${open ? "rotate-180" : "rotate-0"} transition duration-200`}
        />
      </button>
      {open && (
        <div className="bg-primary-darker/88 flex flex-col shadow-md">
          <Accordion type="single" collapsible>
            <div className="grid grid-cols-2 border-b border-white/20">
              <AccordionItem
                value="produkciya-zayavka"
                className="contents border-0"
              >
                <AccordionTrigger className="bg-primary-darker/90 data-[state=open]:bg-primary-darker/55 col-span-1 justify-evenly gap-0 rounded-none border border-black/50 max-[350px]:text-xs">
                  <span>
                    <span>Продукция </span>
                    <span className="text-accent">Заявка</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down grid grid-cols-[repeat(2,1fr)] overflow-hidden px-0 pb-0 max-[350px]:text-xs">
                  <Link
                    href="/produkciya"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Продукция Доставка
                  </Link>
                  <Link
                    href="/kalorifery"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Калориферы
                  </Link>
                  <Link
                    href="/otopitelnye-agregaty"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Агрегаты
                  </Link>
                  <Link
                    href="/vozduchonagrevatelnye-ustanovki"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Установки
                  </Link>
                  <Link
                    href="/kontakty-prajs"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Контакты Прайс-лист
                  </Link>
                  <ContactFormTrigger
                    hasCloseBtn
                    triggerBtnClassName="text-accent border rounded-none border-black/20 max-[350px]:text-xs w-full h-full "
                    amountClassName="absolute max-[350px]:text-[10px] border border-primary text-primary right-0 -translate-x-6 -translate-y-2 inline-flex size-4 items-center justify-center rounded-full text-[10px]"
                  />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="calculators" className="contents border-0">
                <div className="col-span-1 [&:has(>h3[data-state=closed])]:col-start-2 [&:has(>h3[data-state=closed])]:row-start-1">
                  <AccordionTrigger className="bg-primary-darker/90 data-[state=open]:bg-primary-darker/65 justify-evenly gap-0 rounded-none border border-black/50 border-l-white/20 max-[350px]:text-xs">
                    Калькуляторы подбора
                  </AccordionTrigger>
                </div>
                <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down col-span-2 grid grid-cols-[repeat(2,1fr)] overflow-hidden px-0 pb-0 max-[350px]:text-xs">
                  <Link
                    href="/kalorifery-voda#anchor1"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Калькулятор Вода
                  </Link>
                  <Link
                    href="/elektronagrevateli#anchor1"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Калькулятор Электро
                  </Link>
                  <Link
                    href="/kalorifery-par#anchor1"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Калькулятор Пар
                  </Link>
                  <Link
                    href="/tehnicheskaya-stranica"
                    className="block border border-black/20 px-3 py-3 sm:px-4"
                    onClick={() => setOpen(false)}
                  >
                    Техническая страница
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="grid grid-cols-2 border-b border-white/20">
              <AccordionItem value="water" className="contents border-0">
                <Link href="/catalog/vodiany-kalorifery" className="col-span-1">
                  <AccordionTrigger className="bg-primary-darker/90 data-[state=open]:bg-primary-darker/65 justify-evenly gap-0 rounded-none border border-black/50 max-[350px]:text-xs">
                    Водяные калориферы
                  </AccordionTrigger>
                </Link>
                <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down grid grid-cols-[repeat(2,1fr)] overflow-hidden px-0 pb-0 max-[350px]:text-xs">
                  <Link
                    href="/catalog/pritochny-vodiany-kalorifery"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    КПВС КПВУ
                  </Link>
                  <Link
                    href="/catalog/tvv"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    ТВВ
                  </Link>
                  <Link
                    href="/catalog/ksk"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    КСК
                  </Link>
                  <Link
                    href="/catalog/kfb-a-m"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    КФБ-А М
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="steam" className="contents border-0">
                <Link
                  href="/catalog/parovy-kalorifery"
                  className="col-span-1 [&:has(>h3[data-state=closed])]:col-start-2 [&:has(>h3[data-state=closed])]:row-start-1"
                >
                  <AccordionTrigger className="bg-primary-darker/90 data-[state=open]:bg-primary-darker/65 justify-evenly gap-0 rounded-none border border-black/50 border-l-white/20 max-[350px]:text-xs">
                    Паровые калориферы
                  </AccordionTrigger>
                </Link>
                <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down col-span-2 grid grid-cols-[repeat(2,1fr)] overflow-hidden px-0 pb-0 max-[350px]:text-xs">
                  <Link
                    href="/catalog/pritochny-parovy-kalorifery"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    КППС КППУ
                  </Link>
                  <Link
                    href="/catalog/kp"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    КП
                  </Link>
                  <Link
                    href="/catalog/kpsk"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    КПСК
                  </Link>
                  <Link
                    href="/catalog/kfb-a-p"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    КФБ-А П
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="grid grid-cols-2">
              <AccordionItem value="agregaty" className="contents border-0">
                <Link href="/catalog/agregaty" className="col-span-1">
                  <AccordionTrigger className="bg-primary-darker/90 data-[state=open]:bg-primary-darker/65 justify-evenly gap-0 rounded-none border border-black/50 max-[350px]:text-xs">
                    Отопительные агрегаты
                  </AccordionTrigger>
                </Link>
                <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down grid grid-cols-[repeat(2,1fr)] overflow-hidden px-0 pb-0 max-[350px]:text-xs">
                  <Link
                    href="/catalog/ao2-v"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    АО2 ВОДА
                  </Link>
                  <Link
                    href="/catalog/ao2-p"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    АО2 ПАР
                  </Link>
                  <Link
                    href="/catalog/avo-tvv"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    АВО ХЛ ВОДА
                  </Link>
                  <Link
                    href="/catalog/avo-kp"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    АВО ХЛ ПАР
                  </Link>
                  <Link
                    href="/catalog/std300-v"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    СТД-300 ВОДА
                  </Link>
                  <Link
                    href="/catalog/std300-p"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    СТД-300 ПАР
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="electro" className="contents border-0">
                <Link
                  href="/catalog/energonagrevatelynoe-oborudovanie"
                  className="col-span-1 [&:has(>h3[data-state=closed])]:col-start-2 [&:has(>h3[data-state=closed])]:row-start-1"
                >
                  <AccordionTrigger className="bg-primary-darker/90 data-[state=open]:bg-primary-darker/65 justify-evenly gap-0 rounded-none border border-black/50 border-l-white/20 max-[350px]:text-xs">
                    Электронагреватели
                  </AccordionTrigger>
                </Link>
                <AccordionContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down col-span-2 grid grid-cols-[repeat(2,1fr)] overflow-hidden px-0 pb-0 max-[350px]:text-xs">
                  <Link
                    href="/catalog/sfo"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    СФО
                  </Link>
                  <Link
                    href="/catalog/shuk"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    ШУК
                  </Link>
                  <Link
                    href="/catalog/sfotc"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    СФОЦ
                  </Link>
                  <Link
                    href="/catalog/teny"
                    className="block border border-black/20 px-4 py-3"
                    onClick={() => setOpen(false)}
                  >
                    ТЭНР
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      )}
    </div>
  );
}
