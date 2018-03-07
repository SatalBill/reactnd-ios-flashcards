import { RECEIVE_DECKS, RECEIVE_DECK, CHANGE_SCREEN } from "./types"

export const receiveDecks = () => {
  return {
    type: RECEIVE_DECKS
  }
}


export const changeScreen = () => {
  return {
    type: CHANGE_SCREEN
  }
}
