import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class Navigation extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    let accessToken = localStorage.getItem('token')
    let user = localStorage.getItem('user')
  }

  onLoggedIn (authData) {
    this.props.setUser(authData.user.Username)
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', authData.user.Username)
    this.getMovies(authData.token)
  }

  onLoggedOut (user) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.open('/client', '_self')
  }
  render () {
    return (
      <Navbar bg='dark' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Navbar.Brand as={Link} to='/'>
            myFlix Movies
          </Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={`/users/{user}`}>
              Profile
            </Nav.Link> 
            <Button size='sm' onClick={() => this.onLoggedOut()}>
              <b>Log Out</b>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
