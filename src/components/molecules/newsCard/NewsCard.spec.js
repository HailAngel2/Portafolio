import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard.jsx';

describe('NewsCard component', () => {
  const props = {
    titulo: 'Noticia de prueba',
    fecha: '2025-10-16',
    contenido: 'Contenido de prueba',
    imagen: 'https://via.placeholder.com/150'
  };

  it('renderiza título, contenido y fecha', () => {
    render(<NewsCard {...props} />);
    expect(screen.getByText(props.titulo)).not.toBeNull();
    expect(screen.getByText(props.contenido)).not.toBeNull();
    expect(screen.getByText(props.fecha)).not.toBeNull();
  });

  it('renderiza la imagen cuando se pasa la prop imagen', () => {
    render(<NewsCard {...props} />);
    const img = screen.getByAltText(props.titulo);
    expect(img).not.toBeNull();
    expect(img.src).toContain(props.imagen);
  });

  it('no renderiza imagen si no se pasa la prop imagen', () => {
    const { queryByRole } = render(<NewsCard titulo="T" contenido="C" fecha="F" />);
    expect(queryByRole('img')).toBeNull();
  });
});
