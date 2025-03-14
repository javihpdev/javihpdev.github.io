type Props = {
    type?: string
    placeholder?: string
    className?: string
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({type="text", placeholder, className, value, onChange}: Props){
    return(
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} />
    )
}
export default Input