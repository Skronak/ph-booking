import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import locale_en from './en/locales.json';
import locale_fr from './fr/locales.json';

export const supportedLngs = {
  en: "EN",
  fr: "FR"
}

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {translation: {...locale_en}},
    fr: {translation:{...locale_fr}},
  },
  supportedLngs: Object.keys(supportedLngs)
});

export default i18next;