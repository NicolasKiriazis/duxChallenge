"use client"

import { useState } from "react"
import Icons from "../../atoms/icons"
import Logo from "../../atoms/logo"

const Navbar = () => {
    
    const [visible, setVisible] = useState(false)
    const OpenModal = () => {
        setVisible(true)
    }

    return<>
    <div className="bg-custom m-0 h-3rem flex flex-row">

    <div className=" mt-2 ml-2 w-11">
    <span onClick={OpenModal}>
    <Logo className="h-2rem ml-3"/>
    </span>
    </div>

    <div className="my-3 mx-2 w-1 flex flex-row justify-content-center md: justify-content-end ">
    <Icons name="pi-cog" color="white" size={20}/>
    
    </div>

    </div>
    </>
}

export default Navbar