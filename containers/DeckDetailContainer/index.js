import { connect } from "react-redux"
import DeckDetail from "../../components/DeckDetail"
import { clearDeck, openNewQuiz, openStartQuiz } from "../../actions"

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
    _isMountedProp: state.decks.currentDeck? true : false
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    clearDeck: () => {
      dispatch(clearDeck())
    },
    openNewQuiz: () => {
      dispatch(openNewQuiz())
    },
    openStartQuiz: () => {
      dispatch(openStartQuiz())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)


