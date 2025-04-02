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
        className="fade-in flex flex-col w-full justify-center text-center items-center gap-10 opacity-0 transition-opacity duration-4000"
      >
            <article className="flex flex-col w-full max-w-[95%] justify-center rounded-2xl items-center gap-10 shadow-[0_0_25px_5px] shadow-[#3D3027] pt-20">
            <h1 className="text-5xl font-bold">Proyectos</h1>
                <div className="flex md:flex-row flex-col md:flex-wrap max-w-full pb-10 pt-10 justify-center items-center gap-10">
                <Historiatelo />
                <span className="block md:hidden h-0.5 w-full bg-[#2D2420]"></span>
                <Gepro />
                <span className="block md:hidden h-0.5 w-full bg-[#2D2420]"></span>
                <Porfolio />
                </div>
            </article>
        </div>
    );
}
export default Proyectos;