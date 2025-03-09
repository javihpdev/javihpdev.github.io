type Props = {
    className?: string;
    children?: string;
    href: string; 
    download?: string;
}

function Button({ children, className = "", href, download }: Props) {
    const defaultClasses = "bg-green-500 cursor-pointer rounded-md border-2 p-3";
    const combinedClasses = `${defaultClasses} ${className}`.trim();

    return (
        <a href={href} className={combinedClasses} download={download}> {children}</a>
    );
}

export default Button;
