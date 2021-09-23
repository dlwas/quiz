import { reactive, watchEffect } from 'vue'
import { ifKeyExist } from './useUtils'
import navbarTypes from '../types/navbarTypes'

export const navbarState = reactive(<navbarTypes.RootObject>{
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
      text: '',
    },
    index: {
      leftIcon: 'cog',
      leftPath: 'settings',
      rightIcon: 'question',
      rightPath: 'about',
      text: '',
    },
    modes: {
      leftIcon: 'arrow',
      leftPath: '/',
      rightIcon: '',
      rightPath: '',
      text: 'modes',
    },
    user: {
      leftIcon: 'arrow',
      leftPath: 'modes',
      rightIcon: '',
      rightPath: '',
      text: 'user',
    },
    settings: {
      leftIcon: 'arrow',
      leftPath: '/',
      rightIcon: '',
      rightPath: '',
      text: 'settings',
    },
    game: {
      leftIcon: 'times',
      leftPath: 'modes',
      rightIcon: '',
      rightPath: '',
      text: 'question',
    },
    gamesettings: {
      leftIcon: 'arrow',
      leftPath: 'modes',
      rightIcon: 'question',
      rightPath: 'help',
      text: 'settings',
    },
    help: {
      leftIcon: 'arrow',
      leftPath: 'gamesettings',
      rightIcon: '',
      rightPath: '',
      text: 'help',
    },
    score: {
      leftIcon: 'times',
      leftPath: '',
      rightIcon: 'share',
      rightPath: 'share',
      text: 'score',
    },
  },
})

export const setByName = (name: string = navbarState.default): void => {
  if (ifKeyExist(navbarState.templates, name)) {
    navbarState.data = navbarState.templates[name]
  } else {
    navbarState.data = navbarState.templates[navbarState.default]
  }
}

export const updateProperty = (property: string, value: string | boolean): void => {
  if (ifKeyExist(navbarState.data, property)) {
    navbarState.data[property] = value
  }
}

watchEffect(() => {
  setByName()
})

export default { navbarState, setByName, updateProperty }
