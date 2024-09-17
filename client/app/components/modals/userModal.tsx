'use client';  // Esto indica que es un Client Component, los hooks de react como useState no pueden usarse del lado del servidor

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

//Importar React y FC 
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { userServices } from '../../services/userServices';

//--------------------INTERFACE DE USUARIO----------------------//
interface User {
    id: string;
    estado: string;
    sector: number;
    usuario: string;
}
//--------------------FIN INTERFACE DE USUARIO----------------------//


interface UsersFormProps {
    onUserAdded: () => void // Recibe una función que se llamará después de agregar el usuario
    isEdit?: boolean;         // Indica si estamos en modo edición
    userData?: User | null;   // Datos del usuario a editar (puede ser null si estamos creando)
}

//Atento a definir que es un componente React. Siempre definile porque typescript llora
//Si a los componentes les declaras que son React.FC cuando los llames en los padres no es necesario indicarles

const UsersForm: React.FC<UsersFormProps> = ({onUserAdded, isEdit = false, userData}) => {

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

    useEffect(() => {
        
        if(isEdit && userData){
            setEstado(userData.estado)
            setSector(userData.sector.toString())
            setUsuario(userData.usuario)
        }
    }, [isEdit, userData])
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data= {
                estado,
                sector,
                usuario
        }

        try {

            if(isEdit && userData) {
                await userServices.putUser(userData.id, data);
            } else {
                await userServices.postUser(data)
            }
            onUserAdded()
            setEstado(null); // Limpiar Dropdown
            setSector('');    // Limpiar InputText
            setUsuario('');   // Limpiar InputText

        } catch (error) {
            console.log("Error al agregar usuario", error)
        }
    }

    const estadoOptions = [
        { label: 'ACTIVO', value: 'ACTIVO' },
        { label: 'INACTIVO', value: 'INACTIVO' }
    ];

    const handleDelete = async () =>{

        if(isEdit && userData) {
            try {
                await userServices.deleteUser(userData.id)
                console.log(`Usuario con id ${userData.id} eliminado`);
                onUserAdded()
                setEstado(null); // Limpiar Dropdown
                setSector('');    // Limpiar InputText
                setUsuario('');   // Limpiar InputText
            } catch (error) {
                console.log("Error al eliminar usuario", error);
            }
        }

    }


    //Frontend

    return(
        <>

        <form onSubmit={handleSubmit} className='p-fluid'>
        
        <label htmlFor="estado">Nombre de usuario:</label>

        <InputText
            type='text'
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
        />

        <div className='p-field'>
            
        <label htmlFor="estado">Estado del usuario:</label>
        
        <Dropdown
                value={estado}
                options={estadoOptions}
                onChange={(e) => setEstado(e.value)} 
        />
        </div>

        <label htmlFor="estado">Sector del usuario:</label>

        <InputText
            type='number' 
            value={sector}
            onChange={(e) => setSector(e.target.value)}
        />
        
        <Button label="Enviar" type="submit" />

        {/* Botón de eliminar (solo visible en modo edición) */}
        {isEdit && (
                <Button
                    label="Eliminar"
                    className="p-button-danger"
                    onClick={handleDelete}
                    type="button"  // Importante: evitar que se envíe el formulario con este botón
                />
            )}
        
        </form>

        
        </>
        
        
        
        
    )
}

export default UsersForm