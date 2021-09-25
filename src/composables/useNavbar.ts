import { reactive, watchEffect } from 'vue'
import { ifKeyExist } from './useUtils'
import navbarTypes from '../types/navbar'

export const stateNavbar = reactive(<navbarTypes.RootObject>{
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
