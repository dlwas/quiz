import { RouteLocationRaw } from "vue-router";

export  declare namespace navbarState {
  export interface Item {
    leftIcon: string
    leftPath: string | boolean
    rightIcon: string
    rightPath: string | boolean
    text: string
  }
  export interface Templates {
    [index: string]: Item
  }
  export interface Data {
    [index: string]: string | boolean
  }
  export interface RootObject {
    default: string
    data: Data
    templates: Templates
  }
}

export default navbarState
