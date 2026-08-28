import type { RegionSlug } from "./regions.generated";

export interface RegionNameForms {
  /** Куда? Например: «Кемеровскую область». */
  accusative: string;

  /** Где? Например: «Кемеровской области». */
  prepositional: string;
}

export const REGION_NAME_FORMS = {
  "barnaul": {
    accusative: "Алтайский край",
    prepositional: "Алтайском крае",
  },
  "blagoveshchensk": {
    accusative: "Амурскую область",
    prepositional: "Амурской области",
  },
  "arkhangelsk": {
    accusative: "Архангельскую область",
    prepositional: "Архангельской области",
  },
  "belgorod": {
    accusative: "Белгородскую область",
    prepositional: "Белгородской области",
  },
  "bryansk": {
    accusative: "Брянскую область",
    prepositional: "Брянской области",
  },
  "vladimir": {
    accusative: "Владимирскую область",
    prepositional: "Владимирской области",
  },
  "volgograd": {
    accusative: "Волгоградскую область",
    prepositional: "Волгоградской области",
  },
  "vologda": {
    accusative: "Вологодскую область",
    prepositional: "Вологодской области",
  },
  "voronezh": {
    accusative: "Воронежскую область",
    prepositional: "Воронежской области",
  },
  "chita": {
    accusative: "Забайкальский край",
    prepositional: "Забайкальском крае",
  },
  "ivanovo": {
    accusative: "Ивановскую область",
    prepositional: "Ивановской области",
  },
  "irkutsk": {
    accusative: "Иркутскую область",
    prepositional: "Иркутской области",
  },
  "nalchik": {
    accusative: "Кабардино-Балкарскую Республику",
    prepositional: "Кабардино-Балкарской Республике",
  },
  "kaluga": {
    accusative: "Калужскую область",
    prepositional: "Калужской области",
  },
  "cherkessk": {
    accusative: "Карачаево-Черкесскую Республику",
    prepositional: "Карачаево-Черкесской Республике",
  },
  "kemerovo": {
    accusative: "Кемеровскую область",
    prepositional: "Кемеровской области",
  },
  "kirov": {
    accusative: "Кировскую область",
    prepositional: "Кировской области",
  },
  "kostroma": {
    accusative: "Костромскую область",
    prepositional: "Костромской области",
  },
  "krasnodar": {
    accusative: "Краснодарский край",
    prepositional: "Краснодарском крае",
  },
  "krasnoyarsk": {
    accusative: "Красноярский край",
    prepositional: "Красноярском крае",
  },
  "kurgan": {
    accusative: "Курганскую область",
    prepositional: "Курганской области",
  },
  "kursk": {
    accusative: "Курскую область",
    prepositional: "Курской области",
  },
  "sankt-peterburg": {
    accusative: "Ленинградскую область",
    prepositional: "Ленинградской области",
  },
  "lipetsk": {
    accusative: "Липецкую область",
    prepositional: "Липецкой области",
  },
  "magadan": {
    accusative: "Магаданскую область",
    prepositional: "Магаданской области",
  },
  "moskva": {
    accusative: "Москву",
    prepositional: "Москве",
  },
  "moskovskaya-oblast": {
    accusative: "Московскую область",
    prepositional: "Московской области",
  },
  "murmansk": {
    accusative: "Мурманскую область",
    prepositional: "Мурманской области",
  },
  "nizhny-novgorod": {
    accusative: "Нижегородскую область",
    prepositional: "Нижегородской области",
  },
  "veliky-novgorod": {
    accusative: "Новгородскую область",
    prepositional: "Новгородской области",
  },
  "novosibirsk": {
    accusative: "Новосибирскую область",
    prepositional: "Новосибирской области",
  },
  "omsk": {
    accusative: "Омскую область",
    prepositional: "Омской области",
  },
  "orenburg": {
    accusative: "Оренбургскую область",
    prepositional: "Оренбургской области",
  },
  "orel": {
    accusative: "Орловскую область",
    prepositional: "Орловской области",
  },
  "penza": {
    accusative: "Пензенскую область",
    prepositional: "Пензенской области",
  },
  "perm": {
    accusative: "Пермский край",
    prepositional: "Пермском крае",
  },
  "vladivostok": {
    accusative: "Приморский край",
    prepositional: "Приморском крае",
  },
  "pskov": {
    accusative: "Псковскую область",
    prepositional: "Псковской области",
  },
  "gorno-altaysk": {
    accusative: "Республику Алтай",
    prepositional: "Республике Алтай",
  },
  "ufa": {
    accusative: "Республику Башкортостан",
    prepositional: "Республике Башкортостан",
  },
  "ulan-ude": {
    accusative: "Республику Бурятия",
    prepositional: "Республике Бурятия",
  },
  "petrozavodsk": {
    accusative: "Республику Карелия",
    prepositional: "Республике Карелия",
  },
  "syktyvkar": {
    accusative: "Республику Коми",
    prepositional: "Республике Коми",
  },
  "yoshkar-ola": {
    accusative: "Республику Марий Эл",
    prepositional: "Республике Марий Эл",
  },
  "saransk": {
    accusative: "Республику Мордовия",
    prepositional: "Республике Мордовия",
  },
  "yakutsk": {
    accusative: "Республику Саха (Якутия)",
    prepositional: "Республике Саха (Якутия)",
  },
  "kazan": {
    accusative: "Республику Татарстан",
    prepositional: "Республике Татарстан",
  },
  "kyzyl": {
    accusative: "Республику Тыва",
    prepositional: "Республике Тыва",
  },
  "abakan": {
    accusative: "Республику Хакасия",
    prepositional: "Республике Хакасия",
  },
  "rostov-na-donu": {
    accusative: "Ростовскую область",
    prepositional: "Ростовской области",
  },
  "ryazan": {
    accusative: "Рязанскую область",
    prepositional: "Рязанской области",
  },
  "samara": {
    accusative: "Самарскую область",
    prepositional: "Самарской области",
  },
  "saratov": {
    accusative: "Саратовскую область",
    prepositional: "Саратовской области",
  },
  "yuzhno-sakhalinsk": {
    accusative: "Сахалинскую область",
    prepositional: "Сахалинской области",
  },
  "ekaterinburg": {
    accusative: "Свердловскую область",
    prepositional: "Свердловской области",
  },
  "smolensk": {
    accusative: "Смоленскую область",
    prepositional: "Смоленской области",
  },
  "stavropol": {
    accusative: "Ставропольский край",
    prepositional: "Ставропольском крае",
  },
  "tambov": {
    accusative: "Тамбовскую область",
    prepositional: "Тамбовской области",
  },
  "tver": {
    accusative: "Тверскую область",
    prepositional: "Тверской области",
  },
  "tomsk": {
    accusative: "Томскую область",
    prepositional: "Томской области",
  },
  "tula": {
    accusative: "Тульскую область",
    prepositional: "Тульской области",
  },
  "tyumen": {
    accusative: "Тюменскую область",
    prepositional: "Тюменской области",
  },
  "izhevsk": {
    accusative: "Удмуртскую Республику",
    prepositional: "Удмуртской Республике",
  },
  "ulyanovsk": {
    accusative: "Ульяновскую область",
    prepositional: "Ульяновской области",
  },
  "khabarovsk": {
    accusative: "Хабаровский край",
    prepositional: "Хабаровском крае",
  },
  "surgut": {
    accusative: "ХМАО-Югру",
    prepositional: "ХМАО-Югре",
  },
  "chelyabinsk": {
    accusative: "Челябинскую область",
    prepositional: "Челябинской области",
  },
  "grozny": {
    accusative: "Чеченскую Республику",
    prepositional: "Чеченской Республике",
  },
  "cheboksary": {
    accusative: "Чувашскую Республику",
    prepositional: "Чувашской Республике",
  },
  "salekhard": {
    accusative: "Ямало-Ненецкий АО",
    prepositional: "Ямало-Ненецком АО",
  },
  "yaroslavl": {
    accusative: "Ярославскую область",
    prepositional: "Ярославской области",
  },
} satisfies Partial<Record<RegionSlug, RegionNameForms>>;

export function getRegionNameForms(
  regionSlug: RegionSlug,
): RegionNameForms | null {
  const forms: Partial<Record<RegionSlug, RegionNameForms>> = REGION_NAME_FORMS;

  return forms[regionSlug] ?? null;
}
