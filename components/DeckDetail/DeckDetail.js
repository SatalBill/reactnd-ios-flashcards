import React, { Component } from "react"
import { View, ScrollView, FlatView } from "react-native"
import PropTypes from "prop-types"
import { Header, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import styles from "./styles"

export default class DeckDetail extends Component {

  render () {
    const {currentDeck} = this.props

    const title = currentDeck? `${currentDeck.title}` : ' '

    return (
      <View style={styles.container}>
        <Header
          leftComponent={{icon: "menu", color: "#fff"}}
          centerComponent={{text: title, style: {color: "#fff"}}}
          rightComponent={{icon: "home", color: "#fff"}}
        />

        <Button
          text="ADD QUIZ"
          //loading
          //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          textStyle={{fontWeight: "700"}}
          containerStyle={{marginTop: 20}}
        />
        <Button
          text="START QUIZ"
          //loading
          //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          textStyle={{fontWeight: "700"}}
          containerStyle={{marginTop: 20}}
        />

      </View>
    )
  }
}
