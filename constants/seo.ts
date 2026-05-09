export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Т.С.Т.",
  url: "https://zao-tst.ru",
  logo: "https://zao-tst.ru/img/logo_header.png",
  description:
    "Завод-изготовитель воздушно-отопительного оборудования. Производство водяных, паровых, электрических калориферов, агрегатов и установок воздушного отопления",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Юргинская, д. 1",
    addressLocality: "Киселевск",
    addressRegion: "Кемеровская область",
    postalCode: "652707",
    addressCountry: "RU",
  },
  location: {
    "@type": "Place",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.954706",
      longitude: "86.685404",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-961-737-83-14",
    email: "zao_tst@mail.ru",
    contactType: "sales",
    areaServed: "RU",
    availableLanguage: "Russian",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "RU",
      description: "Доставка по всей территории России",
    },
    {
      "@type": "Country",
      name: "KZ",
      description: "Поставки в Казахстан",
    },
    {
      "@type": "Country",
      name: "BY",
      description: "Поставки в Беларусь",
    },
  ],
};
