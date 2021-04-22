import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { MovieCard } from '../MovieCard/movie-card'
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input'
import './movies-list.scss'

const mapStateToProps = state => {
  const { visibilityFilter } = state
  return { visibilityFilter }
}

function MoviesList (props) {
  const { movies, visibilityFilter } = props
  let filteredMovies = movies

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    )
  }

  if (!movies) return <Container className='main-view' />

  return (
    <Row className='movies-list'>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      {filteredMovies.map(m => (
        <MovieCard key={m._id} movie={m} />
      ))}
    </Row>
  )
}

export default connect(mapStateToProps)(MoviesList)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired
    })
  ),
  visibilityFilter: PropTypes.string.isRequired
}