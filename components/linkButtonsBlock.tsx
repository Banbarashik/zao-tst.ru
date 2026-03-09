"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import useYandexMetrika from "@/hooks/useYandexMetrika";

import { Button } from "@/components/ui/button";

export default function LinkButtonsBlock({ buttons }) {
  const { reachGoal } = useYandexMetrika();

  const buttonsAmount = buttons.length;

  return (
    <div
      className={cn("flex flex-col gap-2", {
        "@min-[616px]:flex-row": buttonsAmount === 2,
        "@3xl:flex-row": buttonsAmount === 3,
      })}
    >
      {buttons.map((btn) => (
        <Button
          key={btn.name}
          asChild
          className="shrink basis-full rounded-none border border-[#723910] bg-gray-200 text-black uppercase"
          onClick={btn.goal && (() => reachGoal(btn.goal))}
        >
          <Link href={btn.url} target={btn.openNewTab ? "_blank" : "_self"}>
            {btn.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
