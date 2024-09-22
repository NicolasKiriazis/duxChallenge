"use client"

import React, { useEffect, useState } from 'react'

import { UsersPageProps, User } from '@/app/types/type'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import SearchOrganisim from '../searchOrganisim/serarchOrganisim'
import Icons from '../../atoms/icons'
import UserMolecule from '../../molecules/userMolecule/userMolecule'
import Navbar from '../navBarOrganisim/navBarOrganisim'

const Usuarios:React.FC<UsersPageProps> = ({users}) => {

    const [filteredUsers, setFilteredUsers] = useState<User[]>(users)
    const [name, setName] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [sector, setSector] = useState<string>('')

    //Tenemos que traer 2 valores de los inputs (Lo que escriben en nombre y el dropdown de estado)//

    const sectorOptions = [
      {label: '1000', value: '1000'}
    ]

    const estadoOptions = [
      { label: 'ACTIVO', value: 'ACTIVO' },
      { label: 'INACTIVO', value: 'INACTIVO' }
    ];

    //-------FUNCION DE BUSQUEDA DE USUARIOS---------------//

    const handleSearch = () => {
        let filtered = users;
  
        //----------BUSCAR POR COINCIDENCIA DE NOMBRE-----------//
  
      if (name.trim()) {
              filtered = filtered.filter(user =>
                  user.usuario.toLowerCase().includes(name.toLowerCase())
              );
          }
  
        //----------BUSCAR POR COINCIDENCIA DE ESTADO----------//
  
      if (state) {
          filtered = filtered.filter(user => user.estado === state);
      }
  
      // Actualizar el estado con los usuarios filtrados
      setFilteredUsers(filtered);
      }

      // Ejecutar la búsqueda cada vez que cambie algún valor de los inputs

      useEffect(() => {
      handleSearch();
      }, [name, state]);

    return(
        <>
        <UserMolecule/>
        <SearchOrganisim 
            name={name} 
            setName={setName} 
            state={state} 
            setState={setState}
            sector={sector} 
            setSector={setSector}
            sectorOptions={sectorOptions}
            estadoOptions={estadoOptions}
        />

        <div className="flex justify-content-center">

        <DataTable value={filteredUsers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} className='w-12 mt-4' paginatorClassName="mt-8">
        <Column field="id" header="Id:" sortable> </Column>
        <Column 
                    field="usuario" 
                    header="Usuario:"
                    sortable
                    body={(rowData: User) => (
                      <span
                            // Hacer clic en el nombre del usuario para abrir el modal
                            onClick={()=> console.log(rowData)}
                      >{rowData.usuario}</span>
                    )}
                    ></Column>
        <Column field="estado" header="Estado:" sortable></Column>
        <Column field="sector" header="Sector:" sortable></Column>
        </DataTable>
        </div>
        

        </>
    )
}

export default Usuarios 