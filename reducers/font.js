import { LOAD_FONTS } from "../actions"

const INITIAL_STATE = {
  fontLoaded: false
}

const font = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FONTS:
      return {
        fontLoaded: true
      }
    default:
      return state
  }
}

export default font
