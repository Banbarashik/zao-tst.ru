import { KFB_12_A3, KFB_12_A4 } from "@/data/ntu-summary";

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
import { NtuSummaryTable } from "@/components/general_pages/ntuSummaryTable";

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
                <span className="text-xl font-bold">G = V • р</span>
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
                <span className="text-xl font-bold">
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
                  <span className="font-bold">
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
                  <span className="block font-bold">
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
            <span className="text-xl font-bold">f = (G / 3600) / v</span>
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
              <span className="font-bold">
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
            <span className="text-xl font-bold">
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
          <div className="space-y-3">
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
            <div className="space-y-1">
              <ul className="max-w-5xl space-y-2 sm:space-y-0.5">
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калориферы КСк и ТВВ 11-го номера
                  <span className="block font-bold">
                    v = (19950/3600) / 1.660 = 3.34 кг/(м²•с)
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калориферы КФБ-А М 14-го номера
                  <span className="block font-bold">
                    v = (19950/3600) / 1.577 = 3.51 кг/(м²•с)
                  </span>
                </li>
              </ul>
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
            <span className="block text-xl font-bold">
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
              <span className="font-bold">
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
            <span className="text-xl font-bold">
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
          <div className="space-y-3">
            <ProductParagraph>
              ДЕЙСТВИЕ 5. Найти скорость движения воды внутри нагревательных
              трубок подобранных теплообменников при расходе теплоносителя 3.453
              кг/сек. Калориферы ТВВ-311 и ТВВ-411 выпускаются в четырех- и
              шестиходовом исполнении, поэтому в расчете задействованы оба
              варианта.
            </ProductParagraph>
            <div className="space-y-1">
              <ul className="max-w-3xl space-y-2 sm:space-y-0.5">
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КСк 2-11
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00156) = 3.453 / 1.513 = 2.28 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КСк 3-11
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00236) = 3.453 / 2.289 = 1.51 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КСк 4-11
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00312) = 3.453 / 3.026 = 1.14 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 311 (4 хода)
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00461) = 3.453 / 4.472 = 0.77 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 311 (6 ходов)
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00307) = 3.453 / 2.978 = 1.16 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 411 (4 хода)
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00610) = 3.453 / 5.917 = 0.58 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 411 (6 ходов)
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00406) = 3.453 / 3.938 = 0.88 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КФБ-14 А3 М
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00336) = 3.453 / 3.259 = 1.06 м/с
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КФБ-14 А4 М
                  <span className="font-bold">
                    W = 3.453 / (970 • 0.00444) = 3.453 / 4.307 = 0.80 м/с
                  </span>
                </li>
              </ul>
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
        <NumberedAnchor num={6} />
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
            <span className="text-xl font-bold">
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

          <div className="space-y-3">
            <ProductParagraph>
              ДЕЙСТВИЕ 6. Рассчитать коэффициент теплопередачи для всех моделей
              калориферов, соответствующих гидравлическим критериям предыдущего
              этапа. Принимаем модели КСк 4-11, ТВВ 311, ТВВ 411 с массовой
              скоростью 3.34 кг/(м²•с), КФБ-14 А3 М и КФБ-14 А4 М с массовой
              скоростью 3.51 кг/(м²•с). Скорость теплоносителя берется из
              предыдущего расчета, эмпирические коэффициенты завода-изготовителя
              принимаются по табличным данным.
            </ProductParagraph>
            <div className="space-y-1">
              <ul className="max-w-3xl space-y-2 sm:space-y-0.5">
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КСк 4-11
                  <span className="font-bold">
                    К = 25.5 • 3.34 <sup>0.496</sup> • 1.14 <sup>0.160</sup> =
                    47.36 Вт/(м²•°C)
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 311 (4 хода)
                  <span className="font-bold">
                    К = 29.4 • 3.34 <sup>0.515</sup> • 0.77 <sup>0.0945 </sup> =
                    53.38 Вт/(м²•°C)
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 311 (6 ходов)
                  <span className="font-bold">
                    К = 29.4 • 3.34 <sup>0.515</sup> • 1.16 <sup>0.0945 </sup> =
                    55.48 Вт/(м²•°C)
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 411 (4 хода)
                  <span className="font-bold">
                    К = 28.1 • 3.34 <sup>0.518</sup> • 0.58 <sup>0.0681</sup> =
                    50.57 Вт/(м²•°C)
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер ТВВ 411 (6 ходов)
                  <span className="font-bold">
                    К = 28.1 • 3.34 <sup>0.518</sup> • 0.88 <sup>0.0681</sup> =
                    52.03 Вт/(м²•°C)
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КФБ-14 А3 М
                  <span className="font-bold">
                    К = 29.4 • 3.51 <sup>0.515</sup> • 1.06 <sup>0.0945 </sup> =
                    56.44 Вт/(м²•°C)
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  Калорифер КФБ-14 А4 М
                  <span className="font-bold">
                    К = 28.1 • 3.51 <sup>0.518</sup> • 0.80 <sup>0.0681</sup> =
                    53.04 Вт/(м²•°C)
                  </span>
                </li>
              </ul>
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

      {/* 7. Расчет температурного напора калорифера */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={7} />
        <Heading lvl={2} text="Расчет температурного напора калорифера" />
        <ProductParagraph>
          7. Расчет среднего по поверхности температурного напора. Принцип
          работы водяного калорифера построен на теплообмене двух контуров:
          греющего (первичный теплоноситель — горячая вода) и нагреваемого
          (вторичный теплоноситель — воздух). Нагрев воздушного потока
          происходит за счет непрерывного остывания циркулирующей жидкости,
          движущейся по каналам гидравлического тракта. Чем выше разница
          температур между потоками, тем интенсивнее происходит теплоперенос.
        </ProductParagraph>

        <div>
          <ProductParagraph>
            Определение температурного напора выполняется в следующей
            последовательности:
          </ProductParagraph>
          <ol>
            <li>
              <ProductParagraph>
                1. Находим разности температур сред на входе и выходе из
                аппарата:
              </ProductParagraph>
              <ProductParagraph className="text-xl font-bold">
                Δ t1 = T1 - T3
              </ProductParagraph>
              <ProductParagraph className="text-xl font-bold">
                Δ t2 = T2 - T4
              </ProductParagraph>
              <ul>
                <li>
                  T1 – температура горячей воды на входе в калорифер (подача),
                  °С;
                </li>
                <li>
                  T2 – температура охлажденной воды на выходе из калорифера
                  (обратка), °С;
                </li>
                <li>
                  T3 – температура нагретого воздуха на выходе из калорифера,
                  °С;
                </li>
                <li>
                  T4 – температура наружного воздуха на входе в калорифер, °С.
                </li>
              </ul>
              <ProductParagraph>
                Из полученных значений Δ t1 и Δ t2 большее принимается как Δ T{" "}
                <sub>Б</sub>, а меньшее — как Δ T <sub>М</sub>.
              </ProductParagraph>
            </li>

            <li>
              <ProductParagraph>
                2. На основании соотношения полученных величин выбирается
                расчетная формула:
              </ProductParagraph>
              <ProductParagraph>
                Если отношение Δ T <sub>Б</sub> / Δ T <sub>М</sub> меньше или
                равно 1.8, температурный напор вычисляется как среднее
                арифметическое:{" "}
                <span className="block text-xl font-bold">
                  Δ T = (Δ T <sub>Б</sub> + Δ T <sub>М</sub>) / 2
                </span>
              </ProductParagraph>
              <ProductParagraph>
                Если отношение Δ T <sub>Б</sub> / Δ T <sub>М</sub> больше 1.8,
                температурный напор вычисляется по среднелогарифмической
                зависимости:{" "}
                <span className="block text-xl font-bold">
                  Δ T = (Δ T <sub>Б</sub> - Δ T <sub>М</sub>) / ln (Δ T{" "}
                  <sub>Б</sub> / Δ T <sub>М</sub>)
                </span>
              </ProductParagraph>
              <ProductParagraph>
                Натуральный логарифм ln(x) — это логарифм по основанию e
                (иррациональная константа, равная приблизительно 2.71828),
                определяющий показатель степени, в которую нужно возвести число
                e, чтобы получить x.
              </ProductParagraph>
            </li>
          </ol>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-800/500 w-full">
            <Image
              src="/img/general_pages/voda_kalorifer_temperatura_napor.png"
              alt="Расчет температурного напора водяного калорифера"
              title="Средний арифметический температурный напор"
              fill
            />
          </div>
          <div className="relative aspect-800/500 w-full">
            <Image
              src="/img/general_pages/water_kalorifer_temperatura_napor.png "
              alt="Дельта температур при расчете и подборе водяного калорифера"
              title="Формула арифметического температурного напора"
              fill
            />
          </div>
        </div>

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 7
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
              ДЕЙСТВИЕ 7. Найти средний температурный напор для заданного
              теплового режима работы приточной установки.
            </ProductParagraph>
            <ol>
              <li>
                <ProductParagraph>
                  1. Определяем разности температур греющей и нагреваемой сред
                  на входах и выходах из контура:
                  <span className="block font-bold">
                    Δ t1 = T1 - T3 = 95 - 25 = 70°С
                  </span>{" "}
                  <span className="block font-bold">
                    Δ t2 = T2 - T4 = 70 - (-40) = 110°С
                  </span>
                </ProductParagraph>
                <ul>
                  <li>
                    T1 – температура горячей воды на входе (подача), 95°С;
                  </li>
                  <li>
                    T2 – температура охлажденной воды на выходе (обратка), 70°С;
                  </li>
                  <li>T3 – температура приточного воздуха на выходе, +25°С;</li>
                  <li>
                    T4 – температура наружного холодного воздуха на входе,
                    -40°С.
                  </li>
                </ul>
                <ProductParagraph>
                  Из полученных значений большее принимается как Δ T{" "}
                  <sub>Б</sub> = 110°С, меньшее — как Δ T <sub>М</sub> = 70°С.
                </ProductParagraph>
              </li>
              <li>
                <ProductParagraph>
                  2. Проверяем соотношение полученных температурных перепадов
                  для выбора расчетной формулы:{" "}
                  <span className="block font-bold">
                    Δ T <sub>Б</sub> / Δ T <sub>М</sub> = 110 / 70 = 1.57
                  </span>
                </ProductParagraph>
                <ProductParagraph>
                  Поскольку полученное отношение 1.57 меньше нормативного порога
                  1.8 (Δ T <sub>Б</sub> / Δ T <sub>М</sub> ≤ 1.8), для расчета
                  среднего температурного напора применяется упрощенная формула
                  среднего арифметического:{" "}
                  <span className="block font-bold">
                    Δ T = (Δ T <sub>Б</sub> + Δ T <sub>М</sub>) / 2 = (110 + 70)
                    / 2 = 90.0°С
                  </span>
                </ProductParagraph>
                <ul>
                  <li>Δ T – расчетный средний температурный напор, °С.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

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

      {/* 8. Расчет тепловой мощности водяного калорифера */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={8} />
        <Heading lvl={2} text="Расчет тепловой мощности водяного калорифера" />

        <div>
          <ProductParagraph>
            8. Расчет фактической тепловой мощности калорифера. Уточняем
            фактическую теплопроизводительность подобранных моделей водяных
            воздухонагревателей для приточной вентиляции.
          </ProductParagraph>
          <ProductParagraph>
            Расчет фактической тепловой мощности производится по формуле:{" "}
            <span className="block text-xl font-bold">
              Q <sub className="font-normal">факт</sub> = K • F <sub>К</sub> • Δ
              T
            </span>
          </ProductParagraph>
          <ProductParagraph>
            Если расчет среднего температурного напора на предыдущем этапе не
            выполнялся, допускается вычисление мощности через среднеинтервальную
            разность температур сред:{" "}
            <span className="block text-xl font-bold">
              Q <sub className="font-normal">факт</sub> = K • F <sub>К</sub> •
              (((T1 + T2) / 2) - ((T4 + T3) / 2))
            </span>
          </ProductParagraph>
          <ul>
            <li>
              Q <sub>факт</sub> – вырабатываемая калорифером фактическая
              производительность по теплу, Вт;
            </li>
            <li>
              K – действительный коэффициент теплопередачи выбранной модификации
              калорифера, Вт/(м²·°С);
            </li>
            <li>
              F <sub>к</sub> – площадь поверхности теплообмена (нагрева)
              выбранного калорифера, принимаемая по каталогу производителя, м²;
            </li>
            <li>
              Δ T – расчетный средний температурный напор при заданных
              параметрах теплоносителей, °С;
            </li>
            <li>
              T1 – температура горячей воды на входе в калорифер (подающий
              контур), °С;
            </li>
            <li>
              T2 – температура охлажденной воды на выходе из калорифера
              (обратный контур), °С;
            </li>
            <li>
              T3 – температура нагретого воздуха на выходе из калорифера, °С;
            </li>
            <li>
              T4 – температура наружного воздуха на входе в калорифер, °С.
            </li>
          </ul>
        </div>

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 8
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

          <div className="space-y-3">
            <ProductParagraph>
              ДЕЙСТВИЕ 8. Рассчитать действительную (фактическую) тепловую
              мощность подобранных водяных воздухонагревателей.
            </ProductParagraph>
            <div className="space-y-1">
              <ul className="max-w-3xl space-y-2 sm:space-y-0.5">
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер КСк 4-11</span>
                  <span className="font-bold">
                    Q факт = 47.36 • 114.2 • 90.0 = 486766 Вт
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 311 (4 хода)</span>
                  <span className="font-bold">
                    Q факт = 53.38 • 63.6 • 90.0 = 305547 Вт
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 311 (6 ходов)</span>
                  <span className="font-bold">
                    Q факт = 55.48 • 63.6 • 90.0 = 317568 Вт
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 411 (4 хода)</span>
                  <span className="font-bold">
                    Q факт = 50.57 • 84.2 • 90.0 = 383219 Вт
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 411 (6 ходов)</span>
                  <span className="font-bold">
                    Q факт = 52.03 • 84.2 • 90.0 = 394283 Вт
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер КФБ-14 А3 М</span>
                  <span className="font-bold">
                    Q факт = 56.44 • 61.5 • 90.0 = 312395 Вт
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер КФБ-14 А4 М</span>
                  <span className="font-bold">
                    Q факт = 53.04 • 81.4 • 90.0 = 388571 Вт
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  Q <sub>факт</sub> – вырабатываемая калорифером фактическая
                  производительность по теплу, Вт;
                </li>
                <li>
                  47.36...56.44 – коэффициенты теплопередачи соответствующих
                  модификаций, Вт/(м²·°С);
                </li>
                <li>
                  61.5...114.2 – площадь поверхности нагрева выбранных
                  калориферов по каталогу, м²;
                </li>
                <li>90.0 – средний температурный напор, °С.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* 9. Расчет расхода и скорости воды */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={9} />
        <Heading lvl={2} text="Расчет расхода и скорости воды" />

        <div>
          <ProductParagraph>
            9. Расчет фактического расхода и скорости теплоносителя. Уточняем
            фактический расход и скорость движения теплоносителя в
            нагревательных трубках на основании выработанной тепловой мощности
            подобранных калориферов.
          </ProductParagraph>
          <ol>
            <li>
              <ProductParagraph>
                9.1 Расчет фактического (действительного) расхода горячей воды:{" "}
                <span className="block text-xl font-bold">
                  G w <sub className="font-normal">факт</sub> = Q{" "}
                  <sub className="font-normal">факт</sub> / (c <sub>w</sub> •
                  (T1 - T2))
                </span>
              </ProductParagraph>
              <ul>
                <li>
                  G w <sub>факт</sub> – фактический массовый расход воды через
                  калорифер, кг/сек;
                </li>
                <li>
                  Q <sub>факт</sub> – фактическая тепловая мощность выбранной
                  модели калорифера, Вт;
                </li>
                <li>
                  c w – удельная теплоемкость воды при ее средней температуре в
                  воздухонагревателе, Дж/(кг•°С);
                </li>
                <li>
                  T1 – температура горячей воды на входе в калорифер (подающий
                  контур), °С;
                </li>
                <li>
                  T2 – температура охлажденной воды на выходе из калорифера
                  (обратный контур), °С.
                </li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                9.2 Расчет фактической (действительной) скорости движения
                теплоносителя:{" "}
                <span className="block text-xl font-bold">
                  W <sub className="font-normal">факт</sub> = G <sub>w</sub>{" "}
                  <sub className="font-normal">факт</sub> / (p <sub>w</sub> • f{" "}
                  <sub>w</sub>)
                </span>
              </ProductParagraph>
              <ul>
                <li>
                  W <sub>факт</sub> – фактическая скорость движения воды в
                  трубках калорифера, м/с;
                </li>
                <li>
                  G w <sub>факт</sub> – фактический массовый расход
                  теплоносителя, кг/сек;
                </li>
                <li>
                  p w – плотность воды при ее средней рабочей температуре,
                  кг/м³;
                </li>
                <li>
                  f w – площадь живого сечения одного хода выбранного калорифера
                  для прохода воды, м².
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 9
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

          <div className="space-y-3">
            <ProductParagraph>
              ДЕЙСТВИЕ 9. Рассчитать фактический расход воды и фактическую
              скорость ее движения в трубках на основании реальной тепловой
              мощности, вырабатываемой каждым калорифером.
            </ProductParagraph>

            <div className="space-y-1">
              <ProductParagraph>
                Знаменатель для расчета расхода воды одинаков для всех моделей:{" "}
                <span className="font-bold">
                  c w • (T1 - T2) = 4198 • (95 - 70) = 104950
                </span>
              </ProductParagraph>
              <div className="space-y-4">
                <ul className="max-w-4xl space-y-2 sm:space-y-0.5">
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер КСк 4-11</span>
                    <span className="font-bold">
                      G w факт = 486766 / 104950 = 4.638 кг/сек = 16697 кг/час
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 311 (4 хода)</span>
                    <span className="font-bold">
                      G w факт = 305547 / 104950 = 2.911 кг/сек = 10481 кг/час
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 311 (6 ходов)</span>
                    <span className="font-bold">
                      G w факт = 317568 / 104950 = 3.026 кг/сек = 10893 кг/час
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 411 (4 хода)</span>
                    <span className="font-bold">
                      G w факт = 383219 / 104950 = 3.651 кг/сек = 13145 кг/час
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 411 (6 ходов)</span>
                    <span className="font-bold">
                      G w факт = 394283 / 104950 = 3.757 кг/сек = 13525 кг/час
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер КФБ-14 А3 М</span>
                    <span className="font-bold">
                      G w факт = 312395 / 104950 = 2.977 кг/сек = 10716 кг/час
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер КФБ-14 А4 М</span>
                    <span className="font-bold">
                      G w факт = 388571 / 104950 = 3.702 кг/сек = 13329 кг/час
                    </span>
                  </li>
                </ul>
                <ul className="max-w-4xl space-y-2 sm:space-y-0.5">
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер КСк 4-11</span>
                    <span className="font-bold">
                      W факт = 4.638 / (970 • 0.00312) = 4.638 / 3.026 = 1.53
                      м/с
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 311 (4 хода)</span>
                    <span className="font-bold">
                      W факт = 2.911 / (970 • 0.00461) = 2.911 / 4.472 = 0.65
                      м/с
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 311 (6 ходов)</span>
                    <span className="font-bold">
                      W факт = 3.026 / (970 • 0.00307) = 3.026 / 2.978 = 1.02
                      м/с
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 411 (4 хода)</span>
                    <span className="font-bold">
                      W факт = 3.651 / (970 • 0.00610) = 3.651 / 5.917 = 0.62
                      м/с
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер ТВВ 411 (6 ходов)</span>
                    <span className="font-bold">
                      W факт = 3.757 / (970 • 0.00406) = 3.757 / 3.938 = 0.95
                      м/с
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер КФБ-14 А3 М</span>
                    <span className="font-bold">
                      W факт = 2.977 / (970 • 0.00336) = 2.977 / 3.259 = 0.91
                      м/с
                    </span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                    <span>Калорифер КФБ-14 А4 М</span>
                    <span className="font-bold">
                      W факт = 3.702 / (970 • 0.00444) = 3.702 / 4.307 = 0.86
                      м/с
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-secondary-text">
            <ProductParagraph>
              На основании выполненного расчета фактических параметров
              теплоносителя проведен повторный анализ применимости оборудования,
              по результатам которого из дальнейшего рассмотрения исключена
              модель, не соответствующая эксплуатационным требованиям:
            </ProductParagraph>
            <ProductParagraph>
              • Модель КСк 4-11 исключается из дальнейшего расчета. Из-за
              избыточной площади поверхности нагрева ее фактическая
              теплопроизводительность возрастает до 487 кВт. Данный избыток
              мощности приводит к увеличению расхода теплоносителя через
              калорифер до 16.7 т/ч. Как следствие, фактическая скорость
              движения воды в трубках достигает 1.53 м/с, что превышает
              предельно допустимый нормативный порог 1.2 м/с. Работа
              оборудования в данном режиме приведет к возникновению
              акустического шума в гидравлическом тракте, росту потерь давления,
              а также вызовет ускоренную эрозию внутренних поверхностей каналов.
            </ProductParagraph>
          </div>
        </div>
      </section>

      {/* 10. Расчет запаса тепловой мощности калорифера */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={10} />
        <Heading lvl={2} text="Расчет запаса тепловой мощности калорифера" />

        <div>
          <ProductParagraph>
            10. Расчет запаса тепловой мощности калорифера
          </ProductParagraph>
          <ProductParagraph>
            Определяем запас тепловой производительности (поверхности нагрева)
            подобранных моделей воздухонагревателей по формуле:
            <span className="block text-xl font-bold">
              φ = ((Q <sub className="font-normal">факт</sub> - Q) / Q) • 100
            </span>
          </ProductParagraph>

          <ul>
            <li>
              φ – запас тепловой мощности (или площади поверхности нагрева)
              калорифера, %;
            </li>
            <li>
              Q <sub>факт</sub> – фактическая тепловая мощность, вырабатываемая
              выбранной моделью воздухонагревателя при заданных параметрах сред,
              Вт;
            </li>
            <li>
              Q – требуемая расчетная тепловая мощность для нагрева заданного
              объема воздуха, Вт.
            </li>
          </ul>
          <ProductParagraph className="text-secondary-text">
            Фактическая тепловая мощность калорифера должна превышать расчетную
            величину. В зависимости от условий задачи и качества теплоносителя
            фактическая мощность может составлять от 100 до 120% от расчетной. В
            общем случае оптимальный запас поверхности нагрева составляет 10%,
            при допустимом интервале от 0 до 20%. Если расчетный запас выходит
            за пределы указанного интервала, рекомендуется выбрать другой
            водяной теплообменник и произвести повторный расчет.
          </ProductParagraph>
        </div>

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора водяного калорифера. ШАГ 10
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

          <div className="space-y-3">
            <ProductParagraph>
              ДЕЙСТВИЕ 10. Определить процентный запас тепловой мощности для
              моделей водяных воздухонагревателей, прошедших гидравлическую
              отбраковку по предельным скоростям теплоносителя.
            </ProductParagraph>

            <div className="space-y-1">
              <ul className="space-y-2 sm:space-y-0.5">
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 311 (4 хода)</span>
                  <span className="font-bold">
                    φ = ((305547 - 362370) / 362370) • 100 = (-56823 / 362370) •
                    100 = -15.7%
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 311 (6 ходов)</span>
                  <span className="font-bold">
                    φ = ((317568 - 362370) / 362370) • 100 = (-44802 / 362370) •
                    100 = -12.4%
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 411 (4 хода)</span>
                  <span className="font-bold">
                    φ = ((383219 - 362370) / 362370) • 100 = (20849 / 362370) •
                    100 = +5.8%
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 411 (6 ходов)</span>
                  <span className="font-bold">
                    φ = ((394283 - 362370) / 362370) • 100 = (31913 / 362370) •
                    100 = +8.8%
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер КФБ-14 А3 М</span>
                  <span className="font-bold">
                    φ = ((312395 - 362370) / 362370) • 100 = (-49975 / 362370) •
                    100 = -13.8%
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер КФБ-14 А4 М</span>
                  <span className="font-bold">
                    φ = ((388571 - 362370) / 362370) • 100 = (26201 / 362370) •
                    100 = +7.2%
                  </span>
                </li>
              </ul>
              <ul>
                <li>φ – запас тепловой мощности калорифера, %;</li>
                <li>
                  362370 – требуемая расчетная тепловая мощность для нагрева
                  воздуха, Вт;
                </li>
                <li>
                  305547...394283 – фактическая тепловая мощность
                  соответствующих модификаций калориферов, Вт.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-secondary-text">
            <ProductParagraph>
              На основании выполненного расчета фактического запаса мощности
              проведен промежуточный анализ применимости оборудования, по
              результатам которого из дальнейшего рассмотрения исключены модели,
              не соответствующие теплотехническим требованиям:
            </ProductParagraph>
            <ul>
              <li>
                • Модели ТВВ 311 (в четырехходовом и шестиходовом исполнениях) и
                КФБ-14 А3 М исключаются из дальнейшего расчета по причине
                недостаточной теплопроизводительности. Отрицательный баланс
                мощности (недогрев) по данным модификациям составляет от 12.4%
                до 15.7%, что превышает допустимый проектный предел. В условиях
                расчетных наружных температур г. Нижневартовска данные приборы
                не обеспечат доведение параметров приточного воздуха до
                расчетных значений.
              </li>
              <li>
                • Модели ТВВ 411 (4 хода) и КФБ-14 А4 М (6 ходов) соответствуют
                требованиям данного этапа. Запас тепловой мощности составляет
                +5.8% и +7.2% соответственно, что находится в пределах
                рекомендуемого оптимального диапазона от 0 до +10%. Фактические
                скорости движения воды в трубках (0.62 м/с и 0.86 м/с) на
                текущем шаге обеспечивают стабильный турбулентный режим
                теплообмена.
              </li>
              <li>
                • Модель ТВВ 411 (6 ходов) с запасом тепловой мощности +8.8%
                также допускается к следующему этапу расчета. Однако из-за
                шестиходовой конструкции гидравлического тракта скорость
                теплоносителя в ней возрастает до 0.95 м/с, что увеличивает
                потери давления по сравнению с четырехходовым аналогом.
              </li>
            </ul>
          </div>
        </div>

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

      {/* 11. Расчет аэродинамического сопротивления */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={11} />
        <Heading lvl={2} text="Расчет аэродинамического сопротивления" />

        <div>
          <ProductParagraph>
            11. Произвести расчет аэродинамического (воздушного) сопротивления
            подобранных водяных калориферов. Величину потерь давления по воздуху
            можно установить двумя способами: расчетным путем по формуле с
            аппроксимационными коэффициентами, полученными на основе
            экспериментальных данных, либо по таблицам с результатами
            аэродинамических испытаний для каждой модификации теплообменников.
          </ProductParagraph>
          <ProductParagraph>
            Формула для вычисления аэродинамического сопротивления имеет вид:{" "}
            <Formula>
              ΔP = B • v <sup>m</sup>
            </Formula>
          </ProductParagraph>

          <ul>
            <li>ΔP – аэродинамическое сопротивление калорифера, Па;</li>
            <li>
              v – массовая скорость воздуха в фронтальном сечении
              теплообменника, кг/(м²·с);
            </li>
            <li>
              B, m – эмпирические коэффициенты (модуль и степень), определяемые
              экспериментально для каждой серии воздухонагревателей и
              принимаемые по каталожным данным.
            </li>
          </ul>
        </div>

        <WaterCalcAerodynamicResistanceTables />

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              ⚙️ Пример расчета и подбора водяного калорифера. ШАГ 11
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

          <div className="space-y-3">
            <ProductParagraph>
              ДЕЙСТВИЕ 11. Рассчитать действительное аэродинамическое
              сопротивление (потери давления по воздуху) для моделей
              калориферов, успешно прошедших гидравлический и теплотехнический
              отбор. Для вычислений используются значения фактической массовой
              скорости воздуха и аэродинамические коэффициенты
              завода-изготовителя.
            </ProductParagraph>

            <div className="space-y-1">
              <ul className="max-w-4xl space-y-2 sm:space-y-1">
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 411 (4 и 6 ходов)</span>
                  <span className="font-bold">
                    ΔP = 8.67 • 3.34 <sup>1848</sup> = 8.67 • 9.29 = 80.5 Па
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер КФБ-14 А4 М</span>
                  <span className="font-bold">
                    ΔP = 8.67 • 3.51 <sup>1848</sup> = 8.67 • 10.18 = 88.3 Па
                  </span>
                </li>
              </ul>
              <ul>
                <li>ΔP – аэродинамическое сопротивление калорифера, Па;</li>
                <li>
                  3.34, 3.51 – действительные массовые скорости воздуха,
                  кг/(м²·с);
                </li>
                <li>
                  8.67, 1.848 – эмпирические значения модуля и степеней
                  аэродинамических потерь по ТУ 4863-002-55613706-02.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ProductParagraph className="text-secondary-text">
          Подробное описание нахождения потерь по воздушной стороне водяных
          калориферов и таблицы с расчетными данными по каждой модели можно
          посмотреть на странице сайта: Аэродинамическое сопротивление водяных
          калориферов.
        </ProductParagraph>

        <LinkButtonsBlock
          buttons={[
            {
              name: "Запас поверхности нагрева",
              url: "/raschet-kaloriferov#anchor3",
              hiddenText:
                "Запас поверхности теплообмена при расчете калориферов",
            },
            {
              name: "Запас сопротивления пар",
              url: "/raschet-kaloriferov#anchor4",
              hiddenText:
                "Запас аэродинамического сопротивления при подборе калориферов",
            },
          ]}
        />
      </section>

      <Separator />

      {/* 12. Расчет гидравлического сопротивления */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={12} />
        <Heading lvl={2} text="Расчет гидравлического сопротивления" />

        <div>
          <ProductParagraph>
            12. Произвести расчет гидравлического сопротивления (потерь давления
            по теплоносителю) подобранных водяных калориферов приточных
            вентиляционных установок. Величина потерь давления по воде
            вычисляется двумя способами: развернутым инженерным расчетом на
            основе физических констант и геометрических параметров
            гидравлического тракта либо упрощенным расчетным путем с
            использованием экспериментально установленных коэффициентов
            сопротивления для конкретных модификаций приборов.
          </ProductParagraph>
          <ProductParagraph>
            Упрощенный расчет гидравлического сопротивления калорифера по воде
            производится по формуле:{" "}
            <span className="block text-xl font-bold">
              ΔP<sub>w</sub> = C • W²
            </span>
          </ProductParagraph>

          <ul>
            <li>ΔPw – гидравлическое сопротивление калорифера, кПа;</li>
            <li>
              C – коэффициент гидравлического сопротивления конкретной
              модификации теплообменника, принимаемый по каталожным данным для
              заданного температурного графика (средней температуры
              теплоносителя);
            </li>
            <li>
              W – фактическая скорость движения воды в трубках
              воздухонагревателя, м/с.
            </li>
          </ul>
        </div>

        <ProductParagraph className="text-secondary-text">
          В каталожных таблицах, в зависимости от скорости движения воды в
          трубках и массовой скорости воздуха во фронтальном сечении, также
          приведены готовые значения гидравлического сопротивления без
          необходимости проведения самостоятельных вычислений.
        </ProductParagraph>

        <ProductParagraph className="text-secondary-text">
          При компоновке вентиляционной секции из двух и более калориферов и их
          последовательном подключении по теплоносителю, расчетное
          гидравлическое сопротивление одного прибора умножается на общее число
          последовательно соединенных теплообменников. При параллельном
          подключении по воде гидравлическое сопротивление секции принимается
          равным сопротивлению одного прибора (при условии равномерного
          распределения потока теплоносителя).
        </ProductParagraph>

        <div className="text-example space-y-2">
          <div>
            <ProductParagraph>
              Пример расчета и подбора водяного калорифера. ШАГ 12
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

          <div className="space-y-3">
            <ProductParagraph>
              ДЕЙСТВИЕ 12. Рассчитать действительное гидравлическое
              сопротивление (потери давления по воде) для моделей калориферов,
              прошедших гидравлический и теплотехнический отбор. Для вычислений
              используются значения фактической скорости воды и точные
              коэффициенты гидравлического сопротивления из каталожных таблиц
              завода-изготовителя.
            </ProductParagraph>

            <div className="space-y-1">
              <ul className="max-w-3xl space-y-2 sm:space-y-0.5">
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 411 (4 хода)</span>
                  <span className="font-bold">
                    ΔPw = 19.20 • 0.62² = 19.20 • 0.3844 = 7.38 кПа
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер ТВВ 411 (6 ходов)</span>
                  <span className="font-bold">
                    ΔPw = 19.20 • 0.95² = 19.20 • 0.9025 = 17.33 кПа
                  </span>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-baseline gap-2">
                  <span>Калорифер КФБ-14 А4 М</span>
                  <span className="font-bold">
                    ΔPw = 19.08 • 0.86² = 19.08 • 0.7396 = 14.11 кПа
                  </span>
                </li>
              </ul>
              <ul>
                <li>ΔPw – гидравлическое сопротивление калорифера, кПа;</li>
                <li>
                  0.62...0.95 – фактическая скорость движения теплоносителя в
                  трубках, м/с;
                </li>
                <li>
                  19.08...20.75 – экспериментальные значения коэффициентов
                  гидравлического сопротивления по ТУ 4863-002-55613706-02.
                </li>
              </ul>
            </div>
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

      {/* 13. Подбор водяного калорифера */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={13} />
        <Heading lvl={2} text="Подбор водяного калорифера" />

        <ProductParagraph>
          13. Окончательный подбор водяных калориферов направлен на поиск
          технического решения, обеспечивающего требуемый нагрев воздуха при
          компактных фронтальных размерах теплообменника, минимально необходимой
          площади поверхности нагрева, а также низком аэродинамическом и
          гидравлическом сопротивлении. На практике оптимальный вариант
          определяют путем последовательного расчета и сравнения нескольких
          моделей воздухонагревателей. Предпочтение отдают калориферу с наиболее
          высокими теплотехническими показателями и рациональным запасом
          тепловой мощности при минимальных потерях давления как по воздушному,
          так и по водяному тракту.
        </ProductParagraph>

        <ProductParagraph className="text-secondary-text">
          Критерии подбора и методика расчета воздухонагревателей представлены
          на странице сайта: «Расчет и подбор водяных, паровых и электрических
          калориферов». С конструкционными особенностями, видами и типами
          выпускаемых нашим предприятием спирально-накатных теплообменников
          можно ознакомиться на странице: «Калориферы. Производство».
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

        <div className="text-example space-y-4">
          <div>
            <ProductParagraph>
              Пример расчета и подбора водяного калорифера. Итоговый
              сравнительный анализ. ШАГ 13
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

          <ProductParagraph>
            ДЕЙСТВИЕ 13. Для подбора было принято восемь базовых модификаций
            воздухонагревателей с различным числом ходов по теплоносителю.
            Результаты многоступенчатого поверочного расчета сведены в итоговую
            сравнительную таблицу.
          </ProductParagraph>

          <KaloriferPropsTable
            columns={kaloriferPropColumns}
            data={kaloriferProps}
          />

          <div>
            <ProductParagraph>
              На основании анализа полученных данных сформированы следующие
              промежуточные выводы:
            </ProductParagraph>
            <ul>
              <li>
                • Калориферы КСк 2-11 и КСк 3-11 полностью исключены из подбора
                по критическим гидравлическим параметрам на этапе
                предварительной оценки (превышение допустимой скорости воды в
                трубках выше 1.2 м/с).
              </li>
              <li>
                • Калорифер КСк 4-11, несмотря на высокий тепловой потенциал,
                исключен из дальнейшего расчета на этапе оценки фактических
                параметров из-за превышения лимита действительной скорости
                теплоносителя (1.53 м/с), вызванного повышенным расходом воды.
              </li>
              <li>
                • Модификации ТВВ 311 (в четырех- и шестиходовом исполнениях) и
                КФБ-14 А3 М исключены из дальнейшего рассмотрения по причине
                недостаточной теплопроизводительности. Отрицательный баланс
                мощности (недогрев) по данным моделям составляет от 12.4% до
                15.7%, что не обеспечит доведение параметров воздуха до
                расчетных значений.
              </li>
              <li>
                • Модели ТВВ 411 (4 хода) и КФБ-14 А4 М демонстрируют
                оптимальный запас тепловой мощности при стабильной турбулентной
                скорости циркуляции теплоносителя и умеренных потерях давления.
              </li>
            </ul>
          </div>

          <div>
            <ProductParagraph>
              В результате расчета и подбора водяных калориферов для обеспечения
              подогрева приточного воздуха объемом 15000 м³/час на требуемый
              перепад температур наиболее приемлемым вариантом по совокупности
              теплотехнических, аэродинамических и гидравлических характеристик
              является четырехрядный теплообменник ТВВ 411 в четырехходовом
              исполнении. Данная модель полностью соответствует проектному
              техническому заданию, обеспечивая оптимальный технологический
              запас по теплу при минимальных потерях давления по воде и воздуху.
              В качестве равноценной альтернативы для магистральных сетей
              рекомендуется к установке промышленный модуль КФБ-14 А4 М.
            </ProductParagraph>
            <ProductParagraph>
              Теплогидравлические характеристики рекомендуемого калорифера ТВВ
              411 (4 хода): производительность по теплу – 383 кВт, коэффициент
              теплопередачи – 50.57 Вт/(м²·°C), фактический расход воды – 13145
              кг/час, скорость теплоносителя в трубках – 0.62 м/с,
              гидравлическое сопротивление – 7.38 кПа, запас тепловой мощности:
              – 6%, массовая скорость во фронтальном сечении – 3.34 кг/(м²·с),
              аэродинамическое сопротивление – 80.5 Па.
            </ProductParagraph>
          </div>
        </div>
      </section>

      {/* 14. Расчет и подбор водяных калориферов для технологического нагрева */}
      <section className="mb-4 space-y-4">
        <NumberedAnchor num={14} />
        <Heading
          lvl={2}
          text="Расчет и подбор водяных калориферов для технологического нагрева"
        />

        <ProductParagraph>
          При проектировании систем общеобменной вентиляции стандартный алгоритм
          подбора (пункты 1–13) полностью закрывает потребности инженера. Однако
          в производственных процессах (камерная сушка древесины, полимеров и
          лакокрасочных покрытий, термообработка зернового сырья,
          технологические циклы химической, текстильной или пищевой
          промышленности) целевая температура воздуха должна составлять от +45
          до +80 °C. Если на объекте доступны пар или перегретая вода, подбор
          упрощается, но при наличии стандартного сетевого теплоносителя с
          температурой +95 °C мощности одного прибора становится недостаточно.
          Главным ограничивающим фактором в данном случае является крайне малая
          разность температур (дельта) между греющей водой на входе и требуемым
          горячим воздухом на выходе. Чтобы понять пределы возможностей
          стандартной сетевой воды и выявить термодинамические тенденции
          нагрева, необходимо компоновать многорядные калориферные установки
          (блоки из нескольких теплообменников по ходу воздуха).
        </ProductParagraph>

        <ProductParagraph>
          Если для расчета одиночных калориферов общеобменной вентиляции
          стандартно используются простые методы среднеарифметического или
          среднелогарифмического (LMTD) температурного напора, то для
          многорядных технологических блоков они некорректны из-за эффекта
          термодинамического затухания сред. В этих условиях вычисления строятся
          на интегральном методе NTU и уравнениях Кэйса-Босмана. В то же время
          порядный тепловой и гидравлический расчет позволяет увидеть скрытые
          физические тенденции, неуловимые при общем осреднении. В частности, он
          вскрывает зоны риска в хвостовых рядах при параллельной
          перекрестноточной обвязке, где скорость движения воды падает до
          ламинарных 0.08–0.15 м/с. Столь низкая скорость делает невозможным
          естественный вынос выделяющихся газов потоком жидкости, что
          гарантирует завоздушивание трубок, образование воздушных пробок и
          требует особого внимания при проектировании автоматики смесительных
          узлов.
        </ProductParagraph>

        <div>
          <ProductParagraph>
            Ниже приведены данные подбора 4-рядных установок при следующих
            базовых условиях:
          </ProductParagraph>
          <ul>
            <li>• Объем воздуха: 25 000 м³/ч (массовый расход 31 250 кг/ч).</li>
            <li>• Начальная температура воздуха: +10 °C.</li>
            <li>• Температура воды на входе: +95 °C.</li>
          </ul>
          <ProductParagraph>
            Расчет выполнен для двух моделей калориферов со следующими площадями
            поверхностей теплообмена:
          </ProductParagraph>
          <li>
            • КФБ-12 А3 М — 48.2 м² (суммарная площадь поверхности нагрева 192.8
            м²);
          </li>
          <li>
            • КФБ-12 А4 М — 63.7 м² (суммарная площадь поверхности нагрева 254.8
            м²).
          </li>
        </div>

        <NtuSummaryTable data={KFB_12_A3} />
        <NtuSummaryTable data={KFB_12_A4} />

        {/* Сравнительный технический анализ схем обвязки */}
        <section>
          <Heading
            lvl={3}
            text="Сравнительный технический анализ схем обвязки"
          />

          <ol>
            <li>
              <ProductParagraph>
                1. Термодинамическое сопоставление и съем мощности
              </ProductParagraph>
              <ul>
                <li>
                  • Температурные показатели противоточной схемы:
                  Последовательный противоток на базе калорифера КФБ-12 А4 М
                  обеспечивает нагрев воздуха до +77 °C в номинальном режиме при
                  тепловой мощности 589 кВт. Данный показатель превышает
                  расчетную мощность перекрестноточной схемы в обычном режиме на
                  22 кВт, а прямоточной схемы — на 126 кВт (+27%).
                </li>
                <li>
                  <p>
                    • Температурный паритет: Противоточная и перекрестноточная
                    (в обычном балансовом режиме) схемы обеспечивают
                    сопоставимые тепловые параметры для модели А3 М (+68.4 °C и
                    +68.5 °C) и близкие значения для модели А4 М (+77.1 °C и
                    +74.5 °C).
                  </p>
                  <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/perecrest_standart_4_kalor_3_riada.png"
                        alt="Гидравлическая параллельная схема обвязки блока 3-рядных калориферов"
                        title="Блок 3-рядных калориферов. Перекрестная стандартная схема"
                        fill
                      />
                    </div>
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/perecrest_forsir_4_kalor_3_riada.png"
                        alt="Форсированный гидравлический режим перекрестного тока калориферов"
                        title="Блок 3-рядных калориферов. Перекрестная форсированная схема"
                        fill
                      />
                    </div>
                  </div>
                </li>
                <li>
                  • Эффективность прямоточной схемы: Попутное движение сред
                  характеризуется наименьшей тепловой эффективностью с КПД в
                  диапазоне 54.6–62.0%. Вследствие взаимного выравнивания
                  температур теплоносителей прямоточная схема ограничивает
                  нагрев воздуха отметками +56...+63 °C, что делает ее
                  нецелесообразной для применения в высокотемпературных
                  процессах сушки.
                </li>
                <li>
                  <p>
                    • Интенсификация параметров в перекрестноточном
                    форсированном режиме: Перекрестноточная схема при
                    максимальном открытии регулирующей арматуры обеспечивает
                    съем мощности с модели А4 М до 615 кВт при температуре
                    воздуха +80.0 °C. Данный режим характеризуется увеличением
                    расхода сетевой воды до 36.2 т/ч и возвратом в сеть
                    недоохлажденного теплоносителя с температурой +80.4 °C.
                  </p>
                  <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/perecrest_standart_4_kalor_4_riada.png"
                        alt="Параллельное подключение четырехрядных водяных воздухонагревателей"
                        title="Блок 4-рядных калориферов. Перекрестная стандартная схема"
                        fill
                      />
                    </div>
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/perecrest_forsir_4_kalor_4_riada.png"
                        alt="Чертеж блока 4-рядных водяных калориферов"
                        title="Блок 4-рядных калориферов. Перекрестная форсированная схема"
                        fill
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                2. Гидравлический анализ и сетевые ограничения
              </ProductParagraph>
              <ul>
                <li>
                  • Расходные характеристики теплоносителя: Противоточная схема
                  является наиболее экономичной по потреблению сетевой воды. Для
                  обеспечения мощности 589 кВт (модель А4 М) требуется проток в
                  объеме 13 440 кг/ч, в то время как перекрестноточной схеме для
                  достижения аналогичных параметров необходим расход от 19 500
                  до 36 200 кг/ч.
                </li>
                <li>
                  • Охлаждение обратной линии: Противоток обеспечивает снижение
                  температуры обратной воды до +51.5...+57.3 °C, что снижает
                  термическую нагрузку на тепловую сеть. Перекрестноточный
                  форсированный режим повышает температуру обратной воды до
                  +79.0...+80.4 °C, что требует согласования с источником
                  теплоснабжения (котельной или ТЭЦ).
                </li>
                <li>
                  <p>
                    • Гидравлическое сопротивление контуров: Применение
                    последовательных схем обвязки (прямоток и противоток)
                    приводит к линейному суммированию потерь давления, в
                    результате чего гидравлическое сопротивление четырехрядного
                    блока достигает 80.1–80.6 кПа (порядка 8 метров водяного
                    столба). Данный фактор требует установки высоконапорного
                    насосного оборудования. Перекрестноточная схема за счет
                    параллельного распределения потока по коллекторам
                    характеризуется потерями давления в пределах 2.6–3.8 кПа в
                    обычном режиме, что позволяет использовать циркуляционные
                    насосы малой мощности.
                  </p>
                  <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/priamotok_4_kalor_3_riada.png"
                        alt="Последовательный прямоток блоков водяных калориферов"
                        title="Блок 3-рядных калориферов. Прямоточная схема обвязки"
                        fill
                      />
                    </div>
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/protivotok_4_kalor_3_riada.png"
                        alt="Противоток в многорядных калориферных установках: расчет"
                        title="Блок 3-рядных калориферов. Противоточная схема обвязки"
                        fill
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <ProductParagraph>
                3. Аэродинамические показатели
              </ProductParagraph>
              <ul>
                <li>
                  <p>
                    • Сопротивление по воздушному контуру инвариантно
                    относительно схемы гидравлической обвязки и определяется
                    геометрическими параметрами трубного пучка. Четырехрядный
                    блок на базе модификации А3 М создает сопротивление
                    воздушному потоку в 929 Па, а на базе модификации А4 М —
                    1226 Па, что накладывает строгие ограничения на напорные
                    характеристики приточного вентиляционного агрегата.
                  </p>
                  <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/priamotok_4_kalor_4_riada.png"
                        alt="Расчет блоков водяных теплообменников по прямоточной схеме"
                        title="Блок 4-рядных калориферов. Прямоточная схема обвязки"
                        fill
                      />
                    </div>
                    <div className="relative aspect-1000/600 w-full">
                      <Image
                        src="/img/general_pages/protivotok_4_kalor_4_riada.png"
                        alt="Гидравлическая последовательная схема обвязки блока 4-рядных калориферов"
                        title="Блок 4-рядных калориферов. Противоточная схема обвязки"
                        fill
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Заключение по выбору схемы обвязки */}
        <section>
          <Heading lvl={3} text="Заключение по выбору схемы обвязки" />

          <ol>
            <li>
              1. Применение перекрестноточной схемы (Обычный режим) технически
              обосновано в качестве универсального и сбалансированного решения
              для технологических процессов с целевой температурой воздуха до
              +68...+74 °C. Схема обеспечивает удержание нормативной температуры
              обратной воды (+70 °C) при минимальном гидравлическом
              сопротивлении (до 4 кПа), исключая необходимость применения
              высоконапорных насосных групп.
            </li>
            <li>
              2. Применение последовательной противоточной схемы целесообразно в
              проектах, где приоритетом является достижение максимальных
              температурных параметров воздуха (до +77 °C) при установленном
              лимите на расход сетевой воды и техническом требовании к глубокому
              охлаждению обратной линии (до +57 °C). При проектировании данной
              схемы гидравлический контур должен быть рассчитан на рабочее
              давление не менее 80 кПа.
            </li>
            <li>
              3. Перекрестноточный форсированный режим рекомендуется
              использовать исключительно в качестве временной или аварийной меры
              для интенсификации процесса сушки сырья, при условии готовности
              тепловой сети объекта принять теплоноситель с температурой
              обратной линии до +80 °C.
            </li>
            <li className="space-y-8">
              <p>
                4. Последовательная прямоточная схема технически нерациональна
                для применения в многорядных блоках технологического нагрева.
                При идентичных прямотоку гидравлических нагрузках (80 кПа) схема
                уступает альтернативным вариантам обвязки по развиваемой
                тепловой мощности и ограничена по температуре нагрева воздуха
                нижними отметками.
              </p>
              <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
                <div className="relative aspect-1000/600 w-full">
                  <Image
                    src="/img/general_pages/kalorifery_blok_sravnenie_temperatura.png"
                    alt="График изменения температуры воздуха в блоке водяных калориферов по NTU"
                    title="Сравнение температуры воздуха секции по схемам обвязки"
                    fill
                  />
                </div>
                <div className="relative aspect-1000/600 w-full">
                  <Image
                    src="/img/general_pages/kalorifery_blok_sravnenie_teplo.png"
                    alt="Сравнение тепловой мощности калориферов по гидравлическим схемам"
                    title="Сравнение тепловой мощности секции по схемам обвязки"
                    fill
                  />
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* Оптимизация рядности и высокотемпературный нагрев */}
        <section className="space-y-4">
          <Heading
            lvl={3}
            text="Оптимизация рядности и высокотемпературный нагрев"
          />

          <ProductParagraph>
            Представленный технический анализ демонстрирует, что при
            использовании стандартного сетевого теплоносителя с температурой +95
            °C четырехрядные блоки в зависимости от схемы гидравлической обвязки
            способны обеспечить нагрев воздуха в диапазоне от +56 до +80 °C.
            Однако при проектировании сушильных камер и циркуляционных контуров
            важно определить необходимое количество теплообменников в пакете в
            зависимости от индивидуального технологического задания (целевой
            температуры сушки, начальных параметров воздуха и лимитов по расходу
            сред).
          </ProductParagraph>

          <ProductParagraph>
            Если регламент процесса требует более умеренных конечных температур
            (например, от +45 до +55 °C), максимальный 4-рядный пакет становится
            избыточным. В таких условиях подбор оптимизируется уменьшением
            рядности блока — калориферы эффективно компонуются по ходу движения
            воздуха в группы из двух или трех приборов. Порядный расчет
            позволяет обосновать, какое количество последовательно установленных
            калориферов обеспечит проектный нагрев без нерационального
            увеличения напорных характеристик вентиляторов и циркуляционных
            насосов.
          </ProductParagraph>

          <div>
            <ProductParagraph>
              В случаях, когда целевая температура воздуха по ТЗ превышает этот
              порог, необходимо перейти на альтернативные, более
              высокопотенциальные теплоносители:
            </ProductParagraph>
            <ul>
              <li>
                • Перегретая вода (с графиком до +150 °C): сдвигает возможный
                диапазон нагрева технологического воздуха до отметок +90...+110
                °C;
              </li>
              <li>
                • Сухой насыщенный пар: позволяет достичь предельных параметров
                нагрева в диапазоне +130...+150 °C для линий скоростной сушки
                или химической обработки сырья.
              </li>
            </ul>
            <ProductParagraph>
              За счет постоянной температуры фазового перехода пара по всей
              поверхности теплообмена, многорядные пароконденсатные блоки
              значительно ослабляют эффект термодинамического затухания по
              сравнению с жидкостными системами.
            </ProductParagraph>
          </div>

          <ProductParagraph>
            Для инженеров-проектировщиков и технологов подготовлены профильные
            расчетно-методические разделы с детальными базами расчетов и
            алгоритмами подбора по многорядному водяному и паровому нагреву.
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

          <div>
            <ProductParagraph>
              Инженерные методики, представленные в специализированных разделах,
              включают:
            </ProductParagraph>
            <ul>
              <li>
                • Пошаговые алгоритмы вычислений: примеры порядных расчетов для
                блоков серий КФБ-А3 и КФБ-А4 с определением перепадов больших и
                малых дельт температур, а также оценкой аэродинамических потерь
                давления и гидравлического сопротивления контуров при
                параллельном или последовательном подключении оборудования.
              </li>
              <li>
                • Расчетные модели движения сред: теоретическое описание и
                формулы эффективности для прямоточной, противоточной и
                перекрестноточной схем гидравлической обвязки.
              </li>
              <li>
                • Сравнительный теплоаэродинамический анализ: сопоставление
                ключевых эксплуатационных показателей, таких как суммарная
                выработанная теплопроизводительность, фактический расход пара
                или воды, и напорные потери по воздушной стороне.
              </li>
              <li>
                • Границы применимости схем: рекомендации по выбору конфигураций
                для низкотемпературных режимов (деликатная сушка сырья),
                среднетемпературных и высокотемпературных промышленных
                комплексов.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}

function FormulasList({ children }) {
  return <ul className="max-w-3xl space-y-2 sm:space-y-0.5">{children}</ul>;
}

function Formula({ example = false, className = "", children }) {
  return (
    <span
      className={`font-bold ${example ? "text-xl" : "text-xl"} ${className}`}
    >
      {children}
    </span>
  );
}
