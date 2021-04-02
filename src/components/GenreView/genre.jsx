import PropTypes from 'prop-types'
import React     from 'react'
import Button    from 'react-bootstrap/Button'
import Card      from 'react-bootstrap/Card'
import { Link }  from 'react-router-dom'
import './genre.scss'

export class GenreView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { genre } = this.props

    if (!genre) return null

    return (
      <div className='genre-view'>
        <Card style={{ width: '30rem' }} className='genre-card'>
          <Card.Body>
            <Card.Title className='genre-name'>{genre.Name}</Card.Title>
            <Card.Text>{genre.Description}</Card.Text>
          </Card.Body>
          <Link to={'/'}>
            <Button variant='secondary' className='genre-view-back-button'>
              Back
            </Button>
          </Link>
        </Card>
      </div>
    )
  }
}

GenreView.propTypes = {
  Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  })
}
