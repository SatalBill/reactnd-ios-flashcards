import { connect } from "react-redux"
import NewQuiz from "../../components/NewQuiz"
import { getDecks, initDecks, receiveDeck, goToBack } from "../../actions"

const mapStateToProps = state => {
  return {
    ...state,
    list: state.decks.list,
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    goToBack: () => {
      dispatch(goToBack())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewQuiz)


