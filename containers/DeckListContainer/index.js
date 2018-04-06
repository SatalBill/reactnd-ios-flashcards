import { connect } from "react-redux"
import DeckList from "../../components/DeckList"
import { getDecks, initDecks, receiveDeck, openNewDeck } from "../../actions"

const mapStateToProps = state => {
  return {
    ...state,
    list: state.decks.list,
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    fetchDecks: () => {
      dispatch(initDecks())
      dispatch(getDecks())
    },
    receiveDeck: (id) => {
      dispatch(receiveDeck(id))
    },
    openNewDeck: () => {
      dispatch(openNewDeck())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DeckList)

