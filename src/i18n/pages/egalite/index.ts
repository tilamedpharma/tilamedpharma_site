import type { Locale } from '../../config';
import fr, { type EgaliteDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, EgaliteDict> = { fr, en, es, pt, it, zh, ar };

export function useEgalite(lang: Locale): EgaliteDict {
  return dicts[lang] ?? fr;
}
