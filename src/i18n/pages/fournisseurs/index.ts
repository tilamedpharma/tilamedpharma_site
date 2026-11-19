import type { Locale } from '../../config';
import fr, { type FournisseursDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, FournisseursDict> = { fr, en, es, pt, it, zh, ar };

export function useFournisseurs(lang: Locale): FournisseursDict {
  return dicts[lang] ?? fr;
}
