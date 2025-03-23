import Gepro from "../../lib/components/Gepro";
import Historiatelo from "../../lib/components/Historiatelo";

function Proyectos(){
    return(
        <div id="proyectos" className="flex w-full md:pt-20 items-center justify-center min-h-screen ">
            <article className="flex flex-col w-full max-w-[95%] justify-center items-center gap-10 shadow-[0_0_25px_5px] shadow-blue-500 p-20">
            <h1 className="text-5xl">Proyectos</h1>
            <ul className="flex md:w-full sm:w-150 w-70  flex-col gap-2 justify-center items-center">
                Proyectos realizados:
                <li>-Página web de un restaurante: HTML, CSS, JavaScript.</li>
                <li>-Página web de una tienda de ropa: HTML, CSS, JavaScript.</li>
                <li>-Página web de un blog: HTML, CSS, JavaScript.</li>
                <li>-Página web de un fotógrafo: HTML, CSS, JavaScript.</li>
                <li>-Página web de un hotel: HTML, CSS, JavaScript.</li>
                <li>-Página web de una agencia de viajes: HTML, CSS, JavaScript.</li>
                </ul>

                <div className="flex md:flex-row flex-col w-200 max-w-full justify-center items-center gap-10">
                <Historiatelo />
                <Gepro />
                </div>
            </article>
        </div>
    );
}
export default Proyectos;