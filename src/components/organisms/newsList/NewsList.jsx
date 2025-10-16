import React from "react";
import NewsCard from "../../molecules/newsCard/NewsCard";
import "./NewsList.css";

const NewsList = ({ noticias }) => {
  return (
    <div className="news-list">
      {noticias.map((noticia, index) => (
        <NewsCard
          key={index}
          titulo={noticia.titulo}
          fecha={noticia.fecha}
          contenido={noticia.contenido}
          imagen={noticia.imagen}
        />
      ))}
    </div>
  );
};

export default NewsList;