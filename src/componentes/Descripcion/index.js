import './Descripcion.css';
import foto from './fot.jpg';

function Descripcion() {
    return (
        <section className="section_descripcion">
            <img src={foto} alt="Foto" className="foto" loading="lazy" />
            <div className="text-container">
            <h3 className="descrip">
                💻 Desarrolladora Front-End e iOS. Apasionada por la tecnología y la creación de experiencias digitales interactivas. Me especializo en desarrollo web con React.js y en el desarrollo de aplicaciones iOS con Swift, utilizando herramientas modernas como Git, MySQL y Vercel. <br/><br />

                🚀 Formé parte del programa Oracle ONE en Alura Latam, donde potencié mis habilidades en programación, resolución de problemas y metodologías ágiles. <br /><br />

                ✨ Siempre en búsqueda de nuevos retos y oportunidades para crear soluciones innovadoras y funcionales. <br /><br />

                📎 Conéctate conmigo: 
            </h3>
                <div className="icon-container">
                    <a href="https://github.com/YurleidisLF" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/github-icon-1.svg" alt="Github" className="icono" loading="lazy" />
                    </a>
                    <a href="https://www.instagram.com/fuentesyurleidys/" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/insta.png" alt="Instagram" className="icono" loading="lazy" />
                    </a>
                    <a href="https://www.instagram.com/fuentesyurleidys/" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/facebook.png" alt="Facebook" className="icono" loading="lazy" />
                    </a>
                    <a href="https://www.linkedin.com/in/yurleidis-l%C3%B3pez-fuentes-543282314/" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/linkedin.png" alt="Linkedin" className="icono" loading="lazy" />
                    </a>
                    <a href="iconos/hv.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/hv.png" alt="Hoja de vida" className="icono" loading="lazy" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Descripcion;
