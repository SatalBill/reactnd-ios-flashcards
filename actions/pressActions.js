import { RECEIVE_DECKS, RECEIVE_DECK, CHANGE_SCREEN } from "./types"

export const receiveDecks = () => {
  return {
    type: RECEIVE_DECKS
  }
}


export const changeScreen = (preView, currentView) => {
  return {
    type: CHANGE_SCREEN,
    preView, currentView
  }
}
