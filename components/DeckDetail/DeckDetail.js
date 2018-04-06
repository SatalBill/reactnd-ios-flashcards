import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, ScrollView, TouchableOpacity } from "react-native"
import { Header, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import styles from "./styles"

import { GoBackIcon } from "../NavIcons"

export default class DeckDetail extends Component {

  componentWillUnmount () {
    this.props.clearDeck()
  }

  render () {
    const {currentDeck} = this.props
    const title = currentDeck ? `${currentDeck.title}` : " "

    return (
      <View style={styles.container}>

        <Header

          leftComponent={<GoBackIcon/>}
          centerComponent={{text: title, style: {color: "#fff"}}}
          // rightComponent={{icon: "arrowleft", type: "font-awesome", ncolor: "#fff"}}
        />
        <View>
          <Button
            text="ADD CARD"
            //loading
            onPress={this.props.openNewCard}
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
        {currentDeck &&
        <QuizCards
          list={currentDeck.questions}
          //onPress={this.openDeckDetail}
        />
        }


      </View>
    )
  }
}

const QuizCards = ({list}) =>
  <ScrollView>
    {
      Object.keys(list).map((k, i) =>
        <Card
          key={i}
          title={list[k].question}

        >
          <Text>{list[k].answer}</Text>
        </Card>
      )
    }
  </ScrollView>

const Cardshape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  questions: PropTypes.oneOfType([null, PropTypes.object]).isRequired
}

DeckDetail.propTypes = {
  currentDeck: PropTypes.shape(Cardshape)

}
