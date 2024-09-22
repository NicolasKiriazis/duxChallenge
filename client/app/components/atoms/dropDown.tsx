import { Dropdown } from "primereact/dropdown"
import React from "react"

interface Options{
    label: string
    value: string
}

interface DropDownProps{
    options: Options[]
    state: string | null
    setState: (value: string) => void
    placeHolder: string
    valueIcon?: (option: any, props: any) => React.ReactNode; // Actualizamos el tipo de valueIcon
}


const DropDown:React.FC<DropDownProps> = ({state, options, setState, placeHolder, valueIcon}) => {
    
     // Template para incluir el icono en el placeholder

return<>
    <Dropdown
        value={state}
        options={options}
        onChange={(e) => setState(e.value)}
        placeholder={placeHolder}
        valueTemplate={valueIcon} // Añadimos la plantilla personalizada
    />
</>
}

export default DropDown
