"use client"; // Esto indica que es un Client Component, los hooks de react como useState no pueden usarse del lado del servidor

//------------IMPORTACIONES---------------------------//

import React, { useEffect, useState } from "react";
import { userServices } from "../services/userServices";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UsersForm from "./form";
import { InputText } from "primereact/inputtext";

//------------FIN IMPORTACIONES---------------------//

//Vamos a traer los usuarios con useEffect de React y un useState para que quede la data

//------------COMENTARIOS SOBRE EL FUNCIONAMIENTO DEL COMPONENTE---------------//

//Este componente se va a encargar de leer lo que traiga el metodo Get y mostrarlo en la home
//Consumiremos los datos desde services
// Este componente tendra la función de filtrar los productos según las 3 barras de busqueda
//(Por coincidencia, por estado y por sector )
//Tendremos que establecer 1 estado para traer los usuarios
// 3 estados para los filtros

//-----------------FIN COMENTARIOS SOBRE EL FUNCIONAMIENTO-------------//

const UsersList: React.FC = () => {
  //--------------------INTERFACE DE USUARIO----------------------//
    interface User {
        id: string;
        estado: string;
        sector: number;
        usuario: string;
    }
  //--------------------FIN INTERFACE DE USUARIO----------------------//

  //-------------------ESTADOS NECESARIOS-----------------------------//

  const [users, setUsers] = useState<User[]>([]); //Todos los usuarios
  const [filteredUsers, setFilteredUsers] =useState<User[]>([]) //usuarios filtrados
  const [searchName, setSearchName] = useState<string>('') // Estado para la búsqueda por estado
  const [searchEstado, setSearchEstado] = useState<string | null>(null); // Estado para la búsqueda por estado

  // Creamos la función traer data, trae los productos con getUsers

    const traerData = async () => {
    try {
    const response = await userServices.getUsers();
        setUsers(response);
        setFilteredUsers(response); // Inicialmente, los usuarios filtrados son todos
    } catch (error) {
        console.log(error);
    }
    };
    {
    }

    //useEffect para obtener la data cuando el componente se monta

    useEffect(() => {
    traerData();
    }, []);


    //-------FUNCION DE BUSQUEDA DE USUARIOS---------------//

    const handleSearch = () => {
      let filtered = users;

      //----------BUSCAR POR COINCIDENCIA DE NOMBRE-----------//

      if (searchName.trim()) {
            filtered = filtered.filter(user =>
                user.usuario.toLowerCase().includes(searchName.toLowerCase())
            );
        }

      //----------BUSCAR POR COINCIDENCIA DE ESTADO----------//

      if (searchEstado) {
        filtered = filtered.filter(user => user.estado === searchEstado);
    }

    // Actualizar el estado con los usuarios filtrados
    setFilteredUsers(filtered);
    }

    // Ejecutar la búsqueda cada vez que cambie algún valor de los inputs

    useEffect(() => {
      handleSearch();
      }, [searchName, searchEstado]);
    
    //------FIN FUNCIÓN DE BUSQUEDA DE USUARIOS-----------//

     // Opciones para el Dropdown de estado

      const estadoOptions = [
          { label: 'ACTIVO', value: 'ACTIVO' },
          { label: 'INACTIVO', value: 'INACTIVO' }
      ];

     // Función para agregar un usuario nuevo al estado
      const handleNewUser = () => {
      traerData(); // Refrescamos la lista de usuarios después de agregar uno nuevo
      };

    //Retornamos el array de usuarios y lo mandamos al front
    
    return (
    <>
    <h2>Lista de usuarios</h2>

    {/*   BARRA BUQUEDA POR NOMBRE Y APELLIDO   */}

      <div className="p-field">
        <label htmlFor="nombre">Buscar por Nombre y Apellido</label>
        <InputText
          id="nombre"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Buscar por nombre o apellido"
        />        
      </div>

    {/*       BARRA BUSQUEDA POR ESTADO        */}

      <div className="p-field">
        <label htmlFor="estado">Buscar por estado</label>
        <Dropdown
          id="estado"
          value={searchEstado}
          options={estadoOptions}
          onChange={(e) => setSearchEstado(e.value)}
          placeholder="Seleccione el estado"
        
        />
      </div>

        <DataTable value={filteredUsers} stripedRows  paginator rows={10}  rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ width: "70rem", height: "25rem" }}>
            <Column field="id" header="Id:"></Column>
            <Column field="usuario" header="Usuario:"></Column>
            <Column field="estado" header="Estado:"></Column>
            <Column field="sector" header="Sector:"></Column>
        </DataTable>

    <UsersForm onUserAdded={handleNewUser} />
    </>
    );
};

export default UsersList;