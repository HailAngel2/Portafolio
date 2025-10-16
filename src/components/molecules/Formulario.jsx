import React, { useState } from 'react';
import Input from '../atoms/input/Input';
import Boton from '../atoms/boton/Boton';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const handleSubmit = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio.';
    if (!email.trim()) {
      nuevosErrores.email = 'El email es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nuevosErrores.email = 'El email no es válido.';
    }
    if (!mensaje.trim()) nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      console.log('Formulario válido');
      console.log({ nombre, email, mensaje });
    }
  };

  return (
    <div>
      <Input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        type="email"
      />
      {errores.email && <p className="error">{errores.email}</p>}

      <Input
        multiline
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Tu mensaje"
        rows={5}
      />
      {errores.mensaje && <p className="error">{errores.mensaje}</p>}

      <Boton texto="Enviar" onClick={handleSubmit} />
    </div>
  );
};

export default Formulario;