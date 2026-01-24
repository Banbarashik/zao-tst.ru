import React from "react";

import type { Metadata } from "next";
import Image from "next/image";

import { ArrowBigDownDash } from "lucide-react";

import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import Link from "next/link";
import SaturatedSteamPropertiesTable from "@/components/general_pages/saturatedSteamPropertiesTable";
import CalcHeatTransferCoefficientTables from "@/components/general_pages/calcHeatTransferCoefficientTables";
import CalcAerodynamicResistanceTables from "@/components/general_pages/calcAerodynamicResistanceTables";

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

type KaloriferPropColumn<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

const kaloriferPropColumns /* : KaloriferPropColumn<{
  name: string;
  heatReserve: number;
  resistance: number;
  dimensions: string;
  weight: number;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}>[] */ = [
  {
    key: "name",
    label: "Наименование парового калорифера",
  },
  {
    key: "heatReserve",
    label: "Запас поверхности нагрева, %",
    render: (value: number) => (value > 0 ? `+${value}` : String(value)),
  },
  {
    key: "resistance",
    label: "Аэродинамическое сопротивление, Па",
  },
  {
    key: "dimensions",
    label: "Внешние габаритные размеры, мм",
  },
  {
    key: "weight",
    label: "Масса, кг",
  },
] as const;

const kaloriferProps = [
  {
    name: "Калорифер КПСк 2-10",
    heatReserve: -37,
    resistance: 105,
    dimensions: "1357 × 572 × 180",
    weight: 46,
  },
  {
    name: "Калорифер КПСк 3-10",
    heatReserve: -7,
    resistance: 150,
    dimensions: "1357 × 572 × 180",
    weight: 65,
  },
  {
    name: "Калорифер КПСк 4-10",
    heatReserve: 19,
    resistance: 214,
    dimensions: "1357 × 572 × 180",
    weight: 79,
  },
  {
    name: "Калорифер КП 310",
    heatReserve: 3,
    resistance: 167,
    dimensions: "1357 × 572 × 180",
    weight: 74,
  },
  {
    name: "Калорифер КП 410",
    heatReserve: 20,
    resistance: 221,
    dimensions: "1357 × 572 × 220",
    weight: 92,
  },
  {
    name: "Калорифер КФБ-7 A3",
    heatReserve: 12,
    resistance: 148,
    dimensions: "1060 × 790 × 180",
    weight: 87,
  },
  {
    name: "Калорифер КФБ-7 A4",
    heatReserve: 31,
    resistance: 196,
    dimensions: "1060 × 790 × 220",
    weight: 116,
  },
  {
    name: "Калорифер КФБ-8 A3",
    heatReserve: 21,
    resistance: 110,
    dimensions: "1210 × 790 × 180",
    weight: 100,
  },
  {
    name: "Калорифер КФБ-8 A4",
    heatReserve: 41,
    resistance: 146,
    dimensions: "1210 × 790 × 220",
    weight: 133,
  },
];

