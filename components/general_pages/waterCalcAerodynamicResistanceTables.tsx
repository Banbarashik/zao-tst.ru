import React from "react";

export default function WaterCalcAerodynamicResistanceTables() {
  return (
    <div className="mb-6 space-y-4">
      {/* TODO make DRYer */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-231 xl:min-w-auto">
          <thead>
            <tr>
              <th colSpan={12} className="py-0.5 uppercase">
                Эмпирические зависимости для расчета аэродинамического
                сопротивления водяных калориферов КСК
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
                  <th rowSpan={2} className="w-38 py-1">
                    {head}
                  </th>
                  {["B", "m"].map((l) => (
                    <td key={l} className="w-14">
                      {l}
                    </td>
                  ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {["4.23", "1.832", "6.05", "1.832", "8.63", "1.833"].map(
                (v, i) => (
                  <td key={i}>{v}</td>
                ),
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-231 xl:min-w-auto">
          <thead>
            <tr>
              <th colSpan={12} className="py-0.5 uppercase">
                Эмпирические зависимости для расчета аэродинамического
                сопротивления водяных калориферов ТВВ и КФБ-А М
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
                  <th rowSpan={2} className="w-40 py-1">
                    {head}
                  </th>
                  {["B", "m"].map((l) => (
                    <td key={l} className="w-14">
                      {l}
                    </td>
                  ))}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {["6.37", "1.864", "8.67", "1.848"].map((v, i) => (
                <td key={i}>{v}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
