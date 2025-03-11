import Github from "../../lib/components/icons/Github.tsx";
import Linkedn from "../../lib/components/icons/Linkedn.tsx";
import Button from "../../lib/components/web/Button.tsx";
import cvFile from "../../lib/files/CV Javier Hernandez Perez en el Paro.pdf";

function Inicio() {
    return (
        <div id="inicio" className="flex items-center justify-center gap-30 h-screen text-white">
            <div className="flex flex-col items-center gap-3">
                <h1 className="font-bold text-6xl">Soy Javier</h1>
                <p>Desarrollador Web Full Stack con Experiencia en Tecnologías Modernas</p>
                <Button href={cvFile} download="CV JavierHernandezPerez.pdf">Descargar CV</Button>
                <div className="flex gap-5">
                <Linkedn className="cursor-pointer" />
                <Github className="cursor-pointer" />
                </div>
            </div>
            <img src="src/routes/Inicio/perfil.png" alt="ImagenPortada" height={500} width={800} />
        </div>
    );
}

export default Inicio;