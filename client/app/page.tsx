
//Importamos PrimeReactProvider a App para aplicarlo a todo en nuestro proyecto
import { PrimeReactProvider } from "primereact/api";
import { userServices } from "./services/userServices";
import Usuarios from "./components/pages/usuarios";
import ModalOrganism from "./components/organisms/modalOganisim/modalOrganisim";



export default async function Home() {

  const users = await userServices.getUsers()

  return (
    <div>
      <PrimeReactProvider>
        <main>
        <Usuarios users={users} />
        </main>
        <footer></footer>
      </PrimeReactProvider>
    </div>
  );
}
