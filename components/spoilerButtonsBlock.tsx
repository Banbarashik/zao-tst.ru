"use client";

import { useState, type ReactNode } from "react";
import { Triangle } from "lucide-react";

import { cn } from "@/lib/utils";

import useYandexMetrika from "@/hooks/useYandexMetrika";

export default function SpoilerButtonsBlock({
  buttons,
  className = "",
  groupId,
  activeKey,
  onActiveKeyChange,
}: {
  buttons: {
    name: string;
    hiddenText?: string;
    children: ReactNode;
    defaultOpen?: boolean;
    goal?: string;
  }[];
  className?: string;
  /** Optional id for grouping keys when controlled from parent */
  groupId?: string;
  /** Controlled active key (e.g. "groupId:2") or null */
  activeKey?: string | null;
  /** Controlled change handler */
  onActiveKeyChange?: (key: string | null) => void;
}) {
  const { reachGoal } = useYandexMetrika();

  const isControlled = typeof onActiveKeyChange === "function" && !!groupId;

  const [internalOpenIndex, setInternalOpenIndex] = useState<number | null>(
    () => {
      const defaultOpenIndex = buttons.findIndex(
        (button) => button.defaultOpen,
      );
      return defaultOpenIndex >= 0 ? defaultOpenIndex : null;
    },
  );

  const toggleButton = (index: number, goal?: string) => {
    if (goal) {
      reachGoal(goal);
    }

    if (isControlled) {
      const key = `${groupId}:${index}`;
      onActiveKeyChange?.(activeKey === key ? null : key);
      return;
    }

    setInternalOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={cn(className, "@container flex flex-col gap-2")}>
      <div className="grid grid-cols-1 gap-2 @xl:grid-cols-2 @4xl:grid-cols-3">
        {buttons.map((btn, index) => {
          const key = `${groupId}:${index}`;
          const isOpen = isControlled
            ? activeKey === key
            : internalOpenIndex === index;

          return (
            <div key={`${btn.name}-${index}`} className="w-full min-w-0">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleButton(index, btn.goal)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-none border border-[#723910] bg-gray-200 px-4 py-3 text-left text-base font-medium text-black uppercase",
                  isOpen && "border-b-0",
                )}
              >
                <span className="whitespace-nowrap">{btn.name}</span>
                {btn.hiddenText && (
                  <span className="sr-only">{btn.hiddenText}</span>
                )}
                <Triangle
                  fill="var(--primary-dark)"
                  strokeWidth={0}
                  className={cn(
                    "shrink-0 transition-transform duration-300",
                    isOpen ? "-rotate-180" : "-rotate-90",
                  )}
                  width={18}
                  height={18}
                />
              </button>
            </div>
          );
        })}
      </div>

      {buttons.map((btn, index) => {
        const key = `${groupId}:${index}`;
        const isOpen = isControlled
          ? activeKey === key
          : internalOpenIndex === index;

        if (!isOpen) {
          return null;
        }

        return (
          <div
            key={`${btn.name}-content-${index}`}
            className="w-full overflow-hidden border border-[#723910] bg-white p-4 text-base text-black"
          >
            {btn.children}
          </div>
        );
      })}
    </div>
  );
}
