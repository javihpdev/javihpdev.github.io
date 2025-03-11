import { useRef } from 'react';

type Props = {
    href: string;
    children?: string;
    className?: string;
}


function Link ( {href, className,children}: Props){
    const spanRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = () => {
        if (spanRef.current) {
            spanRef.current.classList.remove('-translate-x-20');
            spanRef.current.classList.add('translate-x-0');
        }
    };

    const handleMouseLeave = () => {
        if (spanRef.current) {
            spanRef.current.classList.remove('translate-x-0');
            spanRef.current.classList.add('-translate-x-20');
        }
    };

    return (
        <a
            href={href}
            className={`${className} flex flex-col overflow-hidden`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <span
                ref={spanRef}
                className="block bg-green-500 w-full h-0.5 -translate-x-20 transition-transform duration-300"
            ></span>
        </a>
    );
}

export default Link;
