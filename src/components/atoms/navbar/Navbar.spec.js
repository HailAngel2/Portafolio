import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar component', () => {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'Acerca', href: '/about' },
    { text: 'Contacto', href: '/contact' },
  ];

  it('renderiza el logo correctamente', () => {
    render(
      <Router>
        <Navbar links={links} logoText="TestLogo" />
      </Router>
    );
    const logo = screen.getByText('TestLogo');
    expect(logo).toBeDefined();
  });

  it('renderiza todos los enlaces', () => {
    render(
      <Router>
        <Navbar links={links} logoText="TestLogo" />
      </Router>
    );

    links.forEach(link => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeDefined();
      expect(linkElement.getAttribute('href')).toBe(link.href);
    });
  });

  it('muestra un logo por defecto si no se pasa logoText', () => {
    render(
      <Router>
        <Navbar links={links} />
      </Router>
    );
    const logo = screen.getByText('MiPortafolio');
    expect(logo).toBeDefined();
  });
});
