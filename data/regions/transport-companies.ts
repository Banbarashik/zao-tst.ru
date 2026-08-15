import type { TransportTerminals } from "./types";

/**
 * Транспортные терминалы из source/regions.docx.
 *
 * Первый адрес в DOCX — ПЭК, второй — Деловые Линии.
 * В данные попадают только столица региона и города-анкоры (4+ поставок)
 * и только когда для нужного города удалось уверенно определить оба адреса.
 *
 * Первый ключ — slug страницы региона (/regions/[region]).
 * Второй ключ — slug населённого пункта.
 */
export const TRANSPORT_TERMINALS: Record<string, TransportTerminals> = {
  "barnaul": {
    "barnaul": [
      {
        "company": "ПЭК",
        "address": "Россия, Алтайский край, Барнаул, улица Чернышевского, 293А",
        "deliveryTime": {
          "minDays": 3
        }
      },
      {
        "company": "Деловые Линии",
        "address": "край Алтайский, г Барнаул, тракт Павловский, зд 200М",
        "deliveryTime": {
          "minDays": 3
        }
      }
    ],
    "biysk": [
      {
        "company": "ПЭК",
        "address": "659328, Алтайский край, г. Бийск, ул. Василия Шадрина, д. 62/1",
        "deliveryTime": {
          "minDays": 4
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Бийск, ул имени Героя Советского Союза Васильева, д 85",
        "deliveryTime": {
          "minDays": 3
        }
      }
    ]
  },
  "blagoveschensk": {
    "blagoveschensk": [
      {
        "company": "ПЭК",
        "address": "Россия, Амурская область, Благовещенск, улица Калинина, 126",
        "deliveryTime": {
          "minDays": 12
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Амурская, г Благовещенск, ул Театральная, д 251",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "arhangelsk": {
    "arhangelsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Архангельск, Талажское шоссе, 4с1",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Архангельская, г Архангельск, проезд Первый (Кузнечихинский промузел), д 7",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "belgorod": {
    "belgorod": [
      {
        "company": "ПЭК",
        "address": "Россия. г.Белгород, ул. Корочанская, 85А",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Белгородская, г Белгород, ул Коммунальная, зд 18",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "bryansk": {
    "bryansk": [
      {
        "company": "ПЭК",
        "address": "Россия, Брянск, улица Марии Расковой, 25",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Брянская, г Брянск, ул Бурова, д 20/18",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "vladimir": {
    "vladimir": [
      {
        "company": "ПЭК",
        "address": "Россия, Владимир, улица Гастелло, 8",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Владимирская, г Владимир, ул Ноябрьская, д 131",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "volgograd": {
    "volgograd": [
      {
        "company": "ПЭК",
        "address": "Россия, Волгоград, улица Землячки, 16",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Волгоградская, г Волгоград, ул Моторная, д 9Г",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "vologda": {
    "vologda": [
      {
        "company": "ПЭК",
        "address": "Россия, Вологда, улица Ильюшина, 9Б",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Вологодская, г Вологда, ул Северная, д 27Б",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ],
    "cherepovets": [
      {
        "company": "ПЭК",
        "address": "Россия, Вологодская область, Череповец, улица Красная, 4Г",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Вологодская, г Череповец, ул Промышленная, д 7, стр 4",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "voronezh": {
    "voronezh": [
      {
        "company": "ПЭК",
        "address": "Россия, Воронеж, улица Остужева, 58",
        "deliveryTime": {
          "minDays": 11
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Воронежская, г Воронеж, ул Брусилова, д 4Б",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "chita": {
    "chita": [
      {
        "company": "ПЭК",
        "address": "Россия Забайкальский край, г. Чита, ул. Ковыльная д. 27, стр. 7",
        "deliveryTime": {
          "minDays": 11
        }
      },
      {
        "company": "Деловые Линии",
        "address": "край Забайкальский, г Чита, ул Сухая Падь, д 3, стр 1, пом 1",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "ivanovo": {
    "ivanovo": [
      {
        "company": "ПЭК",
        "address": "Россия, Иваново, улица Парижской Коммуны, 84",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Ивановская, р-н Ивановский, д Игнатово, ул Аэропортовская, д 12",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "irkutsk": {
    "irkutsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Иркутск, улица Новаторов, 1",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Иркутская, г Иркутск, ул Генерала Доватора, д 25, пом 3",
        "deliveryTime": {
          "minDays": 6
        }
      }
    ],
    "angarsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Иркутская область, Ангарск, 215-й квартал, 16",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Иркутская, г Ангарск, кв-л 215, стр 1",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "nalchik": {
    "nalchik": [
      {
        "company": "ПЭК",
        "address": "Россия, Кабардино-Балкарская Республика, Нальчик, Кузнечный переулок, 5",
        "deliveryTime": {
          "minDays": 11
        }
      },
      {
        "company": "Деловые Линии",
        "address": "респ Кабардино-Балкарская, г Нальчик, ул Комарова, д 163",
        "deliveryTime": {
          "minDays": 11
        }
      }
    ]
  },
  "kaluga": {
    "kaluga": [
      {
        "company": "ПЭК",
        "address": "Россия, Калуга, Параллельная улица, 11с22",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Калужская, г Калуга, ш Грабцевское, д 107",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "kemerovo": {
    "kemerovo": [
      {
        "company": "ПЭК",
        "address": "Россия, Кемерово, Кузнецкий проспект, 91",
        "deliveryTime": {
          "minDays": 3
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Кемеровская область - Кузбасс, г Кемерово, ул Тухачевского, д 60",
        "deliveryTime": {
          "minDays": 6
        }
      }
    ],
    "leninsk-kuznetskiy": [
      {
        "company": "ПЭК",
        "address": "Кемеровская область – Кузбасс, г.Ленинск-Кузнецкий, ул.Ламповая, д. 6/2",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Кемеровская область - Кузбасс, р-н Ленинск-Кузнецкий, г Ленинск-Кузнецкий, ул Спасстанция, д 15, корп 18",
        "deliveryTime": {
          "minDays": 3
        }
      }
    ],
    "novokuznetsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Кемеровская область, Новокузнецк, улица Рудокопровая, 30А",
        "deliveryTime": {
          "minDays": 1
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Кемеровская область - Кузбасс, г Новокузнецк, ул Полесская, зд 15",
        "deliveryTime": {
          "minDays": 3
        }
      }
    ]
  },
  "kirov": {
    "kirov": [
      {
        "company": "ПЭК",
        "address": "Россия, Киров, Ленинский район, улица Щорса, 70А/5",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Кировская, г Киров, ул Дзержинского, д 81/3",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "kostroma": {
    "kostroma": [
      {
        "company": "ПЭК",
        "address": "156019, Костромская обл., г. Кострома,ул. Индустриальная, д. 81",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Костромская, г Кострома, ул Зеленая, д 1Б, стр 5",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "krasnodar": {
    "krasnodar": [
      {
        "company": "ПЭК",
        "address": "Россия, Краснодар, Ростовское шоссе, 26/1с2",
        "deliveryTime": {
          "minDays": 11
        }
      },
      {
        "company": "Деловые Линии",
        "address": "край Краснодарский, г Краснодар, ул им. Александра Покрышкина, д 2/12",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "krasnoyarsk": {
    "krasnoyarsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Красноярский край, Емельяновский район, посёлок Солонцы, проспект Котельникова, 9Б",
        "deliveryTime": {
          "minDays": 6
        }
      },
      {
        "company": "Деловые Линии",
        "address": "край Красноярский, г Красноярск, ш Северное, д 17",
        "deliveryTime": {
          "minDays": 5
        }
      }
    ]
  },
  "kurgan": {
    "kurgan": [
      {
        "company": "ПЭК",
        "address": "Россия, Курган, Омская улица, 146",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Курганская, г Курган, ул Омская, д 146",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "kursk": {
    "kursk": [
      {
        "company": "ПЭК",
        "address": "Россия, Курск, Литовская улица, 2С",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Курская, г Курск, ул 50 лет Октября, зд 179",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "sankt-peterburg": {
    "sankt-peterburg": [
      {
        "company": "ПЭК",
        "address": "Россия, Санкт-Петербург, улица Якорная, 17, литер Ш",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "г Санкт-Петербург, ул Кубинская, д 75, лит Б, корп 2",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "lipetsk": {
    "lipetsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Липецк, улица Ангарская, 30",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Липецкая, г Липецк, проезд Промышленный, влд 1",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "magadan": {
    "magadan": [
      {
        "company": "ПЭК",
        "address": "город Магадан,улица Гагарина, дом 45А/1",
        "deliveryTime": {
          "minDays": 38
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Магаданская, г Магадан, ул Кожзаводская, зд 12Е",
        "deliveryTime": {
          "minDays": 58
        }
      }
    ]
  },
  "moskva": {
    "moskva": [
      {
        "company": "ПЭК",
        "address": "Россия, Москва, 2-я Мелитопольская улица, 12Ас1",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "г Москва, ул Подольских Курсантов, д 17, корп 2",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "murmansk": {
    "murmansk": [
      {
        "company": "ПЭК",
        "address": "183034, Мурманская обл., г. Мурманск,ул. Транспортная, д. 10.",
        "deliveryTime": {
          "minDays": 13
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Мурманская, г Мурманск, ул Промышленная, д 25",
        "deliveryTime": {
          "minDays": 11
        }
      }
    ]
  },
  "nizhniy-novgorod": {
    "nizhniy-novgorod": [
      {
        "company": "ПЭК",
        "address": "Россия, Нижний Новгород, улица Вторчермета, 1 к2",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Нижегородская, г Нижний Новгород, ул Геологов, д 2Е",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "velikiy-novgorod": {
    "velikiy-novgorod": [
      {
        "company": "ПЭК",
        "address": "Россия, Великий Новгород, Лужский район, Базовый переулок, 13",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Новгородская, г Великий Новгород, ул Нехинская, д 57",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "novosibirsk": {
    "novosibirsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Новосибирск, улица Большая, 280",
        "deliveryTime": {
          "minDays": 2
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Новосибирская, г Новосибирск, ул Петухова, д 73, корп 1",
        "deliveryTime": {
          "minDays": 4
        }
      }
    ]
  },
  "omsk": {
    "omsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Омск, Космический пр-т, 109 к1",
        "deliveryTime": {
          "minDays": 3
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Омская, г Омск, ул Омская, д 221",
        "deliveryTime": {
          "minDays": 4
        }
      }
    ]
  },
  "orenburg": {
    "orenburg": [
      {
        "company": "ПЭК",
        "address": "Россия, Оренбург, Шарлыкское шоссе, 12/1",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Оренбургская, г Оренбург, ш Загородное, д 3/7, лит Б8",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ],
    "orsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Оренбургская область, Орск, проспект Мира, 12Б",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Оренбургская, г Орск, ул Новотроицкое шоссе, зд 11",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "orel": {
    "orel": [
      {
        "company": "ПЭК",
        "address": "Россия, Орёл, улица Спивака, 74А",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Орловская, г Орёл, ул Колхозная, д 11, корп 4",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "penza": {
    "penza": [
      {
        "company": "ПЭК",
        "address": "Россия, Пенза, улица Измайлова, 13",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Пензенская, г Пенза, ул Совхозная, д 15, лит Л",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "perm": {
    "perm": [
      {
        "company": "ПЭК",
        "address": "Россия, Пермь,улица Космонавта Леонова, 86",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "край Пермский, г Пермь, ул Танкистов, д 50",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "vladivostok": {
    "vladivostok": [
      {
        "company": "ПЭК",
        "address": "Россия, Приморский край, Владивосток, Командорская улица, 11с11",
        "deliveryTime": {
          "minDays": 13
        }
      },
      {
        "company": "Деловые Линии",
        "address": "край Приморский, г Владивосток, ул Посадская, д 20",
        "deliveryTime": {
          "minDays": 13
        }
      }
    ]
  },
  "pskov": {
    "pskov": [
      {
        "company": "ПЭК",
        "address": "Россия, Псков, улица Леона Поземского, 110Д",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Псковская, г Псков, ш Зональное, д 26А, пом 2002",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "ufa": {
    "ufa": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Башкортостан, Уфа, Сельская Богородская улица, 57/1",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Башкортостан, г Уфа, ул Трамвайная, д 2/5",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "ulan-ude": {
    "ulan-ude": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Бурятия, Улан-Удэ, улица Ботаническая, 38 к2",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Бурятия, г Улан-Удэ, км 502, д 160",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "petrozavodsk": {
    "petrozavodsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Карелия, Петрозаводск, улица Зайцева, 65с4",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Карелия, г Петрозаводск, ул Коммунистов, д 50",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "syktyvkar": {
    "syktyvkar": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Коми, Сыктывкар, Лесопарковая улица, 21/3",
        "deliveryTime": {
          "minDays": 11
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Коми, г Сыктывкар, ш Сысольское, д 33",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "yoshkar-ola": {
    "yoshkar-ola": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Марий Эл, Йошкар-Ола, улица Строителей, 99Б",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Марий Эл, г Йошкар-Ола, ул Машиностроителей, д 109/8",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "saransk": {
    "saransk": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Мордовия, Саранск, Строительная улица, 18Ас2",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Мордовия, г Саранск, ул Строительная, д 32Б, стр 1",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "yakutsk": {
    "yakutsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Саха (Якутия), г. Якутск, ул. Автодорожная, д. 38/34Б",
        "deliveryTime": {
          "minDays": 27
        }
      },
      {
        "company": "Деловые Линии",
        "address": "респ Саха (Якутия), г Якутск, ул Бабушкина, д 9М, стр 1",
        "deliveryTime": {
          "minDays": 22
        }
      }
    ]
  },
  "kazan": {
    "kazan": [
      {
        "company": "ПЭК",
        "address": "420127, Республика Татарстан, г. Казань, ул. Михаила Миля, д. 53",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "респ Татарстан, г Казань, ул Аделя Кутуя, д 151",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ],
    "naberezhnye-chelny": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Татарстан, Набережные Челны, Хлебный проезд, 28",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Татарстан, г Набережные Челны, проезд Хлебный, зд 22Г",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "abakan": {
    "abakan": [
      {
        "company": "ПЭК",
        "address": "Россия, Республика Хакасия, Абакан, Хлебная улица, 30",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Хакасия, г Абакан, ул Заводская, д 1, стр В",
        "deliveryTime": {
          "minDays": 6
        }
      }
    ]
  },
  "rostov-na-donu": {
    "rostov-na-donu": [
      {
        "company": "ПЭК",
        "address": "Россия, Ростов-на-Дону,проспект Стачки,д249",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Ростовская, г Ростов-на-Дону, ул Страны Советов, д 44Г",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ],
    "taganrog": [
      {
        "company": "ПЭК",
        "address": "Россия, Ростовская область, Таганрог, улица Пархоменко, 22А",
        "deliveryTime": {
          "minDays": 10
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Ростовская, г Таганрог, ул Николаевское Шоссе, д 34",
        "deliveryTime": {
          "minDays": 11
        }
      }
    ]
  },
  "ryazan": {
    "ryazan": [
      {
        "company": "ПЭК",
        "address": "Россия, Рязань, М-5 Урал, 195-й километр, 1Б",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Рязанская, г Рязань, км 185 (Окружная дорога), д 6А",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "samara": {
    "samara": [
      {
        "company": "ПЭК",
        "address": "443050, Самарская обл., г. Самара,ш. Смышляевское, д. 1А",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Самарская, г Самара, ул Демократическая, д 45, корп А",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ],
    "tolyatti": [
      {
        "company": "ПЭК",
        "address": "Россия, Самарская область, Тольятти, Базовая улица, 1с20",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Самарская, г Тольятти, ул Транспортная, д 22, стр 2",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "saratov": {
    "saratov": [
      {
        "company": "ПЭК",
        "address": "410000, Саратовская обл, Саратов, 1-й Сеченский пр-д, дом № 8, корпус 1.",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Саратовская, г Саратов, ул Автокомбинатовская, д 12/6",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "yuzhno-sahalinsk": {
    "yuzhno-sahalinsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Сахалинская область, Южно-Сахалинск, улица Ленина, 474А",
        "deliveryTime": {
          "minDays": 36
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Сахалинская, г Южно-Сахалинск, пр-кт Мира, д 2В/3А, стр 1",
        "deliveryTime": {
          "minDays": 43
        }
      }
    ]
  },
  "ekaterinburg": {
    "ekaterinburg": [
      {
        "company": "ПЭК",
        "address": "Россия, Свердловская область, Екатеринбург, Чистопольская улица, 6Е",
        "deliveryTime": {
          "minDays": 6
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Свердловская, г Екатеринбург, ул Таганская, стр 60",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "smolensk": {
    "smolensk": [
      {
        "company": "ПЭК",
        "address": "Россия, Смоленск, Старо-Комендантская улица, 2",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Смоленская, г Смоленск, ул Кашена, д 23",
        "deliveryTime": {
          "minDays": 9
        }
      }
    ]
  },
  "tambov": {
    "tambov": [
      {
        "company": "ПЭК",
        "address": "Россия, Тамбов, улица Кавалерийская, 13А",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Тамбовская, г Тамбов, проезд Энергетиков, д 30",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "tver": {
    "tver": [
      {
        "company": "ПЭК",
        "address": "Россия, Тверь, Старицкое шоссе, 21к2",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Тверская, г Тверь, п Элеватор, пер 3-й, д 6, стр 1",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "tomsk": {
    "tomsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Томск, микрорайон Черемошники, Пролетарская улица, 38В",
        "deliveryTime": {
          "minDays": 3
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Томская, г Томск, ул Профсоюзная, д 2/47, стр 1",
        "deliveryTime": {
          "minDays": 5
        }
      }
    ]
  },
  "tula": {
    "tula": [
      {
        "company": "ПЭК",
        "address": "Россия, Тула, улица Чмутова, 158В",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Тульская, р-н Ленинский, д Нижнее Елькино, д 77",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "tyumen": {
    "tyumen": [
      {
        "company": "ПЭК",
        "address": "Россия, Тюмень, Одесская улица, 1с79",
        "deliveryTime": {
          "minDays": 6
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Тюменская, г Тюмень, км 11-й Ялуторовский тракт, д 5, стр 5",
        "deliveryTime": {
          "minDays": 5
        }
      }
    ]
  },
  "izhevsk": {
    "izhevsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Удмуртская Республика, Ижевск, улица Новоажимова, 25",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Удмуртская, г Ижевск, ул Новоажимова, стр 27",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "ulyanovsk": {
    "ulyanovsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Ульяновск, ул. Герасимова, 10Н",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Ульяновская, г Ульяновск, ш Московское, зд 12Б",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  },
  "habarovsk": {
    "habarovsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Хабаровск, Тихоокеанская улица, 73Г/2",
        "deliveryTime": {
          "minDays": 17
        }
      },
      {
        "company": "Деловые Линии",
        "address": "край Хабаровский, г Хабаровск, ул Целинная, д 8В",
        "deliveryTime": {
          "minDays": 10
        }
      }
    ]
  },
  "hanty-mansiysk": {
    "surgut": [
      {
        "company": "ПЭК",
        "address": "Россия, Ханты-Мансийский автономный округ, Сургут, Инженерная улица, 8/3",
        "deliveryTime": {
          "minDays": 14
        }
      },
      {
        "company": "Деловые Линии",
        "address": "АО Ханты-Мансийский Автономный округ - Югра, г Сургут, ул Сосновая, д 43, корп 2",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "chelyabinsk": {
    "chelyabinsk": [
      {
        "company": "ПЭК",
        "address": "Россия, Челябинск, улица Северный Луч, 1А.",
        "deliveryTime": {
          "minDays": 7
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Челябинская, г Челябинск, ул Черкасская, д 9",
        "deliveryTime": {
          "minDays": 6
        }
      }
    ]
  },
  "groznyy": {
    "groznyy": [
      {
        "company": "ПЭК",
        "address": "Россия, Чеченская Республика, Грозный, Краснофлотская улица, 7",
        "deliveryTime": {
          "minDays": 12
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Респ Чеченская, г Грозный, ул Гидратная, д 1/1",
        "deliveryTime": {
          "minDays": 12
        }
      }
    ]
  },
  "cheboksary": {
    "cheboksary": [
      {
        "company": "ПЭК",
        "address": "Россия, Чувашская Республика, Чебоксары, проспект Тракторостроителей, 109А",
        "deliveryTime": {
          "minDays": 8
        }
      },
      {
        "company": "Деловые Линии",
        "address": "Чувашская Республика - Чувашия, г Чебоксары, проезд Лапсарский, д 2, лит А, пом 1",
        "deliveryTime": {
          "minDays": 7
        }
      }
    ]
  },
  "yaroslavl": {
    "yaroslavl": [
      {
        "company": "ПЭК",
        "address": "Россия, Ярославль, Базовая улица, 2",
        "deliveryTime": {
          "minDays": 9
        }
      },
      {
        "company": "Деловые Линии",
        "address": "обл Ярославская, г Ярославль, ул Промышленная, д 18, корп Е",
        "deliveryTime": {
          "minDays": 8
        }
      }
    ]
  }
};
