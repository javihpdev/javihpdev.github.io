function Contacto(){
    return(
        <div className="flex flex-col gap-2 ">
            <div className="flex gap-5">
                <input type="text" placeholder="Nombre" className="outline-none border-1" />
                <input type="text" placeholder="Mensaje" className="outline-none border-1" />
            </div>
            <textarea rows={8} cols={2} placeholder="Mensaje" className="resize-none border-1  p-3"></textarea>
            <div className="flex justify-end">
            <button>Enviar</button>
            </div>
        </div>
    )
}

export default Contacto