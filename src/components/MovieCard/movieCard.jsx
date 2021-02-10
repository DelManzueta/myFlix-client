import React from 'react';

export class MovieCard extends React.Component {
    render() {
        const { movie, onClick } = this.props;

        return (
            <Card style={{ width: '22rem' }} className="movie-card">
                <Card.Img variant="top" src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title + ' - ' + movie.Released}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>

                    <Button onClick={() => onClick(movie)} variant="link" className="expand-movie">
                        Details
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default MovieCard