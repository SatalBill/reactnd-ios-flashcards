import { connect } from "react-redux"
import DeckDetail from "../../components/DeckDetail"

const mapStateToProps = state => {
  return {
    currentDeck: state.decks.currentDeck,
  }
}

const mapDispatchToProps =  dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)


