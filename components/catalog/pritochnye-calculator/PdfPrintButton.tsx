"use client";

import { GENERATE_CALC_PDF_GOAL } from "@/constants";

import useYandexMetrika from "@/hooks/useYandexMetrika";
import { usePdf } from "@/hooks/usePdf";

import { cn } from "@/lib/utils";
import { printPdfBlob } from "@/lib/printPdf";

import type { CalculatorState } from "@/types/pritochnye-calculator";
import type { Product } from "@/types/index";

interface PdfPrintButtonProps {
  state: CalculatorState | null;
  products: Product[];
  className?: string;
}

export function PdfPrintButton({
  state,
  products,
  className = "",
}: PdfPrintButtonProps) {
  const { reachGoal } = useYandexMetrika();
  const { loading, error, disabled, generate } = usePdf({ state, products });

  async function handleClick() {
    reachGoal(GENERATE_CALC_PDF_GOAL);

    const blob = await generate();
    if (!blob) return;
    printPdfBlob(blob);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "w-full min-w-30 rounded-sm px-3 py-2 shadow-xs transition duration-150",
          disabled
            ? "cursor-not-allowed bg-[#ccc] text-white"
            : "bg-accent hover:bg-accent-dark cursor-pointer text-black",
        )}
      >
        {loading ? "Формирование PDF…" : "Печать"}
      </button>
      {error && <p className="mt-1 text-xs text-[#cc3300]">{error}</p>}
    </div>
  );
}
