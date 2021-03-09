import React from 'react';

import {MainVew} from '../MainView/main-view';
import {MovieCard} from '../MovieCard/movie-card'


export class MovieView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { movie, onClick } = this.props;

        if (!movie) return null;

        return (
            <div className="movie-view">
                <img className="movie-poster" src={movie.ImageURL} />
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title} </span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description} </span>
                </div>
                <div className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.Genre.Name} </span>
                </div>
                <div className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.Director.Name} </span>
                </div>
                <button className="back-button" onClick={() => onClick()}> Back to Main Menu </button>
            </div>

        )
    }
}