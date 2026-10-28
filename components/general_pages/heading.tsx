import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Heading({
  lvl,
  text,
  className = "",
}: {
  lvl: 1 | 2 | 3 | 4;
  text: ReactNode;
  className?: string;
}) {
  if (lvl === 1)
    return (
      <h1
        className={cn(
          "mb-3 text-xl font-bold uppercase md:text-[22px] xl:text-2xl",
          className,
        )}
      >
        {text}
      </h1>
    );
  if (lvl === 2)
    return <h2 className={cn("mb-2 text-xl uppercase", className)}>{text}</h2>;
  if (lvl === 3)
    return <h3 className={cn("mb-2 text-lg uppercase", className)}>{text}</h3>;
  if (lvl === 4)
    return (
      <h4 className={cn("mb-2 text-[17px] uppercase", className)}>{text}</h4>
    );
}
