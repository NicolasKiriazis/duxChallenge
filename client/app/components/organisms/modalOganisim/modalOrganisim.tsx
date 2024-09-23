"use client"

import React, { useEffect, useState } from "react"
import {Options, User} from '../../../types/type'
import Input from "../../atoms/input"
import { Message } from "primereact/message"
import DropDownMolecule from "../../molecules/dropDownMolecule/dropDownMolecule"
import { userServices } from "@/app/services/userServices"
import { Button } from "primereact/button"

interface ModalOrganismProps {
    estadoOptions: Options[]
    sectorOptions: Options[]

    onUserAdded: () => void // Recibe una función que se llamará después de agregar el usuario
    isEdit?: boolean;         // Indica si estamos en modo edición
    userData?: User | null;   // Datos del usuario a editar (puede ser null si estamos creando)
}

const ModalOrganism:React.FC<ModalOrganismProps> = ({estadoOptions, sectorOptions, isEdit, userData, onUserAdded}) => {

    const [id, setId] = useState('')
    const [usuario, setUsuario] = useState('')
    const [estado, setEstado] = useState<string | null>(null);
    const [sector, setSector] = useState('')

    // Si estamos en modo edición, establecemos los valores del usuario seleccionado

    useEffect(() => {
        
        if(isEdit && userData){
            setId(userData.id)
            setEstado(userData.estado)
            setSector(userData.sector.toString())
            setUsuario(userData.usuario)
        }
    }, [isEdit, userData])
    

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data= {
                id,
                estado,
                sector,
                usuario
        }

        try {

            if(isEdit && userData) {
                await userServices.putUser(userData.id, data);
            } else {
                await userServices.postUser(data)
                onUserAdded()
            }
            // Notificamos que se ha agregado o editado un usuario
            onUserAdded()

            // Limpiamos los campos después de agregar o editar
            setEstado(null); // Limpiar Dropdown
            setSector('');    // Limpiar InputText
            setUsuario('');   // Limpiar InputText
            setId('')

        } catch (error) {
            console.log("Error al agregar usuario", error)
        }
    }

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


    

return <>

<div className="flex flex-column justify-content-center">

    <form onSubmit={handleSubmit}>

    <div className="flex flex-column justify-content-center">
    <h2>Id:</h2>
    <Input state={id} setState={setId} />
    </div>
    
    <div className="flex flex-column justify-content-center">
    <h2>Nombre:</h2>
    <Input state={usuario} setState={setUsuario} />
    {/* <Message severity="error" text="Username is required" /> */}
    </div>

    <div className="flex flex-column justify-content-center">
    <h2>Estado:</h2>
    <div className="bg-black">
    <DropDownMolecule placeHolder="Seleccionar el Estado" state={estado} setState={setEstado} options={estadoOptions} className="w-max" />
    </div>
    {/* <Message severity="error" text="Username is required" /> */}
    </div>

    <div className="flex flex-column justify-content-center w-full">
    <h2>Sector:</h2>
    <DropDownMolecule placeHolder="Seleccionar el Estado" state={sector} setState={setSector} options={sectorOptions}/>
    {/* <Message severity="error" text="Username is required" /> */}
    </div>

    <Button label="Enviar" type="submit"/>

{/* Botón de eliminar (solo visible en modo edición) */}
{isEdit && (
        <Button
            label="Borrar"
            className="p-button-danger"
            onClick={handleDelete}
            type="button" //comentario extra // Importante: evitar que se envíe el formulario con este botón
        />
)}


    </form>

</div>

</>
}

export default ModalOrganism