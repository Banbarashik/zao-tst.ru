import Image from "next/image";

import ProductParagraph from "@/components/catalog/productParagraph";
import ProductSubheader from "@/components/catalog/productSubheader";
import LinkButtonsBlock from "@/components/linkButtonsBlock";

const anchorNumById = {
  "ustanovka-sfotc-250": 9,
};

export function SFOTCDimensionsSection({ product }) {
  return (
    <div className="mb-10 space-y-8">
      <section>
        <ProductSubheader
          text={`Габаритные размеры установки ${product.shortName}`}
        />
        <ProductParagraph>
          На чертеже представлены основные габаритные размеры
          электрокалориферной установки {product.shortName}: длина, ширина и
          высота воздухонагревателя по внешнему контуру.
        </ProductParagraph>
        <Image
          src={product.drawing}
          alt={`Электрокалориферная установка ${product.altShortName} габаритные размеры`}
          title={`Электрокалориферная установка ${product.shortName} габаритные размеры`}
          width={776}
          height={1}
          className="mx-auto"
        />
      </section>

      <LinkButtonsBlock
        buttons={[
          {
            name: "Расчет токовых нагрузок",
            url: "/elektrokalorifery#anchor1",
          },
          {
            name: `Подбор сечения кабеля ${product.shortName}`,
            url: `/elektrokalorifery#anchor${anchorNumById[product.id]}`,
          },
        ]}
        className="mb-6"
      />

      <section>
        <ProductSubheader
          text={`Электрическая схема подключения установки ${product.shortName}`}
        />
        <ProductParagraph>
          Подключение электрокалориферной установки {product.shortName} к
          питающей сети осуществляется согласно электрической схеме.
        </ProductParagraph>
        <Image
          src={product.scheme}
          alt={`Электрокалориферная установка ${product.altShortName} электрическая схема подключения`}
          title={`Электрокалориферная установка ${product.shortName} электрическая схема подключения`}
          width={678}
          height={1}
          className="mx-auto"
        />
      </section>
    </div>
  );
}
