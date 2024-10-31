import { ReactNode } from 'react';
import type { Metadata } from 'next'
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';

//CORREGIR COSAS HARDCODEADAS COMO LOS ARTICLES, Y MODULARIZAR TODO EN DISTINTOS COMPONENTES
// PARA QUE SEA MÁS FÁCIL DE LEER Y DE MANTENER. LLAMARLOS EN ESTE LAYOUT.

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
        <section className='h-screen p-10 '>
          <h1 className="text-moss-green text-center text-3xl font-bold pb-10">¿Dónde plantamos nuestros árboles?</h1>
          <div className='flex'>
          <article className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
            <Image src="/personas-1.jpeg" alt="personas plantando" width={450} height={200} className='object-cover'/>
            <div className='p-8 bg-moss-green'>
              <div className=" flex justify-between uppercase tracking-wide text-sm text-white font-semibold">
                <div>
                  30 de octubre de 2024
                </div>
                <div>
                  Montevideo, Uruguay
                </div>
              </div>
              <p className="mt-2 text-white pt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius veritatis animi, alias labore ullam, ex dolorem odio eos aperiam cupiditate expedita ipsam. Doloremque, quos maiores optio temporibus asperiores dicta.
              </p>
            </div>
          </article>
          <article className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
            <Image src="/personas-2.jpg" alt="personas plantando" width={450} height={200} className='object-cover'/>
            <div className='p-8 bg-moss-green'>
              <div className=" flex justify-between uppercase tracking-wide text-sm text-white font-semibold">
                <div>
                  30 de octubre de 2024
                </div>
                <div>
                  Montevideo, Uruguay
                </div>
              </div>
              <p className="mt-2 text-white pt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius veritatis animi, alias labore ullam, ex dolorem odio eos aperiam cupiditate expedita ipsam. Doloremque, quos maiores optio temporibus asperiores dicta.
              </p>
            </div>
          </article>
          <article className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
            <Image src="/personas-3.png" alt="personas plantando" width={450} height={200} className='object-cover'/>
            <div className='p-8 bg-moss-green'>
              <div className=" flex justify-between uppercase tracking-wide text-sm text-white font-semibold">
                <div>
                  30 de octubre de 2024
                </div>
                <div>
                  Montevideo, Uruguay
                </div>
              </div>
              <p className="mt-2 text-white pt-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius veritatis animi, alias labore ullam, ex dolorem odio eos aperiam cupiditate expedita ipsam. Doloremque, quos maiores optio temporibus asperiores dicta.
              </p>
            </div>
          </article>
          </div>
        </section>
        <section id='FAQ' className='h-screen'>
          <h1 className='text-moss-green text-4xl text-center font-bold'>Preguntas Frecuentes</h1>
          <div> ACORDIÓN </div>
        </section>
        <footer className="bg-moss-green p-8 text-center">
        © Fundación Dream Team
        </footer>
      </body>
    </html>
  );
}
