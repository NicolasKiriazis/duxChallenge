"use client"

import React, { useEffect, useState } from 'react'
import { UsersPageProps, User } from '@/app/types/type'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dialog } from 'primereact/dialog'
import { userServices } from '@/app/services/userServices'

import SearchOrganisim from '../organisms/searchOrganisim/serarchOrganisim'
import UserMolecule from '../molecules/userMolecule/userMolecule'
import ModalOrganism from '../organisms/modalOganisim/modalOrganisim'

const Usuarios:React.FC<UsersPageProps> = ({users}) => {

    //Traemos los usuarios por props y los guardamos en el estado filteredUsers. 

    //Estados para filtrar usuarios

    const [filteredUsers, setFilteredUsers] = useState<User[]>(users)

    //Estos estados vienen de los inputs y guardan nombre, estado y sector

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
      setVisibleCreate(true); //Abre el modal
      setLabel("Crear Usuario:") //Establece la label del modal para que aparezca "Crear usuario"
    };

    //---------ABRIR MODAL EDITAR USUARIO--------------//

    const openModalEdit = (user: User) => {
      setIsEdit(true) //Establece el estado Edit, que indica si el modal va a estar en modo editar
      setSelectedUser(user)// Guarda al usuario que hiciste click el nombre 
      setVisibleCreate(true) //Abre el Modal
      setLabel("Editar Usuario:") //Establece la label del modal para que aparezca "Editar usuario"
    }

    //---------CERRAR MODAL---------------//

    const closeModal = () => {
      setVisibleCreate(false); //Cierra el Modal
      setIsEdit(false) 
      setSelectedUser(null)
      setVisibleCreate(false)
    };

  

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
      setFilteredUsers(filteredUsers); // Restablecer usuarios por defecto
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
        console.log(usersUpdate)
        setFilteredUsers(usersUpdate)
        // Actualizar el estado con los usuarios obtenidos
        
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

        <DataTable value={filteredUsers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} className='w-full mt-4' paginatorClassName="mt-8">
        <Column field="id" header="Id:" sortable> </Column>
        <Column 
                    field="usuario" 
                    header="Usuario:"
                    sortable
                    body={(rowData: User) => (
                      <span
                            // Hacer clic en el nombre del usuario para abrir el modal
                            onClick={()=> openModalEdit(rowData)}
                            style={{ color: '#0763e7', textDecoration: 'underline', fontWeight: 'bold' }}
                      >{rowData.usuario}</span>
                    )}
                    ></Column>
        <Column field="estado" header="Estado:" sortable></Column>
        <Column field="sector" header="Sector:" sortable></Column>
        </DataTable>
        </div>

        <div>

        </div>

        <Dialog
            header={label}
            visible={visibleCreate}
            onHide={closeModal}
            style={{ width: '70vw' }}
            headerStyle={{ backgroundColor: '#0a5bce', color: 'white' }}  // Aquí aplicas el estilo personalizado
        >
        <ModalOrganism
            //El componente Modal está preparado para recibir las props: 
            sectorOptions={sectorOptions} //Le pasas las opciones para que pueda mostrar los sectores
            estadoOptions={estadoOptions} //Le pasas las opciones para que pueda mostrar los estados
            onUserAdded={handleNewUser}   //Le pasas la función que se encarga de actualizar la lista de usuarios
            isEdit={isEdit}               //Le pasas el IsEdit que determinará si es una edición o una creación
            userData={selectedUser}       //Le pasas el usuario seleccionado para poder editarlo
        />
        </Dialog>
        

        </>
    )
}

export default Usuarios 