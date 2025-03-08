import Link from "../components/web/Link"
function Nav(){
    return(
        <div className="flex shadow-2xl p-5 w-full ">
            <p className="flex w-50">Javier Hernandez Perez</p>
        {/* div de enlaces */}
            <div className="flex w-full justify-end items-center gap-10">
                {/* Inicio */}
                <Link href="/">Inicio</Link>
                {/* About Me */}
                <Link href="/">About Me</Link>
                {/* Experiencia */}
                <Link href="/">Experiencia</Link>
                {/* Proyectos */}
                <Link href="/">Proyecto</Link>
                {/* Estudios */}
                <Link href="/">Estudios</Link>
                {/* Contacto */}
                <Link href="/">Contacto</Link>
            </div>
        </div>
    )
}
export default Nav