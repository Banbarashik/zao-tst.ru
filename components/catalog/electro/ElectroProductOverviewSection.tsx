import productData from "@/data/products.json";

import { sortProducts } from "@/lib/utils";

import ProductCard from "@/components/catalog/productCard";
import ProductParagraph from "@/components/catalog/productParagraph";
import SimilarProductLink from "@/components/catalog/similarProductLink";
import {
  ELECTRO_CATEGORY_META,
  getElectroProductTitle,
  getPreciseElectroCategory,
} from "@/components/catalog/electro/electroCategoryMeta";

export function ElectroProductOverviewSection({ product }) {
  const preciseCategory = getPreciseElectroCategory(product) ?? "sfo";
  const categoryMeta = ELECTRO_CATEGORY_META[preciseCategory];
  const isSFOTC = preciseCategory === "sfotc";
  const isSHUK = preciseCategory === "shuk";

  const productsByCategory = productData.filter((p) =>
    p.categories.includes("energonagrevatelynoe-oborudovanie"),
  );
  const productsByPreciseCategory = productsByCategory.filter((p) =>
    p.categories.includes(preciseCategory),
  );
  const productsBySize = productsByCategory
    .filter((p) => p.id !== product.id && p.size === product.size)
    .sort((a, b) => sortProducts(a.shortName, b.shortName));

  const productName = getElectroProductTitle(product, preciseCategory);

  return (
    <section className="mb-6 grid grid-rows-[minmax(0,max-content)_1fr] gap-y-5 sm:grid-cols-[max-content_minmax(0,1fr)] sm:gap-x-6">
      <ProductCard
        product={product}
        isLink={false}
        className="row-start-1 row-end-3 self-start justify-self-start sm:row-span-1 xl:col-start-1 xl:row-start-1 xl:row-end-3"
      />
      {/* text */}
      <div className="sm:col-span-full sm:row-start-2 xl:col-auto xl:row-start-1">
        <div className="mb-3 text-xl">
          <h2>{productName}.</h2>
          {!isSHUK && <p>ТУ 3442-004-55613706-02</p>}
        </div>
        {isSHUK ? (
          <>
            Шкаф управления калорифером ШУК обеспечивает:
            <ul>
              <li>
                - невозможность включения секций электрических нагревателей при
                не включенном вентиляторе;
              </li>
              <li>
                - отключение электродвигателя вентилятора при токовых
                перегрузках и заклинивании ротора;
              </li>
              <li>
                - отключение секций электрокалорифера при аварийном отключении
                электродвигателя вентилятора;
              </li>
              <li>
                - отключение всех секций при срабатывании термовыключателя
                защиты ТЭНов от аварийного перегрева.
              </li>
            </ul>
          </>
        ) : (
          <>
            <ProductParagraph>
              Теплоотдающие элементы{isSFOTC ? " калорифера СФО:" : ":"}
            </ProductParagraph>
            <ul className="text-[17px]">
              <li>- трубчатые электронагреватели Р-54А-13/2.5о220</li>
              <li>с алюминиевым (АД1 ТУ 1-8-267-99) накатным оребрением</li>
            </ul>
          </>
        )}
      </div>
      {/* chips */}
      <div className="mr-px space-y-4">
        <div className="flex flex-col gap-1">
          <ProductParagraph className="font-bold">
            Все типоразмеры {categoryMeta.pluGen}
          </ProductParagraph>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(90px,max-content))] gap-x-3 gap-y-4">
            {productsByPreciseCategory.map((p) => (
              <li key={p.id}>
                <SimilarProductLink id={p.id} isActive={p.id === product.id}>
                  {p.shortName}
                </SimilarProductLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <ProductParagraph className="font-bold">
            Сопутствующее оборудование
          </ProductParagraph>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(90px,max-content))] gap-x-3 gap-y-4">
            {productsBySize.map((p) => (
              <li key={p.id}>
                <SimilarProductLink id={p.id} isActive={p.id === product.id}>
                  {p.shortName}
                </SimilarProductLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
