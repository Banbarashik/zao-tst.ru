import React from "react";

export default function CalcHeatTransferCoefficientTables() {
  return (
    <div className="mb-6 space-y-4">
      {/* TODO make DRYer */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-231 xl:min-w-auto">
          <thead>
            <tr>
              <th colSpan={12} className="py-0.5 uppercase">
                Эмпирические зависимости для расчета коэффициента теплопередачи
                паровых калориферов КПСК
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Калорифер КПСк2 двухрядная модель",
                "Калорифер КПСк3 трехрядная модель",
                "Калорифер КПСк4 четырехрядная модель",
              ].map((head) => (
                <React.Fragment key={head}>
                  <th rowSpan={2} className="w-40 py-1">
                    {head}
                  </th>
                  {["A", "n", "r"].map((l) => (
                    <td key={l} className="w-14">
                      {l}
                    </td>
                  ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {[
                "34.3",
                "0.357",
                "-0.072",
                "30.3",
                "0.405",
                "-0.066",
                "26.1",
                "0.476",
                "-0.036",
              ].map((v, i) => (
                <td key={i}>{v}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-231 xl:min-w-auto">
          <thead>
            <tr>
              <th colSpan={8} className="py-0.5 uppercase">
                Эмпирические зависимости для расчета коэффициента теплопередачи
                паровых калориферов КП и КФБ-А П
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Калорифер КП3 Калорифер КФБ А3 трехрядная модель",
                "Калорифер КП4 Калорифер КФБ А4 четырехрядная модель",
              ].map((head) => (
                <React.Fragment key={head}>
                  <th rowSpan={2} className="w-50 py-1">
                    {head}
                  </th>
                  {["A", "n", "r"].map((l) => (
                    <td key={l} className="w-14">
                      {l}
                    </td>
                  ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {["43.5", "0.431", "-0.072", "37.2", "0.452", "-0.063"].map(
                (v, i) => (
                  <td key={i}>{v}</td>
                ),
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
