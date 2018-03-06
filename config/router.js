import React from "react"
import { StackNavigator } from "react-navigation"
import DeckList from "../components/DeckList"
import NewDeck from "../components/NewDeck"

const Root = StackNavigator({
  Home: {
    screen: DeckList,
  },
  NewDeckView: {
    screen: NewDeck
  }
}, {
  mode: "modal",
  headerMode: "none",
})

export default Root
