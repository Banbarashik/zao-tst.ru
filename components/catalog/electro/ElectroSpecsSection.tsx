import React from "react";
import Image from "next/image";

import { capitalizeFirst } from "@/lib/utils";

import ProductSubheader from "@/components/catalog/productSubheader";
import ProductParagraph from "@/components/catalog/productParagraph";
import {
  ELECTRO_CATEGORY_META,
  getPreciseElectroCategory,
} from "@/components/catalog/electro/electroCategoryMeta";

const tableLabels = {
  sfo: [
    "Номинальная мощность одного нагревателя, кВт",
    "Напряжение питающей сети, В ",
    "Напряжение на нагревателе, В",
    "Частота сети, Гц",
    "Число фаз",
    "Тип ТЭНов",
    "Количество электрических секций",
    "Схема соединений нагревателей в секции",
    "Количество нагревателей, общее, шт.",
    "Количество нагревателей, секция, шт.",
    "Количество нагревателей, группа секции, шт.",
    "Установленная мощность, общая, кВт",
    "Установленная мощность, секция, кВт",
    "Установленная мощность, группа секции, кВт",
    "Производительность по воздуху, м3/ч, не менее",
    "Расчетный ток линии электрокалорифера, А",
    "Расчетный ток одной секции электрокалорифера, А",
    "Силовой кабель от сети, минимальное сечение медной жилы кабеля, мм2",
    "Кабель на секции, минимальное сечение медной жилы на каждую фазу секции, мм2",
    "Внешние габаритные размеры, мм",
    "Масса нагревательного блока, кг",
  ],
  sfotc: [
    "Напряжение питающей сети, В",
    "Частота питающей сети, Гц",
    "Число фаз питающей сети",
    "Напряжение на нагревателе, В",
    "Тип ТЭНов",
    "Схема соединения нагревателей",
    "Установленная мощность электрокалорифера, кВт",
    "Количество электрических секций",
    "Мощность одной секции электрокалорифера, кВт",
    "Производительность по воздуху, м3/час",
    "Аэродинамическое сопротивление калорифера, не более, Па",
    "Давление, развиваемое вентилятором, Па",
    "Перепад t входящего / выходящего воздуха, °С",
    "Номер комплектуемого вентилятора ВР 85-77 (ВЦ 4-75)",
    "Двигатель вентилятора, кВт",
    "об/мин",
    "Расчетный ток линии электрокалорифера, А",
    "Расчетный ток одной секции электрокалорифера, А",
    "Расчетный ток линии электродвигателя вентилятора, А",
    "Пусковые токи электродвигателя, А",
    "Расчетный ток магистрали, питающей установку, А",
    "Силовой кабель от сети, минимальное сечение медной жилы кабеля, мм2",
    "Кабель на секции, минимальное сечение медной жилы на каждую фазу секции, мм2",
    "Кабель на электродвигатель, минимальное сечение медной жилы кабеля, мм2",
    "Внешние габаритные размеры, мм",
    "Масса агрегата в сборе, кг",
  ],
  shuk: [
    "Напряжение питающей сети, В",
    "Частота питающей сети, Гц",
    "Напряжение цепи управления, В",
    "Мощность электродвигателя, кВт",
    "Внешние габаритные размеры, мм",
    "Масса шкафа, кг",
    "Корпус металлический",
    "Автоматический выключатель ВА 47-29 1Р 10А",
    "Арматура светосигнальная (красная)",
    "Арматура светосигнальная (зеленая)",
    "Реле тепловое РТИ (РТН) 5.5 - 8А",
    "Пускатель КМИ (КМН) 9А 220-230В",
    "kmi_to_change",
    "Реле температурное ТРМ 11-01 (11-11)",
    "Реле ветровое с микрокнопкой КМ-1",
    "Мощность электрокалорифера, общая, кВт",
    "Мощность одной секции электрокалорифера, кВт",
    "Мощность электродвигателя вентилятора, кВт",
    "Расчетный ток линии электрокалорифера, А",
    "Расчетный ток одной секции электрокалорифера, А",
    "Расчетный ток линии электродвигателя вентилятора, А",
    "Пусковые токи электродвигателя, А",
    "Расчетный ток магистрали, питающей установку, А",
    "Силовой кабель от сети, минимальное сечение медной жилы кабеля, мм2",
    "Кабель на секции, минимальное сечение медной жилы на каждую фазу секции, мм2",
    "Кабель на электродвигатель, минимальное сечение медной жилы кабеля, мм2",
    "Провода для подключения температурного и ветрового реле, сечение, мм2",
  ],
};

export function ElectroSpecsSection({ product }) {
  const preciseCategory = getPreciseElectroCategory(product) ?? "sfo";
  const categoryMeta = ELECTRO_CATEGORY_META[preciseCategory];
  const isSFO = preciseCategory === "sfo";
  const isSFOTC = preciseCategory === "sfotc";
  const isSHUK = preciseCategory === "shuk";

  return (
    <section>
      <ProductSubheader
        text={`Технические характеристики ${categoryMeta.gen} ${product.shortName}`}
      />
      <ProductParagraph className="mb-3">
        В таблице приведены основные технические характеристики и справочные
        данные по комплектующим для запуска {isSFO && "электрокалорифера"}
        {isSFOTC && "электрокалориферной установки"}
        {isSHUK && "шкафа управления калорифером"} {product.shortName} в работу.
      </ProductParagraph>
      {/* 2 IMAGES ROW */}
      {product.frontView && product.parts && (
        <div className="mb-4 flex flex-col gap-4 sm:flex-row md:gap-6 lg:gap-4 xl:gap-10">
          <div
            className={`relative w-full`}
            style={{
              aspectRatio: `${product.frontView.width}/${product.frontView.height}`,
            }}
          >
            <Image
              src={product.frontView.url}
              title={`${capitalizeFirst(categoryMeta.nom)} ${product.shortName}`}
              alt={`${capitalizeFirst(categoryMeta.nom)} ${product.altShortName}`}
              fill
            />
          </div>
          <div
            className={`relative w-full`}
            style={{
              aspectRatio: `${product.parts.width}/${product.parts.height}`,
            }}
          >
            <Image
              src={product.parts.url}
              title={`${capitalizeFirst(categoryMeta.nomAlt ?? categoryMeta.nom)} ${product.shortName}`}
              alt={`${capitalizeFirst(categoryMeta.nomAlt ?? categoryMeta.nom)} ${product.altShortName}`}
              fill
            />
          </div>
        </div>
      )}
      {/* TABLE */}
      <div className="mb-6 w-full overflow-x-auto">
        <table className="mx-auto w-176">
          <tbody>
            {tableLabels[preciseCategory].map((label, i) => (
              <React.Fragment key={label}>
                <tr>
                  <td className="py-1 pl-1 text-left">
                    {isSHUK && label === "kmi_to_change"
                      ? `Пускатель КМИ (КМН) ${product.kmi}А 220-230В`
                      : label}
                  </td>
                  <td>{product.specsTableValues[i]}</td>
                </tr>
                {isSHUK &&
                  label === "kmi_to_change" &&
                  product.size === 250 && (
                    <tr>
                      <td className="py-1 pl-1 text-left">
                        Пускатель ПМ 12160150 160А 220-230В
                      </td>
                      <td>3</td>
                    </tr>
                  )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
