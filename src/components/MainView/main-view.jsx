import React from 'react';
import axios from 'axios';

import { MovieCard } from '../MovieCard/movie-card';
import { MovieView } from '../MovieView/movie-view';

export class MainView extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the state to an empty object so we can destructrue it later
    this.state = {}
  }

/*
  componentDidMount() {
    axios.get(`https://myflixdbs-z.herokuapp.com/`)
      .then((response) => { 
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
*/
  componentDidMount() {
    axios.get(`https://myflixdbs-z.herokuapp.com`)
      .then((res) =>{
        const movies = res.data;
        this.setState({movies});
      })
      
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

 /*  setInititalState() {
    this.setState({
      selectedMovie: null,
    });
  }

*/

  // this overrides the render() method of the superclass
  render() {

    // Before data is initially loaded
    const { movies, selectedMovie } = this.state

    // Before movies have been loaded
    if (!movies) return <div className="main-view" />;

    return (

       <section>
         <MovieCard />
       </section>
    /* <div className='main-view'>
        {selectedMovie ? (
          <MovieView movie={selectedMovie} onClick={() => this.setInititalState()} />
        ) : (movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} onClick={(movie) => this.onMovieClick(movie)} />
        ))
          )}
      </div>
  */
    );
  }
}