import { StackNavigator } from "react-navigation"
import DeckListContainer from "../../containers/DeckListContainer/index"
import NewDeckContainer from "../../containers/NewDeckContainer/index"
import DeckDetailContainer from "../../containers/DeckDetailContainer/index"
import NewQuizContainer from "../../containers/NewQuizContainer/index"
import StartQuizContainer from "../../containers/StartQuizContainer/index"


export default StackNavigator({
  Home: {screen: DeckListContainer, navigationOptions: { header: null } },
  NewDeck: {screen: NewDeckContainer, navigationOptions: { header: null }},
  DeckDetail: {screen: DeckDetailContainer, navigationOptions: { header: null }},
  NewQuiz: {screen: NewQuizContainer, navigationOptions: { header: null }},
  StartQuiz: {screen: StartQuizContainer, navigationOptions: { header: null }}
})
