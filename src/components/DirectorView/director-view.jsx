import React     from 'react'
import Button    from 'react-bootstrap/Button'
import Card      from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link }  from 'react-router-dom'
import './director-view.scss'



export class DirectorView extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    const { director } = this.props

    if (!director) return null

    return (
      <div className='director-view'>
        <Container className='director-view-container'>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title> {director.Name} </Card.Title>
              <Card.Text> Bio: {director.Bio} </Card.Text>
              <Card.Text> Birthday: {director.Birth} </Card.Text>
              <Card.Text> Death: {director.Death} </Card.Text>

              <Link to={`/`}>
                <Button className='button-director'>Back</Button>
              </Link>
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}
