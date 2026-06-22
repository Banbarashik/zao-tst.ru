"use client";

import { useState } from "react";

import type { CalculatorState } from "@/types/pritochnye-calculator";
import type { Product } from "@/types";

import { cn } from "@/lib/utils";

import { WaterCalculator } from "@/components/catalog/pritochnye-calculator/WaterCalculator";
import { SteamCalculator } from "@/components/catalog/pritochnye-calculator/SteamCalculator";
import { PdfDownloadButton } from "@/components/catalog/pritochnye-calculator/PdfDownloadButton";
import { PdfPrintButton } from "@/components/catalog/pritochnye-calculator/PdfPrintButton";

interface CalculatorBlockProps {
  type: "water" | "steam";
  modelId: string;
  products: Product[];
  className?: string;
}

export function CalculatorBlock({
  type,
  modelId,
  products,
  className = "",
}: CalculatorBlockProps) {
  const [state, setState] = useState<CalculatorState | null>(null);

  return (
    <div className={cn("legacy-html legacy-calculator", className)}>
      {type === "water" ? (
        <WaterCalculator modelId={modelId} onStateChange={setState} />
      ) : (
        <SteamCalculator modelId={modelId} onStateChange={setState} />
      )}

      <div className="mt-4 flex flex-wrap justify-end gap-3">
        <PdfPrintButton state={state} products={products} />
        <PdfDownloadButton state={state} products={products} />
      </div>
    </div>
  );
}