function KaloriferPropsTable<T extends Record<string, unknown>>({
  columns,
  data,
}: {
  columns: readonly KaloriferPropColumn<T>[];
  data: readonly T[];
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 text-black xl:min-w-auto">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="px-2 py-1">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => {
                const value = row[col.key];

                return (
                  <td
                    key={String(col.key)}
                    className={colIndex === 0 ? "py-0.5 pl-1.5 text-left" : ""}
                  >
                    {col.render ? col.render(value, row) : String(value)}
                  </td>
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

      <section className="mb-4 space-y-5">
        <Heading lvl={2} text="Расчет и подбор калориферов КПСК КП КФБ-А П" />
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
            "расчет и подбор многорядных паровых установок для технологического нагрева",
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
              name: "Паровые калориферы",
              url: "/kalorifer-par",
            },
            {
              name: "Калькулятор паровой калорифер",
              url: "/kalorifery-par#anchor3",
            },
          ]}
        />
        <div className="mb-12 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-1000/500 w-full">
            <Image
              src="/img/general_pages/kalorifer_podbor_par.png"
              alt="Расчет площади фронтального сечения парового калорифера"
              title="Расчет парового калорифера"
              fill
            />
          </div>
          <div className="relative aspect-1000/500 w-full">
            <Image
              src="/img/general_pages/kalorifer_podbor_steam.png"
              alt="Расчет массовой скорости в фронтальном сечении парового калорифера"
              title="Подбор парового калорифера"
              fill
            />
          </div>
        </div>
        <ProductParagraph>
          Все действия по подбору паровых воздухонагревателей КПСк, КП, КФБ-А П
          производства нашего завода выложены в пошаговых расчетах. Прилагаются
          каталоги с характеристиками всех биметаллических теплообменников,
          таблицы теплофизических свойств воздуха и пара, значения коэффициентов
          аппроксимации для каждого модельного ряда, приводятся пояснения и
          примеры к каждому вычислению.
        </ProductParagraph>
        <LinkButtonsBlock
          buttons={[
            {
              name: "Расчетная температура воздуха",
              url: "/raschet-kaloriferov#anchor1",
            },
            {
              name: "Модели паровых калориферов",
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

      <section id="anchor1" className="mb-4 space-y-4">
        <Heading lvl={2} text="Расчет мощности по теплу" />
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
                  p - плотность воздуха при средней температуре на входе и
                  выходе из калорифера, кг/м³.
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
                  с - удельная теплоемкость воздуха при средней температуре на
                  входе и выходе из калорифера, Дж/(кг•°С);
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
          className="h-46 w-full"
        />
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 1
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
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
                    1.34 - плотность воздуха при средней температуре -8.5°С.
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
                    -8.5°С, Дж/(кг•°С);
                  </li>
                  <li>
                    +22 – температура воздуха на выходе из калорифера, °С;
                  </li>
                  <li>-39 – температура воздуха на входе в калорифер, °С;</li>
                  <li>61 – перепад температур воздуха, °С.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="anchor2" className="mb-4 space-y-4">
        <Heading lvl={2} text="Расчет площади фронтального сечения" />
        <div>
          <ProductParagraph>
            2. Установив необходимую тепловую мощность, определяем площадь
            фронтального сечения для прохода воздуха. Площадь фронтального
            сечения – внутреннее рабочее пространство парового калорифера с
            теплообменными трубками, через которое непосредственно проходит
            поток нагнетаемого холодного воздуха.
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
              диапазоне 3-6 кг/(м²•с), допустимые значения от 1.5 до 8 кг/(м²•с)
            </li>
          </ul>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 2
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
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
              По результатам расчета, найденная площадь фронтального сечения
              составляет 0.670 м². Ориентируясь на табличные данные паровых
              промышленных воздухонагревателей, принимаем к подбору наиболее
              приближенные к этому значению модели приточных установок: КПСк
              2-10, КПСк 3-10, КПСк 4-10, КП 310, КП 410 (площадь фронтального
              сечения теплообменников - 0.581 м²); КФБ-7 А3 и КФБ-7 А4 (0.619
              м²); КФБ-8 А3 и КФБ-8 А4 (0.727 м²).
            </ProductParagraph>
          </div>
        </div>
        <ProductParagraph className="text-[#5a769a]">
          Ниже представлена таблица с техническими характеристиками двух, трех и
          четырехрядных паровых воздухонагревателей производства ООО Т.С.Т.
          следующих серий: КП-02-УХЛ3, КФБ-А П УХЛ3, КПСк-02-У3. В таблице
          выложены данные, необходимые для расчета и подбора: площадь
          поверхности нагрева и фронтального сечения, длина теплообменных
          элементов. Кликнув на модель выбранного парового теплообменника из
          таблицы, можно ознакомиться с выполненными расчетными показателями на
          разные объем и температуру нагреваемого воздуха, давление и
          температуру теплоносителя.
        </ProductParagraph>
        <iframe
          src="/legacy/table-raschet-podbor-kaloriferov-2.html"
          title=""
          className="h-115 w-full"
        />
        <ProductParagraph className="text-[#5a769a]">
          Если при поверочном расчете определена площадь фронтального сечения, а
          в таблице для подбора паровых калориферов нет моделей с таким
          показателями, тогда принимаем два или более оребренных
          воздухонагревателя одного номера, чтобы сумма их площадей
          соответствовала или приближалась к нужному значению. Например, при
          расчете получилась требуемая общая площадь фронтального сечения 7.950
          м². Паровоздушных алюминиевых теплообменников приточных камер с такими
          характеристиками в таблице нет. Вариативно принимаем к подбору по три
          калорифера КПСк 2-12, КПСк 3-12, КПСк 4-12, КП 312, КП 412 (общая
          площадь сечения 7.464 м²); по четыре калорифера КФБ-14 А3, КФБ-14 А4
          (7.885 м²) и устанавливаем их по ходу движения воздушного потока
          параллельно. Необходимая площадь фронтального сечения получается при
          компоновке трех или четырех спирально-накатных воздухонагревателей.
          Калориферы одного номера, в независимости от рядности имеют одинаковую
          площадь фронтального сечения. Выбор в пользу двух, трех или
          четырехрядной модели осуществляется с учетом поставленной задачи,
          параметров пара и требуемого нагрева воздуха на меньшую или большую
          разницу температур входящего и выходящего воздуха.
        </ProductParagraph>
      </section>

      <section id="anchor3" className="mb-4 space-y-4">
        <Heading
          lvl={2}
          text="Расчет массовой скорости воздуха"
          className="mb-0"
        />
        <div>
          <ProductParagraph>
            3. Находим действительную массовую скорость для выбранных
            калориферов:{" "}
            <span className="text-2xl font-bold">
              v = G / F <sub>ф</sub>
            </span>
          </ProductParagraph>
          <ul>
            <li>v – массовая скорость в фронтальном сечении, кг/(м²•с);</li>
            <li>G - массовый расход воздуха, кг/час;</li>
            <li>
              F <sub>ф</sub> - площадь действительного фронтального сечения
              подобранного парового теплообменника, принимаемого в расчет, м².
            </li>
          </ul>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 3
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 3. Найти действительную массовую скорость в фронтальном
              сечении теплообменников, выбранных для расчета и подбора.
              Принимаем воздухонагреватели КПСк и КП 10-го номера, КФБ-А 7-го и
              8-го номеров, как имеющие приближенное значение по фронтальному
              сечению для прохода воздуха: 0.581 м², 0.619 м², 0.727 м²
              соответственно. Массовая скорость в фронтальном сечении каждого
              парового промышленного воздухоподогревателя одного номера, вне
              зависимости от рядности, будет одинакова.
            </ProductParagraph>
            <FormulasList>
              <li className="flex items-baseline justify-between gap-2">
                Калориферы КПСк и КП 10-го номера
                <span className="block text-xl font-bold">
                  v = (12060/3600) / 0.581 = 5.77 кг/(м²•с)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калориферы КФБ-А 7-го номера
                <span className="block text-xl font-bold">
                  v = (12060/3600) / 0.619 = 5.41 кг/(м²•с)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калориферы КФБ-А 8-го номера
                <span className="block text-xl font-bold">
                  v = (12060/3600) / 0.727 = 4.61 кг/(м²•с)
                </span>
              </li>
            </FormulasList>
            <ul>
              <li>v – массовая скорость в фронтальном сечении, кг/(м²•с);</li>
              <li>12060 - массовый расход воздуха, кг/час;</li>
              <li>
                0.581, 0.619, 0.727 - площадь фронтального сечения калориферов
                КПСк, КП, КФБ-А принимаемых в расчет, м².
              </li>
            </ul>
          </div>
        </div>
        <LinkButtonsBlock
          buttons={[
            {
              name: "Массовая скорость воздуха",
              url: "/raschet-kaloriferov#anchor2",
            },
            {
              name: "Параметры водяного пара",
              url: "/kalorifer-par#anchor1",
            },
          ]}
        />
      </section>

      <section id="anchor4" className="mb-4 space-y-4">
        <Heading lvl={2} text="Расчет расхода пара для нагрева" />
        <div>
          <ProductParagraph>
            4. Рассчитываем расход пара, исходя из требуемой тепловой мощности
            для нагрева заданного объема воздуха.{" "}
            <span className="block text-2xl font-bold">
              G <sub className="font-normal">пар</sub> = Q / r{" "}
              <sub className="font-normal">пар</sub>
            </span>
          </ProductParagraph>
          <ul>
            <li>
              G <sub>ПАР</sub> – расход пара, кг/сек;
            </li>
            <li>Q - расход тепла для нагрева воздуха, Вт;</li>
            <li>
              r <sub>ПАР</sub> - скрытая теплота парообразования, Дж/кг
            </li>
          </ul>
        </div>
        <ProductParagraph className="text-secondary-text">
          Скрытая теплота парообразования или конденсации отображает количество
          энергии, которое расходуется для превращения одного килограмма кипящей
          воды при определенном давлении в килограмм пара. Такое же количество
          тепла высвобождается при конденсации килограмма пара в килограмм воды.
          С увеличением давления температура вскипания воды увеличивается, а
          скрытая теплота парообразования, наоборот, уменьшается. Значение
          принимается с учетом параметров используемого теплоносителя по
          выложенной таблице теплофизических свойств насыщенного водяного пара.
        </ProductParagraph>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 4
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 4. Рассчитать потребление сухого насыщенного пара
              давлением 0.1 МПа для нагрева приточного воздуха объемом 9000
              м³/час от -39°С до +22°С.
            </ProductParagraph>
            <ProductParagraph>
              Подсчет расхода пара:{" "}
              <span className="text-xl font-bold">
                G <sub>пар</sub> = 205576 / 2257510 = 0.091 кг/сек = 328 кг/час
              </span>
            </ProductParagraph>
            <ul>
              <li>
                G <sub>ПАР</sub> – расход пара, кг/сек;
              </li>
              <li>205576 - расход тепла для нагрева воздуха, Вт;</li>
              <li>
                2257510 - скрытая теплота парообразования (Дж/кг) насыщенного
                пара давлением 0.1 МПа, принимается по таблице: 2257.51 кДж/кг =
                2257510 Дж/кг.
              </li>
            </ul>
          </div>
        </div>
        <SaturatedSteamPropertiesTable />
      </section>

      <section id="anchor5" className="mb-4 space-y-4">
        <Heading lvl={2} text="Расчет коэффициента теплопередачи" />
        <div>
          <ProductParagraph>
            5. Произвести расчет коэффициента теплопередачи выбранных паровых
            воздухонагревателей приточной вентиляции. Коэффициент теплопередачи
            можно установить двумя способами: используя формулу со значениями,
            полученными на основе обработки экспериментальных данных;
            воспользовавшись таблицами с рассчитанными результатами по каждой
            модели спирально-накатных калориферов, выпускаемых нашим
            предприятием.
          </ProductParagraph>
          <ProductParagraph>
            Формула для нахождения коэффициента теплопередачи имеет вид:{" "}
            <span className="text-2xl font-bold">
              К = A • v <sup>n</sup> • L <sup>r</sup>
            </span>
          </ProductParagraph>
          <ul>
            <li>К – коэффициент теплопередачи, Вт/(м²•°С);</li>
            <li>
              v - действительная массовая скорость воздуха в подобранном
              паровоздушном калорифере, кг/м²•с;
            </li>
            <li>
              L - длина теплоотдающего элемента в свету принятого по табличным
              данным ребристого воздухоподогревателя, м;
            </li>
            <li>A, n, r - значение модуля и степеней из таблицы.</li>
          </ul>
        </div>
        <CalcHeatTransferCoefficientTables />
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 5
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 5. Находим коэффициент теплопередачи для паровых
              воздухонагревателей, выбранных для расчета и подбора. Принимаем
              модели КПСк 2-10, КПСк 3-10, КПСк 4-10, КП 310, КП 410 с массовой
              скоростью 5.77 кг/(м²•с), КФБ-7 А3 и КФБ-7 А4 с массовой скоростью
              5.41 кг/(м²•с), КФБ-8 А3 и КФБ-8 А4 с массовой скоростью в
              фронтальном сечении 4.61 кг/(м²•с). Длину теплообменных элементов
              по каждому калориферу берем из таблицы с характеристиками.
            </ProductParagraph>
            <FormulasList>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КПСк 2-10
                <span className="text-xl font-bold">
                  К = 34.3 • 5.77 <sup>0.357</sup> • 1.155 <sup>-0.072</sup> =
                  63.50 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КПСк 3-10
                <span className="text-xl font-bold">
                  К = 30.3 • 5.77 <sup>0.405</sup> • 1.155 <sup>-0.066</sup> =
                  61.08 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КПСк 4-10
                <span className="text-xl font-bold">
                  К = 26.1 • 5.77 <sup>0.476</sup> • 1.155 <sup>-0.036</sup> =
                  59.81 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КП 310
                <span className="text-xl font-bold">
                  К = 43.5 • 5.77 <sup>0.431</sup> • 1.155 <sup>-0.072</sup> =
                  91.64 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КП 410
                <span className="text-xl font-bold">
                  К = 37.2 • 5.77 <sup>0.452</sup> • 1.155 <sup>-0.063</sup> =
                  81.40 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-7 А3
                <span className="text-xl font-bold">
                  К = 43.5 • 5.41 <sup>0.431</sup> • 0.860 <sup>-0.072</sup> =
                  91.04 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-7 А4
                <span className="text-xl font-bold">
                  К = 37.2 • 5.41 <sup>0.452</sup> • 0.860 <sup>-0.063</sup> =
                  80.59 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-8 А3
                <span className="text-xl font-bold">
                  К = 43.5 • 4.61 <sup>0.431</sup> • 1.010 <sup>-0.072</sup> =
                  83.96 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-8 А4
                <span className="text-xl font-bold">
                  К = 37.2 • 4.61 <sup>0.452</sup> • 1.010 <sup>-0.063</sup> =
                  74.14 Вт/(м²•°C)
                </span>
              </li>
            </FormulasList>
          </div>
        </div>
        <ProductParagraph className="text-secondary-text">
          Подробное описание нахождения коэффициента теплопередачи паровых
          биметаллических калориферов и таблицы с расчетными данными по каждой
          модели можно посмотреть на странице сайта: Коэффициент теплопередачи
          паровых калориферов.
        </ProductParagraph>
        <LinkButtonsBlock
          buttons={[
            {
              name: "Расчет коэффициентов пар",
              url: "/koefficient-teploperedachi-parovyh-kaloriferov#anchor2",
            },
            {
              name: "Таблицы коэффициентов пар",
              url: "/koefficient-teploperedachi-parovyh-kaloriferov#anchor3",
            },
          ]}
        />
      </section>

      <section id="anchor6" className="mb-4 space-y-4">
        <Heading lvl={2} text="Расчет температурного напора" />
        <ProductParagraph>
          6. Выполнить расчет среднего по поверхности температурного напора.
          Ниже представлена формула для определения температурного напора с
          использованием значений среднелогарифмической разности температур пара
          и воздуха на входе и выходе из калорифера. Вычисления проводятся с
          помощью калькулятора с функцией нахождения логарифма.
        </ProductParagraph>
        <ProductParagraph className="text-secondary-text">
          Принцип работы паровоздушного калорифера построен на теплообмене двух
          сред, которые можно разделить на два потока или контура: первый контур
          или греющая сторона - теплоноситель пар, второй контур или нагреваемая
          сторона - теплоноситель воздух. Нагрев воздуха происходит за счет
          передачи тепла выделяемого при конденсации пара. Температура с горячей
          стороны остается неизменной, температура с холодной стороны
          повышается. Чем больше разница температур потоков, тем эффективней
          происходит теплообмен.
        </ProductParagraph>
        <div>
          <ProductParagraph>
            Средний логарифмический температурный напор рассчитывается в
            следующей последовательности:
          </ProductParagraph>
          <ol>
            <li>
              <ProductParagraph>
                - определяется разница температур двух потоков в их крайних
                точках
              </ProductParagraph>
              <ProductParagraph className="text-2xl font-bold">
                Δ T <sub>Б</sub> = T s - t{" "}
                <span className="font-normal">нач</span>
              </ProductParagraph>
              <ProductParagraph className="text-2xl font-bold">
                Δ T <sub>М</sub> = T s - t{" "}
                <span className="font-normal">кон</span>
              </ProductParagraph>
              <ul>
                <li>
                  Δ T <sub>Б</sub> - большая разность температур между первичным
                  теплоносителем и вторичным теплоносителем на входе в
                  теплообменник, °С;
                </li>
                <li>
                  Δ T <sub>М</sub> - меньшая разность температур между первичным
                  теплоносителем и вторичным теплоносителем на выходе из
                  теплообменника, °С;
                </li>
                <li>
                  T s - температура пара при соответствующем давлении, °С;
                </li>
                <li>
                  t нач - температура холодного воздуха на входе в оребренный
                  теплообменник, °С;
                </li>
                <li>
                  t кон - температура нагретого воздуха на выходе из оребренного
                  теплообменника, °С.
                </li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                - полученные значения температурных перепадов включаем в формулу
                расчета температурного напора
              </ProductParagraph>
              <ProductParagraph className="text-2xl font-bold">
                Δ T = (Δ T <sub>Б</sub> - Δ T <sub>М</sub>) / ln (Δ T{" "}
                <sub>Б</sub> / Δ T <sub>М</sub>)
              </ProductParagraph>
              <ProductParagraph>
                Натуральный логарифм ln — это логарифм по основанию e, где e —
                иррациональная константа, равная приблизительно 2.71828.
                Обозначение ln (x) - показатель степени, в которую нужно
                возвести число 2.71828, чтобы получить число x.
              </ProductParagraph>
            </li>
          </ol>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-800/500 w-full">
            <Image
              src="/img/general_pages/par_kalorifer_temperatura_napor.png"
              alt="Расчет температурного напора парового калорифера"
              title="Средний логарифмический температурный напор"
              fill
            />
          </div>
          <div className="relative aspect-800/500 w-full">
            <Image
              src="/img/general_pages/steam_kalorifer_temperatura_napor.png"
              alt="Дельта температур при расчете и подборе парового калорифера"
              title="Формула логарифмического температурного напора"
              fill
            />
          </div>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 6
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 6. Рассчитываем температурный напор для выбранных
              одноходовых паровых калориферов. Исходные данные: теплоноситель -
              сухой насыщенный пар давлением 0.1 МПа, температура воздуха на
              входе -39°С, температура воздуха на выходе +22°С.
            </ProductParagraph>
            <ProductParagraph className="text-xl font-bold">
              Δ T <sub>Б</sub> = 99.6 – (-39) = 138.6
            </ProductParagraph>
            <ProductParagraph className="text-xl font-bold">
              Δ T <sub>М</sub> = 99.6 – 22 = 77.6
            </ProductParagraph>
            <ul>
              <li>99.6 - температура пара при давлении 0.1 МПа, °С;</li>
              <li>
                -39 - температура холодного воздуха на входе в калорифер, °С;
              </li>
              <li>
                +22 - температура нагретого воздуха на выходе из калорифера, °С;
              </li>
              <li>
                138.6 - большая разность температур между паром и воздухом на
                входе в калорифер, °С;
              </li>
              <li>
                77.6 - меньшая разность температур между паром и воздухом на
                выходе из калорифера, °С.
              </li>
            </ul>
            <ProductParagraph className="text-xl font-bold">
              Δ T = (138.6 – 77.6) / ln (138.6 / 77.6) = 61 / ln 1.78608 = 61 /
              2.71828 n 1.78608 = 61 / 0.580 = 105.2 °С
            </ProductParagraph>
            <ul>
              <li>61 – перепад температур большой и малой дельт, °С;</li>
              <li>
                1.78608 – значение, полученное при делении показателя большей
                разности температур на меньшую разность температур;
              </li>
              <li>
                0.580 - показатель степени в которую нужно возвести число
                2.71828, чтобы получить число 1.78608;
              </li>
              <li>
                105.2 – температурный напор при заданных параметрах
                теплоносителей, °С.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="anchor7" className="mb-4 space-y-4">
        <Heading lvl={2} text="Расчет тепловой мощности парового калорифера" />
        <div>
          <ProductParagraph>
            7. Уточняем фактическую тепловую мощность выбранных паровых
            калориферов вентиляционно-отопительной системы.
          </ProductParagraph>
          <ProductParagraph>
            Формула для нахождения теплопроизводительности имеет вид:{" "}
            <span className="text-2xl font-bold">
              Q <sub>1</sub> = К • F к • Δ T
            </span>
          </ProductParagraph>
          <ul>
            <li>
              Q <sub>1</sub> – вырабатываемая калорифером производительность по
              теплу, Вт;
            </li>
            <li>
              К – коэффициент теплопередачи выбранного калорифера, Вт/(м²•°С);
            </li>
            <li>
              F к – площадь поверхности теплообмена выбранного калорифера, м²;
            </li>
            <li>
              Δ T – температурный напор при заданных параметрах теплоносителей,
              °С.
            </li>
          </ul>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 7
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 7. Рассчитываем действительную тепловую мощность
              подобранных паровых воздухонагревателей. Коэффициент теплопередачи
              для каждого калорифера принимаем из соответствующего расчета,
              площадь поверхности теплообмена вносим из табличных данных,
              температурный напор идентичен для всех выбранных моделей.
            </ProductParagraph>
            <ul className="max-w-xl space-y-2 sm:space-y-0.5">
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 2-10</span>
                <span className="text-xl font-bold">
                  Q 1 = 63.50 • 19.5 • 105.2 = 130264 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 3-10</span>
                <span className="text-xl font-bold">
                  Q 1 = 61.08 • 29.7 • 105.2 = 190841 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 4-10</span>
                <span className="text-xl font-bold">
                  Q 1 = 59.81 • 39.0 • 105.2 = 245389 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 310</span>
                <span className="text-xl font-bold">
                  Q 1 = 91.64 • 21.9 • 105.2 = 211128 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 410</span>
                <span className="text-xl font-bold">
                  Q 1 = 81.40 • 28.7 • 105.2 = 245766 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А3</span>
                <span className="text-xl font-bold">
                  Q 1 = 91.04 • 24.1 • 105.2 = 230816 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А4</span>
                <span className="text-xl font-bold">
                  Q 1 = 80.59 • 31.7 • 105.2 = 268755 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А3</span>
                <span className="text-xl font-bold">
                  Q 1 = 83.96 • 28.2 • 105.2 = 249079 Вт
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А4</span>
                <span className="text-xl font-bold">
                  Q 1 = 74.14 • 37.2 • 105.2 = 290142 Вт
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="anchor8" className="mb-4 space-y-4">
        <Heading
          lvl={2}
          text="Расчет расхода пара для нагрева"
          className="mb-0"
        />
        <div>
          <ProductParagraph>
            8. Уточняем фактический расход пара выбранных калориферов:{" "}
            <Formula>
              g <sub>пар</sub> = Q <sub>1</sub> / r <sub>пар</sub>
            </Formula>
          </ProductParagraph>
          <ul>
            <li>
              g <sub>ПАР</sub> – фактический расход пара, кг/сек;
            </li>
            <li>
              Q <sub>1</sub> – вырабатываемая пароконденсатным калорифером
              производительность по теплу, Вт;
            </li>
            <li>
              r <sub>ПАР</sub> - скрытая теплота парообразования, Дж/кг.
            </li>
          </ul>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 8
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 8. Рассчитывается действительный расход сухого
              насыщенного пара давлением 0.1 МПа подобранными паровыми
              одноходовыми калориферами при нагреве приточного воздуха объемом
              9000 м³/час от -39°С до +22°С.
            </ProductParagraph>
            <ul className="max-w-180 space-y-2 sm:space-y-1">
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 2-10</span>
                <Formula example>
                  g <sub>пар</sub> = 130264 / 2257510 = 0.058 кг/сек = 208
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 3-10</span>

                <Formula example>
                  g <sub>пар</sub> = 190841 / 2257510 = 0.085 кг/сек = 306
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 4-10</span>
                <Formula example>
                  g <sub>пар</sub> = 245389 / 2257510 = 0.109 кг/сек = 392
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 310</span>
                <Formula example>
                  g <sub>пар</sub> = 211128 / 2257510 = 0.094 кг/сек = 338
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 410</span>
                <Formula example>
                  g <sub>пар</sub> = 245766 / 2257510 = 0.109 кг/сек = 392
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А3</span>
                <Formula example>
                  g <sub>пар</sub> = 230816 / 2257510 = 0.102 кг/сек = 367
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А4</span>
                <Formula example>
                  g <sub>пар</sub> = 268755 / 2257510 = 0.119 кг/сек = 428
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А3</span>
                <Formula example>
                  g <sub>пар</sub> = 249079 / 2257510 = 0.110 кг/сек = 396
                  кг/час
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А4</span>
                <Formula example>
                  g <sub>пар</sub> = 290142 / 2257510 = 0.129 кг/сек = 464
                  кг/час
                </Formula>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="anchor9" className="mb-4 space-y-4">
        <Heading lvl={2} text="Запас тепловой мощности парового калорифера" />
        <div>
          <ProductParagraph>
            9. Определяем запас тепловой производительности или поверхности
            нагрева принятых калориферов:
            <span className="block text-2xl font-bold">
              φ = ((Q 1 - Q) / Q) • 100
            </span>
          </ProductParagraph>
          <ul>
            <li>φ – запас поверхности нагрева или мощности, %;</li>
            <li>
              Q <sub>1</sub> – вырабатываемая калорифером производительность по
              теплу, Вт;
            </li>
            <li>Q - требуемая тепловая мощность, Вт.</li>
          </ul>
          <ProductParagraph className="text-secondary-text">
            Фактическая мощность по теплу паровоздушного калорифера должна быть
            больше, чем расчетная. Диапазон допустимого соотношения фактической
            и расчетной мощности, в зависимости от условий поставленной задачи и
            качества теплоносителя может составлять от 100 до 120 процентов. В
            общих случаях оптимальный запас поверхности нагрева должен
            находиться на уровне 10%, допустимый интервал от 0 до 20%. Если при
            подборе получен меньший или больший запас рекомендуется принять
            другой теплообменник и произвести повторный расчет.
          </ProductParagraph>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 9
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 9. Рассчитывается запас площади поверхности теплообмена
              выбранных воздухонагревателей, проводится анализ его соответствия
              рекомендуемому диапазону.
            </ProductParagraph>
            <ul className="max-w-2xl space-y-2 sm:space-y-1">
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 2-10</span>
                <Formula example className="tracking-[0.1px]">
                  φ = ((130264 - 205576) / 205576) • 100 = -37%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 3-10</span>
                <Formula example className="tracking-[0.35px]">
                  φ = ((190841 - 205576) / 205576) • 100 = -7%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 4-10</span>
                <Formula example>
                  φ = ((245389 - 205576) / 205576) • 100 = +19%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 310</span>
                <Formula example className="tracking-[0.3px]">
                  φ = ((211128 - 205576) / 205576) • 100 = +3%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 410</span>
                <Formula example>
                  φ = ((245766 - 205576) / 205576) • 100 = +20%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А3</span>
                <Formula example>
                  φ = ((230816 - 205576) / 205576) • 100 = +12%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А4</span>
                <Formula example>
                  φ = ((268755 - 205576) / 205576) • 100 = +31%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А3</span>
                <Formula example>
                  φ = ((249079 - 205576) / 205576) • 100 = +21%
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А4</span>
                <Formula example>
                  φ = ((290142 - 205576) / 205576) • 100 = +41%
                </Formula>
              </li>
            </ul>
          </div>
        </div>
        <ProductParagraph className="text-secondary-text">
          Из подобранных моделей калориферы КПСк 2-10 и КПСк 3-10 имеют
          недостаточную тепловую мощность. Запас площади поверхности паровых
          воздухонагревателей КФБ-7 А4, КФБ-8 А3 и КФБ-8 А4 превышает
          рекомендуемый диапазон.
        </ProductParagraph>
        <LinkButtonsBlock
          buttons={[
            {
              name: "Запас поверхности нагрева",
              url: "/raschet-kaloriferov#anchor3",
            },
            {
              name: "Запас сопротивления пар",
              url: "/raschet-kaloriferov#anchor4",
            },
          ]}
        />
      </section>

      <section id="anchor10" className="mb-4 space-y-4">
        <Heading lvl={2} text="Расчет воздушного сопротивления" />
        <div>
          <ProductParagraph>
            10. Произвести расчет аэродинамического сопротивления подобранных
            калориферов. Величину потерь по воздуху можно узнать двумя
            способами: используя формулу с аппроксимационными значениями,
            полученными на основе обработки экспериментальных данных;
            воспользовавшись таблицами с рассчитанными результатами по каждой
            модели паровых калориферов, выпускаемых нашим предприятием.
          </ProductParagraph>
          <ProductParagraph>
            Формула для вычисления аэродинамического сопротивления имеет вид:{" "}
            <Formula>
              ΔP = B • v <sup>m</sup>
            </Formula>
          </ProductParagraph>
          <ul>
            <li> ΔP – аэродинамическое сопротивление, Па;</li>
            <li>
              v – действительная массовая скорость воздуха в подобранном
              теплообменнике, кг/м²•с;
            </li>
            <li>B, m - значение модуля и степени из таблицы.</li>
          </ul>
        </div>
        <CalcAerodynamicResistanceTables />
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 10
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 10. Рассчитывается аэродинамическое сопротивление
              выбранных воздушных обогревателей. Принимаем модели КПСк и КП с
              массовой скоростью 5.77 кг/(м²•с), КФБ А3 и А4 7-го номера с
              массовой скоростью 5.41 кг/(м²•с), КФБ А3 и А4 8-го номера с
              массовой скоростью в фронтальном сечении 4.61 кг/(м²•с). Значения
              модуля и степени принимаются из таблицы эмпирических показателей.
            </ProductParagraph>
            <ul className="max-w-134 space-y-2 sm:space-y-1">
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 2-10</span>
                <Formula example>
                  ΔP = 4.23 • 5.77 <sup>1.832</sup> = 105 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 3-10</span>
                <Formula example>
                  ΔP = 6.05 • 5.77 <sup>1.832</sup> = 150 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КПСк 4-10</span>
                <Formula example>
                  ΔP = 8.63 • 5.77 <sup>1.833</sup> = 214 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 310</span>
                <Formula example>
                  ΔP = 6.37 • 5.77 <sup>1.864</sup> = 167 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КП 410</span>
                <Formula example>
                  ΔP = 8.67 • 5.77 <sup>1.848</sup> = 221 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А3</span>
                <Formula example>
                  ΔP = 6.37 • 5.41 <sup>1.864</sup> = 148 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-7 А4</span>
                <Formula example>
                  ΔP = 8.67 • 5.41 <sup>1.848</sup> = 196 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А3</span>
                <Formula example>
                  ΔP = 6.37 • 4.61 <sup>1.864</sup> = 110 Па
                </Formula>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>Калорифер КФБ-8 А4:</span>
                <Formula example>
                  ΔP = 8.67 • 4.61 <sup>1.848</sup> = 146 Па
                </Formula>
              </li>
            </ul>
          </div>
        </div>
        <ProductParagraph className="text-secondary-text">
          Подробное описание нахождения потерь по воздушной стороне паровых
          калориферов и таблицы с расчетными данными по каждой модели можно
          посмотреть на странице сайта: Аэродинамическое сопротивление паровых
          калориферов.
        </ProductParagraph>
        <LinkButtonsBlock
          buttons={[
            {
              name: "Расчет сопротивления пар",
              url: "/koefficient-teploperedachi-parovyh-kaloriferov#anchor1",
            },
            {
              name: "Таблицы сопротивления пар",
              url: "/koefficient-teploperedachi-parovyh-kaloriferov#anchor3",
            },
          ]}
        />
      </section>

      <section id="anchor11" className="mb-4 space-y-4">
        <Heading lvl={2} text="Подбор парового калорифера" />
        <ProductParagraph>
          11. Правильный и корректный подбор паровых калориферов направлен на
          поиск технического решения, обеспечивающего требуемый нагрев воздуха
          при компактных фронтальных размерах теплообменника, наименьшей
          величины передающей поверхности и низкого аэродинамического
          сопротивления. На практике оптимальный вариант определяют путем
          последовательного расчета нескольких моделей воздухонагревателей.
          Предпочтение отдают калориферу с высокими энергетическими показателями
          и рациональным запасом тепловой мощности при минимальном сопротивлении
          воздушному потоку.
        </ProductParagraph>
        <ProductParagraph className="text-secondary-text">
          Критерии подбора и методика расчета воздухонагревателей представлены
          на странице сайта: Расчет и подбор водяных, паровых и электрических
          калориферов. С конструкционными особенностями, видами и типами
          выпускаемых нашим предприятием спирально-накатных теплообменников
          можно ознакомиться на странице: Калориферы. Производство.
        </ProductParagraph>
        <LinkButtonsBlock
          buttons={[
            {
              name: "Расчет и подбор калориферов",
              url: "/raschet-kaloriferov",
            },
            {
              name: "Производство калориферов",
              url: "/kalorifery",
            },
          ]}
        />
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора парового калорифера. ШАГ 11
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровой калорифер для нагрева приточного воздуха объемом
              9000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г. Барнаула
              -39°С. Температура в рабочей зоне производственного помещения
              +22°С. Теплоноситель - сухой насыщенный пар давлением 0.1 МПа.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 11. Для подбора было выбрано девять моделей одноходовых
              воздухонагревателей. Показатели поверочного расчета представлены в
              таблице. В результате сравнительного анализа полученных данных
              сделаны следующие выводы:
            </ProductParagraph>
            <ul>
              <li>
                - калориферы КПСк 2-10 и КПСк 3-10 не обеспечат требуемую
                тепловую производительность;
              </li>
              <li>
                - запас поверхности теплообмена калориферов КФБ-7 А4, КФБ-8 А3 и
                КФБ-8 А4 превышает рекомендуемый диапазон;
              </li>
              <li>
                - калориферы КПСк 4-10 и КП 410 имеют высокое аэродинамическое
                сопротивление и запас по поверхности приближенный к пороговому
                значению;
              </li>
              <li>
                - запас тепловой мощности калорифера КП 310 имеет минимальное
                значение.
              </li>
            </ul>
          </div>
          <KaloriferPropsTable
            columns={kaloriferPropColumns}
            data={kaloriferProps}
          />
          <div>
            <ProductParagraph>
              В результате расчета и подбора паровых калориферов для обеспечения
              подогрева приточного воздуха объемом 9000 м³/час на требуемый
              перепад температур наиболее приемлемым вариантом по
              теплотехническим характеристикам и аэродинамическому сопротивлению
              представляется теплообменник КФБ-7 А3 как наиболее соответствующий
              по оптимальному запасу поверхности нагрева и относительно низким
              потерям по воздушной стороне.
            </ProductParagraph>
            <ProductParagraph>
              Теплоаэродинамические характеристики: производительность по теплу
              – 231 кВт, коэффициент теплопередачи - 91.04 Вт/(м²•°C), расход
              пара – 367 кг/час, запас поверхности теплообмена – 12%, массовая
              скорость в фронтальном сечении – 5.41 кг/(м²•с), аэродинамическое
              сопротивление – 148 Па.
            </ProductParagraph>
          </div>
        </div>
      </section>

      <section id="anchor12" className="space-y-4">
        <Heading
          lvl={2}
          text="Расчет и подбор паровых калориферов для технологического нагрева"
        />
        <ProductParagraph>
          Для высокотемпературного нагрева воздуха в рамках обеспечения
          технологических процессов, связанных с сушкой сырья и различных
          материалов, паровые калориферы компонуются в блоки. Соединенные между
          собой последовательно по ходу движения воздушного потока, по
          теплоносителю нагреватели устанавливаются параллельно. Пар подается во
          все одноходовые калориферы одновременно. Расчет паровых
          воздухонагревателей, объединенных в блоки, ведется по каждому ряду
          отдельно, начиная с первого по направлению движения воздуха.
          Температура воздуха на выходе предыдущего ряда принимается как
          начальная для расчета последующей ступени нагрева. Температура после
          последнего ряда считается окончательной или расчетной. Полученные
          значения каждого ряда по тепловой мощности, расходу пара и
          аэродинамическому сопротивлению суммируются.
        </ProductParagraph>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-1000/500 w-full">
            <Image
              src="/img/general_pages/kalorifer_podbor_par_blok.png"
              alt="Расчет многорядной установки паровых воздухонагревателей"
              title="Установка четырехрядных паровых калориферов"
              fill
            />
          </div>
          <div className="relative aspect-1000/500 w-full">
            <Image
              src="/img/general_pages/kalorifer_podbor_blok_par.png"
              alt="Подбор многорядной установки паровых воздухонагревателей"
              title="Установка трехрядных паровых калориферов"
              fill
            />
          </div>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора паровых калориферов для технологического
              нагрева
            </ProductParagraph>
            <ProductParagraph>
              Подобрать паровые калориферы для нагрева воздуха объемом 25000
              м³/час с температуры от +10°С до температуры в диапазоне
              130°С-140°С. Теплоноситель - сухой насыщенный пар давлением 0.5
              МПа.
            </ProductParagraph>
          </div>
          <ProductParagraph>
            ДЕЙСТВИЕ. В рамках предварительного расчета и подбора определяем
            массовый расход нагреваемого воздуха и количество теплоты для
            нагрева воздушного потока. Рассчитываем площадь фронтального сечения
            под массовый расход воздуха 25250 кг/час и выбранную весовую
            скорость – 5.5 кг/(м²•с). Принимаем к подбору приближенные к
            полученному значению паровые теплообменники КФБ-12 А3 и КФБ-12 А4 с
            площадью фронтального сечения 1.275 м², установленные по глубине в
            четыре ряда. Находим действительную массовую скорость в фронтальном
            сечении. Рассчитываем потребление пара. Устанавливаем общее
            аэродинамическое сопротивление путем умножения сопротивления первого
            калорифера на количество рядов.
          </ProductParagraph>
        </div>

        <div className="space-y-4">
          <div>
            <ProductParagraph className="text-example mb-2">
              Предварительный расчет блока паровых калориферов.
            </ProductParagraph>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  4 калорифера КФБ-12 А4. Нагрев от 10°с до 144°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 1.01 = 25250 кг/час</li>
                  <li>Q = (25250/3600) • 1007 • (144-10) = 946440 Вт</li>
                  <li>f = (25250/3600) / 5.5 = 1.275 м²</li>
                  <li>v = (25250/3600) / 1.258 = 5.58 кг/(м²•с)</li>
                  <li>
                    G <sub>пар</sub> = 946440 / 2107920= 0.449 кг/сек = 1616
                    кг/час
                  </li>
                  <li>
                    ΔP = 8.67 • 5.58 <sup>1.848</sup> = 208 Па • 4 = 832 Па
                  </li>
                </ul>
              </div>
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  4 калорифера КФБ-12 А3. Нагрев от 10°с до 139°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 1.01 = 25250 кг/час</li>
                  <li>Q = (25250/3600) • 1007 • (139-10) = 911125 Вт</li>
                  <li>f = (25250/3600) / 5.5 = 1.275 м²</li>
                  <li>v = (25250/3600) / 1.258 = 5.58 кг/(м²•с)</li>
                  <li>
                    G <sub>пар</sub> = 911125 / 2107920= 0.432 кг/сек = 1555
                    кг/час
                  </li>
                  <li>
                    ΔP = 6.37 • 5.58 <sup>1.864</sup> = 157 Па • 4 = 628 Па
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <ProductParagraph className="text-example mb-2">
              Основной расчет калориферов первой ступени нагрева.
            </ProductParagraph>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А4 первого ряда. Нагрев от 10°с до 78°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 1.11 = 27750 кг/час</li>
                  <li>Q = (27750/3600) • 1005 • (78-10) = 526788 Вт</li>
                  <li>v = (27750/3600) / 1.258 = 6.13 кг/(м²•с)</li>
                  <li>
                    К = 37.2 • 6.13 <sup>0.452</sup> • 1.310 <sup>-0.063</sup> =
                    83.01 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 10 = 141.8 Δ T <sub>М</sub> =
                    151.8 – 78 = 73.8
                  </li>
                  <li>Δ T = (141.8 – 73.8) / ln (141.8 / 73.8) = 104 °С</li>
                  <li>Q 1 = 83.01 • 63.7 • 104 = 549925 Вт</li>
                  <li>
                    g <sub>пар</sub> = 549925 / 2107920 = 0.261 кг/сек = 940
                    кг/час
                  </li>
                  <li>φ = ((549925 - 526788) / 526788) = +4%</li>
                  <li>
                    ΔP = 8.67 • 6.13 <sup>1.848</sup> = 247 Па
                  </li>
                </ul>
              </div>
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А3 первого ряда. Нагрев от 10°с до 70°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 1.13 = 28250 кг/час</li>
                  <li>Q = (28250/3600) • 1005 • (70-10) = 473188 Вт</li>
                  <li>v = (28250/3600) / 1.258 = 6.24 кг/(м²•с)</li>
                  <li>
                    К = 43.5 • 6.24 <sup>0.431</sup> • 1.310 <sup>-0.072</sup> =
                    93.97 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 10 = 141.8 Δ T <sub>М</sub> =
                    151.8 – 70 = 81.8
                  </li>
                  <li>Δ T = (141.8 – 81.8) / ln (141.8 / 81.8) = 109 °С</li>
                  <li>Q 1 = 93.97 • 48.2 • 109 = 493700 Вт</li>
                  <li>
                    g <sub>пар</sub> = 493700 / 2107920 = 0.234 кг/сек = 842
                    кг/час
                  </li>
                  <li>φ = ((493700 - 473188) / 473188) • 100 = +4%</li>
                  <li>
                    ΔP = 6.37 • 6.24 <sup>1.864</sup> = 193 Па
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <ProductParagraph className="text-example mb-2">
              Расчет калориферов второй ступени нагрева. Входящую температуру
              воздуха принимаем по температуре воздуха на выходе из
              теплообменника первого ряда.
            </ProductParagraph>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А4 второго ряда. Нагрев от 78°с до 116°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 0.96 = 24000 кг/час</li>
                  <li>Q = (24000/3600) • 1009 • (116-78) = 255613 Вт</li>
                  <li>v = (24000/3600) / 1.258 = 5.30 кг/(м²•с)</li>
                  <li>
                    К = 37.2 • 5.30 <sup>0.452</sup> • 1.310 <sup>-0.063</sup> =
                    77.71 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 78 = 73.8 Δ T <sub>М</sub> =
                    151.8 – 116 = 35.8
                  </li>
                  <li>Δ T = (73.8 – 35.8) / ln (73.8 / 35.8) = 53 °С</li>
                  <li>Q 1 = 77.71 • 63.7 • 53 = 262357 Вт</li>
                  <li>
                    g <sub>пар</sub> = 262357 / 2107920 = 0.125 кг/сек = 450
                    кг/час
                  </li>
                  <li>φ = ((262357 - 255613) / 255613) = +3%</li>
                  <li>
                    ΔP = 8.67 • 5.30 <sup>1.848</sup> = 189 Па
                  </li>
                </ul>
              </div>
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А3 второго ряда. Нагрев от 70°с до 107°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 0.98 = 24500 кг/час</li>
                  <li>Q = (24500/3600) • 1009 • (107-70) = 254072 Вт</li>
                  <li>v = (24500/3600) / 1.258 = 5.41 кг/(м²•с)</li>
                  <li>
                    К = 43.5 • 5.41 <sup>0.431</sup> • 1.310 <sup>-0.072</sup> =
                    88.33 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 70 = 81.8 Δ T <sub>М</sub> =
                    151.8 – 107 = 44.8
                  </li>
                  <li>Δ T = (81.8 – 44.8) / ln (81.8 / 44.8) = 61 °С</li>
                  <li>Q 1 = 88.33 • 48.2 • 61 = 259708 Вт</li>
                  <li>
                    g <sub>пар</sub> = 259708 / 2107920 = 0.123 кг/сек = 443
                    кг/час
                  </li>
                  <li>φ = ((259708 - 254072) / 254072) • 100 = +2%</li>
                  <li>
                    ΔP = 6.37 • 5.41 <sup>1.864</sup> = 148 Па
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <ProductParagraph className="text-example mb-2">
              Расчет калориферов третьей ступени нагрева. Входящую температуру
              воздуха принимаем по температуре воздуха на выходе из
              теплообменника второго ряда.
            </ProductParagraph>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А4 третьего ряда. Нагрев от 116°с до 135°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 0.89 = 22250 кг/час</li>
                  <li>Q = (22250/3600) • 1010 • (135-116) = 118605 Вт</li>
                  <li>v = (22250/3600) / 1.258 = 4.91 кг/(м²•с)</li>
                  <li>
                    К = 37.2 • 4.91 <sup>0.452</sup> • 1.310 <sup>-0.063</sup> =
                    75.07 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 116 = 35.8 Δ T <sub>М</sub> =
                    151.8 – 135 = 16.8
                  </li>
                  <li>Δ T = (35.8 – 16.8) / ln (35.8 / 16.8) = 25 °С</li>
                  <li>Q 1 = 75.07 • 63.7 • 25 = 119549 Вт</li>
                  <li>
                    g <sub>пар</sub> = 119549 / 2107920 = 0.057 кг/сек = 205
                    кг/час
                  </li>
                  <li>φ = ((119549 - 118605) / 118605) = +1%</li>
                  <li>
                    ΔP = 8.67 • 4.91 <sup>1.848</sup> = 164 Па
                  </li>
                </ul>
              </div>
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А3 третьего ряда. Нагрев от 107°с до 128°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 0.90 = 22500 кг/час</li>
                  <li>Q = (22500/3600) • 1009 • (128-107) = 132431 Вт</li>
                  <li>v = (22500/3600) / 1.258 = 4.97 кг/(м²•с)</li>
                  <li>
                    К = 43.5 • 4.97 <sup>0.431</sup> • 1.310 <sup>-0.072</sup> =
                    85.18 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 107 = 44.8 Δ T <sub>М</sub> =
                    151.8 – 128 = 23.8
                  </li>
                  <li>Δ T = (44.8 – 23.8) / ln (44.8 / 23.8) = 33 °С</li>
                  <li>Q 1 = 85.18 • 48.2 • 33 = 135487 Вт</li>
                  <li>
                    g <sub>пар</sub> = 135487 / 2107920 = 0.064 кг/сек = 230
                    кг/час
                  </li>
                  <li>φ = ((135487 - 132431) / 132431) • 100 = +2%</li>
                  <li>
                    ΔP = 6.37 • 4.97 <sup>1.864</sup> = 127 Па
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <ProductParagraph className="text-example mb-2">
              Расчет калориферов четвертой ступени нагрева. Входящую температуру
              воздуха принимаем по температуре воздуха на выходе из
              теплообменника третьего ряда.
            </ProductParagraph>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А4 четвертого ряда. Нагрев от 135°с до 144°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 0.86 = 21500 кг/час</li>
                  <li>Q = (21500/3600) • 1013 • (144-135) = 54449 Вт</li>
                  <li>v = (21500/3600) / 1.258 = 4.75 кг/(м²•с)</li>
                  <li>
                    К = 37.2 • 4.75 <sup>0.452</sup> • 1.310 <sup>-0.063</sup> =
                    73.94 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 135 = 16.8 Δ T <sub>М</sub> =
                    151.8 – 144 = 7.8
                  </li>
                  <li>Δ T = (16.8 – 7.8) / ln (16.8 / 7.8) = 12 °С</li>
                  <li>Q 1 = 73.94 • 63.7 • 12 = 56520 Вт</li>
                  <li>
                    g <sub>пар</sub> = 56520 / 2107920 = 0.027 кг/сек = 97
                    кг/час
                  </li>
                  <li>φ = ((56520 - 54449) / 54449) = +4%</li>
                  <li>
                    ΔP = 8.67 • 4.75 <sup>1.848</sup> = 154 Па
                  </li>
                </ul>
              </div>
              <div className="text-example">
                <ProductParagraph className="uppercase">
                  Калорифер КФБ-12 А3 четвертого ряда. Нагрев от 128°с до 139°с
                </ProductParagraph>
                <ul className="font-bold">
                  <li>G = 25000 • 0.87 = 21750 кг/час</li>
                  <li>Q = (21750/3600) • 1012 • (139-128) = 67256 Вт</li>
                  <li>v = (21750/3600) / 1.258 = 4.80 кг/(м²•с)</li>
                  <li>
                    К = 43.5 • 4.80 <sup>0.431</sup> • 1.310 <sup>-0.072</sup> =
                    83.90 Вт/(м²•°C)
                  </li>
                  <li>
                    Δ T <sub>Б</sub> = 151.8 – 128 = 23.8 Δ T <sub>М</sub> =
                    151.8 – 139 = 12.8
                  </li>
                  <li>Δ T = (23.8 – 12.8) / ln (23.8 / 12.8) = 18 °С</li>
                  <li>Q 1 = 83.90 • 48.2 • 18 = 72792 Вт</li>
                  <li>
                    g <sub>пар</sub> = 72792 / 2107920 = 0.035 кг/сек = 126
                    кг/час
                  </li>
                  <li>φ = ((72792 - 67256) / 67256) • 100 = +8%</li>
                  <li>
                    ΔP = 6.37 • 4.80 <sup>1.864</sup> = 119 Па
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
            <div className="relative aspect-1000/500 w-full">
              <Image
                src="/img/general_pages/kalorifer_podbor_blok_steam.png"
                alt="Высокотемпературный подогрев воздуха для технологических линий"
                title="Температура воздуха при многоступенчатом нагреве паром"
                fill
              />
            </div>
            <div className="relative aspect-1000/500 w-full">
              <Image
                src="/img/general_pages/kalorifer_podbor_steam_blok.png"
                alt="Технологический нагрев воздуха паровыми теплообменниками"
                title="Температура воздуха многорядных паровых установок"
                fill
              />
            </div>
          </div>

          <div>
            <ProductParagraph className="text-example mb-2">
              Итоговые результаты основного расчета. Отмечаем температуру
              воздуха на выходе. Сложением расчетных показателей по каждому ряду
              определяем действительную производительность по теплу, фактический
              расход пара, общее аэродинамическое сопротивление блока
              калориферов. Уточняем запас поверхности теплообмена.
            </ProductParagraph>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ul className="text-example font-bold">
                <li>Q 1 = 549925 + 262357 + 119549 + 56520 = 988081 Вт</li>
                <li>
                  g <sub>пар</sub> = 940 + 450 +205 + 97 = 1692 кг/час
                </li>
                <li>φ = ((988081 - 946440) / 946440) = +4%</li>
                <li>ΔP = 247 + 189 + 164 + 154 = 754 Па</li>
              </ul>
              <ul className="text-example font-bold">
                <li>Q 1 = 493700 + 259708 + 135487 + 72792 = 961687 Вт</li>
                <li>
                  g <sub>пар</sub> = 842 + 443 +230 + 126 = 1641 кг/час
                </li>
                <li>φ = ((961687 - 911125) / 911125) = +6%</li>
                <li>ΔP = 193 + 148 + 127 + 119 = 587 Па</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-example">
          <ProductParagraph>
            Теплоаэродинамические характеристики воздухонагревательного блока,
            состоящего из четырех калориферов КФБ-12 А4: температура воздуха на
            выходе +144°С, производительность по теплу – 988 кВт, расход пара –
            1692 кг/час, запас общей поверхности теплообмена – 4%,
            аэродинамическое сопротивление – 754 Па.
          </ProductParagraph>
          <ProductParagraph>
            Теплоаэродинамические характеристики воздухонагревательного блока,
            состоящего из четырех калориферов КФБ-12 А3: температура воздуха на
            выходе +139°С, производительность по теплу – 962 кВт, расход пара –
            1641 кг/час, запас общей поверхности теплообмена – 6%,
            аэродинамическое сопротивление – 587 Па.
          </ProductParagraph>
        </div>
        <ProductParagraph className="text-example">
          Сравнительный анализ компоновок в блоки четырехрядных и трехрядных
          паровых теплообменников показывает, что при многоступенчатом подогреве
          воздуха паром тепловое преимущество калориферов с большим количеством
          рядов проявляется только в первых по ходу движения воздушного потока
          подогревателях. В последующих калориферах, при меньшей разности
          температур теплоносителя и входящего воздуха, показатели тепловой
          мощности выравниваются. При заданных условиях четырехступенчатый блок
          четырехрядных калориферов осуществит нагрев воздушного потока на пять
          градусов больше, чем подобная компоновка из трехрядных
          теплообменников, к преимуществу которой можно и отнести меньшие
          воздушные потери. Окончательное решение по выбору установки
          воздухонагревателей той или иной рядности и количества компонуемых в
          нее теплообменников принимается с учетом поставленной задачи и
          технических ресурсов в рамках обеспечения технологического процесса.
        </ProductParagraph>
      </section>
    </>
  );
}

function FormulasList({ children }) {
  return <ul className="max-w-2xl space-y-2 sm:space-y-0.5">{children}</ul>;
}

function Formula({ example = false, className = "", children }) {
  return (
    <span
      className={`font-bold ${example ? "text-xl" : "text-2xl"} ${className}`}
    >
      {children}
    </span>
  );
}
