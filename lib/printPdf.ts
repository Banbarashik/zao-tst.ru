/**
 * Открывает стандартный системный диалог печати для переданного PDF-Blob.
 *
 * Механика:
 * 1. Создаём Blob URL из PDF.
 * 2. Вставляем скрытый <iframe> с этим URL.
 * 3. Ждём события load — браузер успел отрендерить PDF внутри iframe.
 * 4. Вызываем iframe.contentWindow.print() — открывается системный диалог.
 * 5. После печати (или отмены) удаляем iframe и отзываем Blob URL.
 *
 * Почему iframe, а не новая вкладка:
 * - window.open() блокируется браузерами как popup (если вызван не синхронно
 *   в обработчике события, а после await).
 * - Iframe невидим пользователю, печать проходит без промежуточных вкладок.
 *
 * Почему не window.print():
 * - window.print() печатает текущую страницу приложения, а не наш PDF.
 */
export function printPdfBlob(blob: Blob): void {
  const url = URL.createObjectURL(blob);

  const iframe = document.createElement("iframe");

  // Скрываем iframe — пользователь его не видит
  iframe.style.cssText =
    "position:fixed;top:0;left:0;width:0;height:0;border:none;visibility:hidden;";

  document.body.appendChild(iframe);

  iframe.onload = () => {
    // Небольшая задержка нужна в Safari: он сообщает load до того,
    // как PDF полностью готов к печати внутри iframe.
    // В Chrome/Firefox задержка не нужна, но и не мешает.
    setTimeout(() => {
      try {
        iframe.contentWindow?.print();
      } catch {
        // Fallback для случаев, когда браузер блокирует print() из iframe
        // (нестандартное поведение некоторых корпоративных браузеров):
        // открываем PDF в новой вкладке — пользователь может напечатать вручную.
        window.open(url, "_blank");
      } finally {
        // Убираем iframe после того, как диалог открылся.
        // Не удаляем сразу — некоторые браузеры закрывают диалог
        // при удалении iframe во время печати.
        setTimeout(() => {
          document.body.removeChild(iframe);
          URL.revokeObjectURL(url);
        }, 60_000); // 1 минута — достаточно для завершения диалога
      }
    }, 500);
  };

  // Назначаем src после добавления в DOM и после onload,
  // чтобы гарантировать срабатывание события во всех браузерах.
  iframe.src = url;
}
