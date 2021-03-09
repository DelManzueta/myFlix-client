import React from 'react';
import axios from 'axios';

import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {
      movies: null,
      selectedMovie: null
    }
  }
  
  componentDidMount() {
    axios.get('https://myflixdbs-z.herokuapp.com/movies')
    .then(res => {this.setState({movies: res.data})})
    .catch(function (err) {console.log('Error in mount: ' + err)});
    console.log('Did component mount?');
  }
 
  onMovieClick(movie){
    this.setState({selectedMovie: movie})
  }

render() { 
    const  { movies, selectedMovie } = this.state; 
    if (!movies) return <div className="main-view" />;
      console.log('RENDER BEFORE RETURN')

    return (
      <div className="main-view">
       {selectedMovie
          ? <MovieView movie={selectedMovie}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
          ))
       }
      </div>
    );
  }
} 