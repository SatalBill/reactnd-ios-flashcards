import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import { connect } from "react-redux"

import {goToBack} from "../../actions"

const GoBackIcon = (props) => {

  return (
    <TouchableOpacity onPress={props.goToBack}>
      <Icon
        size={23}
        name="arrow-left"
        type="feather"
        color="#fff"/>
    </TouchableOpacity>
  )
}

const mapStateToProps = state => ({
  nav: state.nav,
  navigation: state.navigation
})

const mapDispatchToProps =  dispatch => {
  return {
    goToBack: () => {
      dispatch(goToBack())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoBackIcon)




