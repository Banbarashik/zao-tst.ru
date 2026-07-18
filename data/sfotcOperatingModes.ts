import type { ModeTableData } from "@/types/sfotcOperatingModes";

export const sfotcOperatingModes: ModeTableData[] = [
  {
    id: "sfotc-160-8000",
    airFlowM3h: 8000,
    fanStaticPressurePa: 425,
    powerLevels: {
      full: { label: "Полная мощность", kw: 157.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 105.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 52.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 19, availablePressurePa: 315, status: "normal" },
        twoThirds: {
          outletTempC: 1,
          availablePressurePa: 311,
          status: "normal",
        },
        oneThird: {
          outletTempC: -15,
          availablePressurePa: 307,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 25, availablePressurePa: 321, status: "normal" },
        twoThirds: {
          outletTempC: 7,
          availablePressurePa: 318,
          status: "normal",
        },
        oneThird: {
          outletTempC: -10,
          availablePressurePa: 314,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 31, availablePressurePa: 327, status: "normal" },
        twoThirds: {
          outletTempC: 12,
          availablePressurePa: 323,
          status: "normal",
        },
        oneThird: {
          outletTempC: -4,
          availablePressurePa: 320,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 37, availablePressurePa: 332, status: "normal" },
        twoThirds: {
          outletTempC: 18,
          availablePressurePa: 329,
          status: "normal",
        },
        oneThird: {
          outletTempC: 1,
          availablePressurePa: 326,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 43, availablePressurePa: 337, status: "warning" },
        twoThirds: {
          outletTempC: 24,
          availablePressurePa: 334,
          status: "normal",
        },
        oneThird: {
          outletTempC: 6,
          availablePressurePa: 331,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 49, availablePressurePa: 342, status: "warning" },
        twoThirds: {
          outletTempC: 29,
          availablePressurePa: 339,
          status: "normal",
        },
        oneThird: {
          outletTempC: 12,
          availablePressurePa: 336,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 55, availablePressurePa: 346, status: "warning" },
        twoThirds: {
          outletTempC: 35,
          availablePressurePa: 343,
          status: "normal",
        },
        oneThird: {
          outletTempC: 17,
          availablePressurePa: 340,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 61, availablePressurePa: 350, status: "warning" },
        twoThirds: {
          outletTempC: 41,
          availablePressurePa: 347,
          status: "warning",
        },
        oneThird: {
          outletTempC: 22,
          availablePressurePa: 345,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 46,
          availablePressurePa: 351,
          status: "warning",
        },
        oneThird: {
          outletTempC: 28,
          availablePressurePa: 348,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 52,
          availablePressurePa: 355,
          status: "warning",
        },
        oneThird: {
          outletTempC: 33,
          availablePressurePa: 352,
          status: "warning",
        },
      },
      {
        inletTempC: 20,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 58,
          availablePressurePa: 358,
          status: "warning",
        },
        oneThird: {
          outletTempC: 38,
          availablePressurePa: 356,
          status: "warning",
        },
      },
      {
        inletTempC: 25,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 44,
          availablePressurePa: 359,
          status: "warning",
        },
      },
      {
        inletTempC: 30,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 54,
          availablePressurePa: 365,
          status: "warning",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 59,
          availablePressurePa: 368,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-160-10000",
    airFlowM3h: 10000,
    fanStaticPressurePa: 260,
    powerLevels: {
      full: { label: "Полная мощность", kw: 157.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 105.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 52.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 8, availablePressurePa: 91, status: "normal" },
        twoThirds: {
          outletTempC: -6,
          availablePressurePa: 86,
          status: "normal",
        },
        oneThird: {
          outletTempC: -18,
          availablePressurePa: 82,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 14, availablePressurePa: 100, status: "normal" },
        twoThirds: {
          outletTempC: 0,
          availablePressurePa: 96,
          status: "normal",
        },
        oneThird: {
          outletTempC: -13,
          availablePressurePa: 92,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 20, availablePressurePa: 109, status: "normal" },
        twoThirds: {
          outletTempC: 5,
          availablePressurePa: 105,
          status: "normal",
        },
        oneThird: {
          outletTempC: -8,
          availablePressurePa: 101,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 26, availablePressurePa: 117, status: "normal" },
        twoThirds: {
          outletTempC: 11,
          availablePressurePa: 113,
          status: "normal",
        },
        oneThird: {
          outletTempC: -2,
          availablePressurePa: 110,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 31, availablePressurePa: 125, status: "normal" },
        twoThirds: {
          outletTempC: 16,
          availablePressurePa: 121,
          status: "normal",
        },
        oneThird: {
          outletTempC: 3,
          availablePressurePa: 118,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 37, availablePressurePa: 132, status: "normal" },
        twoThirds: {
          outletTempC: 22,
          availablePressurePa: 128,
          status: "normal",
        },
        oneThird: {
          outletTempC: 8,
          availablePressurePa: 125,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 43, availablePressurePa: 138, status: "normal" },
        twoThirds: {
          outletTempC: 27,
          availablePressurePa: 135,
          status: "normal",
        },
        oneThird: {
          outletTempC: 13,
          availablePressurePa: 132,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 49, availablePressurePa: 145, status: "normal" },
        twoThirds: {
          outletTempC: 33,
          availablePressurePa: 141,
          status: "normal",
        },
        oneThird: {
          outletTempC: 19,
          availablePressurePa: 138,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 55, availablePressurePa: 150, status: "warning" },
        twoThirds: {
          outletTempC: 38,
          availablePressurePa: 147,
          status: "normal",
        },
        oneThird: {
          outletTempC: 24,
          availablePressurePa: 144,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 60, availablePressurePa: 156, status: "warning" },
        twoThirds: {
          outletTempC: 44,
          availablePressurePa: 153,
          status: "normal",
        },
        oneThird: {
          outletTempC: 29,
          availablePressurePa: 150,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 66, availablePressurePa: 160, status: "warning" },
        twoThirds: {
          outletTempC: 49,
          availablePressurePa: 157,
          status: "warning",
        },
        oneThird: {
          outletTempC: 34,
          availablePressurePa: 155,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 72, availablePressurePa: 165, status: "warning" },
        twoThirds: {
          outletTempC: 55,
          availablePressurePa: 162,
          status: "warning",
        },
        oneThird: {
          outletTempC: 40,
          availablePressurePa: 159,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 61,
          availablePressurePa: 167,
          status: "warning",
        },
        oneThird: {
          outletTempC: 45,
          availablePressurePa: 165,
          status: "normal",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 66,
          availablePressurePa: 171,
          status: "warning",
        },
        oneThird: {
          outletTempC: 50,
          availablePressurePa: 169,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 72,
          availablePressurePa: 175,
          status: "warning",
        },
        oneThird: {
          outletTempC: 55,
          availablePressurePa: 173,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 61,
          availablePressurePa: 177,
          status: "warning",
        },
      },
      {
        inletTempC: 50,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 66,
          availablePressurePa: 180,
          status: "warning",
        },
      },
      {
        inletTempC: 55,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-160-9000",
    airFlowM3h: 9000,
    fanStaticPressurePa: 1153,
    powerLevels: {
      full: { label: "Полная мощность", kw: 157.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 105.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 52.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 13, availablePressurePa: 1015, status: "normal" },
        twoThirds: {
          outletTempC: -3,
          availablePressurePa: 1011,
          status: "normal",
        },
        oneThird: {
          outletTempC: -17,
          availablePressurePa: 1007,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 19, availablePressurePa: 1023, status: "normal" },
        twoThirds: {
          outletTempC: 3,
          availablePressurePa: 1019,
          status: "normal",
        },
        oneThird: {
          outletTempC: -11,
          availablePressurePa: 1015,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 25, availablePressurePa: 1030, status: "normal" },
        twoThirds: {
          outletTempC: 9,
          availablePressurePa: 1026,
          status: "normal",
        },
        oneThird: {
          outletTempC: -6,
          availablePressurePa: 1022,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 30, availablePressurePa: 1036, status: "normal" },
        twoThirds: {
          outletTempC: 14,
          availablePressurePa: 1033,
          status: "normal",
        },
        oneThird: {
          outletTempC: -1,
          availablePressurePa: 1029,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 36, availablePressurePa: 1048, status: "normal" },
        twoThirds: {
          outletTempC: 20,
          availablePressurePa: 1039,
          status: "normal",
        },
        oneThird: {
          outletTempC: 4,
          availablePressurePa: 1036,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 42, availablePressurePa: 1054, status: "normal" },
        twoThirds: {
          outletTempC: 25,
          availablePressurePa: 1045,
          status: "normal",
        },
        oneThird: {
          outletTempC: 10,
          availablePressurePa: 1042,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 48, availablePressurePa: 1059, status: "warning" },
        twoThirds: {
          outletTempC: 31,
          availablePressurePa: 1051,
          status: "normal",
        },
        oneThird: {
          outletTempC: 15,
          availablePressurePa: 1048,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 54, availablePressurePa: 1063, status: "warning" },
        twoThirds: {
          outletTempC: 36,
          availablePressurePa: 1056,
          status: "normal",
        },
        oneThird: {
          outletTempC: 20,
          availablePressurePa: 1053,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 60, availablePressurePa: 1068, status: "warning" },
        twoThirds: {
          outletTempC: 42,
          availablePressurePa: 1061,
          status: "normal",
        },
        oneThird: {
          outletTempC: 25,
          availablePressurePa: 1058,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 66, availablePressurePa: 1072, status: "warning" },
        twoThirds: {
          outletTempC: 47,
          availablePressurePa: 1065,
          status: "warning",
        },
        oneThird: {
          outletTempC: 31,
          availablePressurePa: 1063,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 53,
          availablePressurePa: 1069,
          status: "warning",
        },
        oneThird: {
          outletTempC: 36,
          availablePressurePa: 1066,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 59,
          availablePressurePa: 1075,
          status: "warning",
        },
        oneThird: {
          outletTempC: 41,
          availablePressurePa: 1072,
          status: "warning",
        },
      },
      {
        inletTempC: 30,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 65,
          availablePressurePa: 1078,
          status: "warning",
        },
        oneThird: {
          outletTempC: 47,
          availablePressurePa: 1075,
          status: "warning",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 52,
          availablePressurePa: 1078,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 57,
          availablePressurePa: 1081,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 62,
          availablePressurePa: 1084,
          status: "warning",
        },
      },
      {
        inletTempC: 50,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-160-12000",
    airFlowM3h: 12000,
    fanStaticPressurePa: 949,
    powerLevels: {
      full: { label: "Полная мощность", kw: 157.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 105.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 52.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 1, availablePressurePa: 710, status: "normal" },
        twoThirds: {
          outletTempC: -10,
          availablePressurePa: 704,
          status: "normal",
        },
        oneThird: {
          outletTempC: -20,
          availablePressurePa: 699,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 7, availablePressurePa: 723, status: "normal" },
        twoThirds: {
          outletTempC: -4,
          availablePressurePa: 718,
          status: "normal",
        },
        oneThird: {
          outletTempC: -15,
          availablePressurePa: 713,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 13, availablePressurePa: 736, status: "normal" },
        twoThirds: {
          outletTempC: 1,
          availablePressurePa: 731,
          status: "normal",
        },
        oneThird: {
          outletTempC: -10,
          availablePressurePa: 726,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 18, availablePressurePa: 747, status: "normal" },
        twoThirds: {
          outletTempC: 6,
          availablePressurePa: 743,
          status: "normal",
        },
        oneThird: {
          outletTempC: -5,
          availablePressurePa: 738,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 24, availablePressurePa: 758, status: "normal" },
        twoThirds: {
          outletTempC: 12,
          availablePressurePa: 754,
          status: "normal",
        },
        oneThird: {
          outletTempC: 1,
          availablePressurePa: 749,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 30, availablePressurePa: 768, status: "normal" },
        twoThirds: {
          outletTempC: 17,
          availablePressurePa: 764,
          status: "normal",
        },
        oneThird: {
          outletTempC: 6,
          availablePressurePa: 760,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 35, availablePressurePa: 777, status: "normal" },
        twoThirds: {
          outletTempC: 23,
          availablePressurePa: 773,
          status: "normal",
        },
        oneThird: {
          outletTempC: 11,
          availablePressurePa: 769,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 41, availablePressurePa: 786, status: "normal" },
        twoThirds: {
          outletTempC: 28,
          availablePressurePa: 782,
          status: "normal",
        },
        oneThird: {
          outletTempC: 16,
          availablePressurePa: 778,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 47, availablePressurePa: 794, status: "normal" },
        twoThirds: {
          outletTempC: 33,
          availablePressurePa: 790,
          status: "normal",
        },
        oneThird: {
          outletTempC: 21,
          availablePressurePa: 787,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 52, availablePressurePa: 801, status: "normal" },
        twoThirds: {
          outletTempC: 39,
          availablePressurePa: 798,
          status: "normal",
        },
        oneThird: {
          outletTempC: 27,
          availablePressurePa: 795,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 58, availablePressurePa: 808, status: "normal" },
        twoThirds: {
          outletTempC: 44,
          availablePressurePa: 805,
          status: "normal",
        },
        oneThird: {
          outletTempC: 32,
          availablePressurePa: 802,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 64, availablePressurePa: 815, status: "warning" },
        twoThirds: {
          outletTempC: 50,
          availablePressurePa: 812,
          status: "normal",
        },
        oneThird: {
          outletTempC: 37,
          availablePressurePa: 809,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: { outletTempC: 69, availablePressurePa: 821, status: "warning" },
        twoThirds: {
          outletTempC: 55,
          availablePressurePa: 818,
          status: "normal",
        },
        oneThird: {
          outletTempC: 42,
          availablePressurePa: 815,
          status: "normal",
        },
      },
      {
        inletTempC: 35,
        full: { outletTempC: 75, availablePressurePa: 827, status: "warning" },
        twoThirds: {
          outletTempC: 61,
          availablePressurePa: 824,
          status: "warning",
        },
        oneThird: {
          outletTempC: 48,
          availablePressurePa: 821,
          status: "normal",
        },
      },
      {
        inletTempC: 40,
        full: { outletTempC: 80, availablePressurePa: 832, status: "warning" },
        twoThirds: {
          outletTempC: 66,
          availablePressurePa: 829,
          status: "warning",
        },
        oneThird: {
          outletTempC: 53,
          availablePressurePa: 826,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: { outletTempC: 86, availablePressurePa: 837, status: "warning" },
        twoThirds: {
          outletTempC: 72,
          availablePressurePa: 834,
          status: "warning",
        },
        oneThird: {
          outletTempC: 58,
          availablePressurePa: 831,
          status: "warning",
        },
      },
      {
        inletTempC: 50,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 77,
          availablePressurePa: 840,
          status: "warning",
        },
        oneThird: {
          outletTempC: 63,
          availablePressurePa: 837,
          status: "warning",
        },
      },
      {
        inletTempC: 55,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 82,
          availablePressurePa: 845,
          status: "warning",
        },
        oneThird: {
          outletTempC: 68,
          availablePressurePa: 842,
          status: "warning",
        },
      },
      {
        inletTempC: 60,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 73,
          availablePressurePa: 848,
          status: "warning",
        },
      },
      {
        inletTempC: 65,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 79,
          availablePressurePa: 854,
          status: "warning",
        },
      },
      {
        inletTempC: 70,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-250-12000",
    airFlowM3h: 12000,
    fanStaticPressurePa: 949,
    powerLevels: {
      full: { label: "Полная мощность", kw: 247.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 165 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 82.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 21, availablePressurePa: 841, status: "normal" },
        twoThirds: {
          outletTempC: 3,
          availablePressurePa: 837,
          status: "normal",
        },
        oneThird: {
          outletTempC: -14,
          availablePressurePa: 833,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 27, availablePressurePa: 847, status: "normal" },
        twoThirds: {
          outletTempC: 9,
          availablePressurePa: 843,
          status: "normal",
        },
        oneThird: {
          outletTempC: -9,
          availablePressurePa: 839,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 33, availablePressurePa: 852, status: "normal" },
        twoThirds: {
          outletTempC: 14,
          availablePressurePa: 849,
          status: "normal",
        },
        oneThird: {
          outletTempC: -3,
          availablePressurePa: 845,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 39, availablePressurePa: 857, status: "normal" },
        twoThirds: {
          outletTempC: 20,
          availablePressurePa: 854,
          status: "normal",
        },
        oneThird: {
          outletTempC: 2,
          availablePressurePa: 851,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 46, availablePressurePa: 862, status: "warning" },
        twoThirds: {
          outletTempC: 26,
          availablePressurePa: 859,
          status: "normal",
        },
        oneThird: {
          outletTempC: 7,
          availablePressurePa: 856,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 52, availablePressurePa: 867, status: "warning" },
        twoThirds: {
          outletTempC: 31,
          availablePressurePa: 864,
          status: "normal",
        },
        oneThird: {
          outletTempC: 13,
          availablePressurePa: 861,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 58, availablePressurePa: 871, status: "warning" },
        twoThirds: {
          outletTempC: 37,
          availablePressurePa: 868,
          status: "normal",
        },
        oneThird: {
          outletTempC: 18,
          availablePressurePa: 866,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 64, availablePressurePa: 875, status: "warning" },
        twoThirds: {
          outletTempC: 43,
          availablePressurePa: 872,
          status: "warning",
        },
        oneThird: {
          outletTempC: 23,
          availablePressurePa: 870,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 48,
          availablePressurePa: 876,
          status: "warning",
        },
        oneThird: {
          outletTempC: 29,
          availablePressurePa: 874,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 54,
          availablePressurePa: 880,
          status: "warning",
        },
        oneThird: {
          outletTempC: 34,
          availablePressurePa: 877,
          status: "warning",
        },
      },
      {
        inletTempC: 20,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 60,
          availablePressurePa: 883,
          status: "warning",
        },
        oneThird: {
          outletTempC: 39,
          availablePressurePa: 881,
          status: "warning",
        },
      },
      {
        inletTempC: 25,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 45,
          availablePressurePa: 885,
          status: "warning",
        },
      },
      {
        inletTempC: 30,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 50,
          availablePressurePa: 889,
          status: "warning",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 55,
          availablePressurePa: 892,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-250-13000",
    airFlowM3h: 13000,
    fanStaticPressurePa: 851,
    powerLevels: {
      full: { label: "Полная мощность", kw: 247.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 165 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 82.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 17, availablePressurePa: 724, status: "normal" },
        twoThirds: {
          outletTempC: 0,
          availablePressurePa: 720,
          status: "normal",
        },
        oneThird: {
          outletTempC: -15,
          availablePressurePa: 716,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 23, availablePressurePa: 732, status: "normal" },
        twoThirds: {
          outletTempC: 6,
          availablePressurePa: 728,
          status: "normal",
        },
        oneThird: {
          outletTempC: -10,
          availablePressurePa: 724,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 29, availablePressurePa: 738, status: "normal" },
        twoThirds: {
          outletTempC: 11,
          availablePressurePa: 734,
          status: "normal",
        },
        oneThird: {
          outletTempC: -5,
          availablePressurePa: 731,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 35, availablePressurePa: 744, status: "normal" },
        twoThirds: {
          outletTempC: 17,
          availablePressurePa: 741,
          status: "normal",
        },
        oneThird: {
          outletTempC: 0,
          availablePressurePa: 737,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 41, availablePressurePa: 750, status: "normal" },
        twoThirds: {
          outletTempC: 23,
          availablePressurePa: 747,
          status: "normal",
        },
        oneThird: {
          outletTempC: 6,
          availablePressurePa: 743,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 47, availablePressurePa: 755, status: "warning" },
        twoThirds: {
          outletTempC: 28,
          availablePressurePa: 752,
          status: "normal",
        },
        oneThird: {
          outletTempC: 11,
          availablePressurePa: 749,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 53, availablePressurePa: 760, status: "warning" },
        twoThirds: {
          outletTempC: 34,
          availablePressurePa: 757,
          status: "normal",
        },
        oneThird: {
          outletTempC: 16,
          availablePressurePa: 754,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 59, availablePressurePa: 765, status: "warning" },
        twoThirds: {
          outletTempC: 39,
          availablePressurePa: 762,
          status: "normal",
        },
        oneThird: {
          outletTempC: 22,
          availablePressurePa: 759,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 65, availablePressurePa: 769, status: "warning" },
        twoThirds: {
          outletTempC: 45,
          availablePressurePa: 766,
          status: "warning",
        },
        oneThird: {
          outletTempC: 27,
          availablePressurePa: 763,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 51,
          availablePressurePa: 770,
          status: "warning",
        },
        oneThird: {
          outletTempC: 32,
          availablePressurePa: 766,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 56,
          availablePressurePa: 774,
          status: "warning",
        },
        oneThird: {
          outletTempC: 38,
          availablePressurePa: 772,
          status: "warning",
        },
      },
      {
        inletTempC: 25,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 62,
          availablePressurePa: 778,
          status: "warning",
        },
        oneThird: {
          outletTempC: 43,
          availablePressurePa: 775,
          status: "warning",
        },
      },
      {
        inletTempC: 30,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 48,
          availablePressurePa: 779,
          status: "warning",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 53,
          availablePressurePa: 782,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 59,
          availablePressurePa: 785,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-250-14000",
    airFlowM3h: 14000,
    fanStaticPressurePa: 772,
    powerLevels: {
      full: { label: "Полная мощность", kw: 247.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 165 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 82.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 13, availablePressurePa: 626, status: "normal" },
        twoThirds: {
          outletTempC: -2,
          availablePressurePa: 622,
          status: "normal",
        },
        oneThird: {
          outletTempC: -17,
          availablePressurePa: 617,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 19, availablePressurePa: 634, status: "normal" },
        twoThirds: {
          outletTempC: 3,
          availablePressurePa: 630,
          status: "normal",
        },
        oneThird: {
          outletTempC: -11,
          availablePressurePa: 626,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 25, availablePressurePa: 642, status: "normal" },
        twoThirds: {
          outletTempC: 9,
          availablePressurePa: 638,
          status: "normal",
        },
        oneThird: {
          outletTempC: -6,
          availablePressurePa: 634,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 31, availablePressurePa: 649, status: "normal" },
        twoThirds: {
          outletTempC: 14,
          availablePressurePa: 645,
          status: "normal",
        },
        oneThird: {
          outletTempC: -1,
          availablePressurePa: 641,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 37, availablePressurePa: 655, status: "normal" },
        twoThirds: {
          outletTempC: 20,
          availablePressurePa: 652,
          status: "normal",
        },
        oneThird: {
          outletTempC: 5,
          availablePressurePa: 648,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 43, availablePressurePa: 661, status: "normal" },
        twoThirds: {
          outletTempC: 26,
          availablePressurePa: 658,
          status: "normal",
        },
        oneThird: {
          outletTempC: 10,
          availablePressurePa: 655,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 49, availablePressurePa: 667, status: "normal" },
        twoThirds: {
          outletTempC: 31,
          availablePressurePa: 664,
          status: "normal",
        },
        oneThird: {
          outletTempC: 15,
          availablePressurePa: 661,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 55, availablePressurePa: 672, status: "warning" },
        twoThirds: {
          outletTempC: 37,
          availablePressurePa: 669,
          status: "normal",
        },
        oneThird: {
          outletTempC: 20,
          availablePressurePa: 666,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 60, availablePressurePa: 677, status: "warning" },
        twoThirds: {
          outletTempC: 42,
          availablePressurePa: 674,
          status: "normal",
        },
        oneThird: {
          outletTempC: 26,
          availablePressurePa: 672,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 66, availablePressurePa: 682, status: "warning" },
        twoThirds: {
          outletTempC: 48,
          availablePressurePa: 679,
          status: "warning",
        },
        oneThird: {
          outletTempC: 31,
          availablePressurePa: 676,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 72, availablePressurePa: 686, status: "warning" },
        twoThirds: {
          outletTempC: 53,
          availablePressurePa: 683,
          status: "warning",
        },
        oneThird: {
          outletTempC: 36,
          availablePressurePa: 681,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 59,
          availablePressurePa: 688,
          status: "warning",
        },
        oneThird: {
          outletTempC: 41,
          availablePressurePa: 685,
          status: "warning",
        },
      },
      {
        inletTempC: 30,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 65,
          availablePressurePa: 692,
          status: "warning",
        },
        oneThird: {
          outletTempC: 47,
          availablePressurePa: 689,
          status: "warning",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 70,
          availablePressurePa: 695,
          status: "warning",
        },
        oneThird: {
          outletTempC: 52,
          availablePressurePa: 693,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 57,
          availablePressurePa: 696,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 68,
          availablePressurePa: 703,
          status: "warning",
        },
      },
      {
        inletTempC: 50,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-250-15000",
    airFlowM3h: 15000,
    fanStaticPressurePa: 682,
    powerLevels: {
      full: { label: "Полная мощность", kw: 247.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 165 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 82.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 10, availablePressurePa: 515, status: "normal" },
        twoThirds: {
          outletTempC: -4,
          availablePressurePa: 511,
          status: "normal",
        },
        oneThird: {
          outletTempC: -18,
          availablePressurePa: 506,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 16, availablePressurePa: 525, status: "normal" },
        twoThirds: {
          outletTempC: 1,
          availablePressurePa: 520,
          status: "normal",
        },
        oneThird: {
          outletTempC: -12,
          availablePressurePa: 516,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 22, availablePressurePa: 533, status: "normal" },
        twoThirds: {
          outletTempC: 7,
          availablePressurePa: 529,
          status: "normal",
        },
        oneThird: {
          outletTempC: -7,
          availablePressurePa: 525,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 28, availablePressurePa: 541, status: "normal" },
        twoThirds: {
          outletTempC: 12,
          availablePressurePa: 537,
          status: "normal",
        },
        oneThird: {
          outletTempC: -2,
          availablePressurePa: 534,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 34, availablePressurePa: 549, status: "normal" },
        twoThirds: {
          outletTempC: 18,
          availablePressurePa: 545,
          status: "normal",
        },
        oneThird: {
          outletTempC: 3,
          availablePressurePa: 541,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 39, availablePressurePa: 556, status: "normal" },
        twoThirds: {
          outletTempC: 23,
          availablePressurePa: 552,
          status: "normal",
        },
        oneThird: {
          outletTempC: 9,
          availablePressurePa: 549,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 45, availablePressurePa: 562, status: "normal" },
        twoThirds: {
          outletTempC: 29,
          availablePressurePa: 559,
          status: "normal",
        },
        oneThird: {
          outletTempC: 14,
          availablePressurePa: 556,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 51, availablePressurePa: 568, status: "normal" },
        twoThirds: {
          outletTempC: 34,
          availablePressurePa: 565,
          status: "normal",
        },
        oneThird: {
          outletTempC: 19,
          availablePressurePa: 562,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 57, availablePressurePa: 574, status: "warning" },
        twoThirds: {
          outletTempC: 40,
          availablePressurePa: 571,
          status: "normal",
        },
        oneThird: {
          outletTempC: 25,
          availablePressurePa: 568,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 63, availablePressurePa: 579, status: "warning" },
        twoThirds: {
          outletTempC: 45,
          availablePressurePa: 576,
          status: "normal",
        },
        oneThird: {
          outletTempC: 30,
          availablePressurePa: 573,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 68, availablePressurePa: 584, status: "warning" },
        twoThirds: {
          outletTempC: 51,
          availablePressurePa: 581,
          status: "warning",
        },
        oneThird: {
          outletTempC: 35,
          availablePressurePa: 578,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 74, availablePressurePa: 589, status: "warning" },
        twoThirds: {
          outletTempC: 57,
          availablePressurePa: 586,
          status: "warning",
        },
        oneThird: {
          outletTempC: 40,
          availablePressurePa: 583,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 62,
          availablePressurePa: 590,
          status: "warning",
        },
        oneThird: {
          outletTempC: 45,
          availablePressurePa: 587,
          status: "warning",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 68,
          availablePressurePa: 594,
          status: "warning",
        },
        oneThird: {
          outletTempC: 51,
          availablePressurePa: 591,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 73,
          availablePressurePa: 598,
          status: "warning",
        },
        oneThird: {
          outletTempC: 56,
          availablePressurePa: 595,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 61,
          availablePressurePa: 599,
          status: "warning",
        },
      },
      {
        inletTempC: 50,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 67,
          availablePressurePa: 602,
          status: "warning",
        },
      },
      {
        inletTempC: 55,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-250-16000",
    airFlowM3h: 16000,
    fanStaticPressurePa: 610,
    powerLevels: {
      full: { label: "Полная мощность", kw: 247.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 165 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 82.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 7, availablePressurePa: 421, status: "normal" },
        twoThirds: {
          outletTempC: -6,
          availablePressurePa: 417,
          status: "normal",
        },
        oneThird: {
          outletTempC: -18,
          availablePressurePa: 412,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 13, availablePressurePa: 432, status: "normal" },
        twoThirds: {
          outletTempC: -1,
          availablePressurePa: 427,
          status: "normal",
        },
        oneThird: {
          outletTempC: -13,
          availablePressurePa: 423,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 19, availablePressurePa: 442, status: "normal" },
        twoThirds: {
          outletTempC: 5,
          availablePressurePa: 437,
          status: "normal",
        },
        oneThird: {
          outletTempC: -8,
          availablePressurePa: 433,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 25, availablePressurePa: 451, status: "normal" },
        twoThirds: {
          outletTempC: 10,
          availablePressurePa: 447,
          status: "normal",
        },
        oneThird: {
          outletTempC: -3,
          availablePressurePa: 443,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 31, availablePressurePa: 459, status: "normal" },
        twoThirds: {
          outletTempC: 16,
          availablePressurePa: 455,
          status: "normal",
        },
        oneThird: {
          outletTempC: 3,
          availablePressurePa: 451,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 36, availablePressurePa: 467, status: "normal" },
        twoThirds: {
          outletTempC: 21,
          availablePressurePa: 463,
          status: "normal",
        },
        oneThird: {
          outletTempC: 8,
          availablePressurePa: 460,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 42, availablePressurePa: 474, status: "normal" },
        twoThirds: {
          outletTempC: 27,
          availablePressurePa: 471,
          status: "normal",
        },
        oneThird: {
          outletTempC: 13,
          availablePressurePa: 467,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 48, availablePressurePa: 481, status: "normal" },
        twoThirds: {
          outletTempC: 32,
          availablePressurePa: 478,
          status: "normal",
        },
        oneThird: {
          outletTempC: 18,
          availablePressurePa: 475,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 54, availablePressurePa: 488, status: "normal" },
        twoThirds: {
          outletTempC: 38,
          availablePressurePa: 484,
          status: "normal",
        },
        oneThird: {
          outletTempC: 24,
          availablePressurePa: 482,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 59, availablePressurePa: 493, status: "warning" },
        twoThirds: {
          outletTempC: 43,
          availablePressurePa: 490,
          status: "normal",
        },
        oneThird: {
          outletTempC: 29,
          availablePressurePa: 487,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 65, availablePressurePa: 499, status: "warning" },
        twoThirds: {
          outletTempC: 49,
          availablePressurePa: 496,
          status: "normal",
        },
        oneThird: {
          outletTempC: 34,
          availablePressurePa: 493,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 71, availablePressurePa: 504, status: "warning" },
        twoThirds: {
          outletTempC: 54,
          availablePressurePa: 501,
          status: "warning",
        },
        oneThird: {
          outletTempC: 39,
          availablePressurePa: 499,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: { outletTempC: 77, availablePressurePa: 509, status: "warning" },
        twoThirds: {
          outletTempC: 60,
          availablePressurePa: 506,
          status: "warning",
        },
        oneThird: {
          outletTempC: 44,
          availablePressurePa: 504,
          status: "normal",
        },
      },
      {
        inletTempC: 35,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 65,
          availablePressurePa: 511,
          status: "warning",
        },
        oneThird: {
          outletTempC: 50,
          availablePressurePa: 509,
          status: "warning",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 71,
          availablePressurePa: 516,
          status: "warning",
        },
        oneThird: {
          outletTempC: 55,
          availablePressurePa: 513,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 76,
          availablePressurePa: 520,
          status: "warning",
        },
        oneThird: {
          outletTempC: 60,
          availablePressurePa: 517,
          status: "warning",
        },
      },
      {
        inletTempC: 50,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 65,
          availablePressurePa: 521,
          status: "warning",
        },
      },
      {
        inletTempC: 55,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 71,
          availablePressurePa: 524,
          status: "warning",
        },
      },
      {
        inletTempC: 60,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-250-17000",
    airFlowM3h: 17000,
    fanStaticPressurePa: 547,
    powerLevels: {
      full: { label: "Полная мощность", kw: 247.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 165 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 82.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 5, availablePressurePa: 335, status: "normal" },
        twoThirds: {
          outletTempC: -8,
          availablePressurePa: 330,
          status: "normal",
        },
        oneThird: {
          outletTempC: -19,
          availablePressurePa: 325,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 11, availablePressurePa: 347, status: "normal" },
        twoThirds: {
          outletTempC: -2,
          availablePressurePa: 342,
          status: "normal",
        },
        oneThird: {
          outletTempC: -14,
          availablePressurePa: 338,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 17, availablePressurePa: 358, status: "normal" },
        twoThirds: {
          outletTempC: 3,
          availablePressurePa: 354,
          status: "normal",
        },
        oneThird: {
          outletTempC: -9,
          availablePressurePa: 349,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 22, availablePressurePa: 368, status: "normal" },
        twoThirds: {
          outletTempC: 9,
          availablePressurePa: 364,
          status: "normal",
        },
        oneThird: {
          outletTempC: -3,
          availablePressurePa: 360,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 28, availablePressurePa: 378, status: "normal" },
        twoThirds: {
          outletTempC: 14,
          availablePressurePa: 374,
          status: "normal",
        },
        oneThird: {
          outletTempC: 2,
          availablePressurePa: 370,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 34, availablePressurePa: 387, status: "normal" },
        twoThirds: {
          outletTempC: 20,
          availablePressurePa: 383,
          status: "normal",
        },
        oneThird: {
          outletTempC: 7,
          availablePressurePa: 379,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 39, availablePressurePa: 395, status: "normal" },
        twoThirds: {
          outletTempC: 25,
          availablePressurePa: 391,
          status: "normal",
        },
        oneThird: {
          outletTempC: 12,
          availablePressurePa: 387,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 45, availablePressurePa: 402, status: "normal" },
        twoThirds: {
          outletTempC: 31,
          availablePressurePa: 399,
          status: "normal",
        },
        oneThird: {
          outletTempC: 17,
          availablePressurePa: 395,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 51, availablePressurePa: 409, status: "normal" },
        twoThirds: {
          outletTempC: 36,
          availablePressurePa: 406,
          status: "normal",
        },
        oneThird: {
          outletTempC: 23,
          availablePressurePa: 403,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 57, availablePressurePa: 416, status: "normal" },
        twoThirds: {
          outletTempC: 42,
          availablePressurePa: 413,
          status: "normal",
        },
        oneThird: {
          outletTempC: 28,
          availablePressurePa: 410,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 62, availablePressurePa: 422, status: "warning" },
        twoThirds: {
          outletTempC: 47,
          availablePressurePa: 419,
          status: "normal",
        },
        oneThird: {
          outletTempC: 33,
          availablePressurePa: 416,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 68, availablePressurePa: 428, status: "warning" },
        twoThirds: {
          outletTempC: 53,
          availablePressurePa: 425,
          status: "normal",
        },
        oneThird: {
          outletTempC: 38,
          availablePressurePa: 422,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: { outletTempC: 74, availablePressurePa: 434, status: "warning" },
        twoThirds: {
          outletTempC: 58,
          availablePressurePa: 431,
          status: "warning",
        },
        oneThird: {
          outletTempC: 44,
          availablePressurePa: 428,
          status: "normal",
        },
      },
      {
        inletTempC: 35,
        full: { outletTempC: 80, availablePressurePa: 439, status: "warning" },
        twoThirds: {
          outletTempC: 63,
          availablePressurePa: 436,
          status: "warning",
        },
        oneThird: {
          outletTempC: 49,
          availablePressurePa: 433,
          status: "normal",
        },
      },
      {
        inletTempC: 40,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 68,
          availablePressurePa: 441,
          status: "warning",
        },
        oneThird: {
          outletTempC: 54,
          availablePressurePa: 438,
          status: "warning",
        },
      },
      {
        inletTempC: 45,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: 74,
          availablePressurePa: 445,
          status: "warning",
        },
        oneThird: {
          outletTempC: 60,
          availablePressurePa: 442,
          status: "warning",
        },
      },
      {
        inletTempC: 50,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 65,
          availablePressurePa: 446,
          status: "warning",
        },
      },
      {
        inletTempC: 55,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 70,
          availablePressurePa: 450,
          status: "warning",
        },
      },
      {
        inletTempC: 60,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 75,
          availablePressurePa: 453,
          status: "warning",
        },
      },
      {
        inletTempC: 65,
        full: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        twoThirds: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
];
