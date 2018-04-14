import { StyleSheet } from "react-native"

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
})

export default styles
