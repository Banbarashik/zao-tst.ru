import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import CategoryCards from "@/components/categoryCards";
import Heading from "@/components/general_pages/heading";
import ProductParagraph from "@/components/catalog/productParagraph";
import LinkButtonsBlock from "@/components/linkButtonsBlock";
import RussiaMap from "@/components/RussiaMap";
import { cities } from "@/data/cities";
import { regions } from "@/data/regions";
import SpoilerButtonsBlock from "@/components/spoilerButtonsBlock";
import SpoilersClientWrapper from "@/components/SpoilersClientWrapper";
import Spoiler from "@/components/ui/spoiler";
import { BankDetailsTable } from "@/components/BankDetailsTable";

export const metadata: Metadata = {
  title:
    "Поставки калориферов и отопительных агрегатов по регионам РФ | Завод Т.С.Т.",
  description:
    "Продажа водяных, паровых и электрических калориферов производства ООО «Т.С.Т.». Спецификация выполненных отгрузок, условия оплаты и доставка промышленного теплообменного оборудования в регионы России.",
  keywords:
    "география поставок калориферов,карта поставок отопительных агрегатов,промышленное отопление регионы россии,купить калорифер от производителя,поставка калориферов в регионы,купить промышленный воздухонагреватель,водяные и паровые калориферы тст,производство вентиляционно отопительных установок,отопительное оборудование для крайнего севера,доставка промышленного отопительного оборудования",
};

const produkciyaCategories = [
  {
    name: "Калориферы",
    url: "/kalorifery",
    img: "/img/produkciya/kalorifery.png",
  },
  {
    name: "Отопительные агрегаты",
    url: "/otopitelnye-agregaty",
    img: "/img/produkciya/otopitelnye_agregaty.png",
  },
  {
    name: "Воздухонагревательные установки",
    url: "/vozduchonagrevatelnye-ustanovki",
    img: "/img/produkciya/vozduchonagrevatelnye_ustanovki.png",
  },
];

const linkButtons = [
  {
    name: "Калориферы",
    url: "/documents/Sertificat_kalorifery.pdf",
    openNewTab: true,
    goal: "open_pdf",
  },
  {
    name: "Отопительные агрегаты",
    url: "/documents/Sertificat_agregaty.pdf",
    openNewTab: true,
    goal: "open_pdf",
  },
  {
    name: "Воздухонагревательные установки",
    url: "/documents/Sertificat_ustanovki.pdf",
    openNewTab: true,
    goal: "open_pdf",
  },
];

