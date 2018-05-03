import React, { Component } from "react"
import { Header } from "react-native-elements"
import { GoBackIcon } from "../NavIcons"
import styles from "./styles"

const MainDeckHeader = ({title = "", leftNavType = "DEFAULT"}) => {
  return (
    <Header
      statusBarProps={{barStyle: "light-content", translucent: true}}
      leftComponent={
        < GoBackIcon
          type={leftNavType}
        />}
      centerComponent={{text: title, style: styles.title}}
      innerContainerStyles={styles.innerContainer}
      outerContainerStyles={styles.outerContainer}
    />)
}

export default MainDeckHeader
