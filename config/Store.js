import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from 'redux-logger'
import reducers from "../reducers"
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigation = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

const logger = createLogger()
const middleware = [navigation, thunk, logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  ))

export default Store