export default function ProdukciyaPage() {
  return (
    <article className="@container w-full space-y-6">
      <Heading
        lvl={1}
        text="Воздушно-отопительное оборудование Т.С.Т. Карта поставок"
      />
      <ProductParagraph>
        Машиностроительное предприятие по производству промышленного
        воздушно-отопительного оборудования ЗАО «Т.С.Т.» образовано в 2001 году
        в городе Киселевске Кемеровской области (с 2015 года — ООО «Т.С.Т.»). За
        25 лет профессиональной деятельности накоплен большой опыт по
        разработке, изготовлению и поставке теплообменной продукции для ключевых
        отраслей экономики страны: тяжелой индустрии, энергетики и
        агропромышленного комплекса.
      </ProductParagraph>

      <section className="space-y-4">
        <Heading lvl={2} text="Продукция" />
        <ProductParagraph>
          Основная специализация нашего предприятия – выпуск водяных и паровых
          калориферов, осуществляющих нагрев воздуха для создания и поддержания
          оптимального микроклимата помещений и обеспечения технологических
          процессов. Действующая линейка стандартных воздухонагревателей
          насчитывает более 400 серийных моделей, что позволяет решать
          инженерные задачи, связанные с быстрым и качественным обогревом
          объектов любой площади.
        </ProductParagraph>
        <CategoryCards
          categories={produkciyaCategories}
          cardClassName="2xl:text-sm xl:px-6"
        />
        <ProductParagraph>
          На производственных мощностях завода изготавливаются водяные и паровые
          воздушно-отопительные агрегаты с широким спектром производительности
          по воздуху и теплу, электрические воздухонагревательные установки и
          комплектующие к этому теплообменному оборудованию. В 2002 году
          спроектирована и запущена в производство специализированная серия
          теплообменников и отопительных агрегатов, предназначенных для
          эксплуатации в экстремальных условиях сверхнизких температур Крайнего
          Севера и Сибири.
        </ProductParagraph>

        <Carousel
          opts={{ loop: true }}
          className="relative mx-10 border-2 border-[#ccc] shadow-[0px,1px,0,3px,#bdbdbd_2px,4px,6px,3px,#dbdbdb] 2xl:mx-6"
        >
          <CarouselContent className="aspect-2/1">
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/1. kalorifery.png"
                alt="Калориферы водяные"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/2. kalorifery_blok.png"
                alt="Паровые калориферы"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/3. kalorifery_flantcy.png"
                alt="Калориферы с фланцами"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/4. agregaty_gruz.png"
                alt="Отопительные агрегаты"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/5. kalorifery_nestandart.png"
                alt="Установка парового калорифера"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/6. kalorifery_blok.png"
                alt="Секция паровых калориферов"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/7. electrokalorifery_sbor.png"
                alt="Электрокалориферы"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/8. kalorifery_flantcy.png"
                alt="Водяные калориферы с фланцами"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/9. ustanovki_gruz.png"
                alt="Электрокалориферные установки"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/10. kalorifery_sbor.png"
                alt="Водяные воздухонагреватели"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/11. kalorifery_nestandart.png"
                alt="Промышленный калорифер"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/12. kalorifery_blok.png"
                alt="Установка паровых калориферов"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/13. kalorifery_gruz.png"
                alt="Калориферы биметаллические"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/14. kalorifery_blok.png"
                alt="Секция водяных калориферов"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/15. kalorifery_nestandart.png"
                alt="Паровой воздухонагреватель"
                fill
              />
            </CarouselItem>
            <CarouselItem className="relative cursor-grab">
              <Image
                src="/img/produkciya/gallery/16. kalorifery_sbor.png"
                alt="Калориферы водяные промышленные"
                fill
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <ProductParagraph>
          На страницах сайта организации представлены подробные теплотехнические
          и аэродинамические характеристики промышленной климатической
          продукции, а также специализированные онлайн-программы для быстрого
          расчета и подбора приточных калориферов. Инженерно-техническими
          специалистами нашего предприятия осуществляется полное техническое
          сопровождение поставляемого оборудования.
        </ProductParagraph>

        <div className="bg-primary-dark/50 mx-auto h-1 w-2/3 rounded-full mask-[linear-gradient(to_right,transparent,black,transparent)]" />

        <section>
          <Heading lvl={3} text="Приобретение продукции" />
          <ProductParagraph>
            Для покупки воздушно-отопительного оборудования вы можете заполнить
            форму обратной связи на сайте, позвонить по указанным контактным
            телефонам или отправить в адрес нашего предприятия заявку на
            электронную почту. В запросе следует указать модель, номер и
            количество требуемых калориферов, отопительных агрегатов,
            воздухонагревательных установок. Актуальные розничные цены на всю
            номенклатуру выпускаемого нами оборудования выложены в карточках
            отдельных товаров и на странице Контакты Прайс. В выставленном
            коммерческом предложении или счете будут представлены стоимость,
            наличие, сроки изготовления и условия поставки.
          </ProductParagraph>
        </section>

        <section className="mb-6 space-y-3">
          <Heading lvl={3} text="Порядок расчетов и документооборот" />
          <div className="space-y-1.5">
            <ProductParagraph>
              Покупка воздушно-отопительного оборудования совершается на
              основании счета на оплату. Условия оплаты продукции
              согласовываются с каждым покупателем и могут включать в себя как
              полную, так и частичную предоплату для запуска необходимого вам
              оборудования в производство. Заключаются договоры на долгосрочное
              сотрудничество с возможностью частичной или полной постоплаты
              изготовленного и поставленного товара.
            </ProductParagraph>
            <ul>
              <li>
                • Первичная документация: оформление поставок осуществляется
                через универсальный передаточный документ (УПД).
              </li>
              <li>
                • Электронный документооборот: поддерживается оперативный обмен
                закрывающими документами через системы ЭДО.
              </li>
            </ul>
          </div>

          <Spoiler title="Банковские реквизиты ООО «Т.С.Т.»">
            <BankDetailsTable cellClassName="py-1" />
          </Spoiler>
        </section>

        <section className="space-y-4">
          <Heading lvl={3} text="Поставка и логистические параметры" />
          <ProductParagraph>
            Отправка приобретенного воздушно-отопительного оборудования
            осуществляется на условиях самовывоза со склада завода,
            расположенного по адресу: г. Киселевск, ул. Юргинская 1. По
            согласованию возможна доставка продукции до местных терминалов
            транспортных компаний «ПЭК», «Деловые Линии» и др. в городе
            Прокопьевске для последующей межтерминальной перевозки в регион
            грузополучателя. Поставка промышленного оборудования может также
            выполняться собственным автотранспортом нашего предприятия.
          </ProductParagraph>
          <p className="text-secondary-text">
            Примечание: Справочные габариты, объем и вес конкретных моделей
            оборудования для расчета стоимости транспортировки представлены в
            карточках товаров. Адреса приемных терминалов транспортных компаний
            в субъектах РФ и точные сроки доставки до вашего города указаны на
            страницах соответствующих регионов.
          </p>
        </section>
      </section>

      <div className="bg-primary-dark/50 mx-auto h-1 w-2/3 rounded-full mask-[linear-gradient(to_right,transparent,black,transparent)]" />

      <section className="mb-10">
        <Heading lvl={2} text="Сертификаты" className="mb-4" />
        <LinkButtonsBlock buttons={linkButtons} />
      </section>

      <div className="bg-primary-dark/50 mx-auto h-1 w-2/3 rounded-full mask-[linear-gradient(to_right,transparent,black,transparent)]" />

      <section className="space-y-3">
        <Heading
          lvl={2}
          text="География отгрузок теплообменного оборудования по регионам"
          className="mb-4 text-center"
        />
        <div className="mb-6 w-full" style={{ aspectRatio: "1150 / 627" }}>
          <RussiaMap cities={cities} regions={regions} />
        </div>
        <div className="space-y-1">
          <ProductParagraph>
            На интерактивной карте отмечены промышленные зоны и регионы страны,
            в которые предприятие ООО «Т.С.Т.» ведет регулярные отгрузки
            воздушно-отопительного оборудования. Функция масштабирования
            позволяет детально приблизить интересующую вас область, найти
            конкретные города и оценить плотность эксплуатации нашей продукции
            на местных объектах. Через всплывающую таблицу выбранного участка
            осуществляется прямой переход к подробной истории поставок.
          </ProductParagraph>
        </div>

        <SpoilersClientWrapper>
          <SpoilerButtonsBlock
            groupId="produkciya-1"
            buttons={[
              {
                name: "Регион: Сибирь",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Поставки воздушно-отопительного оборудования производства
                      ООО «Т.С.Т.» выполняются в ключевые индустриальные центры
                      и автономные производственные комплексы Сибири,
                      обеспечивая бесперебойную работу предприятий в условиях
                      резко континентального климата, критической температуры
                      воздуха и экстремально затяжного отопительного периода.
                      Отгрузки калориферов, отопительных агрегатов и
                      вентиляционных установок осуществляются на крупнейшие
                      добывающие, металлургические, химические,
                      машиностроительные и агропромышленные площадки
                      макрорегиона. География поставок охватывает 10
                      территориально-производственных комплексов, включающих в
                      себя 56 городов и 57 иных населенных пунктов. Выберите
                      интересующую вас область, чтобы ознакомиться с
                      номенклатурой отгруженной продукции, логистическими узлами
                      доставки и локальными климатическими параметрами по СП
                      131.13330.
                    </p>
                    <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      <li className="py-2">
                        <Link
                          href="/regions/kemerovo"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Кемеровская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/novosibirsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Новосибирская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/krasnoyarsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Красноярский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/tomsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Томская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/barnaul"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Алтайский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/irkutsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Иркутская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/abakan"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Хакасия
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/omsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Омская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/gorno-altaysk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Алтай
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/kyzyl"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Тыва
                        </Link>
                      </li>
                    </ul>
                    <p className="italic">
                      В числе опорных объектов, оснащенных нашим оборудованием:
                      Объединенный металлургический комбинат ЕВРАЗ ЗСМК,
                      Братский алюминиевый завод (ОК РУСАЛ), угледобывающий
                      холдинг «СУЭК-Красноярск», нефтехимический комбинат
                      «Омский каучук» (ГК «Титан»), Новосибирский авиационный
                      завод имени В. П. Чкалова, Омское моторостроительное
                      объединение имени П. И. Баранова (ОДК Ростех),
                      Саяногорский вагоноремонтный завод,
                      научно-производственный комплекс «Алтай»,
                      научно-производственный центр «Полюс», кабельный завод
                      «Сибкабель», Томский электротехнический завод, предприятия
                      федерального агрохолдинга «Сибагро».
                    </p>
                  </div>
                ),
              },
              {
                name: "Регион: Поволжье",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Теплообменное и вентиляционное оборудование производства
                      ООО «Т.С.Т.» эксплуатируется в ключевых индустриальных
                      центрах, логистических хабах и автономных производственных
                      комплексах Поволжья, обеспечивая бесперебойную работу
                      предприятий в условиях умеренно континентального климата,
                      высокой влажности и затяжных межсезонных периодов.
                      Отгрузки калориферов, отопительных агрегатов и
                      вентиляционных установок осуществляются на крупнейшие
                      машиностроительные, автомобилестроительные, нефтегазовые,
                      химические, кабельные и агропромышленные площадки
                      Приволжского макрорегиона. География поставок охватывает
                      14 территориально-производственных комплексов, включающих
                      в себя 42 города и 11 иных населенных пунктов. Выберите
                      интересующую вас область, чтобы ознакомиться с
                      номенклатурой отгруженной продукции, логистическими узлами
                      доставки и локальными климатическими параметрами по СП
                      131.13330.
                    </p>
                    <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      <li className="py-2">
                        <Link
                          href="/regions/samara"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Самарская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/perm"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Пермский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/nizhny-novgorod"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Нижегородская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/orenburg"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Оренбургская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/saratov"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Саратовская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/ufa"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Башкортостан
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/kirov"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Кировская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/kazan"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Татарстан
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/penza"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Пензенская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/cheboksary"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Чувашская Республика
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/izhevsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Удмуртская Республика
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/ulyanovsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Ульяновская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/yoshkar-ola"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Марий Эл
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/saransk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Мордовия
                        </Link>
                      </li>
                    </ul>
                    <p className="italic">
                      В числе опорных объектов, оснащенных нашим оборудованием:
                      завод бурового оборудования АО «Волгабурмаш», Гайский ГОК
                      (холдинг УГМК), Чебоксарский электроаппаратный завод ЗАО
                      «ЧЭАЗ», фармацевтический комбинат ОАО
                      «Татхимфармпрепараты», завод компрессорного машиностроения
                      ОАО «Казанькомпрессормаш» (Группа ГМС), химический
                      комплекс ЗАО «Дюпон Химпром», Ульяновский сахарный завод,
                      АО «Литий-Элемент», завод электронной промышленности ООО
                      «Хелиос-Ресурс», производственно-конструкторское
                      объединение АО ПКО «Теплообменник», завод тяжелого
                      электромашиностроения ООО «Электротяжмаш-Привод»,
                      кабельные заводы АО «Кирскабель» и АО «Самарская Кабельная
                      Компания».
                    </p>
                  </div>
                ),
              },
              {
                name: "Регион: Урал",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Вентиляционно-отопительное оборудование производства ООО
                      «Т.С.Т.» эксплуатируется в ключевых индустриальных
                      центрах, энергетических узлах и автономных
                      производственных комплексах Уральского макрорегиона,
                      обеспечивая бесперебойную работу предприятий в условиях
                      сурового континентального климата, резких температурных
                      перепадов и повышенных ветровых нагрузок. Отгрузки
                      калориферов, отопительных агрегатов и вентиляционных
                      установок осуществляются на крупнейшие металлургические,
                      тяжелые машиностроительные, нефтегазовые,
                      теплоэнергетические и агропромышленные площадки Урала.
                      География поставок охватывает 6
                      территориально-производственных комплексов, включающих в
                      себя 18 городов и 4 иных населенных пункта. Выберите
                      интересующую вас область, чтобы ознакомиться с
                      номенклатурой отгруженной продукции, логистическими узлами
                      доставки и локальными климатическими параметрами по СП
                      131.13330.
                    </p>
                    <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      <li className="py-2">
                        <Link
                          href="/regions/ekaterinburg"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Свердловская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/chelyabinsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Челябинская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/surgut"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          ХМАО-Югра
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/tyumen"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Тюменская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/kurgan"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Курганская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/salekhard"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Ямало-Ненецкий АО
                        </Link>
                      </li>
                    </ul>
                    <p className="italic">
                      В числе опорных объектов, оснащенных нашим оборудованием:
                      Уральский завод тяжелого машиностроения («Уралмашзавод»),
                      ПАО «Курганская генерирующая компания», нефтедобывающий
                      комплекс «Соровскнефть» (ПАО «НК «Роснефть»),
                      экспериментальный завод ПИИ ОАО «Газтурбосервис»,
                      газоперерабатывающий кластер АО «Сибуртюменьгаз» (холдинг
                      СИБУР), производитель спецсталей АО «Уралкуз» (Мечел),
                      Кировградский завод твердых сплавов (КЗТС), ПАО «Энел
                      Россия», станкостроительное предприятие ООО
                      «Ремстанкомаш», производственные комплексы пищевого
                      холдинга «Союзпищепром».
                    </p>
                  </div>
                ),
              },
              {
                name: "Центральный регион",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Поставки воздушно-отопительного оборудования производства
                      ООО «Т.С.Т.» выполняются в ключевые индустриальные центры,
                      научно-исследовательские хабы и автономные
                      производственные комплексы Центрального макрорегиона,
                      обеспечивая бесперебойную работу предприятий в условиях
                      умеренно континентального климата, переменной влажности и
                      значительного перепада температур. Отгрузки промышленных
                      калориферов, отопительных агрегатов и вентиляционных
                      установок регулярно осуществляются на крупнейшие
                      авиакосмические, высокотехнологичные приборостроительные,
                      нефтехимические, перерабатывающие и машиностроительные
                      площадки Центрального округа. География поставок
                      охватывает 17 территориально-производственных комплексов,
                      включающих в себя 41 город и 15 иных населенных пунктов.
                      Выберите интересующую вас область, чтобы ознакомиться с
                      номенклатурой отгруженной продукции, логистическими узлами
                      доставки и локальными климатическими параметрами по СП
                      131.13330.
                    </p>
                    <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      <li className="py-2">
                        <Link
                          href="/regions/moskovskaya-oblast"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Московская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/tver"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Тверская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/yaroslavl"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Ярославская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/tula"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Тульская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/belgorod"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Белгородская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/kaluga"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Калужская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/ivanovo"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Ивановская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/bryansk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Брянская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/vladimir"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Владимирская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/voronezh"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Воронежская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/lipetsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Липецкая область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/kursk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Курская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/ryazan"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Рязанская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/tambov"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Тамбовская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/smolensk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Смоленская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/kostroma"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Костромская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/orel"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Орловская область
                        </Link>
                      </li>
                    </ul>
                    <p className="italic">
                      В числе опорных объектов, оснащенных нашим оборудованием:
                      Авиационная корпорация «Рубин», предприятие газотурбинного
                      машиностроения ПАО «ОДК-Сатурн» (ГК Ростех), Авиационный
                      научно-производственный комплекс имени М. В. Хруничева,
                      завод энергетического машиностроения ОАО «Калужский
                      турбинный завод» (холдинг «Силовые машины»), Дмитриевский
                      химический завод ООО «ДХЗ-Производство», завод аэрозольной
                      продукции ООО «Аэрозоль Новомосковск» (ГК «Арнест»),
                      Каменская бумажно-картонная фабрика холдинга «СФТ
                      Пакеджинг», Олымский сахарный завод, химический завод
                      катализаторов АО «Промкатализ», научно-производственное
                      предприятие ООО «НПП «Юникорн».
                    </p>
                  </div>
                ),
              },
              {
                name: "Регион: Северо-Запад",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Вентиляционное и теплообменное оборудование производства
                      ООО «Т.С.Т.» успешно эксплуатируется в ключевых
                      индустриальных центрах, портовых узлах и автономных
                      производственных комплексах Северо-Запада, обеспечивая
                      бесперебойную работу предприятий в условиях экстремальной
                      влажности, повышенных штормовых нагрузок и низких
                      заполярных температур. Отгрузки промышленных калориферов,
                      отопительных агрегатов и вентиляционных установок
                      осуществляются на крупнейшие судостроительные,
                      металлургические, химические, целлюлозно-бумажные и
                      биофармацевтические площадки Северо-Западного
                      макрорегиона. География поставок охватывает 8
                      территориально-производственных комплексов, включающих в
                      себя 21 город и 6 иных населенных пунктов. Выберите
                      интересующую вас область, чтобы ознакомиться с
                      номенклатурой отгруженной продукции, логистическими узлами
                      доставки и локальными климатическими параметрами по СП
                      131.13330.
                    </p>
                    <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      <li className="py-2">
                        <Link
                          href="/regions/sankt-peterburg"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Ленинградская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/vologda"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Вологодская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/syktyvkar"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Коми
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/arkhangelsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Архангельская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/petrozavodsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Карелия
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/pskov"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Псковская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/murmansk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Мурманская область
                        </Link>
                      </li>
                    </ul>
                    <p className="italic">
                      В числе опорных объектов, оснащенных нашим оборудованием:
                      Пикалевский глиноземный завод (холдинг РУСАЛ), целлюлозный
                      комбинат ООО «РК-Гранд», центр судостроения АО «ЦС
                      «Звездочка», Новгородский металлургический завод (холдинг
                      РМК), биофармацевтический комплекс ООО «Герофарм»,
                      Жешартский ЛПК, автоматизированный деревообрабатывающий
                      комбинат ООО «Сокол СиЭлТи» (холдинг Segezha Group),
                      подшипниковый завод ООО «ПО НПН», Боровичский Комбинат
                      Огнеупоров, арктическое нефтедобывающее предприятие АО
                      «Арктикнефть».
                    </p>
                  </div>
                ),
              },
              {
                name: "Регион: Дальний Восток",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Вентиляционное и теплообменное оборудование производства
                      ООО «Т.С.Т.» эксплуатируется в ключевых индустриальных
                      центрах, портовых узлах и автономных производственных
                      комплексах Дальнего Востока, обеспечивая бесперебойную
                      работу предприятий в условиях сложного и контрастного
                      климата, экстремально низких зимних температур и влажного
                      морского воздуха. Отгрузки калориферов, отопительных
                      агрегатов и вентиляционно-отопительных установок
                      осуществляются на крупнейшие судостроительные,
                      горно-металлургические, химико-фармацевтические и
                      логистические площадки макрорегиона. География поставок
                      охватывает 8 территориально-производственных комплексов,
                      включающих в себя 17 городов и 7 иных населенных пунктов.
                      Выберите интересующую вас область, чтобы ознакомиться с
                      номенклатурой отгруженной продукции, логистическими узлами
                      доставки и локальными климатическими параметрами по СП
                      131.13330.
                    </p>
                    <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      <li className="py-2">
                        <Link
                          href="/regions/yakutsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Саха (Якутия)
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/vladivostok"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Приморский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/khabarovsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Хабаровский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/blagoveshchensk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Амурская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/chita"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Забайкальский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/magadan"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Магаданская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/yuzhno-sakhalinsk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Сахалинская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/ulan-ude"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Республика Бурятия
                        </Link>
                      </li>
                    </ul>
                    <p className="italic">
                      В числе опорных объектов, оснащенных нашим оборудованием:
                      горно-обогатительные комплексы ПАО АК «Алроса»,
                      золотодобывающий прииск «Соловьевский», Дальнегорский ГОК,
                      Ново-Широкинский рудник, АО «Амуруголь», Улан-Удэнский
                      авиационный завод (холдинг «Вертолеты России»),
                      судостроительный комплекс «Дальневосточный завод «Звезда»,
                      горнорудные хабы компании «Полиметалл» на Колыме,
                      фармацевтический завод «Дальхимфарм», Амурский
                      судостроительный завод (ОСК), производственные и
                      топливно-распределительные комплексы ООО
                      «Сахалин-трейдинг».
                    </p>
                  </div>
                ),
              },
              {
                name: "Южный регион",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Вентиляционное и теплообменное оборудование производства
                      ООО «Т.С.Т.» успешно эксплуатируется в ключевых
                      индустриальных центрах, портовых узлах и автономных
                      производственных комплексах Южного макрорегиона,
                      обеспечивая бесперебойную работу предприятий в условиях
                      континентального климата, резких температурных перепадов и
                      высокой ветровой нагрузки степных и прибрежных зон.
                      Отгрузки промышленных калориферов, отопительных агрегатов
                      и вентиляционных установок осуществляются на крупнейшие
                      металлургические, угледобывающие, химические,
                      перерабатывающие и машиностроительные площадки Южного
                      округа. География поставок охватывает 7
                      территориально-производственных комплексов, включающих в
                      себя 18 городов и 6 иных населенных пунктов. Выберите
                      интересующую вас область, чтобы ознакомиться с
                      номенклатурой отгруженной продукции, логистическими узлами
                      доставки и локальными климатическими параметрами по СП
                      131.13330.
                    </p>
                    <ul className="grid grid-cols-1 items-center gap-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                      <li className="py-2">
                        <Link
                          href="/regions/rostov-na-donu"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Ростовская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/krasnodar"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Краснодарский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/volgograd"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Волгоградская область
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/stavropol"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Ставропольский край
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/grozny"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Чеченская Республика
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/nalchik"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Кабардино-Балкарская Республика
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="/regions/cherkessk"
                          className="text-primary hover:primary-dark text-lg hover:underline"
                        >
                          Карачаево-Черкесская Республика
                        </Link>
                      </li>
                    </ul>
                    <p className="italic">
                      В числе опорных объектов, оснащенных нашим оборудованием:
                      вагоноремонтный комплекс тяжелого машиностроения ООО
                      «Депо-ЕвроХим», угледобывающая компания ОАО «Донуголь»,
                      химический завод ООО «РусХимПром», Шахтинский
                      авиационно-ремонтный завод, агропромышленный холдинг АО
                      фирма «Агрокомплекс» им. Н. И. Ткачева, производитель
                      упаковки для фармацевтической и пищевой промышленности ЗАО
                      «Констанция Кубань», Эркен-Шахарский сахарный завод,
                      научно-производственное предприятие специального
                      машиностроения ООО «НПО «ХС Машиностроение», полимерные
                      комбинаты ООО «Полипак» и ООО «ПО Полимар».
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </SpoilersClientWrapper>

        <ProductParagraph>
          На страницах регионов собраны спецификации выполненных отгрузок по
          местным предприятиям, локальные климатические параметры для
          теплотехнических расчетов, а также адреса грузовых терминалов и сроки
          доставки транспортных компаний до конкретного города. Для удобства
          проектирования и снабжения под картой доступна прямая структура
          спойлеров с разбивкой областей по основным макрорегионам.
        </ProductParagraph>
      </section>
    </article>
  );
}
