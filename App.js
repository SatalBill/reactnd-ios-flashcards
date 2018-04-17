import React, { Component } from "react"
import { Provider } from "react-redux"
import Store from "./config/store"
import AppWithNavigationStateContainer from './containers/AppWithNavigationStateContainer'

export default class App extends Component {

  render () {
    return (
      <Provider store={Store}>
        <AppWithNavigationStateContainer />
      </Provider>
    )
  }
}

