// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Nav from './lib/common/Nav.tsx'
import './index.css'
import AboutMe from './routes/about-me/AboutMe.tsx'
import Contacto from './routes/contacto/Contacto.tsx'
import Inicio from './routes/Inicio/Inicio.tsx'

createRoot(document.getElementById('porfolio')!).render(
  // <StrictMode>
  //   <App />
  // {/* </StrictMode> */}

  // Div para el Main
 <div className="w-full h-screen">
  <Nav />
  <Inicio />
  <AboutMe/>
  <Contacto />
  </div>
)
