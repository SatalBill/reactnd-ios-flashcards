import React, { Component } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import CardFlip from "react-native-card-flip"
import CardStack, { Card } from "react-native-card-stack-swiper"
import MainDeckHeader from "../MainDeckHeader"
import DonutChart from "../DonutChart"
import styles from "./styles"

export default class StartQuiz extends Component {

  componentDidMount () {
    const quizNum = this.props.quiz.questions.length
    this.props.startQuiz({_isShow: true, total: quizNum})
  }

  componentWillUnmount () {
    this.props.clearQuiz()
  }

  getGradeMessage = (percentage) => {

    const message = {
      perfect: "perfect",
      excellent: "excellent",
      good: "good",
      fair: "fair",
      poor: "poor",
      bad: "bad"
    }

    let result = ""
    switch (true) {
      case percentage > 80 && percentage <= 100: {
        result = message.perfect
        break
      }

      case percentage > 60 && percentage <= 80 : {
        result = message.excellent
        break
      }

      case percentage > 40 && percentage <= 60: {
        result = message.good
        break
      }

      case percentage > 20 && percentage <= 40: {
        result = message.fair
        break
      }

      case percentage > 0 && percentage <= 20: {
        result = message.poor
        break
      }

      case percentage == 0: {
        result = message.bad
        break
      }

      default:
        return
    }
    return result
  }

  render () {
    const {quiz} = this.props
    const title = quiz.title ? `${quiz.title}` : " "
    const scoreStatus = `${quiz.score}/${quiz.total}`
    const percentage = (quiz.score / quiz.total) * 100

    const gradeMessage = this.getGradeMessage(percentage)

    return (
      <View style={styles.container}>
        <MainDeckHeader
          title={title}
        />

        {!quiz._isFinish &&
        <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
          {scoreStatus}
        </Text>
        }

        <CardStack
          style={styles.content}
          disableTopSwipe={true}
          disableBottomSwipe={true}
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwipedRight={this.props.getRightAnswer}
          onSwipedLeft={this.props.getWrongAnswer}
          renderNoMoreCards={() =>
            <View>
              {quiz._isFinish ? <DonutChart
                  score={quiz.score}
                  total={quiz.total}
                  scoreStatus={scoreStatus}
                  gradeMessage={gradeMessage}
                  percentage={percentage}
                />
                : <View>
                  <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
                    LOADING
                  </Text>
                </View>
              }

            </View>

          }

        >
          {quiz.questions.length > 0 && quiz.questions.map((card, i) =>
            <Card key={`quiz-${i}`}>
              <CardFlip
                style={[styles.card]}
                ref={card => this[`card${i}`] = card } >
                <TouchableOpacity activeOpacity={1}
                                  style={[styles.card, styles.card1]}
                                  onPress={() => this[`card${i}`].flip()}>
                  <Text style={styles.label}>{card.question}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}
                                  style={[styles.card, styles.card2]}
                                  onPress={() => this[`card${i}`].flip()}>
                  <Text style={styles.label}>{card.answer}</Text>
                </TouchableOpacity>
              </CardFlip>
            </Card>
          )}
        </CardStack>

        {!quiz._isFinish &&
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
              this.swiper.swipeLeft()
            }}>
              <Icon
                size={30}
                name="x"
                type="feather"
                color="#fd267d"/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
              this.swiper.swipeRight()
            }}>
              <Icon
                size={30}
                name="check"
                type="feather"
                color="#01df8a"/>
            </TouchableOpacity>
          </View>
        </View>}
      </View>
    )
  }
}







