import React from 'react';
import { MovieView } from 'react';

export class MovieCard extends React.Component {
    render() {
        const { movie, onClick } = this.props;

        return (
            <div onClick={() => onClick(movie)} className="movie-card">
                <MovieView />
            </div>
        );
    }
}

export default MovieCard