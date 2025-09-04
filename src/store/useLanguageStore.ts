import { create } from "zustand";

type Language = "us" | "fr" | "tn";

type LanguageStore = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const savedLang = localStorage.getItem("language");
const initialLang: Language =
  savedLang === "fr" || savedLang === "tn" ? (savedLang as Language) : "us";

const useLanguageStore = create<LanguageStore>((set) => ({
  language: initialLang,
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));

export default useLanguageStore;
