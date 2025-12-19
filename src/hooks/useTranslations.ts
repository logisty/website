import { useEffect } from 'react';
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

  // Determine if the current language is Arabic (tn)
  const isRtl = language === 'tn';

  useEffect(() => {
    // Dynamically update the document direction and lang attribute
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'tn' ? 'ar' : language;
  }, [language, isRtl]);

  const t = (key: string): string => translations[language]?.[key] || key;

  return { t, isRtl, language };
}