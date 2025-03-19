import { createRoot } from 'react-dom/client';
import Nav from './lib/common/Nav.tsx';
import './index.css';
import AboutMe from './routes/about-me/AboutMe.tsx';
import Contacto from './routes/contacto/Contacto.tsx';
import Inicio from './routes/Inicio/Inicio.tsx';
import Estudios from './routes/estudios/Estudios.tsx';
import Experiencia from './routes/experiencia/Experiencia.tsx';
import Proyectos from './routes/proyectos/Proyectos.tsx';

createRoot(document.getElementById('porfolio')!).render(
  <div className="w-full min-h-screen bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
    <Nav />
    <Inicio />
    <AboutMe />
    <Experiencia />
    <Proyectos />
    <Estudios />
    <Contacto />
  </div>
);

