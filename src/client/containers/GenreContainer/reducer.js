import {
  assoc,
  over,
  lensProp,
  lensPath,
  append,
  without,
} from 'ramda'
import types from './actionTypes'

const initialState = {
  artistGenres: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_GENRES:
      return over(
        lensProp('artistGenres'),
        assoc(action.name, action.genres),
        state,
      )

    case types.SELECT_GENRE:
      return over(
        lensPath(['artistGenres', action.name]),
        append(action.genre),
        state,
      )

    case types.DESELECT_GENRE:
      return over(
        lensPath(['artistGenres', action.name]),
        without([action.genre]),
        state,
      )
    default:
      return state
  }
}
