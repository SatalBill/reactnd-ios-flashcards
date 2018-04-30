import { connect } from "react-redux"
import DeckList from "../../components/DeckList"
import { getDecks, initDecks, receiveDeck, openNewDeck, openDeckDetail, loadFonts } from "../../actions"

const mapStateToProps = state => {
  return {
    ...state,
    list: state.decks.list,
    fontLoaded: state.font.fontLoaded
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    loadFonts: () => {
      dispatch(loadFonts())
    },
    fetchDecks: () => {
      dispatch(initDecks())
      return dispatch(getDecks())
    },
    receiveDeck: (id) => {
      dispatch(receiveDeck(id))
    },
    openNewDeck: () => {
      dispatch(openNewDeck())
    },
    openDeckDetail: () => {
      dispatch(openDeckDetail())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DeckList)


