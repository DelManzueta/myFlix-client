import PropTypes from 'prop-types'
import React     from 'react'
import Button    from 'react-bootstrap/Button'
import Card      from 'react-bootstrap/Card'
import Col       from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import { Link }  from 'react-router-dom'
import './movie-card.scss'

export class MovieCard extends React.Component {
  render () {
    const { movie } = this.props

    return (
      <Container className='movie-card-container'>
        <Row>
          <Col>
            <Card className='Card'>
              <Card.Img variant='top' src={movie.ImagePath} />
              <Card.Body>
                <Card.Title className='Card-Title'>{movie.Title}</Card.Title>
                <Card.Text className='Card-Text'>{movie.Description}</Card.Text>
                <Link to={`/movies/${movie._id}`}>
                  <Button className='button-open'>Open</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
