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
    <div className="flex items-center space-x-4">
      <button
        onClick={() => federatedLogout()}
        className="bg-moss-green text-white px-6 py-2 text-2xl w-60 h-14 rounded-full hover:bg-green-700"
      >
        Cerrar sesión
      </button>
      <div className="flex items-center justify-center w-12 h-12 bg-moss-green text-white rounded-full">
        {initials}
      </div>
    </div>
  );
}