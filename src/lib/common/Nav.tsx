import Link from "../components/web/Link"

type Props = {
    className?: string;
};
function  Nav(className: Props){
    return(
        <div className="flex fixed top-0 shadow-lg p-5 w-full bg-white dark:bg-[#242424] bg-opacity-100">
            <p className="flex w-50 justify-end text-5xl">JhpDev.</p>
        {/* div de enlaces */}
            <div className="flex w-full pr-10 justify-end items-center gap-10">
                {/* Inicio */}
                <Link href="#inicio" className="scroll-auto ">Inicio</Link>
                {/* About Me */}
                <Link href="#aboutMe" className="scroll-auto">Sobre Mí</Link>
                {/* Experiencia */}
                <Link href="#experiencia" className="scroll-auto">Experiencia</Link>
                {/* Proyectos */}
                <Link href="#proyectos" className="scroll-auto">Proyectos</Link>
                {/* Estudios */}
                <Link href="#estudios" className="scroll-auto">Estudios</Link>
                {/* Contacto */}
                <Link href="#contacto" className="scroll-auto">Contacto</Link>
            </div>
        </div>
    )
}
export default Nav