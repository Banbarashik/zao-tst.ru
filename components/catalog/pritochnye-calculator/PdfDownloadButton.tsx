"use client";

import { GENERATE_CALC_PDF_GOAL } from "@/constants";

import useYandexMetrika from "@/hooks/useYandexMetrika";
import { usePdf } from "@/hooks/usePdf";

import { cn } from "@/lib/utils";

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
  className = "",
}: PdfDownloadButtonProps) {
  const { reachGoal } = useYandexMetrika();
  const { loading, error, disabled, generate } = usePdf({ state, products });

  async function handleClick() {
    reachGoal(GENERATE_CALC_PDF_GOAL);

    const blob = await generate();
    if (!blob || !state) return;

    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
    // Небольшая задержка перед revoke — нужна, чтобы браузер
    // успел открыть вкладку до того, как URL станет недействительным
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "w-full min-w-30 rounded-sm px-3 py-2 text-white shadow-xs transition duration-150",
          disabled
            ? "cursor-not-allowed bg-[#ccc]"
            : "cursor-pointer bg-[hsl(193,52%,54%)] hover:bg-[hsl(193,52%,44%)]",
        )}
      >
        {loading ? "Формирование PDF…" : "Скачать PDF"}
      </button>
      {error && <p className="mt-1 text-xs text-[#cc3300]">{error}</p>}
    </div>
  );
}
