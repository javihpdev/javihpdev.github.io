import Github from "../../lib/components/icons/Github.tsx";
import Linkedn from "../../lib/components/icons/Linkedn.tsx";
import Mail from "../../lib/components/icons/Mail.tsx";
import Button from "../../lib/components/web/Button.tsx";
function Inicio() {
    return (
        <div id="inicio" 
        className="flex w-full md:pt-20 items-center text-center justify-center  h-screen max-h-screen text-white">
            <article className="flex md:flex-row flex-col max-w-[95%] justify-center items-center gap-10 p-20 shadow-[0_0_25px_5px] shadow-blue-500 ">
                <section className="flex flex-col gap-5 items-center">
                {/* Div titulo */}
                <div className="flex flex-col gap-5 items-center">
                <h1 className="font-bold text-6xl">Soy Javier</h1>
                <p>Desarrollador Web Full Stack con Experiencia en Tecnologías Modernas</p>
                </div>
                <Button href="/files/CV_JavierHernandezPerez.pdf">
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
                {/* Div dereho imagen */}
                <div className="hidden md:flex justify-center items-center">
                    <img src="./images/Diseño sin título.svg" alt="ImagenPortada" className=" h-60 w-60 md:h-120 md:w-100" />
                </div>
        </article>
        </div>
    );
}

export default Inicio;