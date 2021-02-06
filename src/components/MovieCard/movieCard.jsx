import React from 'react';
import { MovieView } from '../MovieView/movieView';



export class MovieCard extends MovieView {
    render() {
        return (
            <div className="movie-card">
                <MovieView />
            </div>
        );
    }
}

export default MovieCard