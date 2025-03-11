import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './componentes/Loader/Loader'; // Importa el componente Loader

// Carga diferida de componentes
const Header = lazy(() => import('./componentes/Header'));
const Footer = lazy(() => import('./componentes/Pie'));
const SobreMi = lazy(() => import('./componentes/Sobre-mi'));
const Inicio = lazy(() => import('./componentes/Inicio'));
const Skills = lazy(() => import('./componentes/Skills'));
const Hobbies = lazy(() => import('./componentes/Hobbis'));
const Formacion = lazy(() => import('./componentes/Formacion'));
const Certificado = lazy(() => import('./componentes/Certificados'))
const Proyectos = lazy(() => import('./componentes/Experiencia'));
const ContacY = lazy(() => import('./componentes/Contacto'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}> {/* Usa el componente Loader como fallback */}
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/certificados" element={<Certificado />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<ContacY />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;