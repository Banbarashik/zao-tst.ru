export function Anchor({
  num,
  device = "desktop",
}: {
  num: number;
  device?: "desktop" | "mobile";
}) {
  return (
    <span
      id={`anchor${num}`}
      className={`invisible relative ${device === "desktop" ? "-top-25" : "-top-13"}`}
    />
  );
}
