import Link from "../components/web/Link"
function Nav(){
    return(
        <div className="flex shadow-2xl p-5 w-full ">
            <p className="flex w-50">Javier Hernandez Perez</p>
        {/* div de enlaces */}
            <div className="flex w-full justify-end items-center gap-10">
                {/* Inicio */}
                <Link href="#inicio">Inicio</Link>
                {/* About Me */}
                <Link href="#aboutMe">Sobre Mí</Link>
                {/* Experiencia */}
                <Link href="#experiencia">Experiencia</Link>
                {/* Proyectos */}
                <Link href="#proyecto">Proyecto</Link>
                {/* Estudios */}
                <Link href="#estudios">Estudios</Link>
                {/* Contacto */}
                <Link href="#contacto">Contacto</Link>
            </div>
        </div>
    )
}
export default Nav