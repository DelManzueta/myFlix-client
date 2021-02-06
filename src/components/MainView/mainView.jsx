import React from 'react';
import axios from 'axios';
import { MovieCard } from '../MovieCard/movieCard';
import { MovieView } from '../MovieView/movieView';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: null,
            selectedMovie: null
        };
    }
    componentDidMount() {
        axios.get('https://myflixdbs-z.herokuapp.com/movies').then(res => {
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

    onButtonClick() {
        axios.get('https://myflixdbs-z.herokuapp.com/movies/').then(response => {
            this.setState({
                movies: response.data
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { movies, selectedMovie } = this.state;
        if (!movies) return <div className="mainView" />
        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)} />
                            ? <MovieView BackButton={Button} />
                            : <Return onClick={Button => this.onButtonClick()} />
                    ))
                }
            </div>
        )
    }
}

export default MainView