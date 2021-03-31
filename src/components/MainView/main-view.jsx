import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

import { LoginView } from "../LoginView/login-view";
import { RegistrationView } from "../RegistrationView/registration";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { CarouselView } from "../Carousel/carousel";

import "./main-view.scss";

export class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: null,
      selectedMovie: null,
      user: null,
      newUser: null
    };
  }

  getMovies(token) {
    axios.get("https://myflixdbs-z.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({ movies: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  onLoggedIn(user) {
    this.setState({
      user,
    });
  }

  registerUser() {
    this.setState({
      newUser: true,
    })
  }

  userRegistered() {
    this.setState({
      newUser: null,
    })
  }

  logOutHandler() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  render() {
    const { movies, selectedMovie, user } = this.state;

    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    // Before movies have been loaded
    if (!movies) return <div className="main-view" />;

    return (
      <Container className="main-view">
        <CarouselView />
        <div className="main-view-card">
          {selectedMovie ? (
            <MovieView movie={selectedMovie} />
          ) : (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={(movie) => this.onMovieClick(movie)}
              />
            ))
          )}
        </div>
      </Container>
    );
  }
}

MainView.propTypes = {
  movies: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }),
  selectedMovie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }),
};
