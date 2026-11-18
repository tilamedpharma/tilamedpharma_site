import type { Locale } from '../../config';
import fr, { type ProduitsDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, ProduitsDict> = { fr, en, es, pt, it, zh, ar };

export function useProduits(lang: Locale): ProduitsDict {
  return dicts[lang] ?? fr;
}
