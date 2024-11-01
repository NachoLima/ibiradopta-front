"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
      onClick={() => signIn("keycloak")}
      className="bg-moss-green text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Iniciar Sesión
    </button>
  );
}
