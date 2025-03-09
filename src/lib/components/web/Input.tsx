type Props = {
    type?: string
    placeholder?: string
    className?: string
}

function Input({type="text", placeholder, className}: Props){
    return(
        <input type={type} placeholder={placeholder} className={className} />
    )
}
export default Input