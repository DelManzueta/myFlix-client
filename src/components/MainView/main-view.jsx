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
        this.setState({movies: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount(){
    axios
      .get(`https://myflixdbs-z.herokuapp.com`)
        .then(res = res.json()
          .then(movies =>{
            console.log(movies);
              this.setState({movies: movies.data})
          }))
  }

onMovieClick(movie){
  this.setState({selectedMovie: movies})
}

render() { 
    const { movies, selectedMovie } = this.state; 
    if (!movies) return <div className="main-view" />;
      console.log('RENDER BEFORE RETURN')

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