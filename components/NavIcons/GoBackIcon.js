import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import { connect } from "react-redux"

import { goToBack, openHome } from "../../actions"

const GoBackIcon = (props) => {
  let status
  switch (props.type) {
    case "DEFAULT":
      status = {
        icon: "arrow-left",
        nextNav: props.goToBack
      }
      break
    case "HOME":
      status = {
        icon: "list",
        nextNav: props.openHome
      }
      break
    default:
      break

  }
  console.log(status)

  return (
    <TouchableOpacity
      onPress={status.nextNav}
    >
      <Icon
        size={23}
        name={status.icon}
        type="feather"/>
    </TouchableOpacity>
  )
}
const mapStateToProps = state => ({
  nav: state.nav,
  navigation: state.navigation
})

const mapDispatchToProps = dispatch => {
  return {
    goToBack: () => {
      dispatch(goToBack())
    },
    openHome: () => {
      dispatch(openHome())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoBackIcon)




