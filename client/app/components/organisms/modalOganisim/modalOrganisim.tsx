"use client"

import React, { useEffect, useState } from "react"
import {Options, User} from '../../../types/type'
import { Message } from "primereact/message"
import { userServices } from "@/app/services/userServices"

import Buttons from "../../atoms/button"
import DropDownMolecule from "../../molecules/dropDownMolecule/dropDownMolecule"
import Input from "../../atoms/input"

interface ModalOrganismProps {
    estadoOptions: Options[] //Recibe las opciones de estado
    sectorOptions: Options[] //Recibe las opciones de Sector

    onUserAdded: () => void   // Recibe la función para actualizar los usuarios
    isEdit?: boolean;         // Recibe el valor de isEdit que indica si estamos en edición o creación
    userData?: User | null;   // Datos del usuario a editar (puede ser null si estamos creando)
}

const ModalOrganism:React.FC<ModalOrganismProps> = ({estadoOptions, sectorOptions, isEdit, userData, onUserAdded}) => {

    //Estados que setean al usuario

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

     // Estado para manejar los errores
    const [errors, setErrors] = useState({
    id: "",
    usuario: "",
    estado: "",
    sector: "",
    });

    // Validación de los campos del formulario
    const validateForm = () => {
    const newErrors = {
        id: "",
        usuario: "",
        estado: "",
        sector: "",
    };

    // Validar id (debe ser numérico y no más de 6 dígitos)
    if (!/^\d+$/.test(id)) {
    newErrors.id = "El id solo puede contener números.";
    }
    if (id.length > 6) {
    newErrors.id = "El id no puede tener más de 6 caracteres.";
    }

    // Validar usuario (no vacío y no más de 20 caracteres)
    if (usuario.trim() === "") {
    newErrors.usuario = "El nombre no puede estar vacío.";
    }
    if (usuario.length > 20) {
    newErrors.usuario = "El nombre no puede tener más de 20 caracteres.";
    }
    if(/^\d+$/.test(usuario)) {
    newErrors.usuario = "El usuario no pueden ser solo números"
    }

    // Validar estado (no vacío)
    if (!estado) {
    newErrors.estado = "El estado es obligatorio.";
    }

    // Validar sector (no vacío)
    if (sector.trim() === "") {
    newErrors.sector = "El sector es obligatorio.";
    }

    setErrors(newErrors);

    // Retornar true si no hay errores
    return Object.values(newErrors).every((error) => error === "");
    };
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    // Validar formulario antes de enviar
    if (!validateForm()) {
        return;
    }

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
                setEstado(null); // Limpiar Dropdown
                setSector('');    // Limpiar InputText
                setUsuario('');   // Limpiar InputText

                onUserAdded()
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
    {errors.id && <Message severity="error" text={errors.id} />} 
    </div>
    
    <div className="flex flex-column justify-content-center">
    <h2>Nombre:</h2>
    <Input state={usuario} setState={setUsuario} />
    {errors.usuario && <Message severity="error" text={errors.usuario} />}
    </div>

    <div className="flex flex-column justify-content-center">
    <h2>Estado:</h2>
    <div className="bg-black">
    <DropDownMolecule placeHolder="Seleccionar el Estado" state={estado} setState={setEstado} options={estadoOptions} className="w-max" />
    </div>
    {errors.estado && <Message severity="error" text={errors.estado} />}
    </div>

    <div className="flex flex-column justify-content-center w-full">
    <h2>Sector:</h2>
    <DropDownMolecule placeHolder="Seleccionar el Estado" state={sector} setState={setSector} options={sectorOptions}/>
    {errors.sector && <Message severity="error" text={errors.sector} />}
    </div>

    <div className="flex flex-row justify-content-center">
    <Buttons texto="✓ Confirmar" ButtonAction={onUserAdded} classButton="h-3rem bg-custom mr-10"/>

    {/* Botón de eliminar (solo visible en modo edición) */}
    {isEdit && (
        <Buttons
            texto="✓ Eliminar"
            classButton="bg-white text-color-custom ml-2"
            ButtonAction={handleDelete}
        />
    )}

    </div>


    </form>

</div>

</>
}

export default ModalOrganism