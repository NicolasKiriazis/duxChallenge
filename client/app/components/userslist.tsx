'use client';  // Esto indica que es un Client Component, los hooks de react como useState no pueden usarse del lado del servidor


//Este componente se va a encargar de leer lo que traiga el metodo Get y mostrarlo en la home
//Consumiremos los datos desde services

import React, { useEffect, useState } from "react"
import { userServices } from "../services/userServices";

//Vamos a traer los usuarios con useEffect de React y un useState para que quede la data

const UsersList: React.FC = () => {

    //Declaramos la interface, como se compone el usuario, que tipos de datos vienen

    interface User {
        id: string,
        estado: string,
        sector: number,
        usuario: string
    }

    //Establecemos un state, para fijar a los usuarios que vienen de la api

    const [users, setUsers] = useState<User[]>([])

    
    // Creamos la función traer data, trae los productos con getUsers
    
        const traerData = async () =>{
            try {
                const response = await userServices.getUsers()
                setUsers(response)
            } catch (error) {
                console.log(error)
            }
        }
{}
    //Usamos un useEffect para poder ejectutar la petición a la api y guardar los datos en el state users

        useEffect(() => {
            traerData()
            console.log(users)
        }, [])
        

    //Retornamos el array de usuarios y lo mandamos al front


    return (
        <>
        <h2>Lista de usuarios</h2>
    
        {users.map((user) => (
        <div key={user.id}>
            <p>{user.id} </p>
            <p>{user.usuario}</p>
            <p>{user.estado} </p>
            <p>{user.sector} </p>  
        </div>
        ))}
        </>
)
    
}

export default UsersList
