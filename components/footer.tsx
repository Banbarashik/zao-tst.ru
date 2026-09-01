"use client";

import Link from "next/link";

import { Cog, Factory, Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-accent/80 border-t-3 bg-[#303030] pt-5 text-white"
    >
      {/* ВЕРХНИЙ БЛОК - МОБИЛЬНЫЙ */}
      <Accordion
        type="single"
        collapsible
        className="space-y-6 px-3 pb-6 md:hidden"
      >
        {/* 1-й столбик - ИНФОРМАЦИЯ И ДОКУМЕНТЫ */}
        <AccordionItem value="info-documents" className="mb-2 border-0">
          <AccordionTrigger className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white hover:no-underline [&>svg]:text-white">
            Информация и документы
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-0">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/documents/Company_zao_tst_card.pdf"
                  target="_blank"
                  className="hover:text-accent"
                >
                  Карточка предприятия
                </Link>
              </li>
              <li>
                <Link href="/produkciya#dostavka" className="hover:text-accent">
                  Оплата и доставка
                </Link>
              </li>
              <li>
                <Link
                  href="/produkciya#sertifikat"
                  className="hover:text-accent"
                >
                  Сертификаты соответствия
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/Price_list_zao_tst_2025.pdf"
                  target="_blank"
                  className="hover:text-accent"
                >
                  Прайс-лист
                </Link>
              </li>
              <li>
                <Link href="/personal-data" className="hover:text-accent">
                  Политика обработки персональных данных
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* 2-й столбик - КАТАЛОГ ОБОРУДОВАНИЯ */}
        <AccordionItem value="catalog-equipment" className="mb-2 border-0">
          <AccordionTrigger className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white hover:no-underline [&>svg]:text-white">
            Каталог оборудования
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-0">
            <ul className="space-y-4">
              <li>
                <Link href="/kalorifery-voda" className="hover:text-accent">
                  Приточные водяные калориферы КПВС, КПВУ
                </Link>
              </li>
              <li>
                <Link href="/kalorifery-par" className="hover:text-accent">
                  Приточные паровые калориферы КППС, КППУ
                </Link>
              </li>
              <li>
                Калориферы{" "}
                <Link href="/kalorifery-ksk" className="hover:text-accent">
                  КСк
                </Link>
                ,{" "}
                <Link href="/kalorifery-kpsk" className="hover:text-accent">
                  КПСк
                </Link>
                ,{" "}
                <Link href="/kalorifery-tvv" className="hover:text-accent">
                  ТВВ
                </Link>
                ,{" "}
                <Link href="/kalorifery-kp" className="hover:text-accent">
                  КП
                </Link>
                ,{" "}
                <Link href="/kalorifery-kfb-a" className="hover:text-accent">
                  КФБ-А М
                </Link>
                ,{" "}
                <Link href="/kalorifery-kfb" className="hover:text-accent">
                  КФБ-А П
                </Link>
              </li>
              <li>
                Агрегаты{" "}
                <Link href="/ao2-ksk-kpsk" className="hover:text-accent">
                  АО2 В
                </Link>
                ,{" "}
                <Link href="/ao2-kpsk-ksk" className="hover:text-accent">
                  АО2 П
                </Link>
                ,{" "}
                <Link href="/avo-tvv-kp" className="hover:text-accent">
                  АВО ХЛ
                </Link>
                ,{" "}
                <Link href="/std300-ksk-kpsk" className="hover:text-accent">
                  СТД-300 В
                </Link>
                ,{" "}
                <Link href="/std300-tvv-kp" className="hover:text-accent">
                  СТД-300 П
                </Link>
              </li>
              <li>
                Электронагревательное оборудование{" "}
                <Link href="/elektronagrevateli" className="hover:text-accent">
                  СФО
                </Link>
                ,{" "}
                <Link href="/teploventilyatory" className="hover:text-accent">
                  СФОЦ
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* 3-й столбик - БЛОК РАСЧЕТА И ПОДБОРА */}
        <AccordionItem value="calculation-selection" className="border-0">
          <AccordionTrigger className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white hover:no-underline [&>svg]:text-white">
            Блок расчета и подбора
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-0">
            <ul className="space-y-4">
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
          </AccordionContent>
        </AccordionItem>

        {/* 4-й столбик - КОНТАКТЫ ПРЕДПРИЯТИЯ */}
        <div className="space-y-6">
          <p className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white hover:no-underline [&>svg]:text-white">
            Контакты предприятия
          </p>
          <address className="not-italic">
            <ul className="space-y-3.5">
              <li className="flex items-center">
                <a
                  href="tel:+79617378314"
                  className="peer hover:text-accent pl-2 text-white transition-colors"
                >
                  8-961-737-83-14
                </a>
                <div className="peer-hover:bg-accent order-first w-min rounded-full bg-white p-1.5 transition-colors">
                  <Phone
                    fill="#303030"
                    strokeWidth={0}
                    width={14}
                    height={14}
                  />
                </div>

                <span className="hidden text-white sm:inline">
                  . Технический отдел
                </span>
              </li>

              <li className="flex items-center">
                <a
                  href="tel:+79049681488"
                  className="peer hover:text-accent pl-2 text-white transition-colors"
                >
                  8-904-968-14-88
                </a>
                <div className="peer-hover:bg-accent order-first w-min rounded-full bg-white p-1.5 transition-colors">
                  <Phone
                    fill="#303030"
                    strokeWidth={0}
                    width={14}
                    height={14}
                  />
                </div>

                <span className="hidden text-white sm:inline">
                  . Отдел продаж
                </span>
              </li>

              <li className="flex items-center">
                <a
                  href="mailto:zao_tst@mail.ru"
                  className="peer hover:text-accent pl-2 text-white transition-colors"
                >
                  zao_tst@mail.ru
                </a>
                <div className="peer-hover:bg-accent order-first w-min rounded-full bg-white p-1.25 transition-colors">
                  <Mail stroke="#303030" width={16} height={16} />
                </div>

                <span className="hidden text-white">. Электронная почта</span>
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
      </Accordion>

      {/* ВЕРХНИЙ БЛОК - КОМПЬЮТЕРНЫЙ */}
      <div className="mx-auto hidden max-w-406 grid-cols-2 justify-between space-y-6 px-3 pb-6 md:grid lg:px-6 xl:grid-cols-4 xl:gap-10 xl:text-sm 2xl:flex">
        {/* 1-й столбик - ИНФОРМАЦИЯ И ДОКУМЕНТЫ */}
        <div className="space-y-6">
          <p className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white">
            Информация и документы
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/documents/Company_zao_tst_card.pdf"
                target="_blank"
                className="hover:text-accent"
              >
                Карточка предприятия
              </Link>
            </li>
            <li>
              <Link href="/produkciya#dostavka" className="hover:text-accent">
                Оплата и доставка
              </Link>
            </li>
            <li>
              <Link href="/produkciya#sertifikat" className="hover:text-accent">
                Сертификаты соответствия
              </Link>
            </li>
            <li>
              <Link
                href="/documents/Price_list_zao_tst_2025.pdf"
                target="_blank"
                className="hover:text-accent"
              >
                Прайс-лист
              </Link>
            </li>
            <li>
              <Link href="/personal-data" className="hover:text-accent">
                Политика обработки персональных данных
              </Link>
            </li>
          </ul>
        </div>

        {/* 2-й столбик - КАТАЛОГ ОБОРУДОВАНИЯ */}
        <div className="space-y-6">
          <p className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white">
            Каталог оборудования
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/kalorifery-voda" className="hover:text-accent">
                Приточные водяные калориферы КПВС, КПВУ
              </Link>
            </li>
            <li>
              <Link href="/kalorifery-par" className="hover:text-accent">
                Приточные паровые калориферы КППС, КППУ
              </Link>
            </li>
            <li>
              Калориферы{" "}
              <Link href="/kalorifery-ksk" className="hover:text-accent">
                КСк
              </Link>
              ,{" "}
              <Link href="/kalorifery-kpsk" className="hover:text-accent">
                КПСк
              </Link>
              ,{" "}
              <Link href="/kalorifery-tvv" className="hover:text-accent">
                ТВВ
              </Link>
              ,{" "}
              <Link href="/kalorifery-kp" className="hover:text-accent">
                КП
              </Link>
              ,{" "}
              <Link href="/kalorifery-kfb-a" className="hover:text-accent">
                КФБ-А М
              </Link>
              ,{" "}
              <Link href="/kalorifery-kfb" className="hover:text-accent">
                КФБ-А П
              </Link>
            </li>
            <li>
              Агрегаты{" "}
              <Link href="/ao2-ksk-kpsk" className="hover:text-accent">
                АО2 В
              </Link>
              ,{" "}
              <Link href="/ao2-kpsk-ksk" className="hover:text-accent">
                АО2 П
              </Link>
              ,{" "}
              <Link href="/avo-tvv-kp" className="hover:text-accent">
                АВО ХЛ
              </Link>
              ,{" "}
              <Link href="/std300-ksk-kpsk" className="hover:text-accent">
                СТД-300 В
              </Link>
              ,{" "}
              <Link href="/std300-tvv-kp" className="hover:text-accent">
                СТД-300 П
              </Link>
            </li>
            <li>
              Электронагревательное оборудование{" "}
              <Link href="/elektronagrevateli" className="hover:text-accent">
                СФО
              </Link>
              ,{" "}
              <Link href="/teploventilyatory" className="hover:text-accent">
                СФОЦ
              </Link>
            </li>
          </ul>
        </div>

        {/* 3-й столбик - БЛОК РАСЧЕТА И ПОДБОРА */}
        <div className="space-y-6">
          <p className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white">
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
          <p className="border-b-2 border-white/10 pb-4 text-left text-lg font-bold text-white hover:no-underline [&>svg]:text-white">
            Контакты предприятия
          </p>
          <address className="not-italic">
            <ul className="space-y-2">
              <li className="flex items-center">
                <a
                  href="tel:+79617378314"
                  className="peer hover:text-accent pl-2 text-white transition-colors"
                >
                  8-961-737-83-14
                </a>
                <div className="peer-hover:bg-accent order-first w-min rounded-full bg-white p-1.5 transition-colors">
                  <Phone
                    fill="#303030"
                    strokeWidth={0}
                    width={14}
                    height={14}
                  />
                </div>

                <span className="text-white">. Технический отдел</span>
              </li>

              <li className="flex items-center">
                <a
                  href="tel:+79049681488"
                  className="peer hover:text-accent pl-2 text-white transition-colors"
                >
                  8-904-968-14-88
                </a>
                <div className="peer-hover:bg-accent order-first w-min rounded-full bg-white p-1.5 transition-colors">
                  <Phone
                    fill="#303030"
                    strokeWidth={0}
                    width={14}
                    height={14}
                  />
                </div>

                <span className="text-white">. Отдел продаж</span>
              </li>

              <li className="flex items-center">
                <a
                  href="mailto:zao_tst@mail.ru"
                  className="peer hover:text-accent pl-2 text-white transition-colors"
                >
                  zao_tst@mail.ru
                </a>
                <div className="peer-hover:bg-accent order-first w-min rounded-full bg-white p-1.25 transition-colors">
                  <Mail stroke="#303030" width={16} height={16} />
                </div>

                <span className="text-white">. Электронная почта</span>
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
      <div className="border-t border-white/10 bg-[#454545]">
        <div className="mx-auto flex max-w-406 flex-col justify-between gap-1 px-3 py-2 text-[13px] lg:flex-row lg:px-6">
          <p className="flex flex-wrap gap-x-1 sm:gap-2">
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
