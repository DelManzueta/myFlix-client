import './main-view.scss'

import { Col, Row }                       from 'react-bootstrap/'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Button                             from 'react-bootstrap/Button'
import { CarouselView }                   from '../Carousel/carousel'
import Container                          from 'react-bootstrap/Container'
import { LoginView }                      from '../LoginView/login-view'
import { MovieCard }                      from '../MovieCard/movie-card'
import { MovieView }                      from '../MovieView/movie-view'
import PropTypes                          from 'prop-types'
import React                              from 'react'
import { RegistrationView }               from '../RegistrationView/registration'
import axios                              from 'axios'

export class MainView extends React.Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      user: null,
      selectedMovie: null,
      newUser: null
    }
  }

  componentDidMount () {
    let accessToken = localStorage.getItem('token')
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      })
      this.getMovies(accessToken)
    }
  }

  getMovies (token) {
    axios
      .get('https://myflixdbs-z.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({ movies: res.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  onMovieClick (movie) {
    this.setState({
      selectedMovie: movie
    })
  }

  onLoggedIn (authData) {
    console.log(authData)
    this.setState({
      user: authData.user.Username
    })
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', authData.user.Username)
    this.getMovies(authData.token)
  }

  onLogOut () {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.open('/', '_self')
  }

  registerUser () {
    this.setState({
      newUser: true
    })
  }

  userRegistered () {
    this.setState({
      newUser: null
    })
  }

  render () {
    const { movies, selectedMovie, user, newUser } = this.state

    if (!user) {
      if (newUser)
        return (
          <RegistrationView
            userRegistered={() => this.userRegistered()}
            onLoggedIn={user => this.onLoggedIn(user)}
          />
        )
      else
        return (
          <LoginView
            onLoggedIn={user => this.onLoggedIn(user)}
            newUser={() => this.registerUser()}
          />
        )
    }

    if (!movies) return <div className='main-view' />

    return (
      <Router>
        <div className='main-view'>
          <Container className='main-view-container'>
            <Row>
              <Route
                exact
                path='/'
                render={() => {
                  if (!user)
                    return (
                      <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                    )
                  return movies.map(m => <MovieCard key={m._id} movie={m} />)
                }}
              />

              <Route
                path='/movies/:movieId'
                render={({ match }) => (
                  <MovieView
                    movie={movies.find(m => m._id === match.params.movieId)}
                  />
                )}
              />

              <Route
                path='/directors/:name'
                render={({ match }) => {
                  if (!movies) return <div className='main-view' />
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
                path='/genres/:name'
                render={({ match }) => (
                  <GenreView
                    genre={
                      movies.find(m => m.Genre.Name === match.params.name).Genre
                    }
                  />
                )}
              />

              <Route path='/register' render={() => <RegistrationView />} />
            </Row>
          </Container>
        </div>
      </Router>
    )
  }
}

MainView.propTypes = {
  movies: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }),
  selectedMovie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  })
}
