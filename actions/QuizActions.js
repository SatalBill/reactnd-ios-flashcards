import { GET_RIGHT_ANSWER, GET_WRONG_ANSWER, START_QUIZ_AVAILABLE, INIT_QUIZ } from "./types"

export const getRightAnswer = () => {
  return {
    type: GET_RIGHT_ANSWER,
  }
}

export const getWrongAnswer = () => {
  return {
    type: GET_WRONG_ANSWER
  }
}

export const startQuiz = ({_isShow, total}) => {
  return {
    type: START_QUIZ_AVAILABLE,
    _isShow,
    total
  }
}

export const clearQuiz = () => {
  return {
    type: INIT_QUIZ
  }
}
