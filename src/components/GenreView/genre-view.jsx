import PropTypes from 'prop-types'
import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './genre-view.scss'

export class GenreView extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    const { genre } = this.props

    if (!genre) return null

    return (
      <Container className='genre-view'>
        <Card className='genre-card'>
          <Card.Body>
            <Card.Title className='genre-name'>{genre.Name}</Card.Title>
            <Card.Text>Description: {genre.Description}</Card.Text>
            <Link to={`/`}>
              <Button className='gen-button' size='lg'>
                Back
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired
}
