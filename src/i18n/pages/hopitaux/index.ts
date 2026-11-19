import type { Locale } from '../../config';
import fr, { type HopitauxDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, HopitauxDict> = { fr, en, es, pt, it, zh, ar };

export function useHopitaux(lang: Locale): HopitauxDict {
  return dicts[lang] ?? fr;
}
