import React, { Component } from "react"
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Avatar, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"


export class DeckList extends Component {

  onPress = () => {
    this.props.navigation.navigate("NewDeckView")
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
            onPress={this.onPress}
            text="Create a new deck"
          />

          {list &&
          <Decks
            list={list}
          />}
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
          quizNum={0}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
