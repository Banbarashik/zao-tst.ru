import { METRICS, SCHEMES } from "@/data/ntu-summary";
import type { MetricDef, NtuSummary } from "@/types/ntuSummary";

const NBSP = "\u00A0";

/**
 * Formats a number the way the source documents do:
 * dot as decimal separator, non-breaking space as thousands separator
 * (only for 5+ digit integers, so "17 700" but "1226"), optional "+" sign.
 */
export function formatMetric(value: number, def: MetricDef): string {
  const [int, frac] = Math.abs(value).toFixed(def.decimals).split(".");
  const grouped =
    int.length >= 5 ? int.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP) : int;
  const sign = value < 0 ? "-" : def.showSign && value > 0 ? "+" : "";
  return `${sign}${grouped}${frac ? `.${frac}` : ""}`;
}

export function NtuSummaryTable({ data }: { data: NtuSummary }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <caption className="border border-b-0 border-[#723910] py-1 uppercase">
          Сводные параметры 4-рядных блоков калориферов {data.model} по методу
          NTU
        </caption>
        <thead>
          <tr>
            <th scope="col" className="uppercase">
              Рабочий параметр установки
            </th>
            {SCHEMES.map((scheme) => (
              <th key={scheme.id} scope="col">
                {scheme.title}
                <br />
                {scheme.subtitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {METRICS.map((metric) => (
            <tr key={metric.key}>
              <th scope="row" className="pl-1.5 text-left">
                {metric.label}, {metric.unit}
              </th>
              {SCHEMES.map((scheme) => (
                <td key={scheme.id}>
                  {formatMetric(data.results[scheme.id][metric.key], metric)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
