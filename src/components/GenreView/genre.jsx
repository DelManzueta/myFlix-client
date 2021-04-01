import './genre-view.scss'

import Button    from 'react-bootstrap/Button'
import Card      from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link }  from 'react-router-dom'
import PropTypes from 'prop-types'
import React     from 'react'

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
            <h1 className='genre-name'>{genre.Name}</h1>
            <Card.Text>{genre.Description}</Card.Text>
            <Link to={`/`}>
              <Button className='genback-button' size='lg'>
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
