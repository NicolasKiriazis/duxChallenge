import Buttons from "../../atoms/button"


const ButtonMolecule = () => {

    const prueba = () => {
        console.log("A estos botones no le metí mucho power")
    }

    return<>
    <>
    <div className="bg-yellow-400">
    <Buttons ButtonAction={prueba} icon="pi pi-filter" severityClass="secondary" areaLabel="Bookmark"/>
    <Buttons ButtonAction={prueba} icon="pi pi-sliders-v" severityClass="secondary" areaLabel="Bookmark"/>
    </div>
    </>
    </>
}

export default ButtonMolecule