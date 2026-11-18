import type { Locale } from '../../config';
import type { Topic } from '../usine-plus/fr';
import fr from './fr';
import en from './en';
import es from './es';
import pt from './pt';
import it from './it';
import zh from './zh';
import ar from './ar';

const dicts: Record<Locale, Record<string, Topic>> = { fr, en, es, pt, it, zh, ar };

export function useEntreprise(lang: Locale): Record<string, Topic> {
  return dicts[lang] ?? fr;
}
