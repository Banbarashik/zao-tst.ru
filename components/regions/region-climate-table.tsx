import type { RegionClimateTableData } from "@/data/regions/types";

export function RegionClimateTable({
  table,
}: {
  table: RegionClimateTableData;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          <tr>
            <th
              colSpan={2}
              scope="colgroup"
              className="border px-2 py-1 text-left font-medium"
            >
              РЕГИОН: {table.subject}
            </th>

            {table.locations.map((location) => (
              <th
                key={location.slug}
                scope="col"
                className="border px-2 py-1 text-center font-medium"
              >
                {location.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row.parameter}:${row.condition ?? ""}:${rowIndex}`}>
              <td className="border px-2 py-1 text-left">{row.parameter}</td>
              <td className="border px-2 py-1 text-center whitespace-nowrap">
                {row.condition ?? ""}
              </td>

              {row.values.map((value, valueIndex) => (
                <td
                  key={`${rowIndex}:${table.locations[valueIndex]?.slug ?? valueIndex}`}
                  className="border px-2 py-1 text-center whitespace-nowrap"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
