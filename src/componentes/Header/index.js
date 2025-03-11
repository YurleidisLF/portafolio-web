import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="menu_header">
      <div className="container">
        <img src="/logo2.png" alt="Logo" className="logo" />
        <h2 className="titulo">Yurleidis López Fuentes</h2>
        <button className="hamburger" onClick={toggleMenu}>
          <img 
            src={isMenuOpen ? "/iconos/cerrar.png" : "/iconos/menu-de-hamburguesas.png"} 
            alt={isMenuOpen ? "Cerrar menú" : "Abrir menú"} 
          />
        </button>
      </div>
      <nav className={`menu__nav ${isMenuOpen ? 'menu__nav--open' : ''}`}>
        <ul className="menu__list">
          <li className="menu__list__item">
            <Link to="/inicio">Inicio</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/sobre-mi">Sobre mí</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/hobbies">Hobbies</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/formacion">Formación</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/certificados">Certificados</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
