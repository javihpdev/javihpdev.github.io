

function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="flex flex-col w-full h-screen justify-center items-center p-5 gap-3"
    >
      <article className="flex flex-col max-w-[90%] justify-center items-center gap-3 shadow-2xl p-20">
      <div className="flex justify-center items-center">
        <p className="text-5xl">Sobre Mí</p>
      </div>
      <p className="text-xl">
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
