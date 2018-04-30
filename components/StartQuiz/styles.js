import { StyleSheet } from "react-native"
import { deviceWidth, deviceHeight } from "../Dimensions"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },

  cardGroup: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",

  },
  card: {
    width: deviceWidth*0.8,
    height: deviceHeight*0.7,
    padding: 14,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#FEB12C",
  },
  label: {
    textAlign: "center",
    fontSize: 30,

    // fontFamily: "System",

    color: "#fff",
    backgroundColor: "transparent"
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderColor: "rgb(246,190,66)",
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 65,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 65,

    borderColor: "#01df8a",
  },
  red: {
    width: 65,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 65,
    borderColor: "#fd267d",
  }
})

export default styles
