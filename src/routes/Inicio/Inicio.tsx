import Button from "../../lib/components/web/Button.tsx";
import cvFile from "../../lib/files/CV Javier Hernandez Perez en el Paro.pdf";

function Inicio() {
    return (
        <div className="flex items-center justify-center gap-30 h-screen text-white">
            <div className="flex flex-col items-center gap-3">
                <h1 className="font-bold text-6xl">Soy Javier</h1>
                <p>Desarrollador de Aplicaciones WEB</p>
                <Button href={cvFile} download="CV JavierHernandezPerez.pdf">Descargar CV</Button>
            </div>
            <img src="src/routes/Inicio/perfil.png" alt="ImagenPortada" height={500} width={800} />
        </div>
    );
}

export default Inicio;