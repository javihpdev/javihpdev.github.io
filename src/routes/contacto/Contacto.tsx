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
            // ANCHOR - Esta ruta que habra que cambiarla cuando monte la web
            const response = await fetch('http://localhost:5000/enviar-correo', {
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
        <form id="contacto" className="flex flex-col w-full justify-center items-center p-5 gap-3" onSubmit={handleSubmit}>
            <div className="flex w-200 gap-8">
            <Input
                    placeholder="Asunto"
                    className="outline-none border-1 rounded-lg p-2 flex-1"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                />
                <Input
                    placeholder="Nombre"
                    className="outline-none border-1 rounded-lg p-2 flex-1"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    className="outline-none border-1 rounded-lg p-2 flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <textarea
                rows={5}
                cols={2}
                placeholder="Mensaje"
                className="w-200 resize-none outline-none border-1 rounded-md p-3"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <div className="flex justify-end w-200">
                <Button
                    className="px-5 hover:bg-green-800 hover:scale-105"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </Button>
            </div>
        </form>
    );
}

export default Contacto;
