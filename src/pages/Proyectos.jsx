import React from 'react';
import Title from '../components/atoms/Title';
import Carousel from '../components/molecules/carousel/Carousel';
import slide1 from '../assets/Carrito.webp';
import slide2 from '../assets/Productos.webp';
import slide3 from '../assets/DetalleProducto.webp';
import Texto from '../components/atoms/Text';


const Proyectos = () => {
    const slides = [
    {
      image: slide1,
      title: 'Tienda de ropa',
      description: 'Pagina carrito de compras',
      alt: 'Slide 1',
    },
    {
      image: slide2,
      title: 'Tienda de ropa',
      description: 'Pagina productos.',
      alt: 'Slide 2',
    },
    {
      image: slide3,
      title: 'Tienda de ropa',
      description: 'Pagina detalle del producto.',
      alt: 'Slide 3',
    },
  ];

  return (
    <div className="p-4">
      <Title title="Proyectos" />
      <Carousel slides={slides} />
      <p>Proyecto realizado con JavaScript, CSS y HTML.</p>
      <a href="https://github.com/HailAngel2/Tienda-de-ropa" target="_blank" rel="noopener noreferrer">
        Repositorio Tienda-de-ropa
      </a>

    </div>
    
  );
};

export default Proyectos;