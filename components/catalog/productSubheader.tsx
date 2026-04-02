import { cn } from "@/lib/utils";

export default function ProductSubheader({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <h2 className={cn(`mb-3 text-xl`, className)}>{text}</h2>;
}
