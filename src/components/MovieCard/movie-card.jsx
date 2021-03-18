import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container,
  Card,
  Button,
  Col,
  Row
} from 'react-bootstrap'; 

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const {movie} = this.props;

    return (
      <div className="card-div">
        <Container className="card-container">
          <Card className="movie-card">
            <Card.Img className="movie-poster" variant="top" src={movie.ImagePath} />
            <Card.Body>
              <Card.Title className="movie-title">{movie.Title}</Card.Title>
              <Card.Text className="movie-description">{movie.Description}</Card.Text>
              <Link to={`/movies/${movie._id}`}>
                <Button variant="link" size="lg" block className="open-button">Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </Container >
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired,
};