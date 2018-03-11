import { connect } from "react-redux"
import DeckList from "../../components/DeckList"
import { getDecks, addDecks } from "../../actions"

const mapStateToProps = state => {
  return {
    ...state,
    list: state.decks.list,
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    initDecks: () => {
      dispatch(getDecks())
      dispatch(addDecks())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)


