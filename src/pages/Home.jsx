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
      <a 
        href="https://github.com/HailAngel2" 
        target="_blank" 
        rel="noopener noreferrer"
      >
  https://github.com/HailAngel2
</a>


    </div>
  );
};

export default Home;