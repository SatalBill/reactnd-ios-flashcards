import { StyleSheet } from "react-native"
import { deviceHeight } from "../Dimensions"

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0,
    backgroundColor: "#fff"
  },

  outerContainer: {
    height: deviceHeight / 10,
    marginBottom: deviceHeight / 90,
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
  }
})

export default styles
