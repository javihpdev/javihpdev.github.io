function geproBeta() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Beta GePro</title>
            </head>
            <body className="relative w-full min-h-screen h-screen bg-[url('/images/pixels14.jpg')] bg-cover bg-center bg-fixed m-0">
                <div className="absolute flex flex-col w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center gap-6">
                    <img src="/images/LogoEmpresa.png" alt="Imagen Empresa" className="md:w-100 md:h-100 w-50 h-50" />
                    <span className="md:text-[5em] text-[3em] text-center text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-orange-500">
                        Proyecto GePro En Proceso de Creación
                    </span>
                    <a
                        href="https://javihpdev.github.io/"
                        className="text-center cursor-pointer bg-orange-400 hover:bg-orange-700 text-white font-bold p-4 rounded-md w-[17em]"
                    >
                        VOLVER A MI PORFOLIO
                    </a>
                </div>
            </body>
        </html>
    );
}
export default geproBeta;