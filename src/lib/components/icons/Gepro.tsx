type Props = {
    className?: string;
  };

function Gepro ({ className }: Props){
    return(
        <section className="flex flex-col justify-center items-center p-5 shadow-[0_0_25px_5px] shadow-blue-500 rounded-2xl gap-10 ">
            {/* Div para la imagen del proyecto */}
            <div className="flex items-center">
            <a href="https://historiatelo.org/" target="_blank" className="shadow-[0_0_25px_5px]  shadow-blue-500 rounded-full">
                <img src="public/images/LogoEmpresa.png" alt="Imagen Proyecto Historiatelo"
                    className="w-40 h-40 transition-all duration-500 hover:scale-110" />
            </a>
            </div>
            {/* Div para las etiquetas de los lenguajes */}
            <div className="flex items-center gap-3">
                <a href="https://svelte.dev/docs/svelte/overview" 
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] shadow-orange-600 bg-gray-300 text-[0.8rem] text-orange-500 border-orange-500">
                    SVELTE
                </a>
                <a href="https://www.typescriptlang.org/docs/"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] shadow-blue-600 bg-gray-300 text-[0.8rem] text-blue-500 border-blue-500">
                    TYPESCRIPT</a>
                <a href="https://www.typescriptlang.org/docs/"
                className="p-1 rounded-4xl border-1 shadow-[0_0_10px_5px] shadow-teal-600 bg-gray-300 text-[0.8rem] text-teal-500 border-teal-500">
                    TAILWINDCSS</a>
            </div>
        </section>
    )
}
export default Gepro