"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function RegisterButton() {
    const handleRegister = () => {
      const keycloakRegistrationUrl = `http://localhost:8080/realms/ibiradopta/protocol/openid-connect/registrations?client_id=ibiradopta-frontend&response_type=code&scope=openid&redirect_uri=http://localhost:3000`;
      console.log(+"/n url"+ keycloakRegistrationUrl)
      window.location.href = keycloakRegistrationUrl;
    };

    return (
      <button
        onClick={handleRegister}
        className="bg-moss-green text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Registrarme
      </button>
    );
  }