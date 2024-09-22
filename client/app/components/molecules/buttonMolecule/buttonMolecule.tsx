import React from "react"
import Buttons from "../../atoms/button"

interface ButtonMoleculeProps {
    resetFilters: () => void  // Recibir la función de reset
}

const ButtonMolecule:React.FC<ButtonMoleculeProps> = ({resetFilters}) => {

    return<>
    <>
    <div className="flex justify-content-center mt-2 md:mt-0">
    <Buttons ButtonAction={resetFilters} icon="pi pi-filter" severityClass="secondary" areaLabel="Bookmark" classButton="mr-2"/>
    <Buttons ButtonAction={resetFilters} icon="pi pi-sliders-v" severityClass="secondary" areaLabel="Bookmark"/>
    </div>
    </>
    </>
}

export default ButtonMolecule