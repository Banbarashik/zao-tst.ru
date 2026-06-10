import type {
  WaterCalculatorInputs,
  WaterCalculatorResults,
  SteamCalculatorInputs,
  SteamCalculatorResults,
  WaterRowCoefficients,
  SteamRowCoefficients,
  CoolantType,
} from "@/types/pritochnye-calculator";
import {
  WATER_MODELS,
  STEAM_MODELS,
  STEAM_SATURATION_TEMP,
  STEAM_VAPORIZATION_HEAT,
  type SteamPressure,
} from "@/data/pritochnye-calculator-models";

// ─── Водяной калорифер ────────────────────────────────────────────────────────

/**
 * Плотность теплоносителя, кг/м³
 * Формулы идентичны для всех водяных моделей.
 */
function coolantDensity(
  coolant: CoolantType,
  glycolConc: number, // доля 0–1
  meanCoolantT: number,
): number {
  const T = meanCoolantT;
  const c = glycolConc;
  const K = 273.15;

  if (coolant === "water") {
    return (
      999.840377 +
      0.0611638 * T -
      0.0077702 * T ** 2 +
      0.00004266 * T ** 3 -
      0.00000012 * T ** 4
    );
  }
  if (coolant === "ethyleneGlycol") {
    return (
      658.49825 -
      54.81501 * c +
      (664.71643 * K) / (T + K) +
      (232.72605 * c * K) / (T + K) -
      322.61661 * (K / (T + K)) ** 2
    );
  }
  // propyleneGlycol
  return (
    508.41109 -
    182.4082 * c +
    (965.76507 * K) / (T + K) +
    (280.29104 * c * K) / (T + K) -
    472.2551 * (K / (T + K)) ** 2
  );
}

/**
 * Теплоёмкость теплоносителя, Дж/(кг·К)
 */
function coolantHeatCapacity(
  coolant: CoolantType,
  glycolConc: number,
  meanCoolantT: number,
): number {
  const T = meanCoolantT;
  const c = glycolConc;
  const K = 273.15;

  if (coolant === "water") {
    return (
      4216.55956404788 -
      3.41468886028714 * T +
      0.118928750860574 * T ** 2 -
      0.0021884779894615 * T ** 3 +
      0.0000237891891163297 * T ** 4 -
      1.38782227132789e-7 * T ** 5 +
      3.43018824949952e-10 * T ** 6
    );
  }
  if (coolant === "ethyleneGlycol") {
    return (
      (5.36449 +
        0.78863 * c -
        (2.59001 * K) / (T + K) -
        (2.73187 * c * K) / (T + K) +
        1.43759 * (K / (T + K)) ** 2) *
      1000
    );
  }
  // propyleneGlycol
  return (
    (4.47642 +
      0.60863 * c -
      (0.71497 * K) / (T + K) -
      (1.93855 * c * K) / (T + K) +
      0.47873 * (K / (T + K)) ** 2) *
    1000
  );
}

