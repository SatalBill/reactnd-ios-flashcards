import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text, View, ScrollView, Alert } from "react-native"
import { Card, Button } from "react-native-elements"
import MainDeckHeader from "../MainDeckHeader"
import styles from "./styles"

export default class DeckDetail extends Component {

  startQuiz (quizNum) {
    return Number(quizNum) > 0 ? this.props.openStartQuiz(): this.showAlert()
  }

  showAlert = () => {
    Alert.alert(
      'No Card',
      'Please Add New Card',
      [
        {text: 'CLOSE'},
      ],
      { cancelable: false }
    )
  }

  render () {
    const {currentDeck, _isMountedProp} = this.props

    const title = _isMountedProp? `${currentDeck.title}`:""
    const quizNum = _isMountedProp? `${currentDeck.questions.length}`: ""

    return (
      <View style={styles.container}>
        <MainDeckHeader
          title={title}
          leftNavType={"HOME"}
        />
        <View style={styles.buttonContainer}>
          <QuizButton
            title="ADD CARD"
            onPress={this.props.openNewQuiz}
          />
          <QuizButton
            title="START QUIZ"
            onPress={() => this.startQuiz(quizNum)}
          />
        </View>
        <CardsNum
          quizNum={quizNum}
        />
        {_isMountedProp &&
        <QuizCards
          list={currentDeck.questions}
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

const CardsNum = ({quizNum = 0}) =>
  <View style={styles.cardNumLabel}>
    <Text>{`${quizNum} Cards`}</Text>
  </View>

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
