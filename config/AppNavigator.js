import { StackNavigator } from "react-navigation"
import DeckListContainer from "../containers/DeckListContainer/index"
import NewDeckContainer from "../containers/NewDeckContainer/index"

export default StackNavigator({
  Home: {screen: DeckListContainer, navigationOptions: { header: null } },
  NewDeck: {screen: NewDeckContainer, navigationOptions: { header: null }}
})
