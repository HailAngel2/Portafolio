import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title.jsx';

describe('Title component', () => {
  it('renderiza el título correctamente', () => {
    render(<Title title="Mi Título" />);
    const heading = screen.getByText('Mi Título');
    expect(heading).not.toBeNull();
    expect(heading.tagName).toBe('H2');
  });

  it('aplica el estilo gradient cuando se pasa style="gradient"', () => {
    render(<Title title="Gradient Título" style="gradient" />);
    const heading = screen.getByText('Gradient Título');
    expect(heading.className).toContain('bg-gradient-to-r');
  });

  it('usa estilo por defecto cuando style está vacío', () => {
    render(<Title title="Default Título" />);
    const heading = screen.getByText('Default Título');
    expect(heading.className).toContain('text-lg');
    expect(heading.className).not.toContain('bg-gradient-to-r');
  });
});
