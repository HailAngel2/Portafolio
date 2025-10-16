import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import './Carousel.css';

const Carousel = ({ slides = [] }) => {
  return (
    <BootstrapCarousel>
      {slides.map((slide, index) => (
        <BootstrapCarousel.Item key={index}>
          <img className="d-block w-100" src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
          <BootstrapCarousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Carousel;