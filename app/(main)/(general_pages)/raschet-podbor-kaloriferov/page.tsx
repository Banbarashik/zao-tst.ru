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

export function WaterHeaterTempTable({ data, blocksPerRow = 5 }: Props) {
  const rows = chunk(data, blocksPerRow);
  const totalCols = blocksPerRow * 3;

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          <tr>
            <th
              colSpan={totalCols}
              className="border px-2 py-2 text-center font-semibold uppercase"
            >
              Расчетная температура для подбора водяных калориферов
            </th>
          </tr>
          <tr>
            <th
              colSpan={3}
              style={{ fontSize: "11px" }}
              className="w-46 py-0.5 uppercase"
            >
              Город
            </th>
            <th colSpan={6} style={{ fontSize: "11px" }} className="uppercase">
              Средняя температура наиболее холодного периода, °С
            </th>
            <th colSpan={6} style={{ fontSize: "11px" }} className="uppercase">
              Средняя температура наиболее холодной пятидневки, °С
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

export default async function RaschetPodborKaloriferovPage() {
  const [table1Html, table2Html] = await getLegacyHtmls([
    "/legacy/table-raschet-podbor-kaloriferov-1.html",
    "/legacy/table-raschet-podbor-vodyanyh-kaloriferov-2.html",
  ]);

  return (
    <>
      <div className="space-y-4">
        <Heading lvl={1} text="Подбор и расчет калорифера водяного" />

        <ProductParagraph>
          Инженерная методика и пошаговый расчет и подбор водяного калорифера
          для приточной вентиляции, воздушного отопления и технологического
          нагрева. На странице представлены базовые формулы тепловой мощности,
          расхода теплоносителя, массовой скорости воздуха и температурного
          напора. Приведены алгоритмы вычисления аэродинамического и
          гидравлического сопротивления воздухонагревателей. Рассмотрены
          особенности многорядных установок и различные схемы их подключения по
          воде.
        </ProductParagraph>
      </div>

      {/* Расчет и подбор калориферов КСК ТВВ КФБ-А М */}
      <section className="mb-4 space-y-5">
        <Heading lvl={2} text="Расчет и подбор калориферов КСК ТВВ КФБ-А М" />

        <ProductParagraph className="mb-1">
          Расчет и подбор водяных калориферов осуществляется в следующей
          последовательности:
        </ProductParagraph>

        <ul className="space-y-1.5">
          {[
            "оценка требуемой тепловой мощности для нагрева заданного объема воздуха на расчетный перепад температур",
            "расчет площади фронтального сечения для прохода воздуха и подбор наиболее подходящих калориферов",
            "нахождение массовой скорости в фронтальном сечении выбранного водяного теплообменника",
            "подсчет номинального расхода теплоносителя",
            "предварительный расчет скорости движения воды в трубках подобранных калориферов",
            "вычисление коэффициента теплопередачи водяного воздухонагревателя",
            "определение температурного напора",
            "нахождение фактической теплопроизводительности водяного теплообменника",
            "подсчет фактического расхода воды и скорости теплоносителя",
            "установление запаса площади поверхности нагрева калориферов и их соответствия рекомендуемому диапазону",
            "определение аэродинамических потерь давления",
            "вычисление гидравлического сопротивления",
            "окончательный выбор калорифера по совокупности полученных итоговых показателей",
            "расчет и подбор многорядных водяных установок для технологического нагрева",
          ].map((item, i, arr) => (
            <li key={item} className="flex gap-2">
              <Link
                href={`/raschet-podbor-kaloriferov#anchor${i + 1}`}
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

        <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-1000/370 w-full">
            <Image
              src="/img/general_pages/kalorifer_podbor_voda.png"
              alt="Расчет площади фронтального сечения водяного калорифера"
              title="Расчет водяного калорифера"
              fill
            />
          </div>
          <div className="relative aspect-1000/370 w-full">
            <Image
              src="/img/general_pages/kalorifer_podbor_water.png"
              alt="Расчет массовой скорости в фронтальном сечении водяного калорифера"
              title="Подбор водяного калорифера"
              fill
            />
          </div>
        </div>

        <ProductParagraph className="text-[#5a769a]">
          Подробное описание устройства и принципа работы водяных
          теплообменников представлено на странице сайта: Водяные калориферы.
          Для онлайн подбора водовоздушных нагревателей можно воспользоваться
          калькулятором, выложенным на странице сайта: Калориферы приточные
          водяные.
        </ProductParagraph>

        <LinkButtonsBlock
          buttons={[
            {
              name: "Паровые калориферы",
              url: "/kalorifer-par",
              hiddenText:
                "Температура и давление теплоносителя для парового калорифера",
            },
            {
              name: "Калькулятор паровой калорифер",
              url: "/kalorifery-par#anchor3",
              hiddenText: "Калькулятор подбора паровых калориферов онлайн",
            },
          ]}
        />

        <ProductParagraph>
          Все действия по подбору водяных воздухонагревателей КСк, ТВВ, КФБ-А М
          производства нашего завода выложены в пошаговых расчетах. Прилагаются
          каталоги с характеристиками всех биметаллических теплообменников,
          таблицы теплофизических свойств воздуха и воды, значения коэффициентов
          аппроксимации для каждого модельного ряда, приводятся пояснения и
          примеры к каждому вычислению.
        </ProductParagraph>

        <LinkButtonsBlock
          buttons={[
            {
              name: "Расчетная температура воздуха",
              url: "/raschet-kaloriferov#anchor1",
              hiddenText:
                "Температура воздуха при расчете калориферов приточной вентиляции",
            },
            {
              name: "Модели паровых калориферов",
              url: "/kalorifer-par#anchor2",
              hiddenText: "Калориферы для парового воздушного отопления",
            },
          ]}
        />

        <ProductParagraph className="text-[#5a769a]">
          Расчетная температура входящего воздуха подбирается в зависимости от
          технического задания и схемы включения водяного калорифера в систему
          воздухообмена. При нагреве приточного воздуха в качестве исходных
          данных начальную температуру принимают по параметрам наружного воздуха
          согласно СНиП. В таблице представлены средние температуры наиболее
          холодного периода и наиболее холодной пятидневки для ряда городов.
          Если в таблице отсутствует ваш населенный пункт, следует принять
          показатели близлежащего города.
        </ProductParagraph>

        <WaterHeaterTempTable data={cityTemps} />
      </section>

      <Separator />

      {/* 1. Расчет мощности по теплу */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={1} />
        <Heading lvl={2} text="Расчет мощности по теплу" />
        <div>
          <ProductParagraph>
            1. Находим тепловую мощность для нагрева необходимого объема
            воздуха.
          </ProductParagraph>
          <ol>
            <li>
              <ProductParagraph>
                1.1 Определяем массовый расход приточного воздуха:{" "}
                <span className="text-2xl font-bold">G = V • р</span>
              </ProductParagraph>
              <ul>
                <li>G - массовый расход воздуха, кг/час;</li>
                <li>V - объемное количество нагреваемого воздуха, м³/час;</li>
                <li>
                  p - плотность воздуха при средней температуре на входе и
                  выходе из воздухоподогревателя, кг/м³.
                </li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                1.2 Определяем количество теплоты для нагревания воздуха:{" "}
                <span className="text-2xl font-bold">
                  Q = (G / 3600) • c • (t{" "}
                  <span className="font-normal">кон</span> - t{" "}
                  <span className="font-normal">нач</span>)
                </span>
              </ProductParagraph>
              <ul>
                <li>Q – требуемая тепловая мощность теплообменника, Вт;</li>
                <li>G – массовый расход воздуха, кг/час;</li>
                <li>
                  с – удельная теплоемкость воздуха при средней температуре на
                  входе и выходе из прибора, Дж/(кг•°С);
                </li>
                <li>
                  t кон – температура нагретого воздуха на выходе из калорифера,
                  °С;
                </li>
                <li>
                  t нач – температура наружного воздуха на входе в калорифер,
                  °С;
                </li>
                <li>
                  3600 – коэффициент перевода часового расхода в секундный для
                  вычисления мощности в Ваттах.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="overflow-x-auto">
          <LegacyHtml html={table1Html} className="legacy-table min-w-231" />
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 1
            </ProductParagraph>
            <ProductParagraph>
              Подобрать водяной калорифер для нагрева приточного воздуха объемом
              15000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г.
              Нижневартовска -40°С с обеспеченностью 0.92. Для компенсации
              теплопотерь здания системой совмещенного воздушного отопления
              требуемая температура подаваемого воздуха на выходе из калорифера
              должна составлять +25°С. Теплоноситель - горячая вода с
              параметрами температурного графика 95/70°С.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 1. Определить тепловую мощность, необходимую для нагрева
              15000 м³/час с температуры -40 до +25 градусов.
            </ProductParagraph>
            <ol>
              <li>
                <ProductParagraph>
                  1.1 Определяем массовый расход нагреваемого воздуха:{" "}
                  <span className="text-xl font-bold">
                    G = 15000 • 1.33 = 19950 кг/час
                  </span>
                </ProductParagraph>
                <ul>
                  <li>G – массовый расход воздуха, кг/час;</li>
                  <li>
                    15000 – объемное количество нагреваемого воздуха, м³/час;
                  </li>
                  <li>
                    1.33 – плотность воздуха при средней температуре воздуха
                    -7.5°С.
                  </li>
                </ul>
              </li>
              <li>
                <ProductParagraph>
                  1.2 Определяем расход теплоты для нагрева воздушного потока:{" "}
                  <span className="block text-xl font-bold">
                    Q = (19950/3600) • 1006 • (25 - (-40)) = 362370 Вт
                  </span>
                </ProductParagraph>
                <ul>
                  <li>Q – требуемая тепловая мощность, Вт;</li>
                  <li>19950 – массовый расход воздуха, кг/час;</li>
                  <li>
                    1006 – удельная теплоемкость воздуха при средней температуре
                    воздуха -7.5°С, Дж/(кг•°С);
                  </li>
                  <li>
                    +25 – температура воздуха на выходе из калорифера, °С;
                  </li>
                  <li>-40 – температура воздуха на входе в калорифер, °С;</li>
                  <li>65 – перепад температур воздуха, °С.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Separator />

      {/* 2. Расчет площади фронтального сечения */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={2} />
        <Heading lvl={2} text="Расчет площади фронтального сечения" />
        <div>
          <ProductParagraph>
            2. Установив необходимую тепловую мощность, определяем площадь
            фронтального сечения для прохода воздуха. Площадь фронтального
            сечения — это внутреннее рабочее пространство воздухонагревателя с
            теплообменными трубками, через которое непосредственно проходит
            поток нагнетаемого приточного воздуха.
          </ProductParagraph>
          <ProductParagraph>
            Площадь фронтального сечения определяем по формуле:{" "}
            <span className="text-2xl font-bold">f = (G / 3600) / v</span>
          </ProductParagraph>
          <ul>
            <li>f – площадь фронтального сечения, м²;</li>
            <li>G – массовый расход воздуха, кг/час;</li>
            <li>
              v – массовая скорость воздуха во фронтальном сечении калорифера,
              кг/(м²·с). Для биметаллических водяных воздухонагревателей
              массовая скорость принимается в диапазоне 3–6 кг/(м²·с),
              допустимые нормативные значения составляют от 1.5 до 8 кг/(м²·с);
            </li>
            <li>
              3600 – коэффициент перевода часового расхода воздуха в секундный.
            </li>
          </ul>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 2
            </ProductParagraph>
            <ProductParagraph>
              Подобрать водяной калорифер для нагрева приточного воздуха объемом
              15000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г.
              Нижневартовска -40°С с обеспеченностью 0.92. Для компенсации
              теплопотерь здания системой совмещенного воздушного отопления
              требуемая температура подаваемого воздуха на выходе из калорифера
              должна составлять +25°С. Теплоноситель - горячая вода с
              параметрами температурного графика 95/70°С.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 2. Расчет площади фронтального сечения под массовый
              расход воздуха 19950 кг/час. Принимаем расчетную массовую скорость
              воздуха – 3.6 кг/(м²•с).
            </ProductParagraph>
            <ProductParagraph>
              Находим требуемую площадь фронтального сечения:{" "}
              <span className="text-xl font-bold">
                f = (19950/3600) / 3.6 = 1.539 м²
              </span>
            </ProductParagraph>
            <ul>
              <li>f – площадь фронтального сечения, м²;</li>
              <li>19950 – массовый расход воздуха, кг/час;</li>
              <li>3.6 – массовая скорость воздуха, кг/(м²•с).</li>
            </ul>
            <ProductParagraph>
              По результатам расчета, найденная площадь фронтального сечения
              составляет 1.539 м². Ориентируясь на табличные данные водяных
              промышленных воздухонагревателей, принимаем к подбору наиболее
              приближенные к этому значению модели калориферов приточных
              установок: КСк 2-11, КСк 3-11, КСк 4-11, ТВВ 311, ТВВ 411 (площадь
              фронтального сечения теплообменников — 1.660 м²), а также КФБ-14
              А3 М и КФБ-14 А4 М (1.577 м²).
            </ProductParagraph>
          </div>
        </div>
        <ProductParagraph className="text-[#5a769a]">
          Ниже представлена таблица с техническими характеристиками двух-, трех-
          и четырехрядных водяных воздухонагревателей производства ООО «Т.С.Т.»
          следующих серий: ТВВ-02-ХЛ3, КФБ-А М УХЛ3, КСк-02-ХЛ3 по ТУ
          4863-002-55613706-02. В таблице выложены конструктивные и
          гидравлические данные, необходимые для поверочного расчета и подбора
          оборудования: площади поверхностей нагрева и фронтального сечения,
          емкость и внутренние живые сечения для прохода воды по ходам. Кликнув
          на модель выбранного водяного теплообменника из таблицы, можно
          ознакомиться с выполненными расчетными показателями на разный объем и
          температуру нагреваемого воздуха, а также параметры различных
          температурных графиков сети.
        </ProductParagraph>
        <div className="overflow-x-auto">
          <LegacyHtml
            html={table2Html}
            className="legacy-table legacy-raschet-podbor-table min-w-231"
          />
        </div>
        <ProductParagraph className="text-[#5a769a]">
          Если расчетная площадь фронтального сечения превышает параметры одного
          серийного прибора, для комплектации приточной вентиляционной камеры
          проектируют сборную установку. В этом случае подбирают несколько
          биметаллических воздухонагревателей одного типоразмера, монтируя их
          параллельно по ходу движения воздуха, чтобы сумма их фронтальных
          площадей максимально соответствовала расчетному значению. Например,
          при расчете крупной вентиляционной секции требуемая общая площадь
          фронтального сечения составила 6.450 м². Водяных алюминиевых
          теплообменников с такой единичной площадью в каталоге не
          предусмотрено. Вариативно принимают к подбору следующие схемы
          компоновки: четыре калорифера из серий КСк 2-11, КСк 3-11, КСк 4-11
          либо ТВВ 311 и ТВВ 411 (суммарная площадь фронтального сечения
          составит 6.640 м²); четыре модуля КФБ-14 А3 М или КФБ-14 А4 М (общая
          площадь сечения составит 6.308 м²); восемь калориферов меньшего
          габарита КФБ-9 А3 М или КФБ-9 А4 М (суммарно 6.784 м²). Использование
          укрупненных моделей (по 4 штуки в секции) предпочтительнее с точки
          зрения минимизации узлов гидравлической обвязки по воде. Однако в
          условиях стесненного монтажа или при реконструкции действующих
          венткамер разделение общего фронта на большее количество приборов
          меньшего размера (по 8 штук) облегчает доставку и установку
          оборудования в проектное положение.
        </ProductParagraph>
      </section>

      <Separator />

      {/* 3. Расчет массовой скорости воздуха */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={3} />
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
              v = (G / 3600) / F <sub>ф</sub>
            </span>
          </ProductParagraph>
          <ul>
            <li>
              v – действительная массовая скорость во фронтальном сечении,
              кг/(м²·с);
            </li>
            <li>G – массовый расход воздуха, кг/час;</li>
            <li>
              F<sub>ф</sub> – площадь действительного фронтального сечения
              подобранного водяного теплообменника, принимаемого в расчет, м²;
            </li>
            <li>
              3600 – коэффициент перевода часового расхода воздуха в секундный.
            </li>
          </ul>
        </div>
        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 3
            </ProductParagraph>
            <ProductParagraph>
              Подобрать водяной калорифер для нагрева приточного воздуха объемом
              15000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г.
              Нижневартовска -40°С с обеспеченностью 0.92. Для компенсации
              теплопотерь здания системой совмещенного воздушного отопления
              требуемая температура подаваемого воздуха на выходе из калорифера
              должна составлять +25°С. Теплоноситель — горячая вода с
              параметрами температурного графика 95/70°С.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 3. Найти действительную массовую скорость во фронтальном
              сечении теплообменников, выбранных для расчета и подбора.
              Принимаем воздухонагреватели серий КСк, ТВВ 11-го номера и КФБ-А М
              14-го номера, как имеющие наиболее приближенные значения площади
              фронтального сечения для прохода воздуха: 1.660 м² и 1.577 м²
              соответственно. Массовая скорость во фронтальном сечении каждого
              водяного промышленного воздухоподогревателя одного типоразмера,
              вне зависимости от рядности, будет одинакова.
            </ProductParagraph>
            <FormulasList>
              <li className="flex items-baseline justify-between gap-2">
                Калориферы КСк и ТВВ 11-го номера
                <span className="block text-xl font-bold">
                  v = (19950/3600) / 1.660 = 3.34 кг/(м²•с)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калориферы КФБ-А М 14-го номера
                <span className="block text-xl font-bold">
                  v = (19950/3600) / 1.577 = 3.51 кг/(м²•с)
                </span>
              </li>
            </FormulasList>
            <ul>
              <li>
                v – действительная массовая скорость во фронтальном сечении,
                кг/(м²•с);
              </li>
              <li>19950 – массовый расход воздуха, кг/час;</li>
              <li>
                1.660, 1.577 – площадь фронтального сечения калориферов КСк,
                ТВВ, КФБ-А М, принимаемых в расчет, м².
              </li>
            </ul>
          </div>
        </div>
        <LinkButtonsBlock
          buttons={[
            {
              name: "Массовая скорость воздуха",
              url: "/raschet-kaloriferov#anchor2",
              hiddenText:
                "Массовая скорость воздуха в фронтальном сечении калорифера",
            },
            {
              name: "Параметры водяного пара",
              url: "/kalorifer-par#anchor1",
              hiddenText:
                "Таблица свойств водяного пара в зависимости от давления",
            },
          ]}
        />
      </section>

      <Separator />

      {/* 4. Расчет расхода воды для нагрева */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={4} />
        <Heading lvl={2} text="Расчет расхода воды для нагрева" />
        <div>
          <ProductParagraph>
            4. Рассчитываем необходимый массовый расход теплоносителя (воды)
            исходя из требуемой тепловой мощности для нагрева заданного объема
            воздуха:{" "}
            <span className="block text-2xl font-bold">
              G<sub>w</sub> = Q / (c<sub>w</sub> • (t{" "}
              <sub className="font-normal">вх</sub> - t{" "}
              <sub className="font-normal">вых</sub>))
            </span>
          </ProductParagraph>
          <ul>
            <li>
              G <sub>w</sub> – массовый расход воды, кг/сек;
            </li>
            <li>
              Q – расход тепла (требуемая тепловая мощность) для нагрева
              воздуха, Вт;
            </li>
            <li>
              c <sub>w</sub> – удельная теплоемкость воды при средней
              температуре на входе и выходе из прибора, Дж/(кг•°С);
            </li>
            <li>
              t вх – температура горячей воды на входе в калорифер (подающий
              контур), °С;
            </li>
            <li>
              t вых – температура охлажденной воды на выходе из калорифера
              (обратный контур), °С.
            </li>
          </ul>
        </div>
        <ProductParagraph className="text-secondary-text">
          Удельная теплоемкость воды определяет количество энергии, необходимое
          для изменения температуры одного килограмма жидкости на один градус
          Цельсия. Поскольку водяной воздухонагреватель передает тепло
          воздушному потоку без фазового перехода — исключительно за счет
          температурного скольжения (остывания рабочей среды), — разность
          температур на входе и выходе напрямую определяет разность удельных
          энтальпий теплоносителя. Значения теплоемкости и энтальпии для
          подающей и обратной линий тепловой сети принимаются с учетом
          параметров используемого температурного графика по выложенной таблице
          теплофизических свойств воды.
        </ProductParagraph>

        <WaterPropsOnSaturationLineTable />

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 4
            </ProductParagraph>
            <ProductParagraph>
              Подобрать водяной калорифер для нагрева приточного воздуха объемом
              15000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г.
              Нижневартовска -40°С с обеспеченностью 0.92. Для компенсации
              теплопотерь здания системой совмещенного воздушного отопления
              требуемая температура подаваемого воздуха на выходе из калорифера
              должна составлять +25°С. Теплоноситель — горячая вода с
              параметрами температурного графика 95/70°С.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 4. Рассчитать потребление горячей воды с параметрами
              температурного графика 95/70°С для нагрева приточного воздуха
              объемом 15000 м³/час от -40°С до +25°С.
            </ProductParagraph>
            <ProductParagraph>
              Подсчет расхода воды:{" "}
              <span className="text-xl font-bold">
                G<sub>w</sub> = 362370 / (4198 • (95 - 70)) = 362370 / 104950 =
                3.453 кг/сек = 12430 кг/час
              </span>
            </ProductParagraph>
            <ul>
              <li>
                G<sub>w</sub> – массовый расход воды, кг/сек;
              </li>
              <li>362370 – расход тепла для нагрева воздуха, Вт;</li>
              <li>
                4198 – удельная теплоемкость воды (Дж/(кг·°С)) при средней
                температуре теплоносителя 82.5°С, принимается по таблице;
              </li>
              <li>
                95 – температура горячей воды на входе в калорифер (подающий
                контур), °С;
              </li>
              <li>
                70 – температура охлажденной воды на выходе из калорифера
                (обратный контур), °С.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      {/* 5. Подсчет скорости движения воды в трубках */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={5} />
        <Heading lvl={2} text="Подсчет скорости движения воды в трубках" />
        <div>
          <ProductParagraph>
            5. Находим скорость теплоносителя внутри трубок подобранных
            калориферов:{" "}
            <span className="text-2xl font-bold">
              W = G<sub>w</sub> / (p<sub>w</sub> • f<sub>w</sub>)
            </span>
          </ProductParagraph>
          <ul>
            <li>W – скорость движения воды в трубках калорифера, м/с;</li>
            <li>
              G <sub>w</sub> – расход теплоносителя, кг/сек;
            </li>
            <li>
              p <sub>w</sub> – плотность воды при ее средней температуре в
              воздухонагревателе, кг/м³ (принимается по таблице свойств
              теплоносителя);
            </li>
            <li>
              f <sub>w</sub> – площадь живого сечения одного хода выбранного
              калорифера для прохода воды, м² (принимается по каталожной таблице
              характеристик).
            </li>
          </ul>
        </div>

        <ProductParagraph className="text-secondary-text">
          Для стабильного турбулентного течения жидкости, гарантирующего высокий
          коэффициент теплопередачи, оптимальная скорость теплоносителя в
          трубках должна находиться в пределах 0.2–0.5 м/с, а допустимый рабочий
          диапазон составляет от 0.12 до 1.2 м/с. Нижний порог скорости
          обусловлен переходом потока в ламинарный режим с резким падением
          теплоотдачи; в зимний период увеличение толщины пристенного
          пограничного слоя и ухудшение переноса тепла приводят к стремительному
          замерзанию трубок. Превышение же верхнего предела ведет к
          квадратичному росту гидравлического сопротивления и ускоренному
          эрозионному износу внутренних каналов.
        </ProductParagraph>

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 5
            </ProductParagraph>
            <ProductParagraph>
              Подобрать водяной калорифер для нагрева приточного воздуха объемом
              15000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г.
              Нижневартовска -40°С с обеспеченностью 0.92. Для компенсации
              теплопотерь здания системой совмещенного воздушного отопления
              требуемая температура подаваемого воздуха на выходе из калорифера
              должна составлять +25°С. Теплоноситель — горячая вода с
              параметрами температурного графика 95/70°С.
            </ProductParagraph>
          </div>
          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 5. Найти скорость движения воды внутри нагревательных
              трубок подобранных теплообменников при расходе теплоносителя 3.453
              кг/сек. Калориферы ТВВ-311 и ТВВ-411 выпускаются в четырех- и
              шестиходовом исполнении, поэтому в расчете задействованы оба
              варианта.
            </ProductParagraph>
            <FormulasList>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КСк 2-11
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00156) = 3.453 / 1.513 = 2.28 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КСк 3-11
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00236) = 3.453 / 2.289 = 1.51 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КСк 4-11
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00312) = 3.453 / 3.026 = 1.14 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 311 (4 хода)
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00461) = 3.453 / 4.472 = 0.77 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 311 (6 ходов)
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00307) = 3.453 / 2.978 = 1.16 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 411 (4 хода)
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00610) = 3.453 / 5.917 = 0.58 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 411 (6 ходов)
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00406) = 3.453 / 3.938 = 0.88 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-14 А3 М
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00336) = 3.453 / 3.259 = 1.06 м/с
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-14 А4 М
                <span className="text-xl font-bold">
                  W = 3.453 / (970 • 0.00444) = 3.453 / 4.307 = 0.80 м/с
                </span>
              </li>
            </FormulasList>
            <ul>
              <li>W – скорость движения воды в трубках калорифера, м/с;</li>
              <li>3.453 – массовый расход теплоносителя, кг/сек;</li>
              <li>
                970 – плотность воды при ее средней температуре 82.5°С, кг/м³;
              </li>
              <li>
                0.00156...0.00610 – площади живого сечения одного хода
                соответствующих моделей, м².
              </li>
            </ul>
          </div>
        </div>
        <div className="text-secondary-text space-y-4">
          <div>
            <ProductParagraph>
              На основании полученных данных предварительного гидравлического
              расчета проведен анализ применимости оборудования, по результатам
              которого исключены модели, не соответствующие эксплуатационным
              требованиям:
            </ProductParagraph>
            <ul>
              <li>
                • Модели КСк 2-11 (2.28 м/с) и КСк 3-11 (1.51 м/с) полностью
                исключаются из дальнейшего расчета. Скорость теплоносителя в них
                существенно превышает предельно допустимый порог в 1.2 м/с. Это
                вызовет интенсивный рост гидравлического сопротивления и
                критические потери давления в контуре.
              </li>
              <li>
                • Модели КСк 4-11 (1.14 м/с), ТВВ 311 в 6-ходовом исполнении
                (1.16 м/с) и КФБ-14 А3 М (1.06 м/с) находятся вблизи верхней
                границы допустимого эксплуатационного диапазона. Дальнейший
                расчет данных модификаций допускается, однако при проектировании
                требуется учесть повышенные требования к располагаемому напору
                насосного оборудования смесительного узла.
              </li>
              <li>
                • Модели ТВВ-311 в 4-ходовом исполнении (0.77 м/с), ТВВ-411 в
                4-ходовом (0.58 м/с) и 6-ходовом исполнении (0.88 м/с), а также
                КФБ-14 А4 М (0.80 м/с) демонстрируют наиболее сбалансированные и
                технически обоснованные гидродинамические показатели. Скорость
                воды в них обеспечивает стабильный турбулентный режим
                теплообмена при сохранении умеренного гидравлического
                сопротивления тракта.
              </li>
            </ul>
          </div>
          <div>
            <ProductParagraph>
              В случае если для комплектации вентиляционной секции приняты два
              или более воздухонагревателя, базовая формула расчета скорости
              теплоносителя в трубках действительна только при их
              последовательном подсоединении по воде. При такой схеме обвязки
              весь расчетный массовый расход жидкости последовательно проходит
              через внутренние контуры сначала первого, а затем второго
              теплообменника. При параллельном подключении оборудования (когда
              питающий трубопровод подводится к каждому прибору отдельно) поток
              воды разделяется. В этом случае суммарная площадь живого сечения
              для прохода воды увеличивается пропорционально количеству
              калориферов. Например, при компоновке вентиляционной секции из
              двух трехрядных калориферов КСк 3-10, устанавливаемых параллельно
              по ходу воздуха для набора требуемого фронтального сечения,
              площадь живого сечения одного хода по воде (f w) для данной
              модели, согласно каталожным характеристикам, составляет 0.00116
              м². При расчетном массовом расходе теплоносителя в системе 1.5
              кг/с и плотности воды 970 кг/м³ (при средней температуре)
              действительная скорость движения жидкости в трубках составит:
            </ProductParagraph>
            <ul>
              <li>
                • При последовательном подсоединении калориферов:{" "}
                <span className="text-lg font-bold">
                  W = G<sub>w</sub> / (p<sub>w</sub> • f<sub>w</sub>) = 1.5 /
                  (970 • 0.00116) = 1.33 м/с
                </span>
              </li>
              <li>
                • При параллельном подсоединении калориферов:{" "}
                <span className="text-lg font-bold">
                  W = G<sub>w</sub> / (p<sub>w</sub> • 2f<sub>w</sub>) = 1.5 /
                  (970 • (2 • 0.00116)) = 0.67 м/с
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Расчет коэффициента теплопередачи */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={5} />
        <Heading lvl={2} text="Расчет коэффициента теплопередачи" />

        <div>
          <ProductParagraph>
            6. Произвести расчет коэффициента теплопередачи выбранных водяных
            воздухонагревателей приточной вентиляции. Коэффициент теплопередачи
            можно установить двумя способами: используя формулу со значениями,
            полученными на основе обработки экспериментальных теплотехнических
            испытаний; воспользовавшись таблицами с рассчитанными результатами
            по каждой модели спирально-накатных калориферов, выпускаемых нашим
            предприятием.
          </ProductParagraph>
          <ProductParagraph>
            Формула для нахождения коэффициента теплопередачи имеет вид:{" "}
            <span className="text-2xl font-bold">
              К = A • v <sup>n</sup> • W <sup>r</sup>
            </span>
          </ProductParagraph>
          <ul>
            <li>
              К – коэффициент теплопередачи биметаллического калорифера,
              Вт/(м²·°С);
            </li>
            <li>
              v – действительная массовая скорость воздуха в фронтальном сечении
              подобранного водяного калорифера, кг/(м²·с);
            </li>
            <li>
              W – скорость движения воды в трубках воздухоподогревателя, м/с;
            </li>
            <li>
              A, n, r – эмпирические значения модуля и степеней, определяемые
              экспериментально для каждого типоразмера и рядности
              теплообменников по каталожным таблицам.
            </li>
          </ul>
        </div>

        <WaterCalcHeatTransferCoefficientTables />

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 6
            </ProductParagraph>
            <ProductParagraph>
              Подобрать водяной калорифер для нагрева приточного воздуха объемом
              15000 м³/час. Расчетная температура наружного воздуха принимается
              по средней температуре наиболее холодной пятидневки г.
              Нижневартовска -40°С с обеспеченностью 0.92. Для компенсации
              теплопотерь здания системой совмещенного воздушного отопления
              требуемая температура подаваемого воздуха на выходе из калорифера
              должна составлять +25°С. Теплоноситель — горячая вода с
              параметрами температурного графика 95/70°С.
            </ProductParagraph>
          </div>

          <div>
            <ProductParagraph>
              ДЕЙСТВИЕ 6. Рассчитать коэффициент теплопередачи для всех моделей
              калориферов, соответствующих гидравлическим критериям предыдущего
              этапа. Принимаем модели КСк 4-11, ТВВ 311, ТВВ 411 с массовой
              скоростью 3.34 кг/(м²•с), КФБ-14 А3 М и КФБ-14 А4 М с массовой
              скоростью 3.51 кг/(м²•с). Скорость теплоносителя берется из
              предыдущего расчета, эмпирические коэффициенты завода-изготовителя
              принимаются по табличным данным.
            </ProductParagraph>
            <FormulasList>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КСк 4-11
                <span className="text-xl font-bold">
                  К = 25.5 • 3.34 <sup>0.496</sup> • 1.14 <sup>0.160</sup> =
                  47.36 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 311 (4 хода)
                <span className="text-xl font-bold">
                  К = 29.4 • 3.34 <sup>0.515</sup> • 0.77 <sup>0.0945 </sup> =
                  53.38 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 311 (6 ходов)
                <span className="text-xl font-bold">
                  К = 29.4 • 3.34 <sup>0.515</sup> • 1.16 <sup>0.0945 </sup> =
                  55.48 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 411 (4 хода)
                <span className="text-xl font-bold">
                  К = 28.1 • 3.34 <sup>0.518</sup> • 0.58 <sup>0.0681</sup> =
                  50.57 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер ТВВ 411 (6 ходов)
                <span className="text-xl font-bold">
                  К = 28.1 • 3.34 <sup>0.518</sup> • 0.88 <sup>0.0681</sup> =
                  52.03 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-14 А3 М
                <span className="text-xl font-bold">
                  К = 29.4 • 3.51 <sup>0.515</sup> • 1.06 <sup>0.0945 </sup> =
                  56.44 Вт/(м²•°C)
                </span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                Калорифер КФБ-14 А4 М
                <span className="text-xl font-bold">
                  К = 28.1 • 3.51 <sup>0.518</sup> • 0.80 <sup>0.0681</sup> =
                  53.04 Вт/(м²•°C)
                </span>
              </li>
            </FormulasList>
            <ul>
              <li>
                К – коэффициент теплопередачи биметаллического калорифера,
                Вт/(м²·°С);
              </li>
              <li>
                3.34, 3.51 – действительные массовые скорости воздуха,
                кг/(м²·с);
              </li>
              <li>
                0.58...1.16 – скорости движения теплоносителя в трубках, м/с.
              </li>
            </ul>
          </div>
        </div>

        <ProductParagraph className="text-secondary-text">
          Подробное описание нахождения коэффициента теплопередачи водяных
          биметаллических калориферов и таблицы с расчетными данными по каждой
          модели можно посмотреть на странице сайта: Коэффициент теплопередачи
          водяных калориферов.
        </ProductParagraph>

        <LinkButtonsBlock
          buttons={[
            {
              name: "Расчет коэффициентов пар",
              url: "/koefficient-teploperedachi-parovyh-kaloriferov#anchor2",
              hiddenText:
                "Расчет коэффициента теплопередачи парового воздухонагревателя",
            },
            {
              name: "Таблицы коэффициентов пар",
              url: "/koefficient-teploperedachi-parovyh-kaloriferov#anchor3",
              hiddenText:
                "Таблицы коэффициентов теплопередачи и аэродинамического сопротивления паровых калориферов ",
            },
          ]}
        />
      </section>

      <Separator />
    </>
  );
}

function FormulasList({ children }) {
  return <ul className="max-w-3xl space-y-2 sm:space-y-0.5">{children}</ul>;
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
