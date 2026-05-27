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
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <caption className="border border-b-0 border-[#723910] py-1">
          Сравнительный анализ рабочих режимов электрокалорифера {data.model}
        </caption>

        <tbody>
          <tr>
            <th className="py-1">Производительность</th>

            {data.modes.map((mode) => (
              <td key={mode.performance}>{mode.performance}</td>
            ))}
          </tr>

          <tr>
            <th className="py-1">Оценка теплосъема</th>

            {data.modes.map((mode) => (
              <td key={mode.performance}>{thermalLoadMap[mode.thermalLoad]}</td>
            ))}
          </tr>

          <tr>
            <th className="py-1">Эффективность нагрева</th>

            {data.modes.map((mode) => (
              <td key={mode.performance}>{mode.heatingEfficiency}</td>
            ))}
          </tr>

          <tr>
            <th className="py-1">Ресурс ТЭНов</th>

            {data.modes.map((mode) => (
              <td key={mode.performance}>
                {heatingElementLifeMap[mode.heatingElementLife]}
              </td>
            ))}
          </tr>

          <tr>
            <th className="py-1">Риск перегрева</th>

            {data.modes.map((mode) => (
              <td key={mode.performance}>{mode.overheatingRisk}</td>
            ))}
          </tr>

          <tr>
            <th className="py-1">Шумы и вибрация</th>

            {data.modes.map((mode) => (
              <td key={mode.performance}>{noiseMap[mode.noiseAndVibration]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
