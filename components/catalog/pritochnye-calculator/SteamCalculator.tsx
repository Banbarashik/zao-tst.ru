"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type {
  SteamCalculatorInputs,
  SteamCalculatorResults,
  SteamCalculatorState,
  RowCount,
} from "@/types/pritochnye-calculator";
import {
  STEAM_MODELS,
  STEAM_PRESSURES,
  type SteamPressure,
} from "@/data/pritochnye-calculator-models";
import { calculateSteam } from "@/lib/pritochnye-calculator";
import {
  STEAM_RESULT_RANGES,
  validateSteamResults,
  isValueInRange,
} from "@/lib/pritochnye-calculator-validation";

// ─── Вспомогательный компонент ────────────────────────────────────────────────

interface ResultFieldProps {
  label: string;
  value: number | null;
  unit?: string;
  decimals?: number;
  /** Диапазон допустимых значений для подсветки */
  validRange?: readonly [number, number];
}

function ResultField({
  label,
  value,
  unit,
  decimals = 0,
  validRange,
}: ResultFieldProps) {
  const formatted =
    value === null || !isFinite(value) ? "" : value.toFixed(decimals);

  const isInvalidValue =
    validRange !== undefined && value !== null && isFinite(value)
      ? !isValueInRange(value, validRange)
      : false;

  return (
    <div className="flex items-center justify-end gap-2 text-right">
      <div className="py-1">{label}</div>
      <div
        className={cn(
          "flex min-h-8 w-25 shrink-0 items-center rounded-sm border border-[#723910] p-1.25 leading-none select-none",
          isInvalidValue ? "bg-[#ffa07a]" : "bg-[#d9d9d9]",
        )}
      >
        {formatted}
      </div>
      {unit && <span className="text-sm">{unit}</span>}
    </div>
  );
}

// ─── Основной компонент ───────────────────────────────────────────────────────

interface SteamCalculatorProps {
  modelId: string;
  onStateChange?: (state: SteamCalculatorState) => void;
}

export function SteamCalculator({
  modelId,
  onStateChange,
}: SteamCalculatorProps) {
  const model = STEAM_MODELS[modelId];
  if (!model) throw new Error(`Неизвестная модель: ${modelId}`);

  const rowLabels: Record<RowCount, string> = {
    "2_rows": `${model.label}_2 двухрядный`,
    "3_rows": `${model.label}_3 трёхрядный`,
    "4_rows": `${model.label}_4 четырёхрядный`,
  };

  const [inputs, setInputs] = useState<SteamCalculatorInputs>({
    modelId,
    rowCount: "2_rows",
    airVolume: 0,
    airInputT: 0,
    airOutputT: 0,
    steamPressure: "0,1 МПа",
  });

  const [results, setResults] = useState<SteamCalculatorResults | null>(null);

  const recalculate = useCallback(
    (next: SteamCalculatorInputs) => {
      let res: SteamCalculatorResults | null = null;
      try {
        res = calculateSteam(next);
        if (!isFinite(res.thermalPower)) res = null;
      } catch {
        res = null;
      }
      setResults(res);
      onStateChange?.({
        type: "steam",
        modelLabel: model.label,
        inputs: next,
        results: res,
      });
    },
    [modelId, onStateChange],
  );

  function update<K extends keyof SteamCalculatorInputs>(
    key: K,
    value: SteamCalculatorInputs[K],
  ) {
    const next = { ...inputs, [key]: value };
    setInputs(next);
    recalculate(next);
  }

  const validation = validateSteamResults(results);
  const hasReserveValue =
    results !== null && isFinite(results.heatingAreaReserve);
  const reserveOk =
    hasReserveValue &&
    isValueInRange(
      results.heatingAreaReserve,
      STEAM_RESULT_RANGES.heatingAreaReserve,
    );
  const reserveInvalid = hasReserveValue && !reserveOk;

  const reserveDisplay = !hasReserveValue
    ? "%"
    : `${results.heatingAreaReserve.toFixed(0)} %`;

  return (
    <div className="space-y-4.5">
      {/* Модель */}
      <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
        <div className="py-1 text-right">Модель калорифера</div>
        <select
          value={inputs.rowCount}
          onChange={(e) => update("rowCount", e.target.value as RowCount)}
          className="rounded-sm border border-[#723910] bg-[#b0c4de] p-1.25"
        >
          {(["2_rows", "3_rows", "4_rows"] as RowCount[]).map((r) => (
            <option key={r} value={r}>
              {rowLabels[r]}
            </option>
          ))}
        </select>
      </div>

      {/* Воздух */}
      <div className="mb-2 space-y-1.5">
        <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
          <div className="py-1">Объём нагреваемого воздуха:</div>
          <input
            type="number"
            placeholder="м³/ч"
            value={inputs.airVolume || ""}
            onChange={(e) => update("airVolume", +e.target.value)}
            className="rounded-sm border border-[#723910] bg-[#b0c4de] p-1.25 leading-none"
          />
        </div>
        <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
          <div className="py-1">Температура входящего воздуха:</div>
          <input
            type="number"
            placeholder="°С"
            value={inputs.airInputT || ""}
            onChange={(e) => update("airInputT", +e.target.value)}
            className="rounded-sm border border-[#723910] bg-[#b0c4de] p-1.25 leading-none"
          />
        </div>
        <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
          <div className="py-1">Требуемая температура воздуха на выходе:</div>
          <input
            type="number"
            placeholder="°С"
            value={inputs.airOutputT || ""}
            onChange={(e) => update("airOutputT", +e.target.value)}
            className="rounded-sm border border-[#723910] bg-[#b0c4de] p-1.25 leading-none"
          />
        </div>
      </div>

      {/* Давление пара */}
      <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
        <div className="py-1">Давление сухого насыщенного пара</div>
        <select
          value={inputs.steamPressure}
          onChange={(e) => update("steamPressure", e.target.value)}
          className="rounded-sm border border-[#723910] bg-[#b0c4de] p-1.25"
        >
          {STEAM_PRESSURES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Результаты */}
      <div className="space-y-2">
        <div className="mb-5 flex items-center justify-end gap-2 text-right">
          <div className="py-1">
            Запас площади поверхности нагрева калорифера:
          </div>
          <div
            className={cn(
              "flex min-h-8 w-25 shrink-0 items-center overflow-x-hidden rounded-sm border border-[#723910] p-1.25 leading-none text-nowrap select-none sm:w-16",
              reserveInvalid ? "bg-[#ffa07a]" : "bg-[#ffffff]",
            )}
          >
            {reserveDisplay}
          </div>
        </div>

        <ResultField
          label="Тепловая мощность, кВт"
          value={results?.thermalPower ?? null}
          decimals={0}
        />
        <ResultField
          label="Расход пара, кг/час"
          value={results?.steamConsumption ?? null}
          decimals={0}
        />
        <ResultField
          label="Аэродинамическое сопротивление, Па"
          value={results?.aerodynamicResistance ?? null}
          decimals={0}
        />
        <ResultField
          label="Массовая скорость воздуха в фронт. сечении, кг/м²·с"
          value={results?.airMassVelocity ?? null}
          decimals={2}
          validRange={STEAM_RESULT_RANGES.airMassVelocity}
        />
      </div>
    </div>
  );
}
