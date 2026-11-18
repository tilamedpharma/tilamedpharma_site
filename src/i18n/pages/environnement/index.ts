import type { Locale } from '../../config';
import fr, { type EnvDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, EnvDict> = { fr, en, es, pt, it, zh, ar };

export function useEnvironnement(lang: Locale): EnvDict {
  return dicts[lang] ?? fr;
}
