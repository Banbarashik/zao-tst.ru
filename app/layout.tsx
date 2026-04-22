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

import { Calculator } from "lucide-react";

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
            {/* NAV BAR */}
            <div className="border-b border-white/10 bg-[#4c2b20]/95">
              <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 text-sm">
                <a className="ml-auto flex items-center gap-1 py-2 transition hover:text-[#ffd166]">
                  <Calculator />
                  Подбор водяных калориферов
                </a>
                <a className="flex items-center gap-1 py-2 transition hover:text-[#ffd166]">
                  <Calculator />
                  Подбор паровых калориферов
                </a>
                <a className="mr-auto flex items-center gap-1 py-2 transition hover:text-[#ffd166]">
                  <Calculator />
                  Подбор электрокалориферов
                </a>
              </div>
            </div>

            {/* MAIN BAR */}
            <div className="bg-[#5e2129]">
              <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4">
                <Logo place="header" />

                <ul className="4xl:ml-12 3xl:ml-8 ml-3 flex flex-col items-start gap-y-2 text-white xl:text-[15px]">
                  <li className="group">
                    <a
                      href="tel:+79617378314"
                      className="flex items-center gap-2.5 group-hover:text-[#7ebab5]"
                    >
                      <span className="rounded-full border border-white p-1.25 group-hover:border-[#7ebab5]">
                        <PhoneCall className="size-4 xl:size-4" />
                      </span>
                      <span>+7 (961) 737-83-14</span>
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="mailto:zao_tst@mail.ru"
                      className="flex items-center gap-2.5 group-hover:text-[#7ebab5]"
                    >
                      <span className="rounded-full border border-white p-1.25 group-hover:border-[#7ebab5]">
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
                <a className="mb-0.75 border-b-2 border-[#ffd166] py-3 text-[#ffd166]">
                  Главная
                </a>
                <a className="mb-0.75 py-3 transition hover:text-[#ffd166]">
                  Каталог
                </a>
                <a className="group relative mb-0.75 py-3 transition hover:text-[#ffd166]">
                  Продукция Сертификаты
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#ffd166] transition-all group-hover:w-full"></span>
                </a>
                <a className="mb-0.75 py-3 transition hover:text-[#ffd166]">
                  Калориферы
                </a>
                <a className="mb-0.75 py-3 transition hover:text-[#ffd166]">
                  Агрегаты
                </a>
                <a className="mb-0.75 py-3 transition hover:text-[#ffd166]">
                  Установки
                </a>
                <a className="mb-0.75 py-3 transition hover:text-[#ffd166]">
                  Техническая страница
                </a>
                <a className="mb-0.75 py-3 transition hover:text-[#ffd166]">
                  Контакты Прайс лист
                </a>
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
