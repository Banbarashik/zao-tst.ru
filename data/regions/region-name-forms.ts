import type { RegionSlug } from "./regions.generated";

export interface RegionNameForms {
  /** Куда? Например: «Кемеровскую область». */
  accusative: string;

  /** Где? Например: «Кемеровской области». */
  prepositional: string;

  /** Чего? Например: «Кемеровской области». */
  genitive: string;
}

export const REGION_NAME_FORMS = {
  "barnaul": {
    accusative: "Алтайский край",
    prepositional: "Алтайском крае",
    genitive: "Алтайского края",
  },
  "blagoveshchensk": {
    accusative: "Амурскую область",
    prepositional: "Амурской области",
    genitive: "Амурской области",
  },
  "arkhangelsk": {
    accusative: "Архангельскую область",
    prepositional: "Архангельской области",
    genitive: "Архангельской области",
  },
  "belgorod": {
    accusative: "Белгородскую область",
    prepositional: "Белгородской области",
    genitive: "Белгородской области",
  },
  "bryansk": {
    accusative: "Брянскую область",
    prepositional: "Брянской области",
    genitive: "Брянской области",
  },
  "vladimir": {
    accusative: "Владимирскую область",
    prepositional: "Владимирской области",
    genitive: "Владимирской области",
  },
  "volgograd": {
    accusative: "Волгоградскую область",
    prepositional: "Волгоградской области",
    genitive: "Волгоградской области",
  },
  "vologda": {
    accusative: "Вологодскую область",
    prepositional: "Вологодской области",
    genitive: "Вологодской области",
  },
  "voronezh": {
    accusative: "Воронежскую область",
    prepositional: "Воронежской области",
    genitive: "Воронежской области",
  },
  "chita": {
    accusative: "Забайкальский край",
    prepositional: "Забайкальском крае",
    genitive: "Забайкальского края",
  },
  "ivanovo": {
    accusative: "Ивановскую область",
    prepositional: "Ивановской области",
    genitive: "Ивановской области",
  },
  "irkutsk": {
    accusative: "Иркутскую область",
    prepositional: "Иркутской области",
    genitive: "Иркутской области",
  },
  "nalchik": {
    accusative: "Кабардино-Балкарскую Республику",
    prepositional: "Кабардино-Балкарской Республике",
    genitive: "Кабардино-Балкарской Республики",
  },
  "kaluga": {
    accusative: "Калужскую область",
    prepositional: "Калужской области",
    genitive: "Калужской области",
  },
  "cherkessk": {
    accusative: "Карачаево-Черкесскую Республику",
    prepositional: "Карачаево-Черкесской Республике",
    genitive: "Карачаево-Черкесской Республики",
  },
  "kemerovo": {
    accusative: "Кемеровскую область",
    prepositional: "Кемеровской области",
    genitive: "Кемеровской области",
  },
  "kirov": {
    accusative: "Кировскую область",
    prepositional: "Кировской области",
    genitive: "Кировской области",
  },
  "kostroma": {
    accusative: "Костромскую область",
    prepositional: "Костромской области",
    genitive: "Костромской области",
  },
  "krasnodar": {
    accusative: "Краснодарский край",
    prepositional: "Краснодарском крае",
    genitive: "Краснодарского края",
  },
  "krasnoyarsk": {
    accusative: "Красноярский край",
    prepositional: "Красноярском крае",
    genitive: "Красноярского края",
  },
  "kurgan": {
    accusative: "Курганскую область",
    prepositional: "Курганской области",
    genitive: "Курганской области",
  },
  "kursk": {
    accusative: "Курскую область",
    prepositional: "Курской области",
    genitive: "Курской области",
  },
  "sankt-peterburg": {
    accusative: "Ленинградскую область",
    prepositional: "Ленинградской области",
    genitive: "Ленинградской области",
  },
  "lipetsk": {
    accusative: "Липецкую область",
    prepositional: "Липецкой области",
    genitive: "Липецкой области",
  },
  "magadan": {
    accusative: "Магаданскую область",
    prepositional: "Магаданской области",
    genitive: "Магаданской области",
  },
  "moskva": {
    accusative: "Москву",
    prepositional: "Москве",
    genitive: "Москвы",
  },
  "moskovskaya-oblast": {
    accusative: "Московскую область",
    prepositional: "Московской области",
    genitive: "Московской области",
  },
  "murmansk": {
    accusative: "Мурманскую область",
    prepositional: "Мурманской области",
    genitive: "Мурманской области",
  },
  "nizhny-novgorod": {
    accusative: "Нижегородскую область",
    prepositional: "Нижегородской области",
    genitive: "Нижегородской области",
  },
  "veliky-novgorod": {
    accusative: "Новгородскую область",
    prepositional: "Новгородской области",
    genitive: "Новгородской области",
  },
  "novosibirsk": {
    accusative: "Новосибирскую область",
    prepositional: "Новосибирской области",
    genitive: "Новосибирской области",
  },
  "omsk": {
    accusative: "Омскую область",
    prepositional: "Омской области",
    genitive: "Омской области",
  },
  "orenburg": {
    accusative: "Оренбургскую область",
    prepositional: "Оренбургской области",
    genitive: "Оренбургской области",
  },
  "orel": {
    accusative: "Орловскую область",
    prepositional: "Орловской области",
    genitive: "Орловской области",
  },
  "penza": {
    accusative: "Пензенскую область",
    prepositional: "Пензенской области",
    genitive: "Пензенской области",
  },
  "perm": {
    accusative: "Пермский край",
    prepositional: "Пермском крае",
    genitive: "Пермского края",
  },
  "vladivostok": {
    accusative: "Приморский край",
    prepositional: "Приморском крае",
    genitive: "Приморского края",
  },
  "pskov": {
    accusative: "Псковскую область",
    prepositional: "Псковской области",
    genitive: "Псковской области",
  },
  "gorno-altaysk": {
    accusative: "Республику Алтай",
    prepositional: "Республике Алтай",
    genitive: "Республики Алтай",
  },
  "ufa": {
    accusative: "Республику Башкортостан",
    prepositional: "Республике Башкортостан",
    genitive: "Республики Башкортостан",
  },
  "ulan-ude": {
    accusative: "Республику Бурятия",
    prepositional: "Республике Бурятия",
    genitive: "Республики Бурятия",
  },
  "petrozavodsk": {
    accusative: "Республику Карелия",
    prepositional: "Республике Карелия",
    genitive: "Республики Карелия",
  },
  "syktyvkar": {
    accusative: "Республику Коми",
    prepositional: "Республике Коми",
    genitive: "Республики Коми",
  },
  "yoshkar-ola": {
    accusative: "Республику Марий Эл",
    prepositional: "Республике Марий Эл",
    genitive: "Республики Марий Эл",
  },
  "saransk": {
    accusative: "Республику Мордовия",
    prepositional: "Республике Мордовия",
    genitive: "Республики Мордовия",
  },
  "yakutsk": {
    accusative: "Республику Саха (Якутия)",
    prepositional: "Республике Саха (Якутия)",
    genitive: "Республики Саха (Якутия)",
  },
  "kazan": {
    accusative: "Республику Татарстан",
    prepositional: "Республике Татарстан",
    genitive: "Республики Татарстан",
  },
  "kyzyl": {
    accusative: "Республику Тыва",
    prepositional: "Республике Тыва",
    genitive: "Республики Тыва",
  },
  "abakan": {
    accusative: "Республику Хакасия",
    prepositional: "Республике Хакасия",
    genitive: "Республики Хакасия",
  },
  "rostov-na-donu": {
    accusative: "Ростовскую область",
    prepositional: "Ростовской области",
    genitive: "Ростовской области",
  },
  "ryazan": {
    accusative: "Рязанскую область",
    prepositional: "Рязанской области",
    genitive: "Рязанской области",
  },
  "samara": {
    accusative: "Самарскую область",
    prepositional: "Самарской области",
    genitive: "Самарской области",
  },
  "saratov": {
    accusative: "Саратовскую область",
    prepositional: "Саратовской области",
    genitive: "Саратовской области",
  },
  "yuzhno-sakhalinsk": {
    accusative: "Сахалинскую область",
    prepositional: "Сахалинской области",
    genitive: "Сахалинской области",
  },
  "ekaterinburg": {
    accusative: "Свердловскую область",
    prepositional: "Свердловской области",
    genitive: "Свердловской области",
  },
  "smolensk": {
    accusative: "Смоленскую область",
    prepositional: "Смоленской области",
    genitive: "Смоленской области",
  },
  "stavropol": {
    accusative: "Ставропольский край",
    prepositional: "Ставропольском крае",
    genitive: "Ставропольского края",
  },
  "tambov": {
    accusative: "Тамбовскую область",
    prepositional: "Тамбовской области",
    genitive: "Тамбовской области",
  },
  "tver": {
    accusative: "Тверскую область",
    prepositional: "Тверской области",
    genitive: "Тверской области",
  },
  "tomsk": {
    accusative: "Томскую область",
    prepositional: "Томской области",
    genitive: "Томской области",
  },
  "tula": {
    accusative: "Тульскую область",
    prepositional: "Тульской области",
    genitive: "Тульской области",
  },
  "tyumen": {
    accusative: "Тюменскую область",
    prepositional: "Тюменской области",
    genitive: "Тюменской области",
  },
  "izhevsk": {
    accusative: "Удмуртскую Республику",
    prepositional: "Удмуртской Республике",
    genitive: "Удмуртской Республики",
  },
  "ulyanovsk": {
    accusative: "Ульяновскую область",
    prepositional: "Ульяновской области",
    genitive: "Ульяновской области",
  },
  "khabarovsk": {
    accusative: "Хабаровский край",
    prepositional: "Хабаровском крае",
    genitive: "Хабаровского края",
  },
  "surgut": {
    accusative: "ХМАО-Югру",
    prepositional: "ХМАО-Югре",
    genitive: "ХМАО-Югры",
  },
  "chelyabinsk": {
    accusative: "Челябинскую область",
    prepositional: "Челябинской области",
    genitive: "Челябинской области",
  },
  "grozny": {
    accusative: "Чеченскую Республику",
    prepositional: "Чеченской Республике",
    genitive: "Чеченской Республики",
  },
  "cheboksary": {
    accusative: "Чувашскую Республику",
    prepositional: "Чувашской Республике",
    genitive: "Чувашской Республики",
  },
  "salekhard": {
    accusative: "Ямало-Ненецкий АО",
    prepositional: "Ямало-Ненецком АО",
    genitive: "Ямало-Ненецкого АО",
  },
  "yaroslavl": {
    accusative: "Ярославскую область",
    prepositional: "Ярославской области",
    genitive: "Ярославской области",
  },
} satisfies Partial<Record<RegionSlug, RegionNameForms>>;

export function getRegionNameForms(
  regionSlug: RegionSlug,
): RegionNameForms | null {
  const forms: Partial<Record<RegionSlug, RegionNameForms>> = REGION_NAME_FORMS;

  return forms[regionSlug] ?? null;
}
