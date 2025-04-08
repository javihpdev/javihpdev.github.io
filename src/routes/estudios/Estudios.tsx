function Estudios() {
  return (
    <div
      id="estudios"
      className="fade-in animate-on-scroll flex flex-col w-full  md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000"
    >
      <article className="flex flex-col w-full max-w-[95%] justify-center rounded-2xl items-center gap-10 shadow-[0_0_25px_5px] shadow-[#3D3027] p-10 md:p-20">
        <h1 className="text-5xl font-bold">Estudios</h1>
        <ul className="flex w-full  flex-col gap-2 justify-center items-center">
          <li >Desarrollo de Aplicaciones Web (Grado Superior)</li>
          <li className="text-2xl font-bold">LinkiaFP</li>
          <ul>Conocimientos en lenguajes de programación web:</ul>
          <li>JavaScript: Desarrollo de lógica interactiva en el lado del cliente.</li> 
          <li>HTML: Estructuración de contenido web.</li>
          <li>CSS: Estilos y diseño visual de páginas web.</li>
          <li>PHP: Desarrollo de lógica del lado del servidor. </li>
        </ul>
        <a href="https://linkiafp.es/?utm_source=google&utm_medium=cpc&utm_campaign=Search_bofu_ON_ES_AO_Pros_Brand_Generic&gad_source=1" target="_blank">
          <img src="./images/nlogo-linkia.webp" alt="logo linkiafp" className="w-50" />
        </a>
      </article>
    </div>
  );
}

export default Estudios;