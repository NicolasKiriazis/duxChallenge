import Icons from "../../atoms/icons"
import Logo from "../../atoms/logo"


const Navbar = () => {
    return<>
    <div className="bg-blue-500 m-0 h-5rem flex flex-row">

    <div className="my-4 ml-2 w-11">
    <Logo className="h-2rem ml-3"/>
    </div>

    <div className="my-4 mx-2 w-1 flex flex-row justify-content-center md: justify-content-end">
    <Icons name="pi-cog my-2" color="white" size={25}/>
    </div>

    </div>
    </>
}

export default Navbar