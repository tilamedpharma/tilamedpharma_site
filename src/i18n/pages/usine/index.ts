import type { Locale } from '../../config';
import fr, { type UsineDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, UsineDict> = { fr, en, es, pt, it, zh, ar };

export function useUsine(lang: Locale): UsineDict {
  return dicts[lang] ?? fr;
}
