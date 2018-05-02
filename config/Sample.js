import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import reducers from "../reducers"
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers"

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigation = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

const logger = createLogger()
const middleware = [navigation, thunk, logger]

// eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const Store = createStore(
//   reducers,
//   applyMiddleware(...middleware),
//   composeEnhancers
// )
//
// export default Store

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose



const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
)

export default configureStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    enhancer

  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../reducers").default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

//
//
// if (module.hot) {
//   module.hot.accept(() => {
//     store.replaceReducer(require('./reducers').default);
//   });
// }
