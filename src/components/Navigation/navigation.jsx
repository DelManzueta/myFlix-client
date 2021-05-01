import axios from 'axios'
import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navigation.scss'

export class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Username: null
    }
  }

  componentDidMount () {
    let accessToken = localStorage.getItem('token')
    console.log(accessToken)
    if (accessToken !== null) {
      this.getUser(accessToken)
    }
  }

  getUser (token) {
    let username = localStorage.getItem('user')
    axios
      .get(`https://myflixdbs-z.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies
        })
      })
      .catch(function (error) {
        console.log(error)
      })
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
    const { Username } = this.state

    return (
      <Navbar bg='primary' sticky='top' expand='lg'>
        <Navbar.Brand href='#home'>myFlix Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Navbar.Text>
              Signed in as:
              <Link className='usr-link' as={Link} to={`/users/{user}`}>
                {Username}
              </Link>
            </Navbar.Text>
            <Button
              className='nav-btn'
              size='sm'
              onClick={() => this.onLoggedOut()}
            >
              <b>Log Out</b>
            </Button>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
