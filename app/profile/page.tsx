"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return <div>No estás autenticado. Por favor, inicia sesión.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar perfil</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={session.user?.name || ""}
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            defaultValue={session.user?.lastName || ""}
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={session.user?.email || ""}
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={session.user?.password || ""}
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Direccion</label>
          <input
            type="text"
            id="direction"
            name="direction"
            defaultValue={session.user?.direction || ""}
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        {/* Puedes agregar más campos aquí para editar los datos del usuario */}
        <button
          type="submit"
          className="bg-moss-green text-white px-6 py-2 rounded-full hover:bg-green-700"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}