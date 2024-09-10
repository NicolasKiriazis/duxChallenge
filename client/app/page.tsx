
//Importamos PrimeReactProvider a App para aplicarlo a todo en nuestro proyecto
import { PrimeReactProvider } from "primereact/api";



export default function Home() {
  return (
    <div>
      <PrimeReactProvider>
        <main></main>
        <footer></footer>
      </PrimeReactProvider>
    </div>
  );
}
