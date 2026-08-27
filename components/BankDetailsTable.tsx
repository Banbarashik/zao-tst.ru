import { cn } from "@/lib/utils";

export function BankDetailsTable({
  cellClassName = "",
}: {
  cellClassName?: string;
}) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full min-w-231">
        <thead>
          <tr>
            <th colSpan={4} className={cn("uppercase", cellClassName)}>
              Банковские реквизиты ООО «Т.С.Т.»
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={cn(cellClassName)}>ИНН</th>
            <th className={cn(cellClassName)}>КПП</th>
            <td className={cn(cellClassName)}>5404002676</td>
            <td className={cn(cellClassName)}>421401001</td>
          </tr>
          <tr>
            <th colSpan={2} className={cn(cellClassName)}>
              БИК
            </th>
            <td className={cn(cellClassName)}>044525411</td>
            <td className={cn(cellClassName)}>043207612</td>
          </tr>
          <tr>
            <th colSpan={2} className={cn("uppercase", cellClassName)}>
              Расчетный счет
            </th>
            <td className={cn(cellClassName)}>407 028 105 1307 00 000 31</td>
            <td className={cn(cellClassName)}>407 028 100 2621 01 023 57</td>
          </tr>
          <tr>
            <th colSpan={2} className={cn("uppercase", cellClassName)}>
              Банк
            </th>
            <td className={cn(cellClassName)}>
              Филиал «Центральный» Банка ВТБ ПАО г. Москва
            </td>
            <td className={cn(cellClassName)}>
              Кемеровское отделение № 8615 ПАО Сбербанк г. Кемерово
            </td>
          </tr>
          <tr>
            <th colSpan={2} className={cn("uppercase", cellClassName)}>
              Корреспондентский счет
            </th>
            <td className={cn(cellClassName)}>301 018 101 4525 00 004 11</td>
            <td className={cn(cellClassName)}>301 018 102 0000 00 006 12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
