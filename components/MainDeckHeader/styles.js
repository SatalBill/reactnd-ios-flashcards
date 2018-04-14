import { StyleSheet } from "react-native"
import { deviceHeight } from "../Dimensions"

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0,
  },

  outerContainer: {
    borderBottomWidth: 1,
    height: deviceHeight / 10,
    marginBottom: deviceHeight / 80,
    borderBottomColor: "#fff"
  }
})

export default styles
