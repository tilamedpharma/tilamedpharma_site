import type { Locale } from '../../config';
import fr, { type VisionDict } from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, VisionDict> = { fr, en, es, pt, it, zh, ar };

export function useVision(lang: Locale): VisionDict {
  return dicts[lang] ?? fr;
}
