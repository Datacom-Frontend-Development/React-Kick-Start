import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { Home } from "@features/home";
import { Login } from "@features/login";
import {
  PrivateLayout,
  PublicLayout,
  RootLayout,
} from "@features/shared/layout";
import { RolesAndPermission } from "@features/users/roles-and-permission";
import { ManageUsers } from "@features/users/user-management";
import { UserProfilePage } from "@features/users/user-profile";
import { msalConfig } from "@infrastructure/auth/authConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

/*
  - <MSAL Login>
    - <React query provider>
      - <React Router>
        - <Private Routes>
        - <Public Routes>
 */

const msalInstance = new PublicClientApplication(msalConfig);

export const App = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="app" element={<PrivateLayout />}>
                <Route index element={<Home />} />
                <Route path="users" element={<ManageUsers />} />
                <Route
                  path="roles-and-permissions"
                  element={<RolesAndPermission />}
                />
                <Route path="profile" element={<UserProfilePage />} />
              </Route>

              <Route element={<PublicLayout />}>
                <Route index element={<Login />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MsalProvider>
  );
};
