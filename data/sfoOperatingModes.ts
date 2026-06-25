import type { SfoPowerGroup } from "@/types/sfoOperatingModes";

export const sfoOperatingModes: SfoPowerGroup[] = [
  {
    powerKw: 7.5,
    configurations: [
      {
        model: "СФО-16",
        sections: 1,
        airflow: [1800, 2200],
        inletTemp: [-45, 25],
        outletTemp: [-33, 37],
        heatingDelta: [10, 15],
      },
      {
        model: "СФО-25",
        sections: 1,
        airflow: [1700, 2500],
        inletTemp: [-45, 35],
        outletTemp: [-36, 43],
        heatingDelta: [6, 10],
      },
    ],
  },
  {
    powerKw: 15,
    configurations: [
      {
        model: "СФО-16",
        sections: 2,
        airflow: [1800, 2200],
        inletTemp: [-45, 20],
        outletTemp: [-27, 39],
        heatingDelta: [15, 22],
      },
      {
        model: "СФО-25",
        sections: 2,
        airflow: [1800, 2500],
        inletTemp: [-45, 30],
        outletTemp: [-27, 47],
        heatingDelta: [13, 20],
      },
      {
        model: "СФО-40",
        sections: 1,
        airflow: [2000, 4000],
        inletTemp: [-45, 55],
        outletTemp: [-29, 66],
        heatingDelta: [8, 14],
      },
    ],
  },
  {
    powerKw: 22.5,
    configurations: [
      {
        model: "СФО-25",
        sections: 3,
        airflow: [2000, 2500],
        inletTemp: [-45, 20],
        outletTemp: [-20, 45],
        heatingDelta: [20, 31],
      },
      {
        model: "СФО-60",
        sections: 1,
        airflow: [3000, 5500],
        inletTemp: [-45, 60],
        outletTemp: [-29, 72],
        heatingDelta: [9, 16],
      },
    ],
  },
  {
    powerKw: 30,
    configurations: [
      {
        model: "СФО-40",
        sections: 2,
        airflow: [2500, 4000],
        inletTemp: [-45, 50],
        outletTemp: [-18, 73],
        heatingDelta: [16, 29],
      },
      {
        model: "СФО-100",
        sections: 1,
        airflow: [4000, 7000],
        inletTemp: [-45, 60],
        outletTemp: [-29, 73],
        heatingDelta: [9, 18],
      },
    ],
  },
  {
    powerKw: 45,
    configurations: [
      {
        model: "СФО-40",
        sections: 3,
        airflow: [3000, 4000],
        inletTemp: [-45, 40],
        outletTemp: [-11, 74],
        heatingDelta: [25, 44],
      },
      {
        model: "СФО-60",
        sections: 2,
        airflow: [3500, 5500],
        inletTemp: [-45, 50],
        outletTemp: [-16, 75],
        heatingDelta: [18, 33],
      },
    ],
  },
  {
    powerKw: 52.5,
    configurations: [
      {
        model: "СФО-160",
        sections: 1,
        airflow: [6000, 12000],
        inletTemp: [-45, 65],
        outletTemp: [-25, 79],
        heatingDelta: [9, 19],
      },
    ],
  },
  {
    powerKw: 60,
    configurations: [
      {
        model: "СФО-100",
        sections: 2,
        airflow: [4000, 7000],
        inletTemp: [-45, 50],
        outletTemp: [-11, 76],
        heatingDelta: [18, 35],
      },
    ],
  },
  {
    powerKw: 67.5,
    configurations: [
      {
        model: "СФО-60",
        sections: 3,
        airflow: [4000, 5500],
        inletTemp: [-45, 40],
        outletTemp: [-6, 78],
        heatingDelta: [27, 49],
      },
    ],
  },
  {
    powerKw: 82.5,
    configurations: [
      {
        model: "СФО-250",
        sections: 1,
        airflow: [9000, 18000],
        inletTemp: [-45, 65],
        outletTemp: [-24, 79],
        heatingDelta: [10, 20],
      },
    ],
  },
  {
    powerKw: 90,
    configurations: [
      {
        model: "СФО-100",
        sections: 3,
        airflow: [5000, 7000],
        inletTemp: [-45, 40],
        outletTemp: [-4, 80],
        heatingDelta: [29, 52],
      },
    ],
  },
  {
    powerKw: 105,
    configurations: [
      {
        model: "СФО-160",
        sections: 2,
        airflow: [7000, 12000],
        inletTemp: [-45, 55],
        outletTemp: [-11, 82],
        heatingDelta: [19, 38],
      },
    ],
  },
  {
    powerKw: 157.5,
    configurations: [
      {
        model: "СФО-160",
        sections: 3,
        airflow: [8000, 12000],
        inletTemp: [-45, 45],
        outletTemp: [1, 86],
        heatingDelta: [30, 58],
      },
    ],
  },
  {
    powerKw: 165,
    configurations: [
      {
        model: "СФО-250",
        sections: 2,
        airflow: [10000, 18000],
        inletTemp: [-45, 55],
        outletTemp: [-7, 84],
        heatingDelta: [20, 40],
      },
    ],
  },
  {
    powerKw: 247.5,
    configurations: [
      {
        model: "СФО-250",
        sections: 3,
        airflow: [12000, 18000],
        inletTemp: [-45, 45],
        outletTemp: [3, 88],
        heatingDelta: [31, 60],
      },
    ],
  },
];
