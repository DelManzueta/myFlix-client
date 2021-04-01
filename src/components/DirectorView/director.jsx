import './director-view.scss'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'
import React from 'react'

export class DirectorView extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    const { director } = this.props

    if (!director) return null

    return (
      <Container className='director-view'>
        <Card className='director-card'>
          <Card.Img
            className='director-pic'
            variant='top'
            src={director.ImagePath}
          />
          <Card.Body className='director-body'>
            <Card.Title className='director-name'>{director.Name}</Card.Title>
            <Card.Text>{director.Bio}</Card.Text>
            <ListGroup variant='flush'>
              <ListGroup.Item>Born: {director.Birth}</ListGroup.Item>
            </ListGroup>
            <Link to={`/`}>
              <Button className='dirback-button' variant='button' size='lg'>
                Back
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired
  }).isRequired
}
