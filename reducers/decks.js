import { DECKS_AVAILABLE, CREATE_NEW_DECK } from "../actions"

const INITIAL_STATE = {
  currentDeck: null,
  list: null
}

function cloneObject (object) {
  return JSON.parse(JSON.stringify(object))
}

const decks = (state = INITIAL_STATE, action) => {
  const {list} = action

  switch (action.type) {
    case DECKS_AVAILABLE:
      return {
        ...state,
        list
      }
    default:
      return state
  }
  return state
}

export default decks
