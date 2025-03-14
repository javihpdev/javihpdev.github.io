type Props = {
    className?: string;
    children?: string;
    type?: "submit" | "reset" | "button";
    onClick?: ()=>void;
    href?: string;
    disabled?: boolean;
}

function Button({ children, className ,type, onClick, href, disabled }: Props ) {
    const defaultClasses = "bg-green-500 cursor-pointer rounded-md border-2 p-3";
    const combinedClasses = `${defaultClasses} ${className}`.trim();

    // ANCHOR - Fijate en el return hay un operador ternario
    return href ? (
        // Si se pasa la propiedad href, renderizamos un enlace con el atributo download
        <a href={href} download className={combinedClasses}>
            {children}
        </a>
    ) : (
        // Si no se pasa href, renderizamos un botón normal
        <button type={type} disabled={disabled} className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
