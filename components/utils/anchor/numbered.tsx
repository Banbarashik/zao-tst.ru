import { Anchor } from "@/components/utils/anchor";

export function NumberedAnchor({
  num,
  device = "desktop",
}: {
  num: number;
  device?: "desktop" | "mobile";
}) {
  return <Anchor id={`anchor${num}`} device={device} />;
}
