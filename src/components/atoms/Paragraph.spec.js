import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph.jsx';

describe('Paragraph component', () => {
  it('muestra el texto pasado por props', () => {
    const testText = 'Hola mundo';
    render(<Paragraph text={testText} />);
    const paragraph = screen.getByText(testText);
    expect(paragraph).not.toBeNull(); // se asegura que el texto se renderizó
    expect(paragraph.tagName).toBe('P'); // opcional: que sea un <p>
  });
});
