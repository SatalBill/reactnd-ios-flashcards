import { RECEIVE_DECKS, RECEIVE_DECK, CHANGE_SCREEN } from "../actions"

const SAMPLE_DECKS = {
  React:      {
    id: 0,
    title:     "React",
    questions: [
      {
        question: "What is React?",
        answer:   "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer:   "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    id: 1,
    title:     "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:   "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
}

const INITIAL_STATE = {
  currentDeck: null,
  list: SAMPLE_DECKS
}


const decks = (state = INITIAL_STATE, action) => {

  const {decks} = action
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...decks
      }
    default:
      return state
  }
}

export default decks
