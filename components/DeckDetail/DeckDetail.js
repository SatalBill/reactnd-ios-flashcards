import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, ScrollView, FlatView, TouchableOpacity } from "react-native"
import { Header, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import styles from "./styles"

import { GoBackIcon } from "../NavIcons"

export default class DeckDetail extends Component {


  componentWillUnmount() {
    this.props.clearDeck()
  }

  render () {
    const {currentDeck} = this.props
    const title = currentDeck ? `${currentDeck.title}` : " "

    return (
      <View style={styles.container}>
        <Header

          leftComponent={<GoBackIcon/>}
          centerComponent={{text: title, style: {color: "#fff"}}}
          // rightComponent={{icon: "arrowleft", type: "font-awesome", ncolor: "#fff"}}
        />

        <Button
          text="ADD CARD"
          //loading

          textStyle={{fontWeight: "700"}}
          containerStyle={{marginTop: 20}}
        />
        <Button
          text="START QUIZ"
          //loading
          //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          textStyle={{fontWeight: "700"}}
          containerStyle={{marginTop: 20}}
        />
        <View>



        </View>


      </View>
    )
  }
}

const Deck = ({title, quizNum = 0, onPress}) =>
  <ListItem
    title={title}
    badge={{value: quizNum}}
    onPress={onPress}
  >
  </ListItem>

//
// onPress={() => navigation.dispatch({type: OPEN_HOME_SCREEN})}
//
// const GoBackIcon = (navigation) => {
//   console.log(navigation)
//   return (
//     <TouchableOpacity>
//     <Icon
//       size={23}
//       name="arrow-back"
//       color="#fff"/>
//     </TouchableOpacity>
//   )
// }

// Typechecking With PropTypes
const DeckShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  questions: PropTypes.oneOfType([null, PropTypes.object]).isRequired
}

DeckDetail.propTypes = {
  currentDeck: PropTypes.shape(DeckShape)

}
