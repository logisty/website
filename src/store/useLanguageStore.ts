import { create } from "zustand";

type Language = "en" | "fr" | "tn";

type LanguageStore = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const savedLang = localStorage.getItem("language");
const initialLang: Language =
  savedLang === "fr" || savedLang === "tn" ? (savedLang as Language) : "en";

const useLanguageStore = create<LanguageStore>((set) => ({
  language: initialLang,
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));

export default useLanguageStore;
