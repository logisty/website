
import us from '@translations/us.json';
import fr from '@translations/fr.json';
import tn from '@translations/tn.json';
import useLanguageStore from '@store/useLanguageStore';

const translations: Record<string, Record<string, string>> = {
  us,
  fr,
  tn,
};

export function useTranslation() {
  const { language } = useLanguageStore();
  const t = (key: string): string => translations[language]?.[key] || key; // Fallback to key if translation missing
  return { t };
}