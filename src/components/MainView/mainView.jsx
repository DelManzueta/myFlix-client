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

    // react component hook
    componentDidMount() {
        axios.get('https://myflixdbs-z.herokuapp.com/Movies').then(res => {
            this.setState({ movies: res.data });
        }).catch(function (error) { console.log(error) })
    }

    onMovieClick(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    render() {
        const { movies } = this.state;

        if (!movies) return <div className="main-view" />;

        return (
            <div className="main-view">
                {
                    movies.map(movie => (
                        <section className="movie-card" key={movie.__id}>
                            {movie.Title}
                        </section>
                    ))
                }
            </div>
        );
    }
}

export default MainView