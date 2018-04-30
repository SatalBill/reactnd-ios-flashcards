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
    this.startQuiz()
  }

  startQuiz () {
    const quizNum = this.props.quiz.questions.length
    this.props.startQuiz({_isShow: true, total: quizNum})
  }

  componentWillUnmount () {
    this.props.clearQuiz()
  }

  render () {
    const {quiz} = this.props
    const title = quiz.title
      ? `${quiz.title}`
      : " "
    const scoreStatus = `${quiz.score.points} / ${quiz.total}`
    const currentCard = `${quiz.currentIndex} of ${quiz.total}`

    return (
      <View style={styles.container}>
        <MainDeckHeader
          title={title}
        />

        {quiz._isFinish
          ? <View style={styles.content}>
            <DonutChart
              style={styles.content}
              scoreStatus={scoreStatus}
              size={200}
            />
          </View>
          : <View style={styles.content}>
            <View style={styles.buttonContainer}>
              <Text>{currentCard}</Text>
              <Text>score {scoreStatus}</Text>
            </View>
            <CardStack
              style={styles.cardGroup}
              disableTopSwipe={true}
              disableBottomSwipe={true}
              ref={swiper => {
                this.swiper = swiper
              }}
              onSwipedRight={this.props.getRightAnswer}
              onSwipedLeft={this.props.getWrongAnswer}
              renderNoMoreCards={() =>
                <View>
                  {!quiz._isFinish &&
                  <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
                    LOADING
                  </Text>
                  }
                </View>
              }
            >
              {quiz.questions.length > 0 && quiz.questions.map((card, i) =>
                <Card key={`quiz-${i}`}>
                  <CardFlip
                    style={[styles.card]}
                    ref={card => this[`card${i}`] = card}>
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

            <View style={styles.footer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                  this.swiper.swipeLeft()
                }}>
                  <Icon
                    size={28}
                    name="x"
                    type="feather"
                    color="#fd267d"/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                  this.swiper.swipeRight()
                }}>
                  <Icon
                    size={28}
                    name="check"
                    type="feather"
                    color="#01df8a"/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      </View>
    )
  }
}







