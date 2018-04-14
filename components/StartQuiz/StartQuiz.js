import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { Header, Button, Input } from "react-native-elements"
import { Icon } from "react-native-elements"

import CardStack, { Card } from "react-native-card-stack-swiper"
import MainDeckHeader from "../MainDeckHeader"

export default class StartQuiz extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",

  },
  card: {
    width: 320,
    height: 470,
    padding: 14,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#FEB12C",
  },
  label: {
    textAlign: "center",
    fontSize: 30,

    // fontFamily: "System",

    color: "#fff",
    backgroundColor: "transparent"
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: "rgb(246,190,66)",
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#01df8a",
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#fd267d",
  }
})
