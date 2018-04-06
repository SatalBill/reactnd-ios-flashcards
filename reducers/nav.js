import { NavigationActions } from "react-navigation"
import AppNavigator from "../config/AppNavigator"
import { GO_TO_BACK, OPEN_NEW_DECK_SCREEN, OPEN_HOME_SCREEN, OPEN_DECK_DETAIL_SCREEN, OPEN_NEW_CARD_SCREEN } from "../actions"

const firstAction = AppNavigator.router.getActionForPathAndParams("Home")
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
// const secondAction = AppWithNavigationState.router.getActionForPathAndParams("NewDeck")
const INIT_NAV_STATE = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
)

const nav = (state = INIT_NAV_STATE, action) => {
  let nextState
  switch (action.type) {
    case GO_TO_BACK:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    case OPEN_NEW_DECK_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: "NewDeck"}),
        state
      )
      break
    case OPEN_HOME_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: "Home"}),
        state
      )
      break
    case OPEN_DECK_DETAIL_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: "DeckDetail"}),
        state
      )
      break
    case OPEN_NEW_CARD_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: "NewCard"}),
        state
      )
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

export default nav