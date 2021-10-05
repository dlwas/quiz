import { LocaleMessages, VueMessageType } from 'vue-i18n'

export interface langTypes {
  default: string
  setted: string
  locales: LocaleMessages<VueMessageType> | undefined
}

export default langTypes
