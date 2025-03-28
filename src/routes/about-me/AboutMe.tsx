import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    scrollTimeout: ReturnType<typeof setTimeout>;
  }
}

function AboutMe() {
  const aboutMeRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 4000); // Ajusta el tiempo de espera según sea necesario
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isScrolling) {
          entry.target.classList.add('opacity-100');
        }
      });
    });

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, [isScrolling]);

  return (
    <div
      id="aboutMe"
      ref={aboutMeRef}
      className="fade-in flex flex-col w-full md:min-h-screen md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
    >
      <article className="flex flex-col max-w-[95%] justify-center items-center gap-3 shadow-[0_0_25px_5px] shadow-blue-500 p-20">
        <div className="flex justify-center items-center">
          <p className="text-5xl w-70">Sobre Mí</p>
        </div>
        <p className="flex md:w-full w-70 flex-col gap-2 justify-center items-center">
          Soy una persona proactiva, con gran capacidad de aprendizaje y adaptación a nuevas tecnologías. Me apasiona el desarrollo web y me mantengo actualizado sobre las últimas tendencias y mejores prácticas. Busco oportunidades para seguir creciendo profesionalmente y contribuir al éxito de proyectos innovadores.
        </p>
      </article>
    </div>
  );
}

export default AboutMe;