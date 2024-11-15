"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function RegisterButton() {
    const handleRegister = () => { //CHANGE HARDCODED LINK TO AN EV
      const keycloakRegistrationUrl = `https://keycloak-production-b55a.up.railway.app/realms/ibiradopta/clients-registrations/openid-connect/registrations?client_id=front&response_type=code&scope=openid&redirect_uri=https://ibiradopta-front-qn87qpj2n-ignacio-limas-projects-d1b10230.vercel.app/`;
      console.log(+"/n url"+ keycloakRegistrationUrl)
      window.location.href = keycloakRegistrationUrl;
    };
    

    return (
      <button
        onClick={handleRegister}
        className="bg-moss-green text-white px-6 py-2 ml-2 text-2xl w-60 h-16 rounded-full hover:bg-green-700"
      >
        Registrarme
      </button>
    );
  }
