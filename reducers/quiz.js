import { GET_RIGHT_ANSWER, GET_WRONG_ANSWER, START_QUIZ_AVAILABLE, INIT_QUIZ } from "../actions"

const INITIAL_STATE = {
  score: 0,
  total: 0,
  currentIndex: 0,
  showQuiz: false
}

const quiz = (state = INITIAL_STATE, action) => {
  const {total, currentIndex, showQuiz} = action

  switch (action.type) {
    case GET_RIGHT_ANSWER:
      return {
        ...state,
        score: state.score+1
      }
    case GET_WRONG_ANSWER:
      let score = state.score-1
      score = score < 0? score = 0 : score
      return {
        ...state,
        score: score,
      }
    case START_QUIZ_AVAILABLE:
      return {
        ...state,
        showQuiz,
        total
      }
    case INIT_QUIZ:
      return INITIAL_STATE
    default:
      return state
  }
}

export default quiz
