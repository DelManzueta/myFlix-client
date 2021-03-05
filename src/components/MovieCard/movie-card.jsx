import React from 'react';

export class MovieCard extends React.Component {
  render() {
    const { movies, onClick } = this.props;

    return (
      <div onClick={() => onClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}