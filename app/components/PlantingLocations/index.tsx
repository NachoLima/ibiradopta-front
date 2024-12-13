"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook

interface Project {
  id: number;
  name: string;
  description: string;
  videoUrl: string; // Ruta del video
  location: string;
  price: number;
  isFinished: number; // 0 o 1
  imageUrl: string;
  images: { imageUrl: string; imageOrder: number }[]; // Lista de imágenes
}

function PlantingLocations() {
  const [projects, setProjects] = useState<Project[]>([]); // Estado para los proyectos
  const router = useRouter(); // Initialize the router hook

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_GATEWAY_URL}/projects/getall`
        );
        const data = await response.json();

        const activeProjects = data.filter(
          (project: Project) => project.isFinished === 0
        );

        setProjects(activeProjects);
      } catch (error) {
        console.error("Error al obtener proyectos:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleRedirect = () => {
    router.push("/proyectos"); // Redirect to the "/proyectos" page
  };

  return (
    <section id="PlantingLocations" className="min-h-full p-6 lg:p-10 font-Poppins">
      <h1 className="text-moss-green text-center text-3xl lg:text-4xl font-bold pb-10">
        ¿Dónde plantamos nuestros árboles?
      </h1>
      <p className="min-h-full p-6 lg:p-10 font-Poppins text-moss-green text-center">
        Acá te mostramos algunos ejemplos de locaciones cuidadosamente elegidas para revitalizar, proteger y mantener el equilibrio natural y nuestros biomas característicos.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl shadow-md bg-white"
          >
            <div className="relative h-64 w-full">
              <Image
                src={
                  project.images.find((img) => img.imageOrder === 1)?.imageUrl ||
                  project.images[0]?.imageUrl ||
                  "/default-image.jpg"
                }
                alt={`Imagen de ${project.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="bg-moss-green text-white p-8">
              <div className="flex justify-between uppercase tracking-wide text-sm font-semibold">
                <div className="text-balance">{project.name}</div>
                <div className="text-balance">{project.location}</div>
              </div>
              <p className="mt-2 line-clamp-4 pt-5">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={handleRedirect} // Attach the redirect function
          className="px-6 py-3 bg-moss-green text-white rounded-full hover:bg-green-500 transition"
        >
          Ver más proyectos
        </button>
      </div>
    </section>
  );
}

export default PlantingLocations;
