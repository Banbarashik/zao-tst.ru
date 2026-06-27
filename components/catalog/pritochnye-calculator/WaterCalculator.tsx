"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type {
  WaterCalculatorInputs,
  WaterCalculatorResults,
  WaterCalculatorState,
  CoolantType,
  RowCount,
} from "@/types/pritochnye-calculator";
import { WATER_MODELS } from "@/data/pritochnye-calculator-models";
import { calculateWater } from "@/lib/pritochnye-calculator";
import {
  WATER_RESULT_RANGES,
  validateWaterResults,
  isValueInRange,
} from "@/lib/pritochnye-calculator-validation";

// ─── Вспомогательные компоненты ──────────────────────────────────────────────

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

interface WaterCalculatorProps {
  /** ID модели из WATER_MODELS */
  modelId: string;
  /** Коллбэк — вызывается при каждом пересчёте */
  onStateChange?: (state: WaterCalculatorState) => void;
}

export function WaterCalculator({
  modelId,
  onStateChange,
}: WaterCalculatorProps) {
  const model = WATER_MODELS[modelId];
  if (!model) throw new Error(`Неизвестная модель: ${modelId}`);

  const rowLabels: Record<RowCount, string> = {
    "2_rows": `${model.label}_2 двухрядный`,
    "3_rows": `${model.label}_3 трёхрядный`,
    "4_rows": `${model.label}_4 четырёхрядный`,
  };

  const [inputs, setInputs] = useState<WaterCalculatorInputs>({
    modelId,
    rowCount: "2_rows",
    airVolume: 0,
    airInputT: 0,
    airOutputT: 0,
    coolant: "water",
    glycolConcentration: 0,
    coolantInputT: 0,
    coolantOutputT: 0,
  });

  const [results, setResults] = useState<WaterCalculatorResults | null>(null);

  const recalculate = useCallback(
    (next: WaterCalculatorInputs) => {
      let res: WaterCalculatorResults | null = null;
      try {
        res = calculateWater(next);
        if (!isFinite(res.thermalPower)) res = null;
      } catch {
        res = null;
      }
      setResults(res);
      onStateChange?.({
        type: "water",
        modelLabel: model.label,
        inputs: next,
        results: res,
      });
    },
    [modelId, onStateChange],
  );

  function update<K extends keyof WaterCalculatorInputs>(
    key: K,
    value: WaterCalculatorInputs[K],
  ) {
    const next = { ...inputs, [key]: value };
    setInputs(next);
    recalculate(next);
  }

  const validation = validateWaterResults(results);
  const hasReserveValue =
    results !== null && isFinite(results.heatingAreaReserve);
  const reserveOk =
    hasReserveValue &&
    isValueInRange(
      results.heatingAreaReserve,
      WATER_RESULT_RANGES.heatingAreaReserve,
    );
  const reserveInvalid = hasReserveValue && !reserveOk;

  const reserveDisplay = !hasReserveValue
    ? "%"
    : `${results.heatingAreaReserve.toFixed(0)} %`;

  return (
    <div className="space-y-4.5">
      {/* Модель */}
      <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
        <div className="py-1">Модель калорифера</div>
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
      <div className="space-y-1.5">
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

      {/* Теплоноситель */}
      <div className="space-y-1.5">
        <div className="flex flex-col justify-end gap-2 text-right sm:flex-row">
          <span>Теплоноситель</span>
          {(
            [
              ["water", "вода"],
              ["ethyleneGlycol", "этиленгликоль"],
              ["propyleneGlycol", "пропиленгликоль"],
            ] as [CoolantType, string][]
          ).map(([val, label]) => (
            <label key={val} className="space-x-1">
              <input
                type="radio"
                name={`coolant-${modelId}`}
                value={val}
                checked={inputs.coolant === val}
                onChange={() => update("coolant", val)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div className="ml-auto flex max-w-fit flex-col items-center justify-end gap-1 sm:flex-row">
          <span>Концентрация гликолей:</span>
          <span className="ml-auto w-11.5 text-right">
            {inputs.glycolConcentration} %
          </span>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={inputs.glycolConcentration}
            onChange={(e) => update("glycolConcentration", +e.target.value)}
            className="ml-1.25 w-45 appearance-none overflow-hidden rounded-sm border border-[#723910] bg-[#c0c0c0] p-0 outline-none [&::-webkit-slider-thumb]:h-3.75 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-[#434343] [&::-webkit-slider-thumb]:[box-shadow:-89px_0_0_80px_rgb(176,196,222)]"
          />
        </div>
        <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
          <div className="py-1">Температура теплоносителя на входе:</div>
          <input
            type="number"
            placeholder="°С"
            min={0}
            value={inputs.coolantInputT || ""}
            onChange={(e) => update("coolantInputT", +e.target.value)}
            onBlur={(e) => {
              if (+e.target.value < 0) update("coolantInputT", 0);
            }}
            className="rounded-sm border border-[#723910] bg-[#b0c4de] p-1.25 leading-none"
          />
        </div>
        <div className="ml-auto flex max-w-83 flex-col justify-end gap-x-2 text-right sm:max-w-none sm:flex-row">
          <div className="py-1">Температура теплоносителя на выходе:</div>
          <input
            type="number"
            placeholder="°С"
            min={0}
            value={inputs.coolantOutputT || ""}
            onChange={(e) => update("coolantOutputT", +e.target.value)}
            onBlur={(e) => {
              if (+e.target.value < 0) update("coolantOutputT", 0);
            }}
            className="rounded-sm border border-[#723910] bg-[#b0c4de] p-1.25 leading-none"
          />
        </div>
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
          label="Аэродинамическое сопротивление, Па"
          value={results?.aerodynamicResistance ?? null}
          decimals={0}
        />
        <ResultField
          label="Гидравлическое сопротивление, кПа"
          value={results?.hydraulicResistance ?? null}
          decimals={1}
        />
        <ResultField
          label="Расход теплоносителя, кг/час"
          value={results?.coolantFlowRate ?? null}
          decimals={0}
        />
        <ResultField
          label="Массовая скорость воздуха в фронт. сечении, кг/м²·с"
          value={results?.airMassVelocity ?? null}
          decimals={2}
          validRange={WATER_RESULT_RANGES.airMassVelocity}
        />
        <ResultField
          label="Скорость теплоносителя, м/сек"
          value={results?.coolantVelocity ?? null}
          decimals={2}
          validRange={WATER_RESULT_RANGES.coolantVelocity}
        />
      </div>
    </div>
  );
}
