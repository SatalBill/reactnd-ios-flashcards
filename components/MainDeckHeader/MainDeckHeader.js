import React, { Component } from "react"
import { View, Header } from "react-native-elements"
import { GoBackIcon } from "../NavIcons"
import styles from "./styles"

const MainDeckHeader = ({title}) =>
  <Header
    statusBarProps={{barStyle: "light-content", translucent: true }}
    leftComponent={<GoBackIcon/>}
    centerComponent={{text: title, style: styles.title}}
    innerContainerStyles={styles.innerContainer}
    outerContainerStyles={styles.outerContainer}
  />

export default MainDeckHeader
