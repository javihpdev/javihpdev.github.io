import { useRef, useState, useEffect } from "react";
import Gepro from "../../lib/components/Gepro";
import Historiatelo from "../../lib/components/Historiatelo";
import Porfolio from "../../lib/components/PorfolioPersonal";

function Proyectos(){
      const proyectosRef = useRef(null);
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
    
        if (proyectosRef.current) {
          observer.observe(proyectosRef.current);
        }
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (proyectosRef.current) {
              observer.unobserve(proyectosRef.current);
            }
          };
        }, [isScrolling]);
    return(
        <div id="proyectos" ref={proyectosRef}
        className="fade-in flex flex-col w-full md:pt-20 mt-10 md:mt-0 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
      >
            <article className="flex flex-col w-full max-w-[95%] justify-center items-center gap-10 shadow-[0_0_25px_5px] shadow-blue-500 p-20">
            <h1 className="text-5xl">Proyectos</h1>
                <div className="flex md:flex-row flex-col md:flex-wrap max-w-full justify-center items-center gap-10">
                <Historiatelo />
                <Gepro />
                <Porfolio />
                </div>
            </article>
        </div>
    );
}
export default Proyectos;