import { useEffect, useRef, useState } from 'react';
import Button from "../../lib/components/web/Button";
import Input from "../../lib/components/web/Input";


function Contacto() {
    const contactoRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 4000);
        };

        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && isScrolling) {
                    entry.target.classList.add('opacity-100');
                }
            });
        });

        if (contactoRef.current) {
            observer.observe(contactoRef.current);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (contactoRef.current) {
                observer.unobserve(contactoRef.current);
            }
        };
    }, [isScrolling]);

    const [asunto, setAsunto] = useState('');
    const [nombre, setNombre] = useState('');
    const [errorNombre, setErrorNombre] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false); // Estado para el error del teléfono
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);

    const phoneRegex = /^[0-9]+$/;

    /**
     * Funcion para la expresion regular del telefono
     * @param e 
     */
    const handlePhoneChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        if (value === '' || phoneRegex.test(value)) {
            setPhone(value);
            setPhoneError(false); // Limpiar el error si es válido
        } else {
            setPhoneError(true); // Establecer el error si no es válido
        }
    };

    /**
     * Funcion para la expresion regular del nombre
     * @param e 
     */
    const handleNombreChange = (e: { target: { value: any; }; }): void => {
      const value = e.target.value;
      setNombre(value); // Actualiza el estado con cada cambio

      if (value.length >= 2 || value === '') {
          setErrorNombre(false);
      } else {
          setErrorNombre(true);
      }
  };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://javihpdev-github-io-backend.vercel.app/api/enviar-correo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre,
                    email,
                    phone,
                    asunto,
                    mensaje,
                }),
            });

            const responseJson = await response.json();
            console.log('Respuesta del servidor:', responseJson);

            if (response.ok) {
                alert('Mensaje enviado exitosamente!');
                setNombre('');
                setEmail('');
                setPhone('');
                setAsunto('');
                setMensaje('');
            } else {
                alert(`Hubo un error: ${responseJson.message}`);
            }
        } catch (error) {
            alert('Error en la solicitud. Intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contacto" ref={contactoRef} className="fade-in flex flex-col w-full md:pt-20 justify-center text-center items-center gap-3 opacity-0 transition-opacity duration-4000">
            <article className="flex flex-col gap-10 md:max-w-[90%] max-w-[95%] justify-center rounded-2xl items-center shadow-[0_0_25px_5px] shadow-[#fff] p-10">
                <h1 className="text-5xl font-bold">Contacta conmigo aquí</h1>
                <form className="flex flex-col md:w-300 w-200 max-w-[90%] justify-center items-center md:p-5 gap-3" onSubmit={handleSubmit}>
                    <div className="flex md:flex-row flex-col w-full gap-3 md:gap-8">
                        <Input placeholder="Tu Nombre" 
                        className={`outline-none w-full border-1 rounded-lg p-2 ${errorNombre ? 'border-red-500' : ''} `}
                        value={nombre} 
                        onChange={(e) => handleNombreChange(e)} />
                        <Input type="email" placeholder="Tu Email" className="outline-none border-1 rounded-lg w-full p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                       
                        <Input
                            type="text"
                            placeholder="Teléfono (opcional)"
                            className={`outline-none border-1 rounded-lg w-full p-2 ${phoneError ? 'border-red-500' : ''}`}
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>

                    {errorNombre && <p className='text-red-800'>Introduce un nombre mayor o igual a dos carácteres</p>}
                    {phoneError && <p className="text-red-800">Por favor, introduce solo números.</p>} 
                    
                    <div className="flex w-full gap-8">
                        <Input placeholder="Asunto" className="outline-none border-1 rounded-lg p-2 w-full" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
                    </div>
                    <textarea rows={5} cols={2} placeholder="Mensaje" className="w-full placeholder-[#2D2420] resize-none outline-none border-1 rounded-md p-3" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                    <div className="flex md:justify-end justify-center w-full ">
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Enviando...' : 'Enviar'}
                        </Button>
                    </div>
                </form>
            </article>
        </div>
    );
}

export default Contacto;