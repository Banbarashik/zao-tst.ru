"use client";

import { useState, useCallback } from "react";
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
  decimals?: number;
  validRange?: readonly [number, number];
}

function ResultField({
  label,
  value,
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
    </p>
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
  const reserveOk =
    results !== null &&
    isValueInRange(
      results.heatingAreaReserve,
      STEAM_RESULT_RANGES.heatingAreaReserve,
    );

  const reserveDisplay =
    results === null || !isFinite(results.heatingAreaReserve)
      ? "%"
      : `${results.heatingAreaReserve.toFixed(0)} %`;

  return (
    <div className="space-y-6 border border-[rgb(180,180,180)] p-2 text-right">
      {/* Модель */}
      <div>
        <span className="unselectable">Модель калорифера</span>
        <select
          value={inputs.rowCount}
          onChange={(e) => update("rowCount", e.target.value as RowCount)}
          style={{ backgroundColor: "rgb(176, 196, 222)" }}
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
          />
        </p>
        <p className="unselectable">
          Температура входящего воздуха:
          <input
            type="number"
            placeholder="°С"
            value={inputs.airInputT || ""}
            onChange={(e) => update("airInputT", +e.target.value)}
          />
        </p>
        <p className="unselectable">
          Требуемая температура воздуха на выходе:
          <input
            type="number"
            placeholder="°С"
            value={inputs.airOutputT || ""}
            onChange={(e) => update("airOutputT", +e.target.value)}
          />
        </p>
      </div>

      {/* Давление пара */}
      <div>
        <span className="unselectable">Давление сухого насыщенного пара</span>
        <select
          value={inputs.steamPressure}
          onChange={(e) => update("steamPressure", e.target.value)}
          style={{ backgroundColor: "rgb(176, 196, 222)", marginBottom: 0 }}
        >
          {STEAM_PRESSURES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
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
          />
        </p>

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
