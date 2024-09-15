import React from 'react'

interface EditUserProps {
    user:{
        id: string,
        estado: string;
        sector: number;
        usuario: string;
    },
    onUserUpdated: () => void;
}

const EditUser:React.FC<EditUserProps> = ({user, onUserUpdated}) =>{
    
    const handleSubmit = () => {
        
    }


    if (!user) {
        return <p>Cargando datos del usuario...</p>;  // O puedes retornar `null` para no mostrar nada
    }

    return(
    <>
        <p>ID del usuario: {user.id}</p>
        <p>Nombre de usuario: {user.usuario}</p>
        <p>Estado: {user.estado}</p>
        <p> Sector: {user.sector} </p>
    </>
    )
}

export default EditUser