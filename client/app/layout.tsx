import type { Metadata } from "next";

import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";


import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'

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
        <Footer/>
      </body>
    </html>
  );
}
