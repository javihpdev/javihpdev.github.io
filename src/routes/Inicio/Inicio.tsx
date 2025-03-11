import Github from "../../lib/components/icons/Github.tsx";
import Linkedn from "../../lib/components/icons/Linkedn.tsx";
import Button from "../../lib/components/web/Button.tsx";
import cvFile from "../../lib/files/CV Javier Hernandez Perez en el Paro.pdf";
import Mail from "../../lib/components/icons/Mail.tsx";

function Inicio() {
    return (
        <div id="inicio" className="flex w-full items-center justify-center gap-30 h-screen text-white">
            <article className="flex  max-w-[90%] justify-center items-center gap-10 ">
                <section className="flex flex-col gap-5 items-center">
                {/* Div titulo */}
                <div className="flex flex-col gap-5 items-center">
                <h1 className="font-bold text-6xl">Soy Javier</h1>
                <p>Desarrollador Web Full Stack con Experiencia en Tecnologías Modernas</p>
                </div>
                <Button className="hover:bg-green-800 hover:scale-105"
                href={cvFile} download="CV JavierHernandezPerez.pdf">Descargar CV</Button>
                {/* Div botones enlaces */}
                <div className="flex gap-5">
                <Linkedn className="cursor-pointer duration-500 hover:scale-110" />
                <Github className="cursor-pointer duration-500 hover:scale-110" />
                </div>
                {/* div mail */}
                <div className="flex gap-2 items-center">
                <Mail /><p>javierhpdev@gmail.com</p>
                </div>
                </section>
                {/* Div dereho imagen */}
                <div>
            <img src="src/routes/Inicio/perfil.png" alt="ImagenPortada" height={500} width={800} />
            </div>
        </article>
        </div>
    );
}

export default Inicio;