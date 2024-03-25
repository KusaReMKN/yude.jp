import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ja from './locales/ja.json'
import en from './locales/en.json'
import zhCN from './locales/zh-cn.json'

i18n.use(initReactI18next).init({
    resources: {
        en: { ...en },
        ja: { ...ja },
        zhCN: { ...zhCN },
    },
    lng: "ja",
});
