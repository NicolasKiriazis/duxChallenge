
//Importamos PrimeReactProvider a App para aplicarlo a todo en nuestro proyecto

import { PrimeReactProvider } from "primereact/api";
import { userServices } from "./services/userServices";

import Usuarios from "./components/pages/usuarios";


//Se solicitó que la petición de usuarios sea solicitada Server Side, envío los usuarios por props a Usuarios
// Que es un componente use client y puede manejar los estados

export default async function Home() {

  const users = await userServices.getUsers()

  return (
    <div>
      <PrimeReactProvider>
        <main>
        <Usuarios users={users} />
        </main>
        <footer>
        </footer>
      </PrimeReactProvider>
    </div>
  );
}
