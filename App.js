import React, { Component } from "react"
import { Provider } from "react-redux"
import Store  from "./config/Store"
import AppWithNavigationStateContainer from "./containers/AppWithNavigationStateContainer"
import { setLocalNotification } from "./utils/PushNotification"

export default class App extends Component {
  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Provider store={ Store }>
        <AppWithNavigationStateContainer/>
      </Provider>
    )
  }
}


