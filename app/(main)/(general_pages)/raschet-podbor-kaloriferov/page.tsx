import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { ArrowBigDownDash } from "lucide-react";

import { getLegacyHtmls } from "@/lib/legacyHtml";

import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import SaturatedSteamPropertiesTable from "@/components/general_pages/saturatedSteamPropertiesTable";
import SteamCalcHeatTransferCoefficientTables from "@/components/general_pages/steamCalcHeatTransferCoefficientTables";
import SteamCalcAerodynamicResistanceTables from "@/components/general_pages/steamCalcAerodynamicResistanceTables";
import WaterCalcHeatTransferCoefficientTables from "@/components/general_pages/waterCalcHeatTransferCoefficientTables";
import WaterCalcAerodynamicResistanceTables from "@/components/general_pages/waterCalcAerodynamicResistanceTables";
import LegacyHtml from "@/components/legacyHtml";
import { NumberedAnchor } from "@/components/utils/anchor/numbered";
import { Separator } from "@/components/ui/separator";
import WaterPropsOnSaturationLineTable from "@/components/general_pages/waterPropsOnSaturationLineTable";

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
    label: "Наименование водяного калорифера",
  },
  {
    key: "numberOfPasses",
    label: "Кол-во ходов по теплоносителю",
  },
  {
    key: "waterSpeed",
    label: "Скорость воды в трубках, м/с",
  },
  {
    key: "heatReserve",
    label: "Запас тепловой мощности, %",
    render: (value: number) => {
      if (value === null) return "—";
      if (value > 0) return `+${value}`;
      return String(value);
    },
  },
  {
    key: "aeroResistance",
    label: "Аэродинамическое сопротивление, Па",
    render: (value: number) => {
      if (value === null) return "—";
      if (value > 0) return `+${value}`;
      return String(value);
    },
  },
  {
    key: "hydraulicResistance",
    label: "Гидравлическое сопротивление, кПа",
    render: (value: number) => {
      if (value === null) return "—";
      if (value > 0) return `+${value}`;
      return String(value);
    },
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
    name: "КСк 2-11",
    numberOfPasses: 4,
    waterSpeed: "2.28 (крит.)",
    heatReserve: null,
    aeroResistance: null,
    hydraulicResistance: null,
    dimensions: "1727 х 1072 х 180",
    weight: 120,
  },
  {
    name: "КСк 3-11",
    numberOfPasses: 4,
    waterSpeed: "1.51 (крит.)",
    heatReserve: null,
    aeroResistance: null,
    hydraulicResistance: null,
    dimensions: "1727 х 1072 х 180",
    weight: 163,
  },
  {
    name: "КСк 4-11",
    numberOfPasses: 4,
    waterSpeed: "1.53 (крит.)",
    heatReserve: +35,
    aeroResistance: null,
    hydraulicResistance: null,
    dimensions: "1727 х 1072 х 180",
    weight: 206,
  },
  {
    name: "ТВВ 311",
    numberOfPasses: 4,
    waterSpeed: "0.65",
    heatReserve: -16,
    aeroResistance: null,
    hydraulicResistance: null,
    dimensions: "1727 х 1072 х 180",
    weight: 187,
  },
  {
    name: "ТВВ 311",
    numberOfPasses: 6,
    waterSpeed: "1.02",
    heatReserve: -12,
    aeroResistance: null,
    hydraulicResistance: null,
    dimensions: "1727 х 1072 х 180",
    weight: 187,
  },
  {
    name: "ТВВ 411",
    numberOfPasses: 4,
    waterSpeed: "0.62",
    heatReserve: +6,
    aeroResistance: 80.5,
    hydraulicResistance: 7.38,
    dimensions: "1727 х 1072 х 220",
    weight: 242,
  },
  {
    name: "ТВВ 411",
    numberOfPasses: 6,
    waterSpeed: "0.95",
    heatReserve: +9,
    aeroResistance: 80.5,
    hydraulicResistance: 17.33,
    dimensions: "1727 х 1072 х 220",
    weight: 242,
  },
  {
    name: "КФБ-14 А3 М",
    numberOfPasses: 6,
    waterSpeed: "0.91",
    heatReserve: -14,
    aeroResistance: null,
    hydraulicResistance: null,
    dimensions: "1530 х 1150 х 180",
    weight: 221,
  },
  {
    name: "КФБ-14 А4 М",
    numberOfPasses: 6,
    waterSpeed: "0.86",
    heatReserve: +7,
    aeroResistance: 88.3,
    hydraulicResistance: 14.11,
    dimensions: "1530 х 1150 х 220",
    weight: 289,
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

export default async function PodborRaschetKaloriferovPage() {
  const [table1Html, table2Html] = await getLegacyHtmls([
    "/legacy/table-raschet-podbor-kaloriferov-1.html",
    "/legacy/table-raschet-podbor-vodyanyh-kaloriferov-2.html",
  ]);

  return (
    <>
      <KaloriferPropsTable
        columns={kaloriferPropColumns}
        data={kaloriferProps}
      />
    </>
  );
}
