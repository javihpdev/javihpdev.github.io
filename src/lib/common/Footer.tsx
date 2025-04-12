import Copyright from "../components/icons/Copyright"
import Github from "../components/icons/Github"
import Linkedn from "../components/icons/Linkedn"

function Footer(){
    return(

        <footer>
            <div className="flex w-full lg:flex-row flex-col  mt-10 shadow-[0_0_25px_5px] p-5 justify-center items-center  shadow-[#3D3027]">
                <div className="flex md:flex-row flex-col text-center p-3 gap-4">
                    <Copyright>
                    2025 | Javier Hernández Pérez
                    </Copyright>
                    <span className="hidden md:block">|</span>
                    <span>PORFOLIO PERSONAL</span>
                </div>
                <div className="flex items-center justify-center gap-5">
                <span className="hidden lg:block">|</span>
                    <Linkedn className="cursor-pointer duration-500 hover:scale-120" />
                    <Github className="cursor-pointer duration-500 hover:scale-120" />
                </div>
                
            </div>
        </footer>
    )
}export default Footer