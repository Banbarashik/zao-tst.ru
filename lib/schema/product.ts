type Product = {
  id: string;
  name: string;
  shortName?: string;
  series?: string;
  model?: string;
  heatPower?: number;
  price?: number;
  airPower?: number;
  rows?: number;
  img?: { url: string };
  variants?: Variant[];
};

type Variant = {
  id: string;
  name: string;
  heatPower?: number;
  price?: number;
  rows?: number;
};

export function createProductSchema(product: Product) {
  const baseUrl = "https://zao-tst.ru";

  const image = product.img ? `${baseUrl}${product.img.url}` : undefined;

  // ----- PRODUCT WITH VARIANTS -----
  if (product.variants) {
    return {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "@id": `${baseUrl}/${product.id}`,
      name: product.name,
      brand: {
        "@type": "Brand",
        name: "ТСТ",
      },
      image,
      hasVariant: product.variants.map((v) => ({
        "@type": "Product",
        "@id": `${baseUrl}/${v.id}`,
        name: v.name,
        sku: v.id,
        additionalProperty: [
          v.rows && {
            "@type": "PropertyValue",
            name: "Количество рядов труб",
            value: v.rows,
          },
          v.heatPower && {
            "@type": "PropertyValue",
            name: "Тепловая мощность",
            value: v.heatPower,
            unitText: "кВт",
          },
        ].filter(Boolean),
        offers: v.price
          ? {
              "@type": "Offer",
              price: v.price,
              priceCurrency: "RUB",
              availability: "https://schema.org/InStock",
              url: `${baseUrl}/${v.id}`,
            }
          : undefined,
      })),
    };
  }

  // ----- PRODUCT WITHOUT VARIANTS -----
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${baseUrl}/${product.id}`,
    name: product.name,
    image,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "ТСТ",
    },
    additionalProperty: [
      product.rows && {
        "@type": "PropertyValue",
        name: "Количество рядов труб",
        value: product.rows,
      },
      product.airPower && {
        "@type": "PropertyValue",
        name: "Производительность по воздуху",
        value: product.airPower,
        unitText: "м³/ч",
      },
      product.heatPower && {
        "@type": "PropertyValue",
        name: "Тепловая мощность",
        value: product.heatPower,
        unitText: "кВт",
      },
    ].filter(Boolean),
    offers: product.price
      ? {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
          url: `${baseUrl}/${product.id}`,
        }
      : undefined,
  };
}
