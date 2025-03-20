// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Nav from './lib/common/Nav.tsx'
import './index.css'
import AboutMe from './routes/about-me/AboutMe.tsx'
import Contacto from './routes/contacto/Contacto.tsx'
import Inicio from './routes/Inicio/Inicio.tsx'
import Estudios from './routes/estudios/Estudios.tsx'
import Experiencia from './routes/experiencia/Experiencia.tsx'
import Proyectos from './routes/proyectos/Proyectos.tsx'


createRoot(document.getElementById('porfolio')!).render(
  // <StrictMode>
  //   <App />
  // {/* </StrictMode> */}

  // Div para el Main
  <div className="w-full min-h-screen bg-gradient-to-b from-[#146e6e] to-[#2e9115]">
  <Nav />
  <Inicio />
  <AboutMe/>
  <Experiencia />
  <Proyectos />
  <Estudios />
  <Contacto />

  </div>
)
