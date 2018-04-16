import React, { Component } from "react"

import { View, Text, Header } from "react-native-elements"
import { GoBackIcon } from "../NavIcons"
import styles from "./styles"
import { deviceHeight } from "../Dimensions"

const MainDeckHeader = ({title}) =>



  <Header
    statusBarProps={{ barStyle: 'dark-content', translucent: true }}
    leftComponent={<GoBackIcon/>}
    centerComponent={<DeckTitleName title={title}/>}
    innerContainerStyles={styles.innerContainer}
    outerContainerStyles={styles.outerContainer}
  />

const DeckTitleName = ({title}) =>
    <Text style={
      { lineHeight: 20,
        fontSize: 20,
      }
    }


    >{title}</Text>

export default MainDeckHeader
