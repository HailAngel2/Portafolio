import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCard from './ImageCard.jsx';

describe('ImageCard component', () => {
  const props = {
    src: 'https://via.placeholder.com/150',
    alt: 'Imagen de prueba',
    title: 'Título de prueba',
    description: 'Descripción de prueba',
    estiloExtra: 'extra-clase'
  };

  it('renderiza la imagen con src y alt correctos', () => {
    render(<ImageCard {...props} />);
    const img = screen.getByAltText('Imagen de prueba');
    expect(img).not.toBeNull();
    expect(img.src).toContain('https://via.placeholder.com/150');
  });

  it('renderiza el título y descripción correctamente', () => {
    render(<ImageCard {...props} />);
    expect(screen.getByText('Título de prueba')).not.toBeNull();
    expect(screen.getByText('Descripción de prueba')).not.toBeNull();
  });

  it('aplica la clase extra pasada por props', () => {
    render(<ImageCard {...props} />);
    const container = screen.getByText('Título de prueba').closest('.image-card');
    expect(container.className).toContain('extra-clase');
  });
});
