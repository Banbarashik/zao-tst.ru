export function Anchor({
  id,
  device = "desktop",
}: {
  id: string;
  device?: "desktop" | "mobile";
}) {
  return (
    <span
      id={id}
      className={`invisible relative ${device === "desktop" ? "-top-25" : "-top-13"}`}
    />
  );
}
