"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
      onClick={() => signIn("keycloak")}
      className="bg-moss-green text-white px-6 py-2 text-2xl w-60 h-14 rounded-full hover:bg-green-700"
    >
      Iniciar Sesión
    </button>
  );
}
