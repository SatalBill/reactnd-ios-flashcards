import { CHANGE_SCREEN } from "../actions"

const INITIAL_STATE = {
  currentScreen: null
}

const screen = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        ...action.currentScreen
      }
    default:
      return state
  }
}

export default screen
