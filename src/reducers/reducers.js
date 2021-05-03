import { combineReducers } from 'redux'
import {
  SET_FILTER,
  SET_MOVIE,
  SET_MOVIES,
  SET_USER,
  SET_GENRE
} from '../actions/actions'

function visibilityFilter (state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value
    default:
      return state
  }
}

function movies (state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value
    default:
      return state
  }
}

function user (state = '', action) {
  switch (action.type) {
    case SET_USER:
      return action.value
    default:
      return state
  }
}

function movie (state = '', action) {
  switch (action.type) {
    case SET_MOVIE:
      return action.value
    default:
      return state
  }
}

function genre (state = '', action) {
  switch (action.type) {
    case SET_GENRE:
      return action.value
    default:
      return state
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  user,
  movie,
  genre
})

export default moviesApp
