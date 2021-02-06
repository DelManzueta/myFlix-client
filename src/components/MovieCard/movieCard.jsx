import React from 'react';
import { MovieView } from '../MovieView/movieView';



export class MovieCard extends React.Component {
    render() {
        const { movie, onclick } = this.props;
        return (
            <div>
                <Card style={{ width: '22rem' }} classname="movie-card">
                    <Card.Img variant="top" src={movie.ImagePath} />
                    <Card.Body>
                        <Card.Title>{movie.Title + ' - ' + movie.Released}</Card.Title>
                        <Card.Text>{movie.Description}</Card.Text>
                        <Button onclick={() => onclick(movie)} variant="link" classname="expand-movie">
                            Details
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieCard