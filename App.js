import React, { Component } from "react"
import Store from "./config/store"
import { Provider } from "react-redux"

import AppWithNavigationState from './components/AppNavigator'

export default class App extends Component {

  render () {
    return (
      <Provider store={Store}>
        <AppWithNavigationState />

      </Provider>
    )
  }
}

