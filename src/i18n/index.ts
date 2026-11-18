import type { Locale } from './config';
import fr, { type Dict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, Dict> = { fr, en, es, pt, it, zh, ar };

export function useDict(lang: Locale): Dict {
  return dicts[lang] ?? fr;
}

/** Nom de pays localisé à partir du code ISO (Intl, aucune traduction manuelle). */
export function countryName(lang: Locale, iso: string): string {
  try {
    return new Intl.DisplayNames([lang === 'zh' ? 'zh-Hans' : lang], { type: 'region' }).of(iso) ?? iso;
  } catch {
    return iso;
  }
}

export function formatDate(lang: Locale, iso: string): string {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-Hans' : lang, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
}

export type { Dict };
