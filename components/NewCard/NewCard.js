import React, { Component } from "react"
import PropTypes from "prop-types"
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Header, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import styles from "./styles"
import { GoBackIcon } from "../NavIcons"

export default class NewCard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      question: "",
      answer: "",
      _isFilledQuestion: false,
      _isFilledAnswer: false
    }
  }

  onQuestionChange = (question) => {
    const _isFilledQuestion = question.length > 0
    this.setState({question, _isFilledQuestion})
  }

  onAnswerChange = (answer) => {
    const _isFilledAnswer = answer.length > 0
    this.setState({answer, _isFilledAnswer})
  }

  submit = () => {
    const {title} = this.state
    const _isFilled = this.state._isFilledQuestion && this.state.__isFilledAnswer
    if (_isFilled) {
      // save to db
      this.props.addCard({title})
      return this.props.navigation.dispatch({type: "OPEN_HOME_SCREEN"})
    }
  }

  render () {

    const buttonStyle = this.state._isFilledQuestion && this.state._isFilledAnswer
      ? styles.activedButton : styles.inactivedButton

    return (
      <View>
        <Header
          leftComponent={<GoBackIcon/>}
        />
        <View>
          <Input
            placeholder="Write Question"
            onChangeText={this.onQuestionChange}
          />
          <Input
            placeholder="Write Answer"
            onChangeText={this.onAnswerChange}
          />
          <Button
            text="SUBMIT"
            //loading
            //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            textStyle={{fontWeight: "700"}}
            buttonStyle={buttonStyle}
            containerStyle={{marginTop: 20}}
            onPress={this.submit}
          />
        </View>
      </View>
    )
  }
}
