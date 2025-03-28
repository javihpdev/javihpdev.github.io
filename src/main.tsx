import { createRoot } from "react-dom/client";
import Nav from "./lib/common/Nav";
import AboutMe from "./routes/about-me/AboutMe";
import Contacto from "./routes/contacto/Contacto";
import Estudios from "./routes/estudios/Estudios";
import Experiencia from "./routes/experiencia/Experiencia";
import Inicio from "./routes/Inicio/Inicio";
import Proyectos from "./routes/proyectos/Proyectos";
import Footer from "./lib/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeproBeta from "./lib/components/GeProBeta";


createRoot(document.getElementById('porfolio')!).render(
  <BrowserRouter>
    <div className="w-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
      <Nav />
      <Routes>
        <Route path="/" element={<>
          <Inicio />
          <AboutMe />
          <Experiencia />
          <Proyectos />
          <Estudios />
          <Contacto />
        </>} />
        <Route path="/gepro-beta" element={<GeproBeta />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

