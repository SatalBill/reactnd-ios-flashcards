import { GO_TO_BACK, OPEN_HOME_SCREEN, OPEN_NEW_DECK_SCREEN, OPEN_DECK_DETAIL_SCREEN, OPEN_NEW_QUIZ_SCREEN, OPEN_START_QUIZ_SCREEN  } from "./types"

export const goToBack = () =>{
  return (dispatch) => {
    dispatch({type: GO_TO_BACK})
  }
}

export const openHome = () =>{
  return (dispatch) => {
    dispatch({type: OPEN_HOME_SCREEN})
  }
}

export const openNewDeck = () =>{
  return (dispatch) => {
    dispatch({type: OPEN_NEW_DECK_SCREEN})
  }
}


export const openDeckDetail = () => {
  return (dispatch) => {
    dispatch({type: OPEN_DECK_DETAIL_SCREEN})
  }
}


export const openNewQuiz = () => {
  return (dispatch) => {
    dispatch({type: OPEN_NEW_QUIZ_SCREEN})
  }
}

export const openStartQuiz = () => {
  return (dispatch) => {
    dispatch({type: OPEN_START_QUIZ_SCREEN})
  }
}


