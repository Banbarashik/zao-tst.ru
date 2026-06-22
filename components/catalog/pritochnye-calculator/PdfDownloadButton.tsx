"use client";

import { usePdf } from "@/hooks/usePdf";

import type { CalculatorState } from "@/types/pritochnye-calculator";
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
  const { loading, error, disabled, generate } = usePdf({ state, products });

  async function handleClick() {
    const blob = await generate();
    if (!blob || !state) return;

    const safeLabel = state.modelLabel
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Zа-яА-Я0-9_\-x]/g, "");

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `Расчёт_${safeLabel}.pdf`;
    anchor.click();
    URL.revokeObjectURL(url);
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
