import { StackNavigator } from "react-navigation"
import DeckListContainer from "../containers/DeckListContainer"
import NewDeckContainer from "../containers/NewDeckContainer"
import DeckDetailContainer from "../containers/DeckDetailContainer"
import NewCardContainer from "../containers/NewCardContainer"


export default StackNavigator({
  Home: {screen: DeckListContainer, navigationOptions: { header: null } },
  NewDeck: {screen: NewDeckContainer, navigationOptions: { header: null }},
  DeckDetail: {screen: DeckDetailContainer, navigationOptions: { header: null }},
  NewCard: {screen: NewCardContainer, navigationOptions: { header: null }}
})
