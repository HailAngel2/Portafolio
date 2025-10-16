import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input.jsx';

describe('Input component', () => {
  it('renderiza un input simple por defecto', () => {
    render(<Input value="" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();
    expect(input.type).toBe('text');
  });

  it('renderiza un textarea cuando multiline es true', () => {
    render(<Input value="" onChange={() => {}} multiline={true} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDefined();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('llama a onChange al modificar el valor', () => {
    const handleChange = jasmine.createSpy('handleChange');
    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hola' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
