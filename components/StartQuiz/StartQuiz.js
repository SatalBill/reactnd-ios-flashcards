import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { Icon } from "react-native-elements"
import CardStack, { Card } from "react-native-card-stack-swiper"
import MainDeckHeader from "../MainDeckHeader"
import styles from "./styles"
import CardFlip from "react-native-card-flip"

export default class StartQuiz extends Component {

  componentDidMount () {
    const quizNum = this.props.quiz.questions.length
    this.props.startQuiz({_isShow: true, total: quizNum})
  }

  componentWillUnmount () {
    this.props.clearQuiz()
  }

  render () {
    const {quiz} = this.props
    const title = quiz ? `${quiz.title}` : " "
    const scoreStatue = `${quiz.score}/${quiz.total}`

    return (
      <View style={{flex: 1}}>
        <MainDeckHeader
          title={title}
        />
        <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
          {scoreStatue}
        </Text>

        <CardStack
          style={styles.content}
          disableTopSwipe={true}
          disableBottomSwipe={true}

          renderNoMoreCards={() =>
            <View>
              {quiz._isFinish ? <View>
                  <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
                    {scoreStatue}
                  </Text>
                  <TouchableOpacity
                    style={[styles.button, styles.orange]}
                    onPress={() => {
                      this.swiper.goBackFromTop()
                    }}>

                  </TouchableOpacity>
                </View>
                : <View>
                  <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
                    LOADING
                  </Text>

                </View>

              }

            </View>

          }
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwipedRight={this.props.getRightAnswer}
          onSwipedLeft={this.props.getWrongAnswer}
        >
          {quiz.questions.length > 0 && quiz.questions.map((card, i) =>

            <Card>
              <CardFlip

                key={`quiz-${i}`}
                style={[styles.card]} ref={(card) => this.card = card}>
                <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]}
                                  onPress={() => this.card.flip()}><Text
                  style={styles.label}>{card.question}</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]}
                                  onPress={() => this.card.flip()}><Text
                  style={styles.label}>{card.answer}</Text></TouchableOpacity>
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
        </View>
      </View>
    )
  }
}

