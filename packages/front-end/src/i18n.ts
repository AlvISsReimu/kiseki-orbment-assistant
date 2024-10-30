import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend, { type HttpBackendOptions } from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    fallbackLng: 'zh',
    // debug: import.meta.env.MODE === 'development',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    supportedLngs: ['zh', 'en', 'ja'],
  })

export default i18n
