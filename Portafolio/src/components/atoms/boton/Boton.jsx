import React from 'react';
import './Boton.css';

const Boton = ({ texto, color = 'primary', onClick, estiloExtra = '' }) => {
  return (
    <button
      className={`boton boton-${color} ${estiloExtra}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Boton;