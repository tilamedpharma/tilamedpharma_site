import type { Locale } from '../../config';
import fr, { type AchatsCarrieresDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, AchatsCarrieresDict> = { fr, en, es, pt, it, zh, ar };

export function useAchatsCarrieres(lang: Locale): AchatsCarrieresDict {
  return dicts[lang] ?? fr;
}
