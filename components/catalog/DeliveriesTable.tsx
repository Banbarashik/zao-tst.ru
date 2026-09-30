import type { ProductDeliveryRecord } from "@/data/regions/types";

import { ProductDeliveryCityLink } from "@/components/catalog/productDeliveryCityLink";

export function DeliveriesTable({
  product,
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
                  <ProductDeliveryCityLink
                    product={product}
                    delivery={delivery}
                  />
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
