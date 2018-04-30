import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  activedButton: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
  inactivedButton: {
    backgroundColor: "gray",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
})

export default styles
