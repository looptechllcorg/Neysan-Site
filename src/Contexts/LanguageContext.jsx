import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";
import neysan from "../Helpers/Helpers";

 const LangContext = createContext();

 const LanguageProvider = ({ children }) => {
    const [siteLang, setSiteLang] = useState(neysan.lng);

    const inputChangeLang = (e) => {
        const l = e.target.value;
        i18n.changeLanguage(l);
        localStorage.setItem("lang", l);
        setSiteLang(l);
    };
    const onClickChangeLang = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
        setSiteLang(lng);
    };

    useEffect(() => {
        const defaultLang = localStorage.getItem("lang") || neysan.lng;
        neysan.lng = defaultLang;
        i18n.changeLanguage(defaultLang);
        setSiteLang(defaultLang);
    }, []);

    return <LangContext.Provider value={{ siteLang, inputChangeLang, onClickChangeLang }}>{children}</LangContext.Provider>;
};

const LanguageContext = () => useContext(LangContext);

export { LanguageProvider, LanguageContext };
