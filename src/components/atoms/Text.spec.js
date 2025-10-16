import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text.jsx';

describe('Text component', () => {
  it('renderiza correctamente el texto pasado como children', () => {
    render(<Text>Hola Mundo</Text>);
    const paragraph = screen.getByText('Hola Mundo');
    expect(paragraph).not.toBeNull();
    expect(paragraph.tagName).toBe('P');
  });
});
