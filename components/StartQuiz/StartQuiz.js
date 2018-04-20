import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { Icon } from "react-native-elements"
import CardStack, { Card } from "react-native-card-stack-swiper"
import MainDeckHeader from "../MainDeckHeader"
import styles from "./styles"

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
    return (
      <View style={{flex: 1}}>
        <MainDeckHeader
          title={title}
        />
        <CardStack
          style={styles.content}
          renderNoMoreCards={() =>
            <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
              {`${quiz.score}/${quiz.total}`}
            </Text>
          }
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.props.getRightAnswer()}
          onSwipedLeft={() => this.props.getWrongAnswer()}
        >

          {quiz.questions.length > 0 && quiz.questions.map((card, i) =>
            <Card
              key={`quiz-${i}`}
              style={[styles.card]}
            >
              <Text
                style={styles.label}>{card.question}
              </Text>
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

