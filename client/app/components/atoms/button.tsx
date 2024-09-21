import { Button } from 'primereact/button';
import React from 'react'

// El botón recibe por props lo que hace en el OnClick y el texto a mostrar además de la clase para modificar su estilo si se necesita


interface ButtonProps {
    ButtonAction: () => void
    texto: string
    classButton?: string
}

const Buttons:React.FC<ButtonProps> = ({ButtonAction, texto, classButton})=> {
    
    return<>
    <Button
        label={texto} //Le cambia el texto que muestra
        onClick={ButtonAction} //Le cambia lo que hace cuando lo tocas
        className={classButton} //Le cambia la clase, hay que crear una clase para que cambie de aspecto cuando se necesita
        >
    </Button>
    </>
}

export default Buttons