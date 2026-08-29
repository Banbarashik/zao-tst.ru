import { getProductDeliveryRecords } from "@/data/regions/product-deliveries.generated";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { getHeatCarrierAdj } from "@/lib/heatCarrierAdj";

import { DeliveriesTable } from "@/components/catalog/DeliveriesTable";
import Spoiler from "@/components/ui/spoiler";
import { BankDetailsTable } from "@/components/BankDetailsTable";

export function DeliverySection({
  product,
  specs,
  specsNote,
  className = "",
}: {
  specs?: { dimensions: number[]; weight: number };
  specsNote?: ReactNode;
  className?: string;
}) {
  const heatCarrierAdj = getHeatCarrierAdj(product.heatCarrier);
  const deliveries = getProductDeliveryRecords(product.id);

  const isKalorifer = product.categories.includes("kalorifer");
  const isKSK = product.categories.includes("ksk");
  const isKPSK = product.categories.includes("kpsk");
  const isSFO = product.categories.includes("sfo");
  const isSFOTC = product.categories.includes("sfotc");
  const isSHUK = product.categories.includes("shuk");

  const volume = specs?.dimensions.reduce((sum, cur) => sum * cur, 1);

  const defaultSpecsNote = (
    <>
      Данные {isSHUK && "шкафа управления"} {isSFO && "воздухонагревателя"}{" "}
      {(isKSK || isKPSK) && `${heatCarrierAdj.gen} теплообменника`}{" "}
      {isKSK && product.shortName}
      {isKPSK && `КП-Ск ${product.rows}-${product.size}`} для транспортировки.
      Внешние габаритные размеры{isSFOTC && ` установки ${product.shortName}`}:{" "}
      {specs?.dimensions[0].toFixed(3)} м х {specs?.dimensions[1].toFixed(3)} м
      х {specs?.dimensions[2].toFixed(3)} м; объем
      {isSHUK && ` ${product.shortName}`}: {volume?.toFixed(3)} м<sup>3</sup>;
      вес {isSHUK ? "блока" : ""}
      {isKalorifer ? ` калорифера ${product.shortName}:` : ":"} {specs?.weight}{" "}
      кг.
    </>
  );

  return (
    <section className={cn("text-example space-y-4 text-[17px]", className)}>
      <h3 className="mb-2 text-xl">
        Оплата и доставка {isSHUK && "шкафа управления"}
        {isSFO && "электрокалорифера"} {(isKSK || isKPSK) && "калорифера"}{" "}
        {isSFOTC && "установки"} {product.shortName}
      </h3>

      <div>
        <p>
          Заказать {isSHUK && "шкаф"} {isKalorifer && "калорифер"}{" "}
          {isSFOTC && "установку"} {product.shortName} на нашем предприятии
          можно следующими способами:
        </p>
        <ul>
          <li>
            • позвонив по телефону:{" "}
            <a
              href="tel:+79049681488"
              className="hover:text-primary-dark font-bold"
            >
              +7 (904) 968-14-88
            </a>
          </li>
          <li>• заполнив форму заявки на нашем сайте</li>
          <li>
            • отправив письмо на электронную почту:{" "}
            <a
              href="mailto:zao_tst@mail.ru"
              className="hover:text-primary-dark font-bold"
            >
              zao_tst@mail.ru
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p>
          Способы оплаты {isSHUK && "шкафа управления калорифером"}{" "}
          {isSFO && "электрического"} {isKalorifer && "калорифера"}{" "}
          {isSFOTC && "установки"} {product.shortName}:
        </p>
        <ul>
          <li>• на основании счета с частичной или полной оплатой</li>
          <li>• на основании договора с частичной или полной постоплатой</li>
        </ul>
      </div>

      <div>
        <p>Первичная документация:</p>
        <ul>
          <li>• универсальный передаточный документ УПД</li>
          <li>• обмен документами через ЭДО</li>
        </ul>
      </div>

      <BankDetailsTable />

      <div>
        <p>
          Доставка {isSHUK && "шкафа управления"} {isKalorifer && "калорифера"}{" "}
          {isSFOTC && "установки"} {product.shortName}:
        </p>
        <ul>
          <li>
            • самовывоз со склада завода, расположенного по адресу: г.
            Киселевск, ул. Юргинская 1
          </li>
          <li>
            • с терминалов ТК «ПЭК», «Деловые Линии» и др. г. Прокопьевска
          </li>
          <li>• поставка автотранспортом нашего предприятия</li>
        </ul>
      </div>

      <Spoiler title="Региональные поставки">
        <DeliveriesTable deliveries={deliveries} />
      </Spoiler>

      <p className="text-base">{specsNote ?? defaultSpecsNote}</p>
    </section>
  );
}
