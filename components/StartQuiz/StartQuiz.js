import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { Header, Button, Input } from "react-native-elements"
import { Icon } from "react-native-elements"
import CardStack, { Card } from "react-native-card-stack-swiper"
import MainDeckHeader from "../MainDeckHeader"
import styles from "./styles"


export default class StartQuiz extends Component {


  componentDidMount () {
    const quizNum = this.props.currentDeck.questions.length
    this.props.startQuiz({showQuiz: true, total: quizNum})
  }
  componentWillUnmount () {
    this.props.clearQuiz()
  }

  render () {
    const {currentDeck} = this.props
    const title = currentDeck ? `${currentDeck.title}` : " "
    return (
      <View style={{flex: 1}}>

        <MainDeckHeader
          title={title}

        />


        <CardStack
          style={styles.content}

          renderNoMoreCards={() =>
            <Text style={{fontWeight: "700", fontSize: 18, color: "gray"}}>
              No more cards:(
            </Text>
          }
          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => console.log("onSwiped")}
          onSwipedLeft={() => console.log("onSwipedLeft")}
        >

          {currentDeck.questions.length > 0 && currentDeck.questions.map((card, i) =>
            <Card
              key={`quiz-${i}`}
              style={[styles.card]}
              onSwipedLeft={() => console.log("onSwipedLeft")}
            >
              <Text
                style={styles.label}>{card.question}
              </Text>
            </Card>
          )
          }

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
            <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft()
            }}>
              <Icon
                size={18}
                name="rotate-ccw"
                type="feather"
                color="#FEB12C"/>

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

