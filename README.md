# React + Vite
# Portafolio

[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-green)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Open--Source-lightgrey)](LICENSE)

Este proyecto es un **portafolio personal** realizado como prueba. Permite mostrar información sobre el autor, noticias, proyectos pasados y un formulario de contacto.

## Descripción

El portafolio cuenta con:

- **Noticias**: Noticias extraídas de `Noticias.json`.
- **Contacto**: Formulario de contacto (actualmente imprime los datos en consola).
- **Proyectos**: Lista de proyectos anteriores.

Construido con **React**, **Vite** y **Bootstrap**.

## Tecnologías y dependencias

- **React**: 19.1.1  
- **React DOM**: 19.1.1  
- **React Router DOM**: 7.9.4  
- **Bootstrap**: 5.3.8  
- **React Bootstrap**: 2.10.10  
- **Vite**: 7.1.7  

### DevDependencies

- Karma, Jasmine, Testing Library para tests.
- ESLint y plugins para React.
- Webpack, Babel y loaders para bundling.
- gh-pages para deploy en GitHub Pages.

> Ver `package.json` para detalles completos.

## Instalación y ejecución

### Clonar el repositorio:

git clone https://github.com/HailAngel2/Portafolio.git

Pagina: https://hailangel2.github.io/Portafolio/

-Entrar en la carpeta del proyecto:

cd Portafolio


-Instalar dependencias:

npm install


-Ejecutar el proyecto en modo desarrollo:

npm run dev


-Construir para producción:

npm run build


-Ejecutar tests:

npm run test

### Despliegue en GitHub Pages

-El proyecto puede desplegarse directamente con:

npm run deploy


Esto usará la carpeta dist/ generada por Vite y la subirá a gh-pages.

## Estructura del proyecto
src/      
├─ assets/          Imágenes, JSON de noticias e imagenes     
├─ components/      Componentes divididos por Atomic Design     
│  ├─ atoms/     
│  ├─ molecules/     
│  └─ organisms/     
├─ templates/    
├─ pages/    
└─ App.jsx    

## Git y ramas

-**Rama principal**: main

-**Rama secundaria**: usada para la página gh-pages

## Próximos pasos / mejoras

-Configurar el formulario de contacto para enviar correos en lugar de imprimir en consola.

-Agregar más proyectos y noticias dinámicamente.

-Mejorar cobertura de tests y corregir los fallidos actuales.

-Licencia

**Proyecto abierto para uso de prueba y aprendizaje.**
