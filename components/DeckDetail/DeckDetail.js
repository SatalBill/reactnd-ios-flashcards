import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text, View, ScrollView } from "react-native"
import { Card, Button } from "react-native-elements"
import MainDeckHeader from "../MainDeckHeader"
import styles from "./styles"

export default class DeckDetail extends Component {

  componentWillUnmount () {
    this.props.clearDeck()
  }

  render () {
    const {currentDeck} = this.props
    const quizNum = currentDeck
      ? currentDeck.questions.length
      : 0
    const title = currentDeck
      ? `${currentDeck.title}`
      : " "

    return (
      <View style={styles.container}>
        <MainDeckHeader
          title={title}
        />
        <View style={styles.buttonContainer}>
          <QuizButton
            title="ADD CARD"
            onPress={this.props.openNewQuiz}
          />
          <QuizButton
            title="START QUIZ"
            onPress={this.props.openStartQuiz}
          />
        </View>
        <View style={styles.cardNumLabel}>
          <Text>{quizNum} Cards</Text>
        </View>

        {currentDeck &&
        <QuizCards
          list={currentDeck.questions}
          quizNum={quizNum}
        />
        }
      </View>
    )
  }
}

const QuizButton = ({title, onPress}) =>
  <Button
    title={title}
    //loading
    onPress={onPress}
    buttonStyle={styles.button}
  />

const QuizCards = ({list, quizNum = 0}) =>
  <ScrollView>
    {
      Object.keys(list).map((k, i) =>
        <Card
          key={i}
          title={list[k].question}
        >
          <View>
            <Text>{list[k].answer}</Text>
          </View>
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
