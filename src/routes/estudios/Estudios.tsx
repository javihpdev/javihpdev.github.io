type Props = {
    className?: string;
};


function Estudios( {}: Props){
    return(
        <div id="estudios" className="flex w-full items-center justify-center h-screen ">
            <article className="flex flex-col max-w-[90%] shadow-2xl p-10 justify-center items-center gap-3">
            <h1 className="text-5xl">Estudios</h1>
            <p>Formación Académica:
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