import { StyleSheet } from "react-native"
import { deviceHeight } from "../Dimensions"
import { StatusBar } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
  },
  innerContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
    // borderBottomWidth: 0,
    // backgroundColor: "#bababa",

  },

  outerContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
    marginTop: StatusBar.currentHeight

  }
})

export default styles
