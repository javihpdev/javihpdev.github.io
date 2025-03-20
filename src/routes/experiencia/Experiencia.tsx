type Props = {
    className?: string;
};

function Experiencia( {}: Props){
    return(
<div id="experiencia" className="flex w-full items-center justify-center h-screen ">
            <article className="flex shadow-2xl p-10 flex-col max-w-[90%] justify-center items-center gap-3">
            <h1 className="text-5xl">Experiencia Profesional</h1>

<p>
Tipomedia (Gestión, Diseño y Mantenimiento de Páginas Web):
Participación activa en el desarrollo y mantenimiento de diversos proyectos web.
Experiencia en la gestión integral de sitios web, desde el diseño inicial hasta la implementación y el mantenimiento continuo.
Colaboración en el proyecto "Historiatelo", donde he profundizado en el uso de:
Svelte 5: Desarrollo de interfaces de usuario reactivas y eficientes.
Tailwind CSS: Diseño rápido y flexible con un enfoque utilitario.
TypeScript: Mejora de la calidad del código mediante tipado estático.
React: Aprendizaje actual de esta potente libreria para la creación de interfaces de usuario.</p>
            </article>
</div>
    );
}   
export default Experiencia;