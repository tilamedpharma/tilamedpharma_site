import type { Locale } from '../../config';
import fr, { type DistributionDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, DistributionDict> = { fr, en, es, pt, it, zh, ar };

export function useDistribution(lang: Locale): DistributionDict {
  return dicts[lang] ?? fr;
}
