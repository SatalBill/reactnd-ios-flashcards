import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, ScrollView, TouchableOpacity } from "react-native"
import { Header, Text, Card, Button, Badge, Input } from "react-native-elements"
import styles from "./styles"

import { GoBackIcon } from "../NavIcons"

export default class DeckDetail extends Component {

  componentWillUnmount () {
    this.props.clearDeck()
  }

  render () {
    const {currentDeck} = this.props
    const quizNum = currentDeck? currentDeck.questions.length: 0

    const title = currentDeck ? `${currentDeck.title}` : " "

    return (
      <View style={styles.container}>

        <Header

          leftComponent={<GoBackIcon/>}
          centerComponent={<DeckTitleName title={title} quizNum={quizNum}/>}
        >


        </Header>
        <View>
          <Button
            text="ADD QUIZ"
            //loading
            onPress={this.props.openNewQuiz}
            textStyle={{fontWeight: "700"}}
            containerStyle={{marginTop: 20}}
          />
          <Button
            text="START QUIZ"
            //loading
            onPress={this.props.openStartQuiz}
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

const DeckTitleName = ({title, quizNum = 0}) =>

    <Badge containerStyle={{backgroundColor: "violet"}}>

      <Text>{quizNum}</Text>
    </Badge>

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
