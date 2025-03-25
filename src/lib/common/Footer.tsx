import Copyright from "../components/icons/Copyright"

function Footer(){
    return(

        <footer className="flex w-full shadow-[0_0_25px_5px] justify-center shadow-blue-500">
            <div className="flex md:flex-row flex-col text-center p-3 gap-4">
                <Copyright>
                2025 | Javier Hernández Pérez
                </Copyright>
                <span className="hidden md:block">|</span>
                <span>PORFOLIO PERSONAL</span>
            </div>
        </footer>
    )
}export default Footer