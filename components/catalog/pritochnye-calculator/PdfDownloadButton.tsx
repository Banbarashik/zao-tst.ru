"use client";

import { useState } from "react";
import type { CalculatorState } from "@/types/pritochnye-calculator";
import { downloadCalculatorPdf } from "@/lib/generateCalculatorPdf";
import type { Product } from "@/types";

interface PdfDownloadButtonProps {
  /** Текущее состояние калькулятора. null — кнопка задизейблена. */
  state: CalculatorState | null;
  products: Product[];
  className?: string;
}

/**
 * Кнопка «Скачать PDF».
 * Кнопка недоступна, пока state === null (нет результатов расчёта).
 * Во время генерации показывает спиннер и блокирует повторный клик.
 */
export function PdfDownloadButton({
  state,
  products,
  className,
}: PdfDownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const disabled = state === null || state.results === null || loading;

  async function handleClick() {
    if (!state) return;
    setLoading(true);
    setError(null);
    try {
      await downloadCalculatorPdf(state, products);
    } catch (err) {
      console.error("PDF generation failed:", err);
      setError("Не удалось сформировать PDF");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={className}
        style={
          !className
            ? {
                marginTop: 12,
                padding: "8px 18px",
                backgroundColor: disabled ? "#cccccc" : "#1a56a0",
                color: "#ffffff",
                border: "none",
                borderRadius: 4,
                cursor: disabled ? "not-allowed" : "pointer",
                fontSize: 14,
              }
            : undefined
        }
      >
        {loading ? "Формирование PDF…" : "Скачать PDF"}
      </button>

      {error && (
        <p style={{ color: "#cc3300", fontSize: 12, marginTop: 4 }}>{error}</p>
      )}
    </div>
  );
}
