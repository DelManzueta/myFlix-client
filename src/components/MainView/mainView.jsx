import React from 'react';
import { MovieCard } from '../MovieCard/movieCard';
import { MovieView } from '../MovieView/movieView';
import axios from 'axios';

export class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            selectedMovie: null
        };
    }
    componentDidMount() {
        axios.get('https://').then(res => {
            this.setState({ movies: res.data })
        }).catch(function (err) {
            console.log(err);
        });
    }
    onMovieClick(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    render() {
        const {
            movies,
            selectedMovie
        } = this.state;
        if (!movies) return <div className="mainView" />
        return (
            <div className="main-container">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} /> : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)} />
                    ))
                }
            </div>
        )
    }
}