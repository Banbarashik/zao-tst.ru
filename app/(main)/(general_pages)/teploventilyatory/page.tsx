import productData from "@/data/products.json";

import type { Metadata } from "next";
import Image from "next/image";

import { sortProducts } from "@/lib/utils";

import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import ProductLinks from "@/components/general_pages/productLinks";
import LinkButtonsBlock from "@/components/linkButtonsBlock";

export const metadata: Metadata = {
  title: "Электрокалориферные установки СФОЦ. Производство",
  description:
    "Электрокалориферные установки СФОЦ - производитель ООО Т.С.Т. Характеристики, размеры, мощность, электросхемы подключения, подбор по сети, цена установок ЭКОЦ",
  keywords:
    "электрокалориферные установки сфоц,электрокалориферные установки экоц,электрические установки сфоц,цена установок сфоц,купить электрокалориферную установку экоц,технические характеристики установок сфоц,габаритные размеры установок сфоц,электросхемы установок сфоц,подсоединение электрокалориферных установок экоц,производитель электрокалориферных установок сфоц",
};

const products = productData
  .filter((p) => p.categories.includes("sfotc"))
  .sort((a, b) => sortProducts(a.name, b.name));

export default function UstanovkiSFOTC() {
  return (
    <>
      <Heading lvl={1} text="Электрокалориферные установки СФОЦ" />

      <section>
        <Heading lvl={2} text="Назначение электрокалориферных установок СФОЦ" />
        <ProductParagraph className="mb-5">
          Электрокалориферные установки СФОЦ выпускаются в качестве автономного
          оборудования, совмещающего в себе функции приточной вентиляции и
          воздушного отопления. Они предназначены для эффективного
          теплоснабжения, вентиляции и поддержания заданного микроклимата в
          зданиях промышленного, сельскохозяйственного, общественного и
          коммунального назначения, а также для подогрева воздуха в
          специализированных технологических процессах и сушильных комплексах.
          Производство электрокалориферных установок СФОЦ осуществляется
          согласно ТУ 3442-005-55613706-02.
        </ProductParagraph>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/img/general_pages/elektrokalorifernaia_ustanovka_sfotc_komplektatciia.png"
              alt="Электрическая приточная установка СФОЦ"
              title="Электрокалориферная установка СФОЦ"
              fill
            />
          </div>
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/img/general_pages/elektrokalorifernaia_ustanovka_sfotc_proizvodstvo.png"
              alt="Производство электрокалориферных установок СФОЦ"
              title="Конструкция электрокалориферной установки СФОЦ"
              fill
            />
          </div>
        </div>
      </section>

      {/* Конструкция установок СФОЦ */}
      <section className="space-y-2">
        <Heading lvl={2} text="Конструкция установок СФОЦ" />
        <ProductParagraph>
          Конструктивно электрокалориферная приточная установка СФОЦ
          представляет собой единый воздушно-отопительный блок, основные
          элементы которого – электрический калорифер{" "}
          <span className="text-primary-dark">(1)</span> и радиальный вентилятор
          низкого давления <span className="text-primary-dark">(2)</span> с
          электродвигателем, смонтированые на общей сварной раме{" "}
          <span className="text-primary-dark">(3)</span>. Вентилятор правого или
          левого вращения устанавливается на виброизоляторы{" "}
          <span className="text-primary-dark">(4)</span> и соединяется с
          калорифером конфузором <span className="text-primary-dark">(5)</span>{" "}
          через мягкую вставку <span className="text-primary-dark">(6)</span>.
          Конфузор обеспечивает соединение прямоугольного сечения
          воздухонагревателя с круглым сечением входного патрубка вентилятора.
          Мягкая вставка и виброизоляторы выполняют роль антивибрационных
          устройств.
        </ProductParagraph>
        <ProductParagraph>
          Электрокалорифер СФО, комплектуемый к установке, представляет собой
          модуль прямоугольного сечения, внутри которого в качестве
          нагревательных элементов применены стальные трубчатые
          электронагреватели ТЭНы с накатным алюминиевым оребрением. Мощность
          каждого ТЭНа составляет 2.5 кВт. Выводы ТЭНов размещаются в коробках,
          которые закрываются боковыми крышками. Для более равномерного обдува
          ТЭНов, электрический калорифер расположен со стороны всасывания
          вентилятора.
        </ProductParagraph>
        <ProductParagraph>
          Шкаф управления калорифером ШУК комплектуется к установке по запросу.
          Для контроля и ограничения температуры на поверхности алюминиевого
          оребрения ТЭНа устанавливается температурное реле ТРМ-11. В случае
          превышения температуры тэна выше допустимых 190°С, происходит
          размыкание контакта реле, разрывается цепь управления и отключаются
          все секции нагревательных элементов.
        </ProductParagraph>
      </section>

      <div className="mx-auto h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

      {/* Принцип работы и аэродинамический расчет сети */}
      <section className="space-y-2">
        <Heading lvl={2} text="Принцип работы и аэродинамический расчет сети" />
        <ProductParagraph>
          Принцип работы электрокалориферной установки СФОЦ заключается в
          непрерывном нагреве потока приточного воздуха с возможностью
          дискретного (ступенчатого) регулирования тепловой мощности. Забираемый
          извне (или из помещения в режиме рециркуляции) воздушный поток
          протягивается сквозь развитое алюминиевое оребрение калорифера СФО,
          прогревается и подается радиальным вентилятором в систему
          распределительных каналов здания. Подключение установки к
          вентиляционной сети осуществляется через выходной прямоугольный фланец
          вентилятора.
        </ProductParagraph>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-0">
          <div className="relative aspect-3/2 w-full scale-x-[-1]">
            <Image
              src="/img/general_pages/ustanovka_sfotc_podbor.png"
              alt="Электрическая установка для нагрева воздуха"
              title="Электрическая воздухонагревательная приточная установка"
              fill
            />
          </div>
          <div className="relative aspect-3/2 w-full">
            <Image
              src="/img/general_pages/ustanovka_sfotc.png"
              alt="Эксплуатация электрокалориферных установок СФОЦ (ЭКОЦ)"
              title="Принцип работы электрокалориферной установки"
              fill
            />
          </div>
        </div>

        <ProductParagraph>
          Подбор и расчет установок СФОЦ выполняются на основе статического
          давления вентилятора. При расчете учитываются внутренние
          аэродинамические потери на калорифере СФО: из располагаемого напора
          вентилятора вычитается сопротивление нагревателя. В расчетных таблицах
          указывается чистое (свободное) статическое давление на выходе из
          установки, гарантирующее преодоление сопротивления внешней сети
          воздуховодов. Аэродинамические характеристики вентилятора точно
          увязываются с параболической характеристикой сети в заданных рабочих
          точках.
        </ProductParagraph>
      </section>

      <div className="mx-auto h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

      {/* Технические характеристики установок СФОЦ */}
      <section className="space-y-4">
        <Heading lvl={2} text="Технические характеристики установок СФОЦ" />
        <ProductParagraph>
          Линейка электрокалориферных установок СФОЦ завода ООО «Т.С.Т.»
          включает в себя семь базовых типоразмеров. Полный диапазон
          производительности по воздуху варьируется от 1 800 до 17 800 м
          <sup>3</sup>/ч, а установленная тепловая мощность — от 15 до 247.5
          кВт.{" "}
          <span className="text-secondary-text">
            Каждая модель оснащена индивидуальной интерактивной кнопкой перехода
            на страницу с подробной режимной картой (для полной, 2/3 и 1/3
            мощности в диапазоне температур от -30 °С), габаритными чертежами и
            электросхемами подключения.
          </span>
        </ProductParagraph>
        <ProductLinks
          products={products.map((p) => ({
            ...p,
            name: p.shortName,
          }))}
          className="mx-px"
          gridTemplateCols="grid-cols-[repeat(auto-fill,minmax(130px,max-content))]"
        />

        <ol className="space-y-3">
          <li>
            <span className="text-example">
              ⚙️ 1. Приточная установка СФОЦ-16
            </span>
            <ul>
              <li>
                <span className="text-example">• Тепловая мощность:</span> 15
                кВт (Двухступенчатый нагрев: 15/7.5 кВт)
              </li>
              <li>
                <span className="text-example">
                  • Диапазон производительности и располагаемого напора:
                </span>{" "}
                1800 – 2000 м<sup>3</sup>/ч; 30 – 186 Па
              </li>
              <li>
                <span className="text-example">
                  • Установленный вентилятор:
                </span>{" "}
                № 2.5 (0.55 кВт/3000 об/мин), фланец выхлопа 175х175 мм
              </li>
              <li>
                <span className="text-example">• Применение:</span> Короткие
                сети. Обособленные малые объекты: посты охраны, операторские
                будки, насосные
              </li>
            </ul>
          </li>
          <li>
            <span className="text-example">
              ⚙️ 2. Приточная установка СФОЦ-25
            </span>
            <ul>
              <li>
                <span className="text-example">• Тепловая мощность:</span> 22.5
                кВт (Трехступенчатый нагрев: 22.5/15/7.5 кВт)
              </li>
              <li>
                <span className="text-example">
                  • Диапазон производительности и располагаемого напора:
                </span>{" "}
                2000 – 2500 м<sup>3</sup>/ч; 198 – 684 Па
              </li>
              <li>
                <span className="text-example">
                  • Установленный вентилятор:
                </span>{" "}
                № 3.15 (1.5 кВт/3000 об/мин), фланец выхлопа 216х216 мм
              </li>
              <li>
                <span className="text-example">• Применение:</span> Средние и
                Длинные сети. Локальные мастерские и автосервисы
              </li>
            </ul>
          </li>
          <li>
            <span className="text-example">
              ⚙️ 3. Приточная установка СФОЦ-40
            </span>
            <ul>
              <li>
                <span className="text-example">• Тепловая мощность:</span> 45
                кВт (Трехступенчатый нагрев: 45/30/15 кВт)
              </li>
              <li>
                <span className="text-example">
                  • Диапазон производительности и располагаемого напора:
                </span>{" "}
                3000 – 3500 м<sup>3</sup>/ч; 35 – 239 Па
              </li>
              <li>
                <span className="text-example">
                  • Установленный вентилятор:
                </span>{" "}
                № 4 (0.75 кВт/1500 об/мин), фланец выхлопа 275х275 мм
              </li>
              <li>
                <span className="text-example">
                  <span className="text-example">• Применение:</span> Короткие и
                  Средние магистральные сети. Гаражные боксы и СТО
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span className="text-example">
              ⚙️ 4. Приточная установка СФОЦ-60
            </span>
            <ul>
              <li>
                <span className="text-example">• Тепловая мощность:</span> 67.5
                кВт (Трехступенчатый нагрев: 67.5/45/22.5 кВт)
              </li>
              <li>
                <span className="text-example">
                  • Диапазон производительности и располагаемого напора:
                </span>{" "}
                4000 – 5500 м<sup>3</sup>/ч; 157 – 593 Па
              </li>
              <li>
                <span className="text-example">
                  • Установленный вентилятор:
                </span>{" "}
                № 5 (1.5 кВт/1500 об/мин), фланец выхлопа 350х350 мм
              </li>
              <li>
                <span className="text-example">
                  <span className="text-example">• Применение:</span> Средние и
                  Длинные сети. Малые производственные цеха
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span className="text-example">
              ⚙️ 5. Приточная установка СФОЦ-100
            </span>
            <ul>
              <li>
                <span className="text-example">• Тепловая мощность:</span> 90
                кВт (Трехступенчатый нагрев: 90/60/30 кВт)
              </li>
              <li>
                <span className="text-example">
                  • Диапазон производительности и располагаемого напора:
                </span>{" "}
                5000 – 7000 м<sup>3</sup>/ч; 88 – 564 Па
              </li>
              <li>
                <span className="text-example">
                  • Установленный вентилятор:
                </span>{" "}
                № 5 (2.2 кВт/1500 об/мин), фланец выхлопа 350х350 мм
              </li>
              <li>
                <span className="text-example">
                  <span className="text-example">• Применение:</span>{" "}
                  Универсальное (от Коротких до Длинных магистралей). Средние
                  цеха и склады
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span className="text-example">
              ⚙️ 6. Приточная установка СФОЦ-160
            </span>
            <ul>
              <li>
                <span className="text-example">• Тепловая мощность:</span> 157.5
                кВт (Трехступенчатый нагрев: 157.5/105/52.5 кВт)
              </li>
              <li>
                <span className="text-example">
                  • Диапазон производительности и располагаемого напора:
                </span>{" "}
                8000 – 12000 м<sup>3</sup>/ч; 18 – 368 Па; 699 – 1155 Па
              </li>
              <li>
                <span className="text-example">
                  • Два варианта привода вентилятора:
                </span>{" "}
                Базовый малошумный № 6.3 (2.2 кВт / 1000 об/мин) под Короткую
                сеть или индустриальный высоконапорный № 6.3 (7.5 кВт / 1500
                об/мин) под Сверхдлинные магистрали, фланец выхлопа 440х440 мм
              </li>
              <li>
                <span className="text-example">
                  <span className="text-example">• Применение:</span> Склады и
                  ангары, большие цеха
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span className="text-example">
              ⚙️ 7. Приточная установка СФОЦ-250
            </span>
            <ul>
              <li>
                <span className="text-example">• Тепловая мощность:</span> 247.5
                кВт (Трехступенчатый нагрев: 247.5/165/82.5 кВт)
              </li>
              <li>
                <span className="text-example">
                  • Диапазон производительности и располагаемого напора:
                </span>{" "}
                12000 – 17000 м<sup>3</sup>/ч; 325 – 892 Па
              </li>
              <li>
                <span className="text-example">
                  • Установленный вентилятор:
                </span>{" "}
                № 6.3 (7.5 кВт / 1500 об/мин), фланец выхлопа 440х440 мм
              </li>
              <li>
                <span className="text-example">
                  <span className="text-example">• Применение:</span> Средние и
                  Длинные сложные трассы. Крупные промышленные объекты
                </span>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <div className="mx-auto h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />

      {/* Инженерная градация сетей */}
      <section className="border-primary rounded-lg border-l-4 pl-4">
        <Heading lvl={3} text="Инженерная градация сетей" />

        <ProductParagraph>
          Для экспресс-анализа возможности применения оборудования располагаемый
          статический напор конкретной модели сопоставляется с тремя типами
          трасс:
        </ProductParagraph>
        <ul>
          <li>
            <span className="text-example">
              Короткая сеть (сопротивление до 150–200 Па):
            </span>{" "}
            Прямой сосредоточенный выдув в объем цеха через диффузоры или сопла,
            либо магистраль длиной до 15 метров с минимальным числом поворотов.
            Позволяет эксплуатировать установки СФОЦ на верхних (максимальных)
            пределах кубатуры воздуха.
          </li>
          <li>
            <span className="text-example">
              Средняя сеть (сопротивление 200–450 Па):
            </span>{" "}
            Классическая цеховая приточная вентиляция протяженностью от 25 до 50
            метров с поворотами, тройниками и раздачей на 6–15 регулируемых
            решеток. Является номинальной, наиболее энергоэффективной и
            сбалансированной зоной работы для большинства моделей линейки.
          </li>
          <li>
            <span className="text-example">
              Длинная / Сложная сеть (сопротивление 500 – 900+ Па):
            </span>{" "}
            Высоконапорные разветвленные трассы длиной более 60–80 метров,
            системы с карманными фильтрами тонкой очистки или глушителями шума.
            Чтобы гарантированно «пробить» такую сеть, установки СФОЦ
            подбираются в режиме зажатого (минимального) расхода воздуха, что
            смещает вентилятор влево-вверх по характеристике — в зону пикового
            статического давления колеса.
            <div className="mt-1">
              При избыточном статическом напоре вентилятора необходимо
              искусственное дросселирование потока шибером на выходе для
              снижения расхода до проектного значения и защиты электродвигателя
              от перегрузки.
            </div>
          </li>
        </ul>
      </section>

      {/* Габаритные размеры установок СФОЦ */}
      <section className="mb-4">
        <Heading lvl={2} text="Габаритные размеры установок СФОЦ" />

        <div className="mb-2 w-full overflow-x-auto">
          <table className="w-full min-w-231 xl:min-w-auto">
            <colgroup>
              <col span={2} />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th
                  colSpan={2}
                  style={{ fontSize: "11pt" }}
                  className="first-two-cols uppercase"
                >
                  Модель установки
                </th>
                <th style={{ fontSize: "11pt" }}>СФОЦ-16</th>
                <th style={{ fontSize: "11pt" }}>СФОЦ-25</th>
                <th style={{ fontSize: "11pt" }}>СФОЦ-40</th>
                <th style={{ fontSize: "11pt" }}>СФОЦ-60</th>
                <th style={{ fontSize: "11pt" }}>СФОЦ-100</th>
                <th style={{ fontSize: "11pt" }}>СФОЦ-160</th>
                <th style={{ fontSize: "11pt" }}>СФОЦ-250</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className="first-two-cols w-80">
                  Установленная мощность, кВт
                </td>
                <td>15</td>
                <td>22.5</td>
                <td>45</td>
                <td>67.5</td>
                <td>90</td>
                <td>157.5</td>
                <td>247.5</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Число электрических секций
                </td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Мощность одной секции, кВт
                </td>
                <td>7.5</td>
                <td>7.5</td>
                <td>15</td>
                <td>22.5</td>
                <td>30</td>
                <td>52.5</td>
                <td>82.5</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Номер вентилятора ВР 85-77
                </td>
                <td>2.5</td>
                <td>3.15</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
                <td>6.3</td>
                <td>6.3</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Двигатель вентилятора, кВт
                </td>
                <td>0.55</td>
                <td>1.5</td>
                <td>0.75</td>
                <td>1.5</td>
                <td>2.2</td>
                <td>2.2</td>
                <td>7.5</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  об/мин
                </td>
                <td>3000</td>
                <td>3000</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1000</td>
                <td>1500</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Номинальная производительность по воздуху, м<sup>3</sup>/ч
                </td>
                <td>1500</td>
                <td>2000</td>
                <td>3000</td>
                <td>5000</td>
                <td>6000</td>
                <td>10000</td>
                <td>15000</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Диапазон производительности вентилятора, м<sup>3</sup>/ч
                </td>
                <td>800-2200</td>
                <td>1600-4400</td>
                <td>1600-4400</td>
                <td>3300-6100</td>
                <td>3300-8700</td>
                <td>4400-11600</td>
                <td>6800-17800</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Рабочий интервал производительности, м<sup>3</sup>/ч
                </td>
                <td>1800-2000</td>
                <td>2000-2500</td>
                <td>3000-3500</td>
                <td>4000-5500</td>
                <td>5000-7000</td>
                <td>8000-12000</td>
                <td>12000-17000</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Давление, развиваемое вентилятором, Па
                </td>
                <td>780-415</td>
                <td>1320-705</td>
                <td>505-270</td>
                <td>830-540</td>
                <td>830-450</td>
                <td>570-310</td>
                <td>1350-725</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Диапазон располагаемого напора, Па
                </td>
                <td>186-30</td>
                <td>684-198</td>
                <td>239-35</td>
                <td>593-157</td>
                <td>564-88</td>
                <td>368-18</td>
                <td>892-325</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Перепад t входящего / выходящего воздуха, °C
                </td>
                <td>20</td>
                <td>25</td>
                <td>35</td>
                <td>40</td>
                <td>45</td>
                <td>50</td>
                <td>55</td>
              </tr>

              <tr>
                <td colSpan={2} className="first-two-cols">
                  Напряжение питающей сети, В
                </td>
                <td colSpan={7}>380</td>
              </tr>
              <tr>
                <td colSpan={2} className="first-two-cols">
                  Частота питающей сети, Гц
                </td>
                <td colSpan={7}>50</td>
              </tr>
              <tr>
                <td colSpan={2} className="first-two-cols">
                  Напряжение на нагревателе, В
                </td>
                <td colSpan={7}>220</td>
              </tr>
              <tr>
                <td colSpan={2} className="first-two-cols">
                  Схема соединений нагревателей в секции
                </td>
                <td colSpan={7}>Y</td>
              </tr>
              <tr>
                <td colSpan={2} className="first-two-cols">
                  Масса агрегата в сборе, кг
                </td>
                <td>68</td>
                <td>79</td>
                <td>107</td>
                <td>159</td>
                <td>172</td>
                <td>256</td>
                <td>370</td>
              </tr>
              <tr>
                <td rowSpan={3} width="299px">
                  Габаритные размеры, мм
                </td>
                <td className="first-two-cols" width="34px">
                  L
                </td>
                <td>1180</td>
                <td>1240</td>
                <td>1370</td>
                <td>1505</td>
                <td>1505</td>
                <td>1730</td>
                <td>2380</td>
              </tr>
              <tr>
                <td className="first-two-cols">B</td>
                <td>720</td>
                <td>720</td>
                <td>788</td>
                <td>918</td>
                <td>918</td>
                <td>1150</td>
                <td>1150</td>
              </tr>
              <tr>
                <td className="first-two-cols">H</td>
                <td>642</td>
                <td>763</td>
                <td>926</td>
                <td>1135</td>
                <td>1135</td>
                <td>1430</td>
                <td>1755</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Image
          src="/img/general_pages/elektrokalorifernaia_ustanovka_sfotc_chertezh.png"
          alt="Характеристики электрокалориферных установок СФОЦ"
          title="Габаритные размеры установок СФОЦ"
          width={774}
          height={1}
          className="mx-auto mb-2"
        />
        <ProductParagraph>
          Структура условного обозначения электрокалориферных установок СФОЦ
          производства ООО «Т.С.Т.». Электрокалориферная установка СФОЦ - Р/ И2
          УХЛ4 (ТУ 3442-005-55613706-02): СФО – тип комплектуемого
          электрокалорифера; Ц - тип комплектуемого вентилятора; Р - мощность,
          кВт; И2 - порядковый номер исполнения; УХЛ4 - климатическое исполнение
          и категория размещения.
        </ProductParagraph>
      </section>

      <LinkButtonsBlock
        buttons={[
          {
            name: "Каталог электроустановок СФОЦ",
            url: "/documents/Electroustanovka_SFOTC_katalog_2025.pdf",
            hiddenText: "Скачать каталог электрокалориферных установок СФОЦ",
            openNewTab: true,
            goal: "open_pdf",
          },
          {
            name: "Прайс-лист установок СФОЦ",
            url: "/documents/Price_list_zao_tst_2025.pdf",
            hiddenText: "Скачать прайс-лист электрокалориферных установок СФОЦ",
            openNewTab: true,
            goal: "open_pdf",
          },
        ]}
      />
    </>
  );
}
