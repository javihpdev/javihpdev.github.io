import Gepro from "../../lib/components/Gepro";
import Historiatelo from "../../lib/components/Historiatelo";
import Porfolio from "../../lib/components/PorfolioPersonal";

function Proyectos(){
    return(
        <div id="proyectos"
        className="fade-in animate-on-scroll flex flex-col w-full justify-center text-center items-center gap-10 opacity-0 transition-opacity duration-4000"
      >
            <article className="flex flex-col w-full max-w-[95%] justify-center rounded-2xl items-center gap-10 shadow-[0_0_25px_5px] shadow-[#3D3027] pt-20">
            <h1 className="text-5xl font-bold">Proyectos</h1>
                <div className="flex lg:flex-row flex-col lg:flex-wrap max-w-full pb-10 pt-10 justify-center items-center gap-10">
                <Historiatelo />
                <span className="block lg:hidden h-0.5 w-full bg-[#2D2420]"></span>
                <Gepro />
                <span className="block lg:hidden h-0.5 w-full bg-[#2D2420]"></span>
                <Porfolio />
                </div>
            </article>
        </div>
    );
}
export default Proyectos;