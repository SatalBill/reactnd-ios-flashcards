import { connect } from "react-redux"
import NewDeck from "../../components/NewDeck"
import { goToBack, addDeck } from "../../actions"

const mapStateToProps = state => {
  return {
    list: state.decks.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDeck: (title) => {
      dispatch(addDeck(title))
    },

    goToBack: () => {
      dispatch(goToBack())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)


