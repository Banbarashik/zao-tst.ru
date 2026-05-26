import type { SFOComparativeAnalysisTableData } from "@/types/SFOComparativeAnalysisTable";

const thermalLoadMap = {
  satisfactory: "удовлетворительный",
  good: "хороший",
  excellent: "отличный",
};

const heatingElementLifeMap = {
  medium: "средний",
  high: "высокий",
  maximum: "максимальный",
};

const noiseMap = {
  low: "низкие",
  moderate: "умеренные",
  high: "повышенные",
};

export function SFOComparativeAnalysisTable({
  data,
}: {
  data: SFOComparativeAnalysisTableData;
}) {
  return (
    <table>
      <caption>
        СРАВНИТЕЛЬНЫЙ АНАЛИЗ РАБОЧИХ РЕЖИМОВ ЭЛЕКТРОКАЛОРИФЕРА {data.model}
      </caption>

      <tbody>
        <tr>
          <td>Производительность</td>

          {data.modes.map((mode) => (
            <td key={mode.performance}>{mode.performance}</td>
          ))}
        </tr>

        <tr>
          <td>Оценка теплосъема</td>

          {data.modes.map((mode) => (
            <td key={mode.performance}>{thermalLoadMap[mode.thermalLoad]}</td>
          ))}
        </tr>

        <tr>
          <td>Эффективность нагрева</td>

          {data.modes.map((mode) => (
            <td key={mode.performance}>{mode.heatingEfficiency}</td>
          ))}
        </tr>

        <tr>
          <td>Ресурс ТЭНов</td>

          {data.modes.map((mode) => (
            <td key={mode.performance}>
              {heatingElementLifeMap[mode.heatingElementLife]}
            </td>
          ))}
        </tr>

        <tr>
          <td>Риск перегрева</td>

          {data.modes.map((mode) => (
            <td key={mode.performance}>{mode.overheatingRisk}</td>
          ))}
        </tr>

        <tr>
          <td>Шумы и вибрация</td>

          {data.modes.map((mode) => (
            <td key={mode.performance}>{noiseMap[mode.noiseAndVibration]}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
