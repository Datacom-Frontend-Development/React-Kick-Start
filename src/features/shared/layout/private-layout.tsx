import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { Navigation } from "@features/shared/navigation";
import { loginRequest } from "@infrastructure/auth/authConfig";
import { Outlet } from "react-router-dom";
import { AppLayout } from "./app-layout";

export const PrivateLayout = () => {
  const authRequest = {
    ...loginRequest,
  };

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
    >
      <AppLayout>
        <Navigation />
        <Outlet />
      </AppLayout>
    </MsalAuthenticationTemplate>
  );
};
