import React, { Component } from "react"

import { Dimensions } from "react-native"

let deviceWidth = Dimensions.get("window").width
let deviceHeight = Dimensions.get("window").height

export {
  deviceWidth, deviceHeight
}
