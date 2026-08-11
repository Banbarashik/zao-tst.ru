import type { City } from "@/types/map";

export const cities: City[] = [
  // Алтайский край (RU-ALT)
  {
    id: "barnaul",
    cityName: "Барнаул",
    coordinates: [83.7698, 53.3606],
    tier: 1,
    regionId: "RU-ALT",
  },
  {
    id: "biysk",
    cityName: "Бийск",
    coordinates: [85.2072, 52.5364],
    tier: 2,
    regionId: "RU-ALT",
  },
  {
    id: "rubtsovsk",
    cityName: "Рубцовск",
    coordinates: [81.2181, 51.5192],
    tier: 3,
    regionId: "RU-ALT",
  },

  // Амурская область (RU-AMU)
  {
    id: "blagoveshchensk",
    cityName: "Благовещенск",
    coordinates: [127.5303, 50.2796],
    tier: 1,
    regionId: "RU-AMU",
  },

  // Архангельская область (RU-ARK)
  {
    id: "arkhangelsk",
    cityName: "Архангельск",
    coordinates: [40.5433, 64.5401],
    tier: 1,
    regionId: "RU-ARK",
  },

  // Белгородская область (RU-BEL)
  {
    id: "belgorod",
    cityName: "Белгород",
    coordinates: [36.5873, 50.5954],
    tier: 1,
    regionId: "RU-BEL",
  },
  {
    id: "stary-oskol",
    cityName: "Старый Оскол",
    coordinates: [37.8378, 51.2974],
    tier: 2,
    regionId: "RU-BEL",
  },

  // Брянская область (RU-BRY)
  {
    id: "bryansk",
    cityName: "Брянск",
    coordinates: [34.3717, 53.2521],
    tier: 1,
    regionId: "RU-BRY",
  },

  // Владимирская область (RU-VLA)
  {
    id: "vladimir",
    cityName: "Владимир",
    coordinates: [40.4066, 56.129],
    tier: 1,
    regionId: "RU-VLA",
  },

  // Волгоградская область (RU-VGG)
  {
    id: "volgograd",
    cityName: "Волгоград",
    coordinates: [44.5133, 48.708],
    tier: 1,
    regionId: "RU-VGG",
  },
  {
    id: "kamyshin",
    cityName: "Камышин",
    coordinates: [45.4161, 50.0983],
    tier: 2,
    regionId: "RU-VGG",
  },

  // Вологодская область (RU-VLOG)
  {
    id: "vologda",
    cityName: "Вологда",
    coordinates: [39.8845, 59.2205],
    tier: 1,
    regionId: "RU-VLOG",
  },
  {
    id: "cherepovets",
    cityName: "Череповец",
    coordinates: [37.9063, 59.1323],
    tier: 2,
    regionId: "RU-VLOG",
  },

  // Воронежская область (RU-VOR)
  {
    id: "voronezh",
    cityName: "Воронеж",
    coordinates: [39.2003, 51.6608],
    tier: 1,
    regionId: "RU-VOR",
  },

  // Забайкальский край (RU-ZAB)
  {
    id: "chita",
    cityName: "Чита",
    coordinates: [113.4994, 52.0317],
    tier: 1,
    regionId: "RU-ZAB",
  },

  // Ивановская область (RU-IVA)
  {
    id: "ivanovo",
    cityName: "Иваново",
    coordinates: [40.9714, 57.0004],
    tier: 1,
    regionId: "RU-IVA",
  },
  {
    id: "kineshma",
    cityName: "Кинешма",
    coordinates: [42.1528, 57.4431],
    tier: 2,
    regionId: "RU-IVA",
  },

  // Иркутская область (RU-IRK)
  {
    id: "irkutsk",
    cityName: "Иркутск",
    coordinates: [104.2964, 52.2978],
    tier: 1,
    regionId: "RU-IRK",
  },
  {
    id: "bratsk",
    cityName: "Братск",
    coordinates: [101.6142, 56.1325],
    tier: 1,
    regionId: "RU-IRK",
  },
  {
    id: "tulun",
    cityName: "Тулун",
    coordinates: [100.5786, 54.6756],
    tier: 2,
    regionId: "RU-IRK",
  },
  {
    id: "ust-kut",
    cityName: "Усть-Кут",
    coordinates: [105.6964, 56.7933],
    tier: 2,
    regionId: "RU-IRK",
  },
  {
    id: "ust-ilimsk",
    cityName: "Усть-Илимск",
    coordinates: [102.6611, 57.9818],
    tier: 3,
    regionId: "RU-IRK",
  },
  {
    id: "angarsk",
    cityName: "Ангарск",
    coordinates: [103.886, 52.5444],
    tier: 3,
    regionId: "RU-IRK",
  },

  // Кабардино-Балкарская Республика (RU-KB)
  {
    id: "nalchik",
    cityName: "Нальчик",
    coordinates: [43.607, 43.4853],
    tier: 1,
    regionId: "RU-KB",
  },

  // Калужская область (RU-KLU)
  {
    id: "kaluga",
    cityName: "Калуга",
    coordinates: [36.2612, 54.5293],
    tier: 1,
    regionId: "RU-KLU",
  },
  {
    id: "kozelsk",
    cityName: "Козельск",
    coordinates: [35.7725, 54.04],
    tier: 2,
    regionId: "RU-KLU",
  },

  // Карачаево-Черкесская Республика (RU-KC)
  {
    id: "erken-shahar",
    cityName: "Эркен-Шахар",
    coordinates: [41.9361, 44.3703],
    tier: 2,
    regionId: "RU-KC",
  },

  // Кемеровская область (RU-KEM)
  {
    id: "kemerovo",
    cityName: "Кемерово",
    coordinates: [86.0872, 55.3547],
    tier: 1,
    regionId: "RU-KEM",
  },
  {
    id: "novokuznetsk",
    cityName: "Новокузнецк",
    coordinates: [87.136, 53.7557],
    tier: 1,
    regionId: "RU-KEM",
  },
  {
    id: "leninsk-kuznetsky",
    cityName: "Ленинск-Кузнецкий",
    coordinates: [86.1737, 54.6627],
    tier: 2,
    regionId: "RU-KEM",
  },
  {
    id: "yurga",
    cityName: "Юрга",
    coordinates: [84.8864, 55.7231],
    tier: 2,
    regionId: "RU-KEM",
  },
  {
    id: "anzhero-sudzhensk",
    cityName: "Анжеро-Судженск",
    coordinates: [86.0286, 56.081],
    tier: 2,
    regionId: "RU-KEM",
  },
  {
    id: "tashtagol",
    cityName: "Таштагол",
    coordinates: [87.8778, 52.7661],
    tier: 2,
    regionId: "RU-KEM",
  },
  {
    id: "mezhdurechensk",
    cityName: "Междуреченск",
    coordinates: [88.0703, 53.6942],
    tier: 2,
    regionId: "RU-KEM",
  },
  {
    id: "belovo",
    cityName: "Белово",
    coordinates: [86.3061, 54.4164],
    tier: 3,
    regionId: "RU-KEM",
  },
  {
    id: "berezovsky-kem",
    cityName: "Березовский",
    coordinates: [86.2575, 55.5714],
    tier: 3,
    regionId: "RU-KEM",
  },
  {
    id: "kiselevsk",
    cityName: "Киселевск",
    coordinates: [86.6439, 53.9969],
    tier: 3,
    regionId: "RU-KEM",
  },
  {
    id: "prokopyevsk",
    cityName: "Прокопьевск",
    coordinates: [86.7196, 53.8884],
    tier: 3,
    regionId: "RU-KEM",
  },

  // Кировская область (RU-KIR)
  {
    id: "kirov",
    cityName: "Киров",
    coordinates: [49.668, 58.6035],
    tier: 1,
    regionId: "RU-KIR",
  },
  {
    id: "kirs",
    cityName: "Кирс",
    coordinates: [52.2472, 59.3386],
    tier: 2,
    regionId: "RU-KIR",
  },
  {
    id: "kirovo-chepetsk",
    cityName: "Кирово-Чепецк",
    coordinates: [50.0406, 58.5414],
    tier: 3,
    regionId: "RU-KIR",
  },

  // Костромская область (RU-KOS)
  {
    id: "kostroma",
    cityName: "Кострома",
    coordinates: [40.9269, 57.7665],
    tier: 1,
    regionId: "RU-KOS",
  },

  // Краснодарский край (RU-KDA)
  {
    id: "krasnodar",
    cityName: "Краснодар",
    coordinates: [38.976, 45.0355],
    tier: 1,
    regionId: "RU-KDA",
  },
  {
    id: "novorossiysk",
    cityName: "Новороссийск",
    coordinates: [37.7733, 44.7244],
    tier: 2,
    regionId: "RU-KDA",
  },

  // Красноярский край (RU-KYA)
  {
    id: "krasnoyarsk",
    cityName: "Красноярск",
    coordinates: [92.8672, 56.0184],
    tier: 1,
    regionId: "RU-KYA",
  },
  {
    id: "norilsk",
    cityName: "Норильск",
    coordinates: [88.2027, 69.3558],
    tier: 1,
    regionId: "RU-KYA",
  },
  {
    id: "lesosibirsk",
    cityName: "Лесосибирск",
    coordinates: [92.4833, 58.2333],
    tier: 2,
    regionId: "RU-KYA",
  },
  {
    id: "sharypovo",
    cityName: "Шарыпово",
    coordinates: [89.1833, 55.5333],
    tier: 2,
    regionId: "RU-KYA",
  },
  {
    id: "achinsk",
    cityName: "Ачинск",
    coordinates: [90.5019, 56.2694],
    tier: 2,
    regionId: "RU-KYA",
  },
  {
    id: "zheleznogorsk-kya",
    cityName: "Железногорск",
    coordinates: [93.5317, 56.2514],
    tier: 3,
    regionId: "RU-KYA",
  },
  {
    id: "minusinsk",
    cityName: "Минусинск",
    coordinates: [91.6872, 53.7103],
    tier: 3,
    regionId: "RU-KYA",
  },
  {
    id: "uyar",
    cityName: "Уяр",
    coordinates: [94.3267, 55.8081],
    tier: 3,
    regionId: "RU-KYA",
  },
  {
    id: "nazarovo",
    cityName: "Назарово",
    coordinates: [90.3917, 56.0064],
    tier: 3,
    regionId: "RU-KYA",
  },
  {
    id: "borodino",
    cityName: "Бородино",
    coordinates: [94.8967, 55.9089],
    tier: 3,
    regionId: "RU-KYA",
  },

  // Курганская область (RU-KGN)
  {
    id: "kurgan",
    cityName: "Курган",
    coordinates: [65.3411, 55.441],
    tier: 1,
    regionId: "RU-KGN",
  },

  // Курская область (RU-KRS)
  {
    id: "kursk",
    cityName: "Курск",
    coordinates: [36.1926, 51.7308],
    tier: 1,
    regionId: "RU-KRS",
  },

  // Ленинградская область (RU-LEN) / Санкт-Петербург (RU-SPE)
  {
    id: "sankt-peterburg",
    cityName: "Санкт-Петербург",
    coordinates: [30.3141, 59.9386],
    tier: 1,
    regionId: "RU-SPE",
  },
  {
    id: "priozersk",
    cityName: "Приозерск",
    coordinates: [30.1228, 61.0392],
    tier: 2,
    regionId: "RU-LEN",
  },
  {
    id: "pikalevo",
    cityName: "Пикалево",
    coordinates: [35.0183, 59.5161],
    tier: 2,
    regionId: "RU-LEN",
  },
  {
    id: "kirishi",
    cityName: "Кириши",
    coordinates: [32.0125, 59.4489],
    tier: 3,
    regionId: "RU-LEN",
  },
  {
    id: "tikhvin",
    cityName: "Тихвин",
    coordinates: [33.5147, 59.6442],
    tier: 3,
    regionId: "RU-LEN",
  },
  {
    id: "gatchina",
    cityName: "Гатчина",
    coordinates: [30.1286, 59.5662],
    tier: 3,
    regionId: "RU-LEN",
  },
  {
    id: "kirovsk-len",
    cityName: "Кировск",
    coordinates: [30.9844, 59.8811],
    tier: 3,
    regionId: "RU-LEN",
  },

  // Липецкая область (RU-LIP)
  {
    id: "lipetsk",
    cityName: "Липецк",
    coordinates: [39.5992, 52.6031],
    tier: 1,
    regionId: "RU-LIP",
  },

  // Магаданская область (RU-MAG)
  {
    id: "magadan",
    cityName: "Магадан",
    coordinates: [150.803, 59.5638],
    tier: 1,
    regionId: "RU-MAG",
  },

  // Московская область (RU-MOS) / Москва (RU-MOW)
  {
    id: "moskva",
    cityName: "Москва",
    coordinates: [37.6173, 55.7558],
    tier: 1,
    regionId: "RU-MOW",
  },
  {
    id: "serpukhov",
    cityName: "Серпухов",
    coordinates: [37.4161, 54.915],
    tier: 2,
    regionId: "RU-MOS",
  },
  {
    id: "elektrostal",
    cityName: "Электросталь",
    coordinates: [38.4419, 55.7906],
    tier: 2,
    regionId: "RU-MOS",
  },
  {
    id: "krasnoarmeysk-mos",
    cityName: "Красноармейск",
    coordinates: [38.1367, 56.1028],
    tier: 2,
    regionId: "RU-MOS",
  },
  {
    id: "dubna",
    cityName: "Дубна",
    coordinates: [37.1581, 56.7331],
    tier: 2,
    regionId: "RU-MOS",
  },
  {
    id: "losino-petrovsky",
    cityName: "Лосино-Петровский",
    coordinates: [38.2008, 55.8867],
    tier: 3,
    regionId: "RU-MOS",
  },
  {
    id: "vidnoye",
    cityName: "Видное",
    coordinates: [37.7036, 55.5517],
    tier: 3,
    regionId: "RU-MOS",
  },
  {
    id: "shchelkovo",
    cityName: "Щелково",
    coordinates: [37.9981, 55.9233],
    tier: 3,
    regionId: "RU-MOS",
  },
  {
    id: "balashikha",
    cityName: "Балашиха",
    coordinates: [37.9458, 55.7963],
    tier: 3,
    regionId: "RU-MOS",
  },
  {
    id: "lyubertsy",
    cityName: "Люберцы",
    coordinates: [37.8933, 55.6772],
    tier: 3,
    regionId: "RU-MOS",
  },
  {
    id: "khimki",
    cityName: "Химки",
    coordinates: [37.4422, 55.8889],
    tier: 3,
    regionId: "RU-MOS",
  },

  // Мурманская область (RU-MUR)
  {
    id: "murmansk",
    cityName: "Мурманск",
    coordinates: [33.0827, 68.9585],
    tier: 1,
    regionId: "RU-MUR",
  },

  // Нижегородская область (RU-NIZ)
  {
    id: "nizhny-novgorod",
    cityName: "Нижний Новгород",
    coordinates: [44.002, 56.3269],
    tier: 1,
    regionId: "RU-NIZ",
  },
  {
    id: "sarov",
    cityName: "Саров",
    coordinates: [43.3283, 54.9358],
    tier: 2,
    regionId: "RU-NIZ",
  },
  {
    id: "dzerzhinsk",
    cityName: "Дзержинск",
    coordinates: [43.4631, 56.2389],
    tier: 3,
    regionId: "RU-NIZ",
  },
  {
    id: "kstovo",
    cityName: "Кстово",
    coordinates: [44.195, 56.1517],
    tier: 3,
    regionId: "RU-NIZ",
  },

  // Новгородская область (RU-NGR)
  {
    id: "veliky-novgorod",
    cityName: "Великий Новгород",
    coordinates: [31.2711, 58.5215],
    tier: 1,
    regionId: "RU-NGR",
  },
  {
    id: "staraya-russa",
    cityName: "Старая Русса",
    coordinates: [31.3542, 57.9889],
    tier: 2,
    regionId: "RU-NGR",
  },

  // Новосибирская область (RU-NVS)
  {
    id: "novosibirsk",
    cityName: "Новосибирск",
    coordinates: [82.9357, 55.0302],
    tier: 1,
    regionId: "RU-NVS",
  },
  {
    id: "toguchin",
    cityName: "Тогучин",
    coordinates: [84.1492, 55.2386],
    tier: 2,
    regionId: "RU-NVS",
  },
  {
    id: "berdsk",
    cityName: "Бердск",
    coordinates: [83.1028, 54.7578],
    tier: 3,
    regionId: "RU-NVS",
  },

  // Омская область (RU-OMS)
  {
    id: "omsk",
    cityName: "Омск",
    coordinates: [73.3686, 54.9885],
    tier: 1,
    regionId: "RU-OMS",
  },

  // Оренбургская область (RU-ORE)
  {
    id: "orenburg",
    cityName: "Оренбург",
    coordinates: [55.0988, 51.7727],
    tier: 1,
    regionId: "RU-ORE",
  },
  {
    id: "orsk",
    cityName: "Орск",
    coordinates: [58.4631, 51.2289],
    tier: 2,
    regionId: "RU-ORE",
  },
  {
    id: "buzuluk",
    cityName: "Бузулук",
    coordinates: [52.2619, 52.7806],
    tier: 2,
    regionId: "RU-ORE",
  },
  {
    id: "gay",
    cityName: "Гай",
    coordinates: [58.4528, 51.4678],
    tier: 3,
    regionId: "RU-ORE",
  },
  {
    id: "novotroitsk",
    cityName: "Новотроицк",
    coordinates: [58.33, 51.2019],
    tier: 3,
    regionId: "RU-ORE",
  },

  // Орловская область (RU-ORL)
  {
    id: "orel",
    cityName: "Орел",
    coordinates: [36.0628, 52.9651],
    tier: 1,
    regionId: "RU-ORL",
  },

  // Пензенская область (RU-PNZ)
  {
    id: "penza",
    cityName: "Пенза",
    coordinates: [45.0183, 53.2007],
    tier: 1,
    regionId: "RU-PNZ",
  },
  {
    id: "kuznetsk",
    cityName: "Кузнецк",
    coordinates: [46.6017, 53.1186],
    tier: 2,
    regionId: "RU-PNZ",
  },

  // Пермский край (RU-PER)
  {
    id: "perm",
    cityName: "Пермь",
    coordinates: [56.2294, 58.0105],
    tier: 1,
    regionId: "RU-PER",
  },
  {
    id: "lysva",
    cityName: "Лысьва",
    coordinates: [57.8058, 58.0983],
    tier: 2,
    regionId: "RU-PER",
  },

  // Приморский край (RU-PRI)
  {
    id: "vladivostok",
    cityName: "Владивосток",
    coordinates: [131.8855, 43.1155],
    tier: 1,
    regionId: "RU-PRI",
  },
  {
    id: "dalnegorsk",
    cityName: "Дальнегорск",
    coordinates: [135.5714, 44.5606],
    tier: 2,
    regionId: "RU-PRI",
  },
  {
    id: "ussuriysk",
    cityName: "Уссурийск",
    coordinates: [131.9508, 43.8],
    tier: 3,
    regionId: "RU-PRI",
  },
  {
    id: "nakhodka",
    cityName: "Находка",
    coordinates: [132.8733, 42.8139],
    tier: 3,
    regionId: "RU-PRI",
  },

  // Псковская область (RU-PSK)
  {
    id: "pskov",
    cityName: "Псков",
    coordinates: [28.3344, 57.8193],
    tier: 1,
    regionId: "RU-PSK",
  },

  // Республика Алтай (RU-AL)
  {
    id: "gorno-altaysk",
    cityName: "Горно-Алтайск",
    coordinates: [85.9603, 51.9581],
    tier: 1,
    regionId: "RU-AL",
  },

  // Республика Башкортостан (RU-BA)
  {
    id: "ufa",
    cityName: "Уфа",
    coordinates: [55.9726, 54.7388],
    tier: 1,
    regionId: "RU-BA",
  },
  {
    id: "neftekamsk",
    cityName: "Нефтекамск",
    coordinates: [54.2661, 56.0847],
    tier: 2,
    regionId: "RU-BA",
  },
  {
    id: "uchaly",
    cityName: "Учалы",
    coordinates: [59.4522, 54.2981],
    tier: 3,
    regionId: "RU-BA",
  },

  // Республика Бурятия (RU-BU)
  {
    id: "ulan-ude",
    cityName: "Улан-Удэ",
    coordinates: [107.5847, 51.8344],
    tier: 1,
    regionId: "RU-BU",
  },

  // Республика Карелия (RU-KR)
  {
    id: "petrozavodsk",
    cityName: "Петрозаводск",
    coordinates: [34.3469, 61.7849],
    tier: 1,
    regionId: "RU-KR",
  },

  // Республика Коми (RU-KO)
  {
    id: "syktyvkar",
    cityName: "Сыктывкар",
    coordinates: [50.8365, 61.6688],
    tier: 1,
    regionId: "RU-KO",
  },
  {
    id: "vorkuta",
    cityName: "Воркута",
    coordinates: [64.0489, 67.5028],
    tier: 1,
    regionId: "RU-KO",
  },

  // Республика Марий Эл (RU-ME)
  {
    id: "yoshkar-ola",
    cityName: "Йошкар-Ола",
    coordinates: [47.8908, 56.6344],
    tier: 1,
    regionId: "RU-ME",
  },

  // Республика Мордовия (RU-MO)
  {
    id: "saransk",
    cityName: "Саранск",
    coordinates: [45.1839, 54.1838],
    tier: 1,
    regionId: "RU-MO",
  },

  // Республика Саха (Якутия) (RU-SA)
  {
    id: "yakutsk",
    cityName: "Якутск",
    coordinates: [129.7326, 62.0355],
    tier: 1,
    regionId: "RU-SA",
  },
  {
    id: "mirny",
    cityName: "Мирный",
    coordinates: [113.9611, 62.5353],
    tier: 1,
    regionId: "RU-SA",
  },
  {
    id: "neryungri",
    cityName: "Нерюнгри",
    coordinates: [124.5483, 56.6711],
    tier: 2,
    regionId: "RU-SA",
  },
  {
    id: "lensk",
    cityName: "Ленск",
    coordinates: [114.9286, 60.7253],
    tier: 3,
    regionId: "RU-SA",
  },

  // Республика Татарстан (RU-TA)
  {
    id: "kazan",
    cityName: "Казань",
    coordinates: [49.1221, 55.7963],
    tier: 1,
    regionId: "RU-TA",
  },
  {
    id: "naberezhnye-chelny",
    cityName: "Набережные Челны",
    coordinates: [52.4082, 55.7437],
    tier: 2,
    regionId: "RU-TA",
  },
  {
    id: "leninogorsk",
    cityName: "Лениногорск",
    coordinates: [52.4411, 54.5986],
    tier: 3,
    regionId: "RU-TA",
  },

  // Республика Тыва (RU-TY)
  {
    id: "kyzyl",
    cityName: "Кызыл",
    coordinates: [94.4424, 51.7197],
    tier: 1,
    regionId: "RU-TY",
  },

  // Республика Хакасия (RU-KK)
  {
    id: "abakan",
    cityName: "Абакан",
    coordinates: [91.4298, 53.7224],
    tier: 1,
    regionId: "RU-KK",
  },
  {
    id: "sayanogorsk",
    cityName: "Саяногорск",
    coordinates: [91.4022, 53.0867],
    tier: 2,
    regionId: "RU-KK",
  },
  {
    id: "chernogorsk",
    cityName: "Черногорск",
    coordinates: [91.3061, 53.8239],
    tier: 3,
    regionId: "RU-KK",
  },

  // Ростовская область (RU-ROS)
  {
    id: "rostov-na-donu",
    cityName: "Ростов-на-Дону",
    coordinates: [39.7233, 47.2357],
    tier: 1,
    regionId: "RU-ROS",
  },
  {
    id: "salsk",
    cityName: "Сальск",
    coordinates: [41.5369, 46.4719],
    tier: 2,
    regionId: "RU-ROS",
  },
  {
    id: "belaya-kalitva",
    cityName: "Белая Калитва",
    coordinates: [40.7878, 48.175],
    tier: 2,
    regionId: "RU-ROS",
  },
  {
    id: "taganrog",
    cityName: "Таганрог",
    coordinates: [38.9172, 47.2362],
    tier: 3,
    regionId: "RU-ROS",
  },
  {
    id: "novocherkassk",
    cityName: "Новочеркасск",
    coordinates: [40.0925, 47.4222],
    tier: 3,
    regionId: "RU-ROS",
  },
  {
    id: "shakhty",
    cityName: "Шахты",
    coordinates: [40.2117, 47.7086],
    tier: 3,
    regionId: "RU-ROS",
  },

  // Рязанская область (RU-RYA)
  {
    id: "ryazan",
    cityName: "Рязань",
    coordinates: [39.7417, 54.6292],
    tier: 1,
    regionId: "RU-RYA",
  },

  // Самарская область (RU-SAM)
  {
    id: "samara",
    cityName: "Самара",
    coordinates: [50.1001, 53.1959],
    tier: 1,
    regionId: "RU-SAM",
  },
  {
    id: "tolyatti",
    cityName: "Тольятти",
    coordinates: [49.4189, 53.5303],
    tier: 2,
    regionId: "RU-SAM",
  },
  {
    id: "syzran",
    cityName: "Сызрань",
    coordinates: [48.4683, 53.1558],
    tier: 2,
    regionId: "RU-SAM",
  },
  {
    id: "zhigulevsk",
    cityName: "Жигулевск",
    coordinates: [49.4975, 53.3986],
    tier: 3,
    regionId: "RU-SAM",
  },
  {
    id: "chapaevsk",
    cityName: "Чапаевск",
    coordinates: [49.0983, 52.9772],
    tier: 3,
    regionId: "RU-SAM",
  },

  // Саратовская область (RU-SAR)
  {
    id: "saratov",
    cityName: "Саратов",
    coordinates: [46.0086, 51.5332],
    tier: 1,
    regionId: "RU-SAR",
  },
  {
    id: "volsk",
    cityName: "Вольск",
    coordinates: [47.3828, 52.0469],
    tier: 2,
    regionId: "RU-SAR",
  },
  {
    id: "kalininsk",
    cityName: "Калининск",
    coordinates: [44.4756, 51.5008],
    tier: 3,
    regionId: "RU-SAR",
  },
  {
    id: "engels",
    cityName: "Энгельс",
    coordinates: [46.1242, 51.4981],
    tier: 3,
    regionId: "RU-SAR",
  },

  // Сахалинская область (RU-SAK)
  {
    id: "yuzhno-sakhalinsk",
    cityName: "Южно-Сахалинск",
    coordinates: [142.736, 46.9591],
    tier: 1,
    regionId: "RU-SAK",
  },

  // Свердловская область (RU-SVE)
  {
    id: "yekaterinburg",
    cityName: "Екатеринбург",
    coordinates: [60.6122, 56.8519],
    tier: 1,
    regionId: "RU-SVE",
  },
  {
    id: "nizhny-tagil",
    cityName: "Нижний Тагил",
    coordinates: [59.965, 57.9194],
    tier: 2,
    regionId: "RU-SVE",
  },
  {
    id: "krasnoufamsk",
    cityName: "Красноуфимск",
    coordinates: [57.7719, 56.6111],
    tier: 3,
    regionId: "RU-SVE",
  },
  {
    id: "kirovgrad",
    cityName: "Кировград",
    coordinates: [60.1169, 57.4336],
    tier: 3,
    regionId: "RU-SVE",
  },

  // Смоленская область (RU-SMO)
  {
    id: "smolensk",
    cityName: "Смоленск",
    coordinates: [32.0453, 54.7826],
    tier: 1,
    regionId: "RU-SMO",
  },

  // Ставропольский край (RU-STA)
  {
    id: "budennovsk",
    cityName: "Буденновск",
    coordinates: [44.1378, 44.7814],
    tier: 1,
    regionId: "RU-STA",
  },
  {
    id: "nevinnomyssk",
    cityName: "Невинномысск",
    coordinates: [41.9369, 44.6331],
    tier: 2,
    regionId: "RU-STA",
  },
  {
    id: "pyatigorsk",
    cityName: "Пятигорск",
    coordinates: [43.0594, 44.0486],
    tier: 3,
    regionId: "RU-STA",
  },

  // Тамбовская область (RU-TAM)
  {
    id: "tambov",
    cityName: "Тамбов",
    coordinates: [41.4598, 52.7317],
    tier: 1,
    regionId: "RU-TAM",
  },

  // Тверская область (RU-TVE)
  {
    id: "tver",
    cityName: "Тверь",
    coordinates: [35.9118, 56.8587],
    tier: 1,
    regionId: "RU-TVE",
  },
  {
    id: "vyshny-volochek",
    cityName: "Вышний Волочек",
    coordinates: [34.5622, 57.5914],
    tier: 2,
    regionId: "RU-TVE",
  },
  {
    id: "kimry",
    cityName: "Кимры",
    coordinates: [37.3589, 56.8728],
    tier: 2,
    regionId: "RU-TVE",
  },
  {
    id: "kuvshinovo",
    cityName: "Кувшиново",
    coordinates: [34.1706, 57.0253],
    tier: 3,
    regionId: "RU-TVE",
  },

  // Томская область (RU-TOM)
  {
    id: "tomsk",
    cityName: "Томск",
    coordinates: [84.9481, 56.4886],
    tier: 1,
    regionId: "RU-TOM",
  },
  {
    id: "asino",
    cityName: "Асино",
    coordinates: [86.1472, 56.9961],
    tier: 2,
    regionId: "RU-TOM",
  },
  {
    id: "seversk",
    cityName: "Северск",
    coordinates: [84.8803, 56.6022],
    tier: 3,
    regionId: "RU-TOM",
  },

  // Тульская область (RU-TUL)
  {
    id: "tula",
    cityName: "Тула",
    coordinates: [37.6178, 54.1931],
    tier: 1,
    regionId: "RU-TUL",
  },
  {
    id: "novomoskovsk",
    cityName: "Новомосковск",
    coordinates: [38.2253, 54.0108],
    tier: 2,
    regionId: "RU-TUL",
  },

  // Тюменская область (RU-TYU)
  {
    id: "tyumen",
    cityName: "Тюмень",
    coordinates: [65.5343, 57.153],
    tier: 1,
    regionId: "RU-TYU",
  },

  // Удмуртская Республика (RU-UD)
  {
    id: "izhevsk",
    cityName: "Ижевск",
    coordinates: [53.2089, 56.8527],
    tier: 1,
    regionId: "RU-UD",
  },
  {
    id: "sarapul",
    cityName: "Сарапул",
    coordinates: [53.8164, 56.4772],
    tier: 2,
    regionId: "RU-UD",
  },

  // Ульяновская область (RU-ULY)
  {
    id: "ulyanovsk",
    cityName: "Ульяновск",
    coordinates: [48.397, 54.3187],
    tier: 1,
    regionId: "RU-ULY",
  },

  // Хабаровский край (RU-KHA)
  {
    id: "khabarovsk",
    cityName: "Хабаровск",
    coordinates: [135.0719, 48.4802],
    tier: 1,
    regionId: "RU-KHA",
  },
  {
    id: "komsomolsk-na-amure",
    cityName: "Комсомольск-на-Амуре",
    coordinates: [137.0081, 50.5497],
    tier: 2,
    regionId: "RU-KHA",
  },

  // ХМАО-Югра (RU-KHM)
  {
    id: "surgut",
    cityName: "Сургут",
    coordinates: [73.3962, 61.254],
    tier: 1,
    regionId: "RU-KHM",
  },
  {
    id: "nizhnevartovsk",
    cityName: "Нижневартовск",
    coordinates: [76.5589, 60.9386],
    tier: 2,
    regionId: "RU-KHM",
  },
  {
    id: "kogalym",
    cityName: "Когалым",
    coordinates: [74.4786, 62.2644],
    tier: 2,
    regionId: "RU-KHM",
  },
  {
    id: "nefteyugansk",
    cityName: "Нефтеюганск",
    coordinates: [72.6022, 61.0989],
    tier: 3,
    regionId: "RU-KHM",
  },

  // Челябинская область (RU-CHE)
  {
    id: "chelyabinsk",
    cityName: "Челябинск",
    coordinates: [61.4026, 55.1599],
    tier: 1,
    regionId: "RU-CHE",
  },
  {
    id: "magnitogorsk",
    cityName: "Магнитогорск",
    coordinates: [59.0331, 53.4186],
    tier: 2,
    regionId: "RU-CHE",
  },
  {
    id: "zlatoust",
    cityName: "Златоуст",
    coordinates: [59.6508, 55.1711],
    tier: 2,
    regionId: "RU-CHE",
  },
  {
    id: "miass",
    cityName: "Миасс",
    coordinates: [60.1089, 55.0433],
    tier: 3,
    regionId: "RU-CHE",
  },
  {
    id: "chebarkul",
    cityName: "Чебаркуль",
    coordinates: [60.3703, 54.9786],
    tier: 3,
    regionId: "RU-CHE",
  },

  // Чеченская Республика (RU-CE)
  {
    id: "grozny",
    cityName: "Грозный",
    coordinates: [45.6889, 43.3178],
    tier: 1,
    regionId: "RU-CE",
  },

  // Чувашская Республика (RU-CU)
  {
    id: "cheboksary",
    cityName: "Чебоксары",
    coordinates: [47.2519, 56.1322],
    tier: 1,
    regionId: "RU-CU",
  },
  {
    id: "novocheboksarsk",
    cityName: "Новочебоксарск",
    coordinates: [47.4831, 56.1114],
    tier: 2,
    regionId: "RU-CU",
  },

  // Ямало-Ненецкий АО (RU-YAN)
  {
    id: "tarko-sale",
    cityName: "Тарко-Сале",
    coordinates: [77.8178, 64.915],
    tier: 1,
    regionId: "RU-YAN",
  },

  // Ярославская область (RU-YAR)
  {
    id: "yaroslavl",
    cityName: "Ярославль",
    coordinates: [39.8845, 57.6261],
    tier: 1,
    regionId: "RU-YAR",
  },
  {
    id: "rybinsk",
    cityName: "Рыбинск",
    coordinates: [38.8583, 58.0486],
    tier: 2,
    regionId: "RU-YAR",
  },
];
