import { useRef, useEffect, useState } from "react";

function Estudios() {
  const estudiosRef = useRef(null);
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

    if (estudiosRef.current) {
      observer.observe(estudiosRef.current);
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (estudiosRef.current) {
          observer.unobserve(estudiosRef.current);
        }
      };
    }, [isScrolling]);

  return (
    <div
      id="estudios"
      ref={estudiosRef}
      className="fade-in flex flex-col w-full md:min-h-screen md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
    >
      <article className="flex flex-col w-full max-w-[95%] justify-center items-center gap-10 shadow-[0_0_25px_5px] shadow-[#3D3027] p-20">
        <h1 className="text-5xl">Estudios</h1>
        <p className="flex md:w-full w-70 flex-col gap-2 justify-center items-center">
          Formación Académica: Desarrollo de Aplicaciones Web (Grado Superior):
          LinkiaFP. Sólidos conocimientos en lenguajes de programación web:
          JavaScript: Desarrollo de lógica interactiva en el lado del cliente. PHP:
          Desarrollo de lógica del lado del servidor. HTML: Estructuración de
          contenido web. CSS: Estilos y diseño visual de páginas web.
        </p>
        <a href="https://linkiafp.es/?utm_source=google&utm_medium=cpc&utm_campaign=Search_bofu_ON_ES_AO_Pros_Brand_Generic&gad_source=1" target="_blank">
          <img src="./images/nlogo-linkia.webp" alt="logo linkiafp" className="w-50" />
        </a>
      </article>
    </div>
  );
}

export default Estudios;