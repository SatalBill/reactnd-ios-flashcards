import { connect } from "react-redux"
import NewCard from "../../components/NewCard"
import { addCardToDeck, goToBack } from "../../actions"

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    addCardToDeck:(card) => {
      dispatch(addCardToDeck(card))
    },

    goToBack: () => {
      dispatch(goToBack())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewCard)


