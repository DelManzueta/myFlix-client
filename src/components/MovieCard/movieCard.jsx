import React from 'react';
import MovieView from '../MovieView/movieView';


export class MovieCard extends React.Component {
    render() {
        const { movie, click } = this.props;

        return (
            <div onClick={() => onClick(movie)} className="movieCard">{movie.title}</div>
        )
    }
}