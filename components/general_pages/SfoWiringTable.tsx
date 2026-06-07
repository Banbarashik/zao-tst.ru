import type {
  SfoWiringSchema,
  PhaseColumn,
  NeutralColumn,
} from "@/types/sfoWiringSchema";

// ─── Вспомогательные компоненты ──────────────────────────────────────────────

interface CellProps {
  colSpan?: number;
  className?: string;
  children: React.ReactNode;
}

function Cell({ colSpan, className = "", children }: CellProps) {
  return (
    <td
      colSpan={colSpan}
      className={`border border-gray-400 px-2 py-1 text-center align-middle text-sm leading-snug ${className}`}
    >
      {children}
    </td>
  );
}

/** Многострочный текст: переводы строк → <br /> */
function Multiline({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

/** Строка-стрелка (▼) на всю ширину */
function ArrowRow({ colSpan }: { colSpan: number }) {
  return (
    <tr>
      <Cell colSpan={colSpan} className="py-0 text-xs text-gray-500">
        ▼
      </Cell>
    </tr>
  );
}

/** Заголовок секции (ГРЩ, ЩАУК и т.д.) */
function SectionHeader({
  colSpan,
  children,
}: {
  colSpan: number;
  children: React.ReactNode;
}) {
  return (
    <tr>
      <Cell
        colSpan={colSpan}
        className="bg-gray-200 text-xs font-bold tracking-wide uppercase"
      >
        {children}
      </Cell>
    </tr>
  );
}

/** Строка с одной ячейкой на всю ширину */
function FullRow({
  colSpan,
  children,
  className,
}: {
  colSpan: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tr>
      <Cell colSpan={colSpan} className={className}>
        {children}
      </Cell>
    </tr>
  );
}

// ─── Блок контакторов ─────────────────────────────────────────────────────────

function ContactorsBlock({
  schema,
  numCols,
}: {
  schema: SfoWiringSchema;
  numCols: number;
}) {
  const { shchauk } = schema;
  const n = shchauk.contactors.length;
  const colSpanPer = numCols / n;

  return (
    <>
      {/* Отпайки */}
      <tr>
        {shchauk.contactors.map((_, i) => (
          <Cell
            key={i}
            colSpan={colSpanPer}
            className="py-0 text-xs text-gray-600"
          >
            {shchauk.tapWires}
          </Cell>
        ))}
      </tr>

      {/* Контакторы */}
      <tr>
        {shchauk.contactors.map((c, i) => (
          <Cell
            key={i}
            colSpan={colSpanPer}
            className="bg-blue-50 font-semibold"
          >
            {c.label}
          </Cell>
        ))}
      </tr>

      {/* Метки секций */}
      <tr>
        {shchauk.contactors.map((c, i) => (
          <Cell
            key={i}
            colSpan={colSpanPer}
            className="text-xs text-blue-700 italic"
          >
            {c.sectionLabel}
          </Cell>
        ))}
      </tr>

      {/* Нейтральная шина (только у 3-секционных) */}
      {shchauk.neutralBusNote && (
        <FullRow colSpan={numCols} className="text-xs text-gray-600">
          <Multiline text={shchauk.neutralBusNote} />
        </FullRow>
      )}

      {/* Кабели */}
      <tr>
        {shchauk.contactors.map((c, i) => (
          <Cell key={i} colSpan={colSpanPer} className="font-mono text-xs">
            {c.cableLabel}
          </Cell>
        ))}
      </tr>
      <tr>
        {shchauk.contactors.map((c, i) => (
          <Cell key={i} colSpan={colSpanPer} className="text-xs text-gray-500">
            {/* у СФО-16 одна общая нота на всю строку; у 3-секционных — своя */}
            {c.cableNote}
          </Cell>
        ))}
      </tr>

      {/* Сводная строка кабелей (СФО-60/250) */}
      {shchauk.sectionsCableSummary && (
        <FullRow colSpan={numCols} className="text-xs text-gray-600">
          <Multiline text={shchauk.sectionsCableSummary} />
        </FullRow>
      )}
    </>
  );
}

// ─── Блок вводного шкафа ─────────────────────────────────────────────────────

function InputCabinetBlock({
  schema,
  numCols,
}: {
  schema: SfoWiringSchema;
  numCols: number;
}) {
  const { inputCabinet } = schema;
  const n = inputCabinet.cables.length;
  const colSpanPer = numCols / n;

  return (
    <>
      <SectionHeader colSpan={numCols}>{inputCabinet.title}</SectionHeader>

      <FullRow colSpan={numCols} className="text-xs text-gray-600">
        <Multiline text={inputCabinet.terminalBlockNote} />
      </FullRow>

      {/* Заголовки кабелей */}
      <tr>
        {inputCabinet.cables.map((c, i) => (
          <Cell
            key={i}
            colSpan={colSpanPer}
            className="bg-green-50 text-xs font-semibold"
          >
            {c.label}
          </Cell>
        ))}
      </tr>

      {/* Жилы — одинаковы для всех секций, рендерим по первому */}
      {(["phaseA", "phaseB", "phaseC", "neutralN"] as const).map((field) => (
        <tr key={field}>
          {inputCabinet.cables.map((c, i) => (
            <Cell key={i} colSpan={colSpanPer} className="font-mono text-xs">
              {c[field]}
            </Cell>
          ))}
        </tr>
      ))}

      {/* Описание блочных проводов */}
      {inputCabinet.blockWireSummary && (
        <FullRow colSpan={numCols} className="text-xs text-gray-600">
          <Multiline text={inputCabinet.blockWireSummary} />
        </FullRow>
      )}

      {/* Примечание о прямой прокладке */}
      {inputCabinet.directWiringNote && (
        <FullRow colSpan={numCols} className="text-xs text-gray-500 italic">
          {inputCabinet.directWiringNote}
        </FullRow>
      )}
    </>
  );
}

// ─── Фазная сторона калорифера ────────────────────────────────────────────────

function PhaseSide({
  columns,
  numCols,
  terminalsNote,
  busRowNote,
}: {
  columns: PhaseColumn[];
  numCols: number;
  terminalsNote: string;
  busRowNote?: string;
}) {
  const n = columns.length;
  const colSpanPer = numCols / n;

  // Максимальное количество строк фаз
  const maxRows = Math.max(...columns.map((c) => c.phaseRows.length));

  return (
    <>
      {busRowNote && (
        <FullRow colSpan={numCols} className="text-xs text-gray-600">
          {busRowNote}
        </FullRow>
      )}

      {/* Заголовки колонок */}
      <tr>
        {columns.map((col, i) => (
          <Cell
            key={i}
            colSpan={colSpanPer}
            className="bg-orange-50 text-xs font-semibold"
          >
            {col.header}
          </Cell>
        ))}
      </tr>

      {/* Строки фаз */}
      {Array.from({ length: maxRows }).map((_, rowIdx) => (
        <tr key={rowIdx}>
          {columns.map((col, colIdx) => (
            <Cell
              key={colIdx}
              colSpan={colSpanPer}
              className="font-mono text-xs"
            >
              {col.phaseRows[rowIdx] ?? ""}
            </Cell>
          ))}
        </tr>
      ))}

      {/* Примечание о наконечниках */}
      <FullRow colSpan={numCols} className="text-xs text-gray-500 italic">
        {terminalsNote}
      </FullRow>
    </>
  );
}

// ─── Нейтральная сторона калорифера ──────────────────────────────────────────

function NeutralSide({
  columns,
  numCols,
  neutralBusNote,
  wireFixingNote,
}: {
  columns: NeutralColumn[];
  numCols: number;
  neutralBusNote: string;
  wireFixingNote: string;
}) {
  const n = columns.length;
  const colSpanPer = numCols / n;

  return (
    <>
      {/* Описание нейтральной шины */}
      <FullRow colSpan={numCols} className="text-xs text-gray-600">
        {neutralBusNote}
      </FullRow>

      {/* Заголовки нейтральных колонок */}
      <tr>
        {columns.map((col, i) => (
          <Cell
            key={i}
            colSpan={colSpanPer}
            className="bg-purple-50 text-xs font-semibold"
          >
            {col.header}
          </Cell>
        ))}
      </tr>

      {/* Нейтральные провода */}
      <tr>
        {columns.map((col, i) => (
          <Cell key={i} colSpan={colSpanPer} className="font-mono text-xs">
            {col.neutralWire}
          </Cell>
        ))}
      </tr>

      {/* Опциональные шины «звезды» (СФО-16) */}
      {columns.some((c) => c.busNote) && (
        <tr>
          {columns.map((col, i) => (
            <Cell
              key={i}
              colSpan={colSpanPer}
              className="text-xs text-gray-600"
            >
              {col.busNote ?? ""}
            </Cell>
          ))}
        </tr>
      )}

      {/* Примечание о фиксации */}
      <FullRow colSpan={numCols} className="text-xs text-gray-500 italic">
        {wireFixingNote}
      </FullRow>
    </>
  );
}

// ─── Главный компонент ────────────────────────────────────────────────────────

interface SfoWiringTableProps {
  schema: SfoWiringSchema;
  /**
   * Количество физических колонок таблицы.
   * По умолчанию: numSections === 2 → 6, numSections === 3 → 3.
   * Можно переопределить для кастомной вёрстки.
   */
  numCols?: number;
  className?: string;
}

export function SfoWiringTable({
  schema,
  numCols: numColsProp,
  className = "",
}: SfoWiringTableProps) {
  const numCols = numColsProp ?? (schema.numSections === 2 ? 6 : 3);
  const { grshch, shchauk, heater } = schema;

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full min-w-[600px] border-collapse border border-gray-400 text-gray-800">
        <tbody>
          {/* ── Заголовок ───────────────────────────────────────────── */}
          <tr>
            <Cell
              colSpan={numCols}
              className="bg-gray-700 py-2 text-sm font-bold tracking-wide text-white uppercase"
            >
              {schema.tableTitle}
            </Cell>
          </tr>

          {/* ── ГРЩ ─────────────────────────────────────────────────── */}
          <SectionHeader colSpan={numCols}>{grshch.title}</SectionHeader>
          <FullRow colSpan={numCols} className="text-xs text-gray-700">
            {grshch.supplyLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </FullRow>

          <ArrowRow colSpan={numCols} />

          {/* ── ЩАУК ────────────────────────────────────────────────── */}
          <SectionHeader colSpan={numCols}>{shchauk.title}</SectionHeader>
          <FullRow colSpan={numCols} className="text-xs text-gray-700">
            {shchauk.inputBreaker}
          </FullRow>
          <FullRow colSpan={numCols} className="py-0 text-xs text-gray-600">
            {shchauk.internalTransition}
          </FullRow>
          <FullRow colSpan={numCols} className="py-0 text-xs text-gray-600">
            {shchauk.distributor}
          </FullRow>

          <ContactorsBlock schema={schema} numCols={numCols} />

          <ArrowRow colSpan={numCols} />

          {/* ── Вводной шкаф ────────────────────────────────────────── */}
          <InputCabinetBlock schema={schema} numCols={numCols} />

          <ArrowRow colSpan={numCols} />

          {/* ── Калорифер ───────────────────────────────────────────── */}
          <SectionHeader colSpan={numCols}>{heater.title}</SectionHeader>

          {/* Описание внутренних проводов (СФО-16) */}
          {heater.internalWiresNote && (
            <FullRow colSpan={numCols} className="text-xs text-gray-600">
              <Multiline text={heater.internalWiresNote} />
            </FullRow>
          )}

          {/* Фазная сторона */}
          <FullRow
            colSpan={numCols}
            className="bg-orange-100 text-xs font-semibold"
          >
            {heater.phaseSideLabel}
          </FullRow>

          <PhaseSide
            columns={heater.phaseColumns}
            numCols={numCols}
            terminalsNote={heater.terminalsNote}
            busRowNote={heater.busRowNote}
          />

          {/* Нейтральная сторона */}
          <FullRow
            colSpan={numCols}
            className="bg-purple-100 text-xs font-semibold"
          >
            {heater.neutralSideLabel}
          </FullRow>

          <NeutralSide
            columns={heater.neutralColumns}
            numCols={numCols}
            neutralBusNote={heater.neutralBusNote}
            wireFixingNote={heater.wireFixingNote}
          />

          {/* ── PE / заземление ─────────────────────────────────────── */}
          <FullRow
            colSpan={numCols}
            className="bg-yellow-100 text-xs font-semibold"
          >
            {heater.groundingLabel}
          </FullRow>
          <FullRow
            colSpan={numCols}
            className="font-mono text-xs text-gray-700"
          >
            {heater.groundingWire}
          </FullRow>
        </tbody>
      </table>
    </div>
  );
}