export function calculateWater(
  inputs: WaterCalculatorInputs,
): WaterCalculatorResults {
  const model = WATER_MODELS[inputs.modelId];
  if (!model) throw new Error(`Неизвестная модель: ${inputs.modelId}`);

  const coeff = model.rows[inputs.rowCount] as WaterRowCoefficients;
  const [F1, F2, F3, F4, F5, F6, F7, F8, F9] = coeff;

  const {
    airVolume: B6,
    airInputT: B7,
    airOutputT: B8,
    coolantInputT: B4,
    coolantOutputT: B5,
    coolant,
    glycolConcentration,
  } = inputs;

  const glycolFraction = glycolConcentration / 100;

  // Средние температуры
  const meanAirT = (B7 + B8) / 2; // B17
  const meanCoolantT = (B4 + B5) / 2; // B21

  // Плотность воздуха при средней температуре
  const airDensity = 353 / (273.15 + meanAirT); // B18
  const airMassFlow = B6 * airDensity; // B19, кг/ч

  // Свойства теплоносителя
  const density = coolantDensity(coolant, glycolFraction, meanCoolantT); // B22
  const heatCap = coolantHeatCapacity(coolant, glycolFraction, meanCoolantT); // B23

  // Скорости
  const airMassVelocity = airMassFlow / 3600 / F2; // B10, кг/(м²·с)
  const requiredCoolantFlow = // B26 (расчётный)
    (((((airMassFlow / 3600) * 1005 * (B8 - B7)) / 1000) * 1000) /
      (heatCap * (B4 - B5))) *
    3600;
  const coolantVelocity = requiredCoolantFlow / 3600 / (density * F3); // B27

  // Коэффициент теплоотдачи
  const alpha = F5 * airMassVelocity ** F6 * coolantVelocity ** F7; // B29

  // Средний температурный напор (арифметика для водяных)
  const deltaT1 = B4 - B8; // B30
  const deltaT2 = B5 - B7; // B31
  const meanDeltaT = (deltaT1 + deltaT2) / 2; // B32

  // Тепловая мощность (расчётная)
  const thermalPower = (alpha * F1 * meanDeltaT) / 1000; // B15, кВт

  // Запас поверхности нагрева
  const requiredPower = ((airMassFlow / 3600) * 1005 * (B8 - B7)) / 1000; // B25
  const heatingAreaReserve =
    ((thermalPower - requiredPower) / requiredPower) * 100; // B9

  // Производные результаты
  const actualCoolantFlow =
    ((thermalPower * 1000) / (heatCap * (B4 - B5))) * 3600; // B14
  const actualCoolantVelocity = actualCoolantFlow / 3600 / (density * F3); // B11
  const aerodynamicResistance = F8 * airMassVelocity ** F9; // B12
  const hydraulicResistance = F4 * actualCoolantVelocity ** 2; // B13

  return {
    heatingAreaReserve,
    airMassVelocity,
    coolantVelocity: actualCoolantVelocity,
    aerodynamicResistance,
    hydraulicResistance,
    coolantFlowRate: actualCoolantFlow,
    thermalPower,
  };
}

// ─── Паровой калорифер ────────────────────────────────────────────────────────

export function calculateSteam(
  inputs: SteamCalculatorInputs,
): SteamCalculatorResults {
  const model = STEAM_MODELS[inputs.modelId];
  if (!model) throw new Error(`Неизвестная модель: ${inputs.modelId}`);

  const coeff = model.rows[inputs.rowCount] as SteamRowCoefficients;
  const [F1, F2, , F5, F6, F7, F8, F9] = coeff; // F3 не используется в паровых

  const {
    airVolume: B3,
    airInputT: B4,
    airOutputT: B5,
    steamPressure: B7,
  } = inputs;

  const pressure = B7 as SteamPressure;
  const saturationT = STEAM_SATURATION_TEMP[pressure]; // B23
  const vaporizationH = STEAM_VAPORIZATION_HEAT[pressure]; // B22

  // Плотность и массовый поток воздуха
  const meanAirT = (B4 + B5) / 2; // B18
  const airDensity = 353 / (273.15 + meanAirT); // B19
  const airMassFlow = B3 * airDensity; // B20, кг/ч

  // Массовая скорость воздуха
  const airMassVelocity = airMassFlow / 3600 / F2; // B15, кг/(м²·с)

  // Коэффициент теплоотдачи
  const alpha = F5 * airMassVelocity ** F6 * F2 ** F7; // B28
  // Примечание: в паровых F7 ≤ 0, множитель F2^F7 — поправка на геометрию

  // Логарифмический температурный напор
  const deltaT1 = saturationT - B4; // B29
  const deltaT2 = saturationT - B5; // B30
  const lmtd = (deltaT1 - deltaT2) / Math.log(deltaT1 / deltaT2); // B31

  // Тепловая мощность (расчётная)
  const thermalPower = (alpha * F1 * lmtd) / 1000; // B11, кВт

  // Запас поверхности нагрева
  const requiredPower = ((airMassFlow / 3600) * 1005 * (B5 - B4)) / 1000; // B25
  const heatingAreaReserve =
    ((thermalPower - requiredPower) / requiredPower) * 100; // B9

  // Расход пара
  const steamConsumption = ((thermalPower * 1000) / vaporizationH) * 3600; // B12

  // Аэродинамическое сопротивление
  const aerodynamicResistance = F8 * airMassVelocity ** F9; // B14

  return {
    heatingAreaReserve,
    thermalPower,
    steamConsumption,
    aerodynamicResistance,
    airMassVelocity,
  };
}
