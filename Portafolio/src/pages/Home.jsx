import React from 'react';
import Title from '../components/atoms/Title';
import ImageCard from '../components/molecules/imageCard/ImageCard';
import Yo from '../assets/Yo.webp';




const Home = () => {
  

  return (
    <div className="p-4">
      <Title title="Home" />
      <ImageCard
        title="Angel Pimiento"
        src={Yo}
        alt="Ejemplo"        
        description="Estudiante de Ingenieria en informatia de DuocUC."
      />

    </div>
  );
};

export default Home;