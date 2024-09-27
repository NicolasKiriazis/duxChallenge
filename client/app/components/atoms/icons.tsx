import React from "react"
import { InputIcon } from 'primereact/inputicon';

interface IconsProps{
    name: string; // El nombre del icono a mostrar
    size?: number; // Tamaño opcional
    color?: string; // Color opcional
    className?: string
}

const Icons:React.FC<IconsProps> = ({name,size,color}) => {
    return<>
    <InputIcon className={`pi ${name}`} style={{ fontSize: size, color }}></InputIcon>
    </>
}

export default Icons