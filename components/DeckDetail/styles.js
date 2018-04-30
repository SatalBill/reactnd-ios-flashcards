import { StyleSheet } from "react-native"
import { deviceWidth } from "../Dimensions"

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  outerContainer: {
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: 'stretch',
  },
  profile: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  decklist: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf: 'stretch',
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: deviceWidth / 2,
    padding: 1,
    borderWidth: 0,
    borderRadius: 0
  },
  cardNumLabel: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})

export default styles
