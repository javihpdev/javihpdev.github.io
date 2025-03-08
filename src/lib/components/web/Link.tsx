type Props = {
    href: string;
    children?: string;
    className?: string;
}

let Link = ({href, children, className }: Props) => { 
return(
    <a href={href} className={className}>
        {children}
    </a>
)
};
export default Link