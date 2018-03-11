import { RECEIVE_DECKS, CREATE_NEW_DECK, DECKS_AVAILABLE } from "./types"
import SampleData from "../config/SampleData"
import {AsyncStorage} from "react-native"


export const receiveDecks = () => {
  return {
    type: RECEIVE_DECKS
  }
}

export const createNewDeck = () => {
  return {
    type: CREATE_NEW_DECK
  }
}

const DECK_STORAGE_KEY = "FlashCard:Deck"


export const getDecks = () => {
  return (dispatch) => {



    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
        dispatch({type: DECKS_AVAILABLE, list:JSON.parse(decks)})

    })
  }
}


export const addDecks = () => {
  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY, (err, decks) => {
      //fordev

      if (decks === null) {
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(SampleData), () =>
          dispatch({type: "INIT_DECKS"})
        )
      }

      else {

      }
    })
  }
}

