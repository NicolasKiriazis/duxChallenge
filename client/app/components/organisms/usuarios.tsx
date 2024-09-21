"use client"

import React from 'react'

import { UsersPageProps } from '@/app/types/type'
import Buttons from '../atoms/button'

//Este componente recibe los usuarios desde server, es use client, lo que nos permite gestionar estados

const Usuarios:React.FC<UsersPageProps> = ({users}) => {

  const prueba =()=> {
    const funciona = console.log("funciona")
    return funciona
  }

    return(
        <><Buttons ButtonAction={prueba} texto='prueba' classButton='p-button-danger'/>
        </>
    )
}

export default Usuarios 