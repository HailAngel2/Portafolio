import React from 'react';
import "./NewsCard.css";

const NewsCard = ({ titulo, fecha, contenido, imagen }) => (
  <div className="news-card">
    {imagen && <img src={imagen} alt={titulo} className="news-image" />}
    <h2>{titulo}</h2>    
    <p>{contenido}</p>
    <p className="news-date">{fecha}</p>
  </div>
);

export default NewsCard;
