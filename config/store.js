import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import reducers from "../reducers/index"

const middleware = [thunk]
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = () => {
  const createStore = createStore(reducers, composeEnhancers(
    applyMiddleware(
      ...middleware
    ))
  )
  createStore.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState())
  })

  return createStore
}

export default store

