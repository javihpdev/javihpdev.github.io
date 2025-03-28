import { useState } from "react";
import Link from "../components/web/Link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // TODO - Poner la funcion toggleMenu dentro del componente Link y el estilo dejarlo tambien dentro de Link, aqui aumenta mucho el codigo
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center  fixed z-50 top-0 w-full max-w-full p-5 shadow-lg bg-blue- shadow-blue-500 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
      {/* Menu Hamburguesa (visible en pantallas pequeñas) */}
      <div className="pt-2 md:pt-0">
        <button className="p-1 md:hidden flex flex-col gap-1" aria-label="Boton Menu" onClick={toggleMenu}>
          <span className={`block h-1 w-6 bg-blue-400 transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 w-6 bg-blue-400 transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-blue-400 transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menu desplegable (visible en pantallas pequeñas) */}
      <div className={`md:hidden absolute z-10 text-center top-full right-0 w-full bg-gray-800 p-5 flex flex-col gap-4 transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-90 opacity-100' : 'max-h-0 opacity-0'}`}>
        <Link href="#inicio" className="scroll-auto text-lg hover:text-blue-500 " onClick={handleLinkClick}>Inicio</Link>
        <Link href="#aboutMe" className="scroll-auto text-lg hover:text-blue-500 " onClick={handleLinkClick}>Sobre Mí</Link>
        <Link href="#experiencia" className="scroll-auto text-lg hover:text-blue-500" onClick={handleLinkClick}>Experiencia</Link>
        <Link href="#proyectos" className="scroll-auto text-lg hover:text-blue-500 " onClick={handleLinkClick}>Proyectos</Link>
        <Link href="#estudios" className="scroll-auto text-lg hover:text-blue-500 " onClick={handleLinkClick}>Estudios</Link>
        <Link href="#contacto" className="scroll-auto text-lg hover:text-blue-500 " onClick={handleLinkClick}>Contacto</Link>
      </div>

      {/* Div todo junto en el md */}
      <div className="flex gap-6 ">
        {/* Logo */}
        <p className="flex w-50 text-3xl justify-center items-center md:text-5xl">JhpDev</p>

        {/* div de enlaces */}
        <div className={`md:flex w-full max-w-full flex-wrap pr-10 justify-end items-center gap-10 ${isOpen ? 'hidden' : 'hidden md:flex'}`}>
          {/* Inicio */}
          <Link href="#inicio" className="scroll-auto text-lg p-2 hover:text-blue-500 hover:duration-500">Inicio</Link>
          {/* About Me */}
          <Link href="#aboutMe" className="scroll-auto text-lg p-2 hover:text-blue-500 hover:duration-500">Sobre Mí</Link>
          {/* Experiencia */}
          <Link href="#experiencia" className="scroll-auto text-lg p-2 hover:text-blue-500 hover:duration-500">Experiencia</Link>
          {/* Proyectos */}
          <Link href="#proyectos" className="scroll-auto text-lg p-2 hover:text-blue-500 hover:duration-500">Proyectos</Link>
          {/* Estudios */}
          <Link href="#estudios" className="scroll-auto text-lg p-2 hover:text-blue-500 hover:duration-500">Estudios</Link>
          {/* Contacto */}
          <Link href="#contacto" className="scroll-auto text-lg p-2 hover:text-blue-500 hover:duration-500">Contacto</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;