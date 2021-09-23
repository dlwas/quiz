export declare namespace navbarState {
  export interface Icon {
    left: string
    right: string
  }
  export interface Path {
    left: string
    right: string
  }
  export interface Active {
    left: boolean
    text: boolean
    right: boolean
  }
  export interface Item {
    icon: Icon
    path: Path
    active: Active
    text: string
  }
  export interface Templates {
    [index: string]: Item
  }
  export interface RootObject {
    default: string
    setted: string
    templates: Templates
  }
}

export default navbarState
