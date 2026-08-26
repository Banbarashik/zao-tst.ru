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

/* export const metadata: Metadata = {
  title: "Производство промышленного воздушно-отопительного оборудования",
  description:
    "Промышленное воздушно-отопительное оборудование от предприятия-производителя Т.С.Т. Продажа калориферов, отопительных агрегатов, воздухонагревательных установок",
  keywords:
    "промышленное воздушно отопительное оборудование,промышленные агрегаты воздушного отопления,производитель промышленных калориферов,промышленные калориферы цена,промышленные калориферы расчет и подбор,промышленные водяные калориферы,промышленные паровые калориферы,промышленные отопительные агрегаты,промышленные электрокалориферы,промышленные калориферы купить",
}; */

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
      <Heading lvl={1} text="Промышленное воздушно-отопительное оборудование" />
      <ProductParagraph>
        Машиностроительное предприятие по производству промышленного
        воздушно-отопительного оборудования ЗАО «Т.С.Т.» образовано в 2001 году.
        За двадцать пять лет профессиональной деятельности накоплен большой опыт
        по разработке, изготовлению и поставке теплообменной продукции для
        различных отраслей экономики.
      </ProductParagraph>

      <section className="space-y-4">
        <Heading lvl={2} text="Продукция" />
        <ProductParagraph>
          Основная специализация нашего предприятия – выпуск водяных и паровых
          калориферов, осуществляющих нагрев воздуха для создания и поддержания
          оптимального микроклимата помещений и технологических процессов. Общая
          серийная линейка стандартных воздухонагревателей насчитывает более
          четырехсот моделей, что предоставляет возможность решить задачи,
          связанные с быстрым и качественным обогревом объектов любой площади.
        </ProductParagraph>
        <CategoryCards
          categories={produkciyaCategories}
          cardClassName="2xl:text-sm xl:px-6"
        />
        <ProductParagraph>
          На производственных площадях предприятия изготавливаются водяные и
          паровые воздушно-отопительные агрегаты с широким спектром
          производительности, электрические воздухонагревательные установки и
          комплектующие к этому теплообменному оборудованию. В 2002 году
          спроектирована и запущена в работу серия теплообменников и агрегатов
          для эксплуатации в условиях пониженных температур.
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
          характеристики промышленной климатической продукции, программы для
          быстрого подбора приточных калориферов. Специалистами нашего
          предприятия осуществляется техническое сопровождение.
        </ProductParagraph>

        <Heading lvl={3} text="Приобретение продукции" />
        <ProductParagraph>
          Для покупки воздушно-отопительного оборудования вы можете заполнить
          форму обратной связи на сайте, позвонить по указанным контактным
          телефонам, отправить в адрес нашего предприятия заявку на электронную
          почту. В запросе следует указать модель, номер и количество требуемых
          калориферов, отопительных агрегатов, воздухонагревательных установок.
          Актуальные розничные цены на всю номенклатуру выпускаемого нами
          оборудования выложены в карточках отдельных товаров и на странице
          Контакты Прайс. В выставленном коммерческом предложении или счете
          будут представлены стоимость, наличие, сроки изготовления и условия
          поставки.
        </ProductParagraph>

        <Heading lvl={3} text="Оплата продукции" />
        <ProductParagraph>
          Покупка воздушно-отопительного оборудования совершается на основании
          счета на оплату. Условия оплаты продукции согласовываются с каждым
          покупателем и могут включать в себя как полную, так и частичную
          предоплату для запуска необходимого вам оборудования в производство.
          Заключаются договоры на долгосрочное сотрудничество с возможностью
          частичной или полной постоплаты изготовленного и поставленного товара.
        </ProductParagraph>

        <Heading lvl={3} text="Поставка продукции" />
        <ProductParagraph>
          Отправка приобретенного воздушно-отопительного оборудования
          осуществляется на условиях самовывоза со склада завода. По
          согласованию возможна доставка продукции до местных терминалов
          транспортных компаний для последующей межтерминальной перевозки в
          регион грузополучателя. Поставка промышленного оборудования может
          также выполняться собственным автотранспортом нашего предприятия.
        </ProductParagraph>
      </section>

      <section className="mb-10">
        <Heading lvl={2} text="Сертификаты" className="mb-4" />
        <LinkButtonsBlock buttons={linkButtons} />
      </section>

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
                name: "РЕГИОН: СИБИРЬ",
                children: (
                  <div className="space-y-4 p-4 text-[15px]">
                    <p className="italic">
                      Поставки воздушно-отопительного оборудования производства
                      ООО «Т.С.Т.» выполнены в ключевые индустриальные центры и
                      автономные производственные комплексы Сибири. Отгрузки
                      калориферов, отопительных агрегатов и установок
                      осуществляются на крупнейшие добывающие, металлургические,
                      химические, машиностроительные и агропромышленные площадки
                      макрорегиона. Представлены 10 субъектов, 58 городов и 57
                      населенных пунктов. Выберите интересующую вас область,
                      чтобы ознакомится с номенклатурой отгруженной продукции,
                      логистическими узлами доставки и локальными климатическими
                      параметрами по СП 131.13330.
                    </p>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                      В числе опорных объектов, укомплектованных нашим
                      оборудованием: Объединенный металлургический комбинат
                      ЕВРАЗ ЗСМК, Братский алюминиевый завод (ОК РУСАЛ),
                      Угледобывающий холдинг «СУЭК-Красноярск», Нефтехимический
                      комбинат «Омский каучук» (ГК «Титан»), Новосибирский
                      авиационный завод (НАЗ), Омское моторостроительное
                      объединение имени П. И. Баранова (ОДК Ростех),
                      Саяногорский Вагоноремонтный Завод, АО ФНПЦ «Алтай» и
                      Научно-производственный центр «Полюс» (Роскосмос),
                      Кабельный завод «Сибкабель» (Холдинг Кабельный Альянс),
                      Томский электротехнический завод, предприятия федерального
                      агрохолдинга «Сибагро».
                    </p>
                  </div>
                ),
              },
              {
                name: "РЕГИОН: ПОВОЛЖЬЕ",
                children: (
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                ),
              },
              {
                name: "РЕГИОН: УРАЛ",
                children: (
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                ),
              },
              {
                name: "Южный регион",
                children: (
                  <ul className="grid grid-cols-1 items-center gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="p-2 px-5">
                      <Link
                        href="/regions/rostov-na-donu"
                        className="text-primary hover:primary-dark text-lg hover:underline"
                      >
                        Ростовская область
                      </Link>
                    </li>
                    <li className="p-2 px-5">
                      <Link
                        href="/regions/krasnodar"
                        className="text-primary hover:primary-dark text-lg hover:underline"
                      >
                        Краснодарский край
                      </Link>
                    </li>
                    <li className="p-2 px-5">
                      <Link
                        href="/regions/volgograd"
                        className="text-primary hover:primary-dark text-lg hover:underline"
                      >
                        Волгоградская область
                      </Link>
                    </li>
                    <li className="p-2 px-5">
                      <Link
                        href="/regions/stavropol"
                        className="text-primary hover:primary-dark text-lg hover:underline"
                      >
                        Ставропольский край
                      </Link>
                    </li>
                    <li className="p-2 px-5">
                      <Link
                        href="/regions/grozny"
                        className="text-primary hover:primary-dark text-lg hover:underline"
                      >
                        Чеченская Республика
                      </Link>
                    </li>
                    <li className="p-2 px-5">
                      <Link
                        href="/regions/nalchik"
                        className="text-primary hover:primary-dark text-lg hover:underline"
                      >
                        Кабардино-Балкарская Республика
                      </Link>
                    </li>
                    <li className="p-2 px-5">
                      <Link
                        href="/regions/cherkessk"
                        className="text-primary hover:primary-dark text-lg hover:underline"
                      >
                        Карачаево-Черкесская Республика
                      </Link>
                    </li>
                  </ul>
                ),
              },
              {
                name: "РЕГИОН: СЕВЕРО-ЗАПАД",
                children: (
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                ),
              },
              {
                name: "РЕГИОН: ДАЛЬНИЙ ВОСТОК",
                children: (
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                ),
              },
              {
                name: "ЦЕНТРАЛЬНЫЙ РЕГИОН",
                children: (
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
