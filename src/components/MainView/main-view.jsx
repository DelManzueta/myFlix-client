import axios from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { setMovies, setUser } from '../../actions/actions'
import { DirectorView } from '../DirectorView/director-view'
import { GenreView } from '../GenreView/genre-view'
import { LoginView } from '../LoginView/login-view'
import MoviesList from '../MoviesList/movies-list'
import { MovieView } from '../MovieView/movie-view'
import { ProfileView } from '../ProfileView/profile-view'
import { RegistrationView } from '../RegistrationView/registration'
import './main-view.scss'

export class MainView extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    let accessToken = localStorage.getItem('token')
    let user = localStorage.getItem('user')
    if (accessToken !== null) {
      this.props.setUser(user)
      this.getMovies(accessToken)
    }
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
    this.props.setUser(!user)
    window.open('/client', '_self')
  }

  getMovies (token) {
    axios
      .get('https://myflixdbs-z.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        this.props.setMovies(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    let { movies, user } = this.props
    if (!movies) return <Container className='main-view' fluid='true' />

    return (
      <Router basename='/client'>
        <Container className='main-view' fluid='true'>
          <Navbar expand='lg'>
            <Navbar.Brand as={Link} to='/'>
              myFlix Movies
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={`/users/${user}`}>
                  Profile
                </Nav.Link>
                <Button size='sm' onClick={() => this.onLoggedOut()}>
                  <b>Log Out</b>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br></br>
          <Route
            exact
            path='/'
            render={() => {
              if (!user)
                return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              return <MoviesList movies={movies} />
            }}
          />
          <Route path='/register' render={() => <RegistrationView />} />
          <Route
            path='/movies/:movieId'
            render={({ match }) => (
              <MovieView
                movie={movies.find(m => m._id === match.params.movieId)}
              />
            )}
          />
          <Route
            path='/genres/:name'
            render={({ match }) => {
              if (movies.length === 0)
                return <Container className='main-view' />
              return (
                <GenreView
                  genre={
                    movies.find(m => m.Genre.Name === match.params.name).Genre
                  }
                />
              )
            }}
          />
          <Route
            path='/directors/:name'
            render={({ match }) => {
              if (movies.length === 0)
                return <Container className='main-view' />
              return (
                <DirectorView
                  director={
                    movies.find(m => m.Director.Name === match.params.name)
                      .Director
                  }
                />
              )
            }}
          />
          <Route
            path='/users/:username'
            render={() => {
              if (!user)
                return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              if (movies.length === 0)
                return <Container className='main-view' />
              return <ProfileView movies={movies} />
            }}
          />
        </Container>
      </Router>
    )
  }
}

let mapStateToProps = state => {
  return { movies: state.movies, user: state.user }
}

export default connect(mapStateToProps, { setMovies, setUser })(MainView)

MainView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired
      }),
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.string.isRequired,
        Death: PropTypes.string.isRequired
      }),
      ImagePath: PropTypes.string.isRequired,
      Featured: PropTypes.bool.isRequired
    })
  ),
  user: PropTypes.string.isRequired
}
