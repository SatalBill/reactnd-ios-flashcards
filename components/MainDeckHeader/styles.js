import { StyleSheet } from "react-native"
import { StatusBar } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
  },
  innerContainer: {
  },

  outerContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
    marginTop: StatusBar.currentHeight

  }
})

export default styles
