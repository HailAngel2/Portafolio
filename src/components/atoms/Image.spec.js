import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from './Image.jsx';

describe('Image component', () => {
  it('renderiza una imagen cuando recibe src', () => {
    const testSrc = 'https://via.placeholder.com/150';
    const testAlt = 'Imagen de prueba';
    render(<Image src={testSrc} alt={testAlt} />);
    const img = screen.getByAltText(testAlt);
    expect(img).toBeDefined();
    expect(img.src).toContain(testSrc);
  });

  it('no renderiza nada cuando no recibe src', () => {
    const { container } = render(<Image />);
    expect(container.firstChild).toBeNull();
  });
});
