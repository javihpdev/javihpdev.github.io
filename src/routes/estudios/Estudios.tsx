type Props = {
    className?: string;
};


function Estudios( {}: Props){
    return(
        <div id="estudios" className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-5xl">Estudios</h1>
            <p>Formación Académica:

Desarrollo de Aplicaciones Web (Grado Superior): LinkiaFP.
Sólidos conocimientos en lenguajes de programación web:
JavaScript: Desarrollo de lógica interactiva en el lado del cliente.
PHP: Desarrollo de lógica del lado del servidor.
HTML: Estructuración de contenido web.
CSS: Estilos y diseño visual de páginas web.</p>
        </div>
    );
}
export default Estudios;