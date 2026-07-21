import type { ModeTableData } from "@/types/sfotcOperatingModes";

export const sfotcOperatingModes: ModeTableData[] = [
  {
    id: "sfotc-25-2000",
    airFlowM3h: 2000,
    fanStaticPressurePa: 780,
    powerLevels: {
      full: { label: "Полная мощность", kw: 22.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 15.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 7.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: -3, availablePressurePa: 623, status: "normal" },
        twoThirds: {
          outletTempC: -13,
          availablePressurePa: 620,
          status: "normal",
        },
        oneThird: {
          outletTempC: -22,
          availablePressurePa: 617,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 2, availablePressurePa: 632, status: "normal" },
        twoThirds: {
          outletTempC: -8,
          availablePressurePa: 629,
          status: "normal",
        },
        oneThird: {
          outletTempC: -17,
          availablePressurePa: 626,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 8, availablePressurePa: 640, status: "normal" },
        twoThirds: {
          outletTempC: -2,
          availablePressurePa: 637,
          status: "normal",
        },
        oneThird: {
          outletTempC: -11,
          availablePressurePa: 635,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 13, availablePressurePa: 648, status: "normal" },
        twoThirds: {
          outletTempC: 3,
          availablePressurePa: 645,
          status: "normal",
        },
        oneThird: {
          outletTempC: -6,
          availablePressurePa: 643,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 19, availablePressurePa: 655, status: "warning" },
        twoThirds: {
          outletTempC: 8,
          availablePressurePa: 652,
          status: "normal",
        },
        oneThird: {
          outletTempC: -1,
          availablePressurePa: 650,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 24, availablePressurePa: 661, status: "warning" },
        twoThirds: {
          outletTempC: 14,
          availablePressurePa: 659,
          status: "warning",
        },
        oneThird: {
          outletTempC: 4,
          availablePressurePa: 657,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 30, availablePressurePa: 667, status: "warning" },
        twoThirds: {
          outletTempC: 19,
          availablePressurePa: 665,
          status: "warning",
        },
        oneThird: {
          outletTempC: 9,
          availablePressurePa: 663,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 36, availablePressurePa: 673, status: "warning" },
        twoThirds: {
          outletTempC: 25,
          availablePressurePa: 671,
          status: "warning",
        },
        oneThird: {
          outletTempC: 14,
          availablePressurePa: 669,
          status: "warning",
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
          outletTempC: 30,
          availablePressurePa: 676,
          status: "warning",
        },
        oneThird: {
          outletTempC: 20,
          availablePressurePa: 674,
          status: "warning",
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
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 25,
          availablePressurePa: 679,
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
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
        oneThird: {
          outletTempC: 30,
          availablePressurePa: 684,
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
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
        },
      },
    ],
  },
  {
    id: "sfotc-25-2300",
    airFlowM3h: 2300,
    fanStaticPressurePa: 580,
    powerLevels: {
      full: { label: "Полная мощность", kw: 22.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 15.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 7.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: -7, availablePressurePa: 376, status: "normal" },
        twoThirds: {
          outletTempC: -15,
          availablePressurePa: 372,
          status: "normal",
        },
        oneThird: {
          outletTempC: -23,
          availablePressurePa: 369,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: -1, availablePressurePa: 387, status: "normal" },
        twoThirds: {
          outletTempC: -10,
          availablePressurePa: 384,
          status: "normal",
        },
        oneThird: {
          outletTempC: -18,
          availablePressurePa: 381,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 4, availablePressurePa: 398, status: "normal" },
        twoThirds: {
          outletTempC: -5,
          availablePressurePa: 395,
          status: "normal",
        },
        oneThird: {
          outletTempC: -13,
          availablePressurePa: 392,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 9, availablePressurePa: 408, status: "normal" },
        twoThirds: {
          outletTempC: 1,
          availablePressurePa: 405,
          status: "normal",
        },
        oneThird: {
          outletTempC: -7,
          availablePressurePa: 402,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 15, availablePressurePa: 417, status: "normal" },
        twoThirds: {
          outletTempC: 6,
          availablePressurePa: 414,
          status: "normal",
        },
        oneThird: {
          outletTempC: -2,
          availablePressurePa: 412,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 20, availablePressurePa: 425, status: "normal" },
        twoThirds: {
          outletTempC: 11,
          availablePressurePa: 423,
          status: "normal",
        },
        oneThird: {
          outletTempC: 3,
          availablePressurePa: 420,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 26, availablePressurePa: 433, status: "warning" },
        twoThirds: {
          outletTempC: 17,
          availablePressurePa: 431,
          status: "normal",
        },
        oneThird: {
          outletTempC: 8,
          availablePressurePa: 428,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 31, availablePressurePa: 441, status: "warning" },
        twoThirds: {
          outletTempC: 22,
          availablePressurePa: 438,
          status: "warning",
        },
        oneThird: {
          outletTempC: 13,
          availablePressurePa: 436,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 37, availablePressurePa: 447, status: "warning" },
        twoThirds: {
          outletTempC: 27,
          availablePressurePa: 445,
          status: "warning",
        },
        oneThird: {
          outletTempC: 18,
          availablePressurePa: 443,
          status: "warning",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 42, availablePressurePa: 454, status: "warning" },
        twoThirds: {
          outletTempC: 32,
          availablePressurePa: 452,
          status: "warning",
        },
        oneThird: {
          outletTempC: 23,
          availablePressurePa: 450,
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
          outletTempC: 38,
          availablePressurePa: 458,
          status: "warning",
        },
        oneThird: {
          outletTempC: 29,
          availablePressurePa: 456,
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
          outletTempC: 34,
          availablePressurePa: 462,
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
          outletTempC: 39,
          availablePressurePa: 467,
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
          outletTempC: null,
          availablePressurePa: null,
          status: "unavailable",
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
    id: "sfotc-25-2500",
    airFlowM3h: 2500,
    fanStaticPressurePa: 444,
    powerLevels: {
      full: { label: "Полная мощность", kw: 22.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 15.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 7.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: -9, availablePressurePa: 205, status: "normal" },
        twoThirds: {
          outletTempC: -16,
          availablePressurePa: 202,
          status: "normal",
        },
        oneThird: {
          outletTempC: -23,
          availablePressurePa: 198,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: -3, availablePressurePa: 219, status: "normal" },
        twoThirds: {
          outletTempC: -11,
          availablePressurePa: 215,
          status: "normal",
        },
        oneThird: {
          outletTempC: -18,
          availablePressurePa: 212,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 2, availablePressurePa: 231, status: "normal" },
        twoThirds: {
          outletTempC: -6,
          availablePressurePa: 228,
          status: "normal",
        },
        oneThird: {
          outletTempC: -13,
          availablePressurePa: 225,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 7, availablePressurePa: 243, status: "normal" },
        twoThirds: {
          outletTempC: -1,
          availablePressurePa: 239,
          status: "normal",
        },
        oneThird: {
          outletTempC: -8,
          availablePressurePa: 237,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 13, availablePressurePa: 253, status: "normal" },
        twoThirds: {
          outletTempC: 5,
          availablePressurePa: 250,
          status: "normal",
        },
        oneThird: {
          outletTempC: -3,
          availablePressurePa: 248,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 18, availablePressurePa: 263, status: "normal" },
        twoThirds: {
          outletTempC: 10,
          availablePressurePa: 260,
          status: "normal",
        },
        oneThird: {
          outletTempC: 2,
          availablePressurePa: 258,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 24, availablePressurePa: 272, status: "normal" },
        twoThirds: {
          outletTempC: 15,
          availablePressurePa: 270,
          status: "normal",
        },
        oneThird: {
          outletTempC: 7,
          availablePressurePa: 267,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 29, availablePressurePa: 281, status: "warning" },
        twoThirds: {
          outletTempC: 20,
          availablePressurePa: 278,
          status: "normal",
        },
        oneThird: {
          outletTempC: 12,
          availablePressurePa: 276,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 35, availablePressurePa: 289, status: "warning" },
        twoThirds: {
          outletTempC: 26,
          availablePressurePa: 287,
          status: "warning",
        },
        oneThird: {
          outletTempC: 18,
          availablePressurePa: 284,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 40, availablePressurePa: 296, status: "warning" },
        twoThirds: {
          outletTempC: 31,
          availablePressurePa: 294,
          status: "warning",
        },
        oneThird: {
          outletTempC: 23,
          availablePressurePa: 292,
          status: "warning",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 45, availablePressurePa: 303, status: "warning" },
        twoThirds: {
          outletTempC: 36,
          availablePressurePa: 301,
          status: "warning",
        },
        oneThird: {
          outletTempC: 28,
          availablePressurePa: 299,
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
          outletTempC: 42,
          availablePressurePa: 308,
          status: "warning",
        },
        oneThird: {
          outletTempC: 33,
          availablePressurePa: 306,
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
          outletTempC: 47,
          availablePressurePa: 314,
          status: "warning",
        },
        oneThird: {
          outletTempC: 38,
          availablePressurePa: 312,
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
          outletTempC: 43,
          availablePressurePa: 318,
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
    id: "sfotc-40-3000",
    airFlowM3h: 3000,
    fanStaticPressurePa: 314,
    powerLevels: {
      full: { label: "Полная мощность", kw: 45.0 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 30.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 15.0 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 6, availablePressurePa: 175, status: "normal" },
        twoThirds: {
          outletTempC: -7,
          availablePressurePa: 171,
          status: "normal",
        },
        oneThird: {
          outletTempC: -19,
          availablePressurePa: 168,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 12, availablePressurePa: 182, status: "normal" },
        twoThirds: {
          outletTempC: -1,
          availablePressurePa: 179,
          status: "normal",
        },
        oneThird: {
          outletTempC: -14,
          availablePressurePa: 176,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 18, availablePressurePa: 190, status: "normal" },
        twoThirds: {
          outletTempC: 4,
          availablePressurePa: 187,
          status: "normal",
        },
        oneThird: {
          outletTempC: -8,
          availablePressurePa: 183,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 24, availablePressurePa: 196, status: "normal" },
        twoThirds: {
          outletTempC: 10,
          availablePressurePa: 193,
          status: "normal",
        },
        oneThird: {
          outletTempC: -3,
          availablePressurePa: 190,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 29, availablePressurePa: 203, status: "normal" },
        twoThirds: {
          outletTempC: 15,
          availablePressurePa: 200,
          status: "normal",
        },
        oneThird: {
          outletTempC: 2,
          availablePressurePa: 197,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 35, availablePressurePa: 208, status: "warning" },
        twoThirds: {
          outletTempC: 21,
          availablePressurePa: 206,
          status: "normal",
        },
        oneThird: {
          outletTempC: 7,
          availablePressurePa: 203,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 41, availablePressurePa: 214, status: "warning" },
        twoThirds: {
          outletTempC: 26,
          availablePressurePa: 211,
          status: "normal",
        },
        oneThird: {
          outletTempC: 13,
          availablePressurePa: 209,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 46, availablePressurePa: 219, status: "warning" },
        twoThirds: {
          outletTempC: 32,
          availablePressurePa: 216,
          status: "warning",
        },
        oneThird: {
          outletTempC: 18,
          availablePressurePa: 214,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 52, availablePressurePa: 223, status: "warning" },
        twoThirds: {
          outletTempC: 37,
          availablePressurePa: 221,
          status: "warning",
        },
        oneThird: {
          outletTempC: 23,
          availablePressurePa: 219,
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
          outletTempC: 43,
          availablePressurePa: 226,
          status: "warning",
        },
        oneThird: {
          outletTempC: 28,
          availablePressurePa: 224,
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
          outletTempC: 48,
          availablePressurePa: 230,
          status: "warning",
        },
        oneThird: {
          outletTempC: 34,
          availablePressurePa: 228,
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
          outletTempC: 39,
          availablePressurePa: 232,
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
          outletTempC: 44,
          availablePressurePa: 236,
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
          outletTempC: 49,
          availablePressurePa: 239,
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
    id: "sfotc-40-3500",
    airFlowM3h: 3500,
    fanStaticPressurePa: 230,
    powerLevels: {
      full: { label: "Полная мощность", kw: 45.0 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 30.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 15.0 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 1, availablePressurePa: 43, status: "normal" },
        twoThirds: {
          outletTempC: -10,
          availablePressurePa: 39,
          status: "normal",
        },
        oneThird: {
          outletTempC: -20,
          availablePressurePa: 35,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 6, availablePressurePa: 54, status: "normal" },
        twoThirds: {
          outletTempC: -5,
          availablePressurePa: 50,
          status: "normal",
        },
        oneThird: {
          outletTempC: -15,
          availablePressurePa: 46,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 12, availablePressurePa: 63, status: "normal" },
        twoThirds: {
          outletTempC: 0,
          availablePressurePa: 60,
          status: "normal",
        },
        oneThird: {
          outletTempC: -10,
          availablePressurePa: 56,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 18, availablePressurePa: 72, status: "normal" },
        twoThirds: {
          outletTempC: 6,
          availablePressurePa: 69,
          status: "normal",
        },
        oneThird: {
          outletTempC: -5,
          availablePressurePa: 66,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 23, availablePressurePa: 81, status: "normal" },
        twoThirds: {
          outletTempC: 11,
          availablePressurePa: 77,
          status: "normal",
        },
        oneThird: { outletTempC: 0, availablePressurePa: 74, status: "normal" },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 29, availablePressurePa: 88, status: "normal" },
        twoThirds: {
          outletTempC: 17,
          availablePressurePa: 85,
          status: "normal",
        },
        oneThird: { outletTempC: 6, availablePressurePa: 82, status: "normal" },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 35, availablePressurePa: 96, status: "normal" },
        twoThirds: {
          outletTempC: 22,
          availablePressurePa: 93,
          status: "normal",
        },
        oneThird: {
          outletTempC: 11,
          availablePressurePa: 90,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 40, availablePressurePa: 102, status: "normal" },
        twoThirds: {
          outletTempC: 28,
          availablePressurePa: 100,
          status: "normal",
        },
        oneThird: {
          outletTempC: 16,
          availablePressurePa: 97,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 46, availablePressurePa: 109, status: "warning" },
        twoThirds: {
          outletTempC: 33,
          availablePressurePa: 106,
          status: "normal",
        },
        oneThird: {
          outletTempC: 21,
          availablePressurePa: 103,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 51, availablePressurePa: 115, status: "warning" },
        twoThirds: {
          outletTempC: 38,
          availablePressurePa: 112,
          status: "normal",
        },
        oneThird: {
          outletTempC: 26,
          availablePressurePa: 109,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 57, availablePressurePa: 120, status: "warning" },
        twoThirds: {
          outletTempC: 44,
          availablePressurePa: 118,
          status: "warning",
        },
        oneThird: {
          outletTempC: 31,
          availablePressurePa: 115,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 63, availablePressurePa: 125, status: "warning" },
        twoThirds: {
          outletTempC: 49,
          availablePressurePa: 123,
          status: "warning",
        },
        oneThird: {
          outletTempC: 37,
          availablePressurePa: 121,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: { outletTempC: 68, availablePressurePa: 130, status: "warning" },
        twoThirds: {
          outletTempC: 55,
          availablePressurePa: 128,
          status: "warning",
        },
        oneThird: {
          outletTempC: 42,
          availablePressurePa: 126,
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
          outletTempC: 60,
          availablePressurePa: 132,
          status: "warning",
        },
        oneThird: {
          outletTempC: 47,
          availablePressurePa: 130,
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
          outletTempC: 65,
          availablePressurePa: 137,
          status: "warning",
        },
        oneThird: {
          outletTempC: 52,
          availablePressurePa: 135,
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
          outletTempC: 58,
          availablePressurePa: 139,
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
          outletTempC: 63,
          availablePressurePa: 143,
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
    id: "sfotc-60-4000",
    airFlowM3h: 4000,
    fanStaticPressurePa: 662,
    powerLevels: {
      full: { label: "Полная мощность", kw: 67.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 45.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 22.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 11, availablePressurePa: 535, status: "normal" },
        twoThirds: {
          outletTempC: -4,
          availablePressurePa: 531,
          status: "normal",
        },
        oneThird: {
          outletTempC: -17,
          availablePressurePa: 528,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 17, availablePressurePa: 542, status: "normal" },
        twoThirds: {
          outletTempC: 2,
          availablePressurePa: 539,
          status: "normal",
        },
        oneThird: {
          outletTempC: -12,
          availablePressurePa: 535,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 23, availablePressurePa: 549, status: "normal" },
        twoThirds: {
          outletTempC: 7,
          availablePressurePa: 545,
          status: "normal",
        },
        oneThird: {
          outletTempC: -7,
          availablePressurePa: 542,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 29, availablePressurePa: 555, status: "normal" },
        twoThirds: {
          outletTempC: 13,
          availablePressurePa: 552,
          status: "normal",
        },
        oneThird: {
          outletTempC: -1,
          availablePressurePa: 549,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 35, availablePressurePa: 560, status: "normal" },
        twoThirds: {
          outletTempC: 19,
          availablePressurePa: 557,
          status: "normal",
        },
        oneThird: {
          outletTempC: 4,
          availablePressurePa: 555,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 40, availablePressurePa: 566, status: "warning" },
        twoThirds: {
          outletTempC: 24,
          availablePressurePa: 563,
          status: "normal",
        },
        oneThird: {
          outletTempC: 9,
          availablePressurePa: 560,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 46, availablePressurePa: 571, status: "warning" },
        twoThirds: {
          outletTempC: 30,
          availablePressurePa: 568,
          status: "normal",
        },
        oneThird: {
          outletTempC: 14,
          availablePressurePa: 565,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 52, availablePressurePa: 575, status: "warning" },
        twoThirds: {
          outletTempC: 35,
          availablePressurePa: 573,
          status: "warning",
        },
        oneThird: {
          outletTempC: 20,
          availablePressurePa: 570,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 58, availablePressurePa: 579, status: "warning" },
        twoThirds: {
          outletTempC: 41,
          availablePressurePa: 577,
          status: "warning",
        },
        oneThird: {
          outletTempC: 25,
          availablePressurePa: 575,
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
          outletTempC: 46,
          availablePressurePa: 581,
          status: "warning",
        },
        oneThird: {
          outletTempC: 30,
          availablePressurePa: 579,
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
          outletTempC: 52,
          availablePressurePa: 585,
          status: "warning",
        },
        oneThird: {
          outletTempC: 35,
          availablePressurePa: 583,
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
          outletTempC: 41,
          availablePressurePa: 587,
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
          outletTempC: 46,
          availablePressurePa: 590,
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
          outletTempC: 51,
          availablePressurePa: 593,
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
    id: "sfotc-60-5000",
    airFlowM3h: 5000,
    fanStaticPressurePa: 489,
    powerLevels: {
      full: { label: "Полная мощность", kw: 67.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 45.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 22.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 2, availablePressurePa: 294, status: "normal" },
        twoThirds: {
          outletTempC: -9,
          availablePressurePa: 290,
          status: "normal",
        },
        oneThird: {
          outletTempC: -20,
          availablePressurePa: 286,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 8, availablePressurePa: 305, status: "normal" },
        twoThirds: {
          outletTempC: -4,
          availablePressurePa: 301,
          status: "normal",
        },
        oneThird: {
          outletTempC: -15,
          availablePressurePa: 297,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 14, availablePressurePa: 315, status: "normal" },
        twoThirds: {
          outletTempC: 2,
          availablePressurePa: 311,
          status: "normal",
        },
        oneThird: {
          outletTempC: -10,
          availablePressurePa: 308,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 19, availablePressurePa: 325, status: "normal" },
        twoThirds: {
          outletTempC: 7,
          availablePressurePa: 321,
          status: "normal",
        },
        oneThird: {
          outletTempC: -4,
          availablePressurePa: 317,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 25, availablePressurePa: 333, status: "normal" },
        twoThirds: {
          outletTempC: 12,
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
        inletTempC: -5,
        full: { outletTempC: 31, availablePressurePa: 342, status: "normal" },
        twoThirds: {
          outletTempC: 18,
          availablePressurePa: 338,
          status: "normal",
        },
        oneThird: {
          outletTempC: 6,
          availablePressurePa: 335,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 36, availablePressurePa: 349, status: "normal" },
        twoThirds: {
          outletTempC: 23,
          availablePressurePa: 346,
          status: "normal",
        },
        oneThird: {
          outletTempC: 11,
          availablePressurePa: 343,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 42, availablePressurePa: 356, status: "normal" },
        twoThirds: {
          outletTempC: 29,
          availablePressurePa: 353,
          status: "normal",
        },
        oneThird: {
          outletTempC: 16,
          availablePressurePa: 350,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 48, availablePressurePa: 362, status: "normal" },
        twoThirds: {
          outletTempC: 34,
          availablePressurePa: 360,
          status: "normal",
        },
        oneThird: {
          outletTempC: 22,
          availablePressurePa: 357,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 53, availablePressurePa: 369, status: "warning" },
        twoThirds: {
          outletTempC: 40,
          availablePressurePa: 366,
          status: "normal",
        },
        oneThird: {
          outletTempC: 27,
          availablePressurePa: 363,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 59, availablePressurePa: 374, status: "warning" },
        twoThirds: {
          outletTempC: 45,
          availablePressurePa: 372,
          status: "normal",
        },
        oneThird: {
          outletTempC: 32,
          availablePressurePa: 369,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 65, availablePressurePa: 380, status: "warning" },
        twoThirds: {
          outletTempC: 50,
          availablePressurePa: 377,
          status: "warning",
        },
        oneThird: {
          outletTempC: 37,
          availablePressurePa: 375,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: { outletTempC: 70, availablePressurePa: 385, status: "warning" },
        twoThirds: {
          outletTempC: 56,
          availablePressurePa: 382,
          status: "warning",
        },
        oneThird: {
          outletTempC: 43,
          availablePressurePa: 380,
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
          outletTempC: 61,
          availablePressurePa: 387,
          status: "warning",
        },
        oneThird: {
          outletTempC: 48,
          availablePressurePa: 385,
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
          outletTempC: 67,
          availablePressurePa: 392,
          status: "warning",
        },
        oneThird: {
          outletTempC: 53,
          availablePressurePa: 390,
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
          outletTempC: 58,
          availablePressurePa: 394,
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
          outletTempC: 63,
          availablePressurePa: 398,
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
    id: "sfotc-60-5500",
    airFlowM3h: 5500,
    fanStaticPressurePa: 400,
    powerLevels: {
      full: { label: "Полная мощность", kw: 67.5 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 45.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 22.5 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: -1, availablePressurePa: 167, status: "normal" },
        twoThirds: {
          outletTempC: -11,
          availablePressurePa: 162,
          status: "normal",
        },
        oneThird: {
          outletTempC: -21,
          availablePressurePa: 157,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 5, availablePressurePa: 175, status: "normal" },
        twoThirds: {
          outletTempC: -6,
          availablePressurePa: 170,
          status: "normal",
        },
        oneThird: {
          outletTempC: -16,
          availablePressurePa: 166,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 10, availablePressurePa: 182, status: "normal" },
        twoThirds: {
          outletTempC: 0,
          availablePressurePa: 178,
          status: "normal",
        },
        oneThird: {
          outletTempC: -11,
          availablePressurePa: 174,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 16, availablePressurePa: 191, status: "normal" },
        twoThirds: {
          outletTempC: 5,
          availablePressurePa: 186,
          status: "normal",
        },
        oneThird: {
          outletTempC: -5,
          availablePressurePa: 182,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 22, availablePressurePa: 197, status: "normal" },
        twoThirds: {
          outletTempC: 10,
          availablePressurePa: 193,
          status: "normal",
        },
        oneThird: {
          outletTempC: 0,
          availablePressurePa: 189,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 27, availablePressurePa: 203, status: "normal" },
        twoThirds: {
          outletTempC: 16,
          availablePressurePa: 199,
          status: "normal",
        },
        oneThird: {
          outletTempC: 5,
          availablePressurePa: 195,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 33, availablePressurePa: 209, status: "normal" },
        twoThirds: {
          outletTempC: 21,
          availablePressurePa: 205,
          status: "normal",
        },
        oneThird: {
          outletTempC: 10,
          availablePressurePa: 201,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 38, availablePressurePa: 214, status: "normal" },
        twoThirds: {
          outletTempC: 26,
          availablePressurePa: 211,
          status: "normal",
        },
        oneThird: {
          outletTempC: 15,
          availablePressurePa: 207,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 44, availablePressurePa: 219, status: "normal" },
        twoThirds: {
          outletTempC: 32,
          availablePressurePa: 216,
          status: "normal",
        },
        oneThird: {
          outletTempC: 21,
          availablePressurePa: 213,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 50, availablePressurePa: 224, status: "normal" },
        twoThirds: {
          outletTempC: 37,
          availablePressurePa: 221,
          status: "normal",
        },
        oneThird: {
          outletTempC: 26,
          availablePressurePa: 218,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 55, availablePressurePa: 229, status: "warning" },
        twoThirds: {
          outletTempC: 43,
          availablePressurePa: 226,
          status: "normal",
        },
        oneThird: {
          outletTempC: 31,
          availablePressurePa: 223,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 61, availablePressurePa: 233, status: "warning" },
        twoThirds: {
          outletTempC: 48,
          availablePressurePa: 230,
          status: "normal",
        },
        oneThird: {
          outletTempC: 36,
          availablePressurePa: 228,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: { outletTempC: 67, availablePressurePa: 237, status: "warning" },
        twoThirds: {
          outletTempC: 53,
          availablePressurePa: 235,
          status: "warning",
        },
        oneThird: {
          outletTempC: 41,
          availablePressurePa: 232,
          status: "normal",
        },
      },
      {
        inletTempC: 35,
        full: { outletTempC: 72, availablePressurePa: 241, status: "warning" },
        twoThirds: {
          outletTempC: 59,
          availablePressurePa: 239,
          status: "warning",
        },
        oneThird: {
          outletTempC: 47,
          availablePressurePa: 236,
          status: "normal",
        },
      },
      {
        inletTempC: 40,
        full: { outletTempC: 78, availablePressurePa: 245, status: "warning" },
        twoThirds: {
          outletTempC: 64,
          availablePressurePa: 243,
          status: "warning",
        },
        oneThird: {
          outletTempC: 52,
          availablePressurePa: 241,
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
          outletTempC: 70,
          availablePressurePa: 247,
          status: "warning",
        },
        oneThird: {
          outletTempC: 57,
          availablePressurePa: 245,
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
          outletTempC: 75,
          availablePressurePa: 251,
          status: "warning",
        },
        oneThird: {
          outletTempC: 62,
          availablePressurePa: 249,
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
          outletTempC: 67,
          availablePressurePa: 253,
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
          outletTempC: 72,
          availablePressurePa: 257,
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
  {
    id: "sfotc-100-5000",
    airFlowM3h: 5000,
    fanStaticPressurePa: 628,
    powerLevels: {
      full: { label: "Полная мощность", kw: 90.0 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 60.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 30.0 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 14, availablePressurePa: 510, status: "normal" },
        twoThirds: {
          outletTempC: -2,
          availablePressurePa: 507,
          status: "normal",
        },
        oneThird: {
          outletTempC: -16,
          availablePressurePa: 503,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 20, availablePressurePa: 517, status: "normal" },
        twoThirds: {
          outletTempC: 4,
          availablePressurePa: 514,
          status: "normal",
        },
        oneThird: {
          outletTempC: -11,
          availablePressurePa: 510,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 26, availablePressurePa: 523, status: "normal" },
        twoThirds: {
          outletTempC: 9,
          availablePressurePa: 520,
          status: "normal",
        },
        oneThird: {
          outletTempC: -6,
          availablePressurePa: 516,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 32, availablePressurePa: 529, status: "normal" },
        twoThirds: {
          outletTempC: 15,
          availablePressurePa: 526,
          status: "normal",
        },
        oneThird: {
          outletTempC: 0,
          availablePressurePa: 523,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 38, availablePressurePa: 534, status: "warning" },
        twoThirds: {
          outletTempC: 21,
          availablePressurePa: 531,
          status: "normal",
        },
        oneThird: {
          outletTempC: 5,
          availablePressurePa: 528,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 44, availablePressurePa: 539, status: "warning" },
        twoThirds: {
          outletTempC: 26,
          availablePressurePa: 536,
          status: "normal",
        },
        oneThird: {
          outletTempC: 10,
          availablePressurePa: 533,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 50, availablePressurePa: 543, status: "warning" },
        twoThirds: {
          outletTempC: 32,
          availablePressurePa: 541,
          status: "normal",
        },
        oneThird: {
          outletTempC: 15,
          availablePressurePa: 538,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 56, availablePressurePa: 548, status: "warning" },
        twoThirds: {
          outletTempC: 37,
          availablePressurePa: 545,
          status: "warning",
        },
        oneThird: {
          outletTempC: 21,
          availablePressurePa: 543,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 61, availablePressurePa: 552, status: "warning" },
        twoThirds: {
          outletTempC: 43,
          availablePressurePa: 549,
          status: "warning",
        },
        oneThird: {
          outletTempC: 26,
          availablePressurePa: 547,
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
          outletTempC: 49,
          availablePressurePa: 553,
          status: "warning",
        },
        oneThird: {
          outletTempC: 31,
          availablePressurePa: 551,
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
          outletTempC: 54,
          availablePressurePa: 557,
          status: "warning",
        },
        oneThird: {
          outletTempC: 37,
          availablePressurePa: 555,
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
          outletTempC: 42,
          availablePressurePa: 558,
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
          outletTempC: 47,
          availablePressurePa: 561,
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
          availablePressurePa: 564,
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
    id: "sfotc-100-6000",
    airFlowM3h: 6000,
    fanStaticPressurePa: 489,
    powerLevels: {
      full: { label: "Полная мощность", kw: 90.0 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 60.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 30.0 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 6, availablePressurePa: 322, status: "normal" },
        twoThirds: {
          outletTempC: -7,
          availablePressurePa: 318,
          status: "normal",
        },
        oneThird: {
          outletTempC: -19,
          availablePressurePa: 314,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 12, availablePressurePa: 332, status: "normal" },
        twoThirds: {
          outletTempC: -1,
          availablePressurePa: 328,
          status: "normal",
        },
        oneThird: {
          outletTempC: -14,
          availablePressurePa: 324,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 18, availablePressurePa: 340, status: "normal" },
        twoThirds: {
          outletTempC: 4,
          availablePressurePa: 336,
          status: "normal",
        },
        oneThird: {
          outletTempC: -8,
          availablePressurePa: 332,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 24, availablePressurePa: 348, status: "normal" },
        twoThirds: {
          outletTempC: 10,
          availablePressurePa: 345,
          status: "normal",
        },
        oneThird: {
          outletTempC: -3,
          availablePressurePa: 341,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 29, availablePressurePa: 356, status: "normal" },
        twoThirds: {
          outletTempC: 15,
          availablePressurePa: 352,
          status: "normal",
        },
        oneThird: {
          outletTempC: 3,
          availablePressurePa: 349,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 35, availablePressurePa: 363, status: "normal" },
        twoThirds: {
          outletTempC: 21,
          availablePressurePa: 359,
          status: "normal",
        },
        oneThird: {
          outletTempC: 8,
          availablePressurePa: 356,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 41, availablePressurePa: 369, status: "normal" },
        twoThirds: {
          outletTempC: 26,
          availablePressurePa: 366,
          status: "normal",
        },
        oneThird: {
          outletTempC: 13,
          availablePressurePa: 363,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 46, availablePressurePa: 375, status: "normal" },
        twoThirds: {
          outletTempC: 32,
          availablePressurePa: 372,
          status: "normal",
        },
        oneThird: {
          outletTempC: 18,
          availablePressurePa: 369,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 52, availablePressurePa: 381, status: "warning" },
        twoThirds: {
          outletTempC: 37,
          availablePressurePa: 378,
          status: "normal",
        },
        oneThird: {
          outletTempC: 24,
          availablePressurePa: 375,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 58, availablePressurePa: 386, status: "warning" },
        twoThirds: {
          outletTempC: 43,
          availablePressurePa: 383,
          status: "normal",
        },
        oneThird: {
          outletTempC: 29,
          availablePressurePa: 381,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 64, availablePressurePa: 391, status: "warning" },
        twoThirds: {
          outletTempC: 48,
          availablePressurePa: 388,
          status: "warning",
        },
        oneThird: {
          outletTempC: 35,
          availablePressurePa: 386,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 69, availablePressurePa: 396, status: "warning" },
        twoThirds: {
          outletTempC: 53,
          availablePressurePa: 393,
          status: "warning",
        },
        oneThird: {
          outletTempC: 40,
          availablePressurePa: 391,
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
          outletTempC: 59,
          availablePressurePa: 398,
          status: "warning",
        },
        oneThird: {
          outletTempC: 45,
          availablePressurePa: 396,
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
          outletTempC: 64,
          availablePressurePa: 402,
          status: "warning",
        },
        oneThird: {
          outletTempC: 50,
          availablePressurePa: 400,
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
          outletTempC: 55,
          availablePressurePa: 404,
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
          availablePressurePa: 408,
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
          availablePressurePa: 411,
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
    id: "sfotc-100-7000",
    airFlowM3h: 7000,
    fanStaticPressurePa: 321,
    powerLevels: {
      full: { label: "Полная мощность", kw: 90.0 },
      twoThirds: { label: "Частичная мощность 2/3", kw: 60.0 },
      oneThird: { label: "Минимальная мощность 1/3", kw: 30.0 },
    },
    rows: [
      {
        inletTempC: -30,
        full: { outletTempC: 1, availablePressurePa: 98, status: "normal" },
        twoThirds: {
          outletTempC: -10,
          availablePressurePa: 93,
          status: "normal",
        },
        oneThird: {
          outletTempC: -20,
          availablePressurePa: 88,
          status: "normal",
        },
      },
      {
        inletTempC: -25,
        full: { outletTempC: 6, availablePressurePa: 110, status: "normal" },
        twoThirds: {
          outletTempC: -5,
          availablePressurePa: 105,
          status: "normal",
        },
        oneThird: {
          outletTempC: -15,
          availablePressurePa: 101,
          status: "normal",
        },
      },
      {
        inletTempC: -20,
        full: { outletTempC: 12, availablePressurePa: 122, status: "normal" },
        twoThirds: {
          outletTempC: 0,
          availablePressurePa: 117,
          status: "normal",
        },
        oneThird: {
          outletTempC: -9,
          availablePressurePa: 112,
          status: "normal",
        },
      },
      {
        inletTempC: -15,
        full: { outletTempC: 18, availablePressurePa: 132, status: "normal" },
        twoThirds: {
          outletTempC: 6,
          availablePressurePa: 127,
          status: "normal",
        },
        oneThird: {
          outletTempC: -4,
          availablePressurePa: 123,
          status: "normal",
        },
      },
      {
        inletTempC: -10,
        full: { outletTempC: 23, availablePressurePa: 142, status: "normal" },
        twoThirds: {
          outletTempC: 11,
          availablePressurePa: 137,
          status: "normal",
        },
        oneThird: {
          outletTempC: 1,
          availablePressurePa: 133,
          status: "normal",
        },
      },
      {
        inletTempC: -5,
        full: { outletTempC: 29, availablePressurePa: 152, status: "normal" },
        twoThirds: {
          outletTempC: 17,
          availablePressurePa: 147,
          status: "normal",
        },
        oneThird: {
          outletTempC: 6,
          availablePressurePa: 143,
          status: "normal",
        },
      },
      {
        inletTempC: 0,
        full: { outletTempC: 35, availablePressurePa: 160, status: "normal" },
        twoThirds: {
          outletTempC: 22,
          availablePressurePa: 155,
          status: "normal",
        },
        oneThird: {
          outletTempC: 11,
          availablePressurePa: 151,
          status: "normal",
        },
      },
      {
        inletTempC: 5,
        full: { outletTempC: 40, availablePressurePa: 168, status: "normal" },
        twoThirds: {
          outletTempC: 28,
          availablePressurePa: 163,
          status: "normal",
        },
        oneThird: {
          outletTempC: 16,
          availablePressurePa: 159,
          status: "normal",
        },
      },
      {
        inletTempC: 10,
        full: { outletTempC: 46, availablePressurePa: 176, status: "normal" },
        twoThirds: {
          outletTempC: 33,
          availablePressurePa: 171,
          status: "normal",
        },
        oneThird: {
          outletTempC: 22,
          availablePressurePa: 167,
          status: "normal",
        },
      },
      {
        inletTempC: 15,
        full: { outletTempC: 51, availablePressurePa: 183, status: "normal" },
        twoThirds: {
          outletTempC: 38,
          availablePressurePa: 178,
          status: "normal",
        },
        oneThird: {
          outletTempC: 27,
          availablePressurePa: 174,
          status: "normal",
        },
      },
      {
        inletTempC: 20,
        full: { outletTempC: 57, availablePressurePa: 190, status: "warning" },
        twoThirds: {
          outletTempC: 44,
          availablePressurePa: 185,
          status: "normal",
        },
        oneThird: {
          outletTempC: 32,
          availablePressurePa: 181,
          status: "normal",
        },
      },
      {
        inletTempC: 25,
        full: { outletTempC: 63, availablePressurePa: 196, status: "warning" },
        twoThirds: {
          outletTempC: 49,
          availablePressurePa: 191,
          status: "normal",
        },
        oneThird: {
          outletTempC: 37,
          availablePressurePa: 187,
          status: "normal",
        },
      },
      {
        inletTempC: 30,
        full: { outletTempC: 68, availablePressurePa: 201, status: "warning" },
        twoThirds: {
          outletTempC: 55,
          availablePressurePa: 196,
          status: "warning",
        },
        oneThird: {
          outletTempC: 42,
          availablePressurePa: 193,
          status: "normal",
        },
      },
      {
        inletTempC: 35,
        full: { outletTempC: 74, availablePressurePa: 207, status: "warning" },
        twoThirds: {
          outletTempC: 60,
          availablePressurePa: 202,
          status: "warning",
        },
        oneThird: {
          outletTempC: 47,
          availablePressurePa: 198,
          status: "normal",
        },
      },
      {
        inletTempC: 40,
        full: { outletTempC: 80, availablePressurePa: 212, status: "warning" },
        twoThirds: {
          outletTempC: 65,
          availablePressurePa: 207,
          status: "warning",
        },
        oneThird: {
          outletTempC: 52,
          availablePressurePa: 203,
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
          outletTempC: 71,
          availablePressurePa: 212,
          status: "warning",
        },
        oneThird: {
          outletTempC: 57,
          availablePressurePa: 208,
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
          outletTempC: 76,
          availablePressurePa: 217,
          status: "warning",
        },
        oneThird: {
          outletTempC: 63,
          availablePressurePa: 213,
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
          outletTempC: 68,
          availablePressurePa: 218,
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
          availablePressurePa: 222,
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
