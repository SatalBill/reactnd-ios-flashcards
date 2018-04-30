import { LOAD_FONTS } from "./types"

export const loadFonts = () => {
  return (dispatch) => {
    dispatch({type: DECKS_AVAILABLE, list: JSON.parse(decks)})
  }
}
