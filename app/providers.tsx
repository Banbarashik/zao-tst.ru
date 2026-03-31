"use client";

import { SessionProvider } from "next-auth/react";
import { ProductSelectionProvider } from "@/context/ProductSelectionContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ProductSelectionProvider>{children}</ProductSelectionProvider>
    </SessionProvider>
  );
}
