import React, { Component } from "react"
import PropTypes from "prop-types"
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Text, Header, Button, Input } from "react-native-elements"
import styles from "./styles"
import { GoBackIcon } from "../NavIcons"

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
    this.setState({title, _isFilled})
    this.initErrorMessage(_isFilled)
  }

  initErrorMessage = (_isFilled) => {
    if (!_isFilled) {
      this.setState({_isError: false})
    }
  }

  submit = () => {
    const {title, _isFilled} = this.state
    const {list} = this.props
    if (_isFilled) {
      if (list[title]) {
        this.setState({_isError: true})
      }
      else {
        this.props.addDeck({title})
        return this.props.goToBack()
      }
    }
  }

  render () {
    const {title, _isError} = this.state
    const buttonStyle = title.length === 0 ? styles.inactivedButton : styles.activedButton
    //const errorMsg = _isError ? "Already created" : ""

    // const errorMessage = this.state
    return (
      <View>
        <Header
          leftComponent={<GoBackIcon/>}
        />
        <View>
          <Input

            placeholder="Write Deck Title"
            onChangeText={this.onTitleChange}
            errorStyle={{color: "red"}}
          />
          <ErrorMessage
            error={_isError}
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

const ErrorMessage = ({error}) =>
  <Text>
    {error? "Already created" : ""}
  </Text>
