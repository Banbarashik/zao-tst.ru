import type { RegionSlug } from "./regions.generated";
export interface RegionGeoData {
  cityName: string;
  regionName: string;
  latitude: number;
  longitude: number;
}
/**
 * Географическая привязка региональных страниц.
 *
 * Ключ — canonical slug страницы /regions/[region].
 * Координаты указывают на административный центр, который выводится в h1.
 * Типизация через RegionSlug заставит TypeScript сообщить об отсутствующей записи,
 * если после регенерации появится новая региональная страница.
 */
export const REGION_GEO = {
  "barnaul": {
    cityName: "Барнаул",
    regionName: "Алтайский край",
    latitude: 53.3479968,
    longitude: 83.7798064,
  },
  "blagoveshchensk": {
    cityName: "Благовещенск",
    regionName: "Амурская область",
    latitude: 50.290659,
    longitude: 127.527198,
  },
  "arkhangelsk": {
    cityName: "Архангельск",
    regionName: "Архангельская область",
    latitude: 64.5394289,
    longitude: 40.5169606,
  },
  "belgorod": {
    cityName: "Белгород",
    regionName: "Белгородская область",
    latitude: 50.5976472,
    longitude: 36.5856652,
  },
  "bryansk": {
    cityName: "Брянск",
    regionName: "Брянская область",
    latitude: 53.2419535,
    longitude: 34.3652146,
  },
  "vladimir": {
    cityName: "Владимир",
    regionName: "Владимирская область",
    latitude: 56.1280804,
    longitude: 40.4084376,
  },
  "volgograd": {
    cityName: "Волгоград",
    regionName: "Волгоградская область",
    latitude: 48.7070042,
    longitude: 44.5170339,
  },
  "vologda": {
    cityName: "Вологда",
    regionName: "Вологодская область",
    latitude: 59.2483905,
    longitude: 39.8355662,
  },
  "voronezh": {
    cityName: "Воронеж",
    regionName: "Воронежская область",
    latitude: 51.6593332,
    longitude: 39.1969229,
  },
  "donetsk": {
    cityName: "Донецк",
    regionName: "Донецкая Народная Республика",
    latitude: 48.02299832104887,
    longitude: 37.80223846435547,
  },
  "chita": {
    cityName: "Чита",
    regionName: "Забайкальский край",
    latitude: 52.0340142,
    longitude: 113.4994,
  },
  "ivanovo": {
    cityName: "Иваново",
    regionName: "Ивановская область",
    latitude: 56.9993792,
    longitude: 40.9728272,
  },
  "irkutsk": {
    cityName: "Иркутск",
    regionName: "Иркутская область",
    latitude: 52.2864036,
    longitude: 104.2807466,
  },
  "nalchik": {
    cityName: "Нальчик",
    regionName: "Кабардино-Балкарская Республика",
    latitude: 43.4845464,
    longitude: 43.60713,
  },
  "kaliningrad": {
    cityName: "Калининград",
    regionName: "Калининградская область",
    latitude: 54.7074702,
    longitude: 20.5073241,
  },
  "kaluga": {
    cityName: "Калуга",
    regionName: "Калужская область",
    latitude: 54.5059848,
    longitude: 36.2516245,
  },
  "cherkessk": {
    cityName: "Черкесск",
    regionName: "Карачаево-Черкесская Республика",
    latitude: 44.2269425,
    longitude: 42.0466704,
  },
  "kemerovo": {
    cityName: "Кемерово",
    regionName: "Кемеровская область",
    latitude: 55.3910651,
    longitude: 86.0467781,
  },
  "kirov": {
    cityName: "Киров",
    regionName: "Кировская область",
    latitude: 58.6035264,
    longitude: 49.6679304,
  },
  "kostroma": {
    cityName: "Кострома",
    regionName: "Костромская область",
    latitude: 57.768,
    longitude: 40.927,
  },
  "krasnodar": {
    cityName: "Краснодар",
    regionName: "Краснодарский край",
    latitude: 45.0401604,
    longitude: 38.9759647,
  },
  "krasnoyarsk": {
    cityName: "Красноярск",
    regionName: "Красноярский край",
    latitude: 56.0093879,
    longitude: 92.8524806,
  },
  "simferopol": {
    cityName: "Симферополь",
    regionName: "Республика Крым",
    latitude: 44.9482948,
    longitude: 34.1001151,
  },
  "kurgan": {
    cityName: "Курган",
    regionName: "Курганская область",
    latitude: 55.4443883,
    longitude: 65.3161963,
  },
  "kursk": {
    cityName: "Курск",
    regionName: "Курская область",
    latitude: 51.7303637,
    longitude: 36.1925603,
  },
  "sankt-peterburg": {
    cityName: "Санкт-Петербург",
    regionName: "Ленинградская область",
    latitude: 59.9391313,
    longitude: 30.3159004,
  },
  "lipetsk": {
    cityName: "Липецк",
    regionName: "Липецкая область",
    latitude: 52.610249,
    longitude: 39.5947883,
  },
  "magadan": {
    cityName: "Магадан",
    regionName: "Магаданская область",
    latitude: 59.5681332,
    longitude: 150.8084956,
  },
  "melitopol": {
    cityName: "Мелитополь",
    regionName: "Запорожская область",
    latitude: 46.84735,
    longitude: 35.38196,
  },
  "moskovskaya-oblast": {
    cityName: "Москва",
    regionName: "Московская область",
    latitude: 55.7540471,
    longitude: 37.620405,
  },
  "murmansk": {
    cityName: "Мурманск",
    regionName: "Мурманская область",
    latitude: 69.007721,
    longitude: 33.0685865,
  },
  "nizhny-novgorod": {
    cityName: "Нижний Новгород",
    regionName: "Нижегородская область",
    latitude: 56.3240627,
    longitude: 44.0053913,
  },
  "veliky-novgorod": {
    cityName: "Великий Новгород",
    regionName: "Новгородская область",
    latitude: 58.5213846,
    longitude: 31.2755394,
  },
  "novosibirsk": {
    cityName: "Новосибирск",
    regionName: "Новосибирская область",
    latitude: 55.028191,
    longitude: 82.9211489,
  },
  "omsk": {
    cityName: "Омск",
    regionName: "Омская область",
    latitude: 54.9848566,
    longitude: 73.3674517,
  },
  "orenburg": {
    cityName: "Оренбург",
    regionName: "Оренбургская область",
    latitude: 51.7875092,
    longitude: 55.1018828,
  },
  "orel": {
    cityName: "Орёл",
    regionName: "Орловская область",
    latitude: 52.9671298,
    longitude: 36.0696427,
  },
  "penza": {
    cityName: "Пенза",
    regionName: "Пензенская область",
    latitude: 53.1753314,
    longitude: 45.0348625,
  },
  "perm": {
    cityName: "Пермь",
    regionName: "Пермский край",
    latitude: 58.0102583,
    longitude: 56.2342034,
  },
  "vladivostok": {
    cityName: "Владивосток",
    regionName: "Приморский край",
    latitude: 43.1164904,
    longitude: 131.8823937,
  },
  "pskov": {
    cityName: "Псков",
    regionName: "Псковская область",
    latitude: 57.8194415,
    longitude: 28.3317198,
  },
  "gorno-altaysk": {
    cityName: "Горно-Алтайск",
    regionName: "Республика Алтай",
    latitude: 51.9581028,
    longitude: 85.9603235,
  },
  "ufa": {
    cityName: "Уфа",
    regionName: "Республика Башкортостан",
    latitude: 54.734944,
    longitude: 55.9578468,
  },
  "ulan-ude": {
    cityName: "Улан-Удэ",
    regionName: "Республика Бурятия",
    latitude: 51.8335853,
    longitude: 107.5842223,
  },
  "petrozavodsk": {
    cityName: "Петрозаводск",
    regionName: "Республика Карелия",
    latitude: 61.7891264,
    longitude: 34.3596434,
  },
  "syktyvkar": {
    cityName: "Сыктывкар",
    regionName: "Республика Коми",
    latitude: 61.6686617,
    longitude: 50.8358151,
  },
  "yoshkar-ola": {
    cityName: "Йошкар-Ола",
    regionName: "Республика Марий Эл",
    latitude: 56.6343662,
    longitude: 47.8999706,
  },
  "saransk": {
    cityName: "Саранск",
    regionName: "Республика Мордовия",
    latitude: 54.1809332,
    longitude: 45.1862632,
  },
  "yakutsk": {
    cityName: "Якутск",
    regionName: "Республика Саха (Якутия)",
    latitude: 62.0281405,
    longitude: 129.7325887,
  },
  "kazan": {
    cityName: "Казань",
    regionName: "Республика Татарстан",
    latitude: 55.7943584,
    longitude: 49.1114975,
  },
  "kyzyl": {
    cityName: "Кызыл",
    regionName: "Республика Тыва",
    latitude: 51.7191047,
    longitude: 94.4376882,
  },
  "abakan": {
    cityName: "Абакан",
    regionName: "Республика Хакасия",
    latitude: 53.7223325,
    longitude: 91.4436721,
  },
  "rostov-na-donu": {
    cityName: "Ростов-на-Дону",
    regionName: "Ростовская область",
    latitude: 47.2224566,
    longitude: 39.718803,
  },
  "ryazan": {
    cityName: "Рязань",
    regionName: "Рязанская область",
    latitude: 54.6254445,
    longitude: 39.7358609,
  },
  "samara": {
    cityName: "Самара",
    regionName: "Самарская область",
    latitude: 53.1950306,
    longitude: 50.1069518,
  },
  "saratov": {
    cityName: "Саратов",
    regionName: "Саратовская область",
    latitude: 51.533557,
    longitude: 46.034257,
  },
  "yuzhno-sakhalinsk": {
    cityName: "Южно-Сахалинск",
    regionName: "Сахалинская область",
    latitude: 46.9591631,
    longitude: 142.737976,
  },
  "ekaterinburg": {
    cityName: "Екатеринбург",
    regionName: "Свердловская область",
    latitude: 56.8385216,
    longitude: 60.6054911,
  },
  "smolensk": {
    cityName: "Смоленск",
    regionName: "Смоленская область",
    latitude: 54.782635,
    longitude: 32.045251,
  },
  "stavropol": {
    cityName: "Ставрополь",
    regionName: "Ставропольский край",
    latitude: 45.044516,
    longitude: 41.9689655,
  },
  "tambov": {
    cityName: "Тамбов",
    regionName: "Тамбовская область",
    latitude: 52.7213154,
    longitude: 41.452264,
  },
  "tver": {
    cityName: "Тверь",
    regionName: "Тверская область",
    latitude: 56.8586059,
    longitude: 35.9116761,
  },
  "tomsk": {
    cityName: "Томск",
    regionName: "Томская область",
    latitude: 56.4845804,
    longitude: 84.9481582,
  },
  "tula": {
    cityName: "Тула",
    regionName: "Тульская область",
    latitude: 54.1920559,
    longitude: 37.6153842,
  },
  "tyumen": {
    cityName: "Тюмень",
    regionName: "Тюменская область",
    latitude: 57.1529744,
    longitude: 65.5344099,
  },
  "izhevsk": {
    cityName: "Ижевск",
    regionName: "Удмуртская Республика",
    latitude: 56.852738,
    longitude: 53.2114896,
  },
  "ulyanovsk": {
    cityName: "Ульяновск",
    regionName: "Ульяновская область",
    latitude: 54.3079415,
    longitude: 48.3748487,
  },
  "khabarovsk": {
    cityName: "Хабаровск",
    regionName: "Хабаровский край",
    latitude: 48.4647258,
    longitude: 135.0598942,
  },
  "surgut": {
    cityName: "Ханты-Мансийск",
    regionName: "ХМАО-Югра",
    latitude: 61.0023984,
    longitude: 69.0184798,
  },
  "chelyabinsk": {
    cityName: "Челябинск",
    regionName: "Челябинская область",
    latitude: 55.1602624,
    longitude: 61.4008078,
  },
  "grozny": {
    cityName: "Грозный",
    regionName: "Чеченская Республика",
    latitude: 43.3180145,
    longitude: 45.698291,
  },
  "cheboksary": {
    cityName: "Чебоксары",
    regionName: "Чувашская Республика",
    latitude: 56.1438298,
    longitude: 47.2489782,
  },
  "salekhard": {
    cityName: "Салехард",
    regionName: "Ямало-Ненецкий АО",
    latitude: 66.5492077,
    longitude: 66.6085318,
  },
  "yaroslavl": {
    cityName: "Ярославль",
    regionName: "Ярославская область",
    latitude: 57.6215477,
    longitude: 39.8977411,
  },
} satisfies Record<RegionSlug, RegionGeoData>;

export function getRegionGeo(regionSlug: RegionSlug): RegionGeoData {
  return REGION_GEO[regionSlug];
}
