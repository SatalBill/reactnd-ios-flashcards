import React from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import { Avatar, Text, Card, Button, List, ListItem, Badge } from "react-native-elements"
import { storage } from "./Storage"


export default class App extends React.Component {


  render() {
    const list = storage


    return (
      <View style={styles.container}>
        <View>
          <Avatar
            medium
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          />
          <Text h4>Sujin Lee</Text>
        </View>
        <View>
          <DeckList
            list={list}
          />
        </View>

      </View>
    )
  }
}

const DeckList = ({list}) =>
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

    <Card
      title="Add New"
    />
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
