import React from 'react';
import axios from 'axios';


export class MovieView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { movie } = this.props;
        if (!movie) return null;

        return (
            <div className="movieView-container">
                <section className="movie-title">
                    <span><img src={movie.ImagePath} /></span>
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </section>
                <section className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </section>
                <section className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.Genre.Name}</span>
                </section>
                <section className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.Director.Name}</span>
                </section>
                <section className="movie-button">
                    <button>Click Here</button>
                </section>
            </div >
        )
    }
}

export default MovieView