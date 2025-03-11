import React, { useState } from 'react';
import './Experiencia.css';

const proyectos = [
  {
    id: '1',
    title: 'SpaceApp',
    img: 'experiencia/space-app.png',
    description: 'Es una galería estática, que esta consumiendo una API de la NASA para ver la imagenes directamente.',
    demoLink: 'https://yurleidislf.github.io/SpaceApp/',
    repoLink: 'https://github.com/YurleidisLF/SpaceApp',
  },
  {
    id: '2',
    title: 'Juego del número secreto',
    img: 'experiencia/juego-secr-s.png',
    description: 'Es un juego donde puedes adivinar un número del 1 al 10.',
    demoLink: 'https://yurleidislf.github.io/Juego_Numero_Secreto_JS/',
    repoLink: 'https://github.com/YurleidisLF/Juego_Numero_Secreto_JS',
  },
  {
    id: '3',
    title: 'Alura Midi',
    img: 'experiencia/Alura_midi.png',
    description: 'Es un juego donde puedes tocar las teclas y ellas botan un sonido que las diferencia una de las otras.',
    demoLink: 'https://yurleidislf.github.io/ALURA-MIDI/',
    repoLink: 'https://github.com/YurleidisLF/ALURA-MIDI',
  },
  {
    id: '4',
    title: 'Alura Geek',
    img: 'experiencia/alura-geek.png',
    description: 'Es un página, que una pequeña parte simula una tienda onlile donde puedes ver, agregar y eliminar productos atravez de un formulario.',
    demoLink: 'https://yurleidislf.github.io/Alura-Geek/',
    repoLink: 'https://github.com/YurleidisLF/Alura-Geek',
  },
  {
    id: '5',
    title: 'Alura Cinema',
    img: 'experiencia/alura-cine.png',
    description: 'Es un página donde hay unos videos y puedes reproducirlos, darles me gusta y añadirlos a favoritos.',
    demoLink: 'https://alura-cinema-sable.vercel.app/',
    repoLink: 'https://github.com/YurleidisLF/Alura-Cinema',
  },
  {
    id: '6',
    title: 'Alura Bank',
    img: 'experiencia/alura-ban.png',
    description: 'Es un banco ficticio, donde ofrece servicios etc. Esta diseñado como parte de mi aprendizaje.',
    demoLink: ' https://yurleidislf.github.io/Alura-Bank/',
    repoLink: 'https://github.com/YurleidisLF/Alura-Bank',
  },
  {
    id: '7',
    title: 'Calculadora',
    img: 'experiencia/calcu.png',
    description: 'Es una calculadora, creada con el leguaje Swift. Donde puede sumar, restar, multiplicar y dividir.',
    demoLink: '',
    repoLink: '',
  },
  // Añadir más proyectos aquí
];

function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      <div className="project-cards">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <img src={proyecto.img} alt={proyecto.title} className="project-img" />
            <div className="project-content">
              <h3>{proyecto.title}</h3>
              <button onClick={() => openModal(proyecto)}>Más Información</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="info-modal" onClick={closeModal}>
          <div className="info-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">Ver Demo</a>
            <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer">Ver Repositorio</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Proyectos;
