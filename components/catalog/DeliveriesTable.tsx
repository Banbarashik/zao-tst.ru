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

export function DeliveriesTable({ deliveries }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Регион</th>
          <th>Населённый пункт</th>
          <th>Компания</th>
        </tr>
      </thead>

      <tbody>
        {deliveries.map((delivery) => (
          <tr
            key={`${delivery.region.slug}:${delivery.settlement.slug}:${delivery.company}`}
          >
            <td>{delivery.region.name}</td>

            <td>
              {getSettlementPrefix(delivery.settlement.type)}{" "}
              {delivery.settlement.name}
            </td>

            <td>{delivery.company}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
