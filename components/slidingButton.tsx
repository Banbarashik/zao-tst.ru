"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import useYandexMetrika from "@/hooks/useYandexMetrika";

export function SlidingButton({
  url = "",
  frontText = "",
  backText = "",
  className = "",
  openNewTab = false,
  goal = "",
}) {
  const { reachGoal } = useYandexMetrika();

  return (
    <Link
      href={url}
      onClick={() => goal && reachGoal(goal)}
      className={cn(className, "button button-7")}
      target={openNewTab ? "_blank" : "_self"}
    >
      <div className="dub-arrow">{backText}</div>
      <span>{frontText}</span>
    </Link>
  );
}
