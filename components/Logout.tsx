"use client";
import { signOut } from "next-auth/react";

// export default function Logout() {
//   return (
//     <button
//       onClick={() => signOut()}
//       className="bg-moss-green text-white px-4 py-2 rounded hover:bg-green-700"
//     >
//       Cerrar sesión
//     </button>
//   );
// }
export default function Logout() {
  const handleLogout = async () => {
    // Llama a la API de logout de Keycloak en segundo plano
    // await fetch(
    //   `http://localhost:8080/realms/ibiradopta/protocol/openid-connect/logout`,
    //   {
    //     method: "POST",
    //     credentials: "include", // Importante para enviar cookies de sesión
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: new URLSearchParams({
    //       client_id: "ibiradopta-frontend",
    //     }),
    //   }
    // );
    try {
      await fetch("/api/auth/logout", { method: "GET" });
    } catch (error) {
      console.error("Failed to logout:", error);
    }
    // Cierra sesión en NextAuth y actualiza el estado de sesión localmente
    await signOut({ redirect: false });

    // Opcional: redirige al usuario a la página de inicio o actualiza el botón
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-moss-green text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Cerrar sesión
    </button>
  );
}
