import { INIT_DECKS, DECKS_AVAILABLE, ADD_DECK, RECEIVE_DECK, CLEAR_DECK, ADD_QUIZ_TO_DECK } from "../actions"

const INITIAL_STATE = {
  currentDeck: null,
  list: null
}

const decks = (state = INITIAL_STATE, action) => {
  const {list, newDeck, newQuiz, currentDeck} = action

  switch (action.type) {
    case INIT_DECKS:
      return {
        ...state,
        list
      }

    case DECKS_AVAILABLE:
      return {
        ...state,
        list
      }

    case ADD_DECK:
      return {
        ...state,
        currentDeck,
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

    case CLEAR_DECK:
      return {
        ...state,
        currentDeck: null
      }

    case ADD_QUIZ_TO_DECK:
      const updateCurrentDeck = {
        ...state.currentDeck,
        questions: [
          ...state.currentDeck.questions,
          newQuiz
        ]
      }

      return {
        list: {
          ...state.list,
          [state.currentDeck.title]: updateCurrentDeck
        },
        currentDeck: updateCurrentDeck
      }

    default:
      return state
  }
}

export default decks
