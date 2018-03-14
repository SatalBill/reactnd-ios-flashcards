import { connect } from "react-redux"
import DeckDetail from "../../components/DeckDetail"
import { clearDeck } from "../../actions"

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    clearDeck: () => {
      dispatch(clearDeck())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)


