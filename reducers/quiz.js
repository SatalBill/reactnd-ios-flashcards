import { GET_RIGHT_ANSWER, GET_WRONG_ANSWER, START_QUIZ_AVAILABLE, INIT_QUIZ } from "../actions"

const INITIAL_STATE = {

  score: {points:0, percent: 0},
  total: 0,
  currentIndex: 1,
  _isShow: false,
  _isFinish: false,
}

const quiz = (state = INITIAL_STATE, action) => {
  const {total, _isShow} = action
  // const percentage = (s.score / quiz.total) * 100

  switch (action.type) {

    case INIT_QUIZ:
      return INITIAL_STATE

    case GET_RIGHT_ANSWER:
      return {
        ...state,
        score: {
          points: state.score.points + 1,
          percent: Math.round((state.score.points + 1) / (state.total) * 100)
        },
        currentIndex: state.currentIndex + 1,
        _isFinish: state.total === state.currentIndex ? true : false
      }

    case GET_WRONG_ANSWER:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        _isFinish: state.total === state.currentIndex ? true : false
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
