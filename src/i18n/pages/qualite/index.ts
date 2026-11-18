import type { Locale } from '../../config';
import fr, { type QualiteDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, QualiteDict> = { fr, en, es, pt, it, zh, ar };

export function useQualite(lang: Locale): QualiteDict {
  return dicts[lang] ?? fr;
}
