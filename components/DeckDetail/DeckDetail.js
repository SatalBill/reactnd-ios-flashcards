import React, { Component } from "react"
import PropTypes from "prop-types"
import { Text, View, ScrollView, TouchableOpacity } from "react-native"
import { Card, Button } from "react-native-elements"
import MainDeckHeader from "../MainDeckHeader"
import styles from "./styles"
import { deviceWidth } from "../Dimensions"

export default class DeckDetail extends Component {

  componentWillUnmount () {
    this.props.clearDeck()
  }

  render () {
    const {currentDeck} = this.props
    const quizNum = currentDeck ? currentDeck.questions.length : 0

    const title = currentDeck ? `${currentDeck.title}` : " "

    return (
      <View style={styles.container}>
        <MainDeckHeader
          title={title}
        />

        <View style={{flexDirection: "row"}}>
          <QuizButton
            title="ADD CARD"
            onPress={this.props.openNewQuiz}
          />
          <QuizButton
            title="START QUIZ"
            //loading
            onPress={this.props.openStartQuiz}

          />
        </View>
        {currentDeck &&
        <QuizCards
          list={currentDeck.questions}
          quizNum={quizNum}
          //onPress={this.openDeckDetail}
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
    buttonStyle={{
      backgroundColor: "rgba(92, 99,216, 1)",
      width: deviceWidth / 2,
      borderWidth: 0,
      borderRadius: 0
    }}
  />

const DeckTitleName = ({title}) =>
  <View>
    <Text>{title}</Text>
  </View>

const QuizCards = ({list, quizNum = 0}) =>
  <ScrollView>
    <Text>{quizNum} Cards</Text>

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
