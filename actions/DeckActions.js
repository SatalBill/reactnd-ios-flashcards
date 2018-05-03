import { AsyncStorage } from "react-native"
import { DECKS_AVAILABLE, INIT_DECKS, ADD_DECK, RECEIVE_DECK, CLEAR_DECK, ADD_QUIZ_TO_DECK } from "./types"
import SampleData from "../config/SampleData"
import { ID } from "../utils/helper"

const DECK_STORAGE_KEY = "FlashCard:Deck"

const getDecks = () => {
  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      dispatch({type: DECKS_AVAILABLE, list: JSON.parse(decks)})
    })
  }
}

const setDecks = () => {
  return (dispatch) => {
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(SampleData), () =>
      dispatch({type: INIT_DECKS, list: SampleData})
    )
  }
}


export const initDecks = () => {
  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      decks = JSON.parse(decks)
      let isEmpty =  decks === null? true : false
      return isEmpty ? dispatch(setDecks()) : dispatch(getDecks())
    })
  }
}

export const addDeck = (deck) => {
  const newDeck = {
    [deck.title]: {
      id: ID(),
      title: deck.title,
      questions: [],
    }
  }

  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      if (decks !== null) {
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            ...newDeck
          }), () =>
            dispatch({type: ADD_DECK, newDeck, currentDeck: newDeck[deck.title]})
        )
      }
    })
  }
}

export const clearDeck = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_DECK})
  }
}

export const receiveDeck = (searchKey) => {
  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      decks = JSON.parse(decks)
      // get object matching with searchKey
      const currentDeck = Object.keys(decks).map(key =>
        decks[key].id === searchKey && decks[key]
      ).filter(e => e)[0]
      dispatch({type: RECEIVE_DECK, currentDeck})
    })
  }
}

// add new quiz
export const addQuizToDeck = (content) => {
  const newQuiz = {
    question: content.question,
    answer: content.answer,
  }

  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then(decks => {
      if (decks !== null) {
        decks = JSON.parse(decks)
        decks[content.title].questions = [
          ...decks[content.title].questions,
          newQuiz
        ]
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks), () =>
          dispatch({type: ADD_QUIZ_TO_DECK, newQuiz})
        )
      }
    }).done()
  }
}

// delete new quiz

// modify
