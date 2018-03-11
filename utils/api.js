import { AsyncStorage } from "react-native"


// Using ES217 Async Functions
//
// // retrieve
// export const retrieve = async (key) => await AsyncStorage.getItem(key);
//
// // store
// export const store = async (key, value) => {
//   await AsyncStorage.setItem(key, value);
// }
//
// // store multiple keys
// export const storeCredentials = async (token, permissions) => {
//   await AsyncStorage.multiSet([['token', token], ['permissions', JSON.stringify(permissions)]]);
// };
//
// // clear multiple keys
// export const clearCredentials = async () => await AsyncStorage.multiRemove(['token', 'permissions']);

export const STORAGE_KEY = 'UdaciFitness:calendar'

//
// export const initDecks = async (decks) => {
//   return await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
// }

const initDecks = {
  React:      {
    id: 0,
    title:     "React",
    questions: [
      {
        question: "What is React?",
        answer:   "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer:   "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    id: 1,
    title:     "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:   "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
}

export const getDecks = async (initDecks) => {
  return await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({decks: initDecks}))
}

export  const getDeck = async ({key}) => {
  /*
  Take in a single id argument and return the deck associated with that id
   */

}

export const saveDeckTitle = ({title}) => {
  /* take in a sigle title argument and add it to the decks
 */
}


export const addCardToDeck = ({title, cards}) => {
  /*
take two arguments title and card and will add the card to the list deck with the associated title
 */
}
