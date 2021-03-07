import React from 'react';
import axios from 'axios';

import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();

    this.state = {}
  }
  
  componentDidMount() {
    axios
      .get('https://myflixdbs-z.herokuapp.com/')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

onMovieClick(movie){
  this.setState({selectedMovie: movie})
}

render() { 
    const { movies, selectedMovie } = this.state; 
    if (!movies) return <div className="main-view" />;
      console.log('This is my error message')

    return (

      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} />
          : movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={movie => this.onMovieClick(movie)} />
          ))
        }
      </div>

    );
  }
}