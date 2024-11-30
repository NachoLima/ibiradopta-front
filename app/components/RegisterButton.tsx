"use client";

export default function RegisterButton() {
    const handleRegister = () => {
      const keycloakRegistrationUrl = `https://ibiradopta-keycloak-production.up.railway.app/realms/ibiradopta/protocol/openid-connect/registrations?client_id=ibiradopta-frontend&response_type=code&scope=openid&redirect_uri=https://ibiradopta.vercel.app`;
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
