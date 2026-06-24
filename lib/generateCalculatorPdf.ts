import { pdf } from "@react-pdf/renderer";
import { createElement } from "react";
import { mergePdfs, fetchDrawingPdf } from "@/lib/mergePdfs";
import type { CalculatorState } from "@/types/pritochnye-calculator";
import type { Product } from "@/types";
import { PritochnyeCalculatorDocument } from "@/components/catalog/PritochnyeCalculatorDocument";

/**
 * Генерирует PDF из состояния калькулятора и возвращает Blob.
 *
 * Если для модели существует чертёж в MODEL_DRAWINGS, он подгружается
 * и добавляется второй страницей к сгенерированному документу.
 * Отсутствие чертежа не приводит к ошибке — документ просто состоит
 * из одной страницы, как раньше.
 *
 * @param state    Текущее состояние калькулятора (inputs + results)
 * @param products Массив товаров из products.json — нужен для airPower
 *                 и прочих каталожных данных
 */
export async function generateCalculatorPdf(
  state: CalculatorState,
  products: Product[],
): Promise<Blob> {
  const product = products.find((p) => p.id === state.inputs.modelId);
  const doc = createElement(PritochnyeCalculatorDocument, { state, product });
  const mainBlob = await pdf(doc).toBlob();

  const drawingUrl = `/drawings/${state.inputs.modelId}.pdf`;
  if (!drawingUrl) {
    // Чертежа для этой модели ещё нет — отдаём документ как есть
    return mainBlob;
  }

  const drawingBytes = await fetchDrawingPdf(drawingUrl);
  if (!drawingBytes) {
    // Файл прописан в конфиге, но не загрузился (404, сеть и т.д.) —
    // не блокируем пользователя, просто отдаём документ без чертежа
    console.warn(`Не удалось загрузить чертёж: ${drawingUrl}`);
    return mainBlob;
  }

  return mergePdfs([mainBlob, drawingBytes]);
}

/**
 * Генерирует PDF и сразу запускает скачивание в браузере.
 */
export async function downloadCalculatorPdf(
  state: CalculatorState,
  products: Product[],
  filename?: string,
): Promise<void> {
  const blob = await generateCalculatorPdf(state, products);

  const safeLabel = state.modelLabel
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Zа-яА-Я0-9_\-x]/g, "");

  const name = filename ?? `Расчёт_${safeLabel}`;
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${name}.pdf`;
  anchor.click();
  URL.revokeObjectURL(url);
}
