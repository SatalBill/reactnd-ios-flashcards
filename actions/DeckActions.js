import { DECKS_AVAILABLE, INIT_DECKS, ADD_DECK, RECEIVE_DECK, CLEAR_DECK, ADD_CARD_TO_DECK } from "./types"
import SampleData from "../config/SampleData"
import { AsyncStorage } from "react-native"
import { ID } from "../utils/helper"

const DECK_STORAGE_KEY = "FlashCard:Deck"

export const getDecks = () => {
  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      dispatch({type: DECKS_AVAILABLE, list: JSON.parse(decks)})
    })
  }
}

export const initDecks = () => {

  return (dispatch) => {
    //AsyncStorage.clear()
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      decks = JSON.parse(decks)
      const isEmpty = decks === null || Object.keys(decks).length === 0
      if (isEmpty) {
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(SampleData), () =>
          dispatch({type: INIT_DECKS})
        )
      }
    })
  }
}

export const addDeck = (deck) => {
  const newDeck = {
    [deck.title]: {
      id: ID(),
      title: deck.title,
      questions: {}
    }
  }

  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      if (decks !== null) {
        console.log(decks)
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            ...newDeck
          }), () =>
            dispatch({type: ADD_DECK, newDeck})
        )
      }
    })
  }
}

export const addCardToDeck = (content) => {
  const newCard = {
    question: content.question,
    answer: content.answer,
  }

  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then(decks => {
      if (decks !== null) {
        decks = JSON.parse(decks)
        decks[content.title].questions = [
          ...decks[content.title].questions,
          newCard
        ]
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks), () =>
          dispatch({type: ADD_CARD_TO_DECK, newCard})
        )
      }
    }).done()
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

// delete new quiz

// modify
