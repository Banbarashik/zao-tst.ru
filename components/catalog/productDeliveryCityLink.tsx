import Link from "next/link";

import { getProductDeliveryCityAriaLabel } from "@/data/regions/product-link-aria";
import type { ProductDeliveryRecord } from "@/data/regions/types";

type ProductForDeliveryLink = {
  name: string;
  id?: string;
};

function cleanSettlementName(name: string) {
  return name.replace(/^(?:г\.|с\.|п\.|пгт\.)\s*/i, "").trim();
}

function settlementPrefix(type: ProductDeliveryRecord["settlement"]["type"]) {
  switch (type) {
    case "city":
      return "г.";
    case "village":
      return "с.";
    case "settlement":
      return "п.";
    case "urban-settlement":
      return "пгт.";
    case "other":
      return "";
  }
}

export function ProductDeliveryCityLink({
  product,
  delivery,
  className = "text-primary",
}: {
  product: ProductForDeliveryLink;
  delivery: ProductDeliveryRecord;
  className?: string;
}) {
  const prefix = settlementPrefix(delivery.settlement.type);
  const settlementName = cleanSettlementName(delivery.settlement.name);
  const text = prefix ? `${prefix} ${settlementName}` : settlementName;

  // Столица / anchor-город ведут на собственный URL/anchor.
  // Остальные населённые пункты ведут на h3 субъекта.
  const href = delivery.settlement.href ?? delivery.region.href;

  const ariaLabel = getProductDeliveryCityAriaLabel(product, delivery);

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel ?? undefined}
    >
      {text}
    </Link>
  );
}
