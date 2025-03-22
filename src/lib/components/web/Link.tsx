import { useRef } from 'react';

type Props = {
    href: string;
    children?: string;
    className?: string;
    onClick?: () => void;
}


function Link ( {href, className,children, onClick}: Props){
    const spanRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = () => {
        if (spanRef.current) {
            spanRef.current.classList.remove('md:-translate-x-20');
            spanRef.current.classList.add('md:translate-x-0');
        }
    };

    const handleMouseLeave = () => {
        if (spanRef.current) {
            spanRef.current.classList.remove('md:translate-x-0');
            spanRef.current.classList.add('md:-translate-x-30');
        }
    };

    return (
        <a
            href={href}
            className={`${className} flex flex-col overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
            <span
                ref={spanRef}
                className="block bg-blue-500 shadow-lg shadow-blue-500 w-full h-0.5 md:-translate-x-30 md:transition-transform md:duration-500"
            ></span>
        </a>
    );
}

export default Link;
