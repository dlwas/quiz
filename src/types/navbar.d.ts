export interface Item {
  leftIcon: string
  leftPath: string
  rightIcon: string
  rightPath: string
  text: string
}
export interface Templates {
  [index: string]: Item
}
export interface navbarTypes {
  default: string
  data: any
  templates: Templates
}

export default navbarTypes
