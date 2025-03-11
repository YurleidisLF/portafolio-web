import React from 'react';
import './Certi.css';

function Certificado() {
    const certificados = [
        {
            id: 1,
            titulo: "Oracle Next Education - React G6 - ONE",
            fecha: "Finalizado en Julio de 2024",
            institucion: "Alura Latam",
            descripcion: "Certificación en desarrollo Front-End en la creación de Aplicaciones Front-end Estáticas, Dinámicas. Utilizando HTML, CSS, JavaScript, React.js, JSON y APIS.",
            etiqueta: "Último",
            enlace: "https://app.aluracursos.com/degree/certificate/2474f338-f697-47c3-82a9-2595d154233d"
        },
        {
            id: 2,
            titulo: "Oracle Next Education - Front End G6 - ONE",
            fecha: "Finalizado en Mayo de 2024",
            institucion: "Alura Latam",
            descripcion: "Certificación en desarrollo Front-End en la creación de Aplicaciones Front-end Estáticas, Dinámicas. Utilizando HTML, CSS, JavaScript y APIS.",
            enlace: "https://app.aluracursos.com/degree/certificate/796bd8d7-685e-433e-adca-593cda91ffcb"
        },
        {
            id: 3,
            titulo: "Oracle Next Education - Emprendimiento, Agilidad y Protagonismo Profesional G6 - ONE",
            fecha: "Finalizado en Abril de 2024",
            institucion: "Alura Latam",
            descripcion: "Certificación en desarrollo personal.",
            enlace: "https://app.aluracursos.com/degree/certificate/c124ff0c-10b6-4696-afc2-67b9df210184"
        },
        {
            id: 4,
            titulo: "Oracle Next Education - Principiante en Programación G6 - ONE",
            fecha: "Finalizado en Febrero de 2024",
            institucion: "Alura Latam",
            descripcion: "Certificación en Principiante en Programación. Utilizando HTML, CSS y JavaScript",
            enlace: "https://app.aluracursos.com/degree/certificate/689169cf-cb13-4e7b-beb2-e84abcdaf98a"
        },
        {
            id: 5,
            titulo: "EnganchaTIC-UdeA  - Programación Web",
            fecha: "Finalizado en Diciembre de 2023",
            institucion: "EnganchaTIC-UdeA ",
            descripcion: "Certificación en Programación Web.",
            enlace: "/certi/programa.pdf"
        },
        {
            id: 10,
            titulo: "Desarollo de Aplicaciones iOS",
            fecha: "Finalizado en Diciembre de 2023",
            institucion: "Talento Especializado-Sapiencia",
            descripcion: "Certificación en desarrollo de Aplicaciones iOS. Utilizando el lenguaje Swift.",
            enlace: "/certi/certi.pdf" 
        },
    ];

    return (
        <div className="certificaciones-container">
            <div className="certificaciones">
                {certificados.map(certificado => (
                    <div key={certificado.id} className="certificado">
                        <div className="certificado-header">
                            <h3>{certificado.titulo}</h3>
                            {certificado.etiqueta && <span className="etiqueta">{certificado.etiqueta}</span>}
                        </div>
                        <p>{certificado.fecha} • {certificado.institucion}</p>
                        <p>{certificado.descripcion}</p>
                        <a href={certificado.enlace} target="_blank" rel="noopener noreferrer">
                            <button className="ver-certificado">Ver certificado</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificado;
