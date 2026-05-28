import { createI18n } from 'vue-i18n'
import zh from './zh.js'
import en from './en.js'

export default createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: { zh, en },
})
