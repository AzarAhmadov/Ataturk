import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations/en.json";
import translationAZ from "./translations/az.json";
import translationTR from "./translations/tr.json";

const resources = {
    en: {
        translation: translationEN,
    },
    az: {
        translation: translationAZ,
    },
    tr: {
        translation: translationTR,
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "az",
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;