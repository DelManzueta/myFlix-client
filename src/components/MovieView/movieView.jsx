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
            <div className="movieView">
                <span><img src={movie.ImagePath} /></span>
                <section className="movieTitle">
                    <h2>Title: </h2>
                    <h4>{movie.title}</h4>
                </section>

                <section className="movieDesc">
                    <h3>Description: </h3>
                    <p>{movie.description}</p>
                </section>

                <section className="movieGenre">
                    <h4>Genre: </h4>
                    <p>{movie.genre.name}</p>
                </section>

                <section className="directors">
                    <h4>Directed by: </h4>
                    <p>{movie.directors.name}</p>
                </section>

                <button>See Movies</button>
            </div>
        )
    }
}



export default MovieView