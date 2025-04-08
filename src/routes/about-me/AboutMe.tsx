function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="fade-in animate-on-scroll flex flex-col w-full md:min-h-screen md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
    >
      <article className="flex flex-col w-full max-w-[95%] justify-center rounded-2xl items-center gap-3 shadow-[0_0_25px_5px] shadow-[#3D3027] p-10 md:p-20">
        <div className="flex justify-center items-center">
          <p className="font-bold text-5xl ">Sobre Mí</p>
        </div>
        <p className="flex w-full flex-col gap-2 justify-center items-center">
          Soy una persona proactiva, con gran capacidad de aprendizaje y adaptación a nuevas tecnologías. Me apasiona el desarrollo web y me mantengo actualizado sobre las últimas tendencias y mejores prácticas. Busco oportunidades para seguir creciendo profesionalmente y contribuir al éxito de proyectos innovadores.
        </p>
      </article>
    </div>
  );
}

export default AboutMe;