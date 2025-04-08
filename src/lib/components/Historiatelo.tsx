function Historiatelo (){
    return(
        <section className="flex flex-col justify-center items-center w-90 p-5 rounded-none shadow-none lg:shadow-[0_0_25px_5px] lg:shadow-[#3D3027] lg:rounded-2xl gap-5">
            {/* Div para la imagen del proyecto */}
            <div className="flex items-center">
            <a href="https://historiatelo.org/" target="_blank" className="shadow-[0_0_25px_5px]  shadow-[#3D3027] rounded-full">
                <img src="./images/historiatelo.png" alt="Imagen Proyecto Historiatelo" className="w-40 h-40transition-all duration-500 hover:scale-110" />
            </a>
            </div>
            <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold">Historiatelo</span>
            <span>-Página y aplicación web Historiatelo: Svelte, Tailwindcss, TypeScrip</span>
            <span>Historiatelo aspira a ser una plataforma de acceso libre para la edición y consulta de contenido diverso elaborado por la comunidad global.</span>
            </div>
            {/* Div para las etiquetas de los lenguajes */}
            <div className="flex items-center gap-3">
                <a href="https://svelte.dev/docs/svelte/overview" target="_blank"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 shadow-orange-600 bg-white opacity-80 text-[0.8rem] text-orange-500 border-orange-500">
                    SVELTE
                </a>
                <a href="https://www.typescriptlang.org/docs/" target="_blank"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110 shadow-blue-600 bg-white opacity-80 text-[0.8rem] text-blue-500 border-blue-500">
                    TYPESCRIPT</a>
                <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] transition-all duration-400 hover:scale-110  shadow-teal-600 bg-white opacity-80 text-[0.8rem] text-teal-500 border-teal-500">
                    TAILWINDCSS</a>
            </div> 
        </section>
    )
}
export default Historiatelo