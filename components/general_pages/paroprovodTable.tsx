type Row = {
  speed: number;
  values: Record<number, number>; // diameter -> расход
};

export type PressureBlock = {
  pressure: number;
  rows: Row[];
};

const diameters = [32, 40, 50, 65, 80, 100];

export function ParoprovodTable({ data }: { data: PressureBlock[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          <tr>
            <th rowSpan={3}>
              <span className="uppercase">Давление</span>, МПа
            </th>
            <th rowSpan={3}>
              <span className="uppercase">Скорость</span>, м/сек
            </th>
            <th colSpan={6}>
              <span className="uppercase">Расход пара</span>, кг/час
            </th>
          </tr>
          <tr>
            <th colSpan={6}>
              <span className="uppercase">Диаметр паропровода</span>, Ду (мм)
            </th>
          </tr>
          <tr>
            {diameters.map((d) => (
              <th key={d} className="w-20">
                {d}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((block) =>
            block.rows.map((row, i) => (
              <tr key={`${block.pressure}-${row.speed}`}>
                {i === 0 && (
                  <td rowSpan={block.rows.length}>{block.pressure}</td>
                )}

                <td>{row.speed}</td>

                {diameters.map((d) => (
                  <td key={d}>{row.values[d]}</td>
                ))}
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}
