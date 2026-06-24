import { PDFDocument } from "pdf-lib";

/**
 * Объединяет несколько PDF-источников в один документ, последовательно
 * копируя все страницы каждого источника.
 *
 * Источники могут быть:
 * - ArrayBuffer / Uint8Array — уже загруженные байты PDF
 * - Blob — результат @react-pdf/renderer (.toBlob())
 *
 * Порядок в массиве = порядок страниц в итоговом документе.
 *
 * @example
 * const merged = await mergePdfs([mainBlob, drawingBuffer]);
 */
export async function mergePdfs(
  sources: Array<ArrayBuffer | Uint8Array | Blob>,
): Promise<Blob> {
  const merged = await PDFDocument.create();

  for (const source of sources) {
    const bytes = await toArrayBuffer(source);
    const src = await PDFDocument.load(bytes);
    const pageIndices = src.getPageIndices();
    const copiedPages = await merged.copyPages(src, pageIndices);
    copiedPages.forEach((page) => merged.addPage(page));
  }

  const mergedBytes = await merged.save();
  return new Blob([mergedBytes], { type: "application/pdf" });
}

async function toArrayBuffer(
  source: ArrayBuffer | Uint8Array | Blob,
): Promise<ArrayBuffer> {
  if (source instanceof Blob) {
    return source.arrayBuffer();
  }
  if (source instanceof Uint8Array) {
    // pdf-lib ожидает ArrayBuffer или совместимый TypedArray — Uint8Array подходит напрямую,
    // но для единообразия сигнатуры приводим явно
    return source.buffer.slice(
      source.byteOffset,
      source.byteOffset + source.byteLength,
    ) as ArrayBuffer;
  }
  return source;
}

/**
 * Загружает PDF-чертёж по URL (например, /drawings/{modelId}.pdf из public/).
 * Возвращает null, если файл не найден — вызывающий код решает,
 * прикладывать ли чертёж опционально.
 */
export async function fetchDrawingPdf(
  url: string,
): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}
