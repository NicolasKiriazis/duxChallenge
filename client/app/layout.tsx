import type { Metadata } from "next";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import '../app/globals.css'
import Navbar from "./components/organisms/navBarOrganisim/navBarOrganisim";
import Menu from "./components/organisms/menuOrganism/menuOrganism";


export const metadata: Metadata = {
  title: "Dux Challenge",
  description: "Challenge prueba tecnica para Dux Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Navbar/>
        <div className="flex flex-wrap"> 
        <Menu/>
        <div className="w-11">
        {children}
        </div>
        </div>
        
        
      </body>
    </html>
  );
}
