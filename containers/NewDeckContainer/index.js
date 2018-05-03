import { connect } from "react-redux"
import NewDeck from "../../components/NewDeck"
import { openDeckDetail, addDeck } from "../../actions"

const mapStateToProps = state => {
  return {
    list: state.decks.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openDeckDetail:  (title) => {
      dispatch(addDeck(title))
      dispatch(openDeckDetail())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)


