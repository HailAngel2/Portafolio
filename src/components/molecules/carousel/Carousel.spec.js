import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel.jsx';

describe('Carousel component', () => {
  const slides = [
    { image: 'https://via.placeholder.com/300', alt: 'Slide 1', title: 'Título 1', description: 'Descripción 1' },
    { image: 'https://via.placeholder.com/300', alt: 'Slide 2', title: 'Título 2', description: 'Descripción 2' }
  ];

  it('renderiza todas las imágenes del carousel', () => {
    render(<Carousel slides={slides} />);
    slides.forEach(slide => {
      const img = screen.getByAltText(slide.alt);
      expect(img).not.toBeNull();
      expect(img.src).toContain(slide.image);
    });
  });

  it('muestra los títulos y descripciones de cada slide', () => {
    render(<Carousel slides={slides} />);
    slides.forEach(slide => {
      expect(screen.getByText(slide.title)).not.toBeNull();
      expect(screen.getByText(slide.description)).not.toBeNull();
    });
  });

  it('asigna alt por defecto si no se pasa', () => {
    const slidesSinAlt = [{ image: 'https://via.placeholder.com/300', title: 'Título', description: 'Desc' }];
    render(<Carousel slides={slidesSinAlt} />);
    expect(screen.getByAltText('Slide 1')).not.toBeNull();
  });
});
