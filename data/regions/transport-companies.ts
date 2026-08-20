import type { TransportTerminals } from "./types";

/**
 * Транспортные терминалы из финального source/regions.docx.
 *
 * Slug-и населённых пунктов приведены к правилам транслитерации,
 * используемым в regions(1).ts:
 * - х -> kh, щ -> shch, ю -> yu, я -> ya и т. д.;
 * - ь/ъ удаляются;
 * - конечные -ий/-ый -> -y;
 * - пробелы и знаки препинания -> "-";
 * - внешний ключ региона берётся из regions(1).ts буквально,
 *   поэтому сохраняются проектные исключения вроде
 *   Московская область -> moskovskaya-oblast и ХМАО-Югра -> surgut.
 *
 * Адреса и сроки доставки не нормализуются и сохраняются без изменений.
 */
export const TRANSPORT_TERMINALS: Record<string, TransportTerminals> = {
  barnaul: {
    barnaul: [
      {
        company: "ПЭК",
        address: "г. Барнаул, ул. Чернышевского, 293 А",
        deliveryTime: {
          minDays: 3,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Барнаул, тракт Павловский, зд. 200 М",
        deliveryTime: {
          minDays: 3,
        },
      },
    ],
    biysk: [
      {
        company: "ПЭК",
        address: "г. Бийск, ул. Василия Шадрина, д. 62/1",
        deliveryTime: {
          minDays: 4,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Бийск, ул. имени Героя Советского Союза Васильева, д. 85",
        deliveryTime: {
          minDays: 3,
        },
      },
    ],
    rubtsovsk: [
      {
        company: "ПЭК",
        address: "г. Рубцовск, Кооперативный проезд, 1",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Рубцовск, ул. Оросительная, д. 223, пом. 7",
        deliveryTime: {
          minDays: 3,
        },
      },
    ],
  },
  blagoveshchensk: {
    blagoveshchensk: [
      {
        company: "ПЭК",
        address: "г. Благовещенск, ул. Калинина, 126",
        deliveryTime: {
          minDays: 12,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Благовещенск, ул. Театральная, д. 251",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  arkhangelsk: {
    arkhangelsk: [
      {
        company: "ПЭК",
        address: "г. Архангельск, Талажское шоссе, 4с1",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address:
          "г. Архангельск, проезд Первый (Кузнечихинский промузел), д. 7",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  belgorod: {
    belgorod: [
      {
        company: "ПЭК",
        address: "г. Белгород, ул. Корочанская, 85 А",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Белгород, ул. Коммунальная, зд 18",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    "stary-oskol": [
      {
        company: "ПЭК",
        address: "г. Старый Оскол, ул. Заводская улица, 1 А",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Старый Оскол, пр-т Алексея Угарова, д. 5 Г",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  bryansk: {
    bryansk: [
      {
        company: "ПЭК",
        address: "г. Брянск, ул. Марии Расковой, 25",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Брянск, ул. Бурова, д. 20/18",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  vladimir: {
    vladimir: [
      {
        company: "ПЭК",
        address: "г. Владимир, ул. Гастелло, 8",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Владимир, ул. Ноябрьская, д. 131",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  volgograd: {
    volgograd: [
      {
        company: "ПЭК",
        address: "г. Волгоград, ул. Землячки, 16",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Волгоград, ул. Моторная, д. 9 Г",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    kamyshin: [
      {
        company: "ПЭК",
        address: "г. Камышин, ул. Мира, 2 В",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Камышин, ул. Петровская, д. 36",
        deliveryTime: {
          minDays: 14,
        },
      },
    ],
  },
  vologda: {
    vologda: [
      {
        company: "ПЭК",
        address: "г. Вологда, ул. Ильюшина, 9 Б",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Вологда, ул. Северная, д. 27 Б",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    cherepovets: [
      {
        company: "ПЭК",
        address: "г. Череповец, ул. Красная, 4 Г",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Череповец, ул. Промышленная, д. 7, стр. 4",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  voronezh: {
    voronezh: [
      {
        company: "ПЭК",
        address: "г. Воронеж, ул. Остужева, 58",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Воронеж, ул. Брусилова, д 4 Б",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  chita: {
    chita: [
      {
        company: "ПЭК",
        address: "г. Чита, ул. Ковыльная д. 27, стр. 7",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Чита, ул. Сухая Падь, д. 3, стр. 1, пом. 1",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  ivanovo: {
    ivanovo: [
      {
        company: "ПЭК",
        address: "г. Иваново, ул. Парижской Коммуны, 84",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "р-н Ивановский, д. Игнатово, ул. Аэропортовская, д. 12",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    kineshma: [
      {
        company: "ПЭК",
        address: "г. Кинешма, ул. Вичугская, 150",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Кинешма, ул. Вичугская, д. 134 В",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  irkutsk: {
    irkutsk: [
      {
        company: "ПЭК",
        address: "г. Иркутск, ул. Новаторов, 1",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Иркутск, ул. Генерала Доватора, д. 25, пом. 3",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
    angarsk: [
      {
        company: "ПЭК",
        address: "г. Ангарск, 215-й квартал, 16",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Ангарск, 215-й квартал, стр. 1",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    bratsk: [
      {
        company: "ПЭК",
        address: "г. Братск, Центральный район, ул. Южная, д. 14, стр. 10",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Братск, проезд Стройиндустрии, зд. 58",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    tulun: [
      {
        company: "ПЭК",
        address: "г. Тулун, мкр. Угольщиков, 36",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    "ust-kut": [
      {
        company: "Деловые Линии",
        address: "г. Усть-Кут, ул. Шевченко, д.39",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
  },
  nalchik: {
    nalchik: [
      {
        company: "ПЭК",
        address: "г. Нальчик, Кузнечный переулок, 5",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Нальчик, ул. Комарова, д. 163",
        deliveryTime: {
          minDays: 11,
        },
      },
    ],
  },
  kaluga: {
    kaluga: [
      {
        company: "ПЭК",
        address: "г. Калуга, ул. Параллельная, 11с22",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Калуга, ш. Грабцевское, д. 107",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    kozelsk: [
      {
        company: "ПЭК",
        address: "г. Козельск, ул. Чкалова, 84с3",
        deliveryTime: {
          minDays: 14,
        },
      },
    ],
  },
  kemerovo: {
    kemerovo: [
      {
        company: "ПЭК",
        address: "г. Кемерово, Кузнецкий проспект, 91",
        deliveryTime: {
          minDays: 3,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Кемерово, ул. Тухачевского, д 60",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
    "leninsk-kuznetsky": [
      {
        company: "ПЭК",
        address: "г. Ленинск-Кузнецкий, ул. Ламповая, д. 6/2",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Ленинск-Кузнецкий, ул. Спасстанция, д. 15, корп. 18",
        deliveryTime: {
          minDays: 3,
        },
      },
    ],
    novokuznetsk: [
      {
        company: "ПЭК",
        address: "г. Новокузнецк, ул. Рудокопровая, 30 А",
        deliveryTime: {
          minDays: 1,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Новокузнецк, ул. Полесская, зд. 15",
        deliveryTime: {
          minDays: 3,
        },
      },
    ],
    yurga: [
      {
        company: "Деловые Линии",
        address: "г. Юрга, ул. Заводская, д. 1",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
  },
  kirov: {
    kirov: [
      {
        company: "ПЭК",
        address: "г. Киров, ул. Щорса, 70А/5",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Киров, ул. Дзержинского, д 81/3",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
    "kirovo-chepetsk": [
      {
        company: "ПЭК Деловые Линии",
        address: "г. Кирово-Чепецк, ул. Производственная, д. 6/4",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
  },
  kostroma: {
    kostroma: [
      {
        company: "ПЭК",
        address: "г. Кострома, ул. Индустриальная, д. 81",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Кострома, ул. Зеленая, д. 1 Б, стр. 5",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  krasnodar: {
    krasnodar: [
      {
        company: "ПЭК",
        address: "г. Краснодар, Ростовское шоссе, 26/1с2",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Краснодар, ул. имени Александра Покрышкина, д. 2/12",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    novorossiysk: [
      {
        company: "ПЭК",
        address:
          "г. Новороссийск, тер. Кирилловская промзона, ул. Кооперативная, д. 19 А",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Новороссийск, с. Гайдук, ш. Новороссийское, д. 59",
        deliveryTime: {
          minDays: 11,
        },
      },
    ],
  },
  krasnoyarsk: {
    krasnoyarsk: [
      {
        company: "ПЭК",
        address: "Емельяновский район, п. Солонцы, проспект Котельникова, 9 Б",
        deliveryTime: {
          minDays: 6,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Красноярск, ш. Северное, д. 17",
        deliveryTime: {
          minDays: 5,
        },
      },
    ],
    achinsk: [
      {
        company: "ПЭК",
        address: "г. Ачинск, Южная Промзона квартал 2, строение № 1Г/1, пом. 2",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Ачинск, ул. Льва Толстого, стр. 49",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
    norilsk: [
      {
        company: "ПЭК",
        address: "г. Норильск, ул. Ленинградская, д. 11 А",
        deliveryTime: {
          minDays: 44,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Норильск, ул. Лауреатов, д. 86 А",
        deliveryTime: {
          minDays: 48,
        },
      },
    ],
    minusinsk: [
      {
        company: "ПЭК",
        address: "г. Минусинск, ул. Тимирязева, 43",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    lesosibirsk: [
      {
        company: "ПЭК",
        address: "г. Лесосибирск, ул. Енисейская, 25Ас7",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  kurgan: {
    kurgan: [
      {
        company: "ПЭК",
        address: "г. Курган, ул. Омская, д. 146",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Курган, ул. Омская, д. 146",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  kursk: {
    kursk: [
      {
        company: "ПЭК",
        address: "г. Курск, ул. Литовская, 2 С",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Курск, ул. 50 лет Октября, зд. 179",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  "sankt-peterburg": {
    "sankt-peterburg": [
      {
        company: "ПЭК",
        address: "г. Санкт-Петербург, ул. Якорная, 17, лит. Ш",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Санкт-Петербург, ул. Кубинская, д. 75, лит. Б, корп. 2",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
    gatchinsky: [
      {
        company: "Деловые Линии",
        address: "р-н Гатчинский, п. Пригородный, ш. Вырицкое, д. 2",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
  },
  lipetsk: {
    lipetsk: [
      {
        company: "ПЭК",
        address: "г. Липецк, ул. Ангарская, 30",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Липецк, проезд Промышленный, влд. 1",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  magadan: {
    magadan: [
      {
        company: "ПЭК",
        address: "г. Магадан, ул. Гагарина, д. 45А/1",
        deliveryTime: {
          minDays: 38,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Магадан, ул. Кожзаводская, зд. 12 Е",
        deliveryTime: {
          minDays: 58,
        },
      },
    ],
  },
  "moskovskaya-oblast": {
    "moskovskaya-oblast": [
      {
        company: "ПЭК",
        address: "г. Москва, 2-я Мелитопольская улица, 12Ас1",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Москва, ул. Подольских Курсантов, д. 17, корп. 2",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    serpukhov: [
      {
        company: "ПЭК",
        address: "г. Серпухов, Северное шоссе, стр. 2",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Серпухов, Северное шоссе, стр. 2",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    balashikha: [
      {
        company: "ПЭК",
        address: "г. Балашиха, ул. Твардовского, д. 24",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Балашиха, ш. Энтузиастов, д. 1 А",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
    khimki: [
      {
        company: "ПЭК",
        address: "г. Химки, микрорайон Сходня, ул. Ленинградская, 4",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Химки, проезд Малый, стр. 3",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    elektrostal: [
      {
        company: "ПЭК",
        address: "г. Электросталь, ул. Рабочая, 35 А",
        deliveryTime: {
          minDays: 11,
        },
      },
    ],
    dubna: [
      {
        company: "ПЭК",
        address: "г. Дубна, ул. Луговая, д. 26 А",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
    vidnoe: [
      {
        company: "Деловые Линии",
        address: "г. Видное, проезд Проектируемый № 251, влд. 1",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    shchelkovo: [
      {
        company: "ПЭК",
        address: "г. Щелково, территория Ярославская, 8",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    lyubertsy: [
      {
        company: "Деловые Линии",
        address: "г. Люберцы, пгт. Октябрьский, ул. Ленина, д. 47 Д",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  murmansk: {
    murmansk: [
      {
        company: "ПЭК",
        address: "г. Мурманск, ул. Транспортная, д. 10",
        deliveryTime: {
          minDays: 13,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Мурманск, ул. Промышленная, д. 25",
        deliveryTime: {
          minDays: 11,
        },
      },
    ],
  },
  "nizhny-novgorod": {
    "nizhny-novgorod": [
      {
        company: "ПЭК",
        address: "г. Нижний Новгород, ул. Вторчермета, 1 к2",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Нижний Новгород, ул. Геологов, д 2Е",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    dzerzhinsk: [
      {
        company: "ПЭК",
        address: "г. Дзержинск, проспект Ленина, 121 А",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Дзержинск, дор. Заревская объездная, д. 9 Ж",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    sarov: [
      {
        company: "ПЭК",
        address: "г. Саров, Малая коммунальная дорога, д. 4, стр. 4",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
  },
  "veliky-novgorod": {
    "veliky-novgorod": [
      {
        company: "ПЭК",
        address: "г. Великий Новгород, Базовый переулок, 13",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Великий Новгород, ул. Нехинская, д. 57",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  novosibirsk: {
    novosibirsk: [
      {
        company: "ПЭК",
        address: "г. Новосибирск, ул. Большая, 280",
        deliveryTime: {
          minDays: 2,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Новосибирск, ул. Петухова, д. 73, корп. 1",
        deliveryTime: {
          minDays: 4,
        },
      },
    ],
    berdsk: [
      {
        company: "Деловые Линии",
        address: "г. Бердск, ул. Ленина, д. 136/1",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
  },
  omsk: {
    omsk: [
      {
        company: "ПЭК",
        address: "г. Омск, Космический проспект, 109 к1",
        deliveryTime: {
          minDays: 3,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Омск, ул. Омская, д. 221",
        deliveryTime: {
          minDays: 4,
        },
      },
    ],
  },
  orenburg: {
    orenburg: [
      {
        company: "ПЭК",
        address: "г. Оренбург, Шарлыкское шоссе, 12/1",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Оренбург, ш. Загородное, д 3/7, лит. Б8",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    orsk: [
      {
        company: "ПЭК",
        address: "г. Орск, проспект Мира, 12 Б",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Орск, ул. Новотроицкое шоссе, зд. 11",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    buzuluk: [
      {
        company: "ПЭК",
        address: "г. Бузулук, ул. Гая, д. 99",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "р-н Бузулукский, п. Искра, ул. Краснознаменная, зд. 1",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  orel: {
    orel: [
      {
        company: "ПЭК",
        address: "г. Орел, ул. Спивака, 74 А",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Орел, ул. Колхозная, д. 11, корп. 4",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  penza: {
    penza: [
      {
        company: "ПЭК",
        address: "г. Пенза, ул. Измайлова, 13",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Пенза, ул. Совхозная, д. 15, лит. Л",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    kuznetsk: [
      {
        company: "ПЭК",
        address: "г. Кузнецк, ул. Алексеевское Шоссе, 5",
        deliveryTime: {
          minDays: 16,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Кузнецк, ул. Алексеевское шоссе, зд. 4",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
  },
  perm: {
    perm: [
      {
        company: "ПЭК",
        address: "г. Пермь, ул. Космонавта Леонова, 86",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Пермь, ул. Танкистов, д. 50",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    lysva: [
      {
        company: "ПЭК",
        address: "г. Лысьва, ул. Коммунаров, 27",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  vladivostok: {
    vladivostok: [
      {
        company: "ПЭК",
        address: "г. Владивосток, ул. Командорская, 11с11",
        deliveryTime: {
          minDays: 13,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Владивосток, ул. Посадская, д. 20",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
    ussuriysk: [
      {
        company: "ПЭК",
        address: "г. Уссурийск, ул. Резервная, 31",
        deliveryTime: {
          minDays: 21,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Уссурийск, ул. Механизаторов, зд. 8 А",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
    nakhodka: [
      {
        company: "ПЭК",
        address: "г. Находка, ул. Угольная, 61с19",
        deliveryTime: {
          minDays: 13,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Находка, ул. Шоссейная, д. 146",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
  },
  pskov: {
    pskov: [
      {
        company: "ПЭК",
        address: "г. Псков, ул. Леона Поземского, 110 Д",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Псков, ш. Зональное, д. 26 А, пом. 2002",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  ufa: {
    ufa: [
      {
        company: "ПЭК",
        address: "г. Уфа, Сельская Богородская улица, 57/1",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Уфа, ул. Трамвайная, д. 2/5",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    neftekamsk: [
      {
        company: "ПЭК",
        address: "г. Нефтекамск, ул. Высоковольтная, 2",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Нефтекамск, ул. Высоковольтная, д 9С",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  "ulan-ude": {
    "ulan-ude": [
      {
        company: "ПЭК",
        address: "г. Улан-Удэ, ул. Ботаническая, 38 к2",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Улан-Удэ, км 502, д. 160",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  petrozavodsk: {
    petrozavodsk: [
      {
        company: "ПЭК",
        address: "г. Петрозаводск, ул. Зайцева, 65с4",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Петрозаводск, ул. Коммунистов, д 50",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  syktyvkar: {
    syktyvkar: [
      {
        company: "ПЭК",
        address: "г. Сыктывкар, ул. Лесопарковая, 21/3",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Сыктывкар, ш. Сысольское, д. 33",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  "yoshkar-ola": {
    "yoshkar-ola": [
      {
        company: "ПЭК",
        address: "г. Йошкар-Ола, ул. Строителей, 99 Б",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Йошкар-Ола, ул. Машиностроителей, д. 109/8",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  saransk: {
    saransk: [
      {
        company: "ПЭК",
        address: "г. Саранск, Строительная улица, 18Ас2",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Саранск, ул. Строительная, д. 32Б, стр. 1",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  yakutsk: {
    yakutsk: [
      {
        company: "ПЭК",
        address: "г. Якутск, ул. Автодорожная, д. 38/34Б",
        deliveryTime: {
          minDays: 27,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Якутск, ул. Бабушкина, д. 9 М, стр. 1",
        deliveryTime: {
          minDays: 22,
        },
      },
    ],
  },
  kazan: {
    kazan: [
      {
        company: "ПЭК",
        address: "г. Казань, ул. Михаила Миля, д. 53",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Казань, ул. Аделя Кутуя, д. 151",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    "naberezhnye-chelny": [
      {
        company: "ПЭК",
        address: "г. Набережные Челны, Хлебный проезд, 28",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Набережные Челны, проезд Хлебный, зд. 22Г",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  abakan: {
    abakan: [
      {
        company: "ПЭК",
        address: "г. Абакан, ул. Хлебная, 30",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Абакан, ул. Заводская, д. 1, стр. В",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
  },
  "rostov-na-donu": {
    "rostov-na-donu": [
      {
        company: "ПЭК",
        address: "г. Ростов-на-Дону, проспект Стачки, д. 249",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Ростов-на-Дону, ул. Страны Советов, д. 44 Г",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    taganrog: [
      {
        company: "ПЭК",
        address: "г. Таганрог, ул. Пархоменко, 22 А",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Таганрог, ул. Николаевское Шоссе, д. 34",
        deliveryTime: {
          minDays: 11,
        },
      },
    ],
    novocherkassk: [
      {
        company: "ПЭК",
        address: "г. Новочеркасск, ул. Трамвайная, 7/6",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Новочеркасск, ш. Харьковское, д. 7 Д",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
    shakhty: [
      {
        company: "ПЭК",
        address: "г. Шахты, Газетный переулок, 4 Г",
        deliveryTime: {
          minDays: 10,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Шахты, ул. Маяковского, стр. 232",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  ryazan: {
    ryazan: [
      {
        company: "ПЭК",
        address: "г. Рязань, М-5 Урал, 195-й километр, 1Б",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Рязань, км 185 (Окружная дорога), д. 6А",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  samara: {
    samara: [
      {
        company: "ПЭК",
        address: "г. Самара, ш. Смышляевское, д. 1 А",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Самара, ул. Демократическая, д. 45, корп. А",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    tolyatti: [
      {
        company: "ПЭК",
        address: "г. Тольятти, Базовая улица, 1с20",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Тольятти, ул. Транспортная, д. 22, стр. 2",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  saratov: {
    saratov: [
      {
        company: "ПЭК",
        address: "г. Саратов, 1-й Сеченский проезд, дом № 8, корпус 1",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Саратов, ул. Автокомбинатовская, д. 12/6",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
    engels: [
      {
        company: "ПЭК",
        address: "г. Энгельс, ул. Промышленная, 3",
        deliveryTime: {
          minDays: 13,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Энгельс, ул. Лесокомбинатская, д. 30/3",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  "yuzhno-sakhalinsk": {
    "yuzhno-sakhalinsk": [
      {
        company: "ПЭК",
        address: "г. Южно-Сахалинск, ул. Ленина, 474 А",
        deliveryTime: {
          minDays: 36,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Южно-Сахалинск, проспект Мира, д. 2В/3А, стр. 1",
        deliveryTime: {
          minDays: 43,
        },
      },
    ],
  },
  ekaterinburg: {
    ekaterinburg: [
      {
        company: "ПЭК",
        address: "г. Екатеринбург, Чистопольская улица, 6Е",
        deliveryTime: {
          minDays: 6,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Екатеринбург, ул. Таганская, стр. 60",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    "nizhny-tagil": [
      {
        company: "ПЭК",
        address: "г. Нижний Тагил, Восточное шоссе, 17 А",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Нижний Тагил, ш. Восточное, д. 17Б, стр. 1",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
  },
  smolensk: {
    smolensk: [
      {
        company: "ПЭК",
        address: "г. Смоленск, Старо-Комендантская улица, 2",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Смоленск, ул. Кашена, д. 23",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  stavropol: {
    nevinnomyssk: [
      {
        company: "ПЭК",
        address: "г. Невинномысск, Пятигорское шоссе, 7",
        deliveryTime: {
          minDays: 11,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Невинномысск, Пятигорское шоссе, 7",
        deliveryTime: {
          minDays: 11,
        },
      },
    ],
    budennovsk: [
      {
        company: "ПЭК",
        address: "г. Буденновск, ул. Промышленная, 2",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
    pyatigorsk: [
      {
        company: "ПЭК",
        address: "г. Пятигорск, ул. Егоршина, 6с1",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
    predgorny: [
      {
        company: "Деловые Линии",
        address: "р-н Предгорный, с. Винсады, ш. Кисловодское, д. 48В, стр. 1",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  tambov: {
    tambov: [
      {
        company: "ПЭК",
        address: "г. Тамбов, ул. Кавалерийская, 13 А",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Тамбов, проезд Энергетиков, д. 30",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  tver: {
    tver: [
      {
        company: "ПЭК",
        address: "г. Тверь, Старицкое шоссе, 21к2",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Тверь, п. Элеватор, пер. 3-й, д. 6, стр. 1",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    "vyshny volochek": [
      {
        company: "ПЭК",
        address: "г. Вышний Волочек, ул. Осташковская, 6",
        deliveryTime: {
          minDays: 13,
        },
      },
    ],
    kimry: [
      {
        company: "Деловые Линии",
        address: "г. Кимры, ул. Дмитрия Баслыка, д. 4, лит. Д",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  tomsk: {
    tomsk: [
      {
        company: "ПЭК",
        address: "г. Томск, Пролетарская улица, 38 В",
        deliveryTime: {
          minDays: 3,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Томск, ул. Профсоюзная, д. 2/47, стр. 1",
        deliveryTime: {
          minDays: 5,
        },
      },
    ],
  },
  tula: {
    tula: [
      {
        company: "ПЭК",
        address: "г. Тула, ул. Чмутова, 158 В",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "р-н Ленинский, д. Нижнее Елькино, д. 77",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    novomoskovsk: [
      {
        company: "ПЭК",
        address: "г. Новомосковск, Узловский проезд, 3",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Новомосковск, ул. Первомайская, д. 83 Б",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  tyumen: {
    tyumen: [
      {
        company: "ПЭК",
        address: "г. Тюмень, ул. Одесская, 1с79",
        deliveryTime: {
          minDays: 6,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Тюмень, км 11-й Ялуторовский тракт, д. 5, стр. 5",
        deliveryTime: {
          minDays: 5,
        },
      },
    ],
  },
  izhevsk: {
    izhevsk: [
      {
        company: "ПЭК",
        address: "г. Ижевск, ул. Новоажимова, 25",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Ижевск, ул. Новоажимова, стр. 27",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
  },
  ulyanovsk: {
    ulyanovsk: [
      {
        company: "ПЭК",
        address: "г. Ульяновск, ул. Герасимова, 10 Н",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Ульяновск, ш. Московское, зд. 12Б",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  khabarovsk: {
    khabarovsk: [
      {
        company: "ПЭК",
        address: "г. Хабаровск, Тихоокеанская улица, 73Г/2",
        deliveryTime: {
          minDays: 17,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Хабаровск, ул. Целинная, д. 8В",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
    "komsomolsk-na-amure": [
      {
        company: "ПЭК",
        address: "г. Комсомольск-на-Амуре, Красная улица, 4с2",
        deliveryTime: {
          minDays: 14,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Комсомольск-на-Амуре, ш. Северное, д. 3",
        deliveryTime: {
          minDays: 10,
        },
      },
    ],
  },
  surgut: {
    surgut: [
      {
        company: "ПЭК",
        address: "г. Сургут, Инженерная улица, 8/3",
        deliveryTime: {
          minDays: 14,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Сургут, ул. Сосновая, д. 43, корп. 2",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    nizhnevartovsk: [
      {
        company: "ПЭК",
        address: "г. Нижневартовск, Индустриальная улица, 38",
        deliveryTime: {
          minDays: 15,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Нижневартовск, ул. Кузоваткина, д. 5/7",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    nefteyugansk: [
      {
        company: "ПЭК",
        address: "г. Нефтеюганск, Пионерная промзона, Проезд 5П, стр. 17А",
        deliveryTime: {
          minDays: 19,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Нефтеюганск, ул. Сургутская, д. 1/20",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  chelyabinsk: {
    chelyabinsk: [
      {
        company: "ПЭК",
        address: "г. Челябинск, ул. Северный Луч, 1 А.",
        deliveryTime: {
          minDays: 7,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Челябинск, ул. Черкасская, д. 9",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
    magnitogorsk: [
      {
        company: "ПЭК",
        address: "г. Магнитогорск, ул. Энергетиков, 2к1",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address:
          "г. Магнитогорск, ул. 1-ая Северо-западная, д. 10, стр. 3, пом. 1",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    miass: [
      {
        company: "ПЭК",
        address: "г. Миасс, ул. Хлебозаводская, 1А/2",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Миасс, ул. Объездная дорога, д. 6, корп. 11",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
    zlatoust: [
      {
        company: "Деловые Линии",
        address: "г. Златоуст, ул. имени И. В. Панфилова, д. 4А, стр. 1",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
  },
  grozny: {
    grozny: [
      {
        company: "ПЭК",
        address: "г. Грозный, Краснофлотская улица, 7",
        deliveryTime: {
          minDays: 12,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Грозный, ул. Гидратная, д. 1/1",
        deliveryTime: {
          minDays: 12,
        },
      },
    ],
  },
  cheboksary: {
    cheboksary: [
      {
        company: "ПЭК",
        address: "г. Чебоксары, проспект Тракторостроителей, 109 А",
        deliveryTime: {
          minDays: 8,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Чебоксары, проезд Лапсарский, д. 2, лит. А, пом. 1",
        deliveryTime: {
          minDays: 7,
        },
      },
    ],
    novocheboksarsk: [
      {
        company: "Деловые Линии",
        address: "г. Новочебоксарск, ул. Промышленная, д 40 А",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
  yaroslavl: {
    yaroslavl: [
      {
        company: "ПЭК",
        address: "г. Ярославль, ул. Базовая, 2",
        deliveryTime: {
          minDays: 9,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Ярославль, ул. Промышленная, д. 18, корп. Е",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
    rybinsk: [
      {
        company: "ПЭК",
        address: "г. Рыбинск, Ярославский тракт, 52",
        deliveryTime: {
          minDays: 12,
        },
      },
      {
        company: "Деловые Линии",
        address: "г. Рыбинск, тракт Ярославский, д. 41 А",
        deliveryTime: {
          minDays: 8,
        },
      },
    ],
  },
  "gorno-altaysk": {
    "gorno-altaysk": [
      {
        company: "Деловые Линии",
        address: "г. Горно-Алтайск, ул. Ленина, д 220",
        deliveryTime: {
          minDays: 6,
        },
      },
    ],
  },
  kyzyl: {
    kyzyl: [
      {
        company: "Деловые Линии",
        address: "г. Кызыл, ул. Калинина, зд. 134",
        deliveryTime: {
          minDays: 9,
        },
      },
    ],
  },
};
