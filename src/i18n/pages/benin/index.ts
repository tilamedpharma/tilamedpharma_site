import type { Locale } from '../../config';
import fr, { type BeninDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, BeninDict> = { fr, en, es, pt, it, zh, ar };

export function useBenin(lang: Locale): BeninDict {
  return dicts[lang] ?? fr;
}
