import axios from 'axios'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProfileView } from '../ProfileView/profile-view'
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
      <Navbar collapseOnSelect expand='lg' variant='dark' sticky='top'>
        <Navbar.Brand className='nav-brand' as={Link} to={`/`}>
          myFlix Movies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to={`/users/{user}`} className="usr-nav">
              {Username}'s Account 
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              eventKey={2}
              className='log-out'
              onClick={() => this.onLoggedOut()}
            >
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
