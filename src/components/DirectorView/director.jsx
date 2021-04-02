import PropTypes from 'prop-types'
import React     from 'react'
import Button    from 'react-bootstrap/Button'
import Card      from 'react-bootstrap/Card'
import { Link }  from 'react-router-dom'
import './director.scss'

export class DirectorView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { director } = this.props

    if (!director) return null

    return (
      <div className='director-view'>
        <Card style={{ width: '30rem' }} className='director-card'>
          <Card.Body>
            <Card.Title className='director-name'>{director.Name}</Card.Title>
            <Card.Text>Birthdate: {director.Birth}</Card.Text>
            <Card.Text>Bio: {director.Bio}</Card.Text>
          </Card.Body>
          <Link to={'/'}>
            <Button variant='secondary' className='director-view-back-button'>
              Back
            </Button>
          </Link>
        </Card>
      </div>
    )
  }
}

DirectorView.propTypes = {
  Director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string
  })
}
