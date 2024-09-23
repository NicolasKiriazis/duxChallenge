import React from "react"
import Buttons from "../../atoms/button"
import ButtonMolecule from "../buttonMolecule/buttonMolecule"

interface UserMoleculeProps{
    action: () => void
}

const UserMolecule:React.FC<UserMoleculeProps> = ({action}) => { 

    return<>

    <div className="flex flex-column md:flex-row justify-content-between">
    <div className="flex justify-content-center">
    <h1 className="text-3xl md:ml-5">Usuarios</h1>
    </div>
    
    <div className="flex justify-content-center md:mr-5 my-3">
    <Buttons texto="+ Nuevo Usuario" ButtonAction={action} classButton="h-3rem bg-blue-500"/>
    </div>
    </div>

    
    </>
}

export default UserMolecule