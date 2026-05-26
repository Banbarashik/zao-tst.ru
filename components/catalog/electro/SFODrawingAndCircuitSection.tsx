import Image from "next/image";

import ProductParagraph from "@/components/catalog/productParagraph";
import ProductSubheader from "@/components/catalog/productSubheader";

export function SFODrawingAndCircuitSection({ product }) {
  return (
    <section>
      <ProductSubheader
        text={`Чертеж и электрическая схема подключения электрокалорифера ${product.shortName}`}
      />
      <ProductParagraph className="mb-2">
        Ниже представлены чертеж с габаритными размерами и электрическая схема
        подключения электрокалорифера {product.shortName}.
      </ProductParagraph>
      <div className="flex w-full flex-col gap-3 sm:mb-10 sm:flex-row sm:gap-0">
        <div
          className="relative w-full"
          style={{
            aspectRatio: `${product.drawing.width} / ${product.drawing.height}`,
          }}
        >
          <Image
            src={product.drawing.url}
            title={`${product.name} габаритные размеры`}
            alt={`${product.altName} габаритные размеры`}
            fill
          />
        </div>
        <div
          className="relative w-full"
          style={{
            aspectRatio: `${product.scheme.width} / ${product.scheme.height}`,
          }}
        >
          <Image
            src={product.scheme.url}
            alt={`${product.altName} электрическая схема подключения`}
            title={`${product.name} электрическая схема подключения`}
            fill
          />
        </div>
      </div>
    </section>
  );
}
