
//Importamos PrimeReactProvider a App para aplicarlo a todo en nuestro proyecto
import { PrimeReactProvider } from "primereact/api";

import 'primereact/resources/themes/saga-blue/theme.css';  // Puedes cambiar este tema a otro de tu elección
import 'primereact/resources/primereact.min.css';          // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';                        // PrimeIcons si las estás utilizando
import UsersList from "./components/userslist";



export default function Home() {
  return (
    <div>
      <PrimeReactProvider>
        <main>

        <UsersList/>

        </main>
        <footer></footer>
      </PrimeReactProvider>
    </div>
  );
}
