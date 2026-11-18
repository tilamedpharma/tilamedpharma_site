import type { Locale } from '../../config';
import fr, { type ParcoursDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, ParcoursDict> = { fr, en, es, pt, it, zh, ar };

export function useParcours(lang: Locale): ParcoursDict {
  return dicts[lang] ?? fr;
}
