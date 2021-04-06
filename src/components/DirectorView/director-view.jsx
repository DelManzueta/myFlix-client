import React     from 'react'
import Button    from 'react-bootstrap/Button'
import Card      from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import { Link }  from 'react-router-dom'
import './director-view.scss'

export class DirectorView extends React.Component {
  constructor (props) {
    super()

    this.state = {}
  }

  render () {
    const { director, movies } = this.props

    if (!director) return null

    return (
      <div className='director-view'>
        <Container className='director-view-container'>
          <CardGroup>
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title> {director.Director.Name} </Card.Title>
                <Card.Text> Bio: {director.Director.Bio} </Card.Text>
                <Card.Text> Birthday: {director.Director.Birth} </Card.Text>
                <Card.Text> Death: {director.Director.Death} </Card.Text>

                <Link to={`/`}>
                  <Button className='button-director'>Back</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>Directed Movies:</Card.Title>
                {movies.map(movie => {
                  if (movie.Director.Name === director.Director.Name) {
                    return (
                      <div key={movie._id}>
                        <Link to={`movies/${movie._id}`}>
                          <Button variant='link' className='button-movies'>
                            {movie.Title}
                          </Button>
                        </Link>
                      </div>
                    )
                  }
                })}
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    )
  }
}
