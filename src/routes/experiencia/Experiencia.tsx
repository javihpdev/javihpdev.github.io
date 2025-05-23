import LinkExternal from "../../lib/components/icons/LinkExternal";

function Experiencia() {
  return (
    <div
      id="experiencia"
      className="fade-in animate-on-scroll flex flex-col w-full md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
    >
      <article className="flex flex-col w-full max-w-[95%] rounded-2xl justify-center items-center gap-10 shadow-[0_0_25px_5px] shadow-[#3D3027] p-10 md:p-20">
        <h1 className="flex w-full  flex-col gap-2 text-5xl font-bold justify-center items-center">
          Experiencia Profesional
        </h1>

        <div className="flex w-full  flex-col gap-5 justify-center items-center">
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
              className="w-25 hover:scale-110 transition-all duration-400"
              src="./images/typescript.png"
              alt="imagen TypeScript"
            />
          </div>
          <span className="block h-0.4 md:w-200 bg-[#2D2420]"></span>
          <div className="relative flex flex-col justify-center items-center shadow-[0_0_25px_5px] rounded-xl bg-white p-5 shadow-[#3D3027] hover:scale-110 transition-all duration-600">
          <a href="https://tipomedia.com/" target="_blank">
            <img
              src="./images/tipomedia_logo.png"
              alt="logo tipomedia"
            />
          </a>
          <LinkExternal classNameLink="absolute top-0 right-[-30px]" />
          </div>
        </div>
      </article>
    </div>
  );
}
export default Experiencia;
