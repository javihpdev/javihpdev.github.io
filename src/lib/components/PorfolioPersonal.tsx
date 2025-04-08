import LinkExternal from "./icons/LinkExternal"

function Porfolio (){
    return(
        <section className="flex flex-col justify-center items-center w-90 p-5 rounded-none shadow-none lg:shadow-[0_0_25px_5px] lg:shadow-[#3D3027] lg:rounded-2xl gap-5">
            {/* Div para la imagen del proyecto */}
            <div className="flex relative justify-center items-center transition-all duration-500 hover:scale-110">
            <a href="https://github.com/javihpdev/javihpdev.github.io" target="_blank" className="flex">
                <img src="./images/imagenPorfolio.png" alt="Imagen Proyecto Historiatelo" className="bg-white shadow-[0_0_25px_5px]  shadow-[#3D3027] rounded-full w-40 h-40" />
            </a>
            <LinkExternal classNameLink="absolute top-0 right-[-20px]" />
            </div>
            <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold">Porfolio Personal</span>
            <span className="underline">(Enlace al código en GitHub)</span>
            <span>-Página web Porfolio Personal: React, Tailwindcss, TypeScript.</span>
            <span>Muestra información sobre mí y mis proyectos, para ver el código fuente clica en la imagen!</span>
            </div>
            {/* Div para las etiquetas de los lenguajes */}
            <div className="flex items-center gap-3">
                <a href="https://react.dev/learn" target="_blank"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 bg-white opacity-80 shadow-blue-400 text-[0.8rem] text-[#61DBFB] border-[#61DBFB]">
                    REACT
                </a>
                <a href="https://www.typescriptlang.org/docs/" target="_blank"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 bg-white opacity-80 shadow-blue-600 text-[0.8rem] text-blue-500 border-blue-500">
                    TYPESCRIPT</a>
                <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 bg-white opacity-80 shadow-teal-600 text-[0.8rem] text-teal-500 border-teal-500">
                    TAILWINDCSS</a>
            </div> 
        </section>
    )
}
export default Porfolio