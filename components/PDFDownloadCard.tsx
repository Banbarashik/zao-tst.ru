"use client";

import Image from "next/image";
import Link from "next/link";

import { Download } from "lucide-react";

import { cn } from "@/lib/utils";
import useYandexMetrika from "@/hooks/useYandexMetrika";

// prettier-ignore
export function PDFDownloadCard({ url, img, alt, className = "" }: { url: string; img: string; alt: string; className?: string }) {
  const { reachGoal } = useYandexMetrika();

  return (
    <Link
      href={url}
      target="_blank"
      className={cn("relative shrink-0 cursor-pointer", className)}
      onClick={() => reachGoal('open_pdf')}
    >
      <span className="absolute top-0.5 left-2 -translate-1/2 rounded-md px-1 text-lg font-bold text-red-700">
        PDF
      </span>
      <Download className="absolute -right-1 -bottom-1" />
      <Image
        src={img}
        alt={alt}
        width={100}
        height={1}
        className="border-3"
      />
    </Link>
  );
}
