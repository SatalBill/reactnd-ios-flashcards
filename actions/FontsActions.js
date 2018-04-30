import { LOAD_FONTS } from "./types"

export const loadFonts = () => {
  return (dispatch) => {
    dispatch({type: LOAD_FONTS})
  }
}
