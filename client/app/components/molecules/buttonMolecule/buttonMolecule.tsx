import Buttons from "../../atoms/button"


const ButtonMolecule = () => {

    const prueba = () => {
        console.log("A estos botones no le metí mucho power")
    }

    return<>
    <>
    <div className="flex justify-content-center mt-2 md:mt-0">
    <Buttons ButtonAction={prueba} icon="pi pi-filter" severityClass="secondary" areaLabel="Bookmark" classButton="mr-2"/>
    <Buttons ButtonAction={prueba} icon="pi pi-sliders-v" severityClass="secondary" areaLabel="Bookmark"/>
    </div>
    </>
    </>
}

export default ButtonMolecule