// keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',  // The Keycloak base URL
  realm: 'ibiradopta',                // Your realm name
  clientId: 'ibiradopta',             // Your client ID
});

export const initializeKeycloak = () => {
  return keycloak.init({
    onLoad: 'check-sso', // Initialize without forcing login
    pkceMethod: 'S256',  // Use PKCE code flow for added security
  });
};

export default keycloak;
