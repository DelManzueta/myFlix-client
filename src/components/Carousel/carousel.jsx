import React from 'react'
import { Carousel } from 'react-bootstrap'


export class CarouselView extends React.Component {
  render () {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className='well-lock'
            src='https://dummyimage.com/2160x350/dd2a33'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='well-lock'
            src='https://dummyimage.com/2160x350/CA3C25'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='well-lock'
            src='https://dummyimage.com/2160x350/7FB069'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
