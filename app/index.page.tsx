import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className="bg-green-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo o nombre del sitio */}
          <div className="text-white text-2xl font-bold">
            Dream Tree
          </div>

          {/* Botones de iniciar sesión y registrarse */}
          <div>
            <Link to="/login" className="text-white px-4 py-2 rounded hover:bg-green-700">
              Iniciar sesión
            </Link>
            <Link to="/register" className="text-white px-4 py-2 ml-2 rounded hover:bg-emerald-700">
              Registrarse
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenido de la página principal */}
      <div className="p-8">
        <h1 className="text-3xl font-bold">Bienvenido a Dream Tree</h1>
        <p className="mt-4">Explora nuestras características y servicios.</p>
      </div>
    </div>
  );
}

export default Home;