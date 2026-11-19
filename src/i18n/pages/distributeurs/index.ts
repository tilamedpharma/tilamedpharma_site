import type { Locale } from '../../config';
import fr, { type DistributeursDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, DistributeursDict> = { fr, en, es, pt, it, zh, ar };

export function useDistributeurs(lang: Locale): DistributeursDict {
  return dicts[lang] ?? fr;
}
