import Button from "../../lib/components/web/Button"
import Input from "../../lib/components/web/Input"

function Contacto(){
    return(
        <div id="contacto" className="flex flex-col w-full justify-center items-center p-5 gap-3">
            <div className="flex w-200 gap-8 ">
                <Input placeholder="Nombre" className="outline-none border-1 rounded-lg p-2 flex-1" />
                <Input placeholder="Email" className="outline-none border-1 rounded-lg p-2 flex-1" />
            </div>
            <textarea rows={5} cols={2} placeholder="Mensaje" className="w-200 resize-none outline-none border-1 rounded-md  p-3"></textarea>
            <div className="flex justify-end w-200">
            <Button href="/" className="px-5 hover:bg-green-800 hover:scale-105">Enviar</Button>
            </div>
        </div>
    )
}

export default Contacto