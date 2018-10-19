import types from './actionTypes'

export const setSelectedGenres = (name, genres) => ({
  type: types.SET_SELECTED_GENRES,
  name,
  genres,
})

export const selectGenre = (name, genre) => ({
  type: types.SELECT_GENRE,
  genre,
  name,
})

export const deselectGenre = (name, genre) => ({
  type: types.DESELECT_GENRE,
  genre,
  name,
})
