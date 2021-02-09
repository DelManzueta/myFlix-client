import React from 'react';
import { MovieView } from '../MovieView/movieView';

export class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movie, onClick } = this.props;

        return (
            <div className="movie-card-container">
                <span>
                    <button onClick={() => onClick(movie)} className="movie-card-button" />
                </span>
            </div>
        );
    }
}

export default MovieCard