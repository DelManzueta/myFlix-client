<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import './movie-card.scss';
=======
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./movie-card.scss";
>>>>>>> 3.4

export class MovieCard extends React.Component {
  render() {
    const { movie, onClick } = this.props;

    return (
<<<<<<< HEAD
      <Container className="card-container">
        <Card className="movie-card">
          <Card.Img className="movie-poster" variant="top" src={movie.ImagePath} />
          <Card.Body>
            <Card.Title className="movie-title">{movie.Title}</Card.Title>
            <Card.Text className="movie-description">{movie.Description}</Card.Text>
            <Button onClick={() => onClick(movie)} variant="primary" size="lg" block className="open-button">Open</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};
=======
      <Card className="movie-card">
        <Card.Header className="card-header">
          {movie.Title} 
        </Card.Header>

        <Card.Img className="card-img" variant="top" src="https://dummyimage.com/720x250/CA3C25" />

        <Card.Body>
          <Card.Title>{movie.Description}</Card.Title>

          <Button
            className="sub-links"
            onClick={() => onClick(movie)}
            variant="link"
          >
            Genre
          </Button>
          <Button
            className="sub-links"
            onClick={() => onClick(movie)}
            variant="link"
          >
            Director
          </Button> 
          <Button
            className="sub-links"
            onClick={() => onClick(movie)}
            variant="link"
          >
            Back to Your Profile
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
>>>>>>> 3.4
