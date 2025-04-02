import { useRef, useState, useEffect } from "react";

function Experiencia() {
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

    const observer = new IntersectionObserver((entries) => {
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
      window.removeEventListener("scroll", handleScroll);
      if (experienciaRef.current) {
        observer.unobserve(experienciaRef.current);
      }
    };
  }, [isScrolling]);
  return (
    <div
      id="experiencia"
      ref={experienciaRef}
      className="fade-in flex flex-col w-full md:min-h-screen md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
    >
      <article className="flex flex-col w-full max-w-[95%] rounded-2xl justify-center items-center gap-10 shadow-[0_0_25px_5px] shadow-[#3D3027] p-10 md:p-20">
        <h1 className="flex w-full  flex-col gap-2 text-5xl font-bold justify-center items-center">
          Experiencia Profesional
        </h1>

        <div className="flex w-full  flex-col text-lg gap-5 justify-center items-center">
          TipoMedia (Gestión, Diseño y Mantenimiento de Páginas Web)
          Participación activa en el desarrollo y mantenimiento de diversos
          proyectos web. Experiencia en la gestión integral de sitios web, desde
          el diseño inicial hasta la implementación y el mantenimiento continuo.
          <span>
            Colaboración en el proyecto "Historiatelo", donde he profundizado en
            el uso de:
          </span>
          <div className="flex max-w-[95%] flex-wrap md:w-full w-70 md:gap-20 gap-4 justify-center items-center">
            <img
              className="w-30 hover:scale-110 transition-all duration-400"
              src="./images/svelte.png"
              alt="imagen Svelte"
            />
            <img
              className="w-30 hover:scale-110 transition-all duration-400"
              src="./images/tailwindcss.svg"
              alt="imagen Tailwind CSS"
            />
            <img
              className="w-30 hover:scale-110 transition-all duration-400"
              src="./images/typescript.png"
              alt="imagen TypeScript"
            />
          </div>
          <span className="block h-0.4 md:w-200 bg-[#2D2420]"></span>
          <div className="flex flex-col justify-center items-center gap- ">
          <a href="https://tipomedia.com/" target="_blank">
            <img
              src="./images/tipomedia_logo.png"
              alt="logo tipomedia"
              className="bg-white p-4 rounded-lg hover:scale-110 transition-all duration-600"
            />
          </a>
          <span>↑</span>
          <span>Clica en la imagen para más información</span>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Experiencia;
