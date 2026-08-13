export function Anchor({
  id,
  device = "desktop",
}: {
  id: string;
  device?: "all" | "desktop" | "mobile";
}) {
  return (
    <span
      id={id}
      className={`invisible relative ${device === "all" ? "-top-13 lg:-top-25" : device === "desktop" ? "-top-25" : "-top-13"}`}
    />
  );
}
