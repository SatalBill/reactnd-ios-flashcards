import React, { Component } from "react"
import Root from "./config/router"
import store from "./config/store"
import { Provider } from "react-redux"

export default class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}
