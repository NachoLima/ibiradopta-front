"use client";
import federatedLogout from "../utils/federatedLogout";
import { useSession } from "next-auth/react";

const getUserInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
};


export default function Logout() {

  const { data: session } = useSession();

  // Extrae el nombre y calcula las iniciales
  const userName = session?.user?.name || "User";
  const initials = getUserInitials(userName);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => federatedLogout()}
        className="bg-moss-green text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Cerrar sesión
      </button>
      <div className="flex items-center justify-center w-8 h-8 bg-moss-green text-white rounded-full">
        {initials}
      </div>
    </div>
  );
}