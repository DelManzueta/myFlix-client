import React from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-bootstrap'
import './carousel.scss'

export class CarouselView extends React.Component {
  render () {

    const{movie} = this.props;
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className='well-lock'
            src={movie.ImagePath}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>{movie.Title}</h3>
            <p>{movie.Description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

CarouselView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired
}
