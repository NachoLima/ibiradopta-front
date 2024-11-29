'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the interface for hardcoded projects
interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  details: string; // Additional details or description
}

function Explorar() {
  // Hardcoded data for the "Explorar" section
  const hardcodedProjects: Project[] = [
    {
      id: 1,
      name: "Proyecto Verde",
      description: "Un proyecto enfocado en plantar árboles en áreas urbanas",
      imageUrl: "/2kproject1.jpg",
      location: "Paso de los Toros, Tacuarembo",
      details:
        "Un proyecto que se llevó a cabo con éxito en 2022, enfocado en transformar áreas urbanas mediante la plantación estratégica de árboles. Durante su desarrollo, se lograron crear espacios verdes que mejoraron la calidad del aire, promovieron la biodiversidad y redujeron el calor urbano. Este proyecto dejó como legado entornos más saludables y estéticos para las comunidades beneficiadas. ¡Un paso importante hacia ciudades más verdes y sostenibles! 🌳",
    },
    {
      id: 2,
      name: "Recuperación bosquesito",
      description: "Reforestación en áreas afectadas por incendios forestales.",
      imageUrl: "/2kproject2.jpg",
      location: "Pepe Nuñez, Salto",
      details:
        "Un proyecto culminado en 2021, dedicado a la restauración de un pequeño bosque urbano que había sufrido años de deterioro. Durante su ejecución, se reforestó el área con especies nativas, se implementaron estrategias para mejorar la calidad del suelo y se promovió la conservación de la biodiversidad local. Este esfuerzo comunitario transformó el espacio en un refugio natural para la fauna y un lugar de esparcimiento para las personas. ¡Un ejemplo inspirador de cómo devolverle la vida a nuestros ecosistemas! 🌱",
    },
    {
      id: 3,
      name: "Proyecto Fundacional Ibirapitá",
      description: "Creación de jardines tropicales para proteger especies nativas.",
      imageUrl: "/hdibirapitas.jpg",
      location: "Cerro Chato, Durazno",
      details:
        "El primer proyecto realizado en 2021, marcando el inicio de nuestra misión por un futuro más verde. Este proyecto se centró en la plantación de árboles ibirapitá, símbolo de resiliencia y vida, en diversas regiones. Durante su ejecución, se trabajó junto a comunidades locales para fomentar la conciencia ambiental y sentar las bases de un impacto duradero en el ecosistema. ¡El comienzo de un sueño colectivo por un planeta más saludable y sostenible! 🌳",
    },
  ];
  

  const galleryImages = [
    "/planta2.jpg",
    "/hdplanting.jpg",
    "/ibirapita.png",    
    "/planta3.jpg",
    "/planta4.jpg",
    "/planta1.jpg",
    "/ceibo.jpg",
    "/hdplanting2.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Currently selected project
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryNext = () => {
    setCurrentGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleGalleryPrev = () => {
    setCurrentGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === hardcodedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? hardcodedProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="relative max-w-full mx-auto px-5 py-20"
      style={{ backgroundColor: '#f8fdf8' }}
    >
      {/* Carousel of Cards */}
      <div className="flex justify-center items-center gap-8 overflow-hidden transition-transform duration-500 relative">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-moss-green transition"
        >
          &lt;
        </button>

        <div className="flex gap-8 transition-transform duration-2000">
          {hardcodedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative flex flex-col items-center shadow-lg cursor-pointer transition-all duration-100 bg-white rounded-xl p-6 ${index === activeIndex
                ? 'w-[620px] h-[350px] scale-100 z-10 border-2 border-moss-green shadow-xl'
                : 'w-[500px] h-[380px] scale-50 opacity-50 border-moss-green'
                }`}
              onClick={() => handleCardClick(index)}
            >
              <h2 className="text-lg font-bold text-center mb-4 text-moss-green">
                {project.name}
              </h2>
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-gray-600 mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          &gt;
        </button>
      </div>

      {/* Details Section */}
      <div className="mt-16 bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-4 text-moss-green text-center">
          {hardcodedProjects[activeIndex].name}
        </h1>
        <p className="text-gray-700 mb-4 text-center">
          {hardcodedProjects[activeIndex].details}
        </p>
        <p className="text-gray-700 mb-4 text-center">
          <strong>Ubicación:</strong> {hardcodedProjects[activeIndex].location}
        </p>
      </div>

      {/* Gallery Section */}
      <h1 className="text-3xl font-bold text-moss-green mb-6 text-center flex justify-center mt-10">
          Galería de imagenes
        </h1>
      <div className="mt-16 flex flex-col items-center">
        <div className="relative w-[800px] h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={galleryImages[currentGalleryIndex]}
            alt={`Gallery Image ${currentGalleryIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={handleGalleryPrev}
            className="bg-moss-green text-white px-4 py-2 rounded-full hover:bg-moss-green transition"
          >
            Anterior
          </button>
          <button
            onClick={handleGalleryNext}
            className="bg-moss-green text-white px-4 py-2 rounded-full hover:bg-moss-green transition"
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* Why Plant Section */}
      <div className="mt-16 bg-white rounded-lg shadow-lg p-10">
  <h1 className="text-3xl font-bold text-moss-green mb-6 text-center">
    ¿Por qué plantar árboles autóctonos del Uruguay?
  </h1>
  <p className="text-gray-700 mb-4 text-justify">
    Los árboles autóctonos del Uruguay, como el ceibo y el ibirapitá,
    son fundamentales para mantener el equilibrio de los ecosistemas
    locales. Su presencia contribuye a la conservación de la biodiversidad,
    ofreciendo refugio y alimento para la fauna autóctona. Además,
    ayudan a combatir la erosión del suelo, mejorar la calidad del aire y
    capturar dióxido de carbono, contribuyendo significativamente a
    mitigar el cambio climático.
  </p>
  <p className="text-gray-700 mb-4 text-justify">
    En el ámbito social, los proyectos de reforestación con especies
    autóctonas fomentan la participación comunitaria y fortalecen la
    conexión entre las personas y su entorno natural. Estos árboles,
    adaptados al clima y al suelo de la región, requieren menos recursos
    para prosperar, haciendo que su plantación sea más sostenible y
    beneficiosa a largo plazo.
  </p>
  <div className="flex justify-center mt-16 gap-10">
    <Image
      src="/puma.jpg"
      alt="Tree 1"
      width={600}
      height={500}
      className="rounded-lg shadow-lg"
    />
  </div>
  <div className="flex justify-center mt-10"> {/* Added margin-top for separation */}
    <Link
      href="/proyectos"
      className="px-6 py-3 bg-moss-green text-white rounded-full hover:bg-green-700 transition"
    >
      Conoce nuestros proyectos actuales
    </Link>
  </div>
</div>

    </section>
  );
}

export default Explorar;
