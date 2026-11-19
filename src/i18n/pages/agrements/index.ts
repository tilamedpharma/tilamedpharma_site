import type { Locale } from '../../config';
import fr, { type AgrementsDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, AgrementsDict> = { fr, en, es, pt, it, zh, ar };

export function useAgrements(lang: Locale): AgrementsDict {
  return dicts[lang] ?? fr;
}
