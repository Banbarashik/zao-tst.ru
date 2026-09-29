import Link from "next/link";

import { getProductDeliveryCityAriaLabel } from "@/data/regions/product-link-aria";
import type { ProductDeliveryRecord } from "@/data/regions/types";

type ProductForDeliveryLink = {
  name: string;
  id?: string;
};

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
  const text = prefix
    ? `${prefix} ${delivery.settlement.name}`
    : delivery.settlement.name;

  if (!delivery.settlement.href) {
    return <>{text}</>;
  }

  const ariaLabel = getProductDeliveryCityAriaLabel(
    product,
    delivery.settlement.name,
  );

  return (
    <Link
      href={delivery.settlement.href}
      className={className}
      aria-label={ariaLabel ?? undefined}
    >
      {text}
    </Link>
  );
}
