"use client";
import { signIn, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export default function SessionGuard({ children }: { children: ReactNode }) {
  const { data : session, status } = useSession();
  
  // useEffect(() => {
  //   if (data?.error === "RefreshAccessTokenError") {
  //     signIn("keycloak");
  //   }
  // }, [data]);

  useEffect(() => {
    if (status === "loading") {
      return; // No hacer nada mientras se está cargando la sesión
    }

    // if (status === "unauthenticated") {
    //   // Si no hay sesión y no estás autenticado, redirigir a la página de inicio de sesión o a donde desees
    //   signIn("keycloak");
    // }

    if (session?.error === "RefreshAccessTokenError") {
      signIn("keycloak");
    }

    // Si el usuario está autenticado, podrías manejar la lógica para mostrar contenido específico
    // si es necesario.
  }, [session, status]);

  return <>{children}</>;
}