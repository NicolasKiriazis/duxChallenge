import Image from "next/image";
import PersonalList from "./components/personalList";
import CreatePersonal from "./components/createPersonal";


export default function Home() {
  return (
    <div>
      <main>
          <PersonalList/>
          <CreatePersonal/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
