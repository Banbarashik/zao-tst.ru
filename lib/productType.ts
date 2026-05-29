export function getProductType({
  categories,
}: {
  categories: string[];
}): "electrokalorifer" | "kalorifer" | undefined {
  const isKalorifer = categories.includes("kalorifer");
  const isEnergoOborudovanie = categories.includes(
    "energonagrevatelynoe-oborudovanie",
  );

  if (isKalorifer && isEnergoOborudovanie) return "electrokalorifer";
  if (isKalorifer) return "kalorifer";
}
