import { combineReducers } from "redux"
import decks from "./decks"
import nav from "./nav"
import quiz from "./quiz"


export default combineReducers({
  decks,
  nav,
  quiz
})
