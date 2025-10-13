import React from 'react';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Navbar from './components/atoms/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const navLinks = [
    { href: '/', text: 'Inicio' },
    { href: '/proyectos', text: 'Proyectos' },
    { href: '/contacto', text: 'Contacto' },
  ];

  return (
    <Router>
      <Navbar links={navLinks} logoText="HailAngelDev" />
      <div style={{   paddingTop: '64px',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
        boxSizing: 'border-box',}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
