import { connect } from "react-redux"
import StartQuiz from "../../components/StartQuiz"
import { clearQuiz, startQuiz, getRightAnswer, getWrongAnswer, goToBack } from "../../actions"

const mapStateToProps = state => {
  return {
    quiz: {
      title: state.decks.currentDeck.title,
      questions: state.decks.currentDeck.questions,
      score: state.quiz.score,
      total: state.quiz.total,
      currentIndex: state.quiz.currentIndex,
      isShow: state.quiz.showQuiz
    }
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    clearQuiz: () => {
      dispatch(clearQuiz())
    },

    startQuiz:({showQuiz, total}) => {
      dispatch(startQuiz({showQuiz, total}))
    },

    getWrongAnswer: () =>{
      dispatch(getWrongAnswer())
    },

    getRightAnswer: () =>{
      dispatch(getRightAnswer())
    },

    goToBack: () => {
      dispatch(goToBack())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz)


