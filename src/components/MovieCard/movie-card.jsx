import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./movie-card.scss";

export class MovieCard extends React.Component {
  render() {
    const { movie, onClick } = this.props;

    return (
      <Card className="movie-card">
        <Card.Header className="card-header">
          {movie.Title} 
        </Card.Header>

        <Card.Img className="card-img" variant="top" src="https://dummyimage.com/720x250/CA3C25" />

        <Card.Body>
          <Card.Title>{movie.Description}</Card.Title>
          <Card.Text className="Card-Text">{movie.Description}</Card.Text>
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
