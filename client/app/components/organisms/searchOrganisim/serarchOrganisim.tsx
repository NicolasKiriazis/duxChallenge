import React from "react"
import ButtonMolecule from "../../molecules/buttonMolecule/buttonMolecule"
import DropDownMolecule from "../../molecules/dropDownMolecule/dropDownMolecule"
import InputMolecule from "../../molecules/inputMolecule/InputMolecule"
import {Options} from "../../../types/type"


interface SearchOrganisimProps {
    setName: (name:string) => void
    name: string

    setState:(state: string) => void
    state: string

    setSector:(sector: string) => void
    sector: string

    estadoOptions:Options[]

    sectorOptions:Options[]

}

const SearchOrganisim:React.FC<SearchOrganisimProps>= ({name, setName, state, setState, sector, setSector, estadoOptions, sectorOptions }) => {

    return<>
    
    <div className="flex flex-column md:flex-row justify-content-between">

    <div className="sm:w-full md:flex flex-row justify-content-between">
    <InputMolecule state={name} setState={setName}/>
    <DropDownMolecule state={state} setState={setState} placeHolder="Seleccione el Estado" options={estadoOptions}/>
    <DropDownMolecule state={sector} setState={setSector} placeHolder="Seleccione el Sector" options={sectorOptions}/>
    </div>

    <div className="">
    <ButtonMolecule/>
    </div>

    </div>

    
    </>
}

export default SearchOrganisim