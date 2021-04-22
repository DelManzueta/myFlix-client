import PropTypes from 'prop-types'
import React from 'react'
import { Button, Card, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './movie-card.scss'

export class MovieCard extends React.Component {
  render () {
    const { movie } = this.props

    return (
      <Col>
        <Card
          className='movie-card'
          fluid='true'
          style={{ maxWidth: '25rem', minWidth: '25rem' }}
        >
          <Card.Img
            className='movie-poster'
            variant='top'
            src={movie.ImagePath}
          />
          <Card.Body>
            <Card.Title className='movie-title'>{movie.Title}</Card.Title>
            <ListGroup variant='flush'>
              <ListGroup.Item className='button-container'>
                <Link to={`/movies/${movie._id}`}>
                  <Button
                    variant='link'
                    size='lg'
                    block
                    className='open-button'
                  >
                    Details
                  </Button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className='button-container'>
                <Link to={`/directors/${movie.Director.Name}`}>
                  <Button className='director-button' size='lg' block>
                    Director
                  </Button>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className='button-container'>
                <Link to={`/genres/${movie.Genre.Name}`}>
                  <Button className='genre-button' size='lg' block>
                    Genre
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    imageUrl: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired
  }).isRequired
}
