import { useRef, useState, useEffect } from "react";

function Experiencia(){
    const experienciaRef = useRef(null);
      const [isScrolling, setIsScrolling] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolling(true);
          clearTimeout(window.scrollTimeout);
          window.scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
          }, 4000); // Ajusta el tiempo de espera según sea necesario
        };
    
        window.addEventListener("scroll", handleScroll);
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && isScrolling) {
                entry.target.classList.add("opacity-100");
              }
            });
          });
    
        if (experienciaRef.current) {
          observer.observe(experienciaRef.current);
        }
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (experienciaRef.current) {
              observer.unobserve(experienciaRef.current);
            }
          };
        }, [isScrolling]);
    return(
<div id="experiencia" ref={experienciaRef}
      className="fade-in flex flex-col w-full min-h-screen md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
    >
            <article className="flex flex-col max-w-[95%] justify-center items-center gap-11 shadow-[0_0_25px_5px] shadow-blue-500 p-20">
            <h1 className="flex md:w-full w-70 flex-col gap-2 text-5xl justify-center items-center">Experiencia Profesional</h1>

<p className="flex md:w-full w-70 flex-col gap-2 justify-center items-center">
TipoMedia (Gestión, Diseño y Mantenimiento de Páginas Web):
Participación activa en el desarrollo y mantenimiento de diversos proyectos web.
Experiencia en la gestión integral de sitios web, desde el diseño inicial hasta la implementación y el mantenimiento continuo.
Colaboración en el proyecto "Historiatelo", donde he profundizado en el uso de:
Svelte 5,
Tailwind CSS,
TypeScript.
</p>
<a href="https://tipomedia.com/" target="_blank">
<img src="./images/tipomedia_logo.png" alt="logo tipomedia" className="bg-white p-4 rounded-lg" />
</a>
            </article>
</div>
    );
}   
export default Experiencia;