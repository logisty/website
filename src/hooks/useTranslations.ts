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

  // Set 'fr' as the absolute default if the current language is not in our dictionary
  const currentLanguage = translations[language] ? language : 'fr';

  // Determine if the current language is Arabic (tn)
  const isRtl = currentLanguage === 'tn';

  useEffect(() => {
    // Dynamically update the document direction and lang attribute
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    
    // Set HTML lang attribute ('ar' for tunisian, otherwise the language code)
    document.documentElement.lang = currentLanguage === 'tn' ? 'ar' : currentLanguage;
  }, [currentLanguage, isRtl]);

  /**
   * Translation function
   * Falls back to French translation if key is missing in the current language, 
   * then finally back to the key name itself.
   */
  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['fr']?.[key] || key;
  };

  return { t, isRtl, language: currentLanguage };
}