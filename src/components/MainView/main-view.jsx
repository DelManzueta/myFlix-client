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

 

  
  componentDidMount() {
    axios.get('https://myflixdbs-z.herokuapp.com/')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }





  render() {

    const { movies } = this.state;

    if (!movies) {
      return (
        <div className="main-view">
          No Movies
        </div>
      );
    }

    return (
      <div className="main-view">
        <MovieCard/>
      </div>
    );
  }
} 