"use client"

import React, { useState } from 'react'

import { UsersPageProps } from '@/app/types/type'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const Usuarios:React.FC<UsersPageProps> = ({users}) => {

    return(
        <>

        {/* <DataTable value={users} paginator rows={10}  rowsPerPageOptions={[5, 10, 25, 50]}>
        <Column field="id" header="Id:"></Column>
        <Column 
                    field="usuario" 
                    header="Usuario:"
                    body={(rowData: User) => (
                      <span
                            // Hacer clic en el nombre del usuario para abrir el modal
                            onClick={()=> openModalEdit(rowData)}
                      >{rowData.usuario}</span>
                    )}
                    ></Column>
        <Column field="estado" header="Estado:"></Column>
        <Column field="sector" header="Sector:"></Column>
        </DataTable> */}

        </>
    )
}

export default Usuarios 