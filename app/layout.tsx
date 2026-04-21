import "@/app/globals.css";

import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

import { ProductSelectionProvider } from "@/context/ProductSelectionContext";

import YandexMetrikaContainer from "@/components/YandexMetrikaContainer";

import Footer from "@/components/footer";
import NavigationMenu from "@/components/navigationMenu";
import BackToTop from "@/components/backToTopButton";
import HeaderWithSearch from "@/components/HeaderWithSearch";
import Image from "next/image";
import Logo from "@/components/ui/logo";
import { Mail, PhoneCall, Search } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductSelectionProvider>
      <html lang="ru">
        <head>
          <meta
            name="google-site-verification"
            content="zoqFDu0IDrSmlptxD8jppYL81zjhTx7a3P8WIzlZS5Y"
          />
          <Suspense>
            <YandexMetrikaContainer enabled />
          </Suspense>
        </head>
        <body className="font-arial flex min-h-screen flex-col antialiased">
          <header className="w-full text-white">
            {/* MAIN BAR */}
            <div className="bg-[#5e2129]">
              <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
                <Logo place="header" />

                <ul className="4xl:ml-12 3xl:ml-8 ml-3 flex flex-col items-start gap-y-2 text-white xl:text-sm">
                  <li className="hover:font-semibold">
                    <a
                      href="tel:+79617378314"
                      className="flex items-center gap-2.5"
                    >
                      <span className="rounded-full border border-white p-1.25">
                        <PhoneCall className="size-4 xl:size-4" />
                      </span>
                      <span>+7 (961) 737-83-14</span>
                    </a>
                  </li>
                  <li className="hover:text-shadow-[0_0_1px_currentColor]">
                    <a
                      href="mailto:zao_tst@mail.ru"
                      className="flex items-center gap-2.5"
                    >
                      <span className="rounded-full border border-white p-1.25">
                        <Mail className="size-4 xl:size-4" />
                      </span>
                      <span>zao_tst@mail.ru</span>
                    </a>
                  </li>
                </ul>

                {/* Search */}
                <div className="ml-6 flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Поиск товаров..."
                      className="border-accent/10 w-full max-w-md rounded-lg border bg-white/10 px-4 py-2.5 pl-10 text-sm text-white placeholder-white/60 outline-none focus:ring focus:ring-[#ffd166]/50"
                    />
                    <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-white/60" />
                  </div>
                </div>

                {/* CTA */}
                <button className="bg-primary rounded-lg border border-white/50 px-5 py-2.5 font-semibold shadow-sm transition hover:bg-[#c74f2b] hover:shadow-md">
                  Подать заявку
                </button>
              </div>
            </div>

            {/* NAV BAR */}
            <div className="bg-primary-darker/95 border-t border-white/10">
              <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 text-sm">
                <a className="border-b-2 border-[#ffd166] py-3 text-[#ffd166]">
                  Главная
                </a>

                <a className="group relative py-3 transition hover:text-[#ffd166]">
                  Продукция
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#ffd166] transition-all group-hover:w-full"></span>
                </a>

                <a className="py-3 transition hover:text-[#ffd166]">
                  Сертификаты
                </a>
                <a className="py-3 transition hover:text-[#ffd166]">
                  Прайс-лист
                </a>
                <a className="py-3 transition hover:text-[#ffd166]">
                  Калькулятор
                </a>
                <a className="py-3 transition hover:text-[#ffd166]">Контакты</a>
              </div>
            </div>
          </header>
          {/* Sticky trigger outside flex context */}
          <div className="sticky top-0 z-40 bg-white lg:hidden">
            <NavigationMenu variant="mobile" />
          </div>
          {/* Main content */}
          {children}
          <Footer />
          <BackToTop threshold={0.3} />
        </body>
        <GoogleAnalytics gaId="G-9EKGFKNDG0" />
      </html>
    </ProductSelectionProvider>
  );
}
