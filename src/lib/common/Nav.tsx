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
    <div className="flex flex-col md:flex-row justify-center items-center fixed z-50 top-0 w-full max-w-full p-5 shadow-lg shadow-[#3D3027] bg-gradient-to-br from-[#F5F0E8] via-[#B8A89A] to-[#5D4B3F]">
 

      {/* Menu desplegable (visible en pantallas pequeñas) */}
      <div className={`md:hidden absolute z-10 text-center top-full right-0 w-full bg-gradient-to-br from-[#F5F0E8] via-[#B8A89A] to-[#5D4B3F] p-5 flex flex-col gap-4 transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-90 opacity-100' : 'max-h-0 opacity-0'}`}>
        <Link href="#inicio" className="scroll-auto text-lg hover:text-[#5D4B3F] " onClick={handleLinkClick}>Inicio</Link>
        <Link href="#aboutMe" className="scroll-auto text-lg hover:text-[#5D4B3F] " onClick={handleLinkClick}>Sobre Mí</Link>
        <Link href="#experiencia" className="scroll-auto text-lg hover:text-[#5D4B3F]" onClick={handleLinkClick}>Experiencia</Link>
        <Link href="#proyectos" className="scroll-auto text-lg hover:text-[#5D4B3F] " onClick={handleLinkClick}>Proyectos</Link>
        <Link href="#estudios" className="scroll-auto text-lg hover:text-[#5D4B3F] " onClick={handleLinkClick}>Estudios</Link>
        <Link href="#contacto" className="scroll-auto text-lg hover:text-[#5D4B3F] " onClick={handleLinkClick}>Contacto</Link>
      </div>

      {/* Div todo junto en el md */}
      <div className="flex  gap-3 w-full justify-center items-center md:justify-end ">
        {/* Logo */}
        <p className="flex w-50 text-3xl justify-center items-center md:text-5xl">JhpDev</p>

        <div className="flex justify-center items-center pt-2 md:pt-0">
        <button className="p-1 md:hidden flex flex-col gap-1" aria-label="Boton Menu" onClick={toggleMenu}>
          <span className={`block h-1 w-6 bg-[#5D4B3F] transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-1 w-6 bg-[#5D4B3F] transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-1 w-6 bg-[#5D4B3F] transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

        {/* div de enlaces */}
        <div className={`md:flex w-full max-w-full flex-wrap pr-10 justify-end items-center gap-10 ${isOpen ? 'hidden' : 'hidden md:flex'}`}>
          {/* Inicio */}
          <Link href="#inicio" className="scroll-auto text-lg py-2 hover:text-[#5D4B3F] hover:duration-500">Inicio</Link>
          {/* About Me */}
          <Link href="#aboutMe" className="scroll-auto text-lg py-2 hover:text-[#5D4B3F] hover:duration-500">Sobre Mí</Link>
          {/* Experiencia */}
          <Link href="#experiencia" className="scroll-auto text-lg py-2 hover:text-[#5D4B3F] hover:duration-500">Experiencia</Link>
          {/* Proyectos */}
          <Link href="#proyectos" className="scroll-auto text-lg py-2 hover:text-[#5D4B3F] hover:duration-500">Proyectos</Link>
          {/* Estudios */}
          <Link href="#estudios" className="scroll-auto text-lg py-2 hover:text-[#5D4B3F] hover:duration-500">Estudios</Link>
          {/* Contacto */}
          <Link href="#contacto" className="scroll-auto text-lg py-2 hover:text-[#5D4B3F] hover:duration-500">Contacto</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;