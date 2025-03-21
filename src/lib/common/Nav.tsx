import Link from "../components/web/Link";



function Nav() {

   

  return (
    <div
      className="flex fixed top-0 w-full p-5 shadow-lg shadow-blue-500 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"
    >
      {/* Logo */}
      <p className="flex w-50 justify-end text-5xl">JhpDev.</p>

      {/* div de enlaces */}
      <div className="flex w-full pr-10 justify-end items-center gap-10">
        {/* Inicio */}
        <Link href="#inicio" className="scroll-auto text-lg">Inicio</Link>
        {/* About Me */}
        <Link href="#aboutMe" className="scroll-auto text-lg">Sobre Mí</Link>
        {/* Experiencia */}
        <Link href="#experiencia" className="scroll-auto text-lg">Experiencia</Link>
        {/* Proyectos */}
        <Link href="#proyectos" className="scroll-auto text-lg">Proyectos</Link>
        {/* Estudios */}
        <Link href="#estudios" className="scroll-auto text-lg">Estudios</Link>
        {/* Contacto */}
        <Link href="#contacto" className="scroll-auto text-lg">Contacto</Link>
      </div>
    </div>
  );
}

export default Nav;
