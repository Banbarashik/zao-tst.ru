"use client";

import { useState } from "react";

import type { CalculatorState } from "@/types/pritochnye-calculator";
import type { Product } from "@/types/index";

import { generateCalculatorPdf } from "@/lib/generateCalculatorPdf";

interface UsePdfOptions {
  state: CalculatorState | null;
  products: Product[];
}

interface UsePdfResult {
  /** true пока идёт генерация PDF */
  loading: boolean;
  /** Сообщение об ошибке, если генерация не удалась */
  error: string | null;
  /** Кнопки недоступны, если нет результатов расчёта или идёт генерация */
  disabled: boolean;
  /** Генерирует PDF и возвращает Blob. null — если state невалиден. */
  generate: () => Promise<Blob | null>;
}

export function usePdf({ state, products }: UsePdfOptions): UsePdfResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const disabled = state === null || state.results === null || loading;

  async function generate(): Promise<Blob | null> {
    if (!state || state.results === null) return null;
    setLoading(true);
    setError(null);
    try {
      return await generateCalculatorPdf(state, products);
    } catch (err) {
      console.error("PDF generation failed:", err);
      setError("Не удалось сформировать PDF");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, disabled, generate };
}
