"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
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

  const contentRef = useRef<HTMLDivElement | null>(null);

  const openIndex = (() => {
    if (isControlled) {
      if (!activeKey) return null;
      const parts = activeKey.split(":");
      const idx = Number(parts[1]);
      return Number.isNaN(idx) ? null : idx;
    }
    return internalOpenIndex;
  })();

  const renderedIndex =
    openIndex !== null && buttons[openIndex] ? openIndex : null;

  useEffect(() => {
    const updateHeight = () => {
      const el = contentRef.current;
      if (!el) return;

      if (openIndex !== null && buttons[openIndex]) {
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.opacity = "1";
      } else {
        el.style.maxHeight = "0px";
        el.style.padding = "0px";
        el.style.opacity = "0";
      }
    };

    // Update after render so content is present when measuring
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [openIndex, buttons]);

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
                  "group flex w-full cursor-pointer items-center justify-between gap-3 rounded-none border border-[#723910] bg-gray-200 px-4 py-3 text-left text-base font-medium text-black uppercase",
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
                    "transition duration-300 group-hover:-rotate-180",
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

      {/* Single content container placed under the buttons rectangle so distance is consistent */}
      <div
        ref={(el) => {
          contentRef.current = el;
        }}
        aria-hidden={openIndex === null}
        className="w-full overflow-hidden border border-t-0 border-[#723910] bg-[rgb(233,239,247)] transition-[max-height,opacity,padding] duration-300"
        style={{ maxHeight: 0, padding: 0, opacity: 0 }}
      >
        <div className="text-base text-black">
          {renderedIndex !== null && buttons[renderedIndex]
            ? buttons[renderedIndex].children
            : null}
        </div>
      </div>
    </div>
  );
}
