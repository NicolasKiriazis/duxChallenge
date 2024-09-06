// "use client"

// import React, { useState } from 'react';
// import { createPersonal } from '../services/personalServices';


// interface Personal {
//     id: number;
//     estado: string;
//     sector: number;
//     usuario: string;
// // Otros campos de la API...
// }

// const CreatePersonal: React.FC = () => {

//     const [usuario, setUsuario] = useState('');
//     const [sector, setSector] = useState('');
    
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
        
//         await createPersonal({ usuario , sector });
//         alert('Personal creado exitosamente');
//         console.log('funciona' )
//     }



//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Nombre:</label>
//             <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
//           </div>
//           <div>
//             <label>Sector:</label>
//             <input type="text" value={sector} onChange={(e) => setSector(e.target.value)} />
//           </div>
//           <button type="submit">Crear Personal</button>
//         </form>
      
//         </>
//       );
// }

// export default CreatePersonal;

// "use client"

// import React, { useState } from 'react';
// import { createPersonal } from '../services/personalServices';

// interface Personal {
//     id: number;
//     estado: string;
//     sector: number;
//     usuario: string;
//     // Otros campos de la API...
// }

// const CreatePersonal: React.FC = () => {

//     const [usuario, setUsuario] = useState('');
//     const [sector, setSector] = useState('');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         // Convertir sector de string a número
//         const sectorNumber = parseInt(sector);
//         if (isNaN(sectorNumber)) {
//             alert('El sector debe ser un número válido');
//             return;
//         }

//         // Llamar a la API con sector como número
//         await createPersonal({ usuario, sector: sectorNumber });
//         alert('Personal creado exitosamente');
//         console.log('funciona');
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Nombre:</label>
//                     <input 
//                         type="text" 
//                         value={usuario} 
//                         onChange={(e) => setUsuario(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Sector:</label>
//                     <input 
//                         type="text" 
//                         value={sector} 
//                         onChange={(e) => setSector(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <button type="submit">Crear Personal</button>
//             </form>
//         </>
//     );
// }

// export default CreatePersonal;

"use client"

import React, { useState, useEffect } from 'react';
import { createPersonal } from '../services/personalServices';

// Interfaz para un usuario personal
interface Personal {
    id: number;
    estado: string;
    sector: number;
    usuario: string;
    // Otros campos de la API...
}

const CreatePersonal: React.FC = () => {

    // Estados para el formulario
    const [usuario, setUsuario] = useState('');
    const [sector, setSector] = useState('');

    // Estado para almacenar la lista de usuarios
    const [usuarios, setUsuarios] = useState<Personal[]>([]);

    // Función para manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Convertir sector de string a número
        const sectorNumber = parseInt(sector);
        if (isNaN(sectorNumber)) {
            alert('El sector debe ser un número válido');
            return;
        }

        // Llamar a la API para crear el nuevo usuario
        const nuevoUsuario = await createPersonal({ usuario, sector: sectorNumber });

        // Actualizar la lista de usuarios con el nuevo usuario
        setUsuarios([...usuarios, nuevoUsuario]);

        // Limpiar el formulario
        setUsuario('');
        setSector('');

        alert('Personal creado exitosamente');
    };

    // Función para renderizar la lista de usuarios
    const renderUsuarios = () => {
        return usuarios.map((personal) => (
            <li key={personal.id}>
                {personal.usuario} - Sector: {personal.sector}
            </li>
        ));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        value={usuario} 
                        onChange={(e) => setUsuario(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Sector:</label>
                    <input 
                        type="text" 
                        value={sector} 
                        onChange={(e) => setSector(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Crear Personal</button>
            </form>

            {/* Renderizar la lista de usuarios */}
            <h3>Lista de Usuarios</h3>
            <ul>
                {renderUsuarios()}
            </ul>
        </>
    );
}

export default CreatePersonal;

