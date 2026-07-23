import Image from "next/image";
import ProductParagraph from "@/components/catalog/productParagraph";
import ProductSubheader from "@/components/catalog/productSubheader";
import { SfotcSpecTable } from "@/components/catalog/electro/SfotcSpecTable";

export function SfotcSpecSection({ product, table }) {
  return (
    <section className="mb-6">
      <ProductSubheader
        text={`Технические характеристики установки ${product.shortName}`}
      />
      <ProductParagraph className="mb-3">
        В таблице приведены основные технические характеристики и справочные
        данные по комплектующим для запуска электрокалориферной установки{" "}
        {product.shortName} в работу.
      </ProductParagraph>
      <div className="mb-4 flex flex-col gap-4 sm:flex-row md:gap-6 lg:gap-4 xl:gap-10">
        <div
          className={`relative w-full`}
          style={{
            aspectRatio: `${product.frontView?.width}/${product.frontView?.height}`,
          }}
        >
          <Image
            src={product.frontView?.url || "/"}
            title={`Электрокалориферная установка ${product.shortName}`}
            alt={`Электрокалориферная установка ${product.altShortName}`}
            fill
          />
        </div>
        <div
          className={`relative w-full`}
          style={{
            aspectRatio: `${product.parts?.width}/${product.parts?.height}`,
          }}
        >
          <Image
            src={product.parts?.url || "/"}
            title={`Установка с электрокалорифером ${product.shortName}`}
            alt={`Установка с электрокалорифером ${product.altShortName}`}
            fill
          />
        </div>
      </div>
      <SfotcSpecTable data={table} />
    </section>
  );
}
