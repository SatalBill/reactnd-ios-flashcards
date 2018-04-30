import React, { Component } from "react"
import { addNavigationHelpers } from "react-navigation"
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import AppNavigator from "./AppNavigator"

const AppWithNavigationState = (props) => {
  const addListener = createReduxBoundAddListener("root")
  return (
    <AppNavigator navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
      addListener
    })}/>
  )
}

export default AppWithNavigationState
