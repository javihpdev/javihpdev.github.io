import Copyright from "../components/icons/Copyright"

function Footer(){
    return(

        <footer className="flex w-full shadow-[0_0_25px_5px] justify-center shadow-blue-500">
            <div className="flex text-center p-3 gap-2">
                <Copyright />
                <span>2025 Javier Hernández Pérez </span>
            </div>
        </footer>
    )
}export default Footer