import { useRef, MouseEvent } from 'react';

type Props = {
    href: string;
    children?: string;
    className?: string;
    onClick?: () => void;
}

function Link({ href, className, children, onClick }: Props) {
    const spanRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = () => {
        if (spanRef.current) {
            spanRef.current.classList.remove('lg:-translate-x-20');
            spanRef.current.classList.add('lg:translate-x-0');
        }
    };

    const handleMouseLeave = () => {
        if (spanRef.current) {
            spanRef.current.classList.remove('lg:translate-x-0');
            spanRef.current.classList.add('lg:-translate-x-30');
        }
    };

    const handleClick = (e: MouseEvent) => {
        // Si es un enlace interno (comienza con #)
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const id = href.substring(1); // Quitar el # del principio
            const element = document.getElementById(id);
            
            if (element) {
                // Obtener la altura de la barra de navegación
                const navElement = document.querySelector('div.fixed') as HTMLElement;
                const navHeight = navElement?.offsetHeight || 0;
                
                // Calcular la posición del elemento
                const rect = element.getBoundingClientRect();
                const offsetTop = rect.top + window.pageYOffset;
                
                // Desplazarse dejando un pequeño margen respecto a la barra de navegación
                window.scrollTo({
                    top: offsetTop - navHeight - 20, // 20px de margen adicional
                    behavior: 'smooth'
                });
            }
        }
        
        // Llamar a la función onClick proporcionada (para cerrar el menú, etc.)
        if (onClick) {
            onClick();
        }
    };

    return (
        <a
            data-scroll-to={href}
            href={href}
            className={`${className} flex flex-col font-semibold overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {children}
            <span
                ref={spanRef}
                className="block bg-[#5D4B3F] shadow-lg w-full h-0.5 lg:-translate-x-30 lg:transition-transform lg:duration-500"
            ></span>
        </a>
    );
}

export default Link;