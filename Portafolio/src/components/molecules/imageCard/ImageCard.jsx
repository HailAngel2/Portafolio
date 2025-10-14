import React from 'react';
import './ImageCard.css';

const ImageCard = ({ src, alt = '', title = '', description = '', estiloExtra = '' }) => {
  return (
    <div className={`image-card ${estiloExtra}`}>
      
      <img src={src} alt={alt} className="image-card-img" />
      <div className="image-card-text"> 
        <h3>{title}</h3>       
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;