import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus archivos de traducción
import en from "./translations/en.json";
import es from "./translations/es.json";

// Detecta el idioma del dispositivo
const deviceLanguage = Localization.getLocales()[0]?.languageCode ?? "en";

// Inicializa i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: deviceLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// import * as Localization from "expo-localization";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// // Importa tus archivos de traducción
// import en from "./translations/en.json";
// import es from "./translations/es.json";

// // Detecta el idioma del dispositivo
// const deviceLanguage = Localization.getLocales()[0]?.languageCode ?? "en";

// // Inicializa i18next - versión correcta
// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: en },
//     es: { translation: es },
//   },
//   lng: deviceLanguage,
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
//   // compatibilityJSON eliminado - ya no es necesario
// });

// export default i18n;
