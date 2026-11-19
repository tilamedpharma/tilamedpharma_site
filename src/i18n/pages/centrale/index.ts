import type { Locale } from '../../config';
import fr, { type CentraleDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, CentraleDict> = { fr, en, es, pt, it, zh, ar };

export function useCentrale(lang: Locale): CentraleDict {
  return dicts[lang] ?? fr;
}
