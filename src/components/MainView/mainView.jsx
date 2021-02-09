import React from 'react';
import axios from 'axios';
import { MovieCard } from '../MovieCard/movieCard';
import { MovieView } from '../MovieView/movieView';

export class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            selectedMovie: null
        };
    }
    componentDidMount() {
        axios.get('https://myflixdbs-z.herokuapp.com/').then(res => {
            this.setState({ movies: res.data });
        })
            .catch(function (err) {
                console.log(err);
            });
    }
    onButtonClick() {
        axios.get('https://myflixdbs-z.herokuapp.com/').then(res => {
            this.setState({ movies: res.data });
        })
            .catch(function (error) {
                console.log(error);
            });
        3
    }

    render() {
        const { movies, selectedMovie } = this.state;
        if (!movies) return <div className="mainView" />
        return (
            <div className="mainView">
                { movies.map(movie => (
                    <div className="movie-card" key={movie._id}>
                        {movie.Title}
                    </div>
                ))}
            </div>
        );
    }
}

export default MainView
