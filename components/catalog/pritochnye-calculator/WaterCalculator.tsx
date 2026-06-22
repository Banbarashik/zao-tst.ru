"use client";

import { useState, useCallback } from "react";
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

  let bg = "bg-[rgb(217,217,217)]";
  if (validRange && formatted !== "") {
    const num = parseFloat(formatted);
    bg =
      num < validRange[0] || num > validRange[1]
        ? "bg-[rgb(255,160,122)]"
        : "bg-[rgb(217,217,217)]";
  }

  return (
    <p className="unselectable mt-0 mb-1.5">
      {label}
      <input
        readOnly
        disabled
        value={formatted}
        className={`${bg} ml-2 w-24 px-1`}
      />
      {unit && <span className="ml-1 text-sm">{unit}</span>}
    </p>
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
  const reserveOk =
    results !== null &&
    isValueInRange(
      results.heatingAreaReserve,
      WATER_RESULT_RANGES.heatingAreaReserve,
    );

  const reserveDisplay =
    results === null || !isFinite(results.heatingAreaReserve)
      ? "%"
      : `${results.heatingAreaReserve.toFixed(0)} %`;

  return (
    <div className="calculator advanced-calculator">
      {/* Модель */}
      <div>
        <span className="unselectable">Модель калорифера</span>
        <select
          value={inputs.rowCount}
          onChange={(e) => update("rowCount", e.target.value as RowCount)}
          style={{ backgroundColor: "rgb(176, 196, 222)" }}
          className="ml-2"
        >
          {(["2_rows", "3_rows", "4_rows"] as RowCount[]).map((r) => (
            <option key={r} value={r}>
              {rowLabels[r]}
            </option>
          ))}
        </select>
      </div>

      {/* Воздух */}
      <div className="numbers_input">
        <p className="unselectable">
          Объём нагреваемого воздуха:
          <input
            type="number"
            placeholder="м³/ч"
            value={inputs.airVolume || ""}
            onChange={(e) => update("airVolume", +e.target.value)}
            className="ml-2"
          />
        </p>
        <p className="unselectable">
          Температура входящего воздуха:
          <input
            type="number"
            placeholder="°С"
            value={inputs.airInputT || ""}
            onChange={(e) => update("airInputT", +e.target.value)}
            className="ml-2"
          />
        </p>
        <p className="unselectable">
          Требуемая температура воздуха на выходе:
          <input
            type="number"
            placeholder="°С"
            value={inputs.airOutputT || ""}
            onChange={(e) => update("airOutputT", +e.target.value)}
            className="ml-2"
          />
        </p>
      </div>

      {/* Теплоноситель */}
      <div style={{ margin: "5px 0 0 0" }} className="unselectable inline-flex">
        <span>Теплоноситель</span>
        {(
          [
            ["water", "вода"],
            ["ethyleneGlycol", "этиленгликоль"],
            ["propyleneGlycol", "пропиленгликоль"],
          ] as [CoolantType, string][]
        ).map(([val, label]) => (
          <label key={val} className="ml-2">
            <input
              type="radio"
              name={`coolant-${modelId}`}
              value={val}
              checked={inputs.coolant === val}
              onChange={() => update("coolant", val)}
            />{" "}
            {label}
          </label>
        ))}
      </div>

      <div className="numbers_input">
        <p
          className="unselectable"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <span>Концентрация гликолей:</span>
          <span style={{ width: 50 }}>{inputs.glycolConcentration} %</span>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={inputs.glycolConcentration}
            onChange={(e) => update("glycolConcentration", +e.target.value)}
          />
        </p>
        <p className="unselectable">
          Температура теплоносителя на входе:
          <input
            type="number"
            placeholder="°С"
            value={inputs.coolantInputT || ""}
            onChange={(e) => update("coolantInputT", +e.target.value)}
            className="ml-2"
          />
        </p>
        <p className="unselectable">
          Температура теплоносителя на выходе:
          <input
            type="number"
            placeholder="°С"
            value={inputs.coolantOutputT || ""}
            onChange={(e) => update("coolantOutputT", +e.target.value)}
            className="ml-2"
          />
        </p>
      </div>

      {/* Результаты */}
      <div className="results">
        <p className="unselectable" style={{ margin: "20px 0" }}>
          Запас площади поверхности нагрева калорифера:
          <input
            disabled
            value={reserveDisplay}
            style={{
              width: 65,
              backgroundColor: reserveOk
                ? "rgb(255,255,255)"
                : "rgb(255,160,122)",
            }}
            className="ml-2"
          />
        </p>

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
