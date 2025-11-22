import { cn } from "@/lib/utils";

export default function ProductParagraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-[17px]", className)}>{children}</p>;
}
