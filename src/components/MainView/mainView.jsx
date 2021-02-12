import React from 'react';
import axios from 'axios';

import { MovieCard } from '../MovieCard/movieCard';
import { MovieView } from '../MovieView/movieView';

export class MainView extends React.Component {
    constructor() {
        super();

        // Initialize the state to an empty object so we can destructrue it later
        this.state = {
            movies: null,
            selectedMovie: null
        };
    }

    /* 
    componentDidMount() {
        axios.get('https://myflixdbs-z.herokuapp.com/')
            .then(res => {
                console.log(res);
                this.setState({ movies: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
*/
    onMovieClick(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (!movies) return <div className="main-view" />;

        return (
            <div className="main-view">
                <MovieView />
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

export default MainView