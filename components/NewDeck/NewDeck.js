import React, { Component } from "react"
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Button, Input } from "react-native-elements"
import styles from "./styles"


class NewDeck extends Component {

  submit = () => {
    this.props.navigation.dispatch({ type: 'OPEN_HOME_SCREEN' })
  }

  render () {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Write Deck Title"
        />
        <Button
          text="SUBMIT"
          //loading
          //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          textStyle={{fontWeight: "700"}}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{marginTop: 20}}
          onPress={this.submit}
        />
      </View>
    )
  }
}

export default NewDeck

//
// export const NewDeck = () => (
//   <View>
//     <Input
//       placeholder="Write Deck Title"
//     />
//     <Button
//       text="SUBMIT"
//       //loading
//       //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
//       textStyle={{fontWeight: "700"}}
//       buttonStyle={{
//         backgroundColor: "rgba(92, 99,216, 1)",
//         width: 300,
//         height: 45,
//         borderColor: "transparent",
//         borderWidth: 0,
//         borderRadius: 5
//       }}
//       containerStyle={{marginTop: 20}}
//     />
//   </View>
// )
