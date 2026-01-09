import React from "react";

export default function calcAerodynamicResistanceTables() {
  return (
    <div className="mb-6 space-y-4">
      {/* TODO make DRYer */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-231 xl:min-w-auto">
          <thead>
            <tr>
              <th colSpan={12} className="py-0.5 uppercase">
                Эмпирические зависимости для расчета аэродинамического
                сопротивления паровых калориферов КПСК
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
                сопротивления паровых калориферов КП и КФБ-А П
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
