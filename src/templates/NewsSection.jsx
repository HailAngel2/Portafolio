import React from "react";
import { useState } from "react";
import noticiasData from "../assets/Noticias.json";
import defaultImage from "../assets/default.webp";
import NewsList from "../components/organisms/newsList/NewsList";
import "./NewsSection.css";

const NewsSection = () => {
  // Ordenar el JSON descendente por fecha al cargar
  const noticiasIniciales = [...noticiasData]
    .map(n => ({
      ...n,
      imagen: n.imagen
        ? new URL(`../assets/${n.imagen}`, import.meta.url).href
        : defaultImage
    }))
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha)); // descendente

  const [noticias, setNoticias] = useState(noticiasIniciales);

  // State para el orden del botón
  const [ordenAscendente, setOrdenAscendente] = useState(false); // empieza descendente

  const ordenarPorFecha = () => {
    const noticiasOrdenadas = [...noticias].sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return ordenAscendente ? fechaB - fechaA : fechaA - fechaB; // invertir orden
    });

    setNoticias(noticiasOrdenadas);
    setOrdenAscendente(!ordenAscendente);
  };

  return (
    <section className="news-section">
      <div className="news-header">
        <h2>Noticias</h2>
        <button onClick={ordenarPorFecha} className="btn btn-primary">
          Ordenar por fecha ({ordenAscendente ? "Ascendente" : "Descendente"})
        </button>
      </div>
      <NewsList noticias={noticias} />
    </section>
  );
};

export default NewsSection;
