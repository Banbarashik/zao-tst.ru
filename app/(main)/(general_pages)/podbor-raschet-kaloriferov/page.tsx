import productData from "@/data/products.json";

import React from "react";

import type { Metadata } from "next";
import Image from "next/image";

import { ArrowBigDownDash } from "lucide-react";

import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import ProductLinks from "@/components/general_pages/productLinks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Расчет и подбор паровых калориферов",
  description:
    "Расчет и подбор паровых калориферов. Технические характеристики, расчетные таблицы и формулы для подбора воздухонагревателей КПСк КП КФБ с теплоносителем пар",
  keywords:
    "расчет и подбор парового калорифера,формула для расчета и подбора паровых калориферов,формула тепловой мощности парового калорифера,расчет производительности парового калорифера,расчет температурного напора парового калорифера,формула температурного напора парового калорифера,расчет калориферов кпск,расчет паровых калориферов кпск,подбор калориферов кпск,подбор паровых калориферов кпск",
};

export type CityTemp = {
  city: string;
  tColdPeriod: number;
  tColdest5Day: number;
};

const cityTemps: CityTemp[] = [
  { city: "Абакан", tColdPeriod: -27, tColdest5Day: -42 },
  { city: "Воронеж", tColdPeriod: -14, tColdest5Day: -25 },
  { city: "Краснотурьинск", tColdPeriod: -17, tColdest5Day: -32 },
  { city: "Омск", tColdPeriod: -23, tColdest5Day: -37 },
  { city: "Старый Оскол", tColdPeriod: -10, tColdest5Day: -24 },

  { city: "Алма-Ата", tColdPeriod: -10, tColdest5Day: -25 },
  { city: "Выборг", tColdPeriod: -13, tColdest5Day: -29 },
  { city: "Красноярск", tColdPeriod: -22, tColdest5Day: -40 },
  { city: "Орел", tColdPeriod: -13, tColdest5Day: -25 },
  { city: "Стерлитамак", tColdPeriod: -19, tColdest5Day: -34 },

  { city: "Альметьевск", tColdPeriod: -16, tColdest5Day: -32 },
  { city: "Гай", tColdPeriod: -18, tColdest5Day: -32 },
  { city: "Кстово", tColdPeriod: -14, tColdest5Day: -30 },
  { city: "Оренбург", tColdPeriod: -20, tColdest5Day: -29 },
  { city: "Сургут", tColdPeriod: -28, tColdest5Day: -40 },

  { city: "Ангарск", tColdPeriod: -25, tColdest5Day: -40 },
  { city: "Грозный", tColdPeriod: -7, tColdest5Day: -20 },
  { city: "Курган", tColdPeriod: -24, tColdest5Day: -34 },
  { city: "Орск", tColdPeriod: -21, tColdest5Day: -29 },
  { city: "Сухуми", tColdPeriod: 3, tColdest5Day: -3 },

  { city: "Апатиты", tColdPeriod: -18, tColdest5Day: -27 },
  { city: "Дзержинск", tColdPeriod: -14, tColdest5Day: -30 },
  { city: "Курск", tColdPeriod: -14, tColdest5Day: -24 },
  { city: "Павлодар", tColdPeriod: -23, tColdest5Day: -37 },
  { city: "Сызрань", tColdPeriod: -13, tColdest5Day: -30 },

  { city: "Арзамас", tColdPeriod: -16, tColdest5Day: -33 },
  { city: "Днепропетровск", tColdPeriod: -9, tColdest5Day: -24 },
  { city: "Липецк", tColdPeriod: -15, tColdest5Day: -26 },
  { city: "Пенза", tColdPeriod: -17, tColdest5Day: -27 },
  { city: "Сыктывкар", tColdPeriod: -20, tColdest5Day: -38 },

  { city: "Архангельск", tColdPeriod: -19, tColdest5Day: -32 },
  { city: "Донецк", tColdPeriod: -10, tColdest5Day: -24 },
  { city: "Львов", tColdPeriod: -7, tColdest5Day: -19 },
  { city: "Первоуральск", tColdPeriod: -17, tColdest5Day: -32 },
  { city: "Таганрог", tColdPeriod: -9, tColdest5Day: -24 },

  { city: "Астана", tColdPeriod: -22, tColdest5Day: -35 },
  { city: "Душанбе", tColdPeriod: -2, tColdest5Day: -14 },
  { city: "Магадан", tColdPeriod: -23, tColdest5Day: -35 },
  { city: "Пермь", tColdPeriod: -20, tColdest5Day: -34 },
  { city: "Тайшет", tColdPeriod: -26, tColdest5Day: -41 },

  { city: "Астрахань", tColdPeriod: -8, tColdest5Day: -22 },
  { city: "Екатеринбург", tColdPeriod: -20, tColdest5Day: -31 },
  { city: "Магнитогорск", tColdPeriod: -22, tColdest5Day: -34 },
  { city: "Петрозаводск", tColdPeriod: -14, tColdest5Day: -29 },
  { city: "Таллин", tColdPeriod: -9, tColdest5Day: -21 },

  { city: "Ачинск", tColdPeriod: -22, tColdest5Day: -40 },
  { city: "Елабуга", tColdPeriod: -17, tColdest5Day: -34 },
  { city: "Махачкала", tColdPeriod: -2, tColdest5Day: -14 },
  { city: "Петропавловск-Камчатский", tColdPeriod: -10, tColdest5Day: -19 },
  { city: "Тамбов", tColdPeriod: -15, tColdest5Day: -27 },

  { city: "Ашхабад", tColdPeriod: -2, tColdest5Day: -11 },
  { city: "Ереван", tColdPeriod: -8, tColdest5Day: -19 },
  { city: "Междуреченск", tColdPeriod: -24, tColdest5Day: -39 },
  { city: "Печора", tColdPeriod: -26, tColdest5Day: -47 },
  { city: "Ташкент", tColdPeriod: -6, tColdest5Day: -15 },

  { city: "Баку", tColdPeriod: 1, tColdest5Day: -4 },
  { city: "Запорожье", tColdPeriod: -9, tColdest5Day: -23 },
  { city: "Мелитополь", tColdPeriod: -9, tColdest5Day: -19 },
  { city: "Полоцк", tColdPeriod: -11, tColdest5Day: -26 },
  { city: "Тбилиси", tColdPeriod: 0, tColdest5Day: -7 },

  { city: "Балаково", tColdPeriod: -13, tColdest5Day: -25 },
  { city: "Заринск", tColdPeriod: -23, tColdest5Day: -36 },
  { city: "Миасс", tColdPeriod: -20, tColdest5Day: -34 },
  { city: "Псков", tColdPeriod: -11, tColdest5Day: -26 },
  { city: "Тверь", tColdPeriod: -15, tColdest5Day: -29 },

  { city: "Балашиха", tColdPeriod: -11, tColdest5Day: -26 },
  { city: "Иваново", tColdPeriod: -16, tColdest5Day: -28 },
  { city: "Минск", tColdPeriod: -10, tColdest5Day: -25 },
  { city: "Ревда", tColdPeriod: -17, tColdest5Day: -32 },
  { city: "Тольятти", tColdPeriod: -17, tColdest5Day: -29 },

  { city: "Барнаул", tColdPeriod: -23, tColdest5Day: -39 },
  { city: "Ижевск", tColdPeriod: -18, tColdest5Day: -35 },
  { city: "Минусинск", tColdPeriod: -27, tColdest5Day: -42 },
  { city: "Рига", tColdPeriod: -9, tColdest5Day: -20 },
  { city: "Томск", tColdPeriod: -24, tColdest5Day: -42 },

  { city: "Белгород", tColdPeriod: -12, tColdest5Day: -23 },
  { city: "Иркутск", tColdPeriod: -25, tColdest5Day: -38 },
  { city: "Мирный", tColdPeriod: -36, tColdest5Day: -51 },
  { city: "Ростов-на-Дону", tColdPeriod: -8, tColdest5Day: -22 },
  { city: "Тула", tColdPeriod: -14, tColdest5Day: -28 },

  { city: "Березники", tColdPeriod: -18, tColdest5Day: -34 },
  { city: "Йошкар-Ола", tColdPeriod: -18, tColdest5Day: -33 },
  { city: "Москва", tColdPeriod: -14, tColdest5Day: -25 },
  { city: "Рубцовск", tColdPeriod: -23, tColdest5Day: -38 },
  { city: "Тюмень", tColdPeriod: -21, tColdest5Day: -35 },

  { city: "Бийск", tColdPeriod: -24, tColdest5Day: -38 },
  { city: "Казань", tColdPeriod: -18, tColdest5Day: -30 },
  { city: "Мурманск", tColdPeriod: -18, tColdest5Day: -28 },
  { city: "Рыбинск", tColdPeriod: -15, tColdest5Day: -33 },
  { city: "Улан-Удэ", tColdPeriod: -28, tColdest5Day: -38 },

  { city: "Бишкек", tColdPeriod: -9, tColdest5Day: -23 },
  { city: "Калининград", tColdPeriod: -7, tColdest5Day: -18 },
  { city: "Набережные Челны", tColdPeriod: -16, tColdest5Day: -32 },
  { city: "Рязань", tColdPeriod: -16, tColdest5Day: -27 },
  { city: "Ульяновск", tColdPeriod: -18, tColdest5Day: -31 },

  { city: "Благовещенск", tColdPeriod: -25, tColdest5Day: -34 },
  { city: "Калуга", tColdPeriod: -14, tColdest5Day: -26 },
  { city: "Надым", tColdPeriod: -32, tColdest5Day: -47 },
  { city: "Самара", tColdPeriod: -18, tColdest5Day: -27 },
  { city: "Усть-Илимск", tColdPeriod: -30, tColdest5Day: -48 },

  { city: "Бодайбо", tColdPeriod: -37, tColdest5Day: -49 },
  { city: "Каменск-Уральский", tColdPeriod: -20, tColdest5Day: -38 },
  { city: "Нарьян-Мар", tColdPeriod: -20, tColdest5Day: -41 },
  { city: "Самарканд", tColdPeriod: -3, tColdest5Day: -13 },
  { city: "Усть-Каменогорск", tColdPeriod: -18, tColdest5Day: -33 },

  { city: "Братск", tColdPeriod: -30, tColdest5Day: -43 },
  { city: "Канск", tColdPeriod: -26, tColdest5Day: -42 },
  { city: "Нефтекамск", tColdPeriod: -19, tColdest5Day: -34 },
  { city: "Санкт-Петербург", tColdPeriod: -11, tColdest5Day: -25 },
  { city: "Уфа", tColdPeriod: -19, tColdest5Day: -29 },

  { city: "Брест", tColdPeriod: -8, tColdest5Day: -20 },
  { city: "Караганда", tColdPeriod: -20, tColdest5Day: -32 },
  { city: "Нефтеюганск", tColdPeriod: -25, tColdest5Day: -43 },
  { city: "Саранск", tColdPeriod: -15, tColdest5Day: -31 },
  { city: "Ухта", tColdPeriod: -21, tColdest5Day: -41 },

  { city: "Брянск", tColdPeriod: -13, tColdest5Day: -24 },
  { city: "Качканар", tColdPeriod: -17, tColdest5Day: -32 },
  { city: "Нижневартовск", tColdPeriod: -25, tColdest5Day: -43 },
  { city: "Сарапул", tColdPeriod: -18, tColdest5Day: -33 },
  { city: "Хабаровск", tColdPeriod: -23, tColdest5Day: -32 },

  { city: "Верхняя Салда", tColdPeriod: -17, tColdest5Day: -32 },
  { city: "Кемерово", tColdPeriod: -25, tColdest5Day: -39 },
  { city: "Нижний Новгород", tColdPeriod: -16, tColdest5Day: -30 },
  { city: "Саратов", tColdPeriod: -16, tColdest5Day: -25 },
  { city: "Ханты-Мансийск", tColdPeriod: -26, tColdest5Day: -42 },

  { city: "Верхоянск", tColdPeriod: -51, tColdest5Day: -60 },
  { city: "Киев", tColdPeriod: -10, tColdest5Day: -21 },
  { city: "Нижний Тагил", tColdPeriod: -21, tColdest5Day: -34 },
  { city: "Саяногорск", tColdPeriod: -24, tColdest5Day: -39 },
  { city: "Харьков", tColdPeriod: -11, tColdest5Day: -23 },

  { city: "Вильнюс", tColdPeriod: -9, tColdest5Day: -23 },
  { city: "Кириши", tColdPeriod: -10, tColdest5Day: -27 },
  { city: "Николаевск-на-Амуре", tColdPeriod: -25, tColdest5Day: -35 },
  { city: "Севастополь", tColdPeriod: 0, tColdest5Day: -11 },
  { city: "Чебоксары", tColdPeriod: -18, tColdest5Day: -32 },

  { city: "Владивосток", tColdPeriod: -16, tColdest5Day: -25 },
  { city: "Киров", tColdPeriod: -19, tColdest5Day: -31 },
  { city: "Новгород", tColdPeriod: -12, tColdest5Day: -27 },
  { city: "Северодвинск", tColdPeriod: -18, tColdest5Day: -36 },
  { city: "Челябинск", tColdPeriod: -20, tColdest5Day: -29 },

  { city: "Владикавказ", tColdPeriod: -5, tColdest5Day: -17 },
  { city: "Кишинев", tColdPeriod: -7, tColdest5Day: -15 },
  { city: "Новокузнецк", tColdPeriod: -23, tColdest5Day: -38 },
  { city: "Северск", tColdPeriod: -23, tColdest5Day: -39 },
  { city: "Череповец", tColdPeriod: -16, tColdest5Day: -31 },

  { city: "Владимир", tColdPeriod: -16, tColdest5Day: -27 },
  { city: "Когалым", tColdPeriod: -25, tColdest5Day: -43 },
  { city: "Новокуйбышевск", tColdPeriod: -13, tColdest5Day: -30 },
  { city: "Семипалатинск", tColdPeriod: -21, tColdest5Day: -38 },
  { city: "Чита", tColdPeriod: -30, tColdest5Day: -38 },

  { city: "Волгоград", tColdPeriod: -13, tColdest5Day: -22 },
  { city: "Комсомольск-на-Амуре", tColdPeriod: -27, tColdest5Day: -34 },
  { city: "Новороссийск", tColdPeriod: -2, tColdest5Day: -13 },
  { city: "Серпухов", tColdPeriod: -11, tColdest5Day: -26 },
  { city: "Шахты", tColdPeriod: -7, tColdest5Day: -21 },

  { city: "Волгодонск", tColdPeriod: -7, tColdest5Day: -21 },
  { city: "Королев", tColdPeriod: -11, tColdest5Day: -26 },
  { city: "Новосибирск", tColdPeriod: -24, tColdest5Day: -39 },
  { city: "Смоленск", tColdPeriod: -13, tColdest5Day: -26 },
  { city: "Энгельс", tColdPeriod: -13, tColdest5Day: -25 },

  { city: "Волжский", tColdPeriod: -11, tColdest5Day: -23 },
  { city: "Коряжма", tColdPeriod: -18, tColdest5Day: -36 },
  { city: "Новый Уренгой", tColdPeriod: -36, tColdest5Day: -50 },
  { city: "Соликамск", tColdPeriod: -18, tColdest5Day: -34 },
  { city: "Южно-Сахалинск", tColdPeriod: -15, tColdest5Day: -24 },

  { city: "Вологда", tColdPeriod: -16, tColdest5Day: -31 },
  { city: "Кострома", tColdPeriod: -16, tColdest5Day: -30 },
  { city: "Норильск", tColdPeriod: -34, tColdest5Day: -46 },
  { city: "Сочи", tColdPeriod: 2, tColdest5Day: -3 },
  { city: "Якутск", tColdPeriod: -45, tColdest5Day: -55 },

  { city: "Воркута", tColdPeriod: -26, tColdest5Day: -41 },
  { city: "Краснодар", tColdPeriod: -5, tColdest5Day: -19 },
  { city: "Одесса", tColdPeriod: -6, tColdest5Day: -17 },
  { city: "Ставрополь", tColdPeriod: -7, tColdest5Day: -18 },
  { city: "Ярославль", tColdPeriod: -16, tColdest5Day: -31 },
];

