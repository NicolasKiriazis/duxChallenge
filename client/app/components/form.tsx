'use client';  // Esto indica que es un Client Component, los hooks de react como useState no pueden usarse del lado del servidor

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';

//Importar React y FC 
import React from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { userServices } from '../services/userServices';

interface UsersFormProps {
    onUserAdded: () => void; // Recibe una función que se llamará después de agregar el usuario
}

//Atento a definir que es un componente React. Siempre definile porque typescript llora
//Si a los componentes les declaras que son React.FC cuando los llames en los padres no es necesario indicarles

const UsersForm: React.FC<UsersFormProps> = ({onUserAdded}) => {

        //Vas a repasar formularios: Necesitas que cuando apretes submit, vos puedas agarrar el estado y pasarlo por props
        //Cosas importantes e = evento
        // e.target.value = esto agarra el valor que estas escribiendo en el evento
        // e.prevent
        // Estas funciones usan el hook de react useState
        //las funciones estas por lo general se llaman handleSubmit
        //cuando declaras la función en typescript vas a recibir por props (parametros) el "e" le tenés que avisar lo siguiente = (e: React.FormEvent<HTMLFormElement>)


    const [estado, setEstado] = useState<string | null>(null);
    const [sector, setSector] = useState('')
    const [usuario, setUsuario] = useState('')
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data= {
                        estado,
                        sector,
                        usuario
                    }
        try {
            userServices.postUsers(data)
            onUserAdded()
        } catch (error) {
            console.log("Error al agregar usuario", error)
        }
    }

    const estadoOptions = [
        { label: 'ACTIVO', value: 'ACTIVO' },
        { label: 'INACTIVO', value: 'INACTIVO' }
    ];

    


    //Frontend

    return(
        <>

        <form onSubmit={handleSubmit} className='p-fluid'>

        <div className='p-field'>
            
        <label htmlFor="estado">Estado del usuario</label>
        
        <Dropdown
                value={estado}
                options={estadoOptions}
                onChange={(e) => setEstado(e.value)} 
                placeholder="Seleccione el estado"
        />
        </div>

        
        <InputText
            type='number' 
            placeholder='Ingrese sector:'
            value={sector}
            onChange={(e) => setSector(e.target.value)}
        />
        
        <InputText
            type='text'
            placeholder='Ingrese Nombre y Apellido:'
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
        />
       
        <Button label="Enviar" type="submit" />
        
        </form>

        
        </>
        
        
        
        
    )
}

export default UsersForm