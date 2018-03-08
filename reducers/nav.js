import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../components/AppNavigator'

const firstAction = AppNavigator.router.getActionForPathAndParams('Home')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
// const secondAction = AppNavigator.router.getActionForPathAndParams('NewDeck')
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
)


const nav = (state = initialNavState, action) => {
  let nextState
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    case 'OPEN_NEWDECK_SCREEN':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'NewDeck'}),
        state
      )
      break
    case 'OPEN_HOME_SCREEN':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Home'}),
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
