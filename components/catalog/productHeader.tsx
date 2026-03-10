import Link from "next/link";

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
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h1 className="text-xl font-bold uppercase">{text}</h1>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="unstyled"
            className="bg-accent w-40 rounded-md px-3 py-2 text-sm font-semibold"
          >
            Скачать 3D-модель
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-40 rounded-sm p-0">
          <ol>
            {modelLinks.map((ml) => (
              <li key={ml.text}>
                <Link href={ml.url} className="block py-1.5 text-center">
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
