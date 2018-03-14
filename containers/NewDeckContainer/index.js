import { connect } from "react-redux"
import NewDeck from "../../components/NewDeck"
import { getDecks, addDeck } from "../../actions"

const mapStateToProps = state => {
  return {
    list: state.decks.list,
  }
}


const mapDispatchToProps =  dispatch => {
  return {
    addDeck: (title) => {
      dispatch(addDeck(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)


