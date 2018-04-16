import { connect } from "react-redux"
import StartQuiz from "../../components/StartQuiz"
import { clearQuiz, startQuiz, goToBack } from "../../actions"

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
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

    goToBack: () => {
      dispatch(goToBack())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz)


