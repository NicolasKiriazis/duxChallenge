import { Button } from 'primereact/button';
import React from 'react'

// El botón recibe por props lo que hace en el OnClick y el texto a mostrar además de la clase para modificar su estilo si se necesita


interface ButtonProps {
    ButtonAction: () => void
    texto: string
    classButton?: string
    icon?: string
    severityClass?: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help' | 'contrast'; // Especificamos los valores permitidos
    areaLabel?: string
}

const Buttons:React.FC<ButtonProps> = ({ButtonAction, texto, classButton, icon, severityClass, areaLabel})=> {
    
    return<>
    <Button
        label={texto} //Le cambia el texto que muestra
        onClick={ButtonAction} //Le cambia lo que hace cuando lo tocas
        className={classButton} //Le cambia la clase, hay que crear una clase para que cambie de aspecto cuando se necesita
        icon={icon}
        severity={severityClass}
        area-label={areaLabel}
        >
    </Button>
    </>
}

export default Buttons