import React, { Component } from "react"

import { View, Text, Header } from "react-native-elements"
import { GoBackIcon } from "../NavIcons"
import styles from "./styles"

const MainDeckHeader = ({title}) =>
  <Header
    // backgroundColor="#fff"
    leftComponent={<GoBackIcon/>}
    centerComponent={<DeckTitleName title={title}/>}
    innerContainerStyles={styles.innerContainer}
    outerContainerStyles={styles.outerContainer}
  />

const DeckTitleName = ({title}) =>
  <Text>{title}</Text>

export default MainDeckHeader
