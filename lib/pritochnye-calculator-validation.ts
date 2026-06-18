import type {
  WaterCalculatorResults,
  SteamCalculatorResults,
} from "@/types/pritochnye-calculator";

/**
 * Valid ranges for water calculator result fields.
 * Format: [min, max]
 */
export const WATER_RESULT_RANGES = {
  heatingAreaReserve: [0, 20] as const,
  airMassVelocity: [1.5, 8] as const,
  coolantVelocity: [0.12, 1.2] as const,
} as const;

/**
 * Valid ranges for steam calculator result fields.
 */
export const STEAM_RESULT_RANGES = {
  heatingAreaReserve: [0, 20] as const,
  airMassVelocity: [1.5, 8] as const,
} as const;

/**
 * Checks if a numeric value is within a valid range.
 * Returns true if value is finite and within [min, max] inclusive.
 */
export function isValueInRange(
  value: number | null | undefined,
  range: readonly [number, number],
): boolean {
  if (value === null || value === undefined || !isFinite(value)) {
    return false;
  }
  return value >= range[0] && value <= range[1];
}

/**
 * Validates all water calculator results and returns true if all are valid.
 * Used for highlighting or warning the user about out-of-range values.
 */
export function validateWaterResults(
  results: WaterCalculatorResults | null,
): Record<keyof WaterCalculatorResults, boolean> {
  if (!results) {
    return {
      heatingAreaReserve: false,
      airMassVelocity: false,
      coolantVelocity: false,
      aerodynamicResistance: false,
      hydraulicResistance: false,
      coolantFlowRate: false,
      thermalPower: false,
    };
  }

  return {
    heatingAreaReserve: isValueInRange(
      results.heatingAreaReserve,
      WATER_RESULT_RANGES.heatingAreaReserve,
    ),
    airMassVelocity: isValueInRange(
      results.airMassVelocity,
      WATER_RESULT_RANGES.airMassVelocity,
    ),
    coolantVelocity: isValueInRange(
      results.coolantVelocity,
      WATER_RESULT_RANGES.coolantVelocity,
    ),
    aerodynamicResistance: true, // No range validation for this field
    hydraulicResistance: true, // No range validation for this field
    coolantFlowRate: true, // No range validation for this field
    thermalPower:
      results.thermalPower !== null && isFinite(results.thermalPower),
  };
}

/**
 * Validates all steam calculator results and returns true if all are valid.
 */
export function validateSteamResults(
  results: SteamCalculatorResults | null,
): Record<keyof SteamCalculatorResults, boolean> {
  if (!results) {
    return {
      heatingAreaReserve: false,
      thermalPower: false,
      steamConsumption: false,
      aerodynamicResistance: false,
      airMassVelocity: false,
    };
  }

  return {
    heatingAreaReserve: isValueInRange(
      results.heatingAreaReserve,
      STEAM_RESULT_RANGES.heatingAreaReserve,
    ),
    airMassVelocity: isValueInRange(
      results.airMassVelocity,
      STEAM_RESULT_RANGES.airMassVelocity,
    ),
    thermalPower:
      results.thermalPower !== null && isFinite(results.thermalPower),
    steamConsumption:
      results.steamConsumption !== null && isFinite(results.steamConsumption),
    aerodynamicResistance: true, // No range validation for this field
  };
}

/**
 * Check if a specific field value is invalid (out of range or null).
 * Used for styling individual result cells.
 */
export function isFieldInvalid(
  value: number | null | undefined,
  range?: readonly [number, number],
): boolean {
  if (!range) return false;
  return !isValueInRange(value, range);
}
