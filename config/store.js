import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { AsyncStorage } from "react-native"

import reducers from "../reducers"

const middleware = [thunk]
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers, composeEnhancers(
  applyMiddleware(
    ...middleware
  )))

export default store

