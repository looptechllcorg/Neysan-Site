import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languages from "./LocaleLanguages/LocaleLanguages.json";
import neysan from "./Helpers/Helpers";

export const defaultNS = "translation";
export const resources = {
    az: {
        translation: languages.az,
    },
    en: {
        translation: languages.en,
    },
    ru: {
        translation: languages.ru,
    },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: neysan.lng,
    fallbackLng: neysan.lng,
    resources: resources,
    defaultNS,
});

export default i18n;
