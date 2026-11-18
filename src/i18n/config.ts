export const locales = ['fr', 'en', 'es', 'pt', 'it', 'zh', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeMeta: Record<Locale, { name: string; short: string; dir: 'ltr' | 'rtl'; htmlLang: string; og: string }> = {
  fr: { name: 'Français', short: 'FR', dir: 'ltr', htmlLang: 'fr', og: 'fr_FR' },
  en: { name: 'English', short: 'EN', dir: 'ltr', htmlLang: 'en', og: 'en_GB' },
  es: { name: 'Español', short: 'ES', dir: 'ltr', htmlLang: 'es', og: 'es_ES' },
  pt: { name: 'Português', short: 'PT', dir: 'ltr', htmlLang: 'pt', og: 'pt_PT' },
  it: { name: 'Italiano', short: 'IT', dir: 'ltr', htmlLang: 'it', og: 'it_IT' },
  zh: { name: '中文', short: '中文', dir: 'ltr', htmlLang: 'zh-Hans', og: 'zh_CN' },
  ar: { name: 'العربية', short: 'ع', dir: 'rtl', htmlLang: 'ar', og: 'ar_AR' },
};

/** Chemin localisé : le français est à la racine, les autres langues sous /{lang}/. */
export function localizePath(lang: Locale, slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  const base = lang === defaultLocale ? '' : `/${lang}`;
  return clean ? `${base}/${clean}/` : `${base}/`;
}
