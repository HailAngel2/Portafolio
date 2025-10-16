import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario from './Formulario.jsx';

describe('Formulario component', () => {

  it('muestra errores cuando se envía vacío', () => {
    render(<Formulario />);
    const boton = screen.getByText('Enviar');
    fireEvent.click(boton);

    expect(screen.getByText('El nombre es obligatorio.')).not.toBeNull();
    expect(screen.getByText('El email es obligatorio.')).not.toBeNull();
    expect(screen.getByText('El mensaje no puede estar vacío.')).not.toBeNull();
  });

  it('muestra error de email inválido', () => {
    render(<Formulario />);
    const emailInput = screen.getByPlaceholderText('Tu email');
    const boton = screen.getByText('Enviar');

    fireEvent.change(emailInput, { target: { value: 'correo-invalido' } });
    fireEvent.click(boton);

    expect(screen.getByText('El email no es válido.')).not.toBeNull();
  });

  it('no muestra errores cuando los campos son válidos', () => {
    render(<Formulario />);
    const nombreInput = screen.getByPlaceholderText('Tu nombre');
    const emailInput = screen.getByPlaceholderText('Tu email');
    const mensajeInput = screen.getByPlaceholderText('Tu mensaje');
    const boton = screen.getByText('Enviar');

    fireEvent.change(nombreInput, { target: { value: 'Angel' } });
    fireEvent.change(emailInput, { target: { value: 'angel@mail.com' } });
    fireEvent.change(mensajeInput, { target: { value: 'Hola' } });
    fireEvent.click(boton);

    expect(screen.queryByText('El nombre es obligatorio.')).toBeNull();
    expect(screen.queryByText('El email es obligatorio.')).toBeNull();
    expect(screen.queryByText('El mensaje no puede estar vacío.')).toBeNull();
  });
});
