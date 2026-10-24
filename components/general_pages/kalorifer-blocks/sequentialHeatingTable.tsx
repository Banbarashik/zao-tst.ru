import type { ReactNode } from "react";

/** A text fragment with optional inline formatting from the source document. */
export type TableTextRun = {
  text: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  superscript?: boolean;
  subscript?: boolean;
};

export type TableCellContent = string | readonly TableTextRun[];

export type TableCell = {
  content: TableCellContent;
  /** How many columns/rows the cell covers. Omit for a normal cell. */
  colSpan?: number;
  rowSpan?: number;
  /** Use semantic <th> for headings, column headers, and row labels. */
  header?: boolean;
  scope?: "col" | "colgroup" | "row" | "rowgroup";
  /** Optional per-cell overrides for future documents. */
  align?: "left" | "center" | "right";
  verticalAlign?: "top" | "middle" | "bottom";
  padding?: string;
};

export type TableRow = {
  cells: readonly TableCell[];
};

export type TableDefinition = {
  id: string;
  ariaLabel: string;
  /** One CSS width per logical column, e.g. ["20%", "80%"]. */
  columnWidths?: readonly string[];
  /** Number of rows in <thead>, including any full-width title rows. */
  headerRowCount?: number;
  minWidth?: string;
  rows: readonly TableRow[];
};

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

const verticalAlignmentClasses = {
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom",
} as const;

/** Classes shared by <th> and <td> */
const cellClasses = "px-1 py-1.5";

function renderCellContent(content: TableCellContent): ReactNode {
  if (typeof content === "string") return content;

  return content.map((run, index) => {
    const classes = [
      run.bold && "font-bold",
      run.italic && "italic",
      run.underline && "underline",
    ]
      .filter(Boolean)
      .join(" ");

    const text = run.superscript ? (
      <sup className="leading-[0]">{run.text}</sup>
    ) : run.subscript ? (
      <sub className="leading-[0]">{run.text}</sub>
    ) : (
      run.text
    );

    return (
      <span
        key={index}
        className={classes || undefined}
        // Colors come from DOCX data, so they remain dynamic inline styles.
        style={run.color ? { color: run.color } : undefined}
      >
        {text}
      </span>
    );
  });
}

function renderRow(row: TableRow, rowIndex: number): ReactNode {
  return (
    <tr key={rowIndex}>
      {row.cells.map((cell, cellIndex) => {
        const CellTag = cell.header ? "th" : "td";

        return (
          <CellTag
            key={cellIndex}
            colSpan={cell.colSpan}
            rowSpan={cell.rowSpan}
            scope={cell.header ? cell.scope : undefined}
            className={[
              cellClasses,
              alignmentClasses[cell.align ?? "center"],
              verticalAlignmentClasses[cell.verticalAlign ?? "middle"],
            ].join(" ")}
            // Padding is document-specific; an inline style overrides the
            // default Tailwind padding classes when supplied.
            style={cell.padding ? { padding: cell.padding } : undefined}
          >
            {renderCellContent(cell.content)}
          </CellTag>
        );
      })}
    </tr>
  );
}

export type TechnicalTableProps = {
  table: TableDefinition;
  /** Additional Tailwind classes for the horizontal scroll container. */
  className?: string;
};

/** Pure server-compatible component: no state, effects, or `use client` needed. */
export function TechnicalTable({ table, className }: TechnicalTableProps) {
  const headerRowCount = Math.max(0, table.headerRowCount ?? 0);
  const headerRows = table.rows.slice(0, headerRowCount);
  const bodyRows = table.rows.slice(headerRowCount);

  return (
    <div
      className={["w-full overflow-x-auto", className]
        .filter(Boolean)
        .join(" ")}
    >
      <table
        id={table.id}
        aria-label={table.ariaLabel}
        className={"w-full min-w-231 xl:min-w-auto"}
        style={table.minWidth ? { minWidth: table.minWidth } : undefined}
      >
        {table.columnWidths && (
          <colgroup>
            {table.columnWidths.map((width, index) => (
              <col key={index} style={{ width }} />
            ))}
          </colgroup>
        )}
        {headerRows.length > 0 && (
          <thead>{headerRows.map((row, index) => renderRow(row, index))}</thead>
        )}
        <tbody>
          {bodyRows.map((row, index) => renderRow(row, index + headerRowCount))}
        </tbody>
      </table>
    </div>
  );
}
