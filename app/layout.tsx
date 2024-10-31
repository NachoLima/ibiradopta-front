import { ReactNode } from 'react';
import type { Metadata } from 'next'
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Dream Tree',
  description: 'Bienvenido a Dream Tree - Explora nuestras características y servicios',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">

      <body>
        <nav className="bg-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo o nombre del sitio */}
            <div className='flex '>
              <Image src="/logo.svg" alt="logo" width={108} height={96} />
              <div className="text-moss-green text-5xl font-Righteous">
                IBIRADOPTÁ
              </div>
            </div>

            {/* Botones de iniciar sesión y registrarse */}
            <div>
              <Link href="#" className=''>
                Home
              </Link>
              <Link href="#" className=''>
                Explorar
              </Link>
              <Link href="/register" className="bg-moss-green text-white px-4 py-2 ml-2 rounded hover:bg-emerald-700">
                Registrarme
              </Link>
              <Link href="/login" className="bg-moss-green text-white px-4 py-2 rounded hover:bg-green-700">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </nav>

        {/* Contenido de la página principal */}
        <main className=" py-10 ">
          <div className="pl-24 pr-96 flex flex-col space-y-6 pt-28 drop-shadow-2xl">
            {/* {children} */}
            <h1 className="text-white text-3xl font-bold p-22 ">
              Plantá un árbol, transformá el futuro
            </h1>
            <p className=' text-white text-2xl'>
              Un pequeño gesto puede crear un cambio gigante. Adopta un árbol hoy y forma parte de un movimiento global para restaurar nuestro planeta, limpiar el aire y darle vida a nuevas generaciones. Descubre cómo juntos podemos hacer la diferencia.
            </p>
            <button className='bg-moss-green text-white text-3xl w-80 h-16 rounded-full'>
              QUIERO PLANTAR
            </button>
          </div>
        </main>
        <section id="About" className='flex'>
          <div className='flex flex-col space-y-6 pl-10 pr-96'>
            <h1 className="text-moss-green text-3xl font-bold p-22"> Sobre nosotros </h1>
            <p className='h-20 text-2xl text-moss-green'> En IBIRADOPTÁ, creemos que cada árbol cuenta para un futuro más verde y saludable. Somos un grupo de personas apasionadas por la naturaleza, unidos por la misión de restaurar nuestro planeta, árbol por árbol. Facilitamos a individuos, empresas y comunidades la oportunidad de adoptar y plantar árboles en diversas regiones, promoviendo la biodiversidad, mejorando la calidad del aire y ayudando a combatir el cambio climático. Creemos que proteger la Tierra no es solo una opción, sino una responsabilidad compartida. Al unirnos en esta misión, creamos un impacto positivo que trasciende generaciones. Nuestro compromiso es acompañarte en cada paso, ofreciendo transparencia sobre los proyectos, el seguimiento de cada árbol plantado y el impacto ambiental que juntos estamos generando.
              <br />
              <br />
              Sé parte de la diferencia y únete a nuestra misión de dar vida a un planeta más verde.
            </p>
          </div>
          <div className='flex flex-col justify-center pr-20 '>
            <Image src="/logo.svg" alt="logo" width={500} height={300} />
            <div className="text-moss-green text-5xl font-Righteous">
              IBIRADOPTÁ
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-green-500 text-2xl font-bold p-22">¿Dónde plantamos nuestros árboles?</h1>
          <article>
            <Image src="/public/personas-1.jpeg" alt="personas plantando" width={400} height={200} />
            <div>
              <div>
                <div>
                  30 de octubre de 2024
                </div>
                <div>
                  Montevideo, Uruguay
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius veritatis animi, alias labore ullam, ex dolorem odio eos aperiam cupiditate expedita ipsam. Doloremque, quos maiores optio temporibus asperiores dicta.
              </p>
            </div>
          </article>
        </section>
        <section>
          <h1>Preguntas Frecuentes</h1>
          <div> ACORDIÓN </div>
        </section>
        <footer className="bg-green-700 p-4">
          Fundación Dream Team
        </footer>
      </body>
    </html>
  );
}
