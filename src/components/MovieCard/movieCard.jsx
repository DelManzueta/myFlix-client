import React from 'react';

export class MovieCard extends React.Component {
    render() {
        const { movies } = this.props;

        return (
            <div className="movie-card">
                {movie.Title}
            </div>
        )
    }
}

export default MovieCard