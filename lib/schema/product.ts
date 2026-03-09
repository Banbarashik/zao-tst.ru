import { SITE_URL } from "@/constants";
const CONTEXT = "https://schema.org";
const BRAND = "Т.С.Т.";

import type { Product } from "@/types";

export function createProductSchema(product: Product) {
  const image = product.img ? `${SITE_URL}${product.img.url}` : undefined;

  // ----- PRODUCT WITH VARIANTS -----
  if (product.variants?.length) {
    return {
      "@context": CONTEXT,
      "@type": "ProductGroup",
      "@id": `${SITE_URL}/${product.id}`,
      name: product.name,
      brand: {
        "@type": "Brand",
        name: BRAND,
      },
      image,
      variesBy: ["rows"],
      hasVariant: product.variants.map((v) => ({
        "@type": "Product",
        "@id": `${SITE_URL}/${product.id}#${v.id}`,
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
              url: `${SITE_URL}/${product.id}`,
            }
          : undefined,
      })),
    };
  }

  // ----- PRODUCT WITHOUT VARIANTS -----
  return {
    "@context": CONTEXT,
    "@type": "Product",
    "@id": `${SITE_URL}/${product.id}`,
    name: product.name,
    image,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: BRAND,
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
          url: `${SITE_URL}/${product.id}`,
        }
      : undefined,
  };
}
