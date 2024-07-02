import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Auth0ProviderProps) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;
  const navigate = useNavigate();
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Auth0 configuration is missing");
  }

  const onRedirect = (appState?: AppState, user?:User) => {
   navigate("/auth-callback")
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri, audience }}
      onRedirectCallback={onRedirect}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
