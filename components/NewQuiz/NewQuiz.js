import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, KeyboardAvoidingView } from "react-native"
import { Button, Input } from "react-native-elements"
import styles from "./styles"
import MainDeckHeader from "../MainDeckHeader"

export default class NewCard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      answer: "",
      question: "",
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
    const _isFilled = this.state._isFilledQuestion && this.state._isFilledAnswer
    const {question, answer} = this.state
    const title = this.props.currentDeck.title
    if (_isFilled) {
      this.props.addQuizToDeck({answer, question, title})
      return this.props.goToBack()
    }
  }

  render () {

    const buttonStyle = this.state._isFilledQuestion && this.state._isFilledAnswer
      ? styles.activedButton : styles.inactivedButton

    const {currentDeck} = this.props
    const title = currentDeck ? `${currentDeck.title}` : " "

    return (
      <View style={styles.container}>
        <MainDeckHeader
          title={title}
        />
        <KeyboardAvoidingView style={styles.content}>
          <Input
            placeholder="Write Question"
            onChangeText={this.onQuestionChange}
            autoFocus
          />
          <Input
            placeholder="Write Answer"
            onChangeText={this.onAnswerChange}
            autoFocus
          />
          <Button
            title="SUBMIT"
            //loading
            //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            textStyle={{fontWeight: "700"}}
            buttonStyle={buttonStyle}
            containerStyle={{marginTop: 20}}
            onPress={this.submit}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}
