import { useState } from 'react';
import Button from "../../lib/components/web/Button";
import Input from "../../lib/components/web/Input";

function Contacto() {
    const [asunto, setAsunto] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await fetch('https://javihpdev-github-io-backend.vercel.app/api/enviar-correo', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    asunto,
                    nombre,
                    email,
                    mensaje,
                }),
            });

            const responseJson = await response.json();
            console.log('Respuesta del servidor:', responseJson); 

            if (response.ok) {
                alert('Mensaje enviado exitosamente!');
            } else {
                alert(`Hubo un error: ${responseJson.message}`);
            }
        } catch (error) {
            alert('Error en la solicitud. Intenta nuevamente.');
        } finally {
            setLoading(false);  // Desactivar el estado de carga
        }
    };

    return (
        <div id="contacto" className="flex md:pt-20 justify-center items-center min-h-screen  ">
        <article className="flex md:max-w-[90%] max-w-[95%] justify-center items-center gap-3 shadow-[0_0_25px_5px] shadow-blue-500 p-10 md:p-20">
        <form className="flex flex-col md:w-300 w-200 md:max-w-[90%] justify-center items-center md:p-5 gap-3" onSubmit={handleSubmit}>
            <div className="flex w-full justify-center gap-8">
            <Input
                    placeholder="Asunto"
                    className="outline-none border-1 rounded-lg p-2 md:w-110 w-70 "
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                />
            </div>
            <div className="flex md:flex-row flex-col w-full gap-3 md:gap-8">
                <Input
                    placeholder="Nombre"
                    className="outline-none w-full border-1 rounded-lg p-2"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    className="outline-none border-1 rounded-lg w-full p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <textarea
                rows={5}
                cols={2}
                placeholder="Mensaje"
                className="w-full  resize-none outline-none border-1 rounded-md p-3"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <div className="flex md:justify-end justify-center w-full ">
                <Button
                    className="px-5 hover:bg-blue-800 hover:scale-105"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </Button>
            </div>
        </form>
        </article>
        </div>
    );
}

export default Contacto;
