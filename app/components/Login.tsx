"use client";
import { signIn, useSession } from "next-auth/react";

export default function LoginButton() {
  const handleLogin = () => {
    const keycloakRegistrationUrl = `http://localhost:8080/realms/ibiradopta/`;
    console.log(+"/n url"+ keycloakRegistrationUrl)
    window.location.href = keycloakRegistrationUrl;
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-moss-green text-white px-6 py-2 text-2xl w-60 h-16 rounded-full hover:bg-green-700"
    >
      Iniciar Sesión
    </button>
  );
}
