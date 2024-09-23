"use client"

import React, { useEffect, useState } from 'react'

import { UsersPageProps, User } from '@/app/types/type'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import SearchOrganisim from '../organisms/searchOrganisim/serarchOrganisim'
import Icons from '../atoms/icons'
import UserMolecule from '../molecules/userMolecule/userMolecule'
import Navbar from '../organisms/navBarOrganisim/navBarOrganisim'
import ModalOrganism from '../organisms/modalOganisim/modalOrganisim'
import { Dialog } from 'primereact/dialog'
import { userServices } from '@/app/services/userServices'

const Usuarios:React.FC<UsersPageProps> = ({users}) => {

    //Estados para filtrar usuarios

    const [filteredUsers, setFilteredUsers] = useState<User[]>(users)
    const [name, setName] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [sector, setSector] = useState<string>('')

    //Estados para el modal (Seleccionar un usuario, abrir y cerrarlo y establecer modo edición)
    
    const [visibleCreate, setVisibleCreate] = useState(false) //Abre y cierra los modal
    const [selectedUser, setSelectedUser] = useState<User | null>(null); //Guarda la data del usuario para el modal de edición
    const [isEdit, setIsEdit] = useState(false)
    const [label, setLabel] = useState<string>('')
    

    //---------ABRIR MODAL NUEVO USUARIO----------------//

    const openModal = () => {
      setVisibleCreate(true);
      setLabel("Crear Usuario:")
    };

    //---------CERRAR MODAL NUEVO USUARIO---------------//

    const closeModal = () => {
      setVisibleCreate(false);
      setIsEdit(false)
      setSelectedUser(null)
      setVisibleCreate(false)
    };

    //---------ABRIR MODAL EDITAR USUARIO--------------//

    const openModalEdit = (user: User) => {
      setIsEdit(true)
      setSelectedUser(user)
      setVisibleCreate(true)
      setLabel("Editar Usuario:")
    }

    //Opciones para los Dropdown de estado y de sector//
    
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

    // Función para restablecer los valores después de filtrar usuarios
    const resetFilters = () => {
      setName('');
      setState('');
      setSector('');
      setFilteredUsers(users); // Restablecer usuarios por defecto
      console.log("Actualizo la lista")
    }

    // Ejecutar la búsqueda cada vez que cambie algún valor de los inputs
      useEffect(() => {
      handleSearch();
      }, [name, state]);

    

    // Función para agregar un usuario nuevo al estado
    const handleNewUser = async () => {
      try {
        // Esperar la resolución de la promesa para obtener los usuarios actualizados
        const usersUpdate = await userServices.getUsers();
        
        // Actualizar el estado con los usuarios obtenidos
        setFilteredUsers(usersUpdate);
    } catch (error) {
        console.error("Error al obtener los usuarios actualizados:", error);
    }
    };


    return(
        <>
        <UserMolecule action={openModal}/>
        <SearchOrganisim 
            name={name} 
            setName={setName} 
            state={state} 
            setState={setState}
            sector={sector} 
            setSector={setSector}
            sectorOptions={sectorOptions}
            estadoOptions={estadoOptions}
            resetFilters={resetFilters}
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
                            onClick={()=> openModalEdit(rowData)}
                      >{rowData.usuario}</span>
                    )}
                    ></Column>
        <Column field="estado" header="Estado:" sortable></Column>
        <Column field="sector" header="Sector:" sortable></Column>
        </DataTable>
        </div>

        <Dialog
            header={label}
            visible={visibleCreate}
            onHide={closeModal}
            style={{ width: '70vw' }}
            headerStyle={{ backgroundColor: '#0a5bce', color: 'white' }}  // Aquí aplicas el estilo personalizado
        >
        <ModalOrganism
            sectorOptions={sectorOptions}
            estadoOptions={estadoOptions}
            onUserAdded={handleNewUser}
            isEdit={isEdit}
            userData={selectedUser}
        />
        </Dialog>
        

        </>
    )
}

export default Usuarios 