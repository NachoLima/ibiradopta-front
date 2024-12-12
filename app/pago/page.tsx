"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

// Interface for project data
interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  endDate: string;
  isFinished: number;
  price: number;
  images: { imageUrl: string; imageOrder: number }[];
}

// Component for fetching and rendering project data
function ApoyarCard() {
  const { data: session, status } = useSession();
  const [cantidad, setCantidad] = useState(1); // Quantity of trees
  const [project, setProject] = useState<Project | null>(null); // Project state
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the project ID from the URL parameters
  const id = searchParams.get("proyecto");

  // Fetch project data
  useEffect(() => {
    if (!id) {
      console.error("No se proporcionó un ID válido en la URL.");
      return;
    }

    const fetchProject = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_GATEWAY_URL}/projects/id/${id}`);
        if (!response.ok) {
          throw new Error(`Error al obtener el proyecto: ${response.status}`);
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error al cargar el proyecto:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!session || status === "loading") {
    return <div>Cargando...</div>;
  }

  if (!project) {
    return <div>Cargando datos del proyecto...</div>;
  }

  // Calculate the total based on the quantity and price per tree
  const total = cantidad * project.price;

  // Handle quantity change
  const handleCantidadChange = (type: string) => {
    setCantidad((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  // Create payment preference
  const createPreference = async (userId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GATEWAY_URL}/payments/createpreference?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.accessToken}`,
          },
          body: JSON.stringify([
            {
              id: project.id,
              name: project.name,
              description: project.description,
              imageUrl: project.imageUrl,
              location: project.location,
              quantity: cantidad,
              price: project.price,
            },
          ]),
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la respuesta del servidor: ${response.status}`);
      }

      const data = await response.json();
      return data; // Assuming backend returns a URL
    } catch (error) {
      console.error("Error al crear la preferencia:", error);
    }
  };

  // Handle redirection after creating payment preference
  const handleRedireccion = async () => {
    if (!session?.user?.id) {
      alert("No se pudo obtener el ID del usuario. Por favor, inicia sesión.");
      return;
    }

    const url = await createPreference(session.user.id);
    if (url) {
      router.push(url.preferenceUrl); // Redirect to the URL obtained from the backend
    }
  };

  // Get the main image for the project
  const selectedImage =
    project.images.find((img) => img.imageOrder === 1)?.imageUrl ||
    project.images[0]?.imageUrl ||
    "/default-image.jpg";

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4"
      style={{ backgroundImage: "url('/fondo-hojas.png')" }}
    >
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold text-center mb-6">{project.name}</h2>
        <p className="text-sm mb-4">{project.description}</p>
        <img
          src={selectedImage}
          alt={project.name}
          className="w-full h-40 object-cover mb-4 rounded-md"
        />
        <p className="mb-2">
          <strong>Ubicación:</strong> {project.location}
        </p>
        <p className="mb-4">
          <strong>Precio por árbol:</strong> ${project.price}
        </p>

        {/* Quantity Selector */}
        <div className="mb-6">
          <p className="mb-2">Seleccione cantidad de árboles a adoptar</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleCantidadChange("decrement")}
              className="px-3 py-2 bg-gray-700 rounded-md"
            >
              -
            </button>
            <span className="text-xl">{cantidad}</span>
            <button
              onClick={() => handleCantidadChange("increment")}
              className="px-3 py-2 bg-gray-700 rounded-md"
            >
              +
            </button>
          </div>
        </div>

        {/* Total Display */}
        <p className="mb-6">
          <strong>Total:</strong> ${total}
        </p>

        {/* Payment Button */}
        <button
          className="w-full px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700"
          onClick={handleRedireccion}
        >
          Ir a Pagar
        </button>

        {/* Back Button */}
        <button
          className="w-full px-6 py-3 bg-gray-600 text-white rounded-full mt-4 hover:bg-gray-700"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

// Suspense wrapper for the page
export default function PagoPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ApoyarCard />
    </Suspense>
  );
}
