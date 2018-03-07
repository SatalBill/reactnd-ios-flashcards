import { CHANGE_SCREEN } from "../actions"

const INITIAL_STATE = {
  currentScreen: null
}

const screens = (state = INITIAL_STATE, action) => {
  const {currentScreen} = action
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        ...currentScreen
      }
    default:
      return state
  }
}

export default screens
