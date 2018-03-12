import React, { Component } from "react"
import { View, ScrollView } from "react-native"
import PropTypes from "prop-types"
import { Avatar, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import styles from "./styles"

export default class DeckList extends Component {
  _isMounted = false

  componentDidMount () {
    this._isMounted = true
    this.fecthDecks()
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  fecthDecks = () => {
    this._isMounted && this.props.fetchDecks()
  }

  changeView = () => {
    this.props.navigation.dispatch({type: "OPEN_NEWDECK_SCREEN"})
  }

  render () {
    const {list} = this.props
    return (
      <View style={styles.container}>
        <View>
          <Avatar
            medium
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          />
          <Text h4>Sujin Lee</Text>
          <Button
            onPress={this.changeView}
            text="Create a new deck"
          />
          <ScrollView>
          {list &&
          <Decks
            list={list}
          />}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const Decks = ({list}) =>
  <List>
    {
      Object.keys(list).map((k, i) =>
        <Deck
          key={i}
          title={list[k].title}
          quizNum={list[k].questions.length}
        />
      )
    }
  </List>

const Deck = ({title, quizNum = 0}) =>
  <Card
    title={title}
  >
    <Badge
      value={quizNum}
      textStyle={{color: "orange"}}
    />
  </Card>
