import { LocaleMessages, VueMessageType } from "vue-i18n";

export declare namespace langTypes {
  export interface RootObject {
    default: string
    setted: string
    locales: LocaleMessages<VueMessageType> | undefined
  }
}

export default langTypes
