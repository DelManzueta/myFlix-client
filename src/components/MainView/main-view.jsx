import React                              from 'react'
import axios                              from 'axios'
import PropTypes                          from 'prop-types'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Container                          from 'react-bootstrap/Container';
import {Row, Col}                         from 'react-bootstrap/';
import Button                             from 'react-bootstrap/Button';

import { LoginView }                      from '../LoginView/login-view'
import { RegistrationView }               from '../RegistrationView/registration'
import { MovieCard }                      from '../MovieCard/movie-card'
import { MovieView }                      from '../MovieView/movie-view'
import { CarouselView }                   from '../Carousel/carousel'

import './main-view.scss'

export class MainView extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      user: null
    }
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token')
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      })
      this.getMovies(accessToken)
    }
  }

  getMovies(token) {
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

  onLoggedIn(authData) {
    console.log(authData)
    this.setState({
      user: authData.user.Username
    })
    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', authData.user.Username)
    this.getMovies(authData.token)
  }

  onLogOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.open('/', '_self')
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    })
  }

  onLoggedIn(user) {
    this.setState({
      user
    })
  }

  registerUser() {
    this.setState({
      newUser: true
    })
  }

  userRegistered() {
    this.setState({
      newUser: null
    })
  }

  logOutHandler() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  render() {
    const { movies, selectedMovie, user } = this.state

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />

    if (!movies) return <div className='main-view' />

    return (
      <Router>
        <div className='main-view'>
          
        <Row>
            <Route exact patch="/" render={() => {
              if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
                return movies.map(m => 
                <Col key={m._id} className="justify-content-around">
                  <MovieCard key={m._id} movie={m} />
                </Col>
                )
            }}/>
            </Row>

          <Route path='/register' render={() => <RegistrationView />} />
          {/* you keep the rest routes here */}{' '}
          <Route
            path='/movies/:movieId'
            render={({ match }) => (
              <MovieView
                movie={movies.find(m => m._id === match.params.movieId)}
              />
            )}
          />
          <Route exact path='/genres/:name' render={/* genre view*/} />
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
