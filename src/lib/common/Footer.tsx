import Copyright from "../components/icons/Copyright"

function Footer(){
    return(

        <footer className="flex w-full mt-10 shadow-[0_0_25px_5px] justify-center shadow-[#3D3027]">
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