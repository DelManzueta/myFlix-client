import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
<<<<<<< HEAD


import { LoginView } from '../LoginView/login-view'; 
=======


import { LoginView } from '../LoginView/login-view';
import { RegistrationView } from "../RegistrationView/registration";
>>>>>>> 3.4
import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';
import { CarouselView } from '../Carousel/carousel'

<<<<<<< HEAD
=======
import './main-view.scss'

>>>>>>> 3.4
export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructrue it later
    this.state = {
      movies: null,
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount() {
    axios.get('https://myflixdbs-z.herokuapp.com/movies')
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  // this overrides the render() method of the superclass
  render() {

    // Before data is initially loaded
    const { movies, selectedMovie, user } = this.state;

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before movies have been loaded
    if (!movies) return <div className="main-view" />;

    return (
      <Container className="main-view">
<<<<<<< HEAD
=======
       
      <CarouselView></CarouselView>
        <div className="main-view-card">
>>>>>>> 3.4
        {selectedMovie
          ? <MovieView movie={selectedMovie} />
          : movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={movie => this.onMovieClick(movie)} />
          ))
        }
<<<<<<< HEAD
=======
        </div>
    
>>>>>>> 3.4
      </Container>
    );
  }
}