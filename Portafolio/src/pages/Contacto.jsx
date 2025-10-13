import React from 'react';
import Formulario from '../components/molecules/Formulario';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import { CiLinkedin } from "react-icons/ci";

const Home = () => {
  return (
    <div className="p-4">
      <Title title="Contacto" />
      <Text>
        <strong>Contactame</strong>
      </Text>
      <Formulario />
      <br />
      <br />
      <Text>
        <strong>Otros contactos</strong>
      </Text>
      <Text>Mi LinkedIn</Text>
      <CiLinkedin style={{ fontSize: '2rem', color: '#0A66C2', cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/angel-pimiento', '_blank')} />
      <Text>Email: angelpimiento15@gmail.com</Text> 
    </div>
  );
};

export default Home;