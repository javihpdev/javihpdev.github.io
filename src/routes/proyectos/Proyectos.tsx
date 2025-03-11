type Props = {
    className?: string;
};

function Proyectos( {}: Props){
    return(
        <div id="proyectos" className="flex w-full items-center justify-center h-screen ">
            <article className="flex flex-col max-w-[90%] justify-center items-center gap-3">
            <h1 className="text-5xl">Proyectos</h1>
            <p>Proyectos realizados:
                -Página web de un restaurante: HTML, CSS, JavaScript.
                -Página web de una tienda de ropa: HTML, CSS, JavaScript.
                -Página web de un blog: HTML, CSS, JavaScript.
                -Página web de un fotógrafo: HTML, CSS, JavaScript.
                -Página web de un hotel: HTML, CSS, JavaScript.
                -Página web de una agencia de viajes: HTML, CSS, JavaScript.</p>
            </article>
        </div>
    );
}
export default Proyectos;