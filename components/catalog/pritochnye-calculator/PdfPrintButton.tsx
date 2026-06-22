"use client";

import type { CalculatorState } from "@/types/pritochnye-calculator";
import type { Product } from "@/types/index";
import { usePdf } from "@/hooks/usePdf";
import { printPdfBlob } from "@/lib/printPdf";

interface PdfPrintButtonProps {
  state: CalculatorState | null;
  products: Product[];
  className?: string;
}

export function PdfPrintButton({
  state,
  products,
  className,
}: PdfPrintButtonProps) {
  const { loading, error, disabled, generate } = usePdf({ state, products });

  async function handleClick() {
    const blob = await generate();
    if (!blob) return;
    printPdfBlob(blob);
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
                backgroundColor: disabled ? "#cccccc" : "#2e7d32",
                color: "#ffffff",
                border: "none",
                borderRadius: 4,
                cursor: disabled ? "not-allowed" : "pointer",
                fontSize: 14,
              }
            : undefined
        }
      >
        {loading ? "Формирование PDF…" : "Печать"}
      </button>
      {error && (
        <p style={{ color: "#cc3300", fontSize: 12, marginTop: 4 }}>{error}</p>
      )}
    </div>
  );
}
