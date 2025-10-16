import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Boton from './Boton.jsx';

describe('Boton component', () => {
  it('renderiza correctamente el texto del botón', () => {
    render(<Boton texto="Click Aquí" />);
    expect(screen.getByText('Click Aquí')).toBeDefined();
  });

  it('llama a la función onClick al hacer click', () => {
    const handleClick = jasmine.createSpy('handleClick');
    render(<Boton texto="Presiona" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Presiona'));
    expect(handleClick).toHaveBeenCalled();
  });
});
