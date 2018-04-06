import React, { Component } from "react"
import PropTypes from "prop-types"
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Header, Button, Input } from "react-native-elements"
import styles from "./styles"
import { GoBackIcon } from "../NavIcons"

export default class NewDeck extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: "",
      _isFilled: false
    }
  }

  onTitleChange = (title) => {
    const _isFilled = title.length > 0
    this.setState({title, _isFilled})
  }

  submit = () => {
    const {title} = this.state
    if (this.state._isFilled) {
      // save to db
      this.props.addDeck({title})
      return this.props.goToBack()
    }
  }

  render () {
    const buttonStyle = this.state.title.length === 0 ? styles.inactivedButton : styles.activedButton

    return (
      <View >
        <Header
          leftComponent={<GoBackIcon/>}
        />
        <View >
          <Input
            placeholder="Write Deck Title"
            onChangeText={this.onTitleChange}
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
