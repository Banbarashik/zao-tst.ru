import Link from "next/link";
import type { ProductDeliveryRecord } from "@/data/regions/types";

function getSettlementPrefix(type: string) {
  switch (type) {
    case "city":
      return "г.";
    case "village":
      return "с.";
    case "settlement":
      return "п.";
    case "urban-settlement":
      return "пгт.";
    default:
      return "";
  }
}

export function DeliveriesTable({
  deliveries,
}: {
  deliveries: ProductDeliveryRecord[];
}) {
  return (
    <div className="mb-2 w-full overflow-x-auto">
      <table className="w-full min-w-231 xl:min-w-auto">
        <thead>
          <tr>
            <th className="py-0.5">Регион</th>
            <th>Населенный пункт</th>
            <th>Компания</th>
            <th>Отрасль промышленности</th>
          </tr>
        </thead>

        <tbody>
          {deliveries.map((delivery) => {
            let deliveryLocLink = "";

            if (delivery.settlement?.href) {
              deliveryLocLink = delivery.settlement.href;
            } else if (delivery.region.href) {
              deliveryLocLink = delivery.region.href;
            }

            return (
              <tr
                key={`${delivery.region.slug}:${delivery.settlement.slug}:${delivery.company}`}
              >
                <td className="py-0.5 pl-1.5 text-left">
                  {delivery.region.name}
                </td>

                <td className="pl-1.5 text-left">
                  <Link
                    href={deliveryLocLink}
                    className="text-primary-dark hover:text-primary"
                  >
                    {getSettlementPrefix(delivery.settlement.type)}{" "}
                    {delivery.settlement.name}
                  </Link>
                </td>

                <td>{delivery.company}</td>
                <td>{delivery.industrySector}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
