import ButtonMolecule from "../../molecules/buttonMolecule/buttonMolecule"
import DropDownMolecule from "../../molecules/dropDownMolecule/dropDownMolecule"
import InputMolecule from "../../molecules/inputMolecule/InputMolecule"

const SearchOrganisim = () => {
    return<>
    
    <div className="flex flex-column md:flex-row justify-content-between">
    <div className="sm:w-full md:flex flex-row justify-content-between">
    <InputMolecule/>
    <DropDownMolecule placeHolder="Seleccione el Estado"/>
    <DropDownMolecule placeHolder="Seleccione el Sector"/>
    </div>

    <div className="">
    <ButtonMolecule/>
    </div>

    </div>

    
    </>
}

export default SearchOrganisim