type Props = {
  data: CityTemp[];
  blocksPerRow?: number;
};

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

export function SteamHeaterTempTable({ data, blocksPerRow = 5 }: Props) {
  const rows = chunk(data, blocksPerRow);
  const totalCols = blocksPerRow * 3;

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          <tr>
            <th
              colSpan={totalCols}
              className="border px-2 py-2 text-center font-semibold"
            >
              РАСЧЕТНАЯ ТЕМПЕРАТУРА ДЛЯ ПОДБОРА ПАРОВЫХ КАЛОРИФЕРОВ
            </th>
          </tr>
          <tr>
            <th
              colSpan={3}
              style={{ fontSize: "11px" }}
              className="w-46 py-0.5"
            >
              ГОРОД
            </th>
            <th colSpan={6} style={{ fontSize: "11px" }}>
              СРЕДНЯЯ ТЕМПЕРАТУРА НАИБОЛЕЕ ХОЛОДНОГО ПЕРИОДА, °С
            </th>
            <th colSpan={6} style={{ fontSize: "11px" }}>
              СРЕДНЯЯ ТЕМПЕРАТУРА НАИБОЛЕЕ ХОЛОДНОЙ ПЯТИДНЕВКИ, °С
            </th>
          </tr>
        </thead>

        <tbody className="text-[10.7px]">
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {Array.from({ length: blocksPerRow }).map((_, bIdx) => {
                const item = row[bIdx];
                return (
                  <React.Fragment key={bIdx}>
                    <td className="px-2 py-0.5 text-right">
                      {item?.city ?? ""}
                    </td>
                    <td className="w-6 text-center tabular-nums">
                      {item
                        ? item.tColdPeriod <= 0
                          ? item.tColdPeriod
                          : `+${item.tColdPeriod}`
                        : ""}
                    </td>
                    <td className="w-6 text-center tabular-nums">
                      {item
                        ? item.tColdest5Day <= 0
                          ? item.tColdest5Day
                          : `+${item.tColdest5Day}`
                        : ""}
                    </td>
                  </React.Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PodborRaschetKaloriferovPage() {
  return (
    <>
      <Heading lvl={1} text="Подбор и расчет калорифера парового" />

      <section className="space-y-2">
        <Heading lvl={2} text="РАСЧЕТ И ПОДБОР КАЛОРИФЕРОВ КПСК КП КФБ-А" />
        <ProductParagraph className="mb-1">
          Расчет и подбор паровых калориферов осуществляется в следующей
          последовательности:
        </ProductParagraph>
        <ul className="space-y-1.5">
          {[
            "подсчет необходимой тепловой мощности для нагрева требуемого объема воздуха",
            "расчет площади фронтального сечения для прохода воздуха и подбор наиболее подходящих калориферов",
            "нахождение массовой скорости в фронтальном сечении выбранного парового теплообменника",
            "подсчет расхода пара",
            "вычисление коэффициента теплопередачи",
            "определение температурного напора",
            "нахождение фактической теплопроизводительности калорифера",
            "подсчет фактического расхода пара",
            "установление запаса площади поверхности теплообмена калориферов и их соответствия рекомендуемому диапазону",
            "расчет аэродинамического сопротивления",
            "итоговые показатели",
          ].map((item, i, arr) => (
            <li key={item} className="flex gap-2">
              <Link
                href={`/podbor-raschet-kaloriferov#anchor${i + 1}`}
                className="text-primary-darker hover:text-primary-dark flex font-bold"
              >
                <ArrowBigDownDash />
                <span>{i + 1}.</span>
              </Link>
              <span>
                {item}
                {i < arr.length - 1 ? ";" : "."}
              </span>
            </li>
          ))}
        </ul>
        <ProductParagraph className="text-[#5a769a]">
          Подробное описание устройства и принципа работы паровых
          теплообменников представлено на странице сайта: Паровые калориферы.
          Для онлайн подбора паровоздушных нагревателей можно воспользоваться
          калькулятором, выложенным на странице сайта: Калориферы приточные
          паровые.
        </ProductParagraph>
        <LinkButtonsBlock
          buttons={[
            {
              name: "ПАРОВЫЕ КАЛОРИФЕРЫ",
              url: "/kalorifer-par",
            },
            {
              name: "КАЛЬКУЛЯТОР ПАРОВОЙ КАЛОРИФЕР",
              url: "/kalorifery-par#anchor3",
            },
          ]}
        />
        <ProductParagraph>
          Все действия по подбору паровых воздухонагревателей КПСк, КП, КФБ-А П
          выложены в пошаговых расчетах. Прилагаются каталоги с характеристиками
          всех теплообменников, таблицы теплофизических свойств воздуха и пара,
          значения коэффициентов аппроксимации для каждого модельного ряда,
          приводятся пояснения и примеры к каждому вычислению.
        </ProductParagraph>
        <LinkButtonsBlock
          buttons={[
            {
              name: "РАСЧЕТНАЯ ТЕМПЕРАТУРА ВОЗДУХА",
              url: "/raschet-kaloriferov#anchor1",
            },
            {
              name: "МОДЕЛИ ПАРОВЫХ КАЛОРИФЕРОВ",
              url: "/kalorifer-par#anchor2",
            },
          ]}
        />
        <ProductParagraph className="text-[#5a769a]">
          Расчетная температура входящего воздуха подбирается в зависимости от
          технического задания и схемы включения парового калорифера в систему
          воздухообмена. При нагреве приточного воздуха в качестве исходных
          данных начальную температуру принимают по параметрам наружного воздуха
          согласно СНиП. В таблице представлены средние температуры наиболее
          холодного периода и наиболее холодной пятидневки для ряда городов.
          Если в таблице отсутствует ваш населенный пункт, следует принять
          показатели близлежащего города.
        </ProductParagraph>

        <SteamHeaterTempTable data={cityTemps} />
      </section>

      <section id="anchor1" className="space-y-4">
        <Heading lvl={2} text="РАСЧЕТ МОЩНОСТИ ПО ТЕПЛУ" />
        <div>
          <ProductParagraph>
            1. Находим тепловую мощность для нагрева необходимого объема
            воздуха.
          </ProductParagraph>
          <ol>
            <li>
              <ProductParagraph>
                1.1 Определяем массовый расход нагреваемого воздуха:{" "}
                <span className="text-2xl font-bold">G = V • р</span>
              </ProductParagraph>
              <ul>
                <li>G - массовый расход воздуха, кг/час;</li>
                <li>V - объемное количество нагреваемого воздуха, м³/час;</li>
                <li>
                  p - плотность воздуха при средней температуре входящего и
                  выходящего воздуха, кг/м³.
                </li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                1.2 Определяем расход теплоты для нагревания воздуха:{" "}
                <span className="text-2xl font-bold">
                  Q = G • c • (t <span className="font-normal">кон</span> - t{" "}
                  <span className="font-normal">нач</span>)
                </span>
              </ProductParagraph>
              <ul>
                <li>Q - требуемая тепловая мощность, Вт;</li>
                <li>G - массовый расход воздуха, кг/час;</li>
                <li>
                  с - удельная теплоемкость воздуха при средней температуре
                  входящего и выходящего воздуха, Дж/(кг•°С);
                </li>
                <li>
                  t кон - температура нагретого воздуха на выходе из
                  теплообменника, °С;
                </li>
                <li>
                  t нач - температура воздуха на входе в теплообменник, °С.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <iframe
          src="/legacy/table-raschet-podbor-kaloriferov-1.html"
          title="Таблица свойств воздуха"
          className="h-45 w-full"
        />
        <div className="text-[#6a2d2d]">
          <ProductParagraph>
            Пример расчета и подбора парового калорифера. ШАГ 1
          </ProductParagraph>
          <ProductParagraph>
            Подобрать паровой калорифер для нагрева приточного воздуха объемом
            9000 м³/час. Расчетная температура наружного воздуха принимается по
            средней температуре наиболее холодной пятидневки г. Барнаула -39°С.
            Температура в рабочей зоне производственного помещения +22°С.
            Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
          </ProductParagraph>
          <ProductParagraph>
            ДЕЙСТВИЕ 1. Определить тепловую мощность, необходимую для нагрева
            9000 м³/час с температуры -39 до +22 градусов.
          </ProductParagraph>
          <ol>
            <li>
              <ProductParagraph>
                1.1 Определяем массовый расход нагреваемого воздуха:{" "}
                <span className="text-xl font-bold">
                  G = 9000 • 1.34 = 12060 кг/час
                </span>
              </ProductParagraph>
              <ul>
                <li>G - массовый расход воздуха, кг/час;</li>
                <li>
                  9000 - объемное количество нагреваемого воздуха, м³/час;
                </li>
                <li>
                  1.34 - плотность воздуха при средней температуре воздуха
                  -8.5°С.
                </li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                1.2 Определяем расход теплоты для нагрева воздушного потока:{" "}
                <span className="block text-xl font-bold">
                  Q = (12060/3600) • 1006 • ((22-(-39)) = 3.35 • 1006 • 61 =
                  205576 Вт
                </span>
              </ProductParagraph>
              <ul>
                <li>Q - требуемая тепловая мощность, Вт;</li>
                <li>12060 - массовый расход воздуха, кг/час;</li>
                <li>
                  1006 - удельная теплоемкость воздуха при средней температуре
                  воздуха -8.5°С, Дж/(кг•°С);
                </li>
                <li>+22 – температура воздуха на выходе из калорифера, °С;</li>
                <li>-39 – температура воздуха на входе в калорифер, °С;</li>
                <li>61 – перепад температур воздуха, °С.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section id="anchor2" className="space-y-4">
        <Heading lvl={2} text="РАСЧЕТ ПЛОЩАДИ ФРОНТАЛЬНОГО СЕЧЕНИЯ" />
        <div>
          <ProductParagraph>
            2. Установив необходимую тепловую мощность определяем площадь
            фронтального сечения для прохода воздуха. Площадь фронтального
            сечения – внутреннее рабочее пространство парового калорифера с
            теплообменными трубками через которое непосредственно проходит поток
            нагнетаемого холодного воздуха.
          </ProductParagraph>
          <ProductParagraph>
            Площадь фронтального сечения определяем по формуле:{" "}
            <span className="text-2xl font-bold">f = G / v</span>
          </ProductParagraph>
          <ul>
            <li>f - площадь фронтального сечения, м²;</li>
            <li>G - массовый расход воздуха, кг/час;</li>
            <li>
              v - массовая скорость воздуха в фронтальном сечении калорифера,
              кг/(м²•с). Для спирально-накатных калориферов принимается в
              диапазоне 3-6 кг/(м²•с), допустимые значения – 1.5-8 кг/(м²•с)
            </li>
          </ul>
        </div>
        <div className="text-[#6a2d2d]">
          <ProductParagraph>
            Пример расчета и подбора парового калорифера. ШАГ 2
          </ProductParagraph>
          <ProductParagraph>
            Подобрать паровой калорифер для нагрева приточного воздуха объемом
            9000 м³/час. Расчетная температура наружного воздуха принимается по
            средней температуре наиболее холодной пятидневки г. Барнаула -39°С.
            Температура в рабочей зоне производственного помещения +22°С.
            Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
          </ProductParagraph>
          <ProductParagraph>
            ДЕЙСТВИЕ 2. Расчет площади фронтального сечения под весовой расход
            воздуха 12060 кг/час. Принимаем массовую скорость – 5.0 кг/(м²•с).
          </ProductParagraph>
          <ProductParagraph>
            Находим площадь фронтального сечения:{" "}
            <span className="text-xl font-bold">
              f = (12060/3600) / 5.0 = 0.670 м²
            </span>
          </ProductParagraph>
          <ul>
            <li>f - площадь фронтального сечения, м²;</li>
            <li>12060 - массовый расход воздуха, кг/час;</li>
            <li>5.0 - массовая скорость воздуха, кг/(м²•с).</li>
          </ul>
          <ProductParagraph>
            По результатам расчета найденная площадь фронтального сечения
            составляет 0.670 м². Ориентируясь на табличные данные паровых
            воздухонагревателей принимаем к подбору наиболее приближенные к
            этому значению модели: КПСк 2-10, КПСк 3-10, КПСк 4-10, КП 310, КП
            410 (площадь фронтального сечения этих теплообменников - 0.581 м²);
            КФБ-7 А3 и КФБ-7 А4 (0.619 м²); КФБ-8 А3 и КФБ-8 А4 (0.727 м²).
          </ProductParagraph>
        </div>
        <ProductParagraph className="text-[#5a769a]">
          Ниже представлена таблица с техническими характеристиками двух, трех и
          четырехрядных паровых воздухонагревателей производства ООО Т.С.Т.
          следующих серий: КП-02-УХЛ3, КФБ-А П УХЛ3, КПСк-02-У3. В таблице
          выложены данные необходимые для расчета и подбора: площадь поверхности
          нагрева и фронтального сечения, длина теплообменных элементов. Кликнув
          на модель выбранного парового теплообменника из таблицы можно
          ознакомиться с выполненными расчетными показателями на разные объем и
          температуру нагреваемого воздуха, давление и температуру
          теплоносителя.
        </ProductParagraph>
        <iframe
          src="/legacy/table-raschet-podbor-kaloriferov-2.html"
          title=""
          className="h-114 w-full"
        />
        <ProductParagraph className="text-[#5a769a]">
          Если при расчете определена площадь фронтального сечения, а в таблице
          для подбора паровых калориферов нет моделей с таким показателями,
          тогда принимаем два или более воздухонагревателя одного номера, чтобы
          сумма их площадей соответствовала или приближалась к нужному значению.
          Например, при расчете получилась требуемая площадь фронтального
          сечения 7.950 м². Паровоздушных теплообменников с такими
          характеристиками в таблице нет. Вариативно принимаем к подбору по три
          калорифера КПСк 2-12, КПСк 3-12, КПСк 4-12, КП 312, КП 412 (общая
          площадь сечения 7.464 м²); по четыре калорифера КФБ-14 А3, КФБ-14 А4
          (7.885 м²) и устанавливаем их по ходу движения воздушного потока
          параллельно. Нужная площадь фронтального сечения получается при
          компоновке трех или четырех воздухонагревателей. Калориферы одного
          номера имеют одинаковую площадь фронтального сечения. Выбор в пользу
          двух, трех или четырехрядной модели осуществляется с учетом
          поставленной задачи, параметров пара и требуемого нагрева воздуха на
          меньшую или большую разницу температур входящего и выходящего воздуха.
        </ProductParagraph>
      </section>
    </>
  );
}
