

function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="flex flex-col w-full min-h-screen md:pt-20 justify-center text-center items-center gap-3"
    >
      <article className="flex flex-col max-w-[95%] justify-center items-center gap-3 shadow-[0_0_25px_5px] shadow-blue-500 p-20">
      <div className="flex justify-center items-center">
        <p className="text-5xl w-70">Sobre Mí</p>
      </div>
      <p className="flex md:w-full w-70 flex-col gap-2 justify-center items-center">
        Soy una persona proactiva, con gran capacidad de aprendizaje y
        adaptación a nuevas tecnologías. Me apasiona el desarrollo web y me
        mantengo actualizado sobre las últimas tendencias y mejores prácticas.
        Busco oportunidades para seguir creciendo profesionalmente y contribuir
        al éxito de proyectos innovadores.
      </p>
      </article>
    </div>
  );
}

export default AboutMe;
