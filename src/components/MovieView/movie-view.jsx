import React from 'react';
import { MainView } from '../MainView/main-view';


export class MovieView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { movie, onClick, button } = this.props;

        if (!movie) return null;

        return (
            <div className="movie-view">
                <img src="{movie.ImagePath" className="movie-poster" />

                <section className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </section>

                <section className="movie-description">
                    <span className="label"></span>
                    <span className="value"></span>
                </section>

                <section className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.Genre.Name}</span>
                </section>

                <section className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.Director.Name}</span>
                </section>
                <button onClick={() => this.setState(<MainView />)}>Go Back</button>
            </div>
        )
    }
}