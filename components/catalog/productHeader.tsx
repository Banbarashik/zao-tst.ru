"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function ProductHeader({
  text,
  modelLinks,
}: {
  text: string;
  modelLinks: {
    text: string;
    url: string;
  }[];
}) {
  const [isOpen, setIsOpen] = useState(false); // Add this state

  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h1 className="text-xl font-bold uppercase">{text}</h1>
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
          <ol>
            {modelLinks.map((ml) => (
              <li key={ml.text}>
                <Link
                  href={ml.url}
                  className="hover:text-primary-darker block py-1.5 text-center hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {ml.text}
                </Link>
              </li>
            ))}
          </ol>
        </PopoverContent>
      </Popover>
    </div>
  );
}
