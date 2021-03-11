import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

// The movie info that is accessed via the click
export class MovieView extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { movie } = this.props;
  
    if (!movie) return null;

    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie
          ? (
            <Col md={8}>
              <MovieView movie={selectedMovie} onBackClick={movie => this.onMovieClick(null)} />
            </Col>
          )
          : movies.map(movie => (
            <Col md={3}>
              <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
            </Col>
          ))
        }
      </Row>
    );

  }
}