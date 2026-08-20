const CYRILLIC_TO_LATIN: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
};

/**
 * Точечные legacy/canonical spellings из data/regions.ts,
 * которые нельзя получить общей таблицей транслитерации.
 */
const LOCATION_SLUG_OVERRIDES: Record<string, string> = {
  "астрахань": "astrahan",
};

/**
 * Маршруты региональных страниц, которые в data/regions.ts
 * намеренно не совпадают с транслитерацией административного центра.
 */
const REGION_PAGE_SLUG_OVERRIDES: Record<string, string> = {
  "Московская область": "moskovskaya-oblast",
  "ХМАО-Югра": "surgut",
};

/**
 * Транслитерация в стиле URL из data/regions.ts.
 *
 * Примеры:
 * - Архангельск -> arkhangelsk
 * - Благовещенск -> blagoveshchensk
 * - Нижний Новгород -> nizhny-novgorod
 * - Великий Новгород -> veliky-novgorod
 * - Грозный -> grozny
 * - Хабаровск -> khabarovsk
 */
export function slugifyRussian(value: string): string {
  const normalized = value.trim().toLowerCase();
  const override = LOCATION_SLUG_OVERRIDES[normalized];

  if (override) {
    return override;
  }

  const transliterated = [...normalized]
    .map((char) => {
      if (char in CYRILLIC_TO_LATIN) {
        return CYRILLIC_TO_LATIN[char];
      }

      if (/[a-z0-9]/.test(char)) {
        return char;
      }

      return "-";
    })
    .join("")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  // В data/regions.ts используется привычная англоязычная форма
  // русских прилагательных: Нижний -> nizhny, Великий -> veliky,
  // Камчатский -> kamchatsky, Грозный -> grozny.
  // Не сворачиваем любое -ий, чтобы Марий оставался mariy.
  return transliterated
    .replace(/skiy(?=$|-)/g, "sky")
    .replace(/niy(?=$|-)/g, "ny")
    .replace(/kiy(?=$|-)/g, "ky")
    .replace(/yy(?=$|-)/g, "y");
}

/**
 * Slug именно страницы региона. Обычно это slug столицы,
 * но data/regions.ts содержит несколько осознанных исключений.
 */
export function getRegionPageSlug(subject: string, capital: string): string {
  return REGION_PAGE_SLUG_OVERRIDES[subject] ?? slugifyRussian(capital);
}
