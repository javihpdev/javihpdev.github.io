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

    return (
        <a
            href={href}
            className={`${className} flex flex-col font-semibold overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
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
