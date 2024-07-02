import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { ReactNode } from "react";

type Auth0ProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Auth0ProviderProps) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Auth0 configuration is missing");
  }

  const onRedirect = (appState?: AppState, user?:User) => {
    console.log("User", user)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirect}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
