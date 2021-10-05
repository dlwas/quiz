import { reactive, watchEffect } from 'vue'
import { ifKeyExist } from './useUtils'
import navbarTypes, { Item } from '../types/navbar'

export const stateNavbar = reactive(<navbarTypes>{
  default: 'index',
  data: {
    leftIcon: 'cog',
    leftPath: 'settings',
    rightIcon: 'question',
    rightPath: 'about',
    text: '',
  },
  templates: {
    all: {
      leftIcon: '',
      leftPath: '',
      rightIcon: '',
      rightPath: '',
      text: 'routes.all',
    },
    about: {
      leftIcon: 'arrow',
      leftPath: '/',
      rightIcon: '',
      rightPath: '',
      text: 'routes.about',
    },
    accessdenied: {
      leftIcon: '',
      leftPath: '',
      rightIcon: '',
      rightPath: '',
      text: 'routes.accessdenied',
    },
    game: {
      leftIcon: 'times',
      leftPath: 'modes',
      rightIcon: '',
      rightPath: '',
      text: 'routes.game',
    },
    gamesettings: {
      leftIcon: 'arrow',
      leftPath: 'modes',
      rightIcon: '',
      rightPath: '',
      text: 'routes.gamesettings',
    },
    index: {
      leftIcon: 'cog',
      leftPath: 'settings',
      rightIcon: 'question',
      rightPath: 'about',
      text: 'routes.index',
    },
    modes: {
      leftIcon: 'arrow',
      leftPath: '/',
      rightIcon: '',
      rightPath: '',
      text: 'routes.modes',
    },
    score: {
      leftIcon: 'times',
      leftPath: 'modes',
      rightIcon: 'share',
      rightPath: 'share',
      text: 'routes.score',
    },
    settings: {
      leftIcon: 'arrow',
      leftPath: '/',
      rightIcon: '',
      rightPath: '',
      text: 'routes.settings',
    },
    share: {
      leftIcon: 'arrow',
      leftPath: '/',
      rightIcon: '',
      rightPath: '',
      text: 'routes.share',
    },
  },
})

export const setByName = (name: string = stateNavbar.default): void => {
  if (ifKeyExist(stateNavbar.templates, name)) {
    stateNavbar.data = stateNavbar.templates[name]
  } else {
    stateNavbar.data = stateNavbar.templates[stateNavbar.default]
  }
}

export const updateProperty = (property: string, value: string | boolean): void => {
  if (ifKeyExist(stateNavbar.data, property)) {
    stateNavbar.data[property] = value
  }
}

watchEffect(() => {
  setByName()
})

export default { stateNavbar, setByName, updateProperty }
