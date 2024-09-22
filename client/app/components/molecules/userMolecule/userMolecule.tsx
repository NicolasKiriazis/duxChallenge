import Buttons from "../../atoms/button"


const UserMolecule = () => { 

    const Action = () => {
        console.log("prueba")
    }

    return<>

    <div className="bg-orange-500 flex flex-column md:flex-row justify-content-between">
    <div className="flex justify-content-center">
    <h1 className="text-3xl md:ml-5">Usuarios</h1>
    </div>
    
    <div className="flex justify-content-center md:mr-5 my-3">
    <Buttons texto="+ Nuevo Usuario" ButtonAction={Action} classButton="h-3rem "/>
    </div>
    </div>
    
    </>
}

export default UserMolecule