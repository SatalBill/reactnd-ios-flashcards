import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, ScrollView, FlatView } from "react-native"
import { Avatar, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import styles from "./styles"
import { OPEN_NEW_DECK_SCREEN, OPEN_DECK_DETAIL_SCREEN } from "../../actions"

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

  openNewDeck = () => {
    this.props.navigation.dispatch({type: OPEN_NEW_DECK_SCREEN})
  }

  openDeckDetail = (searchKey) => {
    this.props.receiveDeck(searchKey)
    this.props.navigation.dispatch({type: OPEN_DECK_DETAIL_SCREEN})
  }

  render () {
    const {list} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.profile}>

          <Avatar
            medium
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          />
          <Text h4>Sujin Lee</Text>
          <Button
            onPress={this.openNewDeck}
            text="Create a new deck"
          />

        </View>

        <View style={styles.decklist}>
          <ScrollView>
            {list &&
            <Decks
              list={list}
              onPress={this.openDeckDetail}
            />}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const Decks = ({list, onPress}) =>
  <List>
    {
      Object.keys(list).map((k, i) =>
        <Deck
          key={i}
          title={list[k].title}
          quizNum={list[k].questions.length}
          onPress={() => onPress(list[k].id)}
        />
      )
    }
  </List>

const Deck = ({title, quizNum = 0, onPress}) =>
  <ListItem
    title={title}
    badge={{value: quizNum}}
    onPress={onPress}
  >
  </ListItem>

// Typechecking With PropTypes
const DeckShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  questions: PropTypes.oneOfType([null, PropTypes.object]).isRequired
}

DeckList.propTypes = {
  list: PropTypes.objectOf(PropTypes.shape(DeckShape))
}

Decks.propTypes = {
  list: PropTypes.object,
  onPress: PropTypes.func
}

Deck.propTypes = {
  title: PropTypes.string,
  quizNum: PropTypes.number,
  onPress: PropTypes.func
}
