import { connect } from "react-redux"
import DeckList from "../../components/DeckList"
import { initDecks, receiveDeck, openNewDeck, openDeckDetail, loadFonts } from "../../actions"

const mapStateToProps = state => {
  return {
    ...state,
    list: state.decks.list,
    fontLoaded: state.font.fontLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {

    loadFonts: () => {
      dispatch(loadFonts())
    },

    initDecks: () => {
      dispatch(initDecks())
    },

    openDeck: (id) => {
      dispatch(receiveDeck(id))
      return dispatch(openDeckDetail())
    },

    openNewDeck: () => {
      dispatch(openNewDeck())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)


