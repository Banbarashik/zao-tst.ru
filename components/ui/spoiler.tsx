"use client";

import { useState, type ReactNode } from "react";
import { Triangle } from "lucide-react";

import { cn } from "@/lib/utils";

interface SpoilerProps {
  title: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

export default function Spoiler({
  title,
  defaultOpen = false,
  className,
  contentClassName,
  children,
}: SpoilerProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("space-y-2", className)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="group text-primary-dark flex w-full cursor-pointer items-center justify-between border-2 p-1.5 text-lg"
      >
        <span className="text-left">{title}</span>
        <Triangle
          fill="var(--primary-dark)"
          strokeWidth={0}
          className={cn(
            "transition duration-300 group-hover:-rotate-180",
            open ? "-rotate-180" : "-rotate-90",
          )}
          width={22}
          height={22}
        />
      </button>
      <div className={cn(open ? "block" : "hidden", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
