"use client";

import { useState } from "react";

export default function ParoprovodCalculator() {
  const [rashodPara, setRashodPara] = useState(""); // Расход пара, кг/час
  const [davleniePara, setDavleniePara] = useState("1.69"); // Давление насыщенного пара, МПа
  const [v, setV] = useState(""); // Скорость пара, м/с
  const [d, setD] = useState(""); // Диаметр паропровода, мм

  const calculate = () => {
    const numRashod = Number(rashodPara);
    const numDavlenie = Number(davleniePara);
    const numV = Number(v);
    const q = numRashod * numDavlenie; // объемный расход пара, м³/ч
    if (rashodPara !== "" && v !== "")
      setD(String(Math.sqrt((354 * q) / numV)));
  };

  const reset = () => {
    setRashodPara("");
    setDavleniePara("1.69");
    setV("");
    setD("");
  };

  const handleNumericInput = (value: string, setter: (val: string) => void) => {
    if (/^-?\d*\.?\d*$/.test(value) || value === "") {
      setter(value);
    }
  };

  return (
    <div className="flex flex-col">
      <label>
        Расход пара, кг/час
        <input
          value={rashodPara}
          onChange={(e) => handleNumericInput(e.target.value, setRashodPara)}
          onBlur={(e) => {
            if (e.target.value === "-" || e.target.value === ".")
              setRashodPara("");
          }}
        />
      </label>
      <label>
        Скорость пара, м/с
        <input
          value={v}
          onChange={(e) => handleNumericInput(e.target.value, setV)}
          onBlur={(e) => {
            if (e.target.value === "-" || e.target.value === ".") setV("");
          }}
        />
      </label>
      <label>
        Давление насыщенного пара, МПа
        <select
          value={davleniePara}
          onChange={(e) => setDavleniePara(e.target.value)}
        >
          <option value="1.69">0.1</option>
          <option value="1.16">0.15</option>
          <option value="0.89">0.2</option>
          <option value="0.72">0.25</option>
          <option value="0.61">0.3</option>
          <option value="0.52">0.35</option>
          <option value="0.46">0.4</option>
          <option value="0.41">0.45</option>
          <option value="0.37">0.5</option>
          <option value="0.32">0.6</option>
          <option value="0.27">0.7</option>
          <option value="0.24">0.8</option>
          <option value="0.21">0.9</option>
          <option value="0.19">1.0</option>
          <option value="0.18">1.1</option>
          <option value="0.16">1.2</option>
        </select>
      </label>
      <div className="flex gap-2">
        <button onClick={calculate}>Рассчитать</button>
        <button onClick={reset}>Сброс</button>
      </div>
      <label>
        Диаметр паропровода, мм
        <input value={d} readOnly disabled />
      </label>
    </div>
  );
}
