import React, { useMemo } from "react";
import { SfotcSpecTableData } from "@/types/sfotcSpecTable";
import { cn } from "@/lib/utils";

interface SfotcSpecTableProps {
  data: SfotcSpecTableData;
  className?: string;
}

/**
 * Renders an equipment specification table from a SpecTableData object.
 *
 * Rendering strategy:
 * - `maxValueColumns` = the largest `values.length` across all rows in the
 *   table (1 for a plain single-value sheet, 2+ if any row carries
 *   alternative values).
 * - Each row renders one <td> per entry in its `values` array. If a row has
 *   fewer values than `maxValueColumns`, its last cell gets a `colSpan` to
 *   fill the remaining width — this reproduces the merged-cell look of the
 *   source .docx (e.g. a single value spanning what would otherwise be two
 *   or three value columns) without any per-row conditional logic.
 * - No `if (row.values.length === 2)` branching anywhere: the same `.map()`
 *   handles 1, 2, or N values transparently, so a future variant with three
 *   alternative values "just works" with this same component.
 */
export function SfotcSpecTable({ data, className }: SfotcSpecTableProps) {
  const maxValueColumns = useMemo(
    () => Math.max(1, ...data.rows.map((row) => row.values.length)),
    [data.rows],
  );

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table className="mx-auto w-176">
        <tbody>
          {data.rows.map((row) => {
            const emptySlots = maxValueColumns - row.values.length;

            return (
              <tr key={row.id}>
                <th scope="row" className="py-1 pl-1 text-left">
                  {row.label}
                </th>

                {row.values.map((value, i) => {
                  const isLast = i === row.values.length - 1;
                  // Give the last value cell any leftover span so a
                  // single-value row fills the full value area, matching
                  // the merged cell in the source document.
                  const colSpan =
                    isLast && emptySlots > 0 ? emptySlots + 1 : undefined;

                  return (
                    <td
                      key={`${row.id}-${i}`}
                      colSpan={colSpan}
                      className="px-1"
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
