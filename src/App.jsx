import React from 'react';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Navbar from './components/atoms/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Noticias from './pages/Noticias'

function App() {
  const navLinks = [
    { href: '/', text: 'Inicio' },
    { href: '/proyectos', text: 'Proyectos' },
    { href: '/contacto', text: 'Contacto' },
    { href: '/noticias', text: 'Noticias' },
  ];

  return (
    <Router basename="/Portafolio">
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
          <Route path="/noticias" element={<Noticias/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
