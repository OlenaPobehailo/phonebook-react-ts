import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LOCALS } from "./constants";
import { uk } from "./copies/uk";
import { en } from "./copies/en";

const resources = {
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.UK]: {
    translation: uk,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // lng: "uk",
    fallbackLng: LOCALS.UK,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
