import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import jwt_decode from "jwt-decode";

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.IBIRADOPTA_FRONTEND_CLIENT_ID,
      clientSecret: process.env.IBIRADOPTA_FRONTEND_CLIENT_SECRET,
      issuer: process.env.AUTH_ISSUER,
    }),
  ],

//   callbacks: {
//     async session({ session, user, token }) {
//       return session;
//     },

//     async jwt({ token, account, profile }) {
//       const nowTimeStamp = Math.floor(Date.now() / 1000);

//       if (account) {
//         token.decode = jwt_decode(account.accessToken);
//         token.accessToken = account.access_token;
//         token.refreshToken = account.refresh_token;
//         token.idToken = account.id_token;
//         token.expiresAt = account.expires_at;
//       } else if (nowTimeStamp < token.expiresAt) {
//         // Token still valid
//         return token;
//       } else {
//         // Token expired
//         console.log("Token expired");
//         return token;
//       }
//     },
//   },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
