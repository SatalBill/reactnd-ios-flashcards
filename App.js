import React from "react"
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Avatar, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
import { StackNavigator } from "react-navigation"

import { Root } from "./router"
import { storage } from "./Storage"


export default class App extends React.Component {
  state = {
    openNewDeck: false
  }

  render () {
    const list = storage
    const {openNewDeck} = this.state

    return (

      <View style={styles.container}>
        <Root />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
