// Loader.js
import React from 'react';
import './Loader.css';
import loading from './cargando.gif';

function Loader() {
  return (
    <div className="loader-container">
      <img src={loading} alt="Cargando..." className="loader-gif" />
      <p className="loader-text">Cargando...</p>
    </div>
  );
}

export default Loader;;
