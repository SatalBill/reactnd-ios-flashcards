import { StyleSheet } from "react-native"
import { deviceWidth, deviceHeight } from "../Dimensions"

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 45,
    height: 400,
    width: 300,
  },
  content: {
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginRight: 10
  },
  label: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "#fff",
  }
})

export default styles
