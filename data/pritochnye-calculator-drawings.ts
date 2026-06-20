/**
 * Карта путей к PDF-чертежам по modelId.
 * Файлы лежат в public/drawings/ — путь указывается от корня сайта.
 *
 * Добавляйте новую модель сюда по мере появления чертежа.
 * Если для модели чертежа ещё нет — просто не добавляйте запись,
 * generatePdf корректно отработает без него (см. fetchDrawingPdf).
 */
export const MODEL_DRAWINGS: Record<string, string> = {
  "kpvs-905x905": "/drawings/kpvs-905x905.pdf",
  "kpvu-1208x1208": "/drawings/kpvu-1208x1208.pdf",
  "kpvs-754x754": "/drawings/kpvs-754x754.pdf",
  // ...
};
