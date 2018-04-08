import { connect } from "react-redux"
import NewQuiz from "../../components/NewQuiz"
import { addQuizToDeck, goToBack } from "../../actions"

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    addQuizToDeck:(card) => {
      dispatch(addQuizToDeck(card))
    },

    goToBack: () => {
      dispatch(goToBack())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewQuiz)


