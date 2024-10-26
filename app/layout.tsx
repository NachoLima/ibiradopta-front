import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';



export const metadata = {
  title: 'Dream Tree',
  description: 'Bienvenido a Dream Tree - Explora nuestras características y servicios',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="bg-green-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo o nombre del sitio */}
            <div className="text-white text-2xl font-bold">
              Dream Tree
            </div>

            {/* Botones de iniciar sesión y registrarse */}
            <div>
              <Link href="/login" className="text-white px-4 py-2 rounded hover:bg-green-700">
                Iniciar sesión
              </Link>
              <Link href="/register" className="text-white px-4 py-2 ml-2 rounded hover:bg-emerald-700">
                Registrarse
              </Link>
            </div>
          </div>
        </nav>

        {/* Contenido de la página principal */}
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
