import Github from "../../lib/components/icons/Github.tsx";
import Linkedn from "../../lib/components/icons/Linkedn.tsx";
import Mail from "../../lib/components/icons/Mail.tsx";
import Button from "../../lib/components/web/Button.tsx";
function Inicio() {
    return (
        <div id="inicio" 
        className="flex w-full md:pt-20 animation-on-scroll items-center text-center justify-center">
            <article className="flex md:flex-row flex-col max-w-[95%] md:pl-15 pt-20 mt-20 rounded-2xl md:mt-0 justify-center items-center gap-10 shadow-[0_0_25px_5px] shadow-[#3D3027] ">
                <section className="flex flex-col gap-5 items-center">
                {/* Div titulo */}
                <div className="flex flex-col gap-5 items-center">
                <h1 className="font-bold text-6xl">Soy Javier</h1>
                <p className="flex w-full p-3">Desarrollador Web Full Stack con Experiencia en Tecnologías Modernas</p>
                </div>
                <Button href="/files/JavierHernandezPerez_CV.pdf">
                    Descargar CV
                </Button>
                {/* Div botones enlaces */}
                <div className="flex gap-5">
                <Linkedn className="cursor-pointer duration-500 hover:scale-120" />
                <Github className="cursor-pointer duration-500 hover:scale-120" />
                </div>
                {/* div mail */}
                <div className="flex gap-2 items-center">
                <Mail /><p>javierhpdev@gmail.com</p>
                </div>
                </section>
                {/* imagen */}
                <img src="./images/ImagenPerfilPorfolio.webp" alt="ImagenPortada" className="w-70 md:h-120 md:w-85 object-contain" />
        </article>
        </div>
    );
}

export default Inicio;