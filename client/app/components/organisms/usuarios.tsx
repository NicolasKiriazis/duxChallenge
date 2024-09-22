"use client"

import React, { useState } from 'react'

import { UsersPageProps } from '@/app/types/type'
import Buttons from '../atoms/button'
import Input from '../atoms/input'
import DropDown from '../atoms/dropDown'
import Icons from '../atoms/icons'
import UserMolecule from '../molecules/userMolecule/userMolecule'
import InputMolecule from '../molecules/inputMolecule/InputMolecule'
import DropDownMolecule from '../molecules/dropDownMolecule/dropDownMolecule'

//Este componente recibe los usuarios desde server, es use client, lo que nos permite gestionar estados

 // Estado para la búsqueda por estado

const Usuarios:React.FC<UsersPageProps> = ({users}) => {

  // const [searchName, setSearchName] = useState<string>('')
  // const [searchEstado, setSearchEstado] = useState<string | null>(null); // Estado para la búsqueda por estado
  // const [sectorEstado, setSectorEstado] = useState<string | null>(null);

  // const estadoOptions = [
  //   { label: 'ACTIVO', value: 'ACTIVO' },
  //   { label: 'INACTIVO', value: 'INACTIVO' }
  // ];

  // const sectorOptions = [
  //   {label: '1000', value: '1000'}
  // ]


    return(
        
        // <Input state={searchName} setState={setSearchName} />
        // <DropDown state={searchEstado} options={estadoOptions} setState={setSearchEstado}/>
        // <DropDown state={sectorEstado} options={sectorOptions} setState={setSectorEstado} />

        // <p>{searchName}</p>
        // <p>{searchEstado}</p>
        // <p>{sectorEstado}</p>
        // <Icons name='pi-angle-double-left'/>

        <>

        <UserMolecule/>
        <InputMolecule/>
        <DropDownMolecule/>

        </>
    )
}

export default Usuarios 