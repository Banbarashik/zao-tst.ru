import { cn } from "@/lib/utils";

export function Separator({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto h-1 w-2/3 rounded-full bg-blue-300/50 mask-[linear-gradient(to_right,transparent,black,transparent)]",
        className,
      )}
    />
  );
}

// mx-auto w-2/3 rounded-full bg-blue-300/50
