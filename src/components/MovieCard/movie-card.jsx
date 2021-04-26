import PropTypes from 'prop-types'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './movie-card.scss'

export class MovieCard extends React.Component {
  render () {
    const { movie } = this.props

    return (
      <div className='card-container'>
        <Card className='card-main'>
          <div className='card-item'>
            <Card.Img
              className='card-img'
              variant='top'
              src={movie.ImagePath}
            />
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>{movie.Title}</Card.Title>
              <Card.Text className='card-desc'>{movie.Description}</Card.Text>
            </Card.Body>
            <div className='card-footer'>
              <Link to={`/movies/${movie._id}`}>Open</Link>
            </div>
          </div>
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
