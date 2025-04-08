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
import { AnimationProvider } from "./lib/components/AnimationProvider";


createRoot(document.getElementById('porfolio')!).render(
  <BrowserRouter>
    <AnimationProvider>
      <div className="w-full min-h-screen bg-gradient-to-br from-[#F5F0E8] via-[#B8A89A] to-[#5D4B3F]">
        <Nav />
        <Routes>
          <Route path="/" element={<>
            <div className="flex flex-col gap-20">
              <Inicio />
              <AboutMe />
              <Experiencia />
              <Proyectos />
              <Estudios />
              <Contacto />
            </div>
          </>} />
          <Route path="/gepro-beta" element={<GeproBeta />} />
        </Routes>
        <Footer />
      </div>
    </AnimationProvider>
  </BrowserRouter>
);

