import type { Metadata } from "next";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import '../app/globals.css'
import Navbar from "./components/organisms/navBarOrganisim/navBarOrganisim";


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
        {children}
        
      </body>
    </html>
  );
}
