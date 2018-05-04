import React, { Component } from "react"
import PropTypes from "prop-types"
import { KeyboardAvoidingView, View } from "react-native"
import { Text, Button, Input } from "react-native-elements"
import MainDeckHeader from "../MainDeckHeader"
import styles from "./styles"

export default class NewDeck extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: "",
      _isFilled: false,
      _isError: false
    }
  }

  onTitleChange = (title) => {
    const _isFilled = title.length > 0
    title = title.trim()
    this.setState({title, _isFilled})
    this.initErrorMessage(_isFilled)
  }

  initErrorMessage = (_isFilled) => {
    if (!_isFilled) {
      this.setState({_isError: false})
    }
  }

  submit = async () => {
    const {title, _isFilled} = this.state
    const {list} = this.props
    if (_isFilled) {
      if (list[title]) {
        this.setState({_isError: true})
      }
      else {
        this.props.openDeckDetail({title})
      }
    }
  }

  render () {
    const {title, _isError} = this.state
    const buttonStyle = title.length === 0 ? styles.inActivedButton : styles.activedButton

    return (
      <View style={styles.container}>
        <MainDeckHeader/>
        <KeyboardAvoidingView style={styles.content}>
          <Input
            placeholder="Write Deck Title"
            onChangeText={this.onTitleChange}
            errorStyle={{color: "red"}}
          />
          <ErrorMessage
            error={_isError}
          />
          <Button
            title="SUBMIT"
            titleStyle={{fontWeight: "700"}}
            buttonStyle={buttonStyle}
            containerStyle={{marginTop: 20}}
            onPress={this.submit}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const ErrorMessage = ({error}) =>
  <Text>
    {error ? "Deck already exists" : ""}
  </Text>
