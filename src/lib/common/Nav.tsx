import { useState } from "react";
import Link from "../components/web/Link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center fixed z-10 top-0 w-full max-w-full p-5 shadow-lg bg-blue- shadow-blue-500 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
      {/* Menu Hamburguesa (visible en pantallas pequeñas) */}
      <div className="pt-2 md:pt-0">
        <button className="p-1 md:hidden flex flex-col gap-1" aria-label="Boton Menu" onClick={toggleMenu}>
          <span className={`block h-1 w-6 bg-blue-400 transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 w-6 bg-blue-400 transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-blue-400 transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Logo */}
      <p className="flex w-50 md:justify-end justify-center text-3xl pl-10 md:text-5xl">JhpDev</p>

      {/* Menu desplegable (visible en pantallas pequeñas) */}
      <div className={`md:hidden absolute text-center top-full right-0 w-full bg-gray-800 p-5 flex flex-col  gap-4 transition-all duration-800 ${isOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-[-10px]'}`}>
        <Link href="#inicio" className="scroll-auto text-lg" onClick={handleLinkClick}>Inicio</Link>
        <Link href="#aboutMe" className="scroll-auto text-lg" onClick={handleLinkClick}>Sobre Mí</Link>
        <Link href="#experiencia" className="scroll-auto text-lg" onClick={handleLinkClick}>Experiencia</Link>
        <Link href="#proyectos" className="scroll-auto text-lg" onClick={handleLinkClick}>Proyectos</Link>
        <Link href="#estudios" className="scroll-auto text-lg" onClick={handleLinkClick}>Estudios</Link>
        <Link href="#contacto" className="scroll-auto text-lg" onClick={handleLinkClick}>Contacto</Link>
      </div>

      {/* div de enlaces */}
      <div className={`md:flex w-full pr-10 justify-end items-center gap-10 ${isOpen ? 'hidden' : 'hidden md:flex'}`}>
        {/* Inicio */}
        <Link href="#inicio" className="scroll-auto text-lg hover:text-blue-500 hover:duration-500">Inicio</Link>
        {/* About Me */}
        <Link href="#aboutMe" className="scroll-auto text-lg hover:text-blue-500 hover:duration-500">Sobre Mí</Link>
        {/* Experiencia */}
        <Link href="#experiencia" className="scroll-auto text-lg hover:text-blue-500 hover:duration-500">Experiencia</Link>
        {/* Proyectos */}
        <Link href="#proyectos" className="scroll-auto text-lg hover:text-blue-500 hover:duration-500">Proyectos</Link>
        {/* Estudios */}
        <Link href="#estudios" className="scroll-auto text-lg hover:text-blue-500 hover:duration-500">Estudios</Link>
        {/* Contacto */}
        <Link href="#contacto" className="scroll-auto text-lg hover:text-blue-500 hover:duration-500">Contacto</Link>
      </div>
    </div>
  );
}

export default Nav;
