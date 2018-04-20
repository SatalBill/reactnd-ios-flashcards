import { GET_RIGHT_ANSWER, GET_WRONG_ANSWER, START_QUIZ_AVAILABLE, INIT_QUIZ, FINISH_QUIZ } from "../actions"

const INITIAL_STATE = {
  score: 0,
  total: 0,
  currentIndex: 0,
  _isShow: false,
  _isFinish: false,
}

const quiz = (state = INITIAL_STATE, action) => {
  const {total, _isShow} = action

  switch (action.type) {

    case INIT_QUIZ:
      return INITIAL_STATE

    case GET_RIGHT_ANSWER:

      return {
        ...state,
        score: state.score + 1,
        currentIndex: state.currentIndex + 1,
        _isFinish: state.total === state.currentIndex + 1? true : false
      }

    case GET_WRONG_ANSWER:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        _isFinish: state.total === state.currentIndex + 1? true : false
      }

    case START_QUIZ_AVAILABLE:
      return {
        ...state,
        _isShow,
        total
      }

    default:
      return state
  }
}

export default quiz
