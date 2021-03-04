import React from 'react';
import axios from 'axios';

import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructrue it later
    this.state = {
      movies: null,
      selectedMovie: null
    };
  }


  componentDidMount() {
    axios.get('https://myflixdbs-z.herokuapp.com')
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  returnHome() {
    this.setState({
      selectedMovie: null
    });
  }


  render() {
    const { movies, selectedMovie } = this.state;

    if (!movies) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onClick={() => this.returnHome()} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)} />
          ))}
      </div>
    );
  }
}
