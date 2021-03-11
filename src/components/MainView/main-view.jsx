import React from 'react';
import axios from 'axios';

import { LoginView } from '../LoginView/login-view';
import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';

import Row from 'react-bootstrap/Row';

export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      movies: null,
      selectedMovie: null,
      user: null
    }
  }
  
  componentDidMount() {
    axios.get('https://myflixdbs-z.herokuapp.com/movies')
    .then(res => {this.setState({movies: res.data})})
    .catch(function (err) {console.log('Mounting ' + err)});
  }
 
  onMovieClick(movie){
    this.setState({selectedMovie: movie})
  }

  onLoggedIn(user){
    this.setState({user})
  }

render() { 
    const  { movies, selectedMovie, user } = this.state;
    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />; 
    if (!movies) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie
          ? (
            <Row>
              <MovieView movie={selectedMovie} onBackClick={movie => this.onMovieClick(null)}/>
            </Row>
          )
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
          ))
        }
      </div>
    );
  }
} 