import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsList from './NewsList.jsx';

describe('NewsList component', () => {
  const noticiasMock = [
    {
      titulo: 'Noticia 1',
      fecha: '2025-10-16',
      contenido: 'Contenido de la noticia 1',
      imagen: 'imagen1.jpg',
    },
    {
      titulo: 'Noticia 2',
      fecha: '2025-10-15',
      contenido: 'Contenido de la noticia 2',
      imagen: 'imagen2.jpg',
    },
  ];

  it('renderiza todas las noticias pasadas por props', () => {
    render(<NewsList noticias={noticiasMock} />);
    
    // Verifica que se rendericen los títulos
    expect(screen.getByText('Noticia 1')).not.toBeNull();
    expect(screen.getByText('Noticia 2')).not.toBeNull();
    
    // Verifica que se rendericen los contenidos
    expect(screen.getByText('Contenido de la noticia 1')).not.toBeNull();
    expect(screen.getByText('Contenido de la noticia 2')).not.toBeNull();
    
    // Verifica que se rendericen las fechas
    expect(screen.getByText('2025-10-16')).not.toBeNull();
    expect(screen.getByText('2025-10-15')).not.toBeNull();
  });

  it('no renderiza nada si el array de noticias está vacío', () => {
    render(<NewsList noticias={[]} />);
    const newsContainer = screen.queryByRole('list'); // si quieres puedes poner role="list" en tu div
    expect(newsContainer).toBeNull();
  });
});
