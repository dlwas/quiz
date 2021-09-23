import navbarTypes from '../../types/navbarTypes'
import { ifKeyExist } from '../../composable/useUtils'

export default {
  namespaced: true,
  state: <navbarTypes.RootObject>{
    default: 'index',
    setted: 'index',
    templates: {
      all: {
        icon: {
          left: '',
          right: '',
        },
        path: {
          left: '',
          right: '',
        },
        active: {
          left: false,
          text: false,
          right: false,
        },
        text: '',
      },
      index: {
        icon: {
          left: 'cog',
          right: 'question',
        },
        path: {
          left: 'settings',
          right: 'about',
        },
        active: {
          left: true,
          text: false,
          right: true,
        },
        text: '',
      },
      modes: {
        icon: {
          left: 'arrow',
          right: 'user',
        },
        path: {
          left: '',
          right: 'user',
        },
        active: {
          left: true,
          right: true,
          text: true,
        },
        text: 'modes',
      },
      user: {
        icon: {
          left: 'arrow',
          right: '',
        },
        path: {
          left: 'modes',
          right: '',
        },
        active: {
          left: true,
          right: false,
          text: true,
        },
        text: 'user',
      },
      settings: {
        icon: {
          left: 'arrow',
          right: '',
        },
        path: {
          left: '',
          right: '',
        },
        active: {
          left: true,
          right: false,
          text: false,
        },
        text: '',
      },
      gameboard: {
        icon: {
          left: 'times',
          right: 'user',
        },
        path: {
          left: '',
          right: 'user',
        },
        active: {
          left: true,
          right: false,
          text: true,
        },
        text: 'question 1/1',
      },
      gamesettings: {
        icon: {
          left: 'arrow',
          right: 'user',
        },
        path: {
          left: 'modes',
          right: 'user',
        },
        active: {
          left: true,
          right: true,
          text: true,
        },
        text: 'settings',
      },
      score: {
        icon: {
          left: 'times',
          right: 'share',
        },
        path: {
          left: '',
          right: 'share',
        },
        active: {
          left: true,
          right: false,
          text: true,
        },
        text: 'score',
      },
    },
  },
  mutations: {
    set(state: any, payload: string): void {
      payload ? (state.setted = payload) : (state.setted = state.default)
    },
  },
  getters: {
    get(state: any): navbarTypes.Templates {
      return ifKeyExist(state.templates, state.setted)
        ? state.templates[state.setted]
        : state.templates[state.default]
    },
    getSetted(state: any): string {
      return state.setted
    },
  },
}
