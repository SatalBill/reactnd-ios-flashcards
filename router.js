import React from "react"
import { StackNavigator } from "react-navigation"
import { DeckList }  from "./DeckList"
import { NewDeck } from "./NewDeck"


export const Root = StackNavigator({
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
