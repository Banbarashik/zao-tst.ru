import React from "react";

export default function WaterCalcHeatTransferCoefficientTables() {
  return (
    <div className="mb-6 space-y-4">
      {/* TODO make DRYer */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-231 xl:min-w-auto">
          <thead>
            <tr>
              <th colSpan={12} className="py-0.5 uppercase">
                Эмпирические зависимости для расчета коэффициента теплопередачи
                водяных калориферов КСК
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Калорифер КСк2 двухрядная модель",
                "Калорифер КСк3 трехрядная модель",
                "Калорифер КСк4 четырехрядная модель",
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
                "33.3",
                "0.383",
                "0.175",
                "29.3",
                "0.437",
                "0.168",
                "25.5",
                "0.496",
                "0.160",
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
                водяных калориферов ТВВ и КФБ-А М
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {[
                "Калорифер ТВВ3 Калорифер КФБ А3 М трехрядная модель",
                "Калорифер ТВВ4 Калорифер КФБ А4 М четырехрядная модель",
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
              {["29.4", "0.515", "0.0945", "28.1", "0.518", "0.0681"].map(
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
