"use client";

import Link from "next/link";
import { useState } from "react";

import useYandexMetrika from "@/hooks/useYandexMetrika";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export function ModelDownloadButton({
  modelLinks,
}: {
  modelLinks: {
    text: string | undefined;
    url: string | undefined;
  }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { reachGoal } = useYandexMetrika();

  if (modelLinks.some((ml) => !ml.text || !ml.url)) return <></>;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="unstyled"
          className="bg-accent w-40 rounded-md px-3 py-2 text-sm font-semibold"
        >
          Скачать 3D-модель
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={10}
        className="w-40 rounded-sm p-0"
      >
        <ol className="outline-accent overflow-hidden rounded-sm outline">
          {modelLinks.map((ml) => (
            <li key={ml.text}>
              <Link
                href={ml.url}
                className="hover:text-primary-darker block py-1.75 text-center hover:bg-gray-100"
                onClick={() => {
                  setIsOpen(false);
                  reachGoal("model_download");
                }}
              >
                {ml.text}
              </Link>
            </li>
          ))}
        </ol>
      </PopoverContent>
    </Popover>
  );
}
