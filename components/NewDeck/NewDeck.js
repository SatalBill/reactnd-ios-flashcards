import React, { Component } from "react"
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Button, Input } from "react-native-elements"
import styles from "./styles"


class NewDeck extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: '',
      _isFilled: false
    }
  }

  onTitleChange = (title) => {
    const _isFilled = title.length > 0
    this.setState({title, _isFilled})
  }


  submit = () => {
    return this.state._isFilled ?
      this.props.navigation.dispatch({type: 'OPEN_HOME_SCREEN'}) : null
  }

  render () {
    const buttonStyle = this.state.title.length === 0 ? styles.inactivedButton : styles.activedButton

    return (
      <View style={styles.container}>
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
    )
  }
}

export default NewDeck
