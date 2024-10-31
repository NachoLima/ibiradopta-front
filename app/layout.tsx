"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
import keycloak, { initializeKeycloak } from './keycloak/keycloak';



export default function RootLayout({ children }: { children: ReactNode }) {

  const handleLogin = () => {
    initializeKeycloak();
    keycloak.login({ redirectUri: 'http://localhost:3000' });
  };
  
  return (
    <html lang="es">
      <body>
        <nav className="bg-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className='flex '>
              <Image src="/logo.svg" alt="logo" width={108} height={96} />
              <div className="text-moss-green text-5xl font-Righteous">
                IBIRADOPTÁ
              </div>
            </div>
            <div>
              <Link href="#">Home</Link>
              <Link href="#">Explorar</Link>
              <Link href="/register" className="bg-moss-green text-white px-4 py-2 ml-2 rounded hover:bg-emerald-700">
                Registrarme
              </Link>
              <button onClick={handleLogin} className="bg-moss-green text-white px-4 py-2 rounded hover:bg-green-700">
                Iniciar sesión
              </button>
            </div>
          </div>
        </nav>
        <main className="py-10 ">
          <div className="pl-24 pr-96 flex flex-col space-y-6 pt-28 drop-shadow-2xl">
            <h1 className="text-white text-3xl font-bold p-22 ">
              Plantá un árbol, transformá el futuro
            </h1>
            <p className='text-white text-2xl'>
              Un pequeño gesto puede crear un cambio gigante...
            </p>
            <button className='bg-moss-green text-white text-3xl w-80 h-16 rounded-full'>
              QUIERO PLANTAR
            </button>
          </div>
        </main>
        <footer className="bg-green-700 p-4">
          Fundación Dream Team
        </footer>
      </body>
    </html>
  );
}