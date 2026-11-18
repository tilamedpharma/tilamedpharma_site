import type { Locale } from '../../config';
import fr, { type FinDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, FinDict> = { fr, en, es, pt, it, zh, ar };

export function useFin(lang: Locale): FinDict {
  return dicts[lang] ?? fr;
}
