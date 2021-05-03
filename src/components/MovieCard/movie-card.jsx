import PropTypes from 'prop-types'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './movie-card.scss'

export class MovieCard extends React.Component {
  render () {
    const { movie } = this.props

    return (
      <div className='card-container'>
        <Card className='card-main'>
          <Link to={`/movies/${movie._id}`}>
            <Card.Img
              className='card-img'
              variant='top'
              src={movie.ImagePath}
            />
          </Link>
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Description}</Card.Text>
            <Link to={`/movies/${movie._id}`}>Details</Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired
}
