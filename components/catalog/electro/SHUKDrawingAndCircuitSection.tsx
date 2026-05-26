import Image from "next/image";

import ProductSubheader from "@/components/catalog/productSubheader";

export function SHUKDrawingAndCircuitSection({ product }) {
  return (
    <section>
      <ProductSubheader
        text={`Чертеж и электрическая схема подключения шкафа управления ${product.shortName}`}
      />
      <p>
        Структура условного обозначения в принципиальной схеме{" "}
        {product.shortName}: {product.specsTableLegend}
      </p>
      <div className="mb-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-0">
        <div
          className="relative w-1/2 max-w-80.5"
          style={{ aspectRatio: "700 / 950" }}
        >
          <Image
            src={product.drawing}
            alt={`Щит управления калорифером ${product.shortName}`}
            title={`Шкаф управления калорифером ${product.shortName} габаритные размеры`}
            fill
          />
        </div>
        <div
          className="relative w-full max-w-161.25"
          style={{ aspectRatio: "1400 / 950" }}
        >
          <Image
            src={product.scheme}
            alt={`Блок управления калорифером ${product.shortName} электросхема`}
            title={`Шкаф управления калорифером ${product.shortName} электрическая схема подключения`}
            fill
          />
        </div>
      </div>
    </section>
  );
}
