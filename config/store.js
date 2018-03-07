import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { AsyncStorage } from "react-native"
import { createLogger } from 'redux-logger'
import reducers from "../reducers"

const logger = createLogger()
const middleware = [thunk, logger]

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers, composeEnhancers(
  applyMiddleware(
    ...middleware
  )))

export default store

