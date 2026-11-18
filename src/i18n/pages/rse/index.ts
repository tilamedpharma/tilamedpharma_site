import type { Locale } from '../../config';
import fr, { type RseDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, RseDict> = { fr, en, es, pt, it, zh, ar };

export function useRse(lang: Locale): RseDict {
  return dicts[lang] ?? fr;
}
