export const SET_MOVIES = 'SET_MOVIES'
export const SET_FILTER = 'SET_FILTER'
export const SET_USER = 'SET_USER'
export const SET_MOVIE = 'SET_MOVIE'
export const SET_GENRE = 'SET_GENRE'
export const SET_DIRECTOR = 'SET_DIRECTOR'

export function setMovies (value) {
  return {
    type: SET_MOVIES,
    value
  }
}

export function setFilter (value) {
  return {
    type: SET_FILTER,
    value
  }
}

export function setUser (value) {
  return {
    type: SET_USER,
    value
  }
}

export function setMovie (value) {
  return {
    type: SET_MOVIE,
    value
  }
}

export function setGenre(value) {
  return {
    type: SET_GENRE,
    value
  }
}

export function setDirector(value) {
  return {
    type: SET_DIRECTOR,
    value
  }
}