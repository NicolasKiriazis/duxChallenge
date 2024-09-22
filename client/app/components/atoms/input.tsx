import { InputText } from "primereact/inputtext"
import React from "react"

interface InputProps {
    state: string
    setState: (value: string) => void
    className?: string
}

// Este componente recibe un saveState para guardar en estado el value que escribis
// Recibe el setState por props, por eso es reutilizable


const Input:React.FC<InputProps> = ({state, setState, className}) => { 
    return<>
    <InputText
        value={state}
        onChange={(e) => setState(e.target.value) }
        className={className}
    />
    </>
}

export default Input