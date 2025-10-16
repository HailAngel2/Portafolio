import React from 'react';
const Image = ({ src, alt }) => {
  if (!src) return null; // si no hay imagen, no muestra nada
  return <img src={src} alt={alt || "Noticia"} className="news-image" />;
};
export default Image;