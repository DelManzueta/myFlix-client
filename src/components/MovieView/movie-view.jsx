import './movie-view.scss'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

export class MovieView extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    const { movie } = this.props

    if (!movie) return null

    return (
      <Container className='movie-view-container'>
        <Row>
          <Col>
            <div className='movie-view'>
              <img className='movie-poster' src={movie.ImagePath} />
              <div className='movie-title'>
                <span className='label'>Title: </span>
                <span className='value'>{movie.Title}</span>
              </div>
              <div className='movie-description'>
                <span className='label'>Description: </span>
                <span className='value'> {movie.Description}</span>
              </div>

              <div className='movie-genre'>
                <Link to={`/genres/${movie.Genre.Name}`}>
                  <Button variant='link'>Genre</Button>
                </Link>
              </div>
              <div className='movie-director'>
                <Link to={`/directors/${movie.Director.Name}`}>
                  <Button variant='link'>Director</Button>
                </Link>
              </div>
              <Link to={`/`}>
                <Button className=' button-goBack'>Back</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.date,
      Death: PropTypes.date
    }),
    ImagePath: PropTypes.string.isRequired
  }).isRequired
}
