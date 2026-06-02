import type { ReactNode } from "react";

export function DeliverySection({
  product,
  specsNote,
}: {
  specsNote: ReactNode;
}) {
  const isKSK = product.categories.includes("ksk");
  const isKPSK = product.categories.includes("kpsk");
  const isSFO = product.categories.includes("sfo");

  return (
    <section className="text-example space-y-4 text-[17px]">
      <h3 className="mb-2 text-xl">
        Оплата и доставка {isSFO && "электрокалорифера"}{" "}
        {(isKSK || isKPSK) && "калорифера"} {product.shortName}
      </h3>

      <div>
        <p>
          Заказать калорифер {product.shortName} на нашем предприятии можно
          следующими способами:
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
          Способы оплаты {isSFO && "электрического"} калорифера{" "}
          {product.shortName}:
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

      <div className="w-full overflow-auto">
        <table className="w-full min-w-231">
          <thead>
            <tr>
              <th colSpan={4} className="uppercase">
                Банковские реквизиты ООО «Т.С.Т.»
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>ИНН</th>
              <th>КПП</th>
              <td>5404002676</td>
              <td>540401001</td>
            </tr>
            <tr>
              <th colSpan={2}>БИК</th>
              <td>044525411</td>
              <td>043207612</td>
            </tr>
            <tr>
              <th colSpan={2} className="uppercase">
                Расчетный счет
              </th>
              <td>407 028 105 1307 00 000 31</td>
              <td>407 028 100 2621 01 023 57</td>
            </tr>
            <tr>
              <th colSpan={2} className="uppercase">
                Банк
              </th>
              <td>Филиал «Центральный» Банка ВТБ ПАО г. Москва</td>
              <td>Кемеровское отделение № 8615 ПАО Сбербанк г. Кемерово</td>
            </tr>
            <tr>
              <th colSpan={2} className="uppercase">
                Корреспондентский счет
              </th>
              <td>301 018 101 4525 00 004 11</td>
              <td>301 018 102 0000 00 006 12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p>Доставка калорифера {product.shortName}:</p>
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

      <p className="text-base">{specsNote}</p>
    </section>
  );
}
