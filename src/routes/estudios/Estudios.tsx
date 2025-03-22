type Props = {
    className?: string;
};


function Estudios( {}: Props){
    return(
        <div id="estudios" className="flex w-full pt-20 items-center text-center justify-center min-h-screen ">
            <article className="flex flex-col max-w-[95%] justify-center items-center gap-3 shadow-[0_0_25px_5px] shadow-blue-500 p-20">
            <h1 className="text-5xl">Estudios</h1>
            <p className="flex md:w-full w-70 flex-col gap-2 justify-center items-center">Formación Académica:
                Desarrollo de Aplicaciones Web (Grado Superior): LinkiaFP.
                Sólidos conocimientos en lenguajes de programación web:
                JavaScript: Desarrollo de lógica interactiva en el lado del cliente.
                PHP: Desarrollo de lógica del lado del servidor.
                HTML: Estructuración de contenido web.
                CSS: Estilos y diseño visual de páginas web.</p>
            </article>
        </div>
        
    );
}
export default Estudios;