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


