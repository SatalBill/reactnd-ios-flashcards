import { DECKS_AVAILABLE, ADD_DECK, RECEIVE_DECK } from "../actions"

const INITIAL_STATE = {
  currentDeck: null,
  list: null,
}

const decks = (state = INITIAL_STATE, action) => {
  const {list, newDeck, currentDeck} = action

  switch (action.type) {

    case DECKS_AVAILABLE:
      return {
        ...state,
        list
      }

    case ADD_DECK:
      return {
        ...state,
        list: {
          ...state.list,
          ...newDeck
        }
      }

    case RECEIVE_DECK:
      return {
        ...state,
        currentDeck
      }

    default:
      return state
  }
  return state
}

export default decks